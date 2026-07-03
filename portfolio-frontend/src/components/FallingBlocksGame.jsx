import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import FloatingCard from './FloatingCard';

export default function FallingBlocksGame() {
  const canvasRef = useRef(null);
  const gameRunningRef = useRef(false);
  const rafRef = useRef(null);

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    () => parseInt(localStorage.getItem('blockGameBestScore') || '0')
  );
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameKey, setGameKey] = useState(0);

  const startGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    const PADDLE_W = 70;
    const PADDLE_H = 10;
    const BLOCK_W = 36;
    const BLOCK_H = 36;

    let paddle = { x: W / 2 - PADDLE_W / 2, y: H - 24 };
    let blocks = [];
    let currentScore = 0;
    let frameCount = 0;
    let spawnRate = 2;
    let fallSpeed = 2.5;

    const keys = {};

    const onKeyDown = (e) => { keys[e.key] = true; };
    const onKeyUp = (e) => { keys[e.key] = false; };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    gameRunningRef.current = true;

    const NEON_COLORS = ['#00f5ff', '#ff006e', '#b537f2', '#39ff14'];

    const drawBackground = () => {
      ctx.fillStyle = 'rgba(10, 14, 39, 0.25)';
      ctx.fillRect(0, 0, W, H);
    };

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(0, 245, 255, 0.03)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < W; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
    };

    const drawPaddle = () => {
      const grad = ctx.createLinearGradient(paddle.x, 0, paddle.x + PADDLE_W, 0);
      grad.addColorStop(0, '#ff006e');
      grad.addColorStop(0.5, '#00f5ff');
      grad.addColorStop(1, '#b537f2');
      ctx.shadowColor = '#00f5ff';
      ctx.shadowBlur = 25;
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(paddle.x, paddle.y, PADDLE_W, PADDLE_H, 4);
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const loop = () => {
      if (!gameRunningRef.current) return;

      drawBackground();
      drawGrid();

      // Move paddle
      const speed = 7;
      if (keys['ArrowLeft'] || keys['a']) paddle.x = Math.max(0, paddle.x - speed);
      if (keys['ArrowRight'] || keys['d']) paddle.x = Math.min(W - PADDLE_W, paddle.x + speed);

      drawPaddle();

      // Spawn blocks
      const spawnInterval = Math.max(15, Math.ceil(60 / spawnRate));
      if (frameCount % spawnInterval === 0) {
        const color = NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)];
        blocks.push({
          x: Math.random() * (W - BLOCK_W),
          y: -BLOCK_H,
          color,
          rotation: 0,
        });
      }

      // Update + draw blocks
      const surviving = [];
      for (const block of blocks) {
        block.y += fallSpeed;
        block.rotation += 1;

        // Draw block
        ctx.save();
        ctx.translate(block.x + BLOCK_W / 2, block.y + BLOCK_H / 2);
        ctx.rotate((block.rotation * Math.PI) / 180);
        ctx.shadowColor = block.color;
        ctx.shadowBlur = 20;
        ctx.strokeStyle = block.color;
        ctx.lineWidth = 2;
        ctx.strokeRect(-BLOCK_W / 2, -BLOCK_H / 2, BLOCK_W, BLOCK_H);
        ctx.fillStyle = block.color + '33';
        ctx.fillRect(-BLOCK_W / 2, -BLOCK_H / 2, BLOCK_W, BLOCK_H);
        ctx.shadowBlur = 0;
        ctx.restore();

        // Collision with paddle
        const bLeft = block.x;
        const bRight = block.x + BLOCK_W;
        const bBottom = block.y + BLOCK_H;
        const pLeft = paddle.x;
        const pRight = paddle.x + PADDLE_W;
        const pTop = paddle.y;

        if (bBottom >= pTop && block.y <= pTop + PADDLE_H && bRight >= pLeft && bLeft <= pRight) {
          // Hit!
          gameRunningRef.current = false;
          window.removeEventListener('keydown', onKeyDown);
          window.removeEventListener('keyup', onKeyUp);

          // Flash effect
          ctx.fillStyle = 'rgba(255, 0, 110, 0.3)';
          ctx.fillRect(0, 0, W, H);

          const finalScore = currentScore;
          setScore(finalScore);
          setGameOver(true);

          setBestScore((prev) => {
            const newBest = Math.max(prev, finalScore);
            localStorage.setItem('blockGameBestScore', newBest.toString());
            return newBest;
          });

          cancelAnimationFrame(rafRef.current);
          return;
        }

        if (block.y < H) surviving.push(block);
      }
      blocks = surviving;

      currentScore++;
      setScore(currentScore);

      // Increase difficulty
      spawnRate = Math.min(6, 2 + currentScore / 400);
      fallSpeed = Math.min(7, 2.5 + currentScore / 800);

      frameCount++;
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      gameRunningRef.current = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [gameKey]);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      const cleanup = startGame();
      return cleanup;
    }
  }, [gameStarted, gameKey, startGame, gameOver]);

  const handleStart = () => {
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
    setGameKey((k) => k + 1);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-2xl mx-auto">
      <FloatingCard glow="cyan" className="w-full border border-neon-cyan/30">
        {/* Scoreboard */}
        <div className="flex justify-between items-center mb-5">
          <div>
            <p className="text-text-muted text-xs font-mono uppercase tracking-widest">Score</p>
            <p className="text-4xl font-bold neon-text font-display">{score}</p>
          </div>
          <div className="text-center">
            <p className="text-text-muted text-xs font-mono uppercase tracking-widest">Controls</p>
            <p className="text-xs text-neon-cyan/70 font-mono">← → or A D</p>
          </div>
          <div className="text-right">
            <p className="text-text-muted text-xs font-mono uppercase tracking-widest">Best</p>
            <p className="text-4xl font-bold neon-text pink font-display">{bestScore}</p>
          </div>
        </div>

        {/* Canvas */}
        <div className="relative">
          <canvas
            ref={canvasRef}
            width={580}
            height={400}
            className="w-full rounded-lg border border-neon-cyan/30"
            style={{ background: '#0a0e27' }}
          />

          {/* Overlay before start */}
          {!gameStarted && !gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-space-black/70 rounded-lg backdrop-blur-sm">
              <p className="text-neon-cyan font-display text-3xl font-bold mb-2">COSMIC DODGE</p>
              <p className="text-text-muted font-mono text-sm mb-6">Dodge the falling blocks!</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStart}
                className="px-8 py-3 font-bold font-mono rounded-lg text-space-black"
                style={{ background: 'linear-gradient(90deg, #00f5ff, #b537f2)' }}
              >
                ▶ Launch Game
              </motion.button>
            </div>
          )}
        </div>
      </FloatingCard>

      {/* Game Over Modal */}
      {gameOver && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-space-black/85 backdrop-blur-sm z-50 px-4"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <FloatingCard glow="pink" className="text-center p-8 border border-neon-pink/50 max-w-sm w-full">
              <p className="text-4xl font-bold font-display neon-text pink mb-1">GAME OVER</p>
              <p className="text-text-muted font-mono text-sm mb-5">Your ship was hit!</p>

              <div className="flex justify-center gap-12 mb-8">
                <div>
                  <p className="text-text-muted text-xs font-mono">SCORE</p>
                  <p className="text-3xl font-bold neon-text font-display">{score}</p>
                </div>
                <div>
                  <p className="text-text-muted text-xs font-mono">BEST</p>
                  <p className="text-3xl font-bold neon-text pink font-display">{bestScore}</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStart}
                className="px-8 py-3 font-bold font-mono rounded-lg text-space-black w-full"
                style={{ background: 'linear-gradient(90deg, #ff006e, #b537f2)' }}
              >
                ↺ Play Again
              </motion.button>
            </FloatingCard>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

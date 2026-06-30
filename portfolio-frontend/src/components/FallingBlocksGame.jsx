import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

export default function FallingBlocksGame() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    parseInt(localStorage.getItem('blockGameBestScore'), 10) || 0,
  );
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameKey, setGameKey] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !gameStarted || gameOver) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const paddleWidth = 60;
    const paddleHeight = 10;
    const blockWidth = 40;
    const blockHeight = 40;

    let paddle = { x: width / 2 - paddleWidth / 2, y: height - 20 };
    let blocks = [];
    let currentScore = 0;
    let spawnRate = 2;
    let fallSpeed = 2;
    let frameCount = 0;
    let gameRunning = true;

    const keys = { ArrowLeft: false, ArrowRight: false, a: false, d: false };

    const handleKeyDown = (e) => {
      if (['ArrowLeft', 'ArrowRight', 'a', 'd'].includes(e.key)) {
        keys[e.key] = true;
        // Prevent default scrolling for arrow keys
        if (['ArrowLeft', 'ArrowRight'].includes(e.key)) {
          e.preventDefault();
        }
      }
    };

    const handleKeyUp = (e) => {
      if (['ArrowLeft', 'ArrowRight', 'a', 'd'].includes(e.key)) {
        keys[e.key] = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    window.addEventListener('keyup', handleKeyUp);

    const gameLoop = () => {
      if (!gameRunning) return;

      ctx.fillStyle = 'rgba(15, 23, 42, 0.2)';
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(6, 214, 255, 0.5)';
      ctx.lineWidth = 2;
      ctx.strokeRect(0, 0, width, height);

      const paddleSpeed = 7;
      if (keys.ArrowLeft || keys.a) paddle.x -= paddleSpeed;
      if (keys.ArrowRight || keys.d) paddle.x += paddleSpeed;

      paddle.x = Math.max(0, Math.min(paddle.x, width - paddleWidth));

      ctx.fillStyle = '#06d6ff';
      ctx.shadowColor = 'rgba(6, 214, 255, 0.8)';
      ctx.shadowBlur = 15;
      ctx.fillRect(paddle.x, paddle.y, paddleWidth, paddleHeight);
      ctx.shadowBlur = 0;

      if (frameCount % Math.ceil(60 / spawnRate) === 0) {
        blocks.push({
          x: Math.random() * (width - blockWidth),
          y: -blockHeight,
          width: blockWidth,
          height: blockHeight,
        });
      }

      blocks = blocks.filter((block) => {
        block.y += fallSpeed;

        ctx.fillStyle = 'rgba(6, 214, 255, 0.7)';
        ctx.fillRect(block.x, block.y, block.width, block.height);

        if (
          block.y + block.height >= paddle.y &&
          block.y <= paddle.y + paddleHeight &&
          block.x + block.width >= paddle.x &&
          block.x <= paddle.x + paddleWidth
        ) {
          gameRunning = false;
          setGameOver(true);
          return false;
        }

        return block.y < height;
      });

      currentScore++;
      setScore(currentScore);

      spawnRate = Math.min(5, 2 + currentScore / 500);
      fallSpeed = Math.min(6, 2 + currentScore / 1000);

      frameCount++;
      if (gameRunning) requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      gameRunning = false;
    };
  }, [gameStarted, gameKey, gameOver]);

  // Initial render for the canvas before the game starts
  useEffect(() => {
    if (!gameStarted && !gameOver && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const width = canvas.width;
      const height = canvas.height;
      
      ctx.fillStyle = 'rgba(15, 23, 42, 0.2)';
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(6, 214, 255, 0.5)';
      ctx.lineWidth = 2;
      ctx.strokeRect(0, 0, width, height);
    }
  }, [gameStarted, gameOver]);

  const handleStart = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setGameKey(prev => prev + 1);
  };

  const handleRestart = () => {
    const newBest = Math.max(bestScore, score);
    setBestScore(newBest);
    localStorage.setItem('blockGameBestScore', newBest.toString());
    setScore(0);
    setGameOver(false);
    setGameKey(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full relative">
      <GlassCard className="w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-text-secondary text-sm">Current Score</p>
            <p className="text-3xl font-bold glow-text">{score}</p>
          </div>
          <div>
            <p className="text-text-secondary text-sm">Best Score</p>
            <p className="text-3xl font-bold text-purple-400">{bestScore}</p>
          </div>
        </div>

        <div className="relative">
          <motion.canvas
            ref={canvasRef}
            width={600}
            height={400}
            className="w-full border-2 border-glass-border rounded-lg bg-gradient-to-b from-bg-primary to-bg-secondary"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {!gameStarted && !gameOver && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg backdrop-blur-[2px]">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStart}
                className="px-8 py-3 bg-accent hover:bg-accent-dark text-bg-primary font-bold rounded-lg shadow-[0_0_15px_rgba(6,214,255,0.5)]"
              >
                Start Game
              </motion.button>
            </div>
          )}
        </div>

        <p className="text-text-secondary text-center text-sm mt-4">
          Use Arrow Keys or A/D to move • Avoid the falling blocks
        </p>
      </GlassCard>

      {gameOver && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur z-50 rounded-lg"
        >
          <GlassCard className="text-center p-8">
            <h2 className="text-4xl font-bold font-display glow-text mb-4">Game Over!</h2>
            <p className="text-2xl text-text-secondary mb-2">Score: {score}</p>
            <p className="text-lg text-text-secondary mb-6">Best: {bestScore}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRestart}
              className="px-8 py-3 bg-accent hover:bg-accent-dark text-bg-primary font-bold rounded-lg"
            >
              Play Again
            </motion.button>
          </GlassCard>
        </motion.div>
      )}
    </div>
  );
}

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ModernCard from './ModernCard';

export default function FallingBlocksGame() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    parseInt(localStorage.getItem('blockGameBestScore')) || 0
  );
  const [gameOver, setGameOver] = useState(false);
  const [gameActive, setGameActive] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

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
      }
    };

    const handleKeyUp = (e) => {
      if (['ArrowLeft', 'ArrowRight', 'a', 'd'].includes(e.key)) {
        keys[e.key] = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const gameLoop = () => {
      if (!gameRunning) return;

      ctx.fillStyle = '#0f0f0f';
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = '#2d9b7f';
      ctx.lineWidth = 2;
      ctx.strokeRect(0, 0, width, height);

      const paddleSpeed = 7;
      if (keys['ArrowLeft'] || keys['a']) paddle.x -= paddleSpeed;
      if (keys['ArrowRight'] || keys['d']) paddle.x += paddleSpeed;
      paddle.x = Math.max(0, Math.min(paddle.x, width - paddleWidth));

      ctx.fillStyle = '#2d9b7f';
      ctx.fillRect(paddle.x, paddle.y, paddleWidth, paddleHeight);

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

        ctx.fillStyle = '#1a1a1a';
        ctx.strokeStyle = '#2d9b7f';
        ctx.lineWidth = 1;
        ctx.fillRect(block.x, block.y, block.width, block.height);
        ctx.strokeRect(block.x, block.y, block.width, block.height);

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

    if (gameActive) {
      gameLoop();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      gameRunning = false;
    };
  }, [gameActive]);

  const handleRestart = () => {
    const newBest = Math.max(bestScore, score);
    setBestScore(newBest);
    localStorage.setItem('blockGameBestScore', newBest.toString());
    setScore(0);
    setGameOver(false);
    setGameActive((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <ModernCard className="w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xs text-text-accent font-mono mb-2">SCORE</p>
            <p className="text-3xl font-display font-bold text-accent-primary">{score}</p>
          </div>
          <div>
            <p className="text-xs text-text-accent font-mono mb-2">BEST</p>
            <p className="text-3xl font-display font-bold text-text-light">{bestScore}</p>
          </div>
        </div>

        <motion.canvas
          ref={canvasRef}
          width={600}
          height={400}
          className="w-full border border-border-dark rounded-lg"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <p className="text-xs text-text-accent text-center font-mono mt-4">
          ARROW KEYS OR A/D • DODGE BLOCKS
        </p>
      </ModernCard>

      {gameOver && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-dark-bg/80 backdrop-blur-sm z-50"
        >
          <ModernCard className="text-center p-8">
            <h2 className="text-4xl font-display font-bold text-text-light mb-4">Game Over</h2>
            <p className="text-2xl text-accent-primary font-mono mb-2">Score: {score}</p>
            <p className="text-lg text-text-muted font-mono mb-8">Best: {bestScore}</p>
            <motion.button
              whileHover={{ backgroundColor: '#4fb3a3' }}
              onClick={handleRestart}
              className="px-8 py-3 bg-accent-primary hover:bg-accent-light text-dark-bg font-semibold rounded-lg"
            >
              Play Again
            </motion.button>
          </ModernCard>
        </motion.div>
      )}
    </div>
  );
}

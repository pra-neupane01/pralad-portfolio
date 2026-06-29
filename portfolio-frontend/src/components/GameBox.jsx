import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const width = 520;
const height = 320;
const playerWidth = 54;
const playerHeight = 16;
const blockSize = 24;

function createBlock(speed) {
  return {
    id: `${Date.now()}-${Math.random()}`,
    x: Math.random() * (width - blockSize),
    y: -blockSize,
    speed,
  };
}

export default function GameBox() {
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [playerX, setPlayerX] = useState(width / 2 - playerWidth / 2);
  const [blocks, setBlocks] = useState([]);
  const [score, setScore] = useState(0);
  const keysRef = useRef({ left: false, right: false });

  const resetGame = useCallback(() => {
    setPlayerX(width / 2 - playerWidth / 2);
    setBlocks([]);
    setScore(0);
    setGameOver(false);
    setRunning(true);
  }, []);

  useEffect(() => {
    const keyDown = (event) => {
      if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") keysRef.current.left = true;
      if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") keysRef.current.right = true;
    };
    const keyUp = (event) => {
      if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") keysRef.current.left = false;
      if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") keysRef.current.right = false;
    };

    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);
    return () => {
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    };
  }, []);

  useEffect(() => {
    if (!running || gameOver) return undefined;

    const interval = window.setInterval(() => {
      setScore((current) => current + 1);
      setPlayerX((current) => {
        const movement = keysRef.current.left ? -16 : keysRef.current.right ? 16 : 0;
        return Math.max(0, Math.min(width - playerWidth, current + movement));
      });

      setBlocks((currentBlocks) => {
        const speed = 3 + Math.min(8, Math.floor(score / 120));
        const nextBlocks = currentBlocks
          .map((block) => ({ ...block, y: block.y + block.speed }))
          .filter((block) => block.y < height + blockSize);

        if (Math.random() < 0.1 + Math.min(0.18, score / 1400)) {
          nextBlocks.push(createBlock(speed));
        }

        return nextBlocks;
      });
    }, 32);

    return () => window.clearInterval(interval);
  }, [gameOver, running, score]);

  useEffect(() => {
    if (!running || gameOver) return;

    const playerY = height - 42;
    const hit = blocks.some((block) => {
      const overlapsX = block.x < playerX + playerWidth && block.x + blockSize > playerX;
      const overlapsY = block.y < playerY + playerHeight && block.y + blockSize > playerY;
      return overlapsX && overlapsY;
    });

    if (hit) {
      setGameOver(true);
      setRunning(false);
    }
  }, [blocks, gameOver, playerX, running]);

  const holdLeft = (active) => {
    keysRef.current.left = active;
  };

  const holdRight = (active) => {
    keysRef.current.right = active;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel rounded-3xl p-5"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-black text-white">Falling Blocks Survival</h2>
          <p className="mt-1 text-sm text-slate-400">
            Move left and right. Survive the falling blocks. Score increases with time.
          </p>
        </div>
        <div className="rounded-xl border border-line bg-white/[0.04] px-4 py-2 mono text-lg font-black text-cyan">
          {score}
        </div>
      </div>

      <div className="relative mx-auto aspect-[13/8] w-full max-w-[520px] overflow-hidden rounded-2xl border border-emerald-400/30 bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.14),transparent_45%),#020617]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(52,211,153,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(52,211,153,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
        {blocks.map((block) => (
          <div
            key={block.id}
            className="absolute rounded-md border border-lime-300/50 bg-lime-300/80 shadow-[0_0_18px_rgba(190,242,100,0.35)]"
            style={{
              width: `${(blockSize / width) * 100}%`,
              height: `${(blockSize / height) * 100}%`,
              left: `${(block.x / width) * 100}%`,
              top: `${(block.y / height) * 100}%`,
            }}
          />
        ))}
        <div
          className="absolute rounded-full border border-cyan/70 bg-cyan shadow-[0_0_22px_rgba(52,211,153,0.45)]"
          style={{
            width: `${(playerWidth / width) * 100}%`,
            height: `${(playerHeight / height) * 100}%`,
            left: `${(playerX / width) * 100}%`,
            bottom: "8%",
          }}
        />
        {!running && (
          <div className="absolute inset-0 grid place-items-center bg-slate-950/70 p-6 text-center backdrop-blur-sm">
            <div>
              <h3 className="text-3xl font-black text-white">{gameOver ? "Game Over" : "Ready?"}</h3>
              <p className="mt-2 text-slate-300">
                {gameOver ? `Final score: ${score}` : "Use arrow keys or A/D to move."}
              </p>
              <button onClick={resetGame} className="primary-button mt-5">
                {gameOver ? "Restart" : "Start Game"}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 flex justify-center gap-3 sm:hidden">
        <button
          onPointerDown={() => holdLeft(true)}
          onPointerUp={() => holdLeft(false)}
          onPointerLeave={() => holdLeft(false)}
          className="secondary-button w-28"
        >
          Left
        </button>
        <button
          onPointerDown={() => holdRight(true)}
          onPointerUp={() => holdRight(false)}
          onPointerLeave={() => holdRight(false)}
          className="secondary-button w-28"
        >
          Right
        </button>
      </div>
    </motion.div>
  );
}

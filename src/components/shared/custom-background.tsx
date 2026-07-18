"use client";

import { motion } from "framer-motion";

export function CustomBackground() {
  return (
    <div className="absolute inset-0 -z-50 overflow-hidden bg-background pointer-events-none">
      {/* Sleek Vercel Grid Background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-grid-fade"
      />

      {/* Floating Glowing Blobs */}
      <div className="absolute inset-0 flex justify-center items-center">
        {/* Blob 1 */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-[10%] w-[35rem] h-[35rem] rounded-full bg-brand/10 blur-[120px]"
        />

        {/* Blob 2 */}
        <motion.div
          animate={{
            x: [0, -30, 50, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-indigo-500/10 dark:bg-brand/5 blur-[150px]"
        />

        {/* Blob 3 */}
        <motion.div
          animate={{
            x: [0, 20, -40, 0],
            y: [0, 30, 50, 0],
            scale: [1, 1.05, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] left-[20%] w-[30rem] h-[30rem] rounded-full bg-purple-500/5 blur-[120px]"
        />
      </div>

      {/* Gradient Overlay for bottom transition */}
      <div className="absolute inset-x-0 bottom-0 h-[20vh] bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

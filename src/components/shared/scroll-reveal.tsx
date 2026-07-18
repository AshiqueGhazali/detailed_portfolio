"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "w-full" | "w-fit" | "w-auto";
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  scale?: number;
}

export function ScrollReveal({
  children,
  width = "w-full",
  direction = "up",
  delay = 0.1,
  duration = 0.5,
  distance = 30,
  scale = 1,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      case "none":
      default:
        return {};
    }
  };

  return (
    <div ref={ref} className={`${width} relative overflow-visible`}>
      <motion.div
        initial={{
          opacity: 0,
          scale: scale,
          ...getDirectionOffset(),
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.16, 1, 0.3, 1], // Premium cubic-bezier transition
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

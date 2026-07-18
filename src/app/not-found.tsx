"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomBackground } from "@/components/shared/custom-background";

const draggableItems = [
  { id: 1, text: "404", size: "w-24 h-24 text-2xl bg-brand/20 border-brand" },
  { id: 2, text: "Lost?", size: "w-20 h-20 text-sm bg-indigo-500/20 border-indigo-500" },
  { id: 3, text: "TypeScript", size: "w-28 h-28 text-xs bg-purple-500/20 border-purple-500" },
  { id: 4, text: "Next.js", size: "w-20 h-20 text-xs bg-foreground/20 border-foreground" },
  { id: 5, text: "SQL", size: "w-16 h-16 text-xs bg-emerald-500/20 border-emerald-500" },
];

export default function NotFound() {
  return (
    <div className="relative w-full min-h-[85vh] flex flex-col justify-center items-center px-6 overflow-hidden select-none">
      <CustomBackground />

      <div className="max-w-xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Title */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <Compass className="h-16 w-16 text-brand mb-6 animate-spin-slow" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Route Not Found
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-sm">
          You have requested an unmapped path. You can drag and throw the nodes below to pass time.
        </p>

        {/* Dynamic throwing area */}
        <div className="relative w-full h-[220px] bg-secondary/5 border border-border/40 rounded-2xl mb-10 overflow-hidden flex items-center justify-center p-4">
          <span className="text-[10px] text-muted-foreground/40 font-mono absolute top-2 right-3 uppercase">Physics Sandbox</span>
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-xs text-muted-foreground/30 font-semibold select-none">Drag & Throw Nodes</span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 w-full h-full relative z-20">
            {draggableItems.map((item) => (
              <motion.div
                key={item.id}
                drag
                dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
                dragElastic={0.4}
                whileDrag={{ scale: 1.15, cursor: "grabbing" }}
                className={`rounded-full border flex items-center justify-center font-bold text-foreground cursor-grab shrink-0 shadow-md ${item.size}`}
              >
                {item.text}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Back CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/">
            <Button size="lg" className="rounded-full gap-2 cursor-pointer bg-brand hover:bg-brand/90 text-white shadow-xs px-8">
              <Home className="h-4 w-4" /> Back to Dashboard
            </Button>
          </Link>
          <Link href="/projects">
            <Button variant="outline" size="lg" className="rounded-full gap-2 cursor-pointer border-border hover:bg-secondary/40 px-8">
              Explore Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

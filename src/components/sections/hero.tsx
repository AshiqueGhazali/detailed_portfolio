"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/components/shared/brand-icons";

const roles = [
  "Full Stack Engineer",
  "Product Designer",
  "AI Integration Specialist",
  "SaaS Architect"
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentRole) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 py-20 text-center overflow-hidden">
      {/* Top Badge: Availability */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-brand-glow bg-brand-glow/30 text-brand">
          <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
          Available for Opportunities
        </span>
      </motion.div>

      {/* Main Hero Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-5xl mb-6 bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent"
      >
        Crafting Premium SaaS &
        <br />
        <span className="text-brand">
          {displayedText}
          <span className="w-1 h-8 sm:h-12 inline-block bg-brand ml-1 animate-pulse" />
        </span>
      </motion.h1>

      {/* Short Bio */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed"
      >
        I am a Full Stack Developer specializing in minimalist design systems, dynamic AI agents, and high-performance server architectures that recruiters immediately want to interview.
      </motion.p>

      {/* Hero Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 mb-12 border border-border/40 bg-secondary/10 backdrop-blur-xs rounded-2xl p-6 max-w-3xl w-full"
      >
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-foreground">2+</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Years of Exp</p>
        </div>
        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-foreground">10+</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Projects Shipped</p>
        </div>
        <div className="text-col-span-2 sm:col-span-1 text-center">
          <p className="text-2xl sm:text-3xl font-bold text-foreground flex items-center justify-center gap-1">
            <MapPin className="h-5 w-5 text-brand" /> Kochi, IN
          </p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Open to Remote</p>
        </div>
      </motion.div>

      {/* Call to Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-col sm:flex-row items-center gap-4 mb-16"
      >
        <Link href="/contact">
          <Button size="lg" className="rounded-full gap-2 cursor-pointer bg-brand hover:bg-brand/90 text-white shadow-lg shadow-brand-glow px-8 py-6">
            Get in Touch <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="/resume" className="w-full sm:w-auto">
          <Button variant="outline" size="lg" className="rounded-full gap-2 cursor-pointer border-border hover:bg-secondary/40 px-8 py-6 w-full">
            Download Resume <Download className="h-5 w-5" />
          </Button>
        </Link>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex items-center gap-6"
      >
        <Link
          href="https://github.com/AshiqueGhazali"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium"
        >
          <GithubIcon className="h-5 w-5" /> GitHub
        </Link>
        <div className="w-1.5 h-1.5 rounded-full bg-border" />
        <Link
          href="https://www.linkedin.com/in/ashiqueghazali/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium"
        >
          <LinkedinIcon className="h-5 w-5" /> LinkedIn
        </Link>
        <div className="w-1.5 h-1.5 rounded-full bg-border" />
        <Link
          href="mailto:ashiquekundala6@gmail.com"
          className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium"
        >
          <Mail className="h-5 w-5" /> Email
        </Link>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Scroll down</span>
        <div className="w-[18px] h-[30px] rounded-full border border-muted-foreground/40 flex justify-center p-1">
          <div className="w-1 h-1.5 bg-brand rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}

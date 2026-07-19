"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/shared/brand-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-border/40 bg-background/30 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left column: branding & location */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="font-medium text-foreground tracking-tight flex items-center justify-center md:justify-start gap-2">
            Muhammed Ashique P K
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available
            </span>
          </p>
          <p className="text-xs text-muted-foreground">
            Full Stack Developer • Wayanad, India / Remote
          </p>
        </div>

        {/* Center column: socials */}
        <div className="flex items-center justify-center gap-4">
          <Link
            href="https://github.com/AshiqueGhazali"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-border/40 hover:border-foreground hover:bg-secondary/40 text-muted-foreground hover:text-foreground transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-4 w-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ashiqueghazali/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-border/40 hover:border-foreground hover:bg-secondary/40 text-muted-foreground hover:text-foreground transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="h-4 w-4" />
          </Link>
          <Link
            href="mailto:ashiquekundala6@gmail.com"
            className="p-2.5 rounded-full border border-border/40 hover:border-foreground hover:bg-secondary/40 text-muted-foreground hover:text-foreground transition-all"
            aria-label="Send Email"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>

        {/* Right column: back to top & copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4 text-center md:text-right">
          <span className="text-xs text-muted-foreground order-2 sm:order-1">
            © {currentYear} • All rights reserved.
          </span>
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="icon"
            className="rounded-full w-9 h-9 border border-border/40 hover:bg-secondary/40 cursor-pointer order-1 sm:order-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}

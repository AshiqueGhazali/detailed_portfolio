"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Blog", path: "/blog" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-background/60 backdrop-blur-xl border-b border-border/40 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-1.5 font-semibold text-lg tracking-tight">
          <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent transition-all group-hover:opacity-85">
            Ashique
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-secondary/30 border border-border/30 rounded-full px-2.5 py-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative px-3.5 py-1.5 text-sm font-medium transition-colors hover:text-foreground text-muted-foreground"
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 bg-background border border-border/60 rounded-full -z-10 shadow-xs"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Link href="/contact">
              <Button size="sm" className="rounded-full gap-1 cursor-pointer bg-foreground text-background hover:bg-foreground/90 font-medium">
                Hire Me <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="inline-flex items-center justify-center rounded-full w-9 h-9 border border-border/40 bg-background/50 hover:bg-secondary/60 cursor-pointer text-foreground">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6 bg-background/95 backdrop-blur-xl border-l border-border/40">
                <SheetTitle className="text-left font-semibold text-lg border-b border-border/40 pb-4 mb-4">
                  Navigation
                </SheetTitle>
                <nav className="flex flex-col gap-2 mt-4">
                  {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                          isActive
                            ? "bg-secondary text-foreground"
                            : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                        }`}
                      >
                        {item.name}
                        {isActive && <span className="h-1.5 w-1.5 rounded-full bg-brand" />}
                      </Link>
                    );
                  })}
                  <div className="mt-8 pt-6 border-t border-border/40">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Button className="w-full rounded-xl gap-2 cursor-pointer bg-foreground text-background hover:bg-foreground/90 py-6">
                        Hire Me <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

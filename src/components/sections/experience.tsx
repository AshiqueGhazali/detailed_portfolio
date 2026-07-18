"use client";

import { useRef } from "react";
import { experienceData } from "@/data/experience";
import { ScrollReveal } from "../shared/scroll-reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";


export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Grow timeline path height dynamically on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={containerRef} className="py-24 px-6 max-w-5xl mx-auto w-full relative">
      <ScrollReveal>
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Professional Experience
          </h2>
          <div className="h-1 w-12 bg-brand rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl text-sm sm:text-base">
            A chronological breakdown of my contributions, responsibilities, and shipped engineering metrics.
          </p>
        </div>
      </ScrollReveal>

      {/* Timeline wrapper */}
      <div className="relative mt-12 pl-6 md:pl-0">
        {/* Static Background Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border/40 transform md:-translate-x-1/2" />

        {/* Scroll-Linked Active Drawing Line */}
        <motion.div 
          className="absolute left-[20px] md:left-1/2 top-0 w-[2px] bg-brand origin-top transform md:-translate-x-1/2" 
          style={{ height: lineHeight }}
        />

        {/* Timeline Items */}
        <div className="flex flex-col gap-16">
          {experienceData.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={exp.id} className="relative flex flex-col md:flex-row md:justify-between items-stretch">
                {/* Center Node Indicator */}
                <div className="absolute left-[-16px] md:left-1/2 top-6 h-8 w-8 rounded-full border-2 border-brand bg-background flex items-center justify-center transform md:-translate-x-1/2 z-10 shadow-xs">
                  <Briefcase className="h-3.5 w-3.5 text-brand" />
                </div>

                {/* Left Side: Empty space on desktop, or aligned card */}
                <div className={`w-full md:w-[45%] flex ${isEven ? "md:justify-end md:text-right" : "order-last md:order-first md:justify-start"}`}>
                  {!isEven ? (
                    // Brototype details on left side (odd index)
                    <ExperienceCard exp={exp} alignLeft={false} />
                  ) : (
                    // Details for even index, we display dates & location on the opposite side
                    <div className="hidden md:flex flex-col justify-center items-end py-6 gap-2">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                        <Calendar className="h-3.5 w-3.5 text-brand" /> {exp.duration}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" /> {exp.location}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Side: Aligned card or dates */}
                <div className={`w-full md:w-[45%] flex ${isEven ? "order-last md:justify-start" : "md:justify-end md:text-right"}`}>
                  {isEven ? (
                    // Subhx Infotech details on right side (even index)
                    <ExperienceCard exp={exp} alignLeft={true} />
                  ) : (
                    // Dates for odd index
                    <div className="hidden md:flex flex-col justify-center items-start py-6 gap-2">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                        <Calendar className="h-3.5 w-3.5 text-brand" /> {exp.duration}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" /> {exp.location}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Experience Card layout component
function ExperienceCard({ exp, alignLeft }: { exp: typeof experienceData[0]; alignLeft: boolean }) {
  return (
    <ScrollReveal direction={alignLeft ? "left" : "right"} delay={0.2} duration={0.6}>
      <div className="border border-border/40 bg-secondary/5 hover:border-brand/20 transition-all duration-300 p-6 md:p-8 rounded-2xl flex flex-col gap-4 text-left shadow-xs">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-1 md:hidden">
            <Calendar className="h-3 w-3 text-brand" /> {exp.duration}
          </span>
          <h3 className="text-xl font-bold text-foreground">
            {exp.role}
          </h3>
          <p className="text-sm font-semibold text-brand mt-0.5">
            {exp.company}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic border-l-2 border-border/60 pl-3">
          {exp.description}
        </p>

        {/* Bullet points */}
        <div className="flex flex-col gap-2.5 my-2">
          {exp.responsibilities.map((task, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
              <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {task}
              </span>
            </div>
          ))}
        </div>

        {/* Technologies used */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/30">
          {exp.technologies.map((tech) => (
            <span key={tech} className="text-[10px] text-foreground bg-muted border border-border/40 px-2 py-0.5 rounded-md font-mono">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

"use client";

import { skillsData } from "@/data/skills";
import { ScrollReveal } from "../shared/scroll-reveal";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

// Helper component to render icons dynamically
function SkillIcon({ name, className }: { name: string; className?: string }) {
  // Map icons from strings
  const IconComponent = ((Icons as unknown) as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!IconComponent) {
    return <Icons.Code2 className={className} />;
  }
  return <IconComponent className={className} />;
}

export function TechStack() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto w-full relative">
      <ScrollReveal>
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Technical Stack
          </h2>
          <div className="h-1 w-12 bg-brand rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl text-sm sm:text-base">
            Detailed breakdown of my language familiarity, frameworks, infrastructure platforms, and engineering methodologies.
          </p>
        </div>
      </ScrollReveal>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((cat, index) => (
          <ScrollReveal key={cat.category} delay={index * 0.1} duration={0.6}>
            <div className="border border-border/40 bg-secondary/5 rounded-3xl p-8 h-full flex flex-col justify-between hover:border-brand/20 transition-all duration-300">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {cat.category}
                </h3>
                <p className="text-xs text-muted-foreground mb-8 leading-relaxed max-w-lg">
                  {cat.description}
                </p>

                <div className="flex flex-col gap-5">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 font-medium text-foreground">
                          <SkillIcon name={skill.iconName} className="h-4 w-4 text-brand" />
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Premium Progress Bar */}
                      <div className="h-1.5 w-full bg-border/40 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-brand rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

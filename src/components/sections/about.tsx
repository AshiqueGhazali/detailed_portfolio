"use client";

import { ScrollReveal } from "../shared/scroll-reveal";
import { Sparkles, Terminal, Activity, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto w-full relative">
      <ScrollReveal>
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Engineering & Philosophy
          </h2>
          <div className="h-1 w-12 bg-brand rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl text-sm sm:text-base">
            A look into the journey, values, and core philosophies behind the code I write.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Story / Journey Card */}
        <ScrollReveal delay={0.2} duration={0.6}>
          <Card className="h-full border-border/40 bg-secondary/10 backdrop-blur-xs hover:border-brand/30 transition-all duration-300">
            <CardContent className="p-8 flex flex-col gap-5">
              <div className="p-3 w-fit rounded-xl bg-brand/10 border border-brand/20 text-brand">
                <Terminal className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">The Journey</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                My passion for software began during my **Bachelor of Computer Applications (BCA)** at Calicut University, where I built a solid foundation in algorithms, databases, and Object-Oriented Design.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To bridge the gap between academic theory and high-scale production systems, I completed an intensive trainee program at **Brototype**, logging over 1,000 hours of pure coding and launch pipelines. Today, as a Full Stack Engineer at **Subhx Infotech**, I architect premium SaaS and AI integrations.
              </p>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Tech Philosophy Card */}
        <ScrollReveal delay={0.3} duration={0.6}>
          <Card className="h-full border-border/40 bg-secondary/10 backdrop-blur-xs hover:border-brand/30 transition-all duration-300">
            <CardContent className="p-8 flex flex-col gap-5">
              <div className="p-3 w-fit rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Engineering Philosophy</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I believe that code complexity is a liability. Software should be **minimalist**, **modular**, and **highly legible**. A clean folder layout and descriptive naming conventions save weeks of developer debugging.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Performance is not an afterthought; it is a core feature. Achieving a **95+ Lighthouse score** requires strict bundle hygiene, lazy hydration of non-critical blocks, and server-side data compilation.
              </p>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Current Focus Card */}
        <ScrollReveal delay={0.4} duration={0.6}>
          <Card className="h-full border-border/40 bg-secondary/10 backdrop-blur-xs hover:border-brand/30 transition-all duration-300">
            <CardContent className="p-8 flex flex-col gap-5">
              <div className="p-3 w-fit rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-500">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Current Focus</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Currently, I am deep-diving into **Agentic AI integrations** and LLM system engineering. Implementing structured data extraction models (like Google Gemini structured schemas) to streamline enterprise compliance workflows.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I am also actively refining backend transactional locking systems in PostgreSQL to resolve race conditions in financial pipelines, while optimizing client-side rendering runtimes with React.
              </p>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>

      {/* Philosophy Callout Banner */}
      <ScrollReveal delay={0.5}>
        <div className="mt-16 border border-border/40 bg-secondary/5 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4 text-left">
            <div className="p-2.5 rounded-full bg-foreground/5 text-foreground hidden sm:block">
              <Code className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">Seeking High-Growth Operations</h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                Targeting positions at Booking.com, Adyen, Stripe, ASML, Amazon, Spotify, Uber, Meta, and Microsoft.
              </p>
            </div>
          </div>
          <span className="text-sm font-semibold text-brand tracking-tight border-b border-brand border-dashed pb-0.5 whitespace-nowrap">
            Ready for Technical Challenges →
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}

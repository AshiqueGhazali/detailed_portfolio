"use client";

import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CustomBackground } from "@/components/shared/custom-background";
import { Terminal, Lightbulb, Compass, Award, Laptop, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen py-12 md:py-20 flex flex-col items-center">
      <CustomBackground />
      
      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        <ScrollReveal>
          <div className="text-left mb-12">
            <span className="text-brand font-bold text-xs uppercase tracking-widest">About Me</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2 text-foreground">
              Muhammed Ashique P K
            </h1>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed max-w-2xl">
              A full-stack engineer and product designer crafting clean, reliable web applications.
            </p>
          </div>
        </ScrollReveal>

        {/* Extended Narrative Section */}
        <div className="flex flex-col gap-8 mb-16">
          <ScrollReveal delay={0.2}>
            <div className="border border-border/40 bg-secondary/5 rounded-2xl p-6 md:p-8 flex flex-col gap-4 text-left">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Terminal className="h-5 w-5 text-brand" /> Detailed Biography
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I am a Software Engineer based in Kochi, India. I specialize in the Next.js / MERN ecosystem, Node.js, and relational databases like PostgreSQL. Over my professional trajectory, I have focused on designing scalable backend APIs, optimizing web page speeds, and implementing generative AI features.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                My career started with computer applications, which drove me to appreciate database normalization, software architecture patterns, and interface usability. I spent hundreds of hours in intensive development sprints, launching complex applications and surviving weekly audits.
              </p>
            </div>
          </ScrollReveal>

          {/* Grid Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal delay={0.3}>
              <Card className="border-border/40 bg-secondary/10 hover:border-brand/20 transition-all">
                <CardContent className="p-6 flex gap-4 text-left">
                  <div className="p-2 w-fit rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm uppercase tracking-wider">Product Mindset</h3>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {"I don't just write code. I think about user conversions, funnel latency, and how the recruiter or end customer interacts with the interface."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Card className="border-border/40 bg-secondary/10 hover:border-brand/20 transition-all">
                <CardContent className="p-6 flex gap-4 text-left">
                  <div className="p-2 w-fit rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm uppercase tracking-wider">Code Integrity</h3>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      Writing type-safe, validated, self-documenting code with comprehensive unit tests is standard. Reducing technical debt speeds up shipping times.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <Card className="border-border/40 bg-secondary/10 hover:border-brand/20 transition-all">
                <CardContent className="p-6 flex gap-4 text-left">
                  <div className="p-2 w-fit rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm uppercase tracking-wider">Continuous Discovery</h3>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      Evolving with technology is key. Exploring AI microservices, serverless computing, edge databases, and advanced state management.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <Card className="border-border/40 bg-secondary/10 hover:border-brand/20 transition-all">
                <CardContent className="p-6 flex gap-4 text-left">
                  <div className="p-2 w-fit rounded-lg bg-yellow-500/10 text-yellow-500/80 border border-yellow-500/20 shrink-0">
                    <Laptop className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm uppercase tracking-wider">Modern Setup</h3>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      Mac OS ecosystem, VS Code, Git, Docker containers, Postman, AWS consoles, and clean dark terminal environments.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Certifications Section */}
          <ScrollReveal delay={0.7}>
            <div className="border border-border/40 bg-secondary/5 rounded-2xl p-6 md:p-8 flex flex-col gap-6 text-left">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Award className="h-5 w-5 text-brand" /> Certifications & Achievements
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-bold text-foreground text-sm">MERN Full-Stack Trainee Certificate</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Validated by Brototype following rigorous technical reviews, project presentations, and code review audits.
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap font-mono">2025</span>
                </div>
                <div className="h-px bg-border/40 w-full" />
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-bold text-foreground text-sm">Bachelor of Computer Applications (BCA)</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Calicut University. Evaluated in core algorithms, Relational Database Management Systems, and networking paradigms.
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap font-mono">2024</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

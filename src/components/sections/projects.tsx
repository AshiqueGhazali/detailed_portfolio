"use client";

import { useState } from "react";
import Link from "next/link";
import { projectsData, Project } from "@/data/projects";
import { ScrollReveal } from "../shared/scroll-reveal";
import { ArrowUpRight, ExternalLink, Activity, Info, ShieldAlert, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/shared/brand-icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Show first 4 projects as featured on the landing page
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto w-full relative">
      <ScrollReveal>
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-12 bg-brand rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl text-sm sm:text-base">
            {"A curated selection of engineering solutions I've architected, focusing on scalability, integrations, and performance."}
          </p>
        </div>
      </ScrollReveal>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {featuredProjects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.1} duration={0.6}>
            <Card className="h-full border-border/40 bg-secondary/5 border-spotlight hover:border-brand/35 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <CardContent className="p-8 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-brand/30 text-brand bg-brand-glow/20 px-2.5 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </Badge>
                    <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">
                      {project.role}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors flex items-center gap-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.highlights.map((tag) => (
                      <span key={tag} className="text-xs bg-muted text-foreground border border-border/60 rounded-lg px-2.5 py-1 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] text-muted-foreground bg-secondary/50 border border-border/40 px-2 py-0.5 rounded-md font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/40">
                    <Button
                      onClick={() => setSelectedProject(project)}
                      variant="ghost"
                      size="sm"
                      className="text-xs font-bold gap-1 text-brand hover:text-brand hover:bg-brand-glow/10 cursor-pointer rounded-full"
                    >
                      View Case Study <Info className="h-3.5 w-3.5" />
                    </Button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full border border-border/40 hover:bg-secondary/40 cursor-pointer">
                            <GithubIcon className="h-4 w-4" />
                            <span className="sr-only">GitHub</span>
                          </Button>
                        </Link>
                      )}
                      {project.liveUrl && (
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full border border-border/40 hover:bg-secondary/40 cursor-pointer">
                            <ExternalLink className="h-4 w-4" />
                            <span className="sr-only">Live Demo</span>
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>

      {/* View All Projects Button */}
      <ScrollReveal delay={0.3}>
        <div className="flex justify-center">
          <Link href="/projects">
            <Button variant="outline" size="lg" className="rounded-full gap-2 cursor-pointer border-border hover:bg-secondary/40 px-8 py-6">
              View All Architectural Work <ArrowUpRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </ScrollReveal>

      {/* Case Study Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-2xl bg-background border border-border/40 rounded-2xl max-h-[85vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader className="border-b border-border/40 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="border-brand/40 text-brand bg-brand-glow/20 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                    {selectedProject.category}
                  </Badge>
                  <span className="text-[11px] text-muted-foreground font-mono">
                    {selectedProject.role}
                  </span>
                </div>
                <DialogTitle className="text-2xl font-bold text-foreground">
                  {selectedProject.title} Case Study
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground mt-2">
                  Detailed technical overview of architectural hurdles, engineering patterns, and performance metrics.
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-col gap-6 py-6">
                {/* Tech Stack used in Case Study */}
                <div>
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <Cpu className="h-3.5 w-3.5 text-brand" /> Architecture Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="text-xs text-foreground bg-muted border border-border/60 px-2.5 py-1 rounded-md font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges Section */}
                <div className="border border-border/40 bg-secondary/5 p-5 rounded-xl">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-3 flex items-center gap-1.5 text-red-500/80">
                    <ShieldAlert className="h-4 w-4" /> Technical Challenge
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    {selectedProject.challenges}
                  </p>
                </div>

                {/* Architecture & Engineering Design */}
                <div className="border border-border/40 bg-secondary/5 p-5 rounded-xl">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-3 flex items-center gap-1.5 text-brand">
                    <Activity className="h-4 w-4" /> Engineering & System Design
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedProject.architecture}
                  </p>
                </div>

                {/* Performance & Impact Metrics */}
                <div className="border border-brand-glow bg-brand-glow/10 p-5 rounded-xl">
                  <h4 className="text-xs font-bold text-brand uppercase tracking-widest mb-2">
                    Business & Performance Impact
                  </h4>
                  <p className="text-base font-bold text-foreground leading-relaxed">
                    {selectedProject.impact}
                  </p>
                </div>
              </div>

              {/* Modal Action Links */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-border/40">
                {selectedProject.githubUrl && (
                  <Link href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="rounded-full gap-2 cursor-pointer border-border hover:bg-secondary/40">
                      <GithubIcon className="h-4 w-4" /> Repository
                    </Button>
                  </Link>
                )}
                {selectedProject.liveUrl && (
                  <Link href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="rounded-full gap-2 cursor-pointer bg-brand hover:bg-brand/90 text-white shadow-xs">
                      Live Platform <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

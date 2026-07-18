"use client";

import { useState, useMemo } from "react";
import { projectsData, Project } from "@/data/projects";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CustomBackground } from "@/components/shared/custom-background";
import { ExternalLink, Activity, Info, ShieldAlert, Cpu, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/shared/brand-icons";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Link from "next/link";

const categories = ["All", "Web3 & Fintech", "AI & SaaS", "Network & Telecom", "Enterprise & AI", "Design & Brand", "Streaming & Media", "E-Commerce"];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects dynamically
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="relative w-full min-h-screen py-12 md:py-20 flex flex-col items-center">
      <CustomBackground />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-brand font-bold text-xs uppercase tracking-widest">Architectures</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2 text-foreground">
              Engineering Catalog
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
              A comprehensive library of systems, APIs, and client-side solutions that I have architected and deployed.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Controls */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col gap-6 md:flex-row md:items-center justify-between mb-12 border border-border/40 bg-secondary/5 rounded-2xl p-6">
            {/* Search Input */}
            <div className="relative w-full md:max-w-sm">
              <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-xl bg-background border-border/60"
              />
            </div>

            {/* Category Filter Badges */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <Filter className="h-4 w-4 text-muted-foreground shrink-0 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    variant={activeCategory === cat ? "default" : "outline"}
                    size="sm"
                    className="rounded-full text-xs font-semibold whitespace-nowrap cursor-pointer"
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Grid Layout of filtered projects */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.05} duration={0.6}>
                <Card className="h-full border-border/40 bg-secondary/5 border-spotlight hover:border-brand/35 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                  <CardContent className="p-6 md:p-8 flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className="border-brand/30 text-brand bg-brand-glow/20 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                          {project.category}
                        </Badge>
                        <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                          {project.role}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-brand transition-colors flex items-center gap-2">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.highlights.map((tag) => (
                          <span key={tag} className="text-[10px] bg-muted text-foreground border border-border/60 rounded-md px-2 py-0.5 font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="text-[9px] text-muted-foreground bg-secondary/50 border border-border/40 px-1.5 py-0.5 rounded-md font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/40">
                        <Button
                          onClick={() => setSelectedProject(project)}
                          variant="ghost"
                          size="sm"
                          className="text-xs font-bold gap-1 text-brand hover:text-brand hover:bg-brand-glow/10 cursor-pointer rounded-full"
                        >
                          Case Study <Info className="h-3.5 w-3.5" />
                        </Button>

                        <div className="flex items-center gap-1.5">
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
        ) : (
          <ScrollReveal>
            <div className="text-center py-20 border border-dashed border-border/60 bg-secondary/5 rounded-2xl">
              <p className="text-muted-foreground">No projects matching your search parameters.</p>
              <Button onClick={() => { setSearchQuery(""); setActiveCategory("All"); }} className="mt-4 rounded-full cursor-pointer">
                Reset Filters
              </Button>
            </div>
          </ScrollReveal>
        )}
      </div>

      {/* Reusable Case Study Dialog */}
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

                <div className="border border-border/40 bg-secondary/5 p-5 rounded-xl">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-3 flex items-center gap-1.5 text-red-500/80">
                    <ShieldAlert className="h-4 w-4" /> Technical Challenge
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    {selectedProject.challenges}
                  </p>
                </div>

                <div className="border border-border/40 bg-secondary/5 p-5 rounded-xl">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-3 flex items-center gap-1.5 text-brand">
                    <Activity className="h-4 w-4" /> Engineering & System Design
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedProject.architecture}
                  </p>
                </div>

                <div className="border border-brand-glow bg-brand-glow/10 p-5 rounded-xl">
                  <h4 className="text-xs font-bold text-brand uppercase tracking-widest mb-2">
                    Business & Performance Impact
                  </h4>
                  <p className="text-base font-bold text-foreground leading-relaxed">
                    {selectedProject.impact}
                  </p>
                </div>
              </div>

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
    </div>
  );
}

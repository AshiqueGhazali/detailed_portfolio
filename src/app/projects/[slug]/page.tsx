import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Cpu, ShieldAlert, Activity, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/shared/brand-icons";
import { CustomBackground } from "@/components/shared/custom-background";

// Next.js static parameters generation for SEO fast load
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.id === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative w-full min-h-screen py-12 md:py-20 flex flex-col items-center">
      <CustomBackground />

      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        {/* Back navigation */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Catalog
        </Link>

        {/* Heading */}
        <div className="border-b border-border/40 pb-8 mb-8 text-left">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className="border-brand/40 text-brand bg-brand-glow/20 px-2.5 py-0.5 rounded-full text-xs font-semibold">
              {project.category}
            </Badge>
            <span className="text-[11px] text-muted-foreground font-mono">
              {project.role}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Dynamic content cards */}
        <div className="flex flex-col gap-8 text-left">
          {/* Tech Stack used */}
          <div>
            <h2 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4 flex items-center gap-1.5">
              <Cpu className="h-3.5 w-3.5 text-brand" /> Architecture Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="text-sm text-foreground bg-secondary/50 border border-border/40 px-3.5 py-1.5 rounded-xl font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.highlights.map((tag) => (
              <div key={tag} className="border border-border/40 bg-secondary/5 p-4 rounded-xl flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-brand shrink-0" />
                <span className="text-sm font-semibold text-foreground">{tag}</span>
              </div>
            ))}
          </div>

          {/* Technical Challenge */}
          <div className="border border-border/40 bg-secondary/5 p-6 md:p-8 rounded-2xl">
            <h2 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4 flex items-center gap-1.5 text-red-500/80">
              <ShieldAlert className="h-4 w-4" /> Technical Challenge
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-medium">
              {project.challenges}
            </p>
          </div>

          {/* System Design & Architecture */}
          <div className="border border-border/40 bg-secondary/5 p-6 md:p-8 rounded-2xl">
            <h2 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4 flex items-center gap-1.5 text-brand">
              <Activity className="h-4 w-4" /> Engineering & System Design
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="border border-brand-glow bg-brand-glow/10 p-6 md:p-8 rounded-2xl flex flex-col gap-3">
            <h2 className="text-xs font-bold text-brand uppercase tracking-widest flex items-center gap-1.5">
              <Award className="h-4 w-4" /> Business & Performance Impact
            </h2>
            <p className="text-lg md:text-xl font-bold text-foreground leading-relaxed">
              {project.impact}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border/40">
            {project.githubUrl && (
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="rounded-full gap-2 cursor-pointer border-border hover:bg-secondary/40 px-6 py-5">
                  <GithubIcon className="h-4 w-4" /> GitHub Repository
                </Button>
              </Link>
            )}
            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full gap-2 cursor-pointer bg-brand hover:bg-brand/90 text-white shadow-xs px-6 py-5">
                  Live Platform <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { postsData } from "@/data/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CustomBackground } from "@/components/shared/custom-background";

// Generate static routes for the blog posts
export async function generateStaticParams() {
  return postsData.map((post) => ({
    slug: post.slug,
  }));
}

// Markdown-to-JSX Simple Parser Component
function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n");
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let codeLang = "";

  const renderedElements: React.ReactNode[] = [];

  lines.forEach((line, index) => {
    // Handle code blocks
    if (line.trim().startsWith("```")) {
      if (inCodeBlock) {
        // Close code block
        inCodeBlock = false;
        const codeText = codeLines.join("\n");
        renderedElements.push(
          <pre key={`code-${index}`} className="my-6 p-5 rounded-xl bg-muted border border-border/40 overflow-x-auto text-xs font-mono leading-relaxed text-foreground select-all">
            <code className={`language-${codeLang}`}>{codeText}</code>
          </pre>
        );
        codeLines = [];
        codeLang = "";
      } else {
        // Open code block
        inCodeBlock = true;
        codeLang = line.trim().substring(3).trim();
      }
      return;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      return;
    }

    // Handle Headers
    if (line.startsWith("# ")) {
      renderedElements.push(
        <h1 key={index} className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mt-8 mb-4 border-b border-border/20 pb-2">
          {line.substring(2)}
        </h1>
      );
      return;
    }

    if (line.startsWith("## ")) {
      renderedElements.push(
        <h2 key={index} className="text-2xl font-bold text-foreground tracking-tight mt-8 mb-4">
          {line.substring(3)}
        </h2>
      );
      return;
    }

    if (line.startsWith("### ")) {
      renderedElements.push(
        <h3 key={index} className="text-xl font-bold text-foreground tracking-tight mt-6 mb-3">
          {line.substring(4)}
        </h3>
      );
      return;
    }

    // Handle Lists
    if (line.trim().startsWith("- ")) {
      renderedElements.push(
        <ul key={index} className="list-disc pl-6 mb-4 text-sm md:text-base text-muted-foreground leading-relaxed">
          <li>{line.trim().substring(2)}</li>
        </ul>
      );
      return;
    }

    // Handle Paragraphs or empty lines
    if (line.trim() === "") {
      return;
    }

    // Default: format bold text inline
    let formattedLine: string | React.ReactNode = line;
    if (line.includes("**")) {
      const parts = line.split("**");
      formattedLine = parts.map((part, i) => {
        if (i % 2 !== 0) {
          return <strong key={i} className="font-bold text-foreground">{part}</strong>;
        }
        return part;
      });
    }

    renderedElements.push(
      <p key={index} className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 text-left">
        {formattedLine}
      </p>
    );
  });

  return <article className="prose prose-zinc dark:prose-invert max-w-none text-left">{renderedElements}</article>;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = postsData.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative w-full min-h-screen py-12 md:py-20 flex flex-col items-center">
      <CustomBackground />

      <div className="max-w-3xl mx-auto px-6 w-full relative z-10">
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        {/* Title Block */}
        <div className="border-b border-border/40 pb-8 mb-8 text-left">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4 font-semibold">
            <Badge variant="outline" className="border-brand/20 bg-brand-glow/20 text-brand px-2 py-0.5 rounded-md font-mono">
              {post.category}
            </Badge>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Dynamic Markdown Body */}
        <div className="pb-24">
          <MarkdownRenderer content={post.content} />
        </div>
      </div>
    </div>
  );
}

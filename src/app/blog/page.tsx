"use client";

import { useState, useMemo } from "react";
import { postsData } from "@/data/posts";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CustomBackground } from "@/components/shared/custom-background";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return postsData.filter((post) => {
      return (
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery]);

  return (
    <div className="relative w-full min-h-screen py-12 md:py-20 flex flex-col items-center">
      <CustomBackground />

      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-brand font-bold text-xs uppercase tracking-widest font-mono">Insights</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2 text-foreground">
              Technical Writing
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Articles and essays on Next.js optimization, systems engineering, AI implementations, and backend architectures.
            </p>
          </div>
        </ScrollReveal>

        {/* Search controls */}
        <ScrollReveal delay={0.2}>
          <div className="relative mb-12 max-w-md mx-auto">
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles by title, tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-xl bg-background border-border/60"
            />
          </div>
        </ScrollReveal>

        {/* Posts list */}
        {filteredPosts.length > 0 ? (
          <div className="flex flex-col gap-6">
            {filteredPosts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.1} duration={0.6}>
                <Card className="border-border/40 bg-secondary/5 border-spotlight hover:border-brand/30 hover:shadow-xs transition-all duration-300 group">
                  <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-start justify-between">
                    <div className="flex-1 text-left">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3 font-semibold">
                        <Badge variant="outline" className="border-brand/20 bg-brand-glow/20 text-brand px-2 py-0.5 rounded-md font-mono text-[10px]">
                          {post.category}
                        </Badge>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-end justify-start md:justify-end shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-border/30">
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="text-xs font-bold gap-1 cursor-pointer text-brand hover:text-brand hover:bg-brand-glow/10 rounded-full">
                          Read Article <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <ScrollReveal>
            <div className="text-center py-20 border border-dashed border-border/60 bg-secondary/5 rounded-2xl">
              <p className="text-muted-foreground">No articles match your search query.</p>
              <Button onClick={() => setSearchQuery("")} className="mt-4 rounded-full cursor-pointer">
                Clear Search
              </Button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}

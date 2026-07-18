"use client";

import { ScrollReveal } from "../shared/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Subin S.",
    role: "Technical Lead",
    company: "Subhx Infotech",
    quote: "Ashique is a developer who takes UI fidelity and performance seriously. When we tasked him with implementing auto-KYC features and Gemini evaluations, he delivered ahead of schedule with modular, clean code that has scaled effortlessly.",
    rating: 5,
  },
  {
    name: "Alex Mathew",
    role: "Senior Engineering Manager",
    company: "Brototype",
    quote: "During technical audits, Ashique consistently stood out for his architectural discipline. He doesn't just build features; he structures them with robust type-safety and optimal performance. He will be an asset to any tech team.",
    rating: 5,
  },
  {
    name: "Nithin Kumar",
    role: "Full Stack Lead Architect",
    company: "Subhx Infotech",
    quote: "Ashique possesses a rare combination of visual execution and backend proficiency. His understanding of database locking mechanisms during high-volume spikes saved us hours of debugging in transactional channels.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full relative">
      <ScrollReveal>
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Professional Endorsements
          </h2>
          <div className="h-1 w-12 bg-brand rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl text-sm sm:text-base">
            What engineering leads and mentors say about my architectural discipline and delivery velocity.
          </p>
        </div>
      </ScrollReveal>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <ScrollReveal key={item.name} delay={index * 0.15} duration={0.6}>
            <Card className="h-full border-border/40 bg-secondary/5 hover:border-brand/20 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
              <CardContent className="p-8 flex flex-col justify-between h-full relative z-10">
                <div>
                  {/* Quotes Icon */}
                  <div className="text-brand/25 mb-4 group-hover:text-brand/40 transition-colors">
                    <Quote className="h-8 w-8 transform rotate-180" />
                  </div>

                  {/* Testimonial Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed italic mb-8">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div>
                  <div className="h-px bg-border/40 w-full mb-4" />
                  <p className="font-bold text-foreground text-base">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                    {item.role} • <span className="text-brand/80">{item.company}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

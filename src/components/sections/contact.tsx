"use client";

import { useState } from "react";
import { ScrollReveal } from "../shared/scroll-reveal";
import { Mail, Send, Loader2, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/shared/brand-icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto w-full relative">
      <ScrollReveal>
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Start a Conversation
          </h2>
          <div className="h-1 w-12 bg-brand rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl text-sm sm:text-base">
            {"Have a project in mind or looking to hire a full-stack engineer? Drop a message and let's coordinate."}
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Left Side: Contact Information Cards (2/5 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <ScrollReveal direction="right" delay={0.2} duration={0.6}>
            <div className="border border-border/40 bg-secondary/5 rounded-2xl p-6 flex items-start gap-4 hover:border-brand/20 transition-all duration-300">
              <div className="p-3 bg-brand/10 text-brand rounded-xl border border-brand/20">
                <Mail className="h-6 w-6" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Direct Email</h4>
                <a href="mailto:ashiquekundala6@gmail.com" className="text-sm text-muted-foreground hover:text-brand transition-colors block mt-1">
                  ashiquekundala6@gmail.com
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3} duration={0.6}>
            <div className="border border-border/40 bg-secondary/5 rounded-2xl p-6 flex items-start gap-4 hover:border-brand/20 transition-all duration-300">
              <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
                <LinkedinIcon className="h-6 w-6" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">LinkedIn Professional</h4>
                <a href="https://www.linkedin.com/in/ashiqueghazali/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-brand transition-colors block mt-1">
                  linkedin.com/in/ashiqueghazali
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.4} duration={0.6}>
            <div className="border border-border/40 bg-secondary/5 rounded-2xl p-6 flex items-start gap-4 hover:border-brand/20 transition-all duration-300">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/20">
                <GithubIcon className="h-6 w-6" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">GitHub Portfolios</h4>
                <a href="https://github.com/AshiqueGhazali" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-brand transition-colors block mt-1">
                  github.com/AshiqueGhazali
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Side: Contact Form Card (3/5 cols) */}
        <div className="lg:col-span-3">
          <ScrollReveal direction="left" delay={0.3} duration={0.6}>
            <div className="border border-border/40 bg-secondary/5 rounded-2xl p-8 shadow-xs">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2 text-left">
                    <Label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Name <span className="text-brand">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Muhammed Ashique"
                      className="rounded-lg bg-background border-border/60"
                      disabled={status === "loading"}
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <Label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Email Address <span className="text-brand">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="rounded-lg bg-background border-border/60"
                      disabled={status === "loading"}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-left">
                  <Label htmlFor="subject" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Recruitment Opportunity / Consultation"
                    className="rounded-lg bg-background border-border/60"
                    disabled={status === "loading"}
                  />
                </div>

                <div className="flex flex-col gap-2 text-left">
                  <Label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Message <span className="text-brand">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Outline your project scope or interview scheduling..."
                    rows={5}
                    className="rounded-lg bg-background border-border/60 resize-none"
                    disabled={status === "loading"}
                  />
                </div>

                {/* Form Alert States */}
                {status === "success" && (
                  <div className="flex items-center gap-2 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-500 text-sm">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <span>Your inquiry was dispatched successfully! I will reach out shortly.</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-500 text-sm">
                    <AlertTriangle className="h-5 w-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="rounded-full gap-2 cursor-pointer py-6 font-bold bg-brand hover:bg-brand/90 text-white shadow-lg shadow-brand-glow w-full"
                >
                  {status === "loading" ? (
                    <>
                      Sending Message <Loader2 className="h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Dispatch Inquiry <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

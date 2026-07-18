import { Contact } from "@/components/sections/contact";
import { CustomBackground } from "@/components/shared/custom-background";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen py-12 md:py-20 flex flex-col items-center">
      <CustomBackground />
      
      <div className="w-full relative z-10">
        <ScrollReveal>
          <div className="text-center px-6">
            <span className="text-brand font-bold text-xs uppercase tracking-widest font-mono">Collaboration</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2 text-foreground">
              Get In Touch
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Send a detailed brief or coordinate meeting dates directly. I respond within 24 business hours.
            </p>
          </div>
        </ScrollReveal>

        <Contact />
      </div>
    </div>
  );
}

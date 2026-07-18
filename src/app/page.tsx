import { CustomBackground } from "@/components/shared/custom-background";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Dynamic Background covering the top portion */}
      <CustomBackground />
      
      {/* Content wrapper */}
      <div className="w-full relative z-10 flex flex-col items-center">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

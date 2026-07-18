"use client";

import { experienceData, educationData } from "@/data/experience";
import { CustomBackground } from "@/components/shared/custom-background";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Printer, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/shared/brand-icons";

export default function ResumePage() {
  const triggerPrint = () => {
    window.print();
  };

  return (
    <div className="relative w-full min-h-screen py-12 md:py-20 flex flex-col items-center print:bg-white print:py-0 print:min-h-0">
      {/* Background is hidden during prints */}
      <div className="print:hidden">
        <CustomBackground />
      </div>

      <div className="max-w-4xl mx-auto px-6 w-full relative z-10 print:px-0">
        {/* Printable page controls */}
        <ScrollReveal>
          <div className="flex justify-between items-center mb-12 border-b border-border/40 pb-6 print:hidden">
            <div className="text-left">
              <span className="text-brand font-bold text-xs uppercase tracking-widest">Interactive Curriculum Vitae</span>
              <h1 className="text-4xl font-bold tracking-tight mt-1">Resume</h1>
            </div>
            <Button
              onClick={triggerPrint}
              size="lg"
              className="rounded-full gap-2 cursor-pointer bg-brand hover:bg-brand/90 text-white font-bold"
            >
              <Printer className="h-5 w-5" /> Print / Save PDF
            </Button>
          </div>
        </ScrollReveal>

        {/* Core Resume Sheet Area */}
        <div className="border border-border/40 bg-secondary/5 rounded-3xl p-8 md:p-12 print:border-0 print:bg-white print:p-0 text-left shadow-xs print:shadow-none">
          {/* Header Card */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 border-b border-border/40 pb-8 mb-8 print:border-neutral-200">
            <div>
              <h2 className="text-3xl font-extrabold text-foreground print:text-black">
                Muhammed Ashique P K
              </h2>
              <p className="text-lg font-semibold text-brand print:text-indigo-600 mt-1">
                Full Stack Software Engineer
              </p>
              
              <div className="flex flex-wrap gap-4 items-center text-xs text-muted-foreground mt-4 print:text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> Kochi, India / Remote
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5" /> ashiquekundala6@gmail.com
                </span>
              </div>
            </div>

            {/* Social details */}
            <div className="flex flex-col gap-2 text-xs text-muted-foreground print:text-neutral-500">
              <a
                href="https://github.com/AshiqueGhazali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground print:text-neutral-500"
              >
                <GithubIcon className="h-3.5 w-3.5" /> github.com/AshiqueGhazali
              </a>
              <a
                href="https://www.linkedin.com/in/ashiqueghazali/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground print:text-neutral-500"
              >
                <LinkedinIcon className="h-3.5 w-3.5" /> linkedin.com/in/ashiqueghazali
              </a>
            </div>
          </div>

          {/* Body Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Work History (Col span 2) */}
            <div className="md:col-span-2 flex flex-col gap-8">
              <div>
                <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6 border-b border-border/40 pb-2 print:border-neutral-200 print:text-black">
                  Work Experience
                </h3>

                <div className="flex flex-col gap-8">
                  {experienceData.map((exp) => (
                    <div key={exp.id} className="flex flex-col gap-2">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h4 className="font-bold text-foreground text-sm sm:text-base print:text-black">
                            {exp.role}
                          </h4>
                          <p className="text-xs sm:text-sm font-semibold text-brand print:text-indigo-600">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono print:text-neutral-500 shrink-0">
                          {exp.duration}
                        </span>
                      </div>
                      
                      <p className="text-xs text-muted-foreground leading-relaxed italic mt-1">
                        {exp.description}
                      </p>

                      <ul className="list-disc pl-4 text-xs text-muted-foreground flex flex-col gap-1.5 mt-2 print:text-neutral-500">
                        {exp.responsibilities.map((task, i) => (
                          <li key={i} className="leading-relaxed">
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side column: skills, education (Col span 1) */}
            <div className="flex flex-col gap-8">
              {/* Technical skills */}
              <div>
                <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4 border-b border-border/40 pb-2 print:border-neutral-200 print:text-black">
                  Core Skills
                </h3>
                <div className="flex flex-col gap-3">
                  <div>
                    <h4 className="text-xs font-bold text-foreground print:text-black">Languages & Frameworks</h4>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed print:text-neutral-500">
                      Next.js, React, Node.js, Express, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground print:text-black">Databases & Real-time</h4>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed print:text-neutral-500">
                      PostgreSQL, MongoDB, SQL, Socket.io, WebRTC channels
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground print:text-black">DevOps & Platforms</h4>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed print:text-neutral-500">
                      AWS, Nginx, Docker, Git, CI/CD integrations
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4 border-b border-border/40 pb-2 print:border-neutral-200 print:text-black">
                  Education
                </h3>
                {educationData.map((edu) => (
                  <div key={edu.id} className="flex flex-col gap-1 text-left">
                    <h4 className="text-xs font-bold text-foreground print:text-black">{edu.degree}</h4>
                    <p className="text-[11px] text-brand font-semibold print:text-indigo-600">{edu.institution}</p>
                    <p className="text-[10px] text-muted-foreground font-mono print:text-neutral-500">{edu.duration}</p>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed print:text-neutral-500">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

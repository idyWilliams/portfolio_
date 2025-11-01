"use client";

import { SectionContainer } from "./section-container";
import { AnimatedSection, ScaleIn } from "./animated-section";
import { Code as Code2, Database, LayoutGrid as Layout, Server, Smartphone, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { GridBackground } from "./animated-background";

const skillCategories = [
  {
    icon: Layout,
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "React Query"],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: ["Node.js", "Express", "PostgreSQL", "Supabase", "REST APIs", "GraphQL", "Prisma"],
  },
  {
    icon: Database,
    title: "Database & Storage",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase", "MySQL"],
  },
  {
    icon: Code2,
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Vercel", "GitHub Actions", "VS Code", "Figma"],
  },
  {
    icon: Smartphone,
    title: "Mobile & Other",
    skills: ["React Native", "Responsive Design", "PWA", "SEO Optimization", "Web Performance"],
  },
];

export function SkillsSection() {
  return (
    <SectionContainer id="skills" className="relative bg-black overflow-hidden">
      <GridBackground />

      <div className="relative z-10">
        <AnimatedSection className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-4 text-white"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            A comprehensive toolkit for building modern, scalable web applications
          </motion.p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <ScaleIn key={category.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.1)" }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 h-full hover:bg-white/[0.08] transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all"
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-medium text-white/90 transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

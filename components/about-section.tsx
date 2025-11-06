"use client";

import { SectionContainer } from "./section-container";
import Image from "next/image";
import { AnimatedSection, SlideIn } from "./animated-section";
import {
  Award,
  Briefcase,
  Coffee,
  Users,
  Download,
  Sparkles,
  ChevronRight,
  Calendar,
  MapPin,
  GitCommit,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import portrait from "@/public/img/potrait.jpeg";
import { AnimatedBackground } from "./animated-background";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";

// const stats = [
//   { icon: Briefcase, label: "Years Experience", value: "5+" },
//   { icon: Award, label: "Projects Completed", value: "50+" },
//   { icon: Users, label: "Happy Clients", value: "30+" },
//   { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
// ];

const experience = [
  {
    title: "Senior Frontend Engineer | CTO",
    company: "Isentry Technologies",
    location: "Nigeria",
    period: "Feb 2022 - Present",
    description:
      "Acting as the bridge between business goals and technical execution, architecting scalable front-end and back-end systems with focus on performance and security. Mentoring engineers, driving adoption of modern frameworks, and overseeing systems deployments for high availability. Leading digital transformation projects across industries.",
    highlights: [
      "Architect front-end and back-end systems with focus on performance, security, and maintainability",
      "Mentor engineers and introduce standards for clean code, testing, and documentation",
      "Drive adoption of modern frameworks and practices within the development team",
      "Oversee systems deployments and optimize infrastructure for high availability",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "System Architecture",
      "Team Leadership",
    ],
  },
  {
    title: "Senior React Developer",
    company: "Carter Consulting Ltd",
    location: "Abuja, Nigeria",
    period: "Dec 2022 - Mar 2025",
    description:
      "Engineered complex government platforms with React and TypeScript, ensuring performance, accessibility, and secure API integration. Led code reviews and boosted application performance by 40% through optimization techniques including lazy loading and code splitting.",
    highlights: [
      "Boosted application performance by 40% via lazy loading, code splitting, and analysis",
      "Led peer code reviews and ensured robust testing using Jest and React Testing Library",
      "Delivered UI improvements that enhanced user satisfaction and reduced support queries",
      "Integrated REST APIs and coordinated with backend teams for seamless functionality",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Jest",
      "React Testing Library",
      "REST APIs",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "RI Software",
    location: "Ukraine (Remote)",
    period: "Sept 2024 - Jan 2025",
    description:
      "Developed modular, reusable UI components for high-profile client-facing applications, implementing multi-language support and interactive onboarding flows. Refactored legacy code to improve maintainability and performance, resulting in streamlined user experience.",
    highlights: [
      "Implemented guided onboarding flow reducing friction and increasing user activation",
      "Integrated multi-language support (English, Ukrainian, Russian) for international clients",
      "Developed interactive in-app guidance system with step-by-step walk-throughs",
      "Refactored legacy code improving maintainability and performance significantly",
    ],
    technologies: [
      "React",
      "TypeScript",
      "i18n",
      "UI/UX Design",
      "Component Architecture",
    ],
  },
  {
    title: "Frontend Software Engineer",
    company: "Dataphyte Foundation",
    location: "Abuja, Nigeria",
    period: "Mar 2023 - Dec 2023",
    description:
      "Built dynamic data visualization dashboards using React, D3.js, and TypeScript. Reduced bundle size by 40% and achieved 85% test coverage, elevating code reliability. Played key role in implementing CI/CD pipelines for faster release cycles.",
    highlights: [
      "Reduced bundle size by 40%, accelerating load times and improving user experience",
      "Achieved 85% test coverage, elevating code reliability and deployment confidence",
      "Built dynamic data visualization dashboards using React, D3.js, and TypeScript",
      "Implemented CI/CD pipelines for faster release cycles",
    ],
    technologies: [
      "React",
      "D3.js",
      "TypeScript",
      "CI/CD",
      "Data Visualization",
    ],
  },
  {
    title: "MERN Stack Developer",
    company: "Punch Group",
    location: "San Francisco, CA (Remote)",
    period: "Aug 2022 - Mar 2023",
    description:
      "Developed and maintained real-time admin dashboards with React and WebSocket integrations. Ensured WCAG accessibility standards and built reusable UI components that accelerated development for future sprints.",
    highlights: [
      "Developed real-time admin dashboards with React and WebSocket integrations",
      "Ensured accessibility (WCAG standards) and responsiveness across device types",
      "Built reusable UI components, speeding up development for future sprints",
      "Partnered with designers and QA teams to ship bug-free, user-friendly features",
    ],
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "WebSocket",
      "WCAG",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Trusted Transfer (TTFCX)",
    location: "Sheffield, UK (Remote)",
    period: "Dec 2021 - Oct 2022",
    description:
      "Designed and implemented a new user interface for a data-intensive FinTech platform, resulting in 20% increase in user engagement. Developed automated testing framework that led to 30% reduction in bug reports and implemented real-time financial data updates.",
    highlights: [
      "Increased user engagement by 20% through redesigned UI for FinTech platform",
      "Reduced bug reports by 30% via automated testing framework using React Testing Library",
      "Implemented real-time financial data updates enhancing platform responsiveness",
      "Decreased bug-related support tickets by 30% through UI/UX optimizations",
    ],
    technologies: [
      "React",
      "TypeScript",
      "React Testing Library",
      "FinTech",
      "Real-time Data",
    ],
  },
];

export function AboutSection() {
  const [stats, setStats] = useState({
    commits: "...",
    repos: "...",
    loading: true,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch("/api/github-stats");
        const data = await response.json();

        setStats({
          commits: data.totalCommits.toLocaleString(),
          repos: data.totalRepos.toString(),
          loading: false,
        });
      } catch (error) {
        setStats({
          commits: "1000+",
          repos: "25+",
          loading: false,
        });
      }
    }

    fetchStats();
  }, []);

  const statsData = [
    {
      icon: Briefcase,
      label: "Years Experience",
      value: "5+",
      color: "text-blue-500",
      link: null,
    },
    {
      icon: GitCommit,
      label: "Total Commits",
      value: stats.commits,
      color: "text-orange-500",
      link: "https://github.com/idyWilliams",
      loading: stats.loading,
    },
    {
      icon: Users,
      label: "Happy Clients",
      value: "30+",
      color: "text-green-500",
      link: null,
    },
    {
      icon: Github,
      label: "GitHub Repos",
      value: stats.repos,
      color: "text-[#6e5494]",
      link: "https://github.com/idyWilliams?tab=repositories",
      loading: stats.loading,
    },
  ];

  return (
    <SectionContainer id="about" className="relative bg-black overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <SlideIn direction="left">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold mb-6 text-white"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-lg text-white/70 leading-relaxed"
            >
              <p>
                I&apos;m a passionate full-stack engineer with over 5 years of
                experience building exceptional digital experiences. My journey
                in software development has been driven by a love for creating
                elegant solutions to complex problems.
              </p>
              <p>
                Specializing in modern web technologies like Next.js,
                TypeScript, and React, I&apos;ve helped startups and established
                companies bring their ideas to life. I believe in writing clean,
                maintainable code and staying current with the latest industry
                trends.
              </p>
              {/* <p>
                When I&apos;m not coding, you&apos;ll find me contributing to open-source projects,
                writing technical articles, or exploring new technologies. I&apos;m always eager
                to take on challenging projects that push the boundaries of what&apos;s possible
                on the web.
              </p> */}
              <p>
                Founding{" "}
                <Link
                  className="text-white font-semibold hover:underline"
                  href={"#"}
                >
                  iSentry Internshp
                </Link>{" "}
                came from my desire to give back to create a space where young
                developers can gain real-world experience, learn modern
                engineering practices, and build impactful products. Mentorship
                and collaboration sit at the heart of everything I do; I love
                helping others find their voice and confidence in tech.
              </p>

              <p>
                Beyond my daily work, I’m deeply fascinated by{" "}
                <span className="text-white font-semibold">
                  Artificial Intelligence
                </span>{" "}
                and how it&apos;s shaping the future of human creativity. I
                spend time experimenting with AI-driven tools, exploring new
                frameworks, and learning ways to make technology more
                human-centered and intelligent.
              </p>

              <p>
                Whether it&apos;s building a product, mentoring a team, or
                speaking at any event, I&apos;m driven by one simple goal — to
                create, to inspire, and to push the boundaries of what&apos;s
                possible through technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12"
            >
              {statsData.map((stat, index) => {
                const Component = stat.link ? "a" : "div";
                return (
                  <AnimatedSection key={stat.label} delay={index * 0.1}>
                    <Component
                      // key={stat.label}
                      href={stat.link || undefined}
                      target={stat.link ? "_blank" : undefined}
                      rel={stat.link ? "noopener noreferrer" : undefined}
                      className="text-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-3"
                      >
                        <stat.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="text-2xl font-bold mb-1 text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/50">{stat.label}</div>
                    </Component>
                  </AnimatedSection>
                );
              })}
            </motion.div>
          </div>
        </SlideIn>

        <SlideIn direction="right">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-[4/5] relative">
              <Image
                src={portrait}
                alt="Idorenyin Williams"
                className="w-full h-full object-cover grayscale brightness-90 contrast-110"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </SlideIn>
      </div>

      {/* <div className="relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-white text-center"
        >
          Professional Experience
        </motion.h3>

        <div className="text-center mb-8">
          <a href="/api/download-cv" download>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </a>
        </div> */}
      {/*
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {experience.map((job, index) => (
            <AnimatedSection key={job.company} delay={index * 0.1}>
              <motion.div
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 25px -5px rgba(255, 255, 255, 0.1)",
                }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold mb-2 text-white">
                      {job.title}
                    </h4>
                    <p className="text-white/70 font-medium mb-2">
                      {job.company}
                    </p>
                    <span className="text-sm text-white/50">{job.period}</span>
                  </div>
                  <p className="text-white/60 leading-relaxed flex-1">
                    {job.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div> */}

      {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {experience.map((job, index) => (
            <AnimatedSection key={job.company} delay={index * 0.1}>
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 30px -5px rgba(255, 255, 255, 0.15)",
                }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all h-full flex flex-col group"
              >

                <div className="mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                        {job.title}
                      </h4>
                      <p className="text-white/80 font-semibold mb-1 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {job.company}
                      </p>
                      {job.location && (
                        <p className="text-sm text-white/60 flex items-center gap-1.5 mb-2">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </p>
                      )}
                    </div>

                  </div>
                  <span className="text-sm text-white/50 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {job.period}
                  </span>
                </div>


                <p className="text-white/70 leading-relaxed mb-4 text-sm">
                  {job.description}
                </p>


                {job.highlights && job.highlights.length > 0 && (
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-white/90 mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {job.highlights.slice(0, 3).map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-white/60 flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span className="flex-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    {job.highlights.length > 3 && (
                      <button
                        onClick={() => {
                          // You can implement a modal or expand functionality here
                        }}
                        className="text-xs text-primary hover:text-primary/80 mt-2 flex items-center gap-1"
                      >
                        +{job.highlights.length - 3} more achievements
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                )}


                {job.technologies && job.technologies.length > 0 && (
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.slice(0, 5).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-white/10 text-white/80 border-white/20 hover:bg-white/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {job.technologies.length > 5 && (
                        <Badge
                          variant="outline"
                          className="text-xs text-white/60 border-white/30"
                        >
                          +{job.technologies.length - 5}
                        </Badge>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div> */}
      {/* </div> */}
    </SectionContainer>
  );
}

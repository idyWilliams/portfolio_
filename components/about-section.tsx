"use client";

import { SectionContainer } from "./section-container";
import { AnimatedSection, SlideIn } from "./animated-section";
import { Award, Briefcase, Coffee, Users } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedBackground } from "./animated-background";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "5+" },
  { icon: Award, label: "Projects Completed", value: "50+" },
  { icon: Users, label: "Happy Clients", value: "30+" },
  { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
];

const experience = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2022 - Present",
    description: "Leading development of enterprise-scale applications using Next.js, TypeScript, and cloud infrastructure. Mentoring junior developers and architecting scalable solutions.",
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2022",
    description: "Built responsive web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality products on time.",
  },
  {
    title: "Frontend Developer",
    company: "Creative Agency",
    period: "2019 - 2020",
    description: "Developed modern, user-friendly interfaces using React and modern CSS frameworks. Improved application performance by 40%.",
  },
];

export function AboutSection() {
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
                I'm a passionate full-stack engineer with over 5 years of experience building
                exceptional digital experiences. My journey in software development has been
                driven by a love for creating elegant solutions to complex problems.
              </p>
              <p>
                Specializing in modern web technologies like Next.js, TypeScript, and React,
                I've helped startups and established companies bring their ideas to life.
                I believe in writing clean, maintainable code and staying current with the
                latest industry trends.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects,
                writing technical articles, or exploring new technologies. I'm always eager
                to take on challenging projects that push the boundaries of what's possible
                on the web.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12"
            >
              {stats.map((stat, index) => (
                <AnimatedSection key={stat.label} delay={index * 0.1}>
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-3"
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-2xl font-bold mb-1 text-white">{stat.value}</div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </motion.div>
          </div>
        </SlideIn>

        <SlideIn direction="right">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-[4/5] relative">
              <img
                src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Idorenyin Williams"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </SlideIn>
      </div>

      <div className="relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-white text-center"
        >
          Professional Experience
        </motion.h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {experience.map((job, index) => (
            <AnimatedSection key={job.company} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgba(255, 255, 255, 0.1)" }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold mb-2 text-white">{job.title}</h4>
                    <p className="text-white/70 font-medium mb-2">{job.company}</p>
                    <span className="text-sm text-white/50">{job.period}</span>
                  </div>
                  <p className="text-white/60 leading-relaxed flex-1">
                    {job.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

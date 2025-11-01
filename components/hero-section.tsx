"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero_img from "@/public/img/landscape.jpeg";
import portrait from "@/public/img/potrait.jpeg";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [showInitials, setShowInitials] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowInitials((prev) => !prev);
    }, 4000); // Flip every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-70 z-10" />
        <Image
          src={hero_img}
          alt="Idorenyin Williams"
          className="w-full h-full object-cover"
          fill
          priority
        />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl perspective-1000">
              <AnimatePresence mode="wait">
                {!showInitials ? (
                  <motion.div
                    key="image"
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: 0 }}
                    exit={{ rotateY: 90 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <Image
                      src={portrait}
                      alt="Idorenyin Williams"
                      className="w-full h-full object-cover grayscale brightness-90 contrast-110"
                      fill
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="initials"
                    initial={{ rotateY: -90 }}
                    animate={{ rotateY: 0 }}
                    exit={{ rotateY: 90 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="text-white font-bold text-6xl tracking-wider"
                      style={{
                        textShadow: "0 4px 20px rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      IW
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-white"
          >
            Idorenyin Williams
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-white/90"
          >
            Senior Frontend Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl sm:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Building exceptional web experiences with Next.js, TypeScript, and
            modern tech stacks. 5+ years of crafting scalable solutions for
            businesses worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="gap-2 bg-white text-black hover:bg-white/90"
              asChild
            >
              <a href="#projects">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white/10"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/idyWilliams",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/idorenyin-williams/",
                label: "LinkedIn",
              },
              {
                icon: Twitter,
                href: "https://x.com/iWil_lian",
                label: "Twitter",
              },
              {
                icon: Mail,
                href: "mailto:widorenyin0@gmail.com",
                label: "Email",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-black transition-colors flex items-center justify-center text-white"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-[-120px] left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-white/50"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

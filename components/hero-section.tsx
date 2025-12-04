"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero_img from "@/public/img/landscape.jpeg";
import portrait from "@/public/img/potrait.jpeg";
import { useState, useEffect } from "react";
import { SiMedium } from "react-icons/si";

export function HeroSection() {
  const [showInitials, setShowInitials] = useState(false);
 const [animationIndex, setAnimationIndex] = useState(0);

const animations = [
  // 1. Coin Flip
  {
    exit: { rotateY: 90, opacity: 0 },
    enter: { rotateY: -90, opacity: 0 },
    animate: { rotateY: 0, opacity: 1 },
    transition: { duration: 0.35, ease: [0.42, 0, 0.58, 1] },
  },
  // 2. Slide Out (Left/Right)
  {
    exit: { x: 180, opacity: 0, scale: 0.7 },
    enter: { x: -180, opacity: 0, scale: 0.7 },
    animate: { x: 0, opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: [0.0, 0.0, 0.58, 1.0] },
  },
  // 3. Fade & Scale
  {
    exit: { scale: 0, opacity: 0, rotate: -180 },
    enter: { scale: 0, opacity: 0, rotate: 180 },
    animate: { scale: 1, opacity: 1, rotate: 0 },
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
  },
  // 4. Swipe Vertical
  {
    exit: { y: -180, opacity: 0, rotateX: 90 },
    enter: { y: 180, opacity: 0, rotateX: -90 },
    animate: { y: 0, opacity: 1, rotateX: 0 },
    transition: { duration: 0.35, ease: [0.42, 0, 0.58, 1] },
  },
  // 5. Dissolve & Zoom
  {
    exit: { scale: 1.5, opacity: 0, filter: "blur(15px)" },
    enter: { scale: 0.5, opacity: 0, filter: "blur(15px)" },
    animate: { scale: 1, opacity: 1, filter: "blur(0px)" },
    transition: { duration: 0.45, ease: [0.42, 0, 0.58, 1] },
  },
  // 6. 3D Flip Horizontal
  {
    exit: { rotateX: 90, opacity: 0, scale: 0.8 },
    enter: { rotateX: -90, opacity: 0, scale: 0.8 },
    animate: { rotateX: 0, opacity: 1, scale: 1 },
    transition: { duration: 0.35, ease: [0.42, 0, 0.58, 1] },
  },
  // 7. Shred Effect (Slice Y-axis)
  {
    exit: { scaleX: 0, opacity: 0, x: -50 },
    enter: { scaleX: 0, opacity: 0, x: 50 },
    animate: { scaleX: 1, opacity: 1, x: 0 },
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  // 8. Spiral In/Out
  {
    exit: { scale: 0, rotate: 360, opacity: 0 },
    enter: { scale: 0, rotate: -360, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
  // 9. Elastic Bounce
  {
    exit: { scale: 0, opacity: 0, y: 100 },
    enter: { scale: 0, opacity: 0, y: -100 },
    animate: { scale: 1, opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] },
  },
  // 10. Glitch/Shatter
  {
    exit: { x: [0, -5, 5, -5, 5, 0], opacity: 0, scale: 0.9 },
    enter: { x: [0, 5, -5, 5, -5, 0], opacity: 0, scale: 0.9 },
    animate: { x: 0, opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  // 11. Diagonal Wipe
  {
    exit: { x: 150, y: -150, opacity: 0, rotate: 45 },
    enter: { x: -150, y: 150, opacity: 0, rotate: -45 },
    animate: { x: 0, y: 0, opacity: 1, rotate: 0 },
    transition: { duration: 0.35, ease: [0.42, 0, 0.58, 1] },
  },
  // 12. Squeeze In/Out
  {
    exit: { scaleY: 0, scaleX: 1.3, opacity: 0 },
    enter: { scaleY: 0, scaleX: 1.3, opacity: 0 },
    animate: { scaleY: 1, scaleX: 1, opacity: 1 },
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
  },
  // 13. Corner Spin
  {
    exit: { rotate: 90, scale: 0, x: 100, y: -100, opacity: 0 },
    enter: { rotate: -90, scale: 0, x: -100, y: 100, opacity: 0 },
    animate: { rotate: 0, scale: 1, x: 0, y: 0, opacity: 1 },
    transition: { duration: 0.45, ease: [0.42, 0, 0.58, 1] },
  },
  // 14. Wave Distortion
  {
    exit: { rotateY: 180, scale: 0.8, x: -50, opacity: 0 },
    enter: { rotateY: -180, scale: 0.8, x: 50, opacity: 0 },
    animate: { rotateY: 0, scale: 1, x: 0, opacity: 1 },
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  // 15. Door Swing
  {
    exit: { rotateY: -90, transformOrigin: "left", opacity: 0 },
    enter: { rotateY: 90, transformOrigin: "right", opacity: 0 },
    animate: { rotateY: 0, opacity: 1 },
    transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
  },
];

useEffect(() => {
  const interval = setInterval(() => {
    setShowInitials((prev) => !prev);
    setAnimationIndex((prev) => (prev + 1) % animations.length);
  }, 5000); // Stay for 5 seconds before changing

  return () => clearInterval(interval);
}, []);

 const currentAnimation = animations[animationIndex];

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
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <AnimatePresence mode="wait">
                {!showInitials ? (
                  <motion.div
                    key={`image-${animationIndex}`}
                    initial={currentAnimation.enter}
                    animate={currentAnimation.animate}
                    exit={currentAnimation.exit}
                    transition={currentAnimation.transition as any}
                    className="absolute inset-0"
                    style={{
                      backfaceVisibility: "hidden",
                      transformStyle: "preserve-3d",
                    }}
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
                    key={`logo-${animationIndex}`}
                    initial={currentAnimation.enter}
                    animate={currentAnimation.animate}
                    exit={currentAnimation.exit}
                    transition={currentAnimation.transition as any}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      backfaceVisibility: "hidden",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Image
                      src="/img/LOGO_DARK.png"
                      alt="Idorenyin Williams Logo"
                      fill
                      className="object-cover rounded-full drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                    />
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
            Senior Frontend Software Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl sm:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Building exceptional web experiences with Next.js, TypeScript, and
            modern tech stacks. 4+ years of crafting scalable solutions for
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
                icon: SiMedium,
                href: "https://medium.com/@idorenyinwilliams",
                label: "Medium",
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

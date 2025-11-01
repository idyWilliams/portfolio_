"use client";

import { Github, Linkedin, Twitter, Mail, ArrowUp, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/#about" },
      { label: "Skills", href: "/#skills" },
      { label: "Projects", href: "/#projects" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "GitHub", href: "https://github.com" },
      { label: "Recommendations", href: "/#recommendations" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Twitter", href: "https://twitter.com" },
      { label: "Email", href: "mailto:hello@example.com" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">Idorenyin Williams</h3>
                <p className="text-sm text-white/60 mb-6">Full-Stack Engineer & Developer</p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <MapPin className="w-4 h-4 text-white/40" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-green-400/60" />
                    <span>Available for projects</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-black transition-all flex items-center justify-center group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {footerLinks.map((section, sectionIdx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + sectionIdx * 0.1 }}
              >
                <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-widest">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        className="text-white/60 hover:text-white transition-all inline-flex items-center gap-2 group"
                        whileHover={{ x: 4 }}
                      >
                        <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-white transition-colors" />
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"
            style={{ transformOrigin: "center" }}
          />

          <div className="flex flex-col sm:flex-row items-center justify-between">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-white/50 text-center sm:text-left"
            >
              &copy; {currentYear} Idorenyin Williams. Crafted with precision using Next.js &amp; TypeScript.
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 sm:mt-0 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-black transition-all flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

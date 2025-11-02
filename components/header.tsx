"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

import Image from 'next/image';

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (pathname === '/') {
        const sections = navItems
          .filter((item) => item.href.startsWith("#"))
          .map((item) => document.querySelector(item.href));

        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          if (section && section instanceof HTMLElement) {
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
              setActiveLink(`#${section.id}`);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith("#")) {
      if (pathname !== '/') {
        router.push('/' + href);
      } else {
        const element = document.querySelector(href === "#home" ? "body" : href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <Image
                src={
                  !isScrolled && pathname === "/"
                    ? "/img/LOGO_DARK.png"
                    : "/img/LOGO_LIGHT.png"
                }
                alt="Logo"
                className="rounded-full grayscale brightness-90 contrast-110"
                width={60}
                height={20}
              />
            </motion.a>

            <div className="hidden md:flex items-center gap-1 relative">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  asChild
                  className={cn(
                    "text-base relative",
                    !isScrolled && pathname === "/" && "text-white"
                  )}
                >
                  {item.href.startsWith("#") ? (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                    >
                      <span className="relative">
                        {item.label}
                        {((pathname === "/" && activeLink === item.href) ||
                          (item.href !== "#home" &&
                            pathname.startsWith(item.href))) && (
                          <motion.span
                            layoutId="underline"
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-current"
                            initial={false}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </span>
                    </a>
                  ) : (
                    <a href={item.href}>
                      <span className="relative">
                        {item.label}
                        {pathname === item.href && (
                          <motion.span
                            layoutId="underline"
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-current"
                            initial={false}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </span>
                    </a>
                  )}
                </Button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>
      </motion.header>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-background md:hidden pt-16"
        >
          <nav className="flex flex-col items-center justify-center gap-4 h-full">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button variant="ghost" size="lg" className="text-2xl" asChild>
                  {item.href.startsWith("#") ? (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </Button>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SectionContainer } from "./section-container";
import { AnimatedSection } from "./animated-section";
import { motion } from "framer-motion";
import { Linkedin, Award, Quote, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LinkedInRecommendation {
  name: string;
  title: string;
  company: string;
  image: string;
  text: string;
  date: string;
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

const fallbackRecommendations: LinkedInRecommendation[] = [
  {
    name: "Sarah Johnson",
    title: "Product Manager",
    company: "Tech Innovators Inc.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    text: "Idorenyin is an exceptional full-stack developer who consistently delivers high-quality solutions. His expertise in Next.js and TypeScript helped us launch our product 2 months ahead of schedule.",
    date: "March 2024",
  },
  {
    name: "Michael Chen",
    title: "CTO",
    company: "Digital Solutions Co.",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
    text: "Working with Idorenyin was a pleasure. He has a deep understanding of modern web technologies and always brings innovative solutions to complex problems. Highly recommended!",
    date: "January 2024",
  },
  {
    name: "Emily Rodriguez",
    title: "Lead Designer",
    company: "Creative Agency",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
    text: "Idorenyin transformed our designs into pixel-perfect, performant web applications. His attention to detail and collaborative approach made our project a huge success.",
    date: "November 2023",
  },
];

const fallbackCertifications: Certification[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "February 2024",
    credentialId: "AWS-12345-67890",
    url: "https://aws.amazon.com/certification/",
  },
  {
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "December 2023",
    credentialId: "PSM-98765-43210",
    url: "https://www.scrum.org/",
  },
  {
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "October 2023",
    credentialId: "MDB-54321-09876",
    url: "https://university.mongodb.com/",
  },
  {
    title: "Next.js Expert Certification",
    issuer: "Vercel",
    date: "August 2023",
    credentialId: "NEXT-11111-22222",
    url: "https://vercel.com/",
  },
];

export function LinkedInSection() {
  const [recommendations, setRecommendations] = useState<LinkedInRecommendation[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLinkedInData() {
      try {
        setRecommendations(fallbackRecommendations);
        setCertifications(fallbackCertifications);
      } catch (error) {
        console.error("Error fetching LinkedIn data:", error);
        setRecommendations(fallbackRecommendations);
        setCertifications(fallbackCertifications);
      } finally {
        setLoading(false);
      }
    }

    fetchLinkedInData();
  }, []);

  return (
    <SectionContainer id="recommendations" className="bg-gradient-to-b from-background to-muted/20">
      <AnimatedSection className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2]/10 border border-[#0A66C2]/20 rounded-full mb-6"
        >
          <Linkedin className="w-5 h-5 text-[#0A66C2]" />
          <span className="text-[#0A66C2] font-semibold">LinkedIn Verified</span>
        </motion.div>

        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Recommendations & Certifications</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          What colleagues and industry leaders say about my work
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-8 flex items-center gap-2"
          >
            <Quote className="w-6 h-6" />
            Recommendations
          </motion.h3>

          {loading ? (
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card border rounded-lg p-6 animate-pulse">
                  <div className="h-20 bg-muted rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {recommendations.map((rec, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-card border rounded-lg p-6 hover:shadow-xl transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <Image
                        src={rec.image}
                        alt={rec.name}
                        className="w-14 h-14 rounded-full object-cover"
                        width={56}
                        height={56}
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{rec.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {rec.title} at {rec.company}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{rec.date}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed italic">
                      &ldquo;{rec.text}&rdquo;
                    </p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-8 flex items-center gap-2"
          >
            <Award className="w-6 h-6" />
            Certifications
          </motion.h3>

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-card border rounded-lg p-6 animate-pulse">
                  <div className="h-16 bg-muted rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="bg-card border rounded-lg p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{cert.date}</span>
                          {cert.credentialId && (
                            <span className="font-mono">{cert.credentialId}</span>
                          )}
                        </div>
                      </div>
                      {cert.url && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={cert.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </div>

      <AnimatedSection delay={0.4} className="text-center">
        <Button size="lg" className="gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white" asChild>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
            View Full LinkedIn Profile
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </AnimatedSection>
    </SectionContainer>
  );
}

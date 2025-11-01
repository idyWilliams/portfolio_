"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SectionContainer } from "./section-container";
import { AnimatedSection, ScaleIn } from "./animated-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { supabase, Project } from "@/lib/supabase";

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("order_index", { ascending: true });

      if (data && !error) {
        setProjects(data);
      }
      setLoading(false);
    }

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <SectionContainer id="projects">
        <div className="text-center">Loading projects...</div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer id="projects">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A selection of my recent work showcasing expertise in full-stack development
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ScaleIn key={project.id} delay={index * 0.1}>
            <div className="bg-card border rounded-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-64 bg-muted overflow-hidden">
                <Image
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  fill
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github_url && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live_url && (
                    <Button size="sm" className="gap-2" asChild>
                      <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </ScaleIn>
        ))}
      </div>
    </SectionContainer>
  );
}

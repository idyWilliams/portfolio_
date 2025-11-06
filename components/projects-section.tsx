"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SectionContainer } from "./section-container";
import { AnimatedSection, ScaleIn } from "./animated-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  Briefcase,
  PlayCircle,
  ChevronDown,
  ChevronUp,
  Filter,
} from "lucide-react";
import { supabase, Project } from "@/lib/supabase";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

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

  // Get unique categories
  const categoryList = projects
    .map((p) => p.category)
    .filter(Boolean) as string[];
  const uniqueCategories = categoryList.filter(
    (c, i) => categoryList.indexOf(c) === i
  );
  const categories = ["All", ...uniqueCategories];

  // Filter projects by category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Format date range
  const formatDateRange = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const formatOptions: Intl.DateTimeFormatOptions = {
      month: "short",
      year: "numeric",
    };
    const startStr = startDate.toLocaleDateString("en-US", formatOptions);
    const endStr = endDate.toLocaleDateString("en-US", formatOptions);

    return `${startStr} - ${endStr}`;
  };

  // Calculate duration in months
  const calculateDuration = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const months =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());
    return months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "1 month";
  };

  if (loading) {
    return (
      <SectionContainer id="projects">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-muted-foreground">Loading projects...</p>
          </div>
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer id="projects">
      <AnimatedSection className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Featured Projects
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A selection of my recent work showcasing expertise in full-stack
          development, from FinTech platforms to AI-powered solutions
        </p>
      </AnimatedSection>

      {/* Category Filter */}
      <AnimatedSection className="mb-8">
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="w-4 h-4" />
            <span>Filter by:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all"
            >
              {category}
            </Button>
          ))}
        </div>
      </AnimatedSection>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <ScaleIn key={project.id} delay={index * 0.1}>
            <div className="bg-card border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
              {/* Project Image */}
              <div className="relative h-64 bg-muted overflow-hidden">
                <Image
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Status Badge */}
                {project.status && (
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={
                        project.status === "Live" ? "default" : "secondary"
                      }
                      className="shadow-lg backdrop-blur-sm"
                    >
                      {project.status}
                    </Badge>
                  </div>
                )}
                {/* Category Badge */}
                {project.category && (
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="outline"
                      className="bg-background/80 backdrop-blur-sm"
                    >
                      {project.category}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Title & Company */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.company && (
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      {project.company}
                    </p>
                  )}
                </div>

                {/* Meta Information */}
                <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                  {project.start_date && project.end_date && (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {formatDateRange(project.start_date, project.end_date)}
                      </span>
                      <span className="text-xs">
                        (
                        {calculateDuration(
                          project.start_date,
                          project.end_date
                        )}
                        )
                      </span>
                    </div>
                  )}
                  {project.team_size && (
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      <span>Team of {project.team_size}</span>
                    </div>
                  )}
                </div>

                {/* Role Badge */}
                {project.role && (
                  <div className="mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {project.role}
                    </Badge>
                  </div>
                )}

                {/* Short Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Expandable Long Description */}
                {project.long_description && (
                  <div className="mb-4">
                    {expandedProject === project.id ? (
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.long_description}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setExpandedProject(null)}
                          className="gap-1 text-xs h-auto py-1 px-2"
                        >
                          <ChevronUp className="w-3 h-3" />
                          Show less
                        </Button>
                      </div>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setExpandedProject(project.id)}
                        className="gap-1 text-xs h-auto py-1 px-2"
                      >
                        <ChevronDown className="w-3 h-3" />
                        Read more
                      </Button>
                    )}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 6 && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Badge
                          variant="outline"
                          className="text-xs cursor-pointer hover:bg-accent"
                        >
                          +{project.technologies.length - 6} more
                        </Badge>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>All Technologies</DialogTitle>
                          <DialogDescription>
                            Complete technology stack used in {project.title}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.github_url && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 flex-1"
                      asChild
                    >
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live_url && (
                    <Button size="sm" className="gap-2 flex-1" asChild>
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.demo_video_url && (
                    <Button
                      variant="secondary"
                      size="sm"
                      className="gap-2 flex-1"
                      asChild
                    >
                      <a
                        href={project.demo_video_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <PlayCircle className="w-4 h-4" />
                        Video
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </ScaleIn>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">
            No projects found in this category.
          </p>
        </div>
      )}
    </SectionContainer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimatedSection, ScaleIn } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Eye, Heart } from "lucide-react";
import { supabase, BlogPost } from "@/lib/supabase";
import { formatNumber } from "@/lib/utils";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false });

      if (data && !error) {
        setPosts(data);
      }
      setLoading(false);
    }

    fetchPosts();
  }, []);

  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  ).sort();

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-6xl font-bold mb-6"
            >
              Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Thoughts on software development, tech trends, and lessons learned
              along the way
            </motion.p>
          </AnimatedSection>

          {allTags.length > 0 && (
            <AnimatedSection delay={0.2} className="mb-12">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedTag === null
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                    }`}
                >
                  All Posts
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedTag === tag
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80"
                      }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </AnimatedSection>
          )}

          {loading ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Loading posts...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No posts found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <ScaleIn key={post.id} delay={index * 0.1}>
                  <Link href={`/blog/${post.slug}`}>
                    <article className="bg-card border rounded-lg overflow-hidden hover:shadow-xl transition-shadow group h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                        {post.cover_image ? (
                          <Image
                            src={post.cover_image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            fill
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center gap-3 relative">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-[0.02]">
                              <svg width="100%" height="100%">
                                <pattern
                                  id="pattern"
                                  x="0"
                                  y="0"
                                  width="40"
                                  height="40"
                                  patternUnits="userSpaceOnUse"
                                >
                                  <circle
                                    cx="20"
                                    cy="20"
                                    r="1.5"
                                    fill="currentColor"
                                  />
                                </pattern>
                                <rect
                                  width="100%"
                                  height="100%"
                                  fill="url(#pattern)"
                                />
                              </svg>
                            </div>

                            {/* Icon */}
                            <div className="relative z-10 text-muted-foreground/40">
                              <svg
                                className="w-20 h-20"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                            </div>

                            <span className="text-sm font-medium text-muted-foreground/60 relative z-10">
                              No cover image available
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-4 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3 justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">

                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {post.published_at ? (
                                new Date(post.published_at).toLocaleDateString(
                                  "en-US",
                                  {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  }
                                )
                              ) : (
                                <span className="text-muted-foreground">
                                  Unknown
                                </span>
                              )}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.read_time} min read
                            </span>
                          </div>




                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">

                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {formatNumber(post.views || 0)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              {formatNumber(post.likes || 0)}
                            </span>
                          </div>

                        </div>

                        <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </article>
                  </Link>
                </ScaleIn>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

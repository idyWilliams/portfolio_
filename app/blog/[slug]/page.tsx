"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Eye } from "lucide-react";
import { ShareButtons } from "@/components/blog/share-buttons";
import { LikeButton } from "@/components/blog/like-button";
import { supabase, BlogPost } from "@/lib/supabase";
import { formatNumber } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", params.slug)
        .eq("published", true)
        .maybeSingle();

      if (data && !error) {
        setPost(data);
      }
      setLoading(false);
    }

    if (params.slug) {
      fetchPost();
    }
  }, [params.slug]);

  // Increment view count
  useEffect(() => {
    const incrementView = async () => {
      if (!params.slug) return;

      // Check if already viewed in this session to avoid duplicate counts
      const viewedPosts = JSON.parse(sessionStorage.getItem("viewed_posts") || "[]");
      if (viewedPosts.includes(params.slug)) return;

      await supabase.rpc("increment_blog_view", {
        post_slug: params.slug,
      });

      // Update local state to reflect the new view count
      setPost((prev) => prev ? { ...prev, views: (prev.views || 0) + 1 } : null);

      sessionStorage.setItem("viewed_posts", JSON.stringify([...viewedPosts, params.slug]));
    };

    incrementView();
  }, [params.slug]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-muted-foreground">Loading...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Button onClick={() => router.push("/blog")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-20 bg-background">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="ghost"
              onClick={() => router.push("/blog")}
              className="mb-8 -ml-4 hover:bg-accent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>

            {/* Article Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.published_at
                    ? new Date(post.published_at).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "Unknown date"}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.read_time} min read
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {formatNumber(post.views || 0)} views
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-border">
                <ShareButtons title={post.title} slug={post.slug} />
                <LikeButton slug={post.slug} initialLikes={post.likes || 0} />
              </div>
            </div>

            {/* Cover Image */}
            {post.cover_image && (
              <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12 bg-muted shadow-xl">
                <Image
                  src={post.cover_image}
                  alt={post.title}
                  className="object-cover"
                  fill
                  priority
                />
              </div>
            )}

            {/* Article Content with Proper Markdown Rendering */}
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-strong:font-semibold prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-[#282c34] prose-pre:border prose-pre:border-border prose-img:rounded-lg prose-img:shadow-md prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:py-1 prose-ul:my-6 prose-ol:my-6 prose-li:my-2">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  // Custom code block rendering with syntax highlighting
                  code(props: any) {
                    const { node, inline, className, children, ...rest } = props;
                    const match = /language-(\w+)/.exec(String(className || ""));
                    const codeString = String(children).replace(/\n$/, "");

                    return !inline && match ? (
                      <div className="relative my-6 rounded-lg overflow-hidden">
                        <div className="absolute top-0 right-0 px-4 py-2 text-xs text-muted-foreground bg-muted/50 rounded-bl-lg">
                          {match[1]}
                        </div>
                        <SyntaxHighlighter
                          style={oneDark}
                          language={match[1]}
                          PreTag="div"
                          customStyle={{
                            margin: 0,
                            padding: "2rem 1.5rem",
                            fontSize: "0.9rem",
                            lineHeight: "1.7",
                            borderRadius: "0.5rem",
                          }}
                          {...rest}
                        >
                          {codeString}
                        </SyntaxHighlighter>
                      </div>
                    ) : (
                      <code className={className} {...rest}>
                        {children}
                      </code>
                    );
                  },
                  // Custom heading rendering with IDs for anchor links
                  h1: ({ children }) => (
                    <h1 id={String(children).toLowerCase().replace(/\s+/g, "-")}>
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 id={String(children).toLowerCase().replace(/\s+/g, "-")}>
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 id={String(children).toLowerCase().replace(/\s+/g, "-")}>
                      {children}
                    </h3>
                  ),
                  // Better list styling
                  ul: ({ children }) => (
                    <ul className="list-disc pl-6 space-y-2">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal pl-6 space-y-2">{children}</ol>
                  ),
                  // Better blockquote styling
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                      {children}
                    </blockquote>
                  ),
                  // Link styling
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Back to Blog Button */}
            <div className="mt-16 pt-8 border-t border-border">
              <Button
                onClick={() => router.push("/blog")}
                size="lg"
                className="hover:bg-primary/90"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Posts
              </Button>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  );
}

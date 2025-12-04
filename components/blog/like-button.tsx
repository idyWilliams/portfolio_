"use client";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { formatNumber } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface LikeButtonProps {
  slug: string;
  initialLikes: number;
}

export function LikeButton({ slug, initialLikes }: LikeButtonProps) {
  const { toast } = useToast();
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);
  const [isLiking, setIsLiking] = useState(false);

  // Check if user has already liked this post in this session
  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("liked_posts") || "[]");
    if (likedPosts.includes(slug)) {
      setHasLiked(true);
    }
  }, [slug]);

  const handleLike = async () => {
    if (hasLiked || isLiking) return;

    setIsLiking(true);

    // Optimistic update
    setLikes((prev) => prev + 1);
    setHasLiked(true);

    try {
      const { error } = await supabase.rpc("increment_blog_like", {
        post_slug: slug,
      });

      if (error) throw error;

      // Persist like state
      const likedPosts = JSON.parse(localStorage.getItem("liked_posts") || "[]");
      localStorage.setItem("liked_posts", JSON.stringify([...likedPosts, slug]));

      toast({
        title: "Thanks for the love!",
        description: "Your like has been recorded.",
      });
    } catch (error) {
      // Revert optimistic update
      setLikes((prev) => prev - 1);
      setHasLiked(false);
      toast({
        title: "Error",
        description: "Failed to like post. Please try again.",
        variant: "destructive",
      });
      console.error("Error liking post:", error);
    } finally {
      setIsLiking(false);
    }
  };

  return (
    <Button
      variant={hasLiked ? "secondary" : "outline"}
      size="sm"
      className={`group gap-2 transition-all ${
        hasLiked ? "text-red-500 bg-red-500/10 hover:bg-red-500/20" : "hover:text-red-500"
      }`}
      onClick={handleLike}
      disabled={hasLiked || isLiking}
    >
      <div className="relative">
        <Heart
          className={`h-4 w-4 transition-transform ${
            hasLiked ? "fill-current scale-110" : "group-hover:scale-110"
          }`}
        />
        <AnimatePresence>
          {isLiking && (
            <motion.span
              initial={{ scale: 0, opacity: 0, y: 0 }}
              animate={{ scale: 1.5, opacity: 0, y: -20 }}
              exit={{ opacity: 0 }}
              className="absolute -top-4 -right-2 text-red-500 pointer-events-none"
            >
              <Heart className="h-4 w-4 fill-current" />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <span className="font-medium min-w-[1ch]">{formatNumber(likes)}</span>
      <span className="sr-only">Likes</span>
    </Button>
  );
}

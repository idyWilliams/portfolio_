"use client";

import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Facebook,
  Link as LinkIcon,
  Check,
} from "lucide-react";
import { XIcon } from "@/components/ui/x-icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  // Use window.location.origin if available, otherwise fallback
  const origin =
    typeof window !== "undefined" ? window.location.origin : "https://example.com";
  const url = `${origin}/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(`${title} by Idorenyin Williams`);

  const shareLinks = [
    {
      name: "X",
      icon: XIcon,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: "hover:text-black dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:text-[#1877F2]",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({
        title: "Link copied",
        description: "The link has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy link.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground mr-2">
        Share:
      </span>
      {shareLinks.map((platform) => (
        <Button
          key={platform.name}
          variant="ghost"
          size="icon"
          className={`h-8 w-8 ${platform.color}`}
          onClick={() => window.open(platform.url, "_blank", "width=600,height=400")}
          title={`Share on ${platform.name}`}
        >
          <platform.icon className="h-4 w-4" />
          <span className="sr-only">Share on {platform.name}</span>
        </Button>
      ))}
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 hover:text-primary"
        onClick={copyToClipboard}
        title="Copy Link"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <LinkIcon className="h-4 w-4" />
        )}
        <span className="sr-only">Copy Link</span>
      </Button>
    </div>
  );
}

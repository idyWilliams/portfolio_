// lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Project {
  id: string;
  title: string;
  description: string;
  long_description?: string | null;
  image_url: string;
  technologies: string[];
  github_url?: string | null;
  live_url?: string | null;
  demo_video_url?: string | null;
  featured: boolean;
  order_index: number;

  // ✅ New date fields
  start_date?: string | null;
  end_date?: string | null;
  year?: number | null;

  // ✅ New metadata fields
  status?: string | null;
  role?: string | null;
  team_size?: string | null;
  company?: string | null;
  category?: string | null;

  // Timestamps
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  content: string;
  cover_image?: string | null;
  tags: string[];
  read_time?: number | null;
  published: boolean;
  published_at?: string | null;
  created_at: string;
  updated_at: string;
  views: number;
  likes: number;
}

// ✅ Type for creating new projects (without auto-generated fields)
export type ProjectInsert = Omit<Project, "id" | "created_at" | "updated_at">;

// ✅ Type for updating projects (all fields optional except id)
export type ProjectUpdate = Partial<
  Omit<Project, "id" | "created_at" | "updated_at">
>;

// ✅ Type for creating new blog posts
export type BlogPostInsert = Omit<BlogPost, "id" | "created_at" | "updated_at">;

// ✅ Type for updating blog posts
export type BlogPostUpdate = Partial<
  Omit<BlogPost, "id" | "created_at" | "updated_at">
>;

// ✅ Helper type for filtering projects
export interface ProjectFilters {
  category?: string;
  year?: number;
  status?: string;
  featured?: boolean;
}

// ✅ Helper type for filtering blog posts
export interface BlogPostFilters {
  published?: boolean;
  tags?: string[];
  year?: number;
}

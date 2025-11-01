/*
  # Portfolio Database Schema

  ## Overview
  Creates tables for managing blog posts and projects in the portfolio website.

  ## New Tables
  
  ### `projects`
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Project name
  - `description` (text) - Short description
  - `long_description` (text) - Detailed project information
  - `image_url` (text) - Main project image
  - `technologies` (text[]) - Array of technologies used
  - `github_url` (text, nullable) - Link to GitHub repository
  - `live_url` (text, nullable) - Link to live demo
  - `featured` (boolean) - Whether to feature on homepage
  - `order_index` (integer) - Display order
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `blog_posts`
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Blog post title
  - `slug` (text, unique) - URL-friendly identifier
  - `excerpt` (text) - Short preview
  - `content` (text) - Full blog post content (markdown)
  - `cover_image` (text) - Cover image URL
  - `tags` (text[]) - Array of tags/categories
  - `read_time` (integer) - Estimated reading time in minutes
  - `published` (boolean) - Publication status
  - `published_at` (timestamptz, nullable) - Publication date
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  
  Both tables are set up with RLS enabled. Since this is a portfolio website:
  - Public read access for published content
  - No write access (content managed through admin interface or direct DB access)

  ## Notes
  
  - Uses UUID for primary keys for better security and scalability
  - Includes soft publish flags for draft management
  - Technologies and tags stored as arrays for flexible filtering
  - Timestamps use timestamptz for timezone awareness
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  long_description text NOT NULL,
  image_url text NOT NULL,
  technologies text[] DEFAULT '{}',
  github_url text,
  live_url text,
  featured boolean DEFAULT false,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  cover_image text NOT NULL,
  tags text[] DEFAULT '{}',
  read_time integer DEFAULT 5,
  published boolean DEFAULT true,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create index for blog slug lookups
CREATE INDEX IF NOT EXISTS blog_posts_slug_idx ON blog_posts(slug);

-- Create index for featured projects
CREATE INDEX IF NOT EXISTS projects_featured_idx ON projects(featured) WHERE featured = true;

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to published content
CREATE POLICY "Public can view projects"
  ON projects
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can view published blog posts"
  ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (published = true);
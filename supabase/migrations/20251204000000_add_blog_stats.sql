-- Add views and likes columns to blog_posts table
ALTER TABLE blog_posts
ADD COLUMN IF NOT EXISTS views INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS likes INTEGER DEFAULT 0;

-- Function to increment blog view count
CREATE OR REPLACE FUNCTION increment_blog_view(post_slug TEXT)
RETURNS VOID AS $$
BEGIN
  UPDATE blog_posts
  SET views = views + 1
  WHERE slug = post_slug;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to increment blog like count
CREATE OR REPLACE FUNCTION increment_blog_like(post_slug TEXT)
RETURNS VOID AS $$
BEGIN
  UPDATE blog_posts
  SET likes = likes + 1
  WHERE slug = post_slug;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

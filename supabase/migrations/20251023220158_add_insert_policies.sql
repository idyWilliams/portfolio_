/*
  # Add Insert Policies for Seeding

  ## Changes
  - Add temporary policies to allow inserting data into projects and blog_posts tables
  - This enables seeding the database with sample data

  ## Security Notes
  - These policies allow anyone to insert data
  - In production, you would restrict these to authenticated admin users only
  - For a portfolio site with static content, this is acceptable during development
*/

-- Allow inserting projects
CREATE POLICY "Allow insert projects"
  ON projects
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow inserting blog posts
CREATE POLICY "Allow insert blog posts"
  ON blog_posts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

// scripts/seed-database.ts
import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, "../.env.local") });

import { sampleProjects, sampleBlogPosts } from "../lib/seed-data.js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// ✅ Use service role key for seeding (bypasses RLS)
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing environment variables!");
  console.error(
    "Required: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY"
  );
  process.exit(1);
}

// ✅ Create client with service role key
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

async function seedDatabase() {
  console.log("🌱 Starting database seeding...\n");

  try {
    // Delete existing data
    console.log("🗑️  Deleting existing projects...");
    const { error: deleteProjectsError } = await supabase
      .from("projects")
      .delete()
      .gte("id", "00000000-0000-0000-0000-000000000000");

    if (deleteProjectsError) throw deleteProjectsError;
    console.log("✅ Projects deleted");

    console.log("🗑️  Deleting existing blog posts...");
    const { error: deletePostsError } = await supabase
      .from("blog_posts")
      .delete()
      .gte("id", "00000000-0000-0000-0000-000000000000");

    if (deletePostsError) throw deletePostsError;
    console.log("✅ Blog posts deleted\n");

    // Seed projects
    console.log("📦 Seeding projects...");
    const { data: projects, error: projectsError } = await supabase
      .from("projects")
      .insert(sampleProjects)
      .select();

    if (projectsError) throw projectsError;

    console.log(`✅ Inserted ${projects?.length || 0} projects`);
    projects?.forEach((project) => {
      console.log(`   • ${project.title}`);
    });

    // Seed blog posts
    console.log("\n📝 Seeding blog posts...");
    const { data: posts, error: postsError } = await supabase
      .from("blog_posts")
      .insert(sampleBlogPosts)
      .select();

    if (postsError) throw postsError;

    console.log(`✅ Inserted ${posts?.length || 0} blog posts`);
    posts?.forEach((post) => {
      console.log(`   • ${post.title}`);
    });

    console.log("\n🎉 Database seeding completed successfully!");
  } catch (error) {
    console.error("\n❌ Error:", error);
    process.exit(1);
  }
}

seedDatabase();

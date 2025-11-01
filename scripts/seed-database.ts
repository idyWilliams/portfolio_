import { createClient } from '@supabase/supabase-js';
import { sampleProjects, sampleBlogPosts } from '../lib/seed-data';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function seedDatabase() {
  console.log('Starting database seeding...');

  console.log('Seeding projects...');
  for (const project of sampleProjects) {
    const { error } = await supabase
      .from('projects')
      .insert(project);

    if (error) {
      console.error(`Error inserting project ${project.title}:`, error);
    } else {
      console.log(`✓ Inserted project: ${project.title}`);
    }
  }

  console.log('\nSeeding blog posts...');
  for (const post of sampleBlogPosts) {
    const { error } = await supabase
      .from('blog_posts')
      .insert(post);

    if (error) {
      console.error(`Error inserting blog post ${post.title}:`, error);
    } else {
      console.log(`✓ Inserted blog post: ${post.title}`);
    }
  }

  console.log('\n✅ Database seeding completed!');
}

seedDatabase().catch(console.error);

export const sampleProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with real-time inventory management, payment processing, and admin dashboard.",
    long_description: "Built a comprehensive e-commerce solution using Next.js and Stripe for a retail client. Implemented features like product search, cart management, order tracking, and an intuitive admin panel for inventory management.",
    image_url: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL", "Prisma"],
    github_url: "https://github.com",
    live_url: "https://example.com",
    featured: true,
    order_index: 1,
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced filtering.",
    long_description: "Developed a modern task management application inspired by tools like Trello and Asana. Features drag-and-drop functionality, real-time collaboration, notifications, and comprehensive project analytics.",
    image_url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux", "Material-UI"],
    github_url: "https://github.com",
    live_url: "https://example.com",
    featured: true,
    order_index: 2,
  },
  {
    title: "AI Content Generator",
    description: "SaaS platform that leverages AI to generate marketing content, blog posts, and social media captions.",
    long_description: "Created an AI-powered content generation platform that helps marketers and content creators produce high-quality content faster. Integrated with OpenAI API and implemented subscription-based billing.",
    image_url: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "OpenAI API", "Supabase", "Stripe", "TypeScript", "Tailwind CSS"],
    github_url: "https://github.com",
    live_url: "https://example.com",
    featured: true,
    order_index: 3,
  },
  {
    title: "Healthcare Dashboard",
    description: "Medical practice management system with patient records, appointment scheduling, and analytics.",
    long_description: "Built a comprehensive healthcare management system for a medical clinic. Features include patient record management, appointment scheduling, prescription tracking, and detailed analytics dashboards for practice insights.",
    image_url: "https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Express", "PostgreSQL", "Chart.js", "Redux", "AWS"],
    github_url: "https://github.com",
    live_url: null,
    featured: false,
    order_index: 4,
  },
];

export const sampleBlogPosts = [
  {
    title: "Building Scalable Applications with Next.js 13",
    slug: "building-scalable-applications-nextjs-13",
    excerpt: "Exploring the new features in Next.js 13 and how they enable developers to build more performant and scalable web applications.",
    content: `Next.js 13 introduced several groundbreaking features that have transformed how we build modern web applications. In this post, I'll share my experience working with these new features and the benefits they bring to production applications.

# The App Router Revolution

The new App Router in Next.js 13 represents a fundamental shift in how we structure our applications. Built on React Server Components, it enables better performance and more intuitive data fetching patterns.

One of the most significant improvements is the ability to fetch data directly in components without the need for getServerSideProps or getStaticProps. This co-location of data fetching with components makes code more maintainable and easier to understand.

## Server Components by Default

By default, all components in the app directory are Server Components. This means they render on the server and send minimal JavaScript to the client. The performance implications are significant - faster initial page loads and reduced bundle sizes.

# Improved Developer Experience

The new file-based routing system is more intuitive and flexible. Creating layouts, loading states, and error boundaries is now as simple as creating the appropriate file in your route directory.

## Streaming and Suspense

Next.js 13 embraces React 18's Suspense for data fetching. This enables progressive rendering where parts of your page can be sent to the client as soon as they're ready, rather than waiting for all data to load.

The benefits are clear: better perceived performance, more responsive user interfaces, and a better overall user experience.

# Best Practices

After working with Next.js 13 in production, here are some key takeaways:

1. Embrace Server Components for data fetching and rendering
2. Use Client Components only when you need interactivity
3. Leverage streaming for better performance
4. Structure your app with proper loading and error states

The future of Next.js is exciting, and these new features set a strong foundation for building modern web applications.`,
    cover_image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "React", "Web Development"],
    read_time: 8,
    published: true,
    published_at: new Date("2024-01-15").toISOString(),
  },
  {
    title: "TypeScript Best Practices for Large Codebases",
    slug: "typescript-best-practices-large-codebases",
    excerpt: "Essential TypeScript patterns and practices that help maintain code quality and developer productivity in enterprise applications.",
    content: `TypeScript has become the de facto standard for building large-scale JavaScript applications. After working on several enterprise projects, I've learned that proper TypeScript usage can make or break a project's maintainability.

# Type Safety First

The primary benefit of TypeScript is type safety, but it's easy to undermine this with 'any' types or loose type definitions. In large codebases, strict type checking is essential.

Enable strict mode in your tsconfig.json. This catches potential bugs early and makes refactoring safer. Yes, it requires more upfront work, but the long-term benefits are substantial.

## Utility Types Are Your Friends

TypeScript's built-in utility types like Partial, Pick, and Omit can save you from writing repetitive type definitions. Learn them well and use them liberally.

# Organizing Types

As your codebase grows, type organization becomes crucial. Create dedicated type definition files and share common types across your application.

## Domain-Driven Type Organization

Structure your types around business domains rather than technical concerns. This makes the codebase more intuitive and easier to navigate.

# Generic Patterns

Well-designed generic types can make your code more reusable and type-safe. However, overly complex generics can harm readability. Strike a balance.

Common patterns like Promise<T>, Array<T>, and custom generic utilities should be in every TypeScript developer's toolkit.

# Testing with TypeScript

Type definitions don't replace tests, but they do catch entire categories of bugs. Combine TypeScript with comprehensive testing for maximum confidence.

The investment in learning and properly implementing TypeScript pays dividends in code quality, developer productivity, and long-term maintainability.`,
    cover_image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["TypeScript", "Best Practices", "Software Engineering"],
    read_time: 7,
    published: true,
    published_at: new Date("2024-02-20").toISOString(),
  },
  {
    title: "Optimizing React Performance: A Practical Guide",
    slug: "optimizing-react-performance-guide",
    excerpt: "Proven techniques and strategies for improving React application performance, from component optimization to bundle size reduction.",
    content: `React's declarative nature makes building UIs intuitive, but poor performance can creep in if you're not careful. Here's what I've learned about keeping React apps fast.

# Understanding React Rendering

React's virtual DOM is efficient, but unnecessary re-renders are the most common performance issue. Understanding when and why components re-render is the first step to optimization.

Components re-render when their state changes, their props change, or their parent re-renders. This last point is where many performance issues originate.

## Memoization Techniques

React.memo, useMemo, and useCallback are your tools for preventing unnecessary re-renders. However, premature optimization can make code more complex without meaningful benefits.

Profile first, optimize second. Use React DevTools Profiler to identify actual bottlenecks rather than optimizing speculatively.

# Code Splitting

Large bundle sizes slow down initial page loads. Code splitting allows you to load code on demand, improving time to interactive.

React.lazy and dynamic imports make code splitting straightforward. Split at route boundaries first - this often provides the biggest wins with minimal effort.

## Component-Level Splitting

For heavy components that aren't always needed, component-level splitting can further improve performance. Modal dialogs and complex visualizations are good candidates.

# List Virtualization

Rendering thousands of list items tanks performance. Libraries like react-virtual or react-window render only visible items, making large lists performant.

# Image Optimization

Images often account for most of a page's bandwidth. Next.js's Image component provides automatic optimization, but understanding the underlying principles is valuable.

Use appropriate image formats, implement lazy loading, and serve responsive images. These practices dramatically improve perceived performance.

Performance optimization is an ongoing process, not a one-time task. Regular profiling and measurement ensure your application stays fast as it grows.`,
    cover_image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Performance", "Optimization"],
    read_time: 9,
    published: true,
    published_at: new Date("2024-03-10").toISOString(),
  },
  {
    title: "Modern CSS Techniques with Tailwind",
    slug: "modern-css-techniques-tailwind",
    excerpt: "How Tailwind CSS changed my approach to styling and the patterns I use for building beautiful, maintainable interfaces.",
    content: `Tailwind CSS represented a paradigm shift in how I approach styling. After years of writing custom CSS, utility-first CSS felt strange. Now, I can't imagine going back.

# The Utility-First Mindset

Traditional CSS encourages creating semantic class names and abstract components. Tailwind takes the opposite approach - compose styles directly in your markup using utility classes.

This co-location of styles with markup eliminates context switching and makes the relationship between styles and elements explicit. It's faster to read and faster to write.

## Maintainability Concerns

The most common criticism of Tailwind is that it creates verbose, hard-to-maintain markup. In practice, component-based frameworks like React solve this problem elegantly.

Extract reusable components when patterns emerge. Your markup stays clean, and you maintain all the benefits of utility classes.

# Responsive Design

Tailwind's responsive modifiers make building responsive interfaces intuitive. Prefix any utility with a breakpoint to apply it conditionally.

The mobile-first approach encourages starting with mobile layouts and progressively enhancing for larger screens. This typically results in better mobile experiences.

## Dark Mode Support

Built-in dark mode support via the 'dark:' prefix makes implementing theme switching straightforward. No complex CSS variable juggling required.

# Custom Design Systems

Despite being utility-first, Tailwind excels at implementing custom design systems. Configure your theme in tailwind.config.js to match your brand.

Consistent spacing, colors, and typography across your application become automatic when they're part of your Tailwind theme.

# Performance

Tailwind's purge feature removes unused styles in production, resulting in tiny CSS bundles regardless of how many utilities you have available during development.

The combination of developer experience and production performance makes Tailwind a compelling choice for modern web development.`,
    cover_image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["CSS", "Tailwind", "UI/UX"],
    read_time: 6,
    published: true,
    published_at: new Date("2024-04-05").toISOString(),
  },
  {
    title: "Building Real-Time Features with WebSockets",
    slug: "building-realtime-features-websockets",
    excerpt: "A comprehensive guide to implementing real-time functionality in web applications using WebSockets and modern JavaScript.",
    content: `Real-time features like live chat, collaborative editing, and live notifications have become table stakes for modern web applications. WebSockets make these features possible.

# Why WebSockets?

Traditional HTTP requests are one-directional - the client requests, the server responds. For real-time features, you need bidirectional communication where the server can push updates to clients.

WebSockets provide a persistent connection between client and server, enabling instant, two-way communication with minimal overhead.

## When to Use WebSockets

Not every feature needs real-time updates. Polling or Server-Sent Events might be simpler for less demanding use cases. Use WebSockets when you need low-latency, bidirectional communication.

# Implementation Patterns

On the client side, the WebSocket API is straightforward. Connect, send messages, receive messages. The complexity lies in handling reconnection, message queuing, and state synchronization.

Libraries like Socket.io abstract many of these concerns and provide fallback mechanisms for browsers without WebSocket support.

## Server-Side Considerations

Your server needs to maintain WebSocket connections, which can be memory-intensive at scale. Horizontal scaling requires careful consideration of how you route messages between server instances.

Consider using Redis or another pub/sub system to coordinate messages across multiple server instances.

# Security

WebSocket security is crucial. Always use wss:// (WebSocket Secure) in production. Implement authentication and authorization - just because a connection is established doesn't mean the client should have full access.

Validate all messages from clients. Never trust client input, just like with HTTP requests.

# Testing Real-Time Features

Testing WebSocket-based features requires different approaches than testing HTTP endpoints. Mock WebSocket connections in your tests, and consider using tools like Socket.io's testing utilities.

Real-time features add complexity, but when implemented well, they significantly enhance user experience and enable entirely new categories of applications.`,
    cover_image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["WebSockets", "Real-Time", "Backend"],
    read_time: 8,
    published: true,
    published_at: new Date("2024-05-12").toISOString(),
  },
  {
    title: "Database Design Patterns for Scalable Applications",
    slug: "database-design-patterns-scalable-applications",
    excerpt: "Essential database design principles and patterns that help applications scale from prototype to millions of users.",
    content: `Database design decisions made early in a project have lasting implications. Here are the patterns and principles I follow when designing databases for applications that need to scale.

# Start with Normalization

Normalized databases reduce redundancy and maintain data integrity. Start with a properly normalized schema, then denormalize strategically based on actual performance needs.

Premature denormalization is a form of premature optimization. Get your data model right first.

## Indexing Strategy

Indexes dramatically improve query performance but come with costs - storage overhead and slower writes. Index columns used in WHERE clauses, JOIN conditions, and ORDER BY clauses.

Analyze query patterns and create indexes based on actual usage, not speculation.

# Connection Pooling

Database connections are expensive. Connection pooling reuses connections, dramatically improving performance and resource utilization.

Configure pool sizes based on your application's concurrency needs and your database server's capacity.

## Read Replicas

As read traffic grows, a single database becomes a bottleneck. Read replicas distribute read traffic across multiple database instances while maintaining a single primary for writes.

This pattern works well for read-heavy applications but introduces eventual consistency considerations.

# Caching Strategies

Strategic caching reduces database load and improves response times. Cache frequently accessed data that changes infrequently.

Redis is excellent for this purpose. Implement cache invalidation carefully - stale cache data causes bugs that are hard to debug.

# Migrations and Versioning

Schema changes in production require careful planning. Use migration tools to version your schema and make changes reproducible and reversible.

Never make breaking changes directly. Add new columns as nullable, migrate data, then add constraints. This enables zero-downtime deployments.

Database design is both art and science. These patterns provide a solid foundation, but every application has unique requirements that may require different approaches.`,
    cover_image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Database", "PostgreSQL", "Architecture"],
    read_time: 10,
    published: true,
    published_at: new Date("2024-06-18").toISOString(),
  },
];

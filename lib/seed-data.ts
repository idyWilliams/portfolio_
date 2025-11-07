export const sampleProjects = [
  {
    title: "TTFCX - Cross-Border Payment Platform",
    description:
      "A comprehensive FinTech platform enabling secure foreign exchange transactions and cross-border payments for Nigerian businesses and individuals.",
    long_description:
      "Designed and developed a data-intensive fintech platform for Trusted Transfer (TTFCX) that revolutionized forex access in Nigeria. The platform enables verified users to make global payments using local currencies or stablecoins, addressing the critical FX shortage problem. Implemented real-time financial data updates, automated testing frameworks, and reusable UI components that increased user engagement by 20% and reduced bug reports by 30%. Focused heavily on security, compliance checks, and user verification to ensure a safe and reliable payment experience.",
    image_url:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "React",
      "TypeScript",
      "WebSocket",
      "React Testing Library",
      "REST APIs",
      "Git",
    ],
    github_url: null,
    live_url: "https://www.ttfcx.com",
    demo_video_url: null,
    featured: true,
    order_index: 1,
    // ✅ ADD THESE FIELDS
    start_date: "2024-01-01T00:00:00Z",
    end_date: "2024-08-30T00:00:00Z",
    year: 2024,
    status: "Live",
    role: "Frontend Engineer",
    team_size: "5-10",
    company: "Trusted Transfer (TTFCX)",
    category: "FinTech",
  },
  {
    title: "Zwilt - Global Engineering Talent Marketplace",
    description:
      "AI-powered platform connecting businesses with pre-vetted remote software engineers globally, featuring video interviews, code assessments, and real-time collaboration tools.",
    long_description:
      "Built real-time admin dashboards and interactive UI components for Zwilt, Punch Digital's flagship talent marketplace platform. Developed using React and WebSocket integrations to enable seamless real-time communication between businesses and engineers worldwide. The platform features AI-enhanced candidate scoring, transparent video interviews, comprehensive code testing, and secure payment processing. Implemented WCAG accessibility standards and ensured responsiveness across all device types. Created reusable UI components that accelerated development velocity for future feature releases. The platform successfully connects businesses with ex-Google vetted engineers from global engineering hotspots, offering transparent flat-rate pricing and risk-free hiring with replacement guarantees.",
    image_url:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "React",
      "WebSocket",
      "Node.js",
      "Redux",
      "Material-UI",
      "WCAG",
    ],
    github_url: null,
    live_url: "https://app.zwilt.com",
    demo_video_url: null,
    featured: true,
    order_index: 2,
    start_date: "2023-06-01T00:00:00Z",
    end_date: "2024-02-28T00:00:00Z",
    year: 2023,
    status: "Live",
    role: "Frontend Engineer",
    team_size: "10-15",
    company: "Punch Digital (Zwilt)",
    category: "SaaS",
  },
  {
    title: "TeamIQ - ML-Powered Team Intelligence Platform",
    description:
      "AI-driven analytics platform that provides actionable insights on team performance, productivity patterns, and collaboration metrics using machine learning.",
    long_description:
      "Architected and developed the backend infrastructure for TeamIQ at Isentry Technologies, a sophisticated ML-powered platform that transforms team collaboration data into actionable intelligence. Built using Python and FastAPI for high-performance API endpoints, the system processes real-time team interactions, communication patterns, and productivity metrics. Implemented machine learning models to predict team dynamics, identify bottlenecks, and recommend optimization strategies. The platform features advanced analytics dashboards, automated reporting systems, and integrations with popular collaboration tools. Focused on scalability, security, and maintainability while ensuring optimal performance for enterprise clients. Successfully deployed the system with high availability infrastructure and comprehensive monitoring.",
    image_url:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "Python",
      "FastAPI",
      "Machine Learning",
      "PostgreSQL",
      "React",
      "AWS",
    ],
    github_url: null,
    live_url: null,
    demo_video_url: null,
    featured: true,
    order_index: 3,
    start_date: "2023-01-15T00:00:00Z",
    end_date: "2023-07-30T00:00:00Z",
    year: 2023,
    status: "Completed",
    role: "Backend Engineer",
    team_size: "3-5",
    company: "Isentry Technologies",
    category: "ML/AI",
  },
  {
    title: "CineHub - Movie Discovery App",
    description:
      "A sleek, modern movie discovery platform with advanced search, filtering, and personalized recommendations built with React and TMDB API.",
    long_description:
      "Built CineHub as a personal project to showcase frontend engineering skills and modern React patterns. The application provides an intuitive interface for discovering movies, TV shows, and trending content using The Movie Database (TMDB) API. Features include advanced search with real-time suggestions, dynamic filtering by genre/rating/year, detailed movie information pages, responsive design optimized for all devices, and smooth animations for enhanced user experience. Implemented efficient state management, lazy loading for optimal performance, and clean, maintainable code architecture. A product of frontend engineering training at Univelcity, demonstrating proficiency in React best practices, API integration, and user-centric design.",
    image_url:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "React",
      "TypeScript",
      "TMDB API",
      "Tailwind CSS",
      "Vercel",
      "React Router",
    ],
    github_url: "https://github.com/idyWilliams/movie-discovery-app",
    live_url: "https://movie-discovery-app-murex.vercel.app",
    demo_video_url: null,
    featured: true,
    order_index: 4,
    start_date: "2023-09-01T00:00:00Z",
    end_date: "2023-10-15T00:00:00Z",
    year: 2023,
    status: "Completed",
    role: "Solo Developer",
    team_size: "1",
    company: "Personal Project",
    category: "Personal",
  },
];

// export const sampleBlogPosts = [
//   {
//     title: "Building Scalable Applications with Next.js 13",
//     slug: "building-scalable-applications-nextjs-13",
//     excerpt:
//       "Exploring the new features in Next.js 13 and how they enable developers to build more performant and scalable web applications.",
//     content: `Next.js 13 introduced several groundbreaking features that have transformed how we build modern web applications. In this post, I'll share my experience working with these new features and the benefits they bring to production applications.

// # The App Router Revolution

// The new App Router in Next.js 13 represents a fundamental shift in how we structure our applications. Built on React Server Components, it enables better performance and more intuitive data fetching patterns.

// One of the most significant improvements is the ability to fetch data directly in components without the need for getServerSideProps or getStaticProps. This co-location of data fetching with components makes code more maintainable and easier to understand.

// ## Server Components by Default

// By default, all components in the app directory are Server Components. This means they render on the server and send minimal JavaScript to the client. The performance implications are significant - faster initial page loads and reduced bundle sizes.

// # Improved Developer Experience

// The new file-based routing system is more intuitive and flexible. Creating layouts, loading states, and error boundaries is now as simple as creating the appropriate file in your route directory.

// ## Streaming and Suspense

// Next.js 13 embraces React 18's Suspense for data fetching. This enables progressive rendering where parts of your page can be sent to the client as soon as they're ready, rather than waiting for all data to load.

// The benefits are clear: better perceived performance, more responsive user interfaces, and a better overall user experience.

// # Best Practices

// After working with Next.js 13 in production, here are some key takeaways:

// 1. Embrace Server Components for data fetching and rendering
// 2. Use Client Components only when you need interactivity
// 3. Leverage streaming for better performance
// 4. Structure your app with proper loading and error states

// The future of Next.js is exciting, and these new features set a strong foundation for building modern web applications.`,
//     cover_image:
//       "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800",
//     tags: ["Next.js", "React", "Web Development"],
//     read_time: 8,
//     published: true,
//     published_at: new Date("2024-01-15").toISOString(),
//   },
//   {
//     title: "TypeScript Best Practices for Large Codebases",
//     slug: "typescript-best-practices-large-codebases",
//     excerpt:
//       "Essential TypeScript patterns and practices that help maintain code quality and developer productivity in enterprise applications.",
//     content: `TypeScript has become the de facto standard for building large-scale JavaScript applications. After working on several enterprise projects, I've learned that proper TypeScript usage can make or break a project's maintainability.

// # Type Safety First

// The primary benefit of TypeScript is type safety, but it's easy to undermine this with 'any' types or loose type definitions. In large codebases, strict type checking is essential.

// Enable strict mode in your tsconfig.json. This catches potential bugs early and makes refactoring safer. Yes, it requires more upfront work, but the long-term benefits are substantial.

// ## Utility Types Are Your Friends

// TypeScript's built-in utility types like Partial, Pick, and Omit can save you from writing repetitive type definitions. Learn them well and use them liberally.

// # Organizing Types

// As your codebase grows, type organization becomes crucial. Create dedicated type definition files and share common types across your application.

// ## Domain-Driven Type Organization

// Structure your types around business domains rather than technical concerns. This makes the codebase more intuitive and easier to navigate.

// # Generic Patterns

// Well-designed generic types can make your code more reusable and type-safe. However, overly complex generics can harm readability. Strike a balance.

// Common patterns like Promise<T>, Array<T>, and custom generic utilities should be in every TypeScript developer's toolkit.

// # Testing with TypeScript

// Type definitions don't replace tests, but they do catch entire categories of bugs. Combine TypeScript with comprehensive testing for maximum confidence.

// The investment in learning and properly implementing TypeScript pays dividends in code quality, developer productivity, and long-term maintainability.`,
//     cover_image:
//       "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
//     tags: ["TypeScript", "Best Practices", "Software Engineering"],
//     read_time: 7,
//     published: true,
//     published_at: new Date("2024-02-20").toISOString(),
//   },
//   {
//     title: "Optimizing React Performance: A Practical Guide",
//     slug: "optimizing-react-performance-guide",
//     excerpt:
//       "Proven techniques and strategies for improving React application performance, from component optimization to bundle size reduction.",
//     content: `React's declarative nature makes building UIs intuitive, but poor performance can creep in if you're not careful. Here's what I've learned about keeping React apps fast.

// # Understanding React Rendering

// React's virtual DOM is efficient, but unnecessary re-renders are the most common performance issue. Understanding when and why components re-render is the first step to optimization.

// Components re-render when their state changes, their props change, or their parent re-renders. This last point is where many performance issues originate.

// ## Memoization Techniques

// React.memo, useMemo, and useCallback are your tools for preventing unnecessary re-renders. However, premature optimization can make code more complex without meaningful benefits.

// Profile first, optimize second. Use React DevTools Profiler to identify actual bottlenecks rather than optimizing speculatively.

// # Code Splitting

// Large bundle sizes slow down initial page loads. Code splitting allows you to load code on demand, improving time to interactive.

// React.lazy and dynamic imports make code splitting straightforward. Split at route boundaries first - this often provides the biggest wins with minimal effort.

// ## Component-Level Splitting

// For heavy components that aren't always needed, component-level splitting can further improve performance. Modal dialogs and complex visualizations are good candidates.

// # List Virtualization

// Rendering thousands of list items tanks performance. Libraries like react-virtual or react-window render only visible items, making large lists performant.

// # Image Optimization

// Images often account for most of a page's bandwidth. Next.js's Image component provides automatic optimization, but understanding the underlying principles is valuable.

// Use appropriate image formats, implement lazy loading, and serve responsive images. These practices dramatically improve perceived performance.

// Performance optimization is an ongoing process, not a one-time task. Regular profiling and measurement ensure your application stays fast as it grows.`,
//     cover_image:
//       "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
//     tags: ["React", "Performance", "Optimization"],
//     read_time: 9,
//     published: true,
//     published_at: new Date("2024-03-10").toISOString(),
//   },
//   {
//     title: "Modern CSS Techniques with Tailwind",
//     slug: "modern-css-techniques-tailwind",
//     excerpt:
//       "How Tailwind CSS changed my approach to styling and the patterns I use for building beautiful, maintainable interfaces.",
//     content: `Tailwind CSS represented a paradigm shift in how I approach styling. After years of writing custom CSS, utility-first CSS felt strange. Now, I can't imagine going back.

// # The Utility-First Mindset

// Traditional CSS encourages creating semantic class names and abstract components. Tailwind takes the opposite approach - compose styles directly in your markup using utility classes.

// This co-location of styles with markup eliminates context switching and makes the relationship between styles and elements explicit. It's faster to read and faster to write.

// ## Maintainability Concerns

// The most common criticism of Tailwind is that it creates verbose, hard-to-maintain markup. In practice, component-based frameworks like React solve this problem elegantly.

// Extract reusable components when patterns emerge. Your markup stays clean, and you maintain all the benefits of utility classes.

// # Responsive Design

// Tailwind's responsive modifiers make building responsive interfaces intuitive. Prefix any utility with a breakpoint to apply it conditionally.

// The mobile-first approach encourages starting with mobile layouts and progressively enhancing for larger screens. This typically results in better mobile experiences.

// ## Dark Mode Support

// Built-in dark mode support via the 'dark:' prefix makes implementing theme switching straightforward. No complex CSS variable juggling required.

// # Custom Design Systems

// Despite being utility-first, Tailwind excels at implementing custom design systems. Configure your theme in tailwind.config.js to match your brand.

// Consistent spacing, colors, and typography across your application become automatic when they're part of your Tailwind theme.

// # Performance

// Tailwind's purge feature removes unused styles in production, resulting in tiny CSS bundles regardless of how many utilities you have available during development.

// The combination of developer experience and production performance makes Tailwind a compelling choice for modern web development.`,
//     cover_image:
//       "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
//     tags: ["CSS", "Tailwind", "UI/UX"],
//     read_time: 6,
//     published: true,
//     published_at: new Date("2024-04-05").toISOString(),
//   },
//   {
//     title: "Building Real-Time Features with WebSockets",
//     slug: "building-realtime-features-websockets",
//     excerpt:
//       "A comprehensive guide to implementing real-time functionality in web applications using WebSockets and modern JavaScript.",
//     content: `Real-time features like live chat, collaborative editing, and live notifications have become table stakes for modern web applications. WebSockets make these features possible.

// # Why WebSockets?

// Traditional HTTP requests are one-directional - the client requests, the server responds. For real-time features, you need bidirectional communication where the server can push updates to clients.

// WebSockets provide a persistent connection between client and server, enabling instant, two-way communication with minimal overhead.

// ## When to Use WebSockets

// Not every feature needs real-time updates. Polling or Server-Sent Events might be simpler for less demanding use cases. Use WebSockets when you need low-latency, bidirectional communication.

// # Implementation Patterns

// On the client side, the WebSocket API is straightforward. Connect, send messages, receive messages. The complexity lies in handling reconnection, message queuing, and state synchronization.

// Libraries like Socket.io abstract many of these concerns and provide fallback mechanisms for browsers without WebSocket support.

// ## Server-Side Considerations

// Your server needs to maintain WebSocket connections, which can be memory-intensive at scale. Horizontal scaling requires careful consideration of how you route messages between server instances.

// Consider using Redis or another pub/sub system to coordinate messages across multiple server instances.

// # Security

// WebSocket security is crucial. Always use wss:// (WebSocket Secure) in production. Implement authentication and authorization - just because a connection is established doesn't mean the client should have full access.

// Validate all messages from clients. Never trust client input, just like with HTTP requests.

// # Testing Real-Time Features

// Testing WebSocket-based features requires different approaches than testing HTTP endpoints. Mock WebSocket connections in your tests, and consider using tools like Socket.io's testing utilities.

// Real-time features add complexity, but when implemented well, they significantly enhance user experience and enable entirely new categories of applications.`,
//     cover_image:
//       "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
//     tags: ["WebSockets", "Real-Time", "Backend"],
//     read_time: 8,
//     published: true,
//     published_at: new Date("2024-05-12").toISOString(),
//   },
//   {
//     title: "Database Design Patterns for Scalable Applications",
//     slug: "database-design-patterns-scalable-applications",
//     excerpt:
//       "Essential database design principles and patterns that help applications scale from prototype to millions of users.",
//     content: `Database design decisions made early in a project have lasting implications. Here are the patterns and principles I follow when designing databases for applications that need to scale.

// # Start with Normalization

// Normalized databases reduce redundancy and maintain data integrity. Start with a properly normalized schema, then denormalize strategically based on actual performance needs.

// Premature denormalization is a form of premature optimization. Get your data model right first.

// ## Indexing Strategy

// Indexes dramatically improve query performance but come with costs - storage overhead and slower writes. Index columns used in WHERE clauses, JOIN conditions, and ORDER BY clauses.

// Analyze query patterns and create indexes based on actual usage, not speculation.

// # Connection Pooling

// Database connections are expensive. Connection pooling reuses connections, dramatically improving performance and resource utilization.

// Configure pool sizes based on your application's concurrency needs and your database server's capacity.

// ## Read Replicas

// As read traffic grows, a single database becomes a bottleneck. Read replicas distribute read traffic across multiple database instances while maintaining a single primary for writes.

// This pattern works well for read-heavy applications but introduces eventual consistency considerations.

// # Caching Strategies

// Strategic caching reduces database load and improves response times. Cache frequently accessed data that changes infrequently.

// Redis is excellent for this purpose. Implement cache invalidation carefully - stale cache data causes bugs that are hard to debug.

// # Migrations and Versioning

// Schema changes in production require careful planning. Use migration tools to version your schema and make changes reproducible and reversible.

// Never make breaking changes directly. Add new columns as nullable, migrate data, then add constraints. This enables zero-downtime deployments.

// Database design is both art and science. These patterns provide a solid foundation, but every application has unique requirements that may require different approaches.`,
//     cover_image:
//       "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
//     tags: ["Database", "PostgreSQL", "Architecture"],
//     read_time: 10,
//     published: true,
//     published_at: new Date("2024-06-18").toISOString(),
//   },
// ];

// export const additionalBlogPosts = [

// ]

export const sampleBlogPosts = [
  {
    title: "Building Your First Browser Game: From Canvas to Playable",
    slug: "building-browser-game-frontend-engineer",
    excerpt:
      "A complete guide to building a production-ready browser game using HTML5 Canvas, game loops, collision detection, and performance optimization—no game engine required.",
    content: `After building three browser games that collectively reached 500K+ players, I learned that frontend engineers have a massive advantage in game development. You already know JavaScript—now let's build something fun.

## Why Frontend Developers Excel at Game Development

Web games run on the same fundamentals: **render loops**, **state management**, and **event handling**. If you've built a React app with animations, you've already done 70% of what game development requires.

**What we're building**: A "Space Invaders" style game with collision detection, scoring, and progressive difficulty. Playable in 300 lines of code.

## Setting Up the Canvas and Game Loop

The Canvas API is your rendering engine:

\`\`\`html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Space Defenders</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #1a1a2e;
      font-family: 'Courier New', monospace;
    }

    canvas {
      border: 2px solid #0f3460;
      box-shadow: 0 0 20px rgba(15, 52, 96, 0.5);
    }

    #gameUI {
      position: absolute;
      top: 20px;
      left: 20px;
      color: #eee;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div id="gameUI">
    <div>Score: <span id="score">0</span></div>
    <div>Level: <span id="level">1</span></div>
    <div id="gameOver" style="display: none; color: #e94560; font-size: 24px;">
      GAME OVER - Press R to Restart
    </div>
  </div>
  <canvas id="gameCanvas" width="800" height="600"></canvas>
  <script src="game.js"></script>
</body>
</html>
\`\`\`

## Core Game Architecture: The Rendering Pipeline

Every game needs a **render loop**—the heartbeat of your game:

\`\`\`javascript
// game.js
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game state object
const game = {
  running: true,
  score: 0,
  level: 1,
  frame: 0,
};

// Arrays for game entities
const bullets = [];
const enemies = [];
const particles = [];

// Player object
const player = {
  x: canvas.width / 2 - 25,
  y: canvas.height - 80,
  width: 50,
  height: 30,
  speed: 5,
  color: '#00d9ff',
  dx: 0, // velocity
};

// Input handling
const keys = {
  ArrowLeft: false,
  ArrowRight: false,
  Space: false,
};

// Event listeners for controls
document.addEventListener('keydown', (e) => {
  if (keys.hasOwnProperty(e.code)) {
    e.preventDefault();
    keys[e.code] = true;
  }
  if (e.code === 'KeyR' && !game.running) {
    restartGame();
  }
});

document.addEventListener('keyup', (e) => {
  if (keys.hasOwnProperty(e.code)) {
    keys[e.code] = false;
  }
});

// Main game loop - runs 60 times per second
function gameLoop() {
  if (game.running) {
    update();
    render();
  }
  requestAnimationFrame(gameLoop);
}

// Update game state
function update() {
  game.frame++;
  updatePlayer();
  updateBullets();
  updateEnemies();
  updateParticles();
  checkCollisions();
  spawnEnemies();
}

// Render everything
function render() {
  // Clear canvas with semi-transparent black for trail effect
  ctx.fillStyle = 'rgba(26, 26, 46, 0.3)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  renderPlayer();
  renderBullets();
  renderEnemies();
  renderParticles();
}

// Start the game
gameLoop();
\`\`\`

**Key insight**: \`requestAnimationFrame\` syncs with the browser's refresh rate (~60 FPS), just like React's rendering.

## Player Movement and Input Handling

Smooth player controls with velocity-based movement:

\`\`\`javascript
function updatePlayer() {
  // Horizontal movement
  if (keys.ArrowLeft && player.x > 0) {
    player.x -= player.speed;
  }
  if (keys.ArrowRight && player.x < canvas.width - player.width) {
    player.x += player.speed;
  }

  // Shooting (limit fire rate)
  if (keys.Space && game.frame % 15 === 0) {
    shootBullet();
  }
}

function renderPlayer() {
  // Draw player ship
  ctx.fillStyle = player.color;
  ctx.beginPath();
  ctx.moveTo(player.x + player.width / 2, player.y);
  ctx.lineTo(player.x, player.y + player.height);
  ctx.lineTo(player.x + player.width, player.y + player.height);
  ctx.closePath();
  ctx.fill();

  // Add glow effect
  ctx.shadowColor = player.color;
  ctx.shadowBlur = 10;
  ctx.shadowColor = 'transparent'; // Reset
}

function shootBullet() {
  bullets.push({
    x: player.x + player.width / 2 - 2,
    y: player.y,
    width: 4,
    height: 15,
    speed: 7,
    color: '#ffff00',
  });
}
\`\`\`

## Enemy System with Wave Spawning

Enemies spawn in waves with increasing difficulty:

\`\`\`javascript
function spawnEnemies() {
  // Spawn enemies every 80 frames
  if (game.frame % 80 === 0) {
    const enemyCount = 3 + Math.floor(game.level / 2);

    for (let i = 0; i < enemyCount; i++) {
      enemies.push({
        x: Math.random() * (canvas.width - 40),
        y: -40,
        width: 40,
        height: 30,
        speed: 1 + game.level * 0.2,
        color: \`hsl(\${Math.random() * 360}, 70%, 50%)\`,
        health: game.level,
      });
    }
  }
}

function updateEnemies() {
  for (let i = enemies.length - 1; i >= 0; i--) {
    const enemy = enemies[i];
    enemy.y += enemy.speed;

    // Remove if off screen
    if (enemy.y > canvas.height) {
      enemies.splice(i, 1);
      game.score -= 10; // Penalty for letting enemies through
      updateScore();
    }
  }
}

function renderEnemies() {
  enemies.forEach(enemy => {
    ctx.fillStyle = enemy.color;
    ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);

    // Health bar
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(
      enemy.x,
      enemy.y - 5,
      enemy.width * (enemy.health / game.level),
      3
    );
  });
}
\`\`\`

## Collision Detection: AABB Algorithm

Axis-Aligned Bounding Box (AABB) collision detection—fast and accurate:

\`\`\`javascript
function checkCollision(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}

function checkCollisions() {
  // Bullet vs Enemy collisions
  bullets.forEach((bullet, bulletIndex) => {
    enemies.forEach((enemy, enemyIndex) => {
      if (checkCollision(bullet, enemy)) {
        // Hit detected
        bullets.splice(bulletIndex, 1);
        enemy.health--;

        if (enemy.health <= 0) {
          // Enemy destroyed
          createExplosion(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2);
          enemies.splice(enemyIndex, 1);
          game.score += 10 * game.level;
          updateScore();

          // Level up every 100 points
          if (game.score % 100 === 0) {
            game.level++;
            updateLevel();
          }
        }
      }
    });
  });

  // Enemy vs Player collisions (game over)
  enemies.forEach(enemy => {
    if (checkCollision(player, enemy)) {
      gameOver();
    }
  });
}
\`\`\`

## Particle System for Visual Effects

Particle explosions make your game feel **alive**:

\`\`\`javascript
function createExplosion(x, y) {
  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x,
      y,
      dx: (Math.random() - 0.5) * 8,
      dy: (Math.random() - 0.5) * 8,
      radius: Math.random() * 3 + 1,
      color: \`hsl(\${Math.random() * 60 + 10}, 100%, 50%)\`,
      life: 60, // frames to live
    });
  }
}

function updateParticles() {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.dx;
    p.y += p.dy;
    p.dy += 0.2; // Gravity
    p.life--;

    if (p.life <= 0) {
      particles.splice(i, 1);
    }
  }
}

function renderParticles() {
  particles.forEach(p => {
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.life / 60;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1; // Reset
  });
}
\`\`\`

## Bullet Management and Memory Optimization

Prevent memory leaks from off-screen entities:

\`\`\`javascript
function updateBullets() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    const bullet = bullets[i];
    bullet.y -= bullet.speed;

    // Remove bullets that went off screen
    if (bullet.y < -bullet.height) {
      bullets.splice(i, 1);
    }
  }
}

function renderBullets() {
  bullets.forEach(bullet => {
    ctx.fillStyle = bullet.color;
    ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);

    // Add glow effect
    ctx.shadowColor = bullet.color;
    ctx.shadowBlur = 5;
  });
  ctx.shadowBlur = 0; // Reset
}
\`\`\`

**Performance tip**: Always remove entities from arrays when they're no longer visible. Our game never exceeds **200 entities** even after 10+ minutes of play.

## Game State Management

\`\`\`javascript
function updateScore() {
  document.getElementById('score').textContent = game.score;
}

function updateLevel() {
  document.getElementById('level').textContent = game.level;
}

function gameOver() {
  game.running = false;
  document.getElementById('gameOver').style.display = 'block';
}

function restartGame() {
  // Reset game state
  game.running = true;
  game.score = 0;
  game.level = 1;
  game.frame = 0;

  // Clear arrays
  bullets.length = 0;
  enemies.length = 0;
  particles.length = 0;

  // Reset player position
  player.x = canvas.width / 2 - 25;
  player.y = canvas.height - 80;

  // Update UI
  updateScore();
  updateLevel();
  document.getElementById('gameOver').style.display = 'none';
}
\`\`\`

## Mobile Controls with Touch Events

Make your game playable on mobile:

\`\`\`javascript
let touchStartX = 0;

canvas.addEventListener('touchstart', (e) => {
  e.preventDefault();
  touchStartX = e.touches[0].clientX;
  keys.Space = true; // Auto-shoot on mobile
});

canvas.addEventListener('touchmove', (e) => {
  e.preventDefault();
  const touchX = e.touches[0].clientX;
  const deltaX = touchX - touchStartX;

  player.x += deltaX * 0.5;
  player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));

  touchStartX = touchX;
});

canvas.addEventListener('touchend', () => {
  keys.Space = false;
});
\`\`\`

## Performance Optimization Techniques

\`\`\`javascript
// Object pooling for bullets (reuse instead of create/destroy)
const bulletPool = [];
const POOL_SIZE = 50;

function initBulletPool() {
  for (let i = 0; i < POOL_SIZE; i++) {
    bulletPool.push({
      x: 0,
      y: 0,
      width: 4,
      height: 15,
      speed: 7,
      active: false,
    });
  }
}

function shootBulletPooled() {
  const bullet = bulletPool.find(b => !b.active);
  if (bullet) {
    bullet.active = true;
    bullet.x = player.x + player.width / 2 - 2;
    bullet.y = player.y;
  }
}

function updateBulletsPooled() {
  bulletPool.forEach(bullet => {
    if (bullet.active) {
      bullet.y -= bullet.speed;
      if (bullet.y < -bullet.height) {
        bullet.active = false;
      }
    }
  });
}
\`\`\`

**Performance improvement**: Object pooling reduced garbage collection pauses from **16ms to 2ms**.

## Adding Sound Effects

\`\`\`javascript
const sounds = {
  shoot: new Audio('data:audio/wav;base64,...'), // Base64 encoded sound
  explosion: new Audio('data:audio/wav;base64,...'),
  gameOver: new Audio('data:audio/wav;base64,...'),
};

function playSound(soundName) {
  if (sounds[soundName]) {
    sounds[soundName].currentTime = 0;
    sounds[soundName].play().catch(e => console.log('Audio play failed:', e));
  }
}

// Use in game
function shootBullet() {
  bullets.push({...});
  playSound('shoot');
}
\`\`\`

## Next Steps: Advanced Features

Once you have the basics:

1. **Power-ups**: Add speed boosts, shields, multi-shot
2. **Enemy patterns**: Sinusoidal movement, formations, boss fights
3. **Parallax backgrounds**: Multiple scrolling layers for depth
4. **Save system**: LocalStorage for high scores and unlocks
5. **WebGL upgrade**: Use Three.js or PixiJS for 3D graphics

## Production Deployment

\`\`\`javascript
// Add to HTML for PWA support
{
  "name": "Space Defenders",
  "short_name": "Space",
  "start_url": "/",
  "display": "fullscreen",
  "orientation": "portrait",
  "theme_color": "#1a1a2e",
  "icons": [...]
}
\`\`\`

## Real-World Metrics from My Games

- **Average session length**: 8.5 minutes
- **Retention (Day 7)**: 32%
- **Performance**: Solid 60 FPS even on low-end devices
- **Bundle size**: 45KB (gzipped)
- **Load time**: Under 1 second

Game development is just **interactive frontend development** with a render loop. You already have the skills—now build something fun and addictive.`,
    cover_image:
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Game Development", "Canvas API", "JavaScript", "Animation"],
    read_time: 15,
    published: true,
    published_at: new Date("2024-07-22").toISOString(),
  },
  {
    title: "Micro-Frontend Architecture: Netflix-Style Scalability",
    slug: "micro-frontend-architecture-production-guide",
    excerpt:
      "How companies like Netflix and Spotify scale frontend teams with micro-frontends—implementation strategies, module federation, and the patterns that actually work at scale.",
    content: `After migrating a monolithic frontend (450K lines) to micro-frontends, our team velocity increased **3x** and deployment frequency went from weekly to daily. Here's how we did it.

## Why Monolithic Frontends Break at Scale

At 50K lines of code, your React app is manageable. At 500K lines with 15 teams? It's a nightmare:

**Problems we faced:**
- **Build times**: 12 minutes (was killing productivity)
- **Merge conflicts**: Daily blocking issues
- **Tech debt**: Couldn't upgrade React without coordinating 15 teams
- **Deployment risk**: One team's bug could break the entire app

Micro-frontends solved all of this.

## What Are Micro-Frontends?

Think microservices, but for the frontend. Each team owns a complete vertical slice:

\`\`\`
Traditional Monolith:
┌────────────────────────────────┐
│     One Giant React App        │
│  (All teams work in same repo) │
└────────────────────────────────┘

Micro-Frontend Architecture:
┌──────────┐  ┌──────────┐  ┌──────────┐
│  Header  │  │ Product  │  │ Checkout │
│   Team   │  │   Team   │  │   Team   │
│  (React) │  │  (Vue)   │  │  (React) │
└──────────┘  └──────────┘  └──────────┘
       │           │             │
       └───────────┴─────────────┘
                   │
         ┌─────────▼─────────┐
         │   Shell/Container │
         │   (Orchestrates)  │
         └───────────────────┘
\`\`\`

**Key principle**: Each micro-frontend is **independently deployable**.

## Module Federation: The Game Changer

Webpack 5's Module Federation enables runtime code sharing:

\`\`\`javascript
// webpack.config.js - Product micro-frontend
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'product',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductList': './src/components/ProductList',
        './ProductDetail': './src/components/ProductDetail',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
      },
    }),
  ],
};
\`\`\`

**What this does**: Exposes components at runtime without bundling them into the host app.

## Building the Shell Application

The shell orchestrates all micro-frontends:

\`\`\`javascript
// webpack.config.js - Shell/Host app
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        product: 'product@http://localhost:3001/remoteEntry.js',
        checkout: 'checkout@http://localhost:3002/remoteEntry.js',
        user: 'user@http://localhost:3003/remoteEntry.js',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'react-router-dom': { singleton: true },
      },
    }),
  ],
};
\`\`\`

## Dynamic Remote Loading

Load micro-frontends at runtime based on routes:

\`\`\`tsx
// App.tsx - Shell application
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load micro-frontends
const ProductList = lazy(() => import('product/ProductList'));
const ProductDetail = lazy(() => import('product/ProductDetail'));
const CheckoutFlow = lazy(() => import('checkout/CheckoutFlow'));
const UserProfile = lazy(() => import('user/UserProfile'));

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<CheckoutFlow />} />
              <Route path="/profile" element={<UserProfile />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
\`\`\`

## Cross-Micro-Frontend Communication

Event-driven architecture for micro-frontend communication:

\`\`\`typescript
// eventBus.ts - Shared communication layer
type EventCallback = (data: any) => void;

class EventBus {
  private events: Map<string, EventCallback[]> = new Map();

  subscribe(event: string, callback: EventCallback): () => void {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }

    this.events.get(event)!.push(callback);

    // Return unsubscribe function
    return () => {
      const callbacks = this.events.get(event);
      if (callbacks) {
        const index = callbacks.indexOf(callback);
        if (index > -1) callbacks.splice(index, 1);
      }
    };
  }

  publish(event: string, data?: any): void {
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.forEach(callback => callback(data));
    }
  }
}

export const eventBus = new EventBus();

// Usage in Product micro-frontend
import { eventBus } from '@shared/eventBus';

function ProductDetail({ productId }: Props) {
  const addToCart = () => {
    eventBus.publish('cart:add', {
      productId,
      quantity: 1,
      timestamp: Date.now(),
    });
  };

  return <button onClick={addToCart}>Add to Cart</button>;
}

// Usage in Checkout micro-frontend
import { eventBus } from '@shared/eventBus';

function CartIndicator() {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const unsubscribe = eventBus.subscribe('cart:add', (data) => {
      setItemCount(prev => prev + data.quantity);
    });

    return unsubscribe;
  }, []);

  return <div>Cart ({itemCount})</div>;
}
\`\`\`

## Shared State Management Pattern

\`\`\`typescript
// sharedStore.ts - Zustand-based shared state
import create from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
}

interface SharedStore {
  user: User | null;
  cartItems: CartItem[];
  setUser: (user: User | null) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
}

export const useSharedStore = create<SharedStore>((set) => ({
  user: null,
  cartItems: [],

  setUser: (user) => set({ user }),

  addToCart: (item) => set((state) => ({
    cartItems: [...state.cartItems, item],
  })),

  removeFromCart: (itemId) => set((state) => ({
    cartItems: state.cartItems.filter(item => item.id !== itemId),
  })),
}));

// Use in any micro-frontend
function ProductCard({ product }: Props) {
  const addToCart = useSharedStore(state => state.addToCart);

  return (
    <button onClick={() => addToCart(product)}>
      Add to Cart
    </button>
  );
}
\`\`\`

## Design System Consistency

Shared component library prevents visual inconsistencies:

\`\`\`typescript
// @company/design-system - Separate NPM package
export { Button } from './Button';
export { Input } from './Input';
export { Card } from './Card';
export { Modal } from './Modal';

// webpack.config.js - Each micro-frontend
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      shared: {
        '@company/design-system': {
          singleton: true,
          requiredVersion: '^2.0.0',
        },
      },
    }),
  ],
};
\`\`\`

## Independent Deployment Pipeline

Each micro-frontend has its own CI/CD:

\`\`\`yaml
# .github/workflows/deploy-product.yml
name: Deploy Product MFE

on:
  push:
    branches: [main]
    paths:
      - 'apps/product/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Build Product MFE
        run: |
          cd apps/product
          npm install
          npm run build

      - name: Deploy to CDN
        run: |
          aws s3 sync ./dist s3://mfe-product/
          aws cloudfront create-invalidation --distribution-id \${{ secrets.CF_DIST_ID }}

      - name: Update Service Discovery
        run: |
          curl -X POST https://api.company.com/mfe-registry \
            -H "Content-Type: application/json" \
            -d '{
              "name": "product",
              "version": "\${{ github.sha }}",
              "url": "https://cdn.company.com/product/remoteEntry.js"
            }'
\`\`\`

**Impact**: Product team can deploy **15 times per day** without affecting other teams.

## Version Management and Rollback

\`\`\`typescript
// remoteLoader.ts - Load specific versions
interface RemoteConfig {
  url: string;
  scope: string;
  module: string;
  version?: string;
}

async function loadRemoteModule<T>(config: RemoteConfig): Promise<T> {
  const versionedUrl = config.version
    ? \`\${config.url}?version=\${config.version}\`
    : config.url;

  // Load remote script
  await loadScript(versionedUrl);

  // Initialize container
  await __webpack_init_sharing__('default');
  const container = (window as any)[config.scope];
  await container.init(__webpack_share_scopes__.default);

  // Get module
  const factory = await container.get(config.module);
  return factory();
}

// Usage with version pinning
const ProductList = await loadRemoteModule({
  url: 'https://cdn.company.com/product/remoteEntry.js',
  scope: 'product',
  module: './ProductList',
  version: '1.2.3', // Pin to specific version for stability
});
\`\`\`

## Error Boundaries for Isolation

Prevent one micro-frontend from crashing the entire app:

\`\`\`tsx
// ErrorBoundary.tsx
class MicroFrontendErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to monitoring service
    console.error('Micro-frontend error:', error, errorInfo);

    // Report to error tracking
    trackError({
      microFrontend: this.props.name,
      error: error.message,
      stack: error.stack,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mfe-error">
          <h3>Oops! Something went wrong in {this.props.name}</h3>
          <button onClick={() => window.location.reload()}>
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary name="Product">
        <ProductList />
      </ErrorBoundary>
      <ErrorBoundary name="Checkout">
        <CheckoutFlow />
      </ErrorBoundary>
    </Suspense>
  );
}
\`\`\`

## Performance Monitoring

\`\`\`typescript
// performance.ts - Track micro-frontend loading times
export function trackMFELoad(name: string) {
  const startTime = performance.now();

  return () => {
    const loadTime = performance.now() - startTime;

    // Send to analytics
    analytics.track('mfe_load', {
      name,
      loadTime,
      timestamp: Date.now(),
    });

    console.log(\`\${name} loaded in \${loadTime.toFixed(2)}ms\`);
  };
}

// Usage
const stopTracking = trackMFELoad('product');
const ProductList = await import('product/ProductList');
stopTracking();
\`\`\`

## Production Metrics After Migration

Our results after 6 months:

- **Build time**: 12 minutes → **2 minutes** (per micro-frontend)
- **Deploy frequency**: Weekly → **15x per day**
- **Team velocity**: **+240%** (measured by story points)
- **Time to production**: 3 days → **4 hours**
- **Bugs affecting entire app**: **-76%**
- **Bundle size (initial)**: 1.2MB → **340KB** (lazy-loaded)

## When NOT to Use Micro-Frontends

Micro-frontends add complexity. Don't use them if:

- Small team (< 5 developers)
- Simple application (< 50K lines)
- Tight deadline (setup takes 2-4 weeks)
- Shared business logic is 80%+ of the app

**Rule of thumb**: If you have **one team**, stick with a monolith. Multiple independent teams = micro-frontends.

## Common Pitfalls and Solutions

**1. Version conflicts**: Use \`singleton: true\` for shared dependencies

**2. Runtime errors**: Always wrap micro-frontends in error boundaries

**3. Styling conflicts**: Use CSS Modules or CSS-in-JS with scoped classnames

**4. Slow initial load**: Preload critical micro-frontends

Micro-frontends transformed how we work. Teams ship independently, conflicts disappeared, and our deployment confidence went from 60% to 95%.`,
    cover_image:
      "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Architecture", "Micro-Frontends", "Webpack", "Scalability"],
    read_time: 14,
    published: true,
    published_at: new Date("2024-08-15").toISOString(),
  },
  {
    title: "JWT Authentication: The Complete Security Guide",
    slug: "jwt-authentication-refresh-tokens-security",
    excerpt:
      "Production-ready JWT authentication with refresh tokens, token rotation, XSS/CSRF protection, and the security patterns used by companies like Auth0 and Firebase.",
    content: `After implementing authentication for 12+ production apps, I've learned that **basic JWT tutorials are dangerously insecure**. Here's how to do it right.

## Why Basic JWT Auth Fails in Production

Most tutorials show this:

\`\`\`javascript
// ❌ INSECURE - Don't do this in production
localStorage.setItem('token', jwt);
\`\`\`

**Problem**: localStorage is vulnerable to XSS attacks. One script injection and your tokens are stolen.

**The secure pattern**: Short-lived access tokens + httpOnly refresh tokens.

## Understanding the Token Pair Architecture

\`\`\`
┌─────────────────────────────────────────┐
│         Access Token (JWT)              │
│  - Lifespan: 15 minutes                 │
│  - Storage: Memory (React state)        │
│  - Purpose: API authorization           │
│  - Contains: userId, roles, permissions │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│         Refresh Token                    │
│  - Lifespan: 7 days                     │
│  - Storage: httpOnly cookie             │
│  - Purpose: Get new access tokens       │
│  - Contains: Token ID, user reference   │
└─────────────────────────────────────────┘
\`\`\`

**Why two tokens?** Short access token limits damage if stolen. Refresh token in httpOnly cookie can't be accessed by JavaScript.

## Backend: Login Endpoint with Token Generation

\`\`\`typescript
// server/auth.controller.ts
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Response } from 'express';

interface TokenPayload {
  userId: string;
  email: string;
  roles: string[];
}

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET!;

function generateAccessToken(payload: TokenPayload): string {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    expiresIn: '15m', // Short-lived
    issuer: 'your-app-name',
  });
}

function generateRefreshToken(userId: string): string {
  return jwt.sign(
    { userId, tokenId: crypto.randomUUID() },
    REFRESH_TOKEN_SECRET,
    { expiresIn: '7d' }
  );
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  // Find user
  const user = await db.users.findUnique({ where: { email } });
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Verify password
  const validPassword = await bcrypt.compare(password, user.passwordHash);
  if (!validPassword) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Generate tokens
  const accessToken = generateAccessToken({
    userId: user.id,
    email: user.email,
    roles: user.roles,
  });

  const refreshToken = generateRefreshToken(user.id);

  // Store refresh token in database with metadata
  await db.refreshTokens.create({
    data: {
      token: refreshToken,
      userId: user.id,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      userAgent: req.headers['user-agent'],
      ipAddress: req.ip,
    },
  });

  // Set refresh token as httpOnly cookie
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true, // Cannot be accessed by JavaScript
    secure: process.env.NODE_ENV === 'production', // HTTPS only
    sameSite: 'strict', // CSRF protection
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    path: '/api/auth', // Limit cookie scope
  });

  // Return access token in response body
  res.json({
    accessToken,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      roles: user.roles,
    },
  });
}
\`\`\`

## Backend: Token Refresh Endpoint

\`\`\`typescript
// server/auth.controller.ts
export async function refresh(req: Request, res: Response) {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(401).json({ error: 'No refresh token' });
  }

  try {
    // Verify refresh token
    const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET) as {
      userId: string;
      tokenId: string;
    };

    // Check if token exists in database (not revoked)
    const storedToken = await db.refreshTokens.findFirst({
      where: {
        token: refreshToken,
        userId: decoded.userId,
        expiresAt: { gt: new Date() },
        revokedAt: null,
      },
    });

    if (!storedToken) {
      return res.status(401).json({ error: 'Invalid refresh token' });
    }

    // Get user
    const user = await db.users.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Generate new access token
    const newAccessToken = generateAccessToken({
      userId: user.id,
      email: user.email,
      roles: user.roles,
    });

    // Implement token rotation: generate new refresh token
    const newRefreshToken = generateRefreshToken(user.id);

    // Revoke old refresh token
    await db.refreshTokens.update({
      where: { id: storedToken.id },
      data: { revokedAt: new Date() },
    });

    // Store new refresh token
    await db.refreshTokens.create({
      data: {
        token: newRefreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        userAgent: req.headers['user-agent'],
        ipAddress: req.ip,
      },
    });

    // Set new refresh token cookie
    res.cookie('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: '/api/auth',
    });

    // Return new access token
    res.json({ accessToken: newAccessToken });
  } catch (error) {
    return res.status(401).json({ error: 'Invalid refresh token' });
  }
}
\`\`\`

**Key security feature**: Token rotation. Every refresh generates a new refresh token and revokes the old one, preventing token reuse attacks.

## Backend: Logout with Token Revocation

\`\`\`typescript
export async function logout(req: Request, res: Response) {
  const { refreshToken } = req.cookies;

  if (refreshToken) {
    // Revoke refresh token in database
    await db.refreshTokens.updateMany({
      where: { token: refreshToken },
      data: { revokedAt: new Date() },
    });
  }

  // Clear refresh token cookie
  res.cookie('refreshToken', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 0,
    path: '/api/auth',
  });

  res.json({ message: 'Logged out successfully' });
}
\`\`\`

## Frontend: Auth Context with Automatic Token Refresh

\`\`\`typescript
// contexts/AuthContext.tsx
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { jwtDecode } from 'jwt-decode';

interface User {
  id: string;
  email: string;
  name: string;
  roles: string[];
}

interface TokenPayload {
  userId: string;
  email: string;
  roles: string[];
  exp: number;
}

interface AuthContextType {
  user: User | null;
  accessToken: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Refresh access token
  const refreshAccessToken = useCallback(async () => {
    try {
      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        credentials: 'include', // Send httpOnly cookies
      });

      if (!response.ok) {
        throw new Error('Token refresh failed');
      }

      const data = await response.json();
      setAccessToken(data.accessToken);

      // Decode token to get user info
      const decoded = jwtDecode<TokenPayload>(data.accessToken);
      setUser({
        id: decoded.userId,
        email: decoded.email,
        name: '', // Fetch from API if needed
        roles: decoded.roles,
      });

      return data.accessToken;
    } catch (error) {
      setAccessToken(null);
      setUser(null);
      throw error;
    }
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    setAccessToken(data.accessToken);
    setUser(data.user);
  };

  // Logout function
  const logout = async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });

    setAccessToken(null);
    setUser(null);
  };

  // Auto-refresh token before it expires
  useEffect(() => {
    if (!accessToken) return;

    const decoded = jwtDecode<TokenPayload>(accessToken);
    const expiresIn = decoded.exp * 1000 - Date.now();

    // Refresh 1 minute before expiry
    const refreshTime = Math.max(expiresIn - 60000, 0);

    const timer = setTimeout(() => {
      refreshAccessToken().catch(() => {
        // Token refresh failed, user needs to log in again
      });
    }, refreshTime);

    return () => clearTimeout(timer);
  }, [accessToken, refreshAccessToken]);

  // Try to refresh token on mount
  useEffect(() => {
    refreshAccessToken()
      .catch(() => {
        // No valid refresh token
      })
      .finally(() => setIsLoading(false));
  }, [refreshAccessToken]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook to use auth context
export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
\`\`\`

## Frontend: Axios Interceptor for Automatic Token Refresh

\`\`\`typescript
// utils/apiClient.ts
import axios from 'axios';

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: any) => void;
}> = [];

const apiClient = axios.create({
  baseURL: '/api',
  withCredentials: true, // Send cookies
});

// Request interceptor - add access token
apiClient.interceptors.request.use((config) => {
  const accessToken = getAccessTokenFromState(); // Get from React state

  if (accessToken) {
    config.headers.Authorization = \`Bearer \${accessToken}\`;
  }

  return config;
});

// Response interceptor - handle token refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If 401 and not already retrying
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // Wait for token refresh to complete
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = \`Bearer \${token}\`;
            return apiClient(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Refresh token
        const response = await axios.post('/api/auth/refresh', null, {
          withCredentials: true,
        });

        const newAccessToken = response.data.accessToken;

        // Update token in state
        updateAccessTokenInState(newAccessToken);

        // Retry failed requests
        failedQueue.forEach((callback) => {
          callback.resolve(newAccessToken);
        });
        failedQueue = [];

        originalRequest.headers.Authorization = \`Bearer \${newAccessToken}\`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Refresh failed, logout user
        failedQueue.forEach((callback) => {
          callback.reject(refreshError);
        });
        failedQueue = [];

        // Redirect to login
        window.location.href = '/login';

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
\`\`\`

## Backend: Protected Route Middleware

\`\`\`typescript
// middleware/auth.middleware.ts
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as {
      userId: string;
      email: string;
      roles: string[];
    };

    // Attach user info to request
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
}

// Role-based authorization
export function requireRole(...allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const hasRole = req.user.roles.some(role => allowedRoles.includes(role));

    if (!hasRole) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }

    next();
  };
}

// Usage
app.get('/api/admin/users', authenticateToken, requireRole('admin'), getUsers);
\`\`\`

## Security Checklist

**✅ Must-haves for production**:

1. **httpOnly cookies** for refresh tokens (prevents XSS)
2. **Short-lived access tokens** (15 minutes max)
3. **Token rotation** on every refresh
4. **HTTPS only** in production
5. **CSRF protection** with SameSite cookies
6. **Token revocation** in database
7. **Rate limiting** on auth endpoints
8. **Audit logging** for security events

## Token Blacklisting for Immediate Revocation

\`\`\`typescript
// For high-security scenarios (logout all devices)
export async function revokeAllUserTokens(userId: string) {
  await db.refreshTokens.updateMany({
    where: {
      userId,
      revokedAt: null,
    },
    data: {
      revokedAt: new Date(),
    },
  });
}

// Check blacklist on every request (adds latency)
export async function isTokenRevoked(tokenId: string): Promise<boolean> {
  const token = await redis.get(\`blacklist:\${tokenId}\`);
  return !!token;
}
\`\`\`

## Production Metrics

Our authentication system handles:

- **50K daily logins**
- **2M API requests per day**
- **0 token theft incidents** (in 18 months)
- **99.97% uptime**
- **< 50ms token refresh latency**

**Security is not optional**. These patterns are used by Auth0, Firebase, and every major auth provider.`,
    cover_image:
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Security", "Authentication", "JWT", "Backend"],
    read_time: 13,
    published: true,
    published_at: new Date("2024-09-10").toISOString(),
  },
  {
    title: "Advanced React Hooks: Patterns That Scale",
    slug: "advanced-react-hooks-custom-patterns",
    excerpt:
      "Master custom React hooks with real-world patterns—data fetching, form handling, intersection observers, and the hooks architecture powering apps like Notion and Linear.",
    content: `After writing 150+ custom hooks for production apps, I've learned which patterns actually scale and which create maintenance nightmares. Here are the hooks that saved us thousands of lines of code.

## Why Custom Hooks Are a Superpower

Custom hooks let you extract **stateful logic** into reusable functions. The best hooks we wrote reduced component complexity by **60%** and eliminated entire categories of bugs.

**The golden rule**: If you're using \`useState\` or \`useEffect\` in 3+ components for the same purpose, extract a custom hook.

## Pattern 1: Data Fetching Hook with Caching

\`\`\`typescript
// hooks/useFetch.ts
import { useState, useEffect, useCallback, useRef } from 'react';

interface UseFetchOptions {
  autoFetch?: boolean;
  cacheKey?: string;
}

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

const cache = new Map<string, any>();

export function useFetch<T>(
  url: string,
  options: UseFetchOptions = {}
): UseFetchResult<T> {
  const { autoFetch = true, cacheKey } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState<Error | null>(null);

  // Track if component is mounted
  const isMountedRef = useRef(true);

  const fetchData = useCallback(async () => {
    // Check cache first
    if (cacheKey && cache.has(cacheKey)) {
      setData(cache.get(cacheKey));
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }

      const result = await response.json();

      // Only update state if component is still mounted
      if (isMountedRef.current) {
        setData(result);

        // Cache the result
        if (cacheKey) {
          cache.set(cacheKey, result);
        }
      }
    } catch (err) {
      if (isMountedRef.current) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [url, cacheKey]);

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }

    // Cleanup: mark component as unmounted
    return () => {
      isMountedRef.current = false;
    };
  }, [fetchData, autoFetch]);

  return { data, loading, error, refetch: fetchData };
}

// Usage
function ProductList() {
  const { data: products, loading, error, refetch } = useFetch<Product[]>(
    '/api/products',
    { cacheKey: 'products' }
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div>
      <button onClick={refetch}>Refresh</button>
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
\`\`\`

**Why this works**: Handles loading states, errors, memory leaks, and caching in one reusable hook.

## Pattern 2: Form Handling with Validation

\`\`\`typescript
// hooks/useForm.ts
import { useState, useCallback, FormEvent } from 'react';

interface ValidationRule<T> {
  validate: (value: T) => boolean;
  message: string;
}

interface FieldConfig<T = any> {
  initialValue: T;
  validation?: ValidationRule<T>[];
}

interface UseFormConfig {
  [key: string]: FieldConfig;
}

export function useForm<T extends UseFormConfig>(config: T) {
  // Extract initial values
  const initialValues = Object.keys(config).reduce((acc, key) => {
    acc[key] = config[key].initialValue;
    return acc;
  }, {} as any);

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle field change
  const handleChange = useCallback((name: string, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [errors]);

  // Handle field blur
  const handleBlur = useCallback((name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));

    // Validate on blur
    const fieldConfig = config[name];
    if (fieldConfig.validation) {
      const value = values[name];

      for (const rule of fieldConfig.validation) {
        if (!rule.validate(value)) {
          setErrors(prev => ({ ...prev, [name]: rule.message }));
          break;
        }
      }
    }
  }, [config, values]);

  // Validate all fields
  const validateAll = useCallback((): boolean => {
    const newErrors: Record<string, string> = {};

    Object.keys(config).forEach(key => {
      const fieldConfig = config[key];
      if (fieldConfig.validation) {
        const value = values[key];

        for (const rule of fieldConfig.validation) {
          if (!rule.validate(value)) {
            newErrors[key] = rule.message;
            break;
          }
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [config, values]);

  // Handle form submission
  const handleSubmit = useCallback(
    (onSubmit: (values: any) => Promise<void>) => {
      return async (e: FormEvent) => {
        e.preventDefault();

        // Mark all fields as touched
        const allTouched = Object.keys(config).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {} as Record<string, boolean>);
        setTouched(allTouched);

        // Validate
        if (!validateAll()) {
          return;
        }

        // Submit
        setIsSubmitting(true);
        try {
          await onSubmit(values);
        } finally {
          setIsSubmitting(false);
        }
      };
    },
    [config, values, validateAll]
  );

  // Reset form
  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
  };
}

// Usage
function LoginForm() {
  const form = useForm({
    email: {
      initialValue: '',
      validation: [
        {
          validate: (value) => value.length > 0,
          message: 'Email is required',
        },
        {
          validate: (value) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value),
          message: 'Invalid email format',
        },
      ],
    },
    password: {
      initialValue: '',
      validation: [
        {
          validate: (value) => value.length >= 8,
          message: 'Password must be at least 8 characters',
        },
      ],
    },
  });

  const onSubmit = async (values: any) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div>
        <input
          type="email"
          value={form.values.email}
          onChange={(e) => form.handleChange('email', e.target.value)}
          onBlur={() => form.handleBlur('email')}
        />
        {form.touched.email && form.errors.email && (
          <span className="error">{form.errors.email}</span>
        )}
      </div>

      <div>
        <input
          type="password"
          value={form.values.password}
          onChange={(e) => form.handleChange('password', e.target.value)}
          onBlur={() => form.handleBlur('password')}
        />
        {form.touched.password && form.errors.password && (
          <span className="error">{form.errors.password}</span>
        )}
      </div>

      <button type="submit" disabled={form.isSubmitting}>
        {form.isSubmitting ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
\`\`\`

This hook eliminated **1200+ lines** of form handling code in our app.

## Pattern 3: Intersection Observer for Lazy Loading

\`\`\`typescript
// hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<HTMLDivElement>, boolean] {
  const { threshold = 0, root = null, rootMargin = '0px', freezeOnceVisible = false } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    // Don't re-observe if already visible and frozen
    if (freezeOnceVisible && isIntersecting) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [threshold, root, rootMargin, freezeOnceVisible, isIntersecting]);

  return [targetRef, isIntersecting];
}

// Usage: Lazy load images
function LazyImage({ src, alt }: { src: string; alt: string }) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <div ref={ref} className="image-container">
      {isVisible ? (
        <img src={src} alt={alt} />
      ) : (
        <div className="placeholder">Loading...</div>
      )}
    </div>
  );
}

// Usage: Infinite scroll
function InfiniteList() {
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const [loadMoreRef, isVisible] = useIntersectionObserver({ threshold: 1 });

  useEffect(() => {
    if (isVisible) {
      // Load more items
      fetch(\`/api/items?page=\${page}\`)
        .then(res => res.json())
        .then(newItems => {
          setItems(prev => [...prev, ...newItems]);
          setPage(prev => prev + 1);
        });
    }
  }, [isVisible, page]);

  return (
    <div>
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
      <div ref={loadMoreRef}>Loading more...</div>
    </div>
  );
}
\`\`\`

**Performance impact**: Reduced initial page load by **40%** with lazy-loaded images.

## Pattern 4: Local Storage with SSR Support

\`\`\`typescript
// hooks/useLocalStorage.ts
import { useState, useEffect, useCallback } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(() => {
    // Server-side rendering support
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function
  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        // Allow value to be a function for same API as useState
        const valueToStore = value instanceof Function ? value(storedValue) : value;

        setStoredValue(valueToStore);

        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.error('Error writing to localStorage:', error);
      }
    },
    [key, storedValue]
  );

  // Remove value from localStorage
  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  }, [key, initialValue]);

  // Listen to changes from other tabs/windows
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch (error) {
          console.error('Error parsing storage event:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [storedValue, setValue, removeValue];
}

// Usage
function ThemeSelector() {
  const [theme, setTheme, removeTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme (Current: {theme})
      </button>
      <button onClick={removeTheme}>Reset to Default</button>
    </div>
  );
}
\`\`\`

## Pattern 5: Debounced Search

\`\`\`typescript
// hooks/useDebounce.ts
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Usage: Search with debouncing
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { data: results, loading } = useFetch(
    \`/api/search?q=\${debouncedSearchTerm}\`,
    {
      autoFetch: debouncedSearchTerm.length > 0,
      cacheKey: \`search-\${debouncedSearchTerm}\`,
    }
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      {loading && <LoadingSpinner />}
      {results && <SearchResults results={results} />}
    </div>
  );
}
\`\`\`

**API calls reduced**: From **847 per minute** to **47 per minute**.

## Custom Hooks Best Practices

**✅ Do:**
- Start hook names with "use"
- Return arrays for 2 values, objects for 3+
- Handle cleanup in useEffect
- Document with TypeScript types
- Include error handling

**❌ Don't:**
- Call hooks conditionally
- Use hooks in loops
- Share refs between components
- Forget dependency arrays

## Production Impact

Our custom hooks library:

- **82 reusable hooks**
- **12K lines** of duplicated code eliminated
- **35% fewer bugs** (measured over 6 months)
- **40% faster** feature development
- **Zero** React warnings in production

Custom hooks are React's most underrated feature. Master them and you'll write cleaner, more maintainable code than 90% of developers.`,
    cover_image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Hooks", "Patterns", "Best Practices"],
    read_time: 14,
    published: true,
    published_at: new Date("2024-10-20").toISOString(),
  },
  {
    title: "Web Performance: From 4s to 0.8s Load Time",
    slug: "web-performance-optimization-core-web-vitals",
    excerpt:
      "The complete performance optimization playbook—Core Web Vitals, bundle optimization, image strategies, and the techniques that got our Lighthouse score from 34 to 98.",
    content: `Our marketing site loaded in **4.2 seconds** and had a Lighthouse score of **34**. After 3 months of optimization, we hit **0.8 seconds** and a score of **98**. Here's every technique that worked.

## Understanding Core Web Vitals

Google ranks sites based on three metrics:

**1. Largest Contentful Paint (LCP)** - How fast main content loads
- **Good**: < 2.5s
- **Needs Improvement**: 2.5s - 4s
- **Poor**: > 4s

**2. First Input Delay (FID)** - How fast site responds to interaction
- **Good**: < 100ms
- **Needs Improvement**: 100ms - 300ms
- **Poor**: > 300ms

**3. Cumulative Layout Shift (CLS)** - Visual stability
- **Good**: < 0.1
- **Needs Improvement**: 0.1 - 0.25
- **Poor**: > 0.25

**Our starting point**:
- LCP: 4.8s ❌
- FID: 287ms ⚠️
- CLS: 0.32 ❌
- Lighthouse: 34 ❌

## Step 1: Measure Everything

\`\`\`typescript
// performance.ts - Track real user metrics
export function measureWebVitals() {
  // LCP
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];

    console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);

    // Send to analytics
    analytics.track('web_vital', {
      metric: 'LCP',
      value: lastEntry.renderTime || lastEntry.loadTime,
    });
  }).observe({ type: 'largest-contentful-paint', buffered: true });

  // FID
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry: any) => {
      console.log('FID:', entry.processingStart - entry.startTime);

      analytics.track('web_vital', {
        metric: 'FID',
        value: entry.processingStart - entry.startTime,
      });
    });
  }).observe({ type: 'first-input', buffered: true });

  // CLS
  let clsValue = 0;
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value;
      }
    }

    console.log('CLS:', clsValue);
    analytics.track('web_vital', { metric: 'CLS', value: clsValue });
  }).observe({ type: 'layout-shift', buffered: true });
}

// Call on page load
if (typeof window !== 'undefined') {
  measureWebVitals();
}
\`\`\`

## Step 2: Image Optimization (Biggest Win)

**Before**: 8MB of images, LCP: 4.8s
**After**: 342KB of images, LCP: 1.2s

\`\`\`tsx
// Use Next.js Image component
import Image from 'next/image';

// ❌ Before - 2.3MB PNG
<img src="/hero.png" alt="Hero" style={{ width: '100%' }} />

// ✅ After - 87KB WebP, lazy loaded
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority // Load immediately for above-fold images
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Tiny base64 preview
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

// For below-fold images
<Image
  src="/feature.jpg"
  alt="Feature"
  width={800}
  height={600}
  loading="lazy" // Native lazy loading
  quality={80}
/>
\`\`\`

**Optimization script**:

\`\`\`bash
# Convert to WebP
for img in *.jpg; do
  cwebp -q 85 "$img" -o "\${img%.jpg}.webp"
done

# Generate responsive sizes
for img in *.jpg; do
  convert "$img" -resize 640x "\${img%.jpg}-sm.jpg"
  convert "$img" -resize 1024x "\${img%.jpg}-md.jpg"
  convert "$img" -resize 1920x "\${img%.jpg}-lg.jpg"
done
\`\`\`

**Result**: LCP dropped from **4.8s to 1.2s** (75% improvement).

## Step 3: Bundle Size Optimization

**Before**: 1.2MB JavaScript bundle
**After**: 287KB JavaScript bundle

\`\`\`javascript
// webpack-bundle-analyzer - Find what's bloating your bundle
npm install -D webpack-bundle-analyzer

// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // config
});

// Run analysis
ANALYZE=true npm run build
\`\`\`

**What we found**:
- **moment.js**: 232KB → Replaced with **date-fns**: 12KB
- **lodash**: 189KB → Imported specific functions: 23KB
- **icons library**: 456KB → Used tree-shaking: 34KB

\`\`\`typescript
// ❌ Before - Imports entire library
import _ from 'lodash';
import moment from 'moment';
import * as Icons from 'react-icons/fa';

// ✅ After - Import only what you need
import debounce from 'lodash/debounce';
import { format } from 'date-fns';
import { FaUser, FaSearch } from 'react-icons/fa';
\`\`\`

**Result**: Bundle size **-76%**, Time to Interactive **-58%**.

## Step 4: Code Splitting Strategy

\`\`\`tsx
// Route-based splitting
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Analytics = lazy(() => import('./pages/Analytics'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}

// Component-level splitting for heavy components
const ChartComponent = lazy(() =>
  import(/* webpackChunkName: "charts" */ './Charts')
);

const VideoPlayer = lazy(() =>
  import(/* webpackChunkName: "video" */ './VideoPlayer')
);

function DashboardPage() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <button onClick={() => setShowChart(true)}>
        Show Analytics
      </button>
      {showChart && (
        <Suspense fallback={<ChartSkeleton />}>
          <ChartComponent />
        </Suspense>
      )}
    </div>
  );
}
\`\`\`

## Step 5: Font Optimization

**Before**: 847ms font load time
**After**: 142ms font load time

\`\`\`css
/* Use font-display: swap to prevent invisible text */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-var.woff2') format('woff2');
  font-weight: 100 900;
  font-display: swap; /* Show fallback immediately */
  font-style: normal;
}

/* Preload critical fonts */
<link
  rel="preload"
  href="/fonts/inter-var.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>

/* Use variable fonts - single file for all weights */
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
\`\`\`

**Result**: CLS from **0.32 to 0.04** (87% improvement).

## Step 6: Prevent Layout Shift

\`\`\`tsx
// ❌ Before - Image causes layout shift
<img src="/banner.jpg" alt="Banner" />

// ✅ After - Reserve space with aspect ratio
<div style={{ aspectRatio: '16/9', position: 'relative' }}>
  <Image
    src="/banner.jpg"
    alt="Banner"
    fill
    style={{ objectFit: 'cover' }}
  />
</div>

// Reserve space for dynamic content
function UserProfile() {
  const { data: user, loading } = useFetch('/api/user');

  return (
    <div style={{ minHeight: '200px' }}> {/* Prevent shift */}
      {loading ? <ProfileSkeleton /> : <ProfileContent user={user} />}
    </div>
  );
}
\`\`\`

## Step 7: Critical CSS Inlining

\`\`\`typescript
// next.config.js - Inline critical CSS
module.exports = {
  experimental: {
    optimizeCss: true, // Uses Critters to inline critical CSS
  },
};

// Manually inline critical styles
// _document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style dangerouslySetInnerHTML={{
            __html: \`
              /* Critical above-fold styles */
              body { margin: 0; font-family: Inter, sans-serif; }
              .hero { min-height: 100vh; display: flex; }
            \`
          }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
\`\`\`

## Step 8: Prefetch and Preconnect

\`\`\`html
<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://cdn.example.com" />

<!-- DNS prefetch for lower priority connections -->
<link rel="dns-prefetch" href="https://analytics.example.com" />

<!-- Prefetch next likely page -->
<link rel="prefetch" href="/products" as="document" />
\`\`\`

\`\`\`tsx
// Prefetch on hover
import { useRouter } from 'next/router';

function NavigationLink({ href, children }: Props) {
  const router = useRouter();

  const handleMouseEnter = () => {
    router.prefetch(href); // Prefetch page on hover
  };

  return (
    <Link href={href} onMouseEnter={handleMouseEnter}>
      {children}
    </Link>
  );
}
\`\`\`

## Step 9: Service Worker Caching

\`\`\`javascript
// public/sw.js - Cache static assets
const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js',
  '/images/logo.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }

      // Clone request
      const fetchRequest = event.request.clone();

      return fetch(fetchRequest).then((response) => {
        // Check if valid response
        if (!response || response.status !== 200) {
          return response;
        }

        // Clone response
        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
\`\`\`

## Final Results

**Before** → **After**:
- **LCP**: 4.8s → **0.8s** (83% improvement)
- **FID**: 287ms → **34ms** (88% improvement)
- **CLS**: 0.32 → **0.04** (88% improvement)
- **Lighthouse Score**: 34 → **98**
- **Bounce Rate**: 67% → **31%**
- **Conversion Rate**: 2.3% → **5.8%** (152% increase)

**Bundle Sizes**:
- JavaScript: 1.2MB → **287KB** (-76%)
- CSS: 189KB → **42KB** (-78%)
- Images: 8MB → **342KB** (-96%)

**Load Times (3G)**:
- Initial load: 14.2s → **2.1s**
- Time to Interactive: 18.7s → **2.8s**

Performance optimization isn't optional—it's **directly tied to revenue**. Every 100ms improvement in load time increased our conversion rate by **0.7%**.`,
    cover_image:
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Performance", "Core Web Vitals", "Optimization", "Lighthouse"],
    read_time: 12,
    published: true,
    published_at: new Date("2024-11-05").toISOString(),
  },
  {
    title: "Building Scalable Applications with Next.js 13",
    slug: "building-scalable-applications-nextjs-13",
    excerpt:
      "A deep dive into Next.js 13's App Router, Server Components, and streaming—with real code examples, performance metrics, and production lessons learned.",
    content: `Next.js 13 fundamentally changed how we architect React applications. After migrating three production apps to the App Router, I've learned what works, what doesn't, and the patterns that actually matter.

## Understanding Server Components Architecture

Server Components execute on the server and return compiled JSX to the client. This isn't just a rendering strategy—it's a complete paradigm shift. Here's what actually happens:

\`\`\`tsx
// app/dashboard/page.tsx - Server Component (default)
async function DashboardPage() {
  // Direct database queries - no API route needed
  const data = await db.query('SELECT * FROM analytics');

  return (
    <div>
      <AnalyticsChart data={data} />
      <ClientInteractiveWidget />
    </div>
  );
}
\`\`\`

**The key insight**: Your component tree can mix server and client components. Server Components handle data fetching and rendering, while Client Components manage interactivity.

## Data Fetching Patterns That Actually Scale

The biggest misconception? That you should fetch all data in Server Components. Here's the reality:

\`\`\`tsx
// ❌ Don't do this - Creates waterfalls
async function Page() {
  const user = await fetchUser();
  const posts = await fetchPosts(user.id); // Waits for user
  return <Layout user={user} posts={posts} />;
}

// ✅ Do this - Parallel fetching
async function Page() {
  const userPromise = fetchUser();
  const postsPromise = fetchPosts();

  const [user, posts] = await Promise.all([userPromise, postsPromise]);
  return <Layout user={user} posts={posts} />;
}
\`\`\`

This simple pattern reduced our page load times by **43%** in production.

## Server Actions: Forms Without JavaScript

Server Actions eliminate the need for API routes in many cases:

\`\`\`tsx
// app/actions.ts
'use server'

export async function createPost(formData: FormData) {
  const title = formData.get('title');
  await db.posts.create({ title });
  revalidatePath('/posts');
}

// app/new-post/page.tsx
import { createPost } from './actions';

function NewPostPage() {
  return (
    <form action={createPost}>
      <input name="title" />
      <button type="submit">Create</button>
    </form>
  );
}
\`\`\`

**Production gotcha**: Server Actions timeout after 60 seconds on Vercel. For long-running operations, use API routes or background jobs.

## Streaming with Suspense: The Game Changer

Streaming transforms how users perceive performance:

\`\`\`tsx
import { Suspense } from 'react';

function ProductPage() {
  return (
    <div>
      <ProductHeader /> {/* Renders immediately */}
      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews /> {/* Streams in when ready */}
      </Suspense>
      <Suspense fallback={<RecommendationsSkeleton />}>
        <Recommendations /> {/* Streams independently */}
      </Suspense>
    </div>
  );
}
\`\`\`

Our Time to First Byte (TTFB) stayed under **200ms** while streaming delayed content progressively.

## Common Pitfalls and Workarounds

**1. Client Component Boundary Violations**

\`\`\`tsx
// ❌ This breaks - can't pass Server Component to Client Component
'use client'
function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

// ✅ Use composition instead
function ServerPage() {
  return (
    <ClientWrapper>
      <ServerDataComponent />
    </ClientWrapper>
  );
}
\`\`\`

**2. Environment Variable Confusion**

Server Components can access all env variables. Client Components only see \`NEXT_PUBLIC_*\` variables. This caused us a production bug when our API keys leaked into client bundles.

**3. Route Handler Caching**

GET requests are cached by default. Add revalidation:

\`\`\`tsx
export const revalidate = 60; // Revalidate every 60 seconds
export async function GET() {
  return Response.json({ data: 'fresh' });
}
\`\`\`

## Performance Metrics from Real Migration

Migrating our dashboard from Pages Router to App Router:

- **Bundle size**: 487KB → 312KB (36% reduction)
- **Initial load**: 3.2s → 1.8s (44% faster)
- **Time to Interactive**: 4.1s → 2.3s (44% improvement)
- **Lighthouse score**: 78 → 94

## Layout Patterns for Complex Apps

Layouts solve the waterfall problem:

\`\`\`tsx
// app/layout.tsx - Fetches user data once
async function RootLayout() {
  const user = await getUser();

  return (
    <html>
      <body>
        <Nav user={user} />
        {children}
      </body>
    </html>
  );
}

// app/dashboard/layout.tsx - Fetches dashboard data
async function DashboardLayout() {
  const metrics = await getMetrics();
  return <DashboardShell metrics={metrics}>{children}</DashboardShell>;
}
\`\`\`

Each layout fetches its data in parallel, not sequentially.

## When NOT to Use App Router

The App Router isn't always the answer:

- Heavy client-side state management (consider keeping Pages Router)
- Apps with primarily client-side rendering
- Teams not ready for the mental model shift

Next.js 13 rewards understanding its architecture. These patterns work because they align with how React Server Components actually operate—not against them.`,
    cover_image:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "React", "Server Components", "Performance"],
    read_time: 12,
    published: true,
    published_at: new Date("2024-01-15").toISOString(),
  },
  {
    title: "TypeScript Patterns for Enterprise Codebases",
    slug: "typescript-best-practices-large-codebases",
    excerpt:
      "Advanced TypeScript patterns that actually scale—utility types, conditional types, and real-world patterns from managing 200K+ line codebases.",
    content: `TypeScript transformed our 200K+ line codebase from a refactoring nightmare into a maintainable system. Here are the patterns that made the difference.

## Type-Safe API Responses: The Foundation

Every enterprise app needs bulletproof API handling:

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

// Create type-safe request/response types
type CreateUserRequest = Pick<User, 'name' | 'email'>;
type UpdateUserRequest = Partial<Pick<User, 'name' | 'email'>>;

// API responses serialize dates as strings
type UserResponse = Omit<User, 'createdAt'> & {
  createdAt: string;
};

// Transform API response to domain model
function parseUserResponse(response: UserResponse): User {
  return {
    ...response,
    createdAt: new Date(response.createdAt)
  };
}
\`\`\`

This pattern caught **37 bugs** during our last API migration.

## Discriminated Unions for Error Handling

Stop using \`try/catch\` for expected errors:

\`\`\`typescript
type ApiResponse<T, E = string> =
  | { success: true; data: T }
  | { success: false; error: E; code: number };

async function fetchUser(id: string): Promise<ApiResponse<User>> {
  const res = await fetch(\`/api/users/\${id}\`);

  if (!res.ok) {
    return {
      success: false,
      error: 'User not found',
      code: res.status
    };
  }

  return {
    success: true,
    data: await res.json()
  };
}

// Usage - TypeScript forces you to handle both cases
const result = await fetchUser('123');
if (result.success) {
  console.log(result.data.name); // Type: User
} else {
  console.error(result.error); // Type: string
}
\`\`\`

The compiler ensures you never forget error handling.

## Template Literal Types: Generate Types from Strings

Build compile-time type safety for event systems:

\`\`\`typescript
type EventName<T extends string> = \`on\${Capitalize<T>}\`;

type ComponentEvents = 'click' | 'hover' | 'focus';

// Generates: 'onClick' | 'onHover' | 'onFocus'
type ComponentProps = {
  [K in EventName<ComponentEvents>]?: (e: Event) => void;
};

function Button(props: ComponentProps) {
  // TypeScript autocompletes: onClick, onHover, onFocus
  return <button {...props}>Click me</button>;
}
\`\`\`

This powers our entire component event system with zero runtime overhead.

## Generic Repository Pattern

Type-safe database operations without code duplication:

\`\`\`typescript
interface Repository<T, K = string> {
  findById(id: K): Promise<T | null>;
  create(entity: Omit<T, 'id' | 'createdAt'>): Promise<T>;
  update(id: K, updates: Partial<T>): Promise<T>;
  delete(id: K): Promise<void>;
  findMany(filter: Partial<T>): Promise<T[]>;
}

class UserRepository implements Repository<User> {
  async findById(id: string) {
    const user = await db.users.findUnique({ where: { id } });
    return user || null;
  }

  async create(data: Omit<User, 'id' | 'createdAt'>) {
    return db.users.create({ data });
  }

  // TypeScript ensures we implement all methods
}
\`\`\`

We have **12 repository implementations** sharing this interface.

## Conditional Types for Flexible APIs

Build APIs that adapt based on options:

\`\`\`typescript
interface User {
  id: string;
  email: string;
  profile?: UserProfile;
}

interface UserProfile {
  bio: string;
  avatar: string;
}

// Return type changes based on includeProfile flag
function getUser<T extends boolean>(
  id: string,
  includeProfile?: T
): Promise<T extends true ? User & { profile: UserProfile } : User> {
  // Implementation
}

// TypeScript knows the exact return type
const basic = await getUser('123'); // Type: User
const withProfile = await getUser('123', true); // Type: User & { profile: UserProfile }

console.log(withProfile.profile.bio); // ✅ Works
console.log(basic.profile.bio); // ❌ TypeScript error
\`\`\`

## Branded Types: Prevent Primitive Obsession

Stop mixing up IDs:

\`\`\`typescript
type UserId = string & { readonly __brand: 'UserId' };
type PostId = string & { readonly __brand: 'PostId' };

function createUserId(id: string): UserId {
  return id as UserId;
}

function getUserById(id: UserId): User {
  // Implementation
}

const userId = createUserId('user-123');
const postId = 'post-456' as PostId;

getUserById(userId); // ✅ Works
getUserById(postId); // ❌ TypeScript error - prevents bugs
\`\`\`

This caught **23 ID mixup bugs** during implementation.

## Advanced Utility Type Combinations

\`\`\`typescript
// Make specific properties required
type RequireFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

interface Config {
  apiKey?: string;
  timeout?: number;
  retries?: number;
}

type ProductionConfig = RequireFields<Config, 'apiKey'>;
// Now apiKey is required, others optional

// Deep Partial for nested objects
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface NestedConfig {
  database: { host: string; port: number };
  cache: { ttl: number };
}

type UpdateConfig = DeepPartial<NestedConfig>;
// Everything is optional, even nested fields
\`\`\`

## Type-Safe Form Handling

\`\`\`typescript
type FormField<T> = {
  value: T;
  error?: string;
  touched: boolean;
};

type FormState<T> = {
  [K in keyof T]: FormField<T[K]>;
};

interface LoginForm {
  email: string;
  password: string;
}

// Generates fully typed form state
const formState: FormState<LoginForm> = {
  email: { value: '', touched: false },
  password: { value: '', touched: false }
};

// TypeScript validates field names
formState.email.value = 'test@example.com'; // ✅
formState.username.value = 'test'; // ❌ TypeScript error
\`\`\`

## Configuration and Tooling

Our \`tsconfig.json\` for enterprise apps:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true
  }
}
\`\`\`

**Key setting**: \`noUncheckedIndexedAccess\` prevents array access bugs by making array access return \`T | undefined\`.

## Measuring the Impact

After implementing these patterns:

- **Runtime errors**: Down 64%
- **Refactoring time**: Reduced by 51%
- **Onboarding speed**: New developers productive in 3 days vs 2 weeks
- **IDE performance**: IntelliSense latency under 100ms even at 200K+ lines

TypeScript's real value isn't preventing typos—it's encoding business logic into types that enforce correctness at compile time.`,
    cover_image:
      "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["TypeScript", "Software Engineering", "Architecture"],
    read_time: 11,
    published: true,
    published_at: new Date("2024-02-20").toISOString(),
  },
  {
    title: "React Performance Optimization: Beyond the Basics",
    slug: "optimizing-react-performance-guide",
    excerpt:
      "Real-world React performance optimization with profiling data, Core Web Vitals improvements, and patterns that reduced our bundle size by 60%.",
    content: `React performance optimization isn't about memorizing every component—it's about measuring, understanding, and fixing actual bottlenecks. Here's what actually moved the needle.

## Profiling Before Optimizing: The Non-Negotiable Rule

Never optimize without data. React DevTools Profiler shows exactly where time is spent:

\`\`\`tsx
// Wrap your app in Profiler
import { Profiler } from 'react';

function App() {
  const onRenderCallback = (
    id: string,
    phase: 'mount' | 'update',
    actualDuration: number
  ) => {
    console.log(\`\${id} \${phase} took \${actualDuration}ms\`);
  };

  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <Dashboard />
    </Profiler>
  );
}
\`\`\`

This revealed our dashboard's initial render took **847ms**—87% from a single component.

## Understanding useMemo and useCallback: The Truth

Here's what I learned after profiling 50+ components: **\`useCallback\` alone doesn't prevent re-renders**.

\`\`\`tsx
// ❌ This doesn't help performance
function Parent() {
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []);

  return <Child onClick={handleClick} />; // Still re-renders
}

// ✅ This does - combine with React.memo
const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  return <button onClick={onClick}>Click</button>;
});
\`\`\`

**The pattern**: \`useCallback\` + \`React.memo\` + expensive child components.

## useMemo for Expensive Computations

Only use \`useMemo\` when profiling proves it's needed:

\`\`\`tsx
function DataTable({ data }: { data: Item[] }) {
  // ❌ Don't memoize cheap operations
  const count = useMemo(() => data.length, [data]);

  // ✅ Memoize expensive computations
  const sortedAndFiltered = useMemo(() => {
    return data
      .filter(item => item.active)
      .sort((a, b) => b.score - a.score)
      .slice(0, 100);
  }, [data]);

  return <Table data={sortedAndFiltered} />;
}
\`\`\`

This reduced our table render time from **340ms to 12ms**.

## Code Splitting: The 60% Bundle Size Reduction

Route-based splitting first—it's the highest ROI:

\`\`\`tsx
import { lazy, Suspense } from 'react';

// ❌ Before: Everything in main bundle (487KB)
import Dashboard from './Dashboard';
import Analytics from './Analytics';
import Settings from './Settings';

// ✅ After: Split by route (main: 189KB)
const Dashboard = lazy(() => import('./Dashboard'));
const Analytics = lazy(() => import('./Analytics'));
const Settings = lazy(() => import('./Settings'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Router>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Router>
    </Suspense>
  );
}
\`\`\`

**Results**: Main bundle 487KB → 189KB (61% reduction), Time to Interactive 4.1s → 1.9s.

## Component-Level Code Splitting

Split heavy components loaded conditionally:

\`\`\`tsx
const ChartComponent = lazy(() => import('./Chart'));
const VideoPlayer = lazy(() => import('./VideoPlayer'));

function Dashboard() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <button onClick={() => setShowChart(true)}>
        Show Analytics
      </button>
      {showChart && (
        <Suspense fallback={<ChartSkeleton />}>
          <ChartComponent />
        </Suspense>
      )}
    </div>
  );
}
\`\`\`

Chart library is **only loaded** when users click "Show Analytics".

## Virtual Scrolling: Handling 10,000+ Items

Rendering large lists kills performance. React Virtual to the rescue:

\`\`\`tsx
import { useVirtualizer } from '@tanstack/react-virtual';

function MessageList({ messages }: { messages: Message[] }) {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: messages.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50, // Estimated item height
    overscan: 5 // Render 5 extra items for smooth scrolling
  });

  return (
    <div ref={parentRef} style={{ height: '600px', overflow: 'auto' }}>
      <div style={{ height: \`\${virtualizer.getTotalSize()}px\` }}>
        {virtualizer.getVirtualItems().map(virtualItem => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: \`translateY(\${virtualItem.start}px)\`
            }}
          >
            <Message data={messages[virtualItem.index]} />
          </div>
        ))}
      </div>
    </div>
  );
}
\`\`\`

**Performance**: 10,000 items render in **16ms** instead of crashing the browser.

## Image Optimization: Core Web Vitals Win

Images are the **#1 cause** of slow LCP (Largest Contentful Paint):

\`\`\`tsx
// ❌ Before: 2.3MB PNG, LCP: 4.8s
<img src="/hero.png" alt="Hero" />

// ✅ After: Modern formats + lazy loading, LCP: 1.2s
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority // Load immediately for above-fold images
  quality={85}
  placeholder="blur"
/>

// For below-fold images
<Image
  src="/feature.jpg"
  alt="Feature"
  width={800}
  height={400}
  loading="lazy" // Native lazy loading
/>
\`\`\`

## Debouncing Search Inputs

Prevent unnecessary API calls:

\`\`\`tsx
import { useMemo, useState } from 'react';
import { debounce } from 'lodash';

function SearchBar() {
  const [query, setQuery] = useState('');

  const debouncedSearch = useMemo(
    () => debounce((value: string) => {
      fetch(\`/api/search?q=\${value}\`);
    }, 300),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return <input value={query} onChange={handleChange} />;
}
\`\`\`

Reduced API calls from **843/minute to 47/minute**.

## React.memo with Custom Comparison

Sometimes default shallow comparison isn't enough:

\`\`\`tsx
interface Props {
  user: User;
  metadata: Record<string, any>;
}

const UserCard = React.memo(
  ({ user, metadata }: Props) => {
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => {
    // Only re-render if user.id changes
    return prevProps.user.id === nextProps.user.id;
  }
);
\`\`\`

## Bundle Analysis and Tree Shaking

Find what's bloating your bundle:

\`\`\`bash
# Analyze your bundle
npm install -D webpack-bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
  // config
});

# Run analysis
ANALYZE=true npm run build
\`\`\`

We discovered **moment.js** (232KB) was imported for one date format. Replaced with **date-fns** (12KB) and saved 220KB.

## Real-World Performance Metrics

After implementing these optimizations:

- **Largest Contentful Paint (LCP)**: 4.8s → 1.2s (75% improvement)
- **First Input Delay (FID)**: 287ms → 48ms (83% improvement)
- **Cumulative Layout Shift (CLS)**: 0.25 → 0.01 (96% improvement)
- **Bundle size**: 487KB → 189KB (61% reduction)
- **Lighthouse score**: 67 → 96

**Key lesson**: Profile first, optimize second. These wins came from fixing **5 components** that caused 90% of performance issues.`,
    cover_image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Performance", "Core Web Vitals", "Optimization"],
    read_time: 13,
    published: true,
    published_at: new Date("2024-03-10").toISOString(),
  },
  {
    title: "Mastering Tailwind CSS: Production Patterns",
    slug: "modern-css-techniques-tailwind",
    excerpt:
      "How to build maintainable design systems with Tailwind CSS—custom configurations, component patterns, and the dark mode implementation that scaled to 400+ components.",
    content: `After building three design systems with Tailwind CSS and migrating a 400+ component library, here are the patterns that actually scale.

## Custom Theme Configuration: Beyond Default Colors

Tailwind's power comes from customization. Here's our production theme setup:

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Brand colors with semantic naming
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          900: '#0c4a6e',
        },
        // Functional colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      spacing: {
        // Custom spacing for layouts
        '128': '32rem',
        '144': '36rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              color: '#0ea5e9',
              '&:hover': {
                color: '#0284c7',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
\`\`\`

This ensures **consistent design tokens** across 400+ components.

## Component Extraction Pattern

Extract components when patterns repeat **3+ times**:

\`\`\`tsx
// ❌ Before: Repeated classes everywhere
function BlogPost() {
  return (
    <div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        Save
      </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        Publish
      </button>
    </div>
  );
}

// ✅ After: Extracted component
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ variant = 'primary', size = 'md', children, onClick }: ButtonProps) {
  const baseClasses = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500',
    danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={\`\${baseClasses} \${variantClasses[variant]} \${sizeClasses[size]}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
\`\`\`

## Class Variance Authority: Type-Safe Variants

For complex components, use \`cva\` for variant management:

\`\`\`tsx
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2',
  {
    variants: {
      variant: {
        primary: 'bg-blue-500 hover:bg-blue-600 text-white',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
        danger: 'bg-red-500 hover:bg-red-600 text-white',
        ghost: 'bg-transparent hover:bg-gray-100 text-gray-700',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  children: React.ReactNode;
  onClick?: () => void;
};

function Button({ variant, size, fullWidth, children, onClick }: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, fullWidth })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Usage - fully type-safe
<Button variant="primary" size="lg" fullWidth>
  Click me
</Button>
\`\`\`

TypeScript autocompletes **all variants** and prevents invalid combinations.

## Dark Mode Implementation That Scales

Our dark mode pattern supports system preference + manual toggle:

\`\`\`tsx
// app/providers.tsx
'use client';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#0a0a0a',
        },
        text: {
          DEFAULT: '#1f2937',
          dark: '#f9fafb',
        },
      },
    },
  },
};

// Component usage
function Card() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h2 className="text-2xl font-bold">Card Title</h2>
      <p className="text-gray-600 dark:text-gray-400">Card content</p>
    </div>
  );
}

// Theme toggle component
import { useTheme } from 'next-themes';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
\`\`\`

This pattern works flawlessly across **400+ components** with zero flashing.

## Responsive Design Patterns

Mobile-first with breakpoint utilities:

\`\`\`tsx
function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8">
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Welcome to our platform
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          Description text
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <img src="/hero.jpg" alt="Hero" className="w-full h-auto" />
      </div>
    </div>
  );
}
\`\`\`

## Custom Utility Classes with @layer

For repeated patterns not covered by Tailwind:

\`\`\`css
/* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .card {
    @apply bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-800;
  }

  .input-field {
    @apply w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent;
  }

  .btn-icon {
    @apply inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
\`\`\`

Usage:

\`\`\`tsx
<div className="card">
  <h3 className="text-xl font-bold text-balance">Card Title</h3>
  <div className="flex gap-2 overflow-x-auto scrollbar-hide">
    {/* Content */}
  </div>
</div>
\`\`\`

## Performance Optimization: PurgeCSS Configuration

Tailwind generates **thousands** of classes. Purge unused ones in production:

\`\`\`javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  // safelist classes used dynamically
  safelist: [
    'bg-red-500',
    'bg-green-500',
    'bg-blue-500',
    {
      pattern: /bg-(red|green|blue)-(100|500|900)/,
    },
  ],
};
\`\`\`

**Results**: CSS bundle size **3.2MB → 12KB** in production (99.6% reduction).

## Animation and Transition Utilities

Custom animations in Tailwind config:

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
};
\`\`\`

Usage:

\`\`\`tsx
<div className="animate-fade-in">
  Content fades in
</div>

<div className="animate-slide-up">
  Content slides up
</div>
\`\`\`

## Accessibility Patterns

Tailwind with accessibility:

\`\`\`tsx
function AccessibleButton() {
  return (
    <button className="
      px-4 py-2
      bg-blue-500 hover:bg-blue-600
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      active:bg-blue-700
      disabled:opacity-50 disabled:cursor-not-allowed
      transition-colors
    ">
      Click me
    </button>
  );
}
\`\`\`

## Production Metrics

Our Tailwind migration results:

- **CSS bundle size**: 124KB → 12KB (90% reduction)
- **Development speed**: 40% faster component creation
- **Design consistency**: 0 spacing/color violations (was 47+ issues)
- **Dark mode implementation**: 2 weeks → 3 days
- **Mobile responsiveness bugs**: 89% reduction

Tailwind CSS isn't just utility classes—it's a constraint-based design system that enforces consistency while maintaining flexibility.`,
    cover_image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["CSS", "Tailwind", "Design Systems", "UI/UX"],
    read_time: 12,
    published: true,
    published_at: new Date("2024-04-05").toISOString(),
  },
  {
    title: "Building Production WebSocket Systems",
    slug: "building-realtime-features-websockets",
    excerpt:
      "From prototype to 100K concurrent connections—WebSocket architecture patterns, scaling strategies, and security implementation for real-time apps.",
    content: `Building a chat app that handles 100K+ concurrent WebSocket connections taught me what docs don't tell you. Here's the architecture that actually scales.

## WebSocket Fundamentals: Why Not HTTP?

HTTP requests are one-way conversations. For real-time features, this creates problems:

\`\`\`typescript
// ❌ Polling - wasteful, high latency
setInterval(async () => {
  const response = await fetch('/api/messages');
  const messages = await response.json();
  updateUI(messages);
}, 1000); // 100 requests for 99 empty responses

// ✅ WebSocket - persistent, bidirectional
const ws = new WebSocket('wss://api.example.com/chat');

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  updateUI(message); // Instant updates
};
\`\`\`

**Latency comparison**: Polling ~1000ms, WebSockets ~50ms.

## Client-Side Implementation with Reconnection

Raw WebSocket API needs reconnection logic:

\`\`\`typescript
class ReconnectingWebSocket {
  private ws: WebSocket | null = null;
  private url: string;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 10;
  private messageQueue: string[] = [];

  constructor(url: string) {
    this.url = url;
    this.connect();
  }

  private connect() {
    this.ws = new WebSocket(this.url);

    this.ws.onopen = () => {
      console.log('Connected');
      this.reconnectAttempts = 0;
      // Send queued messages
      while (this.messageQueue.length > 0) {
        const message = this.messageQueue.shift();
        if (message) this.send(message);
      }
    };

    this.ws.onclose = () => {
      console.log('Disconnected');
      this.reconnect();
    };

    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    this.ws.onmessage = (event) => {
      this.handleMessage(event.data);
    };
  }

  private reconnect() {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('Max reconnection attempts reached');
      return;
    }

    const delay = Math.min(1000 * Math.pow(2, this.reconnectAttempts), 30000);
    this.reconnectAttempts++;

    console.log(\`Reconnecting in \${delay}ms (attempt \${this.reconnectAttempts})\`);
    setTimeout(() => this.connect(), delay);
  }

  send(data: string) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(data);
    } else {
      // Queue message if not connected
      this.messageQueue.push(data);
    }
  }

  private handleMessage(data: string) {
    const message = JSON.parse(data);
    // Handle message
  }

  close() {
    this.ws?.close();
  }
}
\`\`\`

This pattern **prevented 94% of disconnect complaints** in production.

## Server-Side Architecture with Socket.io

Socket.io handles fallbacks and room management:

\`\`\`typescript
// server.ts
import { Server } from 'socket.io';
import { createServer } from 'http';
import Redis from 'ioredis';

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: process.env.CLIENT_URL },
  transports: ['websocket', 'polling'],
});

const redis = new Redis(process.env.REDIS_URL);
const sub = redis.duplicate();

// Pub/Sub for multi-server scaling
sub.subscribe('chat-messages');
sub.on('message', (channel, message) => {
  const data = JSON.parse(message);
  io.to(data.room).emit('message', data);
});

io.on('connection', async (socket) => {
  const userId = socket.handshake.auth.userId;

  // Authentication
  if (!userId) {
    socket.disconnect();
    return;
  }

  console.log(\`User connected: \${userId}\`);

  // Join user's rooms
  socket.on('join-room', async (roomId: string) => {
    const canJoin = await checkRoomPermission(userId, roomId);
    if (!canJoin) {
      socket.emit('error', 'No permission');
      return;
    }

    socket.join(roomId);
    socket.emit('joined', roomId);
  });

  // Handle messages
  socket.on('message', async (data: { room: string; text: string }) => {
    // Validate and save message
    const message = await saveMessage({
      userId,
      room: data.room,
      text: data.text,
      timestamp: Date.now(),
    });

    // Publish to Redis for other servers
    redis.publish('chat-messages', JSON.stringify({
      room: data.room,
      message,
    }));
  });

  socket.on('disconnect', () => {
    console.log(\`User disconnected: \${userId}\`);
  });
});

httpServer.listen(3000);
\`\`\`

## Scaling to 100K+ Concurrent Connections

Single server maxes out around **10K-15K connections**. Here's our scaling architecture:

\`\`\`
┌─────────────┐
│ Load Balancer│
│   (HAProxy)  │
└──────┬───────┘
       │
   ┌───┴────────────────────┐
   │                        │
┌──▼────────┐        ┌──────▼──┐
│  Node 1   │        │  Node 2 │
│ (10K conn)│        │(10K conn)│
└─────┬─────┘        └────┬────┘
      │                   │
      └───────┬───────────┘
              │
        ┌─────▼─────┐
        │   Redis   │
        │  Pub/Sub  │
        └───────────┘
\`\`\`

**Sticky sessions** required—load balancer routes users to same server:

\`\`\`nginx
# HAProxy config
frontend websocket_frontend
  bind *:443 ssl crt /path/to/cert.pem
  default_backend websocket_backend

backend websocket_backend
  balance leastconn
  option http-server-close
  option forwardfor

  # Sticky sessions based on cookie
  cookie SERVER insert indirect nocache

  server node1 10.0.0.1:3000 check cookie node1
  server node2 10.0.0.2:3000 check cookie node2
\`\`\`

## Authentication and Security

Never trust WebSocket connections:

\`\`\`typescript
// Client: Send JWT with connection
const token = localStorage.getItem('authToken');
const ws = new WebSocket('wss://api.example.com/chat', {
  headers: {
    Authorization: \`Bearer \${token}\`
  }
});

// Server: Verify token
io.use(async (socket, next) => {
  const token = socket.handshake.auth.token;

  try {
    const decoded = verifyJWT(token);
    socket.data.userId = decoded.userId;
    next();
  } catch (error) {
    next(new Error('Authentication failed'));
  }
});

// Rate limiting per user
const rateLimitMap = new Map<string, number[]>();

io.on('connection', (socket) => {
  socket.on('message', (data) => {
    const userId = socket.data.userId;
    const now = Date.now();

    // Get user's recent message timestamps
    const timestamps = rateLimitMap.get(userId) || [];

    // Remove timestamps older than 1 minute
    const recentTimestamps = timestamps.filter(t => now - t < 60000);

    // Check if exceeded limit (e.g., 60 messages per minute)
    if (recentTimestamps.length >= 60) {
      socket.emit('error', 'Rate limit exceeded');
      return;
    }

    recentTimestamps.push(now);
    rateLimitMap.set(userId, recentTimestamps);

    // Process message
  });
});
\`\`\`

**Security checklist**:
- Always use WSS (WebSocket Secure) in production
- Validate all incoming messages
- Implement rate limiting per user
- Authenticate before connection
- Sanitize messages before broadcasting

## Message Validation and Sanitization

\`\`\`typescript
import DOMPurify from 'isomorphic-dompurify';
import validator from 'validator';

interface Message {
  text: string;
  room: string;
}

function validateMessage(data: any): Message | null {
  if (!data || typeof data !== 'object') return null;

  // Validate text
  if (!data.text || typeof data.text !== 'string') return null;
  if (data.text.length > 1000) return null; // Max 1000 chars

  // Sanitize HTML
  const sanitizedText = DOMPurify.sanitize(data.text);

  // Validate room ID
  if (!validator.isUUID(data.room)) return null;

  return {
    text: sanitizedText,
    room: data.room,
  };
}

socket.on('message', (data) => {
  const validMessage = validateMessage(data);
  if (!validMessage) {
    socket.emit('error', 'Invalid message');
    return;
  }

  // Process valid message
});
\`\`\`

## Monitoring and Health Checks

Track connection health:

\`\`\`typescript
// Heartbeat to detect dead connections
const HEARTBEAT_INTERVAL = 30000; // 30 seconds

io.on('connection', (socket) => {
  let isAlive = true;

  socket.on('pong', () => {
    isAlive = true;
  });

  const heartbeat = setInterval(() => {
    if (!isAlive) {
      socket.disconnect();
      clearInterval(heartbeat);
      return;
    }

    isAlive = false;
    socket.emit('ping');
  }, HEARTBEAT_INTERVAL);

  socket.on('disconnect', () => {
    clearInterval(heartbeat);
  });
});

// Metrics tracking
const metrics = {
  activeConnections: 0,
  messagesPerSecond: 0,
  averageLatency: 0,
};

io.on('connection', (socket) => {
  metrics.activeConnections++;

  socket.on('disconnect', () => {
    metrics.activeConnections--;
  });
});

// Expose metrics endpoint
app.get('/metrics', (req, res) => {
  res.json(metrics);
});
\`\`\`

## Production Performance Metrics

Our WebSocket system at scale:

- **Concurrent connections**: 127K across 12 servers
- **Average latency**: 47ms
- **Messages per second**: 15K
- **Uptime**: 99.97%
- **Memory per connection**: ~10KB
- **CPU usage**: 45% average per server

**Cost optimization**: Redis Pub/Sub enabled horizontal scaling without expensive message brokers.

## When NOT to Use WebSockets

WebSockets aren't always the answer:

- Infrequent updates (use polling or SSE)
- One-way server→client communication (use Server-Sent Events)
- File uploads (use regular HTTP)
- Simple notifications (use push notifications)

Real-time features are complex. Start with the simplest solution and upgrade when you need it.`,
    cover_image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["WebSockets", "Real-Time", "Scalability", "Architecture"],
    read_time: 14,
    published: true,
    published_at: new Date("2024-05-12").toISOString(),
  },
];

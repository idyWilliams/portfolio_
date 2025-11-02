// @ts-ignore: allow side-effect import of global CSS without type declarations
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title:
    "Idorenyin Williams | Senior Frontend Engineer | Next.js & TypeScript Expert",
  description:
    "Explore the portfolio of Idorenyin Williams, a Senior Frontend Engineer and Founder of iSentry Technologies. Expert in building scalable web applications using Next.js, TypeScript, React, and Tailwind CSS. Passionate about mentoring young developers across Africa.",
  keywords: [
    "Idorenyin Williams",
    "Frontend Engineer",
    "Senior Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Web Engineer Nigeria",
    "iSentry Technologies",
    "UI Engineer",
    "Software Engineer",
    "Fullstack Developer",
    "Mentorship in tech",
    "Tech founder Africa",
  ],
  authors: [
    { name: "Idorenyin Williams", url: "https://idorenyinwilliams.com" },
  ],
  creator: "Idorenyin Williams",
  publisher: "Idorenyin Williams",
  metadataBase: new URL("https://idorenyinwilliams.com"),
  openGraph: {
    title: "Idorenyin Williams – Senior Frontend Engineer & Founder of iSentry",
    description:
      "Portfolio of Idorenyin Williams, Senior Frontend Engineer & Founder of iSentry Technologies. Expert in modern web stacks, mentoring developers, and delivering scalable solutions.",
    url: "https://idorenyinwilliams.com",
    siteName: "Idorenyin Williams Portfolio",
    images: [
      {
        url: "/public/img/potrait.jpeg",
        width: 1200,
        height: 630,
        alt: "Idorenyin Williams - Senior Frontend Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Idorenyin Williams – Senior Frontend Engineer | Next.js Expert",
    description:
      "Building world-class web experiences with Next.js, TypeScript, and Tailwind CSS. Founder of iSentry Technologies.",
    images: ["/public/img/potrait.jpeg"],
    creator: "@idorenyinwilliams",
  },
  alternates: {
    canonical: "https://idorenyinwilliams.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* SEO tags for schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Idorenyin Williams",
              url: "https://idorenyinwilliams.com",
              jobTitle: "Senior Frontend Engineer",
              worksFor: {
                "@type": "Organization",
                name: "iSentry Technologies",
              },
              sameAs: [
                "https://www.linkedin.com/in/idorenyin-williams/",
                "https://github.com/idyWilliams",
                "https://x.com/iWil_lian",
              ],
              description:
                "Senior Frontend Engineer and Founder of iSentry Technologies, specializing in building scalable web apps with Next.js, TypeScript, and Tailwind CSS.",
            }),
          }}
        />
        {/* Favicon and theme color */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="font-sans bg-white text-black dark:bg-black dark:text-white">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

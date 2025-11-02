import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Idorenyin Williams - Full-Stack Engineer',
  description: 'Portfolio of Idorenyin Williams, a Senior Full-Stack Engineer specializing in Next.js, TypeScript, and modern web technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
        <Toaster />
      </body>
    </html>
  );
}

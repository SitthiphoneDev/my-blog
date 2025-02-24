import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Learning Journey',
  description: 'A blog about my programming and AI learning experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-black shadow-sm">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <a href="#" className="font-semibold">My Blog</a>
              <div className="space-x-6">
                <Link href="/" className="hover:text-blue-500">Home</Link>
                <Link href="/my-blog/learning-to-code-with-claude" className="hover:text-blue-500">Blog</Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
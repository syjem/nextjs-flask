import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import { cn } from '@/lib/utils';
import Sidebar from '@/components/sidebar';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('antialiased', inter.className)}>
        <div className="container px-0 flex h-screen w-full">
          <Sidebar />
          <main className="flex-1 w-full p-4">
            <Providers>{children}</Providers>
          </main>
        </div>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}

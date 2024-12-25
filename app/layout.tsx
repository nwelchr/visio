import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import { PlusIcon } from "@heroicons/react/24/outline";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Visio",
  description: "A DALL-E playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen bg-slate-100 dark:bg-slate-900">
          <header className="w-full flex justify-between items-center bg-slate-50 dark:bg-gray-800 sm:px-8 px-4 py-4 border-b border-b-slate-300 dark:border-b-slate-600">
            <Link href="/">
              <Image
                src="/assets/logo.svg"
                alt="Logo"
                width={112}
                height={112}
                className="w-28 object-contain dark:invert"
              />
            </Link>
            <div className="flex space-x-4">
              <Link
                href="/create-post"
                className="max-sm:hidden font-medium bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800 transition-all"
              >
                Create
              </Link>
              <Link
                href="/create-post"
                className="sm:hidden font-medium bg-indigo-700 text-white p-2 rounded-lg hover:bg-indigo-800 transition-all"
              >
                <PlusIcon className="w-6 h-6" />
              </Link>
              <ThemeToggle />
            </div>
          </header>
          <main className="sm:p-8 px-4 py-8 w-full flex-1 dark:text-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

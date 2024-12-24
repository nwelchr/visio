import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import LanguageToggle from "@/components/LanguageToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // optional, allows you to use this font variable
});

export const metadata: Metadata = {
  title: "DALLE Mini",
  description: "A DALL-E Mini playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col h-screen">
          <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-slate-100 dark:bg-gray-800 dark:border-b-slate-900">
            <Link href="/">
              <Image
                src="/assets/logo.svg"
                alt="Logo"
                width={112}
                height={112}
                className="w-28 object-contain"
              />
            </Link>
            <div className="flex space-x-4">
              <Link
                href="/create-post"
                className="max-sm:hidden font-medium bg-slate-400 text-white px-4 py-2 rounded-lg dark:bg-slate-700 hover:opacity-80"
              >
                Create
              </Link>
              <Link
                href="/create-post"
                className="sm:hidden font-medium bg-slate-400 text-white px-4 py-2 rounded-lg dark:bg-slate-700 hover:opacity-80"
              >
                +
              </Link>
              <LanguageToggle />
            </div>
          </header>
          <main className="sm:p-8 px-4 py-8 w-full bg-slate-50 dark:bg-slate-900 flex-1 dark:text-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

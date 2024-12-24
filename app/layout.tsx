import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

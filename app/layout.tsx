import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from "@/public/logo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix clone",
  description: "Netflix clone website with using Next.js 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className="bg-black">{children}</body>
    </html>
  );
}

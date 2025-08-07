import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | ABS Frontend Docs",
    default: "ABS Frontend Documentation",
  },
  description:
    "Comprehensive frontend development documentation for ABS teams - standards, guidelines, and best practices.",
  keywords: [
    "frontend",
    "documentation",
    "react",
    "nextjs",
    "typescript",
    "ABS",
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

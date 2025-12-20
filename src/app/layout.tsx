import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { NewYearCelebration } from "@/components/new-year-celebration";

const geist = Geist({
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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          {children}
          <NewYearCelebration />
        </RootProvider>
      </body>
    </html>
  );
}

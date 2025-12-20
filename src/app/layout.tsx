import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { NewYearCelebration } from "@/components/new-year-celebration";

const geist = Geist({
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

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

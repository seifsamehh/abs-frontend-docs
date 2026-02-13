import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";

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

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://abs-frontend-docs.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
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
    "tailwind css",
    "tanstack query",
    "shadcn ui",
  ],
  authors: [{ name: "ABS Frontend Team" }],
  creator: "ABS Courier",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "ABS Frontend Docs",
    title: "ABS Frontend Documentation",
    description:
      "Complete guide for frontend development at ABS - from setup to deployment. React, Next.js, TypeScript, and best practices.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABS Frontend Documentation",
    description:
      "Complete guide for frontend development at ABS - React, Next.js, TypeScript, and best practices.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo-light.svg", type: "image/svg+xml" },
    ],
    apple: "/logo-light.svg",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

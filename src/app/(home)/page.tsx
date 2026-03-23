import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Development Guide",
  description:
    "Complete guide for frontend development at ABS - from setup to deployment. Modern React, Next.js, TypeScript, and best practices.",
};

const sections = [
  {
    title: "Getting Started",
    description: "Environment setup, first component, and your first PR.",
    href: "/docs/getting-started",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: "Guides & Patterns",
    description: "Step-by-step tutorials, data fetching, forms, testing, and copy-paste recipes.",
    href: "/docs/guides",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Architecture",
    description: "System design, philosophy, and Architecture Decision Records.",
    href: "/docs/architecture",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
  },
  {
    title: "Reference",
    description: "Code standards, component library, API docs, learning resources, and specs.",
    href: "/docs/reference",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Help & FAQ",
    description: "Troubleshooting, common issues, and team support.",
    href: "/docs/help",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden flex items-center min-h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-fd-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.06)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative mx-auto px-4 sm:px-6 py-16 sm:py-24 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-fd-card/80 backdrop-blur-sm mb-6 px-3 py-1.5 border border-fd-border rounded-full text-xs">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex bg-emerald-400 opacity-75 rounded-full w-full h-full animate-ping" />
              <span className="relative inline-flex bg-emerald-500 rounded-full w-2 h-2" />
            </span>
            <span className="text-fd-muted-foreground font-medium">
              Updated for Next.js 16 & React 19
            </span>
          </div>

          <h1 className="mb-4 font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-fd-foreground">
            ABS Frontend{" "}
            <span className="text-fd-primary">Docs</span>
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-fd-muted-foreground text-base sm:text-lg leading-relaxed">
            Everything you need to build, ship, and maintain frontend
            applications with our stack.
          </p>

          {/* Search hint */}
          <Link
            href="/docs"
            className="group mx-auto mb-10 flex items-center gap-3 max-w-md bg-fd-card/80 backdrop-blur-sm border border-fd-border hover:border-fd-primary/40 rounded-xl px-4 h-12 transition-colors"
          >
            <svg className="w-4 h-4 text-fd-muted-foreground shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-fd-muted-foreground text-sm">
              Search documentation...
            </span>
            <kbd className="ml-auto hidden sm:inline-flex items-center gap-1 bg-fd-muted/50 px-2 py-0.5 border border-fd-border rounded text-[11px] font-mono text-fd-muted-foreground">
              Ctrl K
            </kbd>
          </Link>

          <div className="flex sm:flex-row flex-col justify-center items-center gap-3">
            <Link
              href="/docs/getting-started/environment-setup"
              className="group inline-flex justify-center items-center gap-2 bg-fd-primary hover:bg-fd-primary/90 px-6 rounded-lg h-11 font-medium text-fd-primary-foreground text-sm transition-all duration-150 hover:-translate-y-px"
            >
              Get Started
              <svg className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/docs"
              className="inline-flex justify-center items-center gap-2 bg-fd-card hover:bg-fd-muted px-6 border border-fd-border rounded-lg h-11 font-medium text-fd-foreground text-sm transition-all duration-150 hover:-translate-y-px"
            >
              Browse Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Section Cards */}
      <section className="mx-auto px-4 sm:px-6 pb-24 sm:pb-32 max-w-4xl w-full">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {sections.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group flex flex-col gap-3 p-5 rounded-xl border border-fd-border bg-fd-card hover:border-fd-primary/40 hover:bg-fd-card/80 transition-all duration-150"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-fd-primary/10 text-fd-primary shrink-0">
                  {s.icon}
                </div>
                <h2 className="font-semibold text-fd-foreground text-sm">
                  {s.title}
                </h2>
              </div>
              <p className="text-fd-muted-foreground text-sm leading-relaxed">
                {s.description}
              </p>
              <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-fd-muted-foreground group-hover:text-fd-primary transition-colors">
                Explore
                <svg className="w-3 h-3 transition-transform duration-150 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

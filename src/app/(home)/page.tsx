import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Development Guide",
  description:
    "Complete guide for frontend development at ABS - from setup to deployment. Modern React, Next.js, TypeScript, and best practices.",
};

const features = [
  {
    title: "Getting Started",
    description:
      "Quick setup guide for new team members. Get running in minutes with our stack.",
    href: "/docs/getting-started",
    accent: "from-rose-500 to-pink-600",
    hoverBorder:
      "hover:from-rose-500/50 hover:via-rose-500/20 hover:to-pink-600/50",
    hoverText: "group-hover:text-rose-500",
    glow: "bg-rose-500/5 group-hover:bg-rose-500/10",
  },
  {
    title: "Guides",
    description:
      "Forms, data fetching, Server Components, testing, and deployment — step by step.",
    href: "/docs/guides",
    accent: "from-blue-500 to-indigo-600",
    hoverBorder:
      "hover:from-blue-500/50 hover:via-blue-500/20 hover:to-indigo-600/50",
    hoverText: "group-hover:text-blue-500",
    glow: "bg-blue-500/5 group-hover:bg-blue-500/10",
  },
  {
    title: "Reference",
    description:
      "Code standards, component library, API docs, and tech stack specs.",
    href: "/docs/reference",
    accent: "from-purple-500 to-violet-600",
    hoverBorder:
      "hover:from-purple-500/50 hover:via-purple-500/20 hover:to-violet-600/50",
    hoverText: "group-hover:text-purple-500",
    glow: "bg-purple-500/5 group-hover:bg-purple-500/10",
  },
  {
    title: "Architecture",
    description:
      "System design, philosophy, and Architecture Decision Records (ADRs).",
    href: "/docs/architecture",
    accent: "from-emerald-500 to-green-600",
    hoverBorder:
      "hover:from-emerald-500/50 hover:via-emerald-500/20 hover:to-green-600/50",
    hoverText: "group-hover:text-emerald-500",
    glow: "bg-emerald-500/5 group-hover:bg-emerald-500/10",
  },
  {
    title: "Resources",
    description:
      "Learning roadmaps, curated tools, courses, and project overviews.",
    href: "/docs/resources",
    accent: "from-orange-500 to-amber-600",
    hoverBorder:
      "hover:from-orange-500/50 hover:via-orange-500/20 hover:to-amber-600/50",
    hoverText: "group-hover:text-orange-500",
    glow: "bg-orange-500/5 group-hover:bg-orange-500/10",
  },
  {
    title: "Help & FAQ",
    description: "Troubleshooting, common issues, and team support channels.",
    href: "/docs/help",
    accent: "from-yellow-400 to-lime-500",
    hoverBorder:
      "hover:from-yellow-400/50 hover:via-yellow-400/20 hover:to-lime-500/50",
    hoverText: "group-hover:text-yellow-500",
    glow: "bg-yellow-400/5 group-hover:bg-yellow-400/10",
  },
];

const techStack = [
  {
    name: "TypeScript 5.9",
    desc: "Strict type safety end-to-end",
    color: "text-blue-500",
    dot: "bg-blue-500",
  },
  {
    name: "Tailwind CSS 4",
    desc: "CSS-first utility framework",
    color: "text-cyan-500",
    dot: "bg-cyan-500",
  },
  {
    name: "TanStack Query 5",
    desc: "Async state & caching",
    color: "text-orange-500",
    dot: "bg-orange-500",
  },
  {
    name: "Zustand",
    desc: "Minimal client state",
    color: "text-amber-500",
    dot: "bg-amber-500",
  },
  {
    name: "Vitest",
    desc: "Blazing-fast unit testing",
    color: "text-green-500",
    dot: "bg-green-500",
  },
  {
    name: "Turbopack",
    desc: "Rust-powered bundler",
    color: "text-purple-500",
    dot: "bg-purple-500",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl animate-float-slower" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-float" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative mx-auto px-4 sm:px-6 py-20 sm:py-32 max-w-6xl text-center">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 bg-fd-background/60 backdrop-blur-md mb-8 px-4 py-2 border border-fd-border/50 rounded-full shadow-lg shadow-primary/5 animate-fade-in-up">
            <span className="relative flex w-2.5 h-2.5">
              <span className="inline-flex absolute bg-emerald-400 opacity-75 rounded-full w-full h-full animate-ping" />
              <span className="inline-flex relative bg-emerald-500 rounded-full w-2.5 h-2.5" />
            </span>
            <span className="text-fd-muted-foreground text-sm font-medium">
              Updated for Next.js 16 & React 19
            </span>
          </div>

          <h1 className="mb-8 font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight animate-fade-in-up animation-delay-100">
            <span className="gradient-text animate-gradient">
              Frontend Development
            </span>
            <br />
            <span className="text-fd-foreground">Guide for ABS Teams</span>
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-fd-muted-foreground text-lg sm:text-xl leading-relaxed animate-fade-in-up animation-delay-200">
            From environment setup to production deployment. Learn modern React,
            Next.js, TypeScript, and industry best practices — all in one place.
          </p>

          <div className="flex sm:flex-row flex-col justify-center items-center gap-4 animate-fade-in-up animation-delay-300">
            <Link
              href="/docs/getting-started/environment-setup"
              className="group relative inline-flex justify-center items-center gap-2 bg-fd-primary hover:bg-fd-primary/90 shadow-lg shadow-fd-primary/25 hover:shadow-xl hover:shadow-fd-primary/30 px-8 rounded-xl h-14 font-semibold text-fd-primary-foreground text-base transition-all duration-200 ease-out hover:-translate-y-0.5"
            >
              <span>Get Started</span>
              <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/docs"
              className="group inline-flex justify-center items-center gap-2 bg-fd-card hover:bg-fd-muted px-8 border border-fd-border hover:border-fd-primary/50 rounded-xl h-14 font-semibold text-fd-foreground text-base transition-all duration-200 ease-out hover:-translate-y-0.5"
            >
              <span>Browse Docs</span>
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mx-auto mt-20 sm:mt-24 max-w-3xl animate-fade-in-up animation-delay-400">
            {[
              { value: "45+", label: "Doc Pages" },
              { value: "120+", label: "Code Examples" },
              { value: "8", label: "ADRs" },
              { value: "11", label: "Guides" },
            ].map((s) => (
              <div
                key={s.label}
                className="group p-[1px] rounded-2xl bg-gradient-to-br from-fd-border/60 via-fd-border/30 to-fd-border/60 hover:from-fd-primary/40 hover:via-fd-primary/15 hover:to-fd-primary/40 transition-all duration-500"
              >
                <div className="rounded-[15px] bg-fd-background/50 backdrop-blur-sm p-5 text-center">
                  <div className="font-bold text-fd-foreground text-3xl sm:text-4xl mb-1 group-hover:text-fd-primary transition-colors">
                    {s.value}
                  </div>
                  <div className="text-fd-muted-foreground text-xs sm:text-sm">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-fd-muted-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ============ FEATURES GRID ============ */}
      <section className="mx-auto px-4 sm:px-6 py-24 sm:py-32 max-w-6xl">
        <div className="mb-14 text-center">
          <span className="inline-block px-4 py-1.5 mb-5 text-sm font-medium text-fd-primary bg-fd-primary/10 border border-fd-primary/20 rounded-full">
            Documentation
          </span>
          <h2 className="mb-4 font-bold text-fd-foreground text-4xl sm:text-5xl tracking-tight">
            Everything You Need
          </h2>
          <p className="mx-auto max-w-xl text-fd-muted-foreground text-lg leading-relaxed">
            Comprehensive docs covering every aspect of frontend development at
            ABS.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className={`group relative p-[1px] rounded-2xl bg-gradient-to-br from-fd-border/80 via-fd-border/40 to-fd-border/80 ${f.hoverBorder} transition-all duration-500`}
            >
              <div className="relative h-full rounded-[15px] bg-fd-background p-7 overflow-hidden">
                {/* Glow orb */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 ${f.glow} rounded-full blur-3xl transition-colors duration-500`}
                />

                <div className="relative">
                  {/* Color accent bar */}
                  <div
                    className={`w-8 h-1 rounded-full bg-gradient-to-r ${f.accent} mb-5`}
                  />
                  <h3
                    className={`text-lg font-semibold text-fd-foreground ${f.hoverText} mb-2 transition-colors`}
                  >
                    {f.title}
                  </h3>
                  <p className="text-fd-muted-foreground text-sm leading-relaxed mb-5">
                    {f.description}
                  </p>
                  <span
                    className={`inline-flex items-center gap-1.5 text-sm font-medium text-fd-muted-foreground ${f.hoverText} transition-all duration-300`}
                  >
                    Explore
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ TECH STACK ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,hsl(var(--primary)/0.06),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

        <div className="relative mx-auto px-4 sm:px-6 py-24 sm:py-32 max-w-6xl">
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 mb-5 text-sm font-medium text-fd-primary bg-fd-primary/10 border border-fd-primary/20 rounded-full">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Tech Stack
            </span>
            <h2 className="mb-4 font-bold text-fd-foreground text-4xl sm:text-5xl tracking-tight">
              Built on the Best
            </h2>
            <p className="mx-auto max-w-xl text-fd-muted-foreground text-lg leading-relaxed">
              Modern, battle-tested tools chosen for developer experience and
              production reliability.
            </p>
          </div>

          {/* Hero row: Next.js + React */}
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {/* Next.js */}
            <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-fd-border/80 via-fd-border/40 to-fd-border/80 hover:from-fd-primary/50 hover:via-fd-primary/20 hover:to-fd-primary/50 transition-all duration-500">
              <div className="relative h-full rounded-[15px] bg-fd-background p-7 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-fd-foreground/3 rounded-full blur-3xl group-hover:bg-fd-primary/8 transition-colors duration-500" />
                <div className="relative flex items-start gap-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-black dark:bg-white shrink-0">
                    <svg className="w-6 h-6 text-white dark:text-black" viewBox="0 0 180 180" fill="none">
                      <path d="M149.508 157.52L69.142 54H54V125.97H66.114V69.384L140 164.845A89.68 89.68 0 00149.508 157.52Z" fill="currentColor" />
                      <rect x="115" y="54" width="12" height="72" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-fd-foreground mb-1 group-hover:text-fd-primary transition-colors">
                      Next.js 16
                    </h3>
                    <p className="text-fd-muted-foreground text-sm leading-relaxed">
                      Full-stack React framework — App Router, Server
                      Components, Server Actions, edge-ready deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* React */}
            <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-fd-border/80 via-fd-border/40 to-fd-border/80 hover:from-cyan-500/50 hover:via-cyan-500/20 hover:to-blue-500/50 transition-all duration-500">
              <div className="relative h-full rounded-[15px] bg-fd-background p-7 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/3 rounded-full blur-3xl group-hover:bg-cyan-500/8 transition-colors duration-500" />
                <div className="relative flex items-start gap-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#23272f] shrink-0">
                    <svg className="w-7 h-7 text-[#58c4dc]" viewBox="-11.5 -10.23174 23 20.46348">
                      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                      <g stroke="currentColor" strokeWidth="1" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-fd-foreground mb-1 group-hover:text-cyan-500 transition-colors">
                      React 19
                    </h3>
                    <p className="text-fd-muted-foreground text-sm leading-relaxed">
                      Server Components for zero-bundle rendering, Actions for
                      mutations, Suspense for async UI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining tech — clean text cards with color dots */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((t) => (
              <div
                key={t.name}
                className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-fd-border/60 via-fd-border/30 to-fd-border/60 hover:from-fd-border/80 hover:to-fd-border/80 transition-all duration-300"
              >
                <div className="relative rounded-[15px] bg-fd-background p-5 overflow-hidden">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${t.dot} shrink-0`}
                    />
                    <div className="min-w-0">
                      <h3
                        className={`font-semibold text-fd-foreground text-[15px] ${t.color.replace("text-", "group-hover:text-")} transition-colors`}
                      >
                        {t.name}
                      </h3>
                      <p className="text-fd-muted-foreground text-sm">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/docs/reference/tech-stack"
              className="group inline-flex items-center gap-2 text-sm font-medium text-fd-muted-foreground hover:text-fd-primary transition-colors"
            >
              View full tech stack details
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="mx-auto px-4 sm:px-6 py-20 sm:py-28 max-w-5xl">
        <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-fd-primary/40 via-orange-500/20 to-amber-500/40">
          <div className="relative rounded-[23px] overflow-hidden bg-fd-background">
            {/* Gradient fills */}
            <div className="absolute inset-0 bg-gradient-to-br from-fd-primary/8 via-transparent to-amber-500/8" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-fd-primary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/8 rounded-full blur-[100px]" />

            <div className="relative px-8 sm:px-16 py-14 sm:py-20 text-center">
              <h2 className="mb-5 font-bold text-fd-foreground text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                Ready to Start Building?
              </h2>
              <p className="mx-auto mb-10 max-w-lg text-fd-muted-foreground text-lg leading-relaxed">
                Jump in, set up your environment, and ship your first feature
                with confidence.
              </p>
              <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
                <Link
                  href="/docs/getting-started/environment-setup"
                  className="group inline-flex justify-center items-center gap-2 bg-fd-primary hover:bg-fd-primary/90 px-8 rounded-xl h-14 font-semibold text-fd-primary-foreground shadow-lg shadow-fd-primary/20 hover:shadow-xl hover:shadow-fd-primary/30 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Set Up Your Environment</span>
                  <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/docs/getting-started/first-contribution"
                  className="group inline-flex justify-center items-center gap-2 bg-fd-card hover:bg-fd-muted px-8 border border-fd-border hover:border-fd-primary/50 rounded-xl h-14 font-semibold text-fd-foreground transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Make Your First PR</span>
                  <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

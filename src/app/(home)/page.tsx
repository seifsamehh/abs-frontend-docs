import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Development Guide",
  description:
    "Complete guide for frontend development at ABS - from setup to deployment. Modern React, Next.js, TypeScript, and best practices.",
};

const features = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Getting Started",
    description:
      "Quick setup guide for new team members. Get running in minutes with Next.js 16.",
    href: "/docs/getting-started",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: "Guides",
    description:
      "Server Components, streaming, data fetching, forms, and testing tutorials.",
    href: "/docs/guides",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
    title: "Reference",
    description:
      "Tech stack, architecture decisions (ADRs), and code standards.",
    href: "/docs/reference",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
    title: "Learning",
    description: "Roadmaps and resources for continuous improvement.",
    href: "/docs/learning",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
        />
      </svg>
    ),
    title: "Projects",
    description:
      "Our active projects, monorepo setup, and contribution guides.",
    href: "/docs/projects",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
        />
      </svg>
    ),
    title: "Help & FAQ",
    description: "Troubleshooting, TanStack Query v5 migration, and support.",
    href: "/docs/help",
    gradient: "from-yellow-400 to-lime-500",
  },
];

const stats = [
  {
    label: "Documentation Pages",
    value: "60+",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    label: "Code Examples",
    value: "120+",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    label: "Architecture Decisions",
    value: "8",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
        />
      </svg>
    ),
  },
  {
    label: "Tech Guides",
    value: "20+",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated gradient background */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl animate-float-slower" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-float" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative mx-auto px-4 sm:px-6 py-20 sm:py-32 max-w-6xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-fd-background/60 backdrop-blur-md mb-8 px-4 py-2 border border-fd-border/50 rounded-full shadow-lg shadow-primary/5 animate-fade-in-up">
            <span className="relative flex w-2.5 h-2.5">
              <span className="inline-flex absolute bg-emerald-400 opacity-75 rounded-full w-full h-full animate-ping" />
              <span className="inline-flex relative bg-emerald-500 rounded-full w-2.5 h-2.5" />
            </span>
            <span className="text-fd-muted-foreground text-sm font-medium">
              Updated for Next.js 16 & React 19
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-8 font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight animate-fade-in-up animation-delay-100">
            <span className="gradient-text animate-gradient">
              Frontend Development
            </span>
            <br />
            <span className="text-fd-foreground">Guide for ABS Teams</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-12 max-w-2xl text-fd-muted-foreground text-lg sm:text-xl leading-relaxed animate-fade-in-up animation-delay-200">
            From environment setup to production deployment. Learn modern React,
            Next.js, TypeScript, and industry best practices — all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex sm:flex-row flex-col justify-center items-center gap-4 animate-fade-in-up animation-delay-300">
            <Link
              href="/docs/getting-started"
              className="group relative inline-flex justify-center items-center gap-2 bg-fd-primary hover:bg-fd-primary/90 shadow-lg shadow-fd-primary/25 hover:shadow-xl hover:shadow-fd-primary/30 px-8 rounded-xl h-14 font-semibold text-fd-primary-foreground text-base transition-[background-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5"
            >
              <span>Get Started</span>
              <svg
                className="w-5 h-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/docs"
              className="group inline-flex justify-center items-center gap-2 bg-fd-card hover:bg-fd-muted px-8 border border-fd-border hover:border-fd-primary/50 rounded-xl h-14 font-semibold text-fd-foreground text-base transition-[background-color,border-color,transform] duration-200 ease-out hover:-translate-y-0.5"
            >
              <span>Browse Documentation</span>
              <svg
                className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div className="gap-6 sm:gap-8 grid grid-cols-2 sm:grid-cols-4 mx-auto mt-20 sm:mt-24 max-w-4xl animate-fade-in-up animation-delay-400">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative bg-fd-background/40 backdrop-blur-sm p-6 border border-fd-border/30 rounded-2xl transition-all duration-300 hover:bg-fd-background/60 hover:border-fd-border/50 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {stat.icon}
                  </div>
                </div>
                <div className="font-bold text-fd-foreground text-3xl sm:text-4xl mb-1">
                  {stat.value}
                </div>
                <div className="text-fd-muted-foreground text-xs sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-fd-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto px-4 sm:px-6 py-20 sm:py-28 max-w-6xl">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Documentation
          </span>
          <h2 className="mb-4 font-bold text-fd-foreground text-4xl sm:text-5xl tracking-tight">
            Everything You Need
          </h2>
          <p className="mx-auto max-w-2xl text-fd-muted-foreground text-lg">
            Comprehensive documentation covering every aspect of frontend
            development at ABS.
          </p>
        </div>

        <div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="group relative bg-fd-card/50 backdrop-blur-sm hover:bg-fd-card p-8 border border-fd-border/50 hover:border-primary/40 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative">
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-3 font-semibold text-fd-foreground group-hover:text-primary text-xl transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-fd-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="inline-flex items-center opacity-0 group-hover:opacity-100 mt-6 font-medium text-primary text-sm transition-all duration-300 translate-x-0 group-hover:translate-x-2">
                  Learn more
                  <svg
                    className="ml-2 w-4 h-4"
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="relative bg-fd-muted/20 border-fd-border/50 border-y overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

        <div className="relative mx-auto px-4 sm:px-6 py-20 sm:py-28 max-w-6xl">
          <div className="mb-16 text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Tech Stack
            </span>
            <h2 className="mb-4 font-bold text-fd-foreground text-4xl sm:text-5xl tracking-tight">
              Our Tech Stack
            </h2>
            <p className="mx-auto max-w-2xl text-fd-muted-foreground text-lg">
              Built with modern, battle-tested technologies for scalability and
              developer experience.
            </p>
          </div>

          <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Next.js 16",
                desc: "Full-stack Framework",
                icon: "▲",
                color:
                  "from-gray-900 to-gray-700 dark:from-white dark:to-gray-300",
              },
              {
                name: "React 19",
                desc: "Server Components & Actions",
                icon: "⚛️",
                color: "from-cyan-400 to-blue-500",
              },
              {
                name: "TypeScript 5.9",
                desc: "Type Safety",
                icon: "TS",
                color: "from-blue-600 to-blue-800",
              },
              {
                name: "Tailwind CSS 4",
                desc: "CSS-first Styling",
                icon: "🎨",
                color: "from-cyan-500 to-teal-500",
              },
              {
                name: "TanStack Query 5",
                desc: "Server State",
                icon: "🔄",
                color: "from-orange-500 to-red-500",
              },
              {
                name: "Zustand",
                desc: "Client State",
                icon: "🐻",
                color: "from-amber-500 to-yellow-500",
              },
              {
                name: "Vitest",
                desc: "Unit Testing",
                icon: "🧪",
                color: "from-green-500 to-emerald-500",
              },
              {
                name: "Turbopack",
                desc: "Rust Bundler",
                icon: "⚡",
                color: "from-purple-500 to-pink-500",
              },
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="group flex items-center gap-4 bg-fd-background/60 backdrop-blur-sm p-5 border border-fd-border/50 hover:border-primary/40 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div
                  className={`flex justify-center items-center bg-gradient-to-br ${tech.color} rounded-lg w-12 h-12 font-bold text-white text-lg shadow-lg`}
                >
                  {tech.icon}
                </div>
                <div>
                  <div className="font-semibold text-fd-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </div>
                  <div className="text-fd-muted-foreground text-sm">
                    {tech.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto px-4 sm:px-6 py-20 sm:py-28 max-w-6xl">
        <div className="relative p-10 sm:p-16 rounded-3xl overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-orange-500/10 to-amber-500/20" />
          <div className="absolute inset-0 bg-fd-background/40 backdrop-blur-xl" />

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/15 rounded-full blur-3xl" />

          {/* Border */}
          <div className="absolute inset-0 rounded-3xl border border-fd-border/50" />

          <div className="relative text-center">
            <h2 className="mb-6 font-bold text-fd-foreground text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Ready to Start Building?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-fd-muted-foreground text-lg">
              Join the ABS frontend team and start building amazing products
              with our comprehensive guidelines.
            </p>
            <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
              <Link
                href="/docs/getting-started/setup"
                className="group inline-flex justify-center items-center gap-2 bg-fd-primary hover:bg-fd-primary/90 px-8 rounded-xl h-14 font-semibold text-fd-primary-foreground shadow-lg shadow-fd-primary/20 hover:shadow-xl hover:shadow-fd-primary/30 transition-[background-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5"
              >
                <span>Set Up Your Environment</span>
                <svg
                  className="w-5 h-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/docs/getting-started/first-contribution"
                className="group inline-flex justify-center items-center gap-2 bg-fd-card hover:bg-fd-muted px-8 border border-fd-border hover:border-fd-primary/50 rounded-xl h-14 font-semibold text-fd-foreground transition-[background-color,border-color,transform] duration-200 ease-out hover:-translate-y-0.5"
              >
                <span>Make Your First Contribution</span>
                <svg
                  className="w-5 h-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

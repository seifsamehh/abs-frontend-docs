import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Development Guide",
  description:
    "Complete guide for frontend development at ABS - from setup to deployment. Modern React, Next.js, TypeScript, and best practices.",
};

const features = [
  {
    icon: "🚀",
    title: "Getting Started",
    description:
      "Quick setup guide for new team members. Get running in minutes.",
    href: "/docs/getting-started",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: "📖",
    title: "Guides",
    description:
      "In-depth tutorials on testing, forms, data fetching, and more.",
    href: "/docs/guides",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: "📚",
    title: "Reference",
    description: "Technical specs, architecture decisions, and code standards.",
    href: "/docs/reference",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: "🎓",
    title: "Learning",
    description: "Roadmaps and resources for continuous improvement.",
    href: "/docs/learning",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: "🛠️",
    title: "Projects",
    description: "Our active projects, tech stack, and contribution guides.",
    href: "/docs/projects",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    icon: "❓",
    title: "Help & FAQ",
    description: "Troubleshooting, common issues, and how to get support.",
    href: "/docs/help",
    gradient: "from-yellow-400 to-lime-500",
  },
];

const stats = [
  { label: "Documentation Pages", value: "50+" },
  { label: "Code Examples", value: "100+" },
  { label: "Best Practices", value: "30+" },
  { label: "Tech Guides", value: "15+" },
];

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative mx-auto px-6 py-24 max-w-6xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-fd-muted/50 mb-6 px-4 py-1.5 border border-fd-border rounded-full">
            <span className="relative flex w-2 h-2">
              <span className="inline-flex absolute bg-emerald-400 opacity-75 rounded-full w-full h-full animate-ping" />
              <span className="inline-flex relative bg-emerald-500 rounded-full w-2 h-2" />
            </span>
            <span className="text-fd-muted-foreground text-sm">
              Updated for Next.js 16 & React 19
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            <span className="gradient-text">Frontend Development</span>
            <br />
            <span className="text-fd-foreground">Guide for ABS Teams</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-10 max-w-2xl text-fd-muted-foreground text-lg sm:text-xl">
            From environment setup to production deployment. Learn modern React,
            Next.js, TypeScript, and industry best practices — all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
            <Link
              href="/docs/getting-started"
              className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/30 hover:shadow-xl px-8 rounded-lg h-12 font-semibold text-primary-foreground text-base transition-all"
            >
              Get Started
              <svg
                className="w-4 h-4"
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
              className="inline-flex justify-center items-center gap-2 bg-fd-background hover:bg-fd-muted px-8 border border-fd-border rounded-lg h-12 font-semibold text-fd-foreground text-base transition-all"
            >
              Browse Documentation
            </Link>
          </div>

          {/* Stats */}
          <div className="gap-8 grid grid-cols-2 sm:grid-cols-4 mx-auto mt-16 max-w-3xl">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-bold text-fd-foreground text-3xl">
                  {stat.value}
                </div>
                <div className="text-fd-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto px-6 py-20 max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-fd-foreground text-3xl tracking-tight">
            Everything You Need
          </h2>
          <p className="mx-auto max-w-2xl text-fd-muted-foreground">
            Comprehensive documentation covering every aspect of frontend
            development at ABS.
          </p>
        </div>

        <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="group relative bg-fd-card hover:shadow-primary/5 hover:shadow-xl p-6 border border-fd-border hover:border-primary/30 rounded-xl overflow-hidden transition-all duration-300"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.gradient} text-2xl`}
              >
                {feature.icon}
              </div>
              <h3 className="mb-2 font-semibold text-fd-foreground group-hover:text-primary text-lg transition-colors">
                {feature.title}
              </h3>
              <p className="text-fd-muted-foreground text-sm">
                {feature.description}
              </p>
              <div className="inline-flex items-center opacity-0 group-hover:opacity-100 mt-4 font-medium text-primary text-sm transition-opacity">
                Learn more
                <svg
                  className="ml-1 w-4 h-4"
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
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="bg-fd-muted/30 border-fd-border border-t">
        <div className="mx-auto px-6 py-20 max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-fd-foreground text-3xl tracking-tight">
              Our Tech Stack
            </h2>
            <p className="mx-auto max-w-2xl text-fd-muted-foreground">
              Built with modern, battle-tested technologies for scalability and
              developer experience.
            </p>
          </div>

          <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Next.js 16", desc: "React Framework", icon: "▲" },
              { name: "React 19", desc: "UI Library", icon: "⚛️" },
              { name: "TypeScript", desc: "Type Safety", icon: "TS" },
              { name: "Tailwind CSS", desc: "Styling", icon: "🎨" },
              { name: "TanStack Query", desc: "Data Fetching", icon: "🔄" },
              { name: "Shadcn/ui", desc: "Components", icon: "🎯" },
              { name: "React Testing Library", desc: "Testing", icon: "🧪" },
              { name: "Zod", desc: "Validation", icon: "✓" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-4 bg-fd-card p-4 border border-fd-border hover:border-primary/30 rounded-lg transition-all"
              >
                <div className="flex justify-center items-center bg-primary/10 rounded-md w-10 h-10 font-bold text-primary text-lg">
                  {tech.icon}
                </div>
                <div>
                  <div className="font-medium text-fd-foreground">
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
      <section className="mx-auto px-6 py-20 max-w-6xl">
        <div className="relative bg-gradient-to-br from-primary/10 via-transparent to-accent/10 p-8 sm:p-12 border border-fd-border rounded-2xl overflow-hidden text-center">
          <h2 className="mb-4 font-bold text-fd-foreground text-2xl sm:text-3xl">
            Ready to Start Building?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-fd-muted-foreground">
            Join the ABS frontend team and start building amazing products with
            our comprehensive guidelines.
          </p>
          <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
            <Link
              href="/docs/getting-started/setup"
              className="inline-flex justify-center items-center bg-primary hover:bg-primary/90 px-6 rounded-lg h-11 font-semibold text-primary-foreground transition-all"
            >
              Set Up Your Environment
            </Link>
            <Link
              href="/docs/getting-started/first-contribution"
              className="inline-flex justify-center items-center hover:bg-fd-muted px-6 border border-fd-border rounded-lg h-11 font-semibold text-fd-foreground transition-all"
            >
              Make Your First Contribution
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

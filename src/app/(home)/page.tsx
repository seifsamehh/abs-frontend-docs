import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Comprehensive frontend development documentation for ABS teams - your single source of truth for modern frontend development.",
};

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1 justify-center mx-auto px-6 max-w-6xl text-center">
      <div className="mb-8">
        <h1 className="bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600 mb-4 font-bold text-transparent text-4xl">
          ABS Frontend Documentation
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-fd-muted-foreground text-xl">
          Comprehensive frontend development guidelines, standards, and best
          practices for ABS teams. Your single source of truth for modern
          frontend development.
        </p>
      </div>

      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Link
          href="/docs/getting-started/setup"
          className="bg-card hover:bg-accent p-6 border rounded-lg transition-colors"
        >
          <h3 className="mb-2 font-semibold">🚀 Getting Started</h3>
          <p className="text-muted-foreground text-sm">
            Quick setup guide for new team members
          </p>
        </Link>

        <Link
          href="/docs/standards/overview"
          className="bg-card hover:bg-accent p-6 border rounded-lg transition-colors"
        >
          <h3 className="mb-2 font-semibold">📋 Standards</h3>
          <p className="text-muted-foreground text-sm">
            Coding standards and development guidelines
          </p>
        </Link>

        <Link
          href="/docs/best-practices/overview"
          className="bg-card hover:bg-accent p-6 border rounded-lg transition-colors"
        >
          <h3 className="mb-2 font-semibold">✨ Best Practices</h3>
          <p className="text-muted-foreground text-sm">
            Industry-leading practices and patterns
          </p>
        </Link>

        <Link
          href="/docs/tech-stack/overview"
          className="bg-card hover:bg-accent p-6 border rounded-lg transition-colors"
        >
          <h3 className="mb-2 font-semibold">🛠️ Tech Stack</h3>
          <p className="text-muted-foreground text-sm">
            Our technology choices and architecture
          </p>
        </Link>

        <Link
          href="/docs/troubleshooting/overview"
          className="bg-card hover:bg-accent p-6 border rounded-lg transition-colors"
        >
          <h3 className="mb-2 font-semibold">🔧 Troubleshooting</h3>
          <p className="text-muted-foreground text-sm">
            Common problems and proven solutions
          </p>
        </Link>

        <Link
          href="/docs/support/overview"
          className="bg-card hover:bg-accent p-6 border rounded-lg transition-colors"
        >
          <h3 className="mb-2 font-semibold">🆘 Support</h3>
          <p className="text-muted-foreground text-sm">
            Get help from the team and community
          </p>
        </Link>
      </div>

      <div className="flex sm:flex-row flex-col justify-center gap-4">
        <Link
          href="/docs"
          className="inline-flex justify-center items-center bg-primary hover:bg-primary/90 px-6 py-3 rounded-md font-semibold text-primary-foreground transition-colors"
        >
          View Full Documentation
        </Link>
        <Link
          href="/docs/company/overview"
          className="inline-flex justify-center items-center bg-background hover:bg-accent px-6 py-3 border border-input rounded-md transition-colors"
        >
          About ABS
        </Link>
      </div>
    </main>
  );
}

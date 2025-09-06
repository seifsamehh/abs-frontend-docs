import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Development Guide",
  description:
    "Complete guide for frontend development at ABS - from setup to deployment. Modern React, Next.js, TypeScript, and best practices.",
};

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1 justify-center mx-auto px-6 max-w-6xl text-center">
      <div className="mb-8">
        <h1 className="bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-4 font-bold text-transparent text-4xl">
          Frontend Development Guide
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-fd-muted-foreground text-xl">
          Complete guide for frontend development at ABS. From environment setup
          to production deployment, learn modern React, Next.js, TypeScript, and
          industry best practices.
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
          href="/docs/development-guide/overview"
          className="bg-card hover:bg-accent p-6 border rounded-lg transition-colors"
        >
          <h3 className="mb-2 font-semibold">📖 Development Guide</h3>
          <p className="text-muted-foreground text-sm">
            Coding standards, patterns, and best practices
          </p>
        </Link>

        <Link
          href="/docs/components/overview"
          className="bg-card hover:bg-accent p-6 border rounded-lg transition-colors"
        >
          <h3 className="mb-2 font-semibold">🧩 Components</h3>
          <p className="text-muted-foreground text-sm">
            UI component library and design system
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
          href="/docs/testing/overview"
          className="bg-card hover:bg-accent p-6 border rounded-lg transition-colors"
        >
          <h3 className="mb-2 font-semibold">🧪 Testing</h3>
          <p className="text-muted-foreground text-sm">
            Testing strategies, tools, and best practices
          </p>
        </Link>

        <Link
          href="/docs/deployment/overview"
          className="bg-card hover:bg-accent p-6 border rounded-lg transition-colors"
        >
          <h3 className="mb-2 font-semibold">🚀 Deployment</h3>
          <p className="text-muted-foreground text-sm">
            Build processes, CI/CD, and production deployment
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
          href="/docs/resources/overview"
          className="inline-flex justify-center items-center bg-background hover:bg-accent px-6 py-3 border border-input rounded-md transition-colors"
        >
          Resources & Learning
        </Link>
      </div>
    </main>
  );
}

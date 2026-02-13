import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";
import { ReadingProgressBar } from "@/components/docs/reading-progress";
import { FeedbackWidget } from "@/components/docs/feedback-widget";
import { ScrollToTop } from "@/components/docs/scroll-to-top";

// GitHub repository information for "Edit this page" links
const GITHUB_OWNER = "seifsamehh";
const GITHUB_REPO = "abs-frontend-docs";
const GITHUB_BRANCH = "main";

/**
 * Estimate reading time from MDX content.
 * Average reading speed: ~200 words per minute for technical content.
 */
function getReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;
  const filePath = page.file.path;

  // Estimate reading time from raw content
  const readingTime = page.data.body
    ? getReadingTime(String(page.data.body))
    : null;

  // Last updated date
  const lastUpdated = page.data.lastUpdated
    ? new Date(page.data.lastUpdated).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <>
      <ReadingProgressBar />
      <ScrollToTop />
      <DocsPage
        toc={page.data.toc}
        full={page.data.full}
        tableOfContent={{
          style: "clerk",
          single: false,
        }}
        editOnGithub={{
          owner: GITHUB_OWNER,
          repo: GITHUB_REPO,
          sha: GITHUB_BRANCH,
          path: `content/docs/${filePath}`,
        }}
        footer={{
          enabled: true,
        }}
      >
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>

        {/* Page metadata badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6 not-prose">
          {page.data.difficulty && (
            <span
              className={`badge ${
                page.data.difficulty === "beginner"
                  ? "badge-success"
                  : page.data.difficulty === "intermediate"
                    ? "badge-warning"
                    : "badge-danger"
              }`}
            >
              {page.data.difficulty.charAt(0).toUpperCase() +
                page.data.difficulty.slice(1)}
            </span>
          )}
          {page.data.estimatedTime && (
            <span className="badge badge-secondary">
              <svg
                className="w-3 h-3 mr-1 opacity-60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {page.data.estimatedTime}
            </span>
          )}
          {readingTime && (
            <span className="badge badge-secondary">
              <svg
                className="w-3 h-3 mr-1 opacity-60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              {readingTime}
            </span>
          )}
          {lastUpdated && (
            <span className="badge badge-secondary">
              <svg
                className="w-3 h-3 mr-1 opacity-60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Updated {lastUpdated}
            </span>
          )}
        </div>

        <DocsBody>
          <MDXContent
            components={getMDXComponents({
              a: createRelativeLink(source, page),
            })}
          />
        </DocsBody>

        {/* Feedback widget at the bottom */}
        <div className="mt-12 pt-6 border-t border-fd-border not-prose">
          <FeedbackWidget />
        </div>
      </DocsPage>
    </>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    keywords: page.data.keywords,
  };
}

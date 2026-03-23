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
  const filePath = page.path;

  // Estimate reading time from raw content
  const readingTime = page.data.body
    ? getReadingTime(String(page.data.body))
    : null;

  // Last updated date and staleness check
  const lastUpdatedDate = page.data.lastUpdated
    ? new Date(page.data.lastUpdated)
    : null;
  const lastUpdated = lastUpdatedDate
    ? lastUpdatedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;
  const daysSinceUpdate = lastUpdatedDate
    ? Math.floor(
        (Date.now() - lastUpdatedDate.getTime()) / (1000 * 60 * 60 * 24)
      )
    : null;
  const isStale = daysSinceUpdate !== null && daysSinceUpdate > 90;

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

        {/* Page metadata */}
        {(page.data.difficulty || page.data.estimatedTime || readingTime || lastUpdated) && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-6 not-prose text-xs text-fd-muted-foreground">
            {page.data.difficulty && (
              <span className="capitalize">{page.data.difficulty}</span>
            )}
            {page.data.estimatedTime && (
              <span>{page.data.estimatedTime}</span>
            )}
            {readingTime && (
              <span>{readingTime}</span>
            )}
            {lastUpdated && !isStale && (
              <span>Updated {lastUpdated}</span>
            )}
            {isStale && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-red-500/10 text-red-500 font-medium">
                Needs review ({lastUpdated})
              </span>
            )}
          </div>
        )}

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

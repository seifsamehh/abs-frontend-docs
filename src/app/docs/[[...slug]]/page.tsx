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

// GitHub repository information for "Edit this page" links
const GITHUB_BRANCH = "main";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;
  const filePath = page.file.path;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: "clerk",
        single: false,
      }}
      editOnGithub={{
        owner: "seifsamehh",
        repo: "abs-frontend-docs",
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
      {(page.data.keywords ||
        page.data.difficulty ||
        page.data.estimatedTime) && (
        <div className="flex flex-wrap gap-2 mb-6 not-prose">
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
              ⏱️ {page.data.estimatedTime}
            </span>
          )}
        </div>
      )}

      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
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

import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

// Extended frontmatter schema with additional metadata
const extendedFrontmatterSchema = frontmatterSchema.extend({
  // SEO and discoverability
  keywords: z.array(z.string()).optional(),

  // Learning metadata
  difficulty: z.enum(["beginner", "intermediate", "advanced"]).optional(),
  estimatedTime: z.string().optional(),
  prerequisites: z.array(z.string()).optional(),

  // Content metadata
  author: z.string().optional(),
  lastUpdated: z.string().optional(),
  category: z.string().optional(),

  // Feature flags
  draft: z.boolean().optional().default(false),
  featured: z.boolean().optional().default(false),
});

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    schema: extendedFrontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    // MDX options
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

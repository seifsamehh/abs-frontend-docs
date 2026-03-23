import { source } from '@/lib/source';

export const revalidate = false;

export function GET() {
  const pages = source.getPages();

  const lines = [
    '# ABS Frontend Documentation',
    '',
    '> Complete frontend development documentation for ABS teams — standards, guidelines, and best practices.',
    '',
    `## Pages (${pages.length})`,
    '',
    ...pages.map((page) => {
      const title = page.data.title;
      const desc = page.data.description || '';
      const url = page.url;
      return `- [${title}](${url}): ${desc}`;
    }),
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

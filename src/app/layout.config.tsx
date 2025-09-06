import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "Frontend Development Guide",
    url: "/",
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "GitHub",
      url: "https://github.com/ABS-Courier",
      external: true,
    },
  ],
  // Enable search toggle
  searchToggle: {
    enabled: true,
  },
  // Enable theme switch
  themeSwitch: {
    enabled: true,
    mode: "light-dark-system",
  },
};

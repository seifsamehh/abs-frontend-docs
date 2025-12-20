import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2.5">
        <Image
          src="/logo-light.svg"
          alt="ABS Logo"
          width={32}
          height={32}
          className="dark:hidden shrink-0"
        />
        <Image
          src="/logo-dark.svg"
          alt="ABS Logo"
          width={32}
          height={32}
          className="hidden dark:block shrink-0"
        />
        <span className="font-semibold">Frontend Guide</span>
      </div>
    ),
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

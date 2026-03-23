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
          width={28}
          height={28}
          className="dark:hidden shrink-0"
        />
        <Image
          src="/logo-dark.svg"
          alt="ABS Logo"
          width={28}
          height={28}
          className="hidden dark:block shrink-0"
        />
        <span className="font-semibold text-[15px] tracking-tight">
          Frontend Guide
        </span>
      </div>
    ),
    url: "/",
  },
  githubUrl: "https://github.com/ABS-Courier",
  links: [
    {
      text: "Docs",
      url: "/docs",
      active: "nested-url",
    },
  ],
};

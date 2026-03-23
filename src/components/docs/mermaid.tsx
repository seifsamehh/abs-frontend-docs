"use client";

import { useEffect, useRef, useState } from "react";

export function Mermaid({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    let cancelled = false;

    async function render() {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        fontFamily: "var(--font-geist-sans), sans-serif",
        themeVariables: {
          primaryColor: "#EA8303",
          primaryTextColor: "#fafafa",
          primaryBorderColor: "#EA8303",
          lineColor: "#6b7280",
          secondaryColor: "#27272a",
          tertiaryColor: "#18181b",
        },
      });

      const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
      const { svg: renderedSvg } = await mermaid.render(id, chart.trim());

      if (!cancelled) {
        setSvg(renderedSvg);
      }
    }

    render();
    return () => {
      cancelled = true;
    };
  }, [chart]);

  return svg ? (
    <div
      ref={containerRef}
      className="my-6 flex justify-center rounded-xl border border-fd-border bg-fd-card p-6 overflow-x-auto not-prose"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  ) : (
    <div
      ref={containerRef}
      className="my-6 flex justify-center rounded-xl border border-fd-border bg-fd-card p-6 overflow-x-auto not-prose"
    >
      <div className="text-fd-muted-foreground text-sm animate-pulse">
        Loading diagram...
      </div>
    </div>
  );
}

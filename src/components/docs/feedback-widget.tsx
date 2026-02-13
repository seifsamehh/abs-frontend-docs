"use client";

import { useState } from "react";

/**
 * "Was this helpful?" feedback widget for docs pages.
 * Appears at the bottom of every documentation page.
 * Inspired by Mintlify and Cursor docs feedback patterns.
 */
export function FeedbackWidget() {
  const [feedback, setFeedback] = useState<"positive" | "negative" | null>(
    null
  );

  if (feedback) {
    return (
      <div className="flex items-center gap-2 text-sm text-fd-muted-foreground animate-in fade-in duration-300">
        <svg
          className="w-4 h-4 text-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span>Thanks for your feedback!</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-fd-muted-foreground">
        Was this page helpful?
      </span>
      <div className="flex gap-1.5">
        <button
          onClick={() => setFeedback("positive")}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-fd-border hover:border-emerald-500/50 hover:bg-emerald-500/10 text-fd-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 cursor-pointer"
          aria-label="Yes, this page was helpful"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          Yes
        </button>
        <button
          onClick={() => setFeedback("negative")}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-fd-border hover:border-red-500/50 hover:bg-red-500/10 text-fd-muted-foreground hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 cursor-pointer"
          aria-label="No, this page was not helpful"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
            />
          </svg>
          No
        </button>
      </div>
    </div>
  );
}

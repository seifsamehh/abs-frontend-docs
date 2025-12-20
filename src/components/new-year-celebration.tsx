"use client";

import { useState, useEffect, useCallback } from "react";
import Snowfall from "react-snowfall";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function NewYearCelebration() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isNewYear, setIsNewYear] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const calculateTimeLeft = useCallback((): TimeLeft => {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);

    // If we're already in January 2025, target 2026
    if (now.getMonth() === 0 && now.getDate() <= 7) {
      // Show celebration for first week of January
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const difference = newYear.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, []);

  useEffect(() => {
    setIsMounted(true);

    // Check if user dismissed the banner this session
    const dismissed = sessionStorage.getItem("newYearBannerDismissed");
    if (dismissed) {
      setIsVisible(false);
    }

    // Detect dark mode
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();

    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const timer = setInterval(() => {
      const time = calculateTimeLeft();
      setTimeLeft(time);

      // Check if it's New Year (first week of January)
      const now = new Date();
      if (now.getMonth() === 0 && now.getDate() <= 7) {
        setIsNewYear(true);
      }
    }, 1000);

    // Initial calculation
    const initialTime = calculateTimeLeft();
    setTimeLeft(initialTime);

    const now = new Date();
    if (now.getMonth() === 0 && now.getDate() <= 7) {
      setIsNewYear(true);
    }

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, [calculateTimeLeft]);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("newYearBannerDismissed", "true");
  };

  // Don't render on server to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  // Snowfall color: primary orange in light mode, white in dark mode
  const snowColor = isDarkMode ? "#ffffff" : "#EA8303";

  return (
    <>
      {/* Snowfall Effect - covers entire viewport (always visible) */}
      <div className="z-40 fixed inset-0 pointer-events-none">
        <Snowfall
          color={snowColor}
          snowflakeCount={120}
          radius={[0.5, 2.5]}
          speed={[0.5, 1.5]}
          wind={[-0.5, 0.5]}
        />
      </div>

      {/* Professional Celebration Banner - only visible when not dismissed */}
      {isVisible && (
        <div className="right-4 bottom-4 z-50 fixed max-w-sm">
          <div className="relative bg-fd-card shadow-lg border border-fd-border rounded-xl overflow-hidden">
            {/* Top accent bar */}
            <div className="bg-gradient-to-r from-fd-primary via-amber-500 to-fd-primary h-1" />

            <div className="p-4">
              {/* Header with dismiss */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎄</span>
                  <span className="font-medium text-fd-foreground text-sm">
                    {isNewYear ? "Happy New Year!" : "New Year Countdown"}
                  </span>
                </div>
                <button
                  onClick={handleDismiss}
                  className="hover:bg-fd-muted -m-1 p-1 rounded-md text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                  aria-label="Dismiss"
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
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Content */}
              {isNewYear ? (
                <div className="py-2 text-center">
                  <h3 className="mb-1 font-bold text-fd-primary text-xl">
                    🎉 2025 🎉
                  </h3>
                  <p className="text-fd-muted-foreground text-sm">
                    Wishing you a year of clean code and zero bugs!
                  </p>
                </div>
              ) : (
                <>
                  {/* Countdown Grid */}
                  <div className="gap-2 grid grid-cols-4 mb-3">
                    <TimeBlock value={timeLeft.days} label="Days" />
                    <TimeBlock value={timeLeft.hours} label="Hrs" />
                    <TimeBlock value={timeLeft.minutes} label="Min" />
                    <TimeBlock value={timeLeft.seconds} label="Sec" />
                  </div>

                  <p className="text-fd-muted-foreground text-xs text-center">
                    ✨ Here&apos;s to a productive 2025!
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-fd-accent px-2 py-1.5 border border-fd-border rounded-lg min-w-[48px]">
        <span className="block font-bold tabular-nums text-fd-primary text-lg text-center">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="mt-1 font-medium text-[10px] text-fd-muted-foreground uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

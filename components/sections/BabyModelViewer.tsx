"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const WEEKS = [8, 12, 16, 20, 24, 28, 32, 36, 40] as const;
type Week = (typeof WEEKS)[number];

export function BabyModelViewer({ defaultWeek = 28 }: { defaultWeek?: Week }) {
  const [ready, setReady] = useState(false);
  const [week, setWeek] = useState<Week>(defaultWeek);

  useEffect(() => {
    import("@google/model-viewer").then(() => setReady(true));
  }, []);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative aspect-square w-full max-w-[420px] overflow-hidden rounded-[var(--radius-2xl)]">
        {ready ? (
          <model-viewer
            src={`/models/week${String(week).padStart(2, "0")}.glb`}
            alt={`Real MaaSphere 3D model of fetal development at week ${week}`}
            camera-controls
            shadow-intensity="1"
            exposure="1.05"
            interaction-prompt="none"
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center text-sm text-white/70"
            aria-live="polite"
          >
            Loading 3D model…
          </div>
        )}
      </div>
      <div
        className="flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Choose a pregnancy week to view"
      >
        {WEEKS.map((w) => (
          <button
            key={w}
            type="button"
            onClick={() => setWeek(w)}
            aria-pressed={w === week}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-colors",
              w === week
                ? "bg-warmth-gold text-ink"
                : "bg-white/10 text-white/80 hover:bg-white/20"
            )}
          >
            Wk {w}
          </button>
        ))}
      </div>
    </div>
  );
}

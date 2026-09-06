"use client";

import { siteConfig } from "@/data/profile";
import { useT } from "@/i18n/LocaleContext";

export function InteractiveCard() {
  const t = useT();
  const i = t.interactive;

  const lines: Array<{ prompt?: boolean; text: string; tone?: "muted" | "accent" | "accent2" | "warm" }> = [
    { prompt: true, text: i.whoamiPrompt },
    { text: i.whoamiResult, tone: "muted" },
    { prompt: true, text: i.aboutPrompt },
    { text: i.aboutName, tone: "accent" },
    { text: i.aboutRole, tone: "accent" },
    { text: i.aboutStack, tone: "accent2" },
    { text: i.aboutFocus, tone: "muted" },
    { prompt: true, text: i.lsPrompt },
    { text: i.lsTravelmind, tone: "warm" },
    { text: i.lsAura, tone: "warm" },
    { text: i.lsBookings, tone: "warm" },
  ];

  const userHost = siteConfig.handle.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="relative w-full max-w-2xl">
      <div className="glass-panel overflow-hidden rounded-xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="mx-auto font-mono text-[11px] tracking-wide text-muted">
            {i.windowTitle}
          </span>
          <span className="font-mono text-[10px] text-muted/60">
            v1.0 · {siteConfig.name}
          </span>
        </div>

        {/* Terminal body */}
        <div className="px-5 py-5 sm:px-6 sm:py-6">
          <pre className="m-0 overflow-x-auto font-mono text-[12.5px] leading-[1.7] sm:text-[13px]">
            {lines.map((line, idx) =>
              line.prompt ? (
                <div key={idx} className="text-foreground/90">
                  <span className="text-accent">{i.promptUser}@{userHost}</span>
                  <span className="text-muted">:</span>
                  <span className="text-accent-2">~</span>
                  <span className="text-muted">{i.prompt} </span>
                  <span>{line.text}</span>
                </div>
              ) : (
                <div
                  key={idx}
                  className={
                    line.tone === "accent"
                      ? "text-accent/90"
                      : line.tone === "accent2"
                        ? "text-accent-2/90"
                        : line.tone === "warm"
                          ? "text-accent-warm/90"
                          : "text-muted"
                  }
                >
                  {line.text}
                </div>
              ),
            )}
            <div className="mt-1 flex items-center text-foreground/90">
              <span className="text-accent">{i.promptUser}@{userHost}</span>
              <span className="text-muted">:</span>
              <span className="text-accent-2">~</span>
              <span className="text-muted">{i.prompt} </span>
              <span className="ml-1 inline-block h-[1em] w-2 animate-pulse bg-accent/80 align-middle" />
            </div>
          </pre>
        </div>
      </div>

      {/* Footer hint */}
      <p className="mt-3 text-center font-mono text-[10px] tracking-[0.2em] text-muted/60 uppercase">
        {i.shortcut}
      </p>
    </div>
  );
}

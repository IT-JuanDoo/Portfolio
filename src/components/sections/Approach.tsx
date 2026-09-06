"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useT } from "@/i18n/LocaleContext";
import { motion } from "framer-motion";

const STEP_KEYS = ["understand", "design", "build", "review"] as const;

export function Approach() {
  const t = useT();

  return (
    <section id="approach" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          index={t.sections.approach.index}
          label={t.sections.approach.label}
          title={t.sections.approach.title}
          description={t.sections.approach.description}
        />

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-4 hidden w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent md:block" />

          <div className="space-y-8">
            {STEP_KEYS.map((key, index) => {
              const step = t.approachSteps[key];
              const stepNum = String(index + 1).padStart(2, "0");
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-6 md:pl-12"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-mono text-xs text-accent md:absolute md:left-0">
                    {stepNum}
                  </div>
                  <div className="glass-panel flex-1 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

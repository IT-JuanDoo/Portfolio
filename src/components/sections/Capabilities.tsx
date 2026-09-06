"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities } from "@/data/capabilities";
import { useT } from "@/i18n/LocaleContext";
import {
  Boxes,
  Cloud,
  Database,
  FlaskConical,
  Lock,
  Layout,
  Network,
  Server,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  api: Network,
  database: Database,
  auth: Lock,
  architecture: Boxes,
  devops: Cloud,
  testing: FlaskConical,
  frontend: Layout,
  backend: Server,
};

const CAPABILITY_ORDER = ["frontend", "backend", "database", "devops"] as const;

export function Capabilities() {
  const t = useT();

  return (
    <section id="capabilities" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          index={t.sections.capabilities.index}
          label={t.sections.capabilities.label}
          title={t.sections.capabilities.title}
          description={t.sections.capabilities.description}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITY_ORDER.map((key, index) => {
            const capDict = t.capabilities[key];
            const dataTags = capabilities.find((c) => c.id === key)?.tags ?? [];
            const Icon = iconMap[key as keyof typeof iconMap] ?? Network;
            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-panel glass-panel-hover group rounded-xl p-6"
              >
                <div className="mb-4 inline-flex rounded-lg border border-accent/20 bg-accent/10 p-2.5 text-accent">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {capDict.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {capDict.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {dataTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

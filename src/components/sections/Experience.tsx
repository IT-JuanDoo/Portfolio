"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";
import { useT } from "@/i18n/LocaleContext";
import { motion } from "framer-motion";

const EXP_KEYS = {
  education: "education",
  "personal-projects": "personal",
} as const;

type ExpKey = keyof typeof EXP_KEYS;

export function Experience() {
  const t = useT();

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          index={t.sections.experience.index}
          label={t.sections.experience.label}
          title={t.sections.experience.title}
          description={t.sections.experience.description}
        />

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const dictKey = EXP_KEYS[exp.id as ExpKey];
            const expDict = dictKey ? t.experienceData[dictKey] : undefined;
            const role = expDict?.role ?? exp.role;
            const company = expDict?.company ?? exp.company;
            const period = expDict?.period ?? exp.period;
            const description = expDict?.description ?? exp.description;

            return (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel rounded-xl p-6 md:p-8"
              >
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {role}
                    </h3>
                    <p className="text-accent">{company}</p>
                  </div>
                  <span className="font-mono text-xs text-muted">
                    {period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {description.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-muted before:text-accent before:content-['>']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-foreground"
                    >
                      {tech}
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

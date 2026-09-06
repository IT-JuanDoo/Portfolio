"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactFields } from "@/data/contact";
import { useT } from "@/i18n/LocaleContext";
import { motion } from "framer-motion";
import { useState } from "react";

// Map label data → label hiển thị theo ngôn ngữ
function localizedLabel(rawLabel: string, t: ReturnType<typeof useT>): string {
  const cf = t.contactFields;
  switch (rawLabel.toLowerCase()) {
    case "email":
      return cf.email;
    case "phone":
      return cf.phone;
    case "location":
      return cf.location;
    case "availability":
      return cf.availability;
    default:
      return rawLabel;
  }
}

export function Contact() {
  const t = useT();
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <section id="contact" className="relative py-24 md:pb-32 md:pt-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          index={t.sections.contact.index}
          label={t.sections.contact.label}
          title={t.sections.contact.title}
          description={t.sections.contact.description}
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactFields.map((field) => {
              const label = localizedLabel(field.label, t);
              return (
                <div key={field.label} className="glass-panel rounded-xl p-5">
                  <p className="font-mono text-[10px] tracking-widest text-accent uppercase">
                    {label}
                  </p>
                  {field.href ? (
                    <a
                      href={field.href}
                      className="mt-1 block text-foreground hover:text-accent"
                    >
                      {field.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-foreground">{field.value}</p>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

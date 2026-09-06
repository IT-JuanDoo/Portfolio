import type { ContactField } from "@/types";
import { profile } from "./profile";

// Dữ liệu thô (value) — không cần dịch vì là email/SĐT/địa chỉ thật.
// Label được dịch ở component Contact dựa trên key.
export const contactFields: ContactField[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "Phone",
    value: profile.phone ?? "",
    href: profile.phone ? `tel:${profile.phone.replace(/\s+/g, "")}` : undefined,
  },
  {
    label: "Location",
    value: profile.location ?? "TP. Hồ Chí Minh, Việt Nam",
  },
  {
    label: "Availability",
    value: "Open to internships & junior full-stack roles",
  },
];

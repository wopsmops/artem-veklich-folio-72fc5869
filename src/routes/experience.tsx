import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/experience")({ component: ExperiencePage });

type Entry = {
  kind: "work" | "education";
  title: string;
  org: string;
  date: string;
  desc: string;
};

const entries: Entry[] = [
  {
    kind: "work",
    title: "Rail Systems Engineer",
    org: "AtkinsRéalis",
    date: "2024 – present",
    desc: "Working across UK rail infrastructure projects on systems integration, asset data, and signalling interfaces.",
  },
  {
    kind: "education",
    title: "MEng Electronic & Electrical Engineering",
    org: "University of Bath",
    date: "2020 – 2025",
    desc: "Specialised in communications, RF, and embedded systems. Capstone on VTOL UAV platform design.",
  },
  {
    kind: "work",
    title: "Engineering Placement",
    org: "AtkinsRéalis",
    date: "2023 – 2024",
    desc: "Year-long placement on rail digital systems and asset standardisation tooling.",
  },
  {
    kind: "education",
    title: "A Levels",
    org: "Placeholder School",
    date: "2018 – 2020",
    desc: "Maths, Further Maths, Physics.",
  },
];

function ExperiencePage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <h1 style={{ fontSize: 24, fontWeight: 500, color: "var(--text-primary)", marginBottom: 8 }}>
          experience
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: 14 }}>
          work and education, in rough order.
        </p>

        <div className="relative mt-10 pl-6">
          <div
            className="absolute left-1.5 top-1 bottom-1"
            style={{ width: 1, background: "var(--accent)" }}
          />
          <ul className="flex flex-col gap-8">
            {entries.map((e, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <span
                  className="absolute -left-[18px] top-1.5 block rounded-full"
                  style={{
                    width: 8,
                    height: 8,
                    background: "var(--accent)",
                    boxShadow: "0 0 0 3px var(--dot-ring)",
                  }}
                />
                <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>
                  {e.title}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                  {e.org} · {e.date} · {e.kind}
                </div>
                <p className="mt-1.5 line-clamp-2" style={{ fontSize: 12, color: "var(--text-muted)" }}>
                  {e.desc}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </PageTransition>
  );
}

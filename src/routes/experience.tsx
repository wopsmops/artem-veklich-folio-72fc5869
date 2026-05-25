import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PageTransition } from "@/components/PageTransition";
import { entries, type ExperienceEntry } from "@/data/experience";

export const Route = createFileRoute("/experience")({ component: ExperiencePage });

const COLORS = {
  work: "#F59E0B",
  education: "#2563EB",
  extra: "#0D9488",
};

function EntryCard({ entry, color }: { entry: ExperienceEntry; color: string }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      style={{ position: "relative", listStyle: "none" }}
    >
      <span
        style={{
          position: "absolute",
          left: -29,
          top: 6,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: color,
          border: "2px solid var(--bg-page)",
        }}
      />
      <div
        style={{
          background: "var(--bg-surface)",
          border: "1px solid var(--border)",
          borderRadius: 8,
          padding: "14px 16px",
        }}
      >
        <div style={{ fontSize: 11, color: "#585858", letterSpacing: "0.03em", marginBottom: 4 }}>
          {entry.period}
          {entry.concurrent && (
            <span
              style={{
                marginLeft: 8,
                fontSize: 10,
                color: "rgba(245, 158, 11, 0.7)",
              }}
            >
              ↔ concurrent
            </span>
          )}
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "var(--text-primary)",
            marginBottom: 2,
          }}
        >
          {entry.role}
        </div>
        <div style={{ fontSize: 12, color: "#585858", marginBottom: 10 }}>
          {entry.organisation} · {entry.location}
        </div>
        <ul
          style={{
            fontSize: 12,
            color: "#888",
            lineHeight: 1.6,
            listStyle: "disc",
            paddingLeft: 14,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {entry.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
}

function Column({ items, color }: { items: ExperienceEntry[]; color: string }) {
  return (
    <div style={{ position: "relative", paddingLeft: 24 }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 8,
          bottom: 8,
          width: 2,
          background: color,
        }}
      />
      <ul style={{ display: "flex", flexDirection: "column", gap: 28, margin: 0, padding: 0 }}>
        {items.map((e) => (
          <EntryCard key={e.id} entry={e} color={color} />
        ))}
      </ul>
    </div>
  );
}

function SectionLabel({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div
      style={{
        fontSize: 11,
        color,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  );
}

function ExperiencePage() {
  const { t } = useTranslation();
  const [showExtra, setShowExtra] = useState(false);

  const work = entries.filter((e) => e.type === "work");
  const education = entries.filter((e) => e.type === "education");
  const extra = entries.filter((e) => e.type === "extra");

  return (
    <PageTransition>
      <section className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
        <h1 style={{ fontSize: 24, fontWeight: 500, color: "var(--text-primary)", marginBottom: 8 }}>
          {t("experience.page_title")}
        </h1>
        <p style={{ color: "var(--text-subtitle)", fontSize: 14 }}>
          {t("experience.page_subtitle")}
        </p>

        <button
          onClick={() => setShowExtra((v) => !v)}
          style={{
            marginTop: 16,
            fontSize: 12,
            color: "#0D9488",
            border: "1px solid #0D948833",
            background: showExtra ? "#0D94881a" : "#0D94880a",
            borderRadius: 4,
            padding: "5px 12px",
            cursor: "pointer",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#0D94881a")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = showExtra ? "#0D94881a" : "#0D94880a")
          }
        >
          {showExtra ? "hide leadership & volunteering −" : "show leadership & volunteering +"}
        </button>

        {/* Desktop: two columns */}
        <div className="mt-10 hidden md:flex" style={{ gap: 32, alignItems: "flex-start" }}>
          <div style={{ flex: 3 }}>
            <SectionLabel color={COLORS.work}>work experience</SectionLabel>
            <Column items={work} color={COLORS.work} />
          </div>
          <div style={{ flex: 2 }}>
            <SectionLabel color={COLORS.education}>education</SectionLabel>
            <Column items={education} color={COLORS.education} />
          </div>
        </div>

        {/* Mobile: stacked */}
        <div className="mt-10 flex flex-col md:hidden" style={{ gap: 32 }}>
          <div>
            <SectionLabel color={COLORS.work}>work experience</SectionLabel>
            <Column items={work} color={COLORS.work} />
          </div>
          <div>
            <SectionLabel color={COLORS.education}>education</SectionLabel>
            <Column items={education} color={COLORS.education} />
          </div>
        </div>

        {showExtra && (
          <div
            style={{
              marginTop: 40,
              paddingTop: 24,
              borderTop: "1px solid var(--border)",
            }}
          >
            <SectionLabel color={COLORS.extra}>leadership & volunteering</SectionLabel>
            <Column items={extra} color={COLORS.extra} />
          </div>
        )}
      </section>
    </PageTransition>
  );
}

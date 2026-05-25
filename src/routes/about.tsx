import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Portrait } from "@/components/Portrait";
import { PageTransition } from "@/components/PageTransition";
import { SkillPill } from "@/components/SkillPill";
import { LanguageBar } from "@/components/LanguageBar";
import { skillSections } from "@/data/skills";
import { languages } from "@/data/languages";

export const Route = createFileRoute("/about")({ component: AboutPage });

const sectionLabelStyle: React.CSSProperties = {
  textTransform: "uppercase",
  fontSize: 11,
  color: "#585858",
  letterSpacing: "0.1em",
  marginBottom: 10,
};

function AboutPage() {
  const { t } = useTranslation();
  return (
    <PageTransition>
      <section className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <Portrait className="w-[120px]" />
        <h1 className="mt-6" style={{ fontSize: 24, fontWeight: 500, color: "var(--text-primary)" }}>
          {t("about.page_title")}
        </h1>
        <p className="mt-4" style={{ color: "var(--text-primary)", fontSize: 14, lineHeight: 1.7 }}>
          {t("about.bio")}
        </p>

        <div className="mt-10">
          {skillSections.map((section, idx) => (
            <div key={section.label} style={{ marginTop: idx === 0 ? 0 : 24 }}>
              <div style={sectionLabelStyle}>{section.label}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {section.skills.map((s) => (
                  <SkillPill key={s.name} skill={s} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32 }}>
          <div style={sectionLabelStyle}>spoken languages</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 380 }}>
            {languages.map((l) => (
              <LanguageBar key={l.name} language={l} />
            ))}
          </div>
        </div>

        <div className="mt-10 flex gap-5">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2" style={{ color: "var(--accent)", fontSize: 13 }}>
            <Github size={14} /> github
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2" style={{ color: "var(--accent)", fontSize: 13 }}>
            <Linkedin size={14} /> linkedin
          </a>
          <a href="mailto:artem@veklich.com" className="inline-flex items-center gap-2" style={{ color: "var(--accent)", fontSize: 13 }}>
            <Mail size={14} /> email
          </a>
        </div>
      </section>
    </PageTransition>
  );
}

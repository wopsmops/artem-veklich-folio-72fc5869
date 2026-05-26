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
  const paragraphStyle: React.CSSProperties = {
    fontSize: 14,
    color: "#888888",
    lineHeight: 1.75,
    marginBottom: 16,
  };
  return (
    <PageTransition>
      <section className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <Portrait className="w-[120px]" />
        <h1 className="mt-6" style={{ fontSize: 24, fontWeight: 500, color: "var(--text-primary)" }}>
          {t("about.page_title")}
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 12,
            color: "#585858",
            letterSpacing: "0.01em",
            marginTop: 16,
            marginBottom: 16,
          }}
        >
          <span>🇬🇧 Bath &amp; London</span>
          <span style={{ color: "#333333", padding: "0 2px" }}>•</span>
          <span>🇵🇱 Warsaw</span>
        </div>
        <p style={paragraphStyle}>
          I'm finishing an MEng in Electronic and Electrical Engineering at Bath, studying digital communications, RF systems, control systems, power engineering, and systems engineering. I currently work in Engineering and Technology at Transport for London, following a year-long placement at AtkinsRéalis on rail telecoms and infrastructure. All of it tends to meet at the same point: hardware, RF, and the infrastructure that physical systems run on.
        </p>
        <p style={paragraphStyle}>
          I grew up across seven countries: Ukraine, Kazakhstan, Serbia, Romania, Poland, Czech Republic, and the UK. I did the IB at the International School of Belgrade before coming to Bath. Moving around that much leaves you with eight languages and a certain instinct for how different places approach infrastructure and connectivity. Ukraine is home in a way that doesn't change regardless of where I live. I've put together{" "}
          <a
            href="/ukraine"
            className="ukraine-link"
            style={{ color: "#F59E0B", textDecoration: "none", fontWeight: "inherit" }}
          >
            a page here
          </a>{" "}
          on why that matters and how you can help.
        </p>
        <p style={paragraphStyle}>
          Outside engineering I play football and tennis, follow urban design and transport planning, and travel whenever possible. I find how cities connect, how internet infrastructure works at scale, and how people build things that last genuinely interesting, not just professionally relevant. I also pick up languages, which at this point is partly habit.
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
          <a href="https://github.com/wopsmops/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2" style={{ color: "var(--accent)", fontSize: 13 }}>
            <Github size={14} /> github
          </a>
          <a href="https://www.linkedin.com/in/aveklich/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2" style={{ color: "var(--accent)", fontSize: 13 }}>
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

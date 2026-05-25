import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const { t } = useTranslation();
  return (
    <PageTransition>
      <section className="mx-auto max-w-2xl px-4 py-16 md:px-6 md:py-24">
        <h1 style={{ fontSize: 28, fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
          {t("contact.page_title")}
        </h1>
        <p className="mt-3" style={{ color: "var(--text-subtitle)", fontSize: 14 }}>
          {t("contact.subtitle")}
        </p>

        <div className="mt-8">
          <a
            href="mailto:artem@veklich.com"
            style={{ color: "var(--accent)", fontSize: 16, fontWeight: 500 }}
          >
            artem@veklich.com
          </a>
        </div>

        <div className="mt-8 flex gap-5">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2" style={{ color: "var(--accent)", fontSize: 13 }}>
            <Github size={14} /> github
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2" style={{ color: "var(--accent)", fontSize: 13 }}>
            <Linkedin size={14} /> linkedin
          </a>
        </div>
      </section>
    </PageTransition>
  );
}

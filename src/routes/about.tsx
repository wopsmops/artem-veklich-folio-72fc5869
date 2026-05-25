import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { Avatar } from "@/components/Avatar";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/about")({ component: AboutPage });

const skillGroups: Record<string, string[]> = {
  domains: ["rail", "aerospace", "networks", "hardware"],
  languages: ["python", "typescript", "c", "matlab"],
  tools: ["fastapi", "linux", "kicad", "wireguard"],
};

function AboutPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <Avatar size={80} />
        <h1 className="mt-6" style={{ fontSize: 24, fontWeight: 500, color: "var(--text-primary)" }}>
          about
        </h1>
        <p className="mt-4" style={{ color: "var(--text-primary)", fontSize: 14, lineHeight: 1.7 }}>
          I'm an engineer working across rail systems, RF, and applied hardware.
          I like building things that connect physical infrastructure to legible
          software — typically self-hosted, usually over-engineered.
        </p>

        <div className="mt-10 space-y-6">
          {Object.entries(skillGroups).map(([group, items]) => (
            <div key={group}>
              <div
                style={{
                  color: "var(--text-muted)",
                  letterSpacing: "0.1em",
                  fontSize: 11,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {group}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: 11,
                      borderRadius: 3,
                      padding: "3px 8px",
                      color: "var(--accent)",
                      border: "1px solid var(--accent-border)",
                      background: "var(--accent-tint)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex gap-5">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2" style={{ color: "var(--accent)", fontSize: 13 }}>
            <Github size={14} /> github
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2" style={{ color: "var(--accent)", fontSize: 13 }}>
            <Linkedin size={14} /> linkedin
          </a>
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2" style={{ color: "var(--accent)", fontSize: 13 }}>
            <Mail size={14} /> email
          </a>
        </div>
      </section>
    </PageTransition>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-2xl px-4 py-16 md:px-6 md:py-24">
        <h1 style={{ fontSize: 28, fontWeight: 600, color: "#EFEFEF", letterSpacing: "-0.02em" }}>
          get in touch
        </h1>
        <p className="mt-3" style={{ color: "#585858", fontSize: 14 }}>
          best reached by email. happy to chat about rail, RF, or anything connected.
        </p>

        <div className="mt-8">
          <a
            href="mailto:hello@example.com"
            style={{ color: "#F59E0B", fontSize: 16, fontWeight: 500 }}
          >
            hello@example.com
          </a>
        </div>

        <div className="mt-8 flex gap-5">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2" style={{ color: "#F59E0B", fontSize: 13 }}>
            <Github size={14} /> github
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2" style={{ color: "#F59E0B", fontSize: 13 }}>
            <Linkedin size={14} /> linkedin
          </a>
        </div>
      </section>
    </PageTransition>
  );
}

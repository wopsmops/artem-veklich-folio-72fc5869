import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HeroCanvas } from "@/components/HeroCanvas";
import { Typewriter } from "@/components/Typewriter";
import { ProjectCard } from "@/components/ProjectCard";
import { PageTransition } from "@/components/PageTransition";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { t } = useTranslation();
  const featured = projects.slice(0, 3);
  return (
    <PageTransition>
      <section className="relative overflow-hidden">
        <HeroCanvas />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28 flex flex-col md:flex-row items-start gap-8 lg:gap-12">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
            }}
            className="flex flex-col items-start gap-5 md:flex-1 md:min-w-0"
          >
            {[
              <h1
                key="h"
                style={{
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
                className="text-[32px] md:text-[42px]"
              >
                artem veklich
              </h1>,
              <div key="t" className="min-h-[24px]">
                <Typewriter
                  words={[
                    "networks",
                    "transport systems",
                    "hardware",
                    "connected systems",
                    "applied engineering",
                  ]}
                />
              </div>,
              <p
                key="intro"
                style={{
                  fontSize: 15,
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  maxWidth: 480,
                  marginTop: 16,
                  marginBottom: 24,
                }}
              >
                {t("hero.intro")}
              </p>,
              <div key="c" className="flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="rounded-md px-4 py-2 text-sm transition-colors"
                  style={{ background: "var(--accent)", color: "#0F1117", fontWeight: 500 }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-bright)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "var(--accent)")}
                >
                  {t("hero.cta_projects")}
                </Link>
                <Link
                  to="/contact"
                  className="rounded-md px-4 py-2 text-sm"
                  style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                >
                  {t("hero.cta_contact")}
                </Link>
              </div>,
            ].map((child, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                {child}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex shrink-0 items-start justify-center md:justify-end"
          >
            <img
              src="/portrait.png"
              alt="artem veklich"
              className="w-[180px] lg:w-[260px] h-auto"
              style={{
                borderRadius: 12,
                border: "1.5px solid rgba(245, 158, 11, 0.3)",
                boxShadow: "0 0 32px rgba(245, 158, 11, 0.08)",
                objectFit: "cover",
              }}
            />
          </motion.div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid var(--border)" }} />

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div
          style={{
            color: "var(--text-section-label)",
            letterSpacing: "0.08em",
            fontSize: 11,
            fontWeight: 500,
            textTransform: "uppercase",
          }}
        >
          featured projects
        </div>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

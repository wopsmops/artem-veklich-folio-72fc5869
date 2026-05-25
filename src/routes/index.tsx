import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HeroCanvas } from "@/components/HeroCanvas";
import { Typewriter } from "@/components/Typewriter";
import { Avatar } from "@/components/Avatar";
import { ProjectCard } from "@/components/ProjectCard";
import { PageTransition } from "@/components/PageTransition";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = projects.slice(0, 3);
  return (
    <PageTransition>
      <section className="relative overflow-hidden">
        <HeroCanvas />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
            }}
            className="flex flex-col items-start gap-5"
          >
            {[
              <Avatar key="a" />,
              <h1
                key="h"
                style={{
                  fontWeight: 600,
                  color: "#EFEFEF",
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
              <div key="c" className="mt-3 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="rounded-md px-4 py-2 text-sm transition-colors"
                  style={{ background: "#F59E0B", color: "#0F1117", fontWeight: 500 }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#FFD528")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#F59E0B")}
                >
                  view projects →
                </Link>
                <Link
                  to="/contact"
                  className="rounded-md px-4 py-2 text-sm"
                  style={{ border: "1px solid #2a2a2a", color: "#EFEFEF" }}
                >
                  get in touch
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
        </div>
      </section>

      <div style={{ borderTop: "1px solid #1e1e1e" }} />

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div
          style={{
            color: "#585858",
            letterSpacing: "0.1em",
            fontSize: 11,
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

import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CONTEXT_TAGS, type Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="group block overflow-hidden rounded-lg transition-colors"
        style={{
          background: "var(--bg-surface)",
          border: "1px solid var(--border)",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-hover)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)")
        }
      >
        <div
          className="flex items-center justify-center"
          style={{
            height: 120,
            background: "var(--bg-image-placeholder)",
            color: "var(--text-placeholder)",
            fontSize: 11,
          }}
        >
          [ image ]
        </div>
        <div style={{ padding: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>
            {project.title}
          </div>
          <p
            className="line-clamp-2"
            style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}
          >
            {project.desc}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((t) => {
              const ctx = CONTEXT_TAGS.has(t);
              return (
                <span
                  key={t}
                  style={{
                    fontSize: 10,
                    borderRadius: 3,
                    padding: "2px 6px",
                    color: ctx ? "var(--text-muted)" : "var(--accent)",
                    border: `1px solid ${ctx ? "var(--border-subtle)" : "var(--accent-border)"}`,
                    background: ctx ? "transparent" : "var(--accent-tint)",
                  }}
                >
                  {t}
                </span>
              );
            })}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

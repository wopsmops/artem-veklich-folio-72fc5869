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
          background: "#13151c",
          border: "1px solid #1e1e1e",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.borderColor = "#2a2a2a")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.borderColor = "#1e1e1e")
        }
      >
        <div
          className="flex items-center justify-center"
          style={{
            height: 120,
            background: "#16181f",
            color: "#333",
            fontSize: 11,
          }}
        >
          [ image ]
        </div>
        <div style={{ padding: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: "#EFEFEF" }}>
            {project.title}
          </div>
          <p
            className="line-clamp-2"
            style={{ fontSize: 11, color: "#585858", marginTop: 4 }}
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
                    color: ctx ? "#585858" : "#F59E0B",
                    border: `1px solid ${ctx ? "#222" : "#F59E0B33"}`,
                    background: ctx ? "transparent" : "#F59E0B0a",
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

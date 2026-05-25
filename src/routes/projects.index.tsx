import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { PageTransition } from "@/components/PageTransition";
import { ALL_FILTERS, projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/")({ component: ProjectsPage });

function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const list = filter === "all" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <h1 style={{ fontSize: 24, fontWeight: 500, color: "#EFEFEF", marginBottom: 8 }}>
          projects
        </h1>
        <p style={{ color: "#585858", fontSize: 14 }}>
          a catalogue of things i've built
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {ALL_FILTERS.map((t) => {
            const active = filter === t;
            return (
              <button
                key={t}
                onClick={() => setFilter(t)}
                style={{
                  fontSize: 11,
                  padding: "4px 10px",
                  borderRadius: 4,
                  border: `1px solid ${active ? "#F59E0B44" : "#222"}`,
                  background: active ? "#F59E0B11" : "transparent",
                  color: active ? "#FFD528" : "#585858",
                }}
              >
                {t}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {list.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

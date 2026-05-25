import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Github, ExternalLink } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { CONTEXT_TAGS, projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetail,
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <Link to="/projects" style={{ color: "var(--accent)", fontSize: 13 }}>
        ← projects
      </Link>
      <p className="mt-6" style={{ color: "var(--text-muted)" }}>project not found.</p>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <p style={{ color: "var(--text-primary)" }}>error loading project</p>
      <button onClick={reset} style={{ color: "var(--accent)", fontSize: 13, marginTop: 12 }}>retry</button>
      <pre className="mt-2 text-xs" style={{ color: "var(--text-muted)" }}>{error.message}</pre>
    </div>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <PageTransition>
      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <Link to="/projects" style={{ color: "var(--accent)", fontSize: 13 }}>
          ← projects
        </Link>

        <h1 className="mt-6" style={{ fontSize: 32, color: "var(--text-primary)", fontWeight: 600, letterSpacing: "-0.02em" }}>
          {project.title}
        </h1>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((t: string) => {
            const ctx = CONTEXT_TAGS.has(t);
            return (
              <span
                key={t}
                style={{
                  fontSize: 10,
                  borderRadius: 3,
                  padding: "2px 6px",
                  color: ctx ? "var(--text-context-tag)" : "var(--accent)",
                  border: `1px solid ${ctx ? "var(--border-subtle)" : "var(--accent-border)"}`,
                  background: ctx ? "transparent" : "var(--accent-tint)",
                }}
              >
                {t}
              </span>
            );
          })}
        </div>

        <div
          className="mt-6 flex items-center justify-center rounded-lg"
          style={{
            height: 280,
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
            color: "var(--text-placeholder)",
            fontSize: 12,
          }}
        >
          [ image ]
        </div>

        <p className="mt-6" style={{ color: "var(--text-primary)", fontSize: 14, lineHeight: 1.7 }}>
          {project.body ?? project.desc}
        </p>

        <div className="mt-8 flex flex-wrap gap-5">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
              style={{ color: "var(--accent)", fontSize: 13 }}
            >
              <Github size={14} /> view repo
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
              style={{ color: "var(--accent)", fontSize: 13 }}
            >
              <ExternalLink size={14} /> live demo
            </a>
          )}
        </div>
      </section>
    </PageTransition>
  );
}

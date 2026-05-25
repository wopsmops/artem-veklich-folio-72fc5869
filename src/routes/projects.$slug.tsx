import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { PageTransition } from "@/components/PageTransition";
import { CONTEXT_TAGS } from "@/lib/projects";
import { projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetail,
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw redirect({ to: "/projects" });
    return { project };
  },
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <p style={{ color: "var(--text-primary)" }}>error loading project</p>
      <button onClick={reset} style={{ color: "var(--accent)", fontSize: 13, marginTop: 12 }}>
        retry
      </button>
      <pre className="mt-2 text-xs" style={{ color: "var(--text-muted)" }}>
        {error.message}
      </pre>
    </div>
  ),
});

function TagPills({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((t) => {
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
  );
}

function ToolsBlock({ tools }: { tools: string[] }) {
  if (!tools.length) return null;
  return (
    <div>
      <div
        style={{
          fontSize: 11,
          color: "#585858",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: 8,
        }}
      >
        tools used
      </div>
      <div className="flex flex-wrap" style={{ gap: 6 }}>
        {tools.map((tool) => (
          <span
            key={tool}
            style={{
              fontSize: 11,
              padding: "3px 9px",
              borderRadius: 4,
              border: "1px solid #2a2a2a",
              color: "#888",
              background: "transparent",
              whiteSpace: "nowrap",
            }}
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

function LinksRow({ links }: { links: Project["links"] }) {
  const entries: { key: keyof Project["links"]; label: string; url?: string; primary?: boolean }[] = [
    { key: "github", label: "View repo", url: links.github },
    { key: "demo", label: "Live demo", url: links.demo },
    { key: "video", label: "Watch demo", url: links.video },
    { key: "report", label: "Read report", url: links.report, primary: true },
  ];
  const visible = entries.filter((e) => !!e.url);
  if (!visible.length) return null;

  return (
    <div className="flex flex-wrap" style={{ gap: 8 }}>
      {visible.map((e) => {
        const primaryStyle: React.CSSProperties = {
          background: "#F59E0B",
          color: "#0F1117",
          border: "none",
        };
        const secondaryStyle: React.CSSProperties = {
          background: "transparent",
          color: "var(--text-primary)",
          border: "1px solid #2a2a2a",
        };
        return (
          <a
            key={e.key}
            href={e.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center"
            style={{
              padding: "7px 14px",
              borderRadius: 5,
              fontSize: 13,
              gap: 6,
              textDecoration: "none",
              ...(e.primary ? primaryStyle : secondaryStyle),
            }}
          >
            {e.label}
          </a>
        );
      })}
    </div>
  );
}

function HeroImage({ src }: { src?: string }) {
  const common: React.CSSProperties = {
    width: "100%",
    objectFit: "cover",
    borderRadius: 10,
    border: "1px solid #1e1e1e",
  };
  if (src) {
    return <img src={src} alt="" style={{ ...common, height: 340 }} className="md:h-[340px]" />;
  }
  return (
    <div
      style={{
        ...common,
        height: 340,
        background: "#13151c",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#333",
        fontSize: 12,
      }}
    >
      [ hero image ]
    </div>
  );
}

function Sections({ sections }: { sections: Project["sections"] }) {
  return (
    <div>
      {sections.map((s, i) => (
        <div key={i} style={{ marginTop: 36 }}>
          <h2
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: "var(--text-primary)",
              marginBottom: 10,
              paddingBottom: 8,
              borderBottom: "1px solid var(--border)",
            }}
          >
            {s.heading}
          </h2>
          <p style={{ fontSize: 14, color: "#888", lineHeight: 1.75 }}>{s.body}</p>
        </div>
      ))}
    </div>
  );
}

function Gallery({ gallery }: { gallery: Project["gallery"] }) {
  if (!gallery.length) return null;
  return (
    <div style={{ marginTop: 40 }}>
      <div
        style={{
          fontSize: 11,
          color: "#585858",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: 14,
        }}
      >
        gallery
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 16 }}>
        {gallery.map((g, i) => (
          <div key={i}>
            <img
              src={g.src}
              alt={g.caption}
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                objectFit: "cover",
                borderRadius: 8,
                border: "1px solid #1e1e1e",
              }}
            />
            <div
              style={{
                fontSize: 11,
                color: "#585858",
                marginTop: 6,
                textAlign: "center",
              }}
            >
              {g.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  const titleBase: React.CSSProperties = {
    fontWeight: 600,
    color: "var(--text-primary)",
    letterSpacing: "-0.02em",
    marginBottom: 12,
  };

  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <Link to="/projects" style={{ color: "var(--accent)", fontSize: 13 }}>
          ← projects
        </Link>

        {/* MOBILE LAYOUT */}
        <div className="md:hidden" style={{ marginTop: 24 }}>
          <h1 style={{ ...titleBase, fontSize: 24 }}>{project.title}</h1>
          <div style={{ marginBottom: 20 }}>
            <TagPills tags={project.tags} />
          </div>
          <div style={{ marginBottom: 20 }}>
            {project.heroImage ? (
              <img
                src={project.heroImage}
                alt=""
                style={{
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                  borderRadius: 10,
                  border: "1px solid #1e1e1e",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: 220,
                  background: "#13151c",
                  borderRadius: 10,
                  border: "1px solid #1e1e1e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#333",
                  fontSize: 12,
                }}
              >
                [ hero image ]
              </div>
            )}
          </div>
          <div style={{ marginBottom: 20 }}>
            <ToolsBlock tools={project.tools} />
          </div>
          <LinksRow links={project.links} />
          <Sections sections={project.sections} />
          <Gallery gallery={project.gallery} />
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:block" style={{ marginTop: 24 }}>
          <div className="flex" style={{ alignItems: "flex-start", gap: 48 }}>
            <div style={{ flex: 2, minWidth: 0 }}>
              <h1 style={{ ...titleBase, fontSize: 28 }}>{project.title}</h1>
              <div style={{ marginBottom: 20 }}>
                <TagPills tags={project.tags} />
              </div>
              <ToolsBlock tools={project.tools} />
              <div style={{ marginTop: 24 }}>
                <LinksRow links={project.links} />
              </div>
            </div>
            <div style={{ flex: 3 }}>
              <HeroImage src={project.heroImage} />
            </div>
          </div>

          <Sections sections={project.sections} />
          <Gallery gallery={project.gallery} />
        </div>
      </section>
    </PageTransition>
  );
}

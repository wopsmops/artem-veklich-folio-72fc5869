import { Link, useRouterState } from "@tanstack/react-router";

const items = [
  { to: "/", label: "home" },
  { to: "/projects", label: "projects" },
  { to: "/experience", label: "experience" },
  { to: "/about", label: "about" },
  { to: "/contact", label: "contact" },
] as const;

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(to + "/");

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: "var(--bg-nav)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          height: 2,
          background:
            "linear-gradient(90deg, var(--accent) 0%, var(--accent-bright) 50%, var(--accent) 100%)",
        }}
      />
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 md:px-6">
        <Link
          to="/"
          className="shrink-0"
          style={{ fontWeight: 500, fontSize: 15, color: "var(--text-primary)" }}
        >
          artem veklich
        </Link>
        <nav className="no-scrollbar ml-auto flex gap-1.5 overflow-x-auto md:gap-2">
          {items.map((it) => {
            const active = isActive(it.to);
            return (
              <Link
                key={it.to}
                to={it.to}
                className="shrink-0 rounded-md transition-colors"
                style={{
                  fontSize: 12,
                  padding: "4px 10px",
                  border: `1px solid ${active ? "var(--accent-active-border)" : "transparent"}`,
                  background: active ? "var(--accent-active-bg)" : "transparent",
                  color: active ? "var(--accent-bright)" : "var(--text-muted)",
                }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                }}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

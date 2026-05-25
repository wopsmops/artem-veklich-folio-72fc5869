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
      style={{ background: "#0F1117ee", backdropFilter: "blur(8px)" }}
    >
      <div
        style={{
          height: 2,
          background:
            "linear-gradient(90deg, #F59E0B 0%, #FFD528 50%, #F59E0B 100%)",
        }}
      />
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 md:px-6">
        <Link
          to="/"
          className="shrink-0"
          style={{ fontWeight: 500, fontSize: 15, color: "#EFEFEF" }}
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
                  border: `1px solid ${active ? "#F59E0B44" : "transparent"}`,
                  background: active ? "#F59E0B11" : "transparent",
                  color: active ? "#FFD528" : "#585858",
                }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLAnchorElement).style.color = "#EFEFEF";
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLAnchorElement).style.color = "#585858";
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

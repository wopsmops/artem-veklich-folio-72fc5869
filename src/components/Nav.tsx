import { Link, useRouterState } from "@tanstack/react-router";
import { Home, FolderOpen, Briefcase, User, Mail } from "lucide-react";
import type { ComponentType } from "react";

const items: { to: string; label: string; icon: ComponentType<{ size?: number }> }[] = [
  { to: "/", label: "home", icon: Home },
  { to: "/projects", label: "projects", icon: FolderOpen },
  { to: "/experience", label: "experience", icon: Briefcase },
  { to: "/about", label: "about", icon: User },
  { to: "/contact", label: "contact", icon: Mail },
];

function useIsActive() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(to + "/");
}

export function Nav() {
  const isActive = useIsActive();

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
        {/* Desktop pills only */}
        <nav className="no-scrollbar ml-auto hidden gap-2 overflow-x-auto md:flex">
          {items.map((it) => {
            const active = isActive(it.to);
            return (
              <Link
                key={it.to}
                to={it.to}
                className="shrink-0 rounded-md transition-colors"
                style={{
                  fontSize: 13,
                  padding: "5px 12px",
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

export function MobileTabBar() {
  const isActive = useIsActive();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden"
      style={{
        height: 56,
        background: "#13151c",
        borderTop: "1px solid #1e1e1e",
      }}
    >
      {items.map((it) => {
        const active = isActive(it.to);
        const color = active ? "#F59E0B" : "#585858";
        const Icon = it.icon;
        return (
          <Link
            key={it.to}
            to={it.to}
            className="relative flex flex-1 flex-col items-center justify-center gap-1"
            style={{ color }}
          >
            {active && (
              <span
                className="absolute"
                style={{
                  top: 6,
                  width: 4,
                  height: 4,
                  borderRadius: 999,
                  background: "#F59E0B",
                }}
              />
            )}
            <Icon size={18} />
            <span style={{ fontSize: 9, lineHeight: 1 }}>{it.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

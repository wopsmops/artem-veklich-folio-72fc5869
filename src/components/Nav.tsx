import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Sun, Moon } from "lucide-react";

const LANGS = ["en", "uk", "fr"] as const;
type Lang = (typeof LANGS)[number];

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { t, i18n } = useTranslation();

  const items = [
    { to: "/", label: t("nav.home") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/experience", label: t("nav.experience") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(to + "/");

  const [lang, setLang] = useState<Lang>(() => (i18n.language?.slice(0, 2) as Lang) || "en");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  }, []);

  const changeLang = (l: Lang) => {
    setLang(l);
    i18n.changeLanguage(l);
    try { localStorage.setItem("av_language", l); } catch {}
  };

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    try { localStorage.setItem("av_theme", next ? "dark" : "light"); } catch {}
    window.dispatchEvent(new Event("av-theme-change"));
  };

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

        <div className="flex shrink-0 items-center gap-3">
          <div className="flex items-center gap-1">
            {LANGS.map((l) => {
              const active = lang === l;
              return (
                <button
                  key={l}
                  onClick={() => changeLang(l)}
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    padding: "4px 8px",
                    borderRadius: 4,
                    textTransform: "uppercase",
                    color: active ? "#FFD528" : "var(--text-muted)",
                    border: `1px solid ${active ? "#F59E0B44" : "transparent"}`,
                    background: active ? "#F59E0B11" : "transparent",
                    transition: "color 150ms",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    if (!active) (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)";
                  }}
                >
                  {l}
                </button>
              );
            })}
          </div>

          <button
            onClick={toggleTheme}
            aria-label="toggle theme"
            style={{
              width: 28,
              height: 28,
              borderRadius: 4,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-muted)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              transition: "color 150ms, background 150ms",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
              (e.currentTarget as HTMLButtonElement).style.background = "var(--nav-icon-hover-bg)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)";
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            }}
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>
    </header>
  );
}

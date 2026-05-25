import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Sun, Moon, Menu, X } from "lucide-react";

const LANGS = ["en", "uk", "fr"] as const;
type Lang = (typeof LANGS)[number];

const FLAG: Record<Lang, string> = { en: "🇬🇧", uk: "🇺🇦", fr: "🇫🇷" };
const LANG_LABEL: Record<Lang, string> = { en: "English", uk: "Українська", fr: "Français" };

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
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  }, []);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (langOpen && langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [langOpen, menuOpen]);

  const changeLang = (l: Lang) => {
    setLang(l);
    i18n.changeLanguage(l);
    try { localStorage.setItem("av_language", l); } catch {}
    setLangOpen(false);
  };

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    try { localStorage.setItem("av_theme", next ? "dark" : "light"); } catch {}
    window.dispatchEvent(new Event("av-theme-change"));
  };

  const iconBtnHover = (e: React.MouseEvent<HTMLButtonElement>, on: boolean) => {
    const el = e.currentTarget;
    el.style.color = on ? "var(--text-primary)" : "var(--text-muted)";
    el.style.background = on ? "var(--nav-icon-hover-bg)" : "transparent";
  };

  const iconBtnStyle: React.CSSProperties = {
    width: 32,
    height: 32,
    borderRadius: 6,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--text-muted)",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    transition: "color 150ms, background 150ms",
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

        {/* Desktop nav pills */}
        <nav className="no-scrollbar ml-auto hidden md:flex gap-2">
          {items.map((it) => {
            const active = isActive(it.to);
            return (
              <Link
                key={it.to}
                to={it.to}
                className="shrink-0 rounded-md transition-colors"
                style={{
                  fontSize: 14,
                  padding: "6px 16px",
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

        <div className="ml-auto md:ml-0 flex shrink-0 items-center gap-2">
          {/* Language flag dropdown */}
          <div ref={langRef} style={{ position: "relative" }}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              aria-label="change language"
              style={{ ...iconBtnStyle, fontSize: 18, lineHeight: 1 }}
              onMouseEnter={(e) => iconBtnHover(e, true)}
              onMouseLeave={(e) => iconBtnHover(e, false)}
            >
              <span suppressHydrationWarning>{FLAG[lang]}</span>
            </button>
            {langOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 6px)",
                  right: 0,
                  minWidth: 180,
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "4px 0",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
                  zIndex: 60,
                }}
              >
                {LANGS.map((l) => {
                  const active = lang === l;
                  return (
                    <button
                      key={l}
                      onClick={() => changeLang(l)}
                      style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        gap: 10,
                        padding: "8px 14px",
                        fontSize: 13,
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        color: active ? "#FFD528" : "var(--text-primary)",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--nav-icon-hover-bg)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "transparent")}
                    >
                      <span style={{ fontSize: 16 }}>{FLAG[l]}</span>
                      <span>{LANG_LABEL[l]}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="toggle theme"
            style={iconBtnStyle}
            onMouseEnter={(e) => iconBtnHover(e, true)}
            onMouseLeave={(e) => iconBtnHover(e, false)}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="menu"
            className="md:hidden"
            style={iconBtnStyle}
            onMouseEnter={(e) => iconBtnHover(e, true)}
            onMouseLeave={(e) => iconBtnHover(e, false)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown nav panel */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--bg-surface)",
            borderBottom: "1px solid var(--border)",
            zIndex: 55,
            boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          }}
        >
          {items.map((it) => {
            const active = isActive(it.to);
            return (
              <Link
                key={it.to}
                to={it.to}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  width: "100%",
                  padding: active ? "14px 20px 14px 18px" : "14px 20px",
                  fontSize: 17,
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  color: active ? "#FFD528" : "var(--text-primary)",
                  borderLeft: active ? "2px solid var(--accent)" : "2px solid transparent",
                }}
              >
                {it.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

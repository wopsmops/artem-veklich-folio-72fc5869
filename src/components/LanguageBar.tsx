import type { Language } from "@/data/languages";

export function LanguageBar({ language }: { language: Language }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10, width: "100%" }}>
      <span style={{ fontSize: 17, width: 24, textAlign: "center", flexShrink: 0, lineHeight: 1 }}>
        {language.flag}
      </span>
      <span
        style={{
          fontSize: 13,
          width: 90,
          flexShrink: 0,
          color: "var(--language-name, #EFEFEF)",
        }}
      >
        {language.name}
      </span>
      <div
        style={{
          flex: 1,
          height: 5,
          borderRadius: 3,
          overflow: "hidden",
          background: "var(--language-track, #1e1e1e)",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${language.fill}%`,
            background: "#F59E0B",
            borderRadius: 3,
          }}
        />
      </div>
      <span
        style={{
          fontSize: 11,
          color: "#585858",
          width: 52,
          textAlign: "right",
          flexShrink: 0,
          letterSpacing: "0.03em",
        }}
      >
        {language.level}
      </span>
    </div>
  );
}

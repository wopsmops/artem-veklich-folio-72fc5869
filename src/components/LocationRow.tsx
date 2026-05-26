import type { CSSProperties } from "react";

type Props = { style?: CSSProperties };

export function LocationRow({ style }: Props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        fontSize: 12,
        color: "#585858",
        letterSpacing: "0.01em",
        ...style,
      }}
    >
      <span>🇬🇧 Bath &amp; London</span>
      <span style={{ color: "#333333", padding: "0 2px" }}>•</span>
      <span>🇵🇱 Warsaw</span>
    </div>
  );
}

export function Avatar({ size = 52 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        border: "1.5px solid var(--accent-border)",
        background: "var(--bg-surface)",
        color: "var(--text-primary)",
        fontSize: size * 0.36,
        fontWeight: 500,
        letterSpacing: "0.02em",
      }}
    >
      AV
    </div>
  );
}

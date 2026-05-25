export function Portrait({ width = 240, className = "" }: { width?: number; className?: string }) {
  const mask = "linear-gradient(to bottom, black 40%, transparent 85%)";
  return (
    <img
      src="/portrait.png"
      alt="artem veklich"
      className={className}
      style={{
        width,
        height: "auto",
        display: "block",
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  );
}

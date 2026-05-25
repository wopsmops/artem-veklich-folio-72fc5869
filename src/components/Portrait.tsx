export function Portrait({ className = "" }: { className?: string }) {
  const mask = "linear-gradient(to bottom, black 40%, transparent 85%)";
  return (
    <img
      src="/portrait.png"
      alt="artem veklich"
      className={className}
      style={{
        height: "auto",
        display: "block",
        maskImage: mask,
        WebkitMaskImage: mask,
      }}
    />
  );
}

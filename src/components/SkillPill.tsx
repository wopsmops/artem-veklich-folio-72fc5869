import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import type { Skill } from "@/data/skills";

export function SkillPill({ skill }: { skill: Skill }) {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const linked = !!skill.projectTag;

  const base: React.CSSProperties = {
    fontSize: 11,
    padding: "4px 10px",
    borderRadius: 4,
    display: "inline-block",
    whiteSpace: "nowrap",
    userSelect: "none",
    fontFamily: "inherit",
    transition: "all 150ms ease",
  };

  if (!linked) {
    return (
      <span
        style={{
          ...base,
          border: "1px solid rgba(255, 255, 255, 0.09)",
          background: "transparent",
          color: "#888888",
          cursor: "default",
        }}
      >
        {skill.name}
      </span>
    );
  }

  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() =>
        navigate({ to: "/projects", search: { tag: skill.projectTag! } })
      }
      style={{
        ...base,
        border: `1px solid ${hover ? "rgba(245,158,11,0.8)" : "rgba(245, 158, 11, 0.33)"}`,
        background: hover ? "rgba(245,158,11,0.12)" : "rgba(245, 158, 11, 0.04)",
        color: "#F59E0B",
        cursor: "pointer",
        boxShadow: hover ? "0 0 10px rgba(245,158,11,0.15)" : "none",
      }}
    >
      {skill.name}
    </span>
  );
}

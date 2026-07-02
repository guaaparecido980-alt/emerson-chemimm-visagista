import React from "react";

interface PremiumCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export default function PremiumCard({
  children,
  className = "",
  glow = false,
}: PremiumCardProps) {
  return (
    <div
      className={`glass-panel glass-panel-hover relative overflow-hidden rounded-2xl p-6 md:p-8 ${
        glow ? "shadow-[0_0_20px_rgba(10,132,255,0.1)] border-[#0a84ff]/30" : ""
      } ${className}`}
    >
      {glow && (
        <div className="absolute -top-12 -left-12 h-24 w-24 rounded-full bg-[#0a84ff] opacity-10 blur-xl pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

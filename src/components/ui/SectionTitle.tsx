import React from "react";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16 flex flex-col ${
        isCenter ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-[#071b33] border border-[#0a84ff]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0a84ff]">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-[#f4f7fb] sm:text-4xl md:text-5xl max-w-3xl leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base md:text-lg text-[#a7b0be] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

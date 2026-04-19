import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import React from "react";

export function SectionPill({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white/80 backdrop-blur">
      {children}
    </span>
  );
}

export function GradientHeading({
  gradientText,
  rest,
  align = "center",
  size = "lg",
}: {
  gradientText: string;
  rest?: string;
  align?: "center" | "left";
  size?: "md" | "lg" | "xl";
}) {
  const sizes = {
    md: "text-3xl sm:text-4xl md:text-5xl",
    lg: "text-4xl sm:text-5xl md:text-6xl",
    xl: "text-5xl sm:text-6xl md:text-7xl",
  };
  return (
    <h2
      className={`font-extrabold leading-[1.05] tracking-tight ${sizes[size]} ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <span className="text-gradient">{gradientText}</span>
      {rest && <> {rest}</>}
    </h2>
  );
}

export function PrimaryButton({
  children,
  href,
  onClick,
  type,
  full,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  full?: boolean;
}) {
  const cls = `inline-flex ${
    full ? "w-full " : ""
  }items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#3355FF] to-[#4A73FF] px-6 py-3 font-semibold text-white btn-glow hover:brightness-110 transition`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children} <ArrowRight size={16} />
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} className={cls}>
      {children} <ArrowRight size={16} />
    </button>
  );
}

export function GhostButton({
  children,
  href,
  onClick,
  full,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  full?: boolean;
}) {
  const cls = `inline-flex ${
    full ? "w-full " : ""
  }items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/8 bg-[#0D1324] p-7 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function IconTile({
  icon: Icon,
  variant = "blue",
}: {
  icon: LucideIcon;
  variant?: "blue" | "green" | "pink" | "purple" | "orange";
}) {
  const grads: Record<string, string> = {
    blue: "from-[#5166FF] to-[#8A5FFF]",
    green: "from-[#10B981] to-[#059669]",
    pink: "from-[#EC4899] to-[#DB2777]",
    purple: "from-[#A855F7] to-[#7C3AED]",
    orange: "from-[#F59E0B] to-[#EA580C]",
  };
  return (
    <div
      className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${grads[variant]}`}
    >
      <Icon className="h-6 w-6 text-white" strokeWidth={2} />
    </div>
  );
}

export function CTABanner({
  title,
  subtitle,
  primary,
  secondary,
}: {
  title: string;
  subtitle: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="reveal rounded-3xl border border-white/10 bg-gradient-to-br from-[#0D1324] to-[#0A1430] p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white">
            {title}
          </h3>
          <p className="mt-3 text-white/70 max-w-xl">{subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <PrimaryButton href={primary.href}>{primary.label}</PrimaryButton>
          {secondary && (
            <GhostButton href={secondary.href}>{secondary.label}</GhostButton>
          )}
        </div>
      </div>
    </section>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  pill,
  gradientText,
  rest,
  subtitle,
}: {
  pill?: React.ReactNode;
  gradientText: string;
  rest?: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16 reveal">
      {pill && (
        <div className="mb-5">
          <SectionPill>{pill}</SectionPill>
        </div>
      )}
      <GradientHeading gradientText={gradientText} rest={rest} />
      {subtitle && (
        <p className="mt-5 text-white/70 text-base sm:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

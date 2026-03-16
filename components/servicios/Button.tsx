import React from "react";

export default function Button({
    href,
    children,
    variant = "gold",
    className = "",
}: {
    href: string;
    children: React.ReactNode;
    variant?: "gold" | "outline";
    className?: string;
}) {
    const base =
        "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium tracking-[0.10em] uppercase transition focus:outline-none";
    const styles =
        variant === "gold"
            ? "bg-[var(--gold)] text-black hover:bg-[var(--gold-light)]"
            : "border border-[rgba(201,168,76,0.4)] text-[var(--gold)] hover:bg-[rgba(201,168,76,0.06)]";

    return (
        <a
            href={href}
            className={`${base} ${styles} ${className}`}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
        >
            {children}
        </a>
    );
}
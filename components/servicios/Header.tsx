import React from "react";
import type { SiteConfig } from "./types";

function NavA({
    href,
    children,
    onClick,
}: {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
}) {
    return (
        <a
            href={href}
            onClick={onClick}
            className="header-link text-sm font-medium text-amber-100/80 hover:text-amber-100 transition font-[var(--font-dm-sans)] tracking-[0.06em]"
        >
            {children}
        </a>
    );
}

function Sep() {
    return <span className="select-none text-amber-100/35">|</span>;
}

export default function Header({
    site,
    menuOpen,
    setMenuOpen,
    whatsappGeneral,
}: {
    site: SiteConfig;
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    whatsappGeneral: string;
}) {
    return (
        <header className="bg-black/75 backdrop-blur border-b border-white/10 font-[var(--font-dm-sans)]">
            <div className="relative mx-auto h-20 max-w-6xl px-5">

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/25 to-transparent" />

                {/* LOGO */}
                <a
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="hidden sm:block absolute left-1/2 top-0 z-40 -translate-x-1/2 -translate-y-8"
                >
                    <img
                        src={site.logoSrc}
                        alt="Alex Estética"
                        className="h-24 w-24 sm:h-50 sm:w-50 object-contain drop-shadow-[0_0_35px_rgba(255,215,128,0.35)]"
                    />
                </a>

                {/* DESKTOP */}
                <div className="hidden sm:flex h-full items-center justify-between">

                    <nav className="flex items-center gap-4">
                        <NavA href="/sobre">Sobre Nosotros</NavA>
                        <Sep />
                        <NavA href="/#contacto">Contacto</NavA>
                    </nav>

                    <div className="w-[180px]" />

                    <div className="flex items-center gap-2">

                        <nav className="flex items-center gap-4">
                            <NavA href="/servicios">Tratamientos</NavA>
                            <Sep />
                            <NavA href="/curso">Curso</NavA>
                        </nav>

                        <a
                            href={whatsappGeneral}
                            className="ml-2 rounded-full border border-amber-300/25 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 px-5 py-2 text-sm font-medium tracking-[0.08em] text-black hover:brightness-110 font-[var(--font-dm-sans)]"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {site.ctaLabel}
                        </a>

                    </div>
                </div>

                {/* MOBILE */}
                <div className="flex sm:hidden h-full items-center justify-between">

                    <a
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2"
                    >
                        <img
                            src={site.logoSrc}
                            alt="Alex Estética"
                            className="h-12 w-12 object-contain drop-shadow-[0_0_18px_rgba(255,215,128,0.35)]"
                        />

                        <div className="leading-tight">
                            <div className="text-sm font-semibold text-amber-100 font-[var(--font-cormorant)] tracking-[0.05em]">
                                {site.brand}
                            </div>

                            <div className="text-[11px] text-amber-100/60 font-[var(--font-dm-sans)]">
                                {site.city}
                            </div>
                        </div>
                    </a>

                    <div className="flex items-center gap-2">

                        <a
                            href={whatsappGeneral}
                            className="rounded-full border border-amber-300/25 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 px-4 py-2 text-xs font-medium tracking-[0.08em] text-black hover:brightness-110 font-[var(--font-dm-sans)]"
                            target="_blank"
                            rel="noreferrer"
                        >
                            WhatsApp
                        </a>

                        <button
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
                            onClick={() => setMenuOpen((v) => !v)}
                        >
                            <span className="flex flex-col gap-1">
                                <span className="h-0.5 w-5 rounded bg-amber-200" />
                                <span className="h-0.5 w-5 rounded bg-amber-200" />
                                <span className="h-0.5 w-5 rounded bg-amber-200" />
                            </span>
                        </button>

                    </div>
                </div>
            </div>

            {menuOpen ? (
                <div className="border-t border-white/10 bg-black/60 backdrop-blur sm:hidden font-[var(--font-dm-sans)]">
                    <div className="mx-auto max-w-6xl px-5 py-3">

                        <div className="flex flex-col gap-1">

                            {[
                                { href: "/", label: "Inicio" },
                                { href: "/sobre", label: "Sobre Nosotros" },
                                { href: "/servicios", label: "Tratamientos" },
                                { href: "/curso", label: "Curso" },
                                { href: "/#contacto", label: "Contacto" },
                            ].map((x) => (
                                <a
                                    key={x.href}
                                    href={x.href}
                                    className="rounded-xl px-3 py-2 text-sm text-amber-100/90 hover:bg-white/5 tracking-[0.05em]"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {x.label}
                                </a>
                            ))}

                        </div>

                    </div>
                </div>
            ) : null}
        </header>
    );
}
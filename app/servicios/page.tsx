"use client";

import React from "react";

const SITE = {
    brand: "Alex Estética",
    city: "Gran Canaria",
    phone: "34600111222",
    logoSrc: "/alex-logo.png",

    // ✅ HERO
    tratamientosHeroImg: "/tratamientos-hero.jpg",

    // CTA texto
    ctaLabel: "Agendar Cita por WhatsApp",
};

function waLink(text: string) {
    return `https://wa.me/${SITE.phone}?text=${encodeURIComponent(text)}`;
}

function Button({
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
        "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-amber-300/30";
    const styles =
        variant === "gold"
            ? "bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 text-black hover:brightness-110 shadow-[0_10px_30px_rgba(255,215,128,0.18)]"
            : "border border-amber-300/30 bg-white/5 text-amber-100 hover:bg-white/10";
    return (
        <a href={href} className={`${base} ${styles} ${className}`} target="_blank" rel="noreferrer">
            {children}
        </a>
    );
}

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
            className="text-sm font-medium text-amber-100/80 hover:text-amber-100 transition"
        >
            {children}
        </a>
    );
}

function Sep() {
    return <span className="select-none text-amber-100/35">|</span>;
}

/* ===== Chips debajo del encabezado ===== */
function MiniStat({
    icon,
    title,
    subtitle,
}: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
}) {
    return (
        <div className="flex items-center gap-3 rounded-2xl border border-amber-300/15 bg-black/35 px-4 py-3 backdrop-blur">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-amber-300/20 bg-black/40">
                {icon}
            </div>
            <div className="leading-tight">
                <div className="text-sm font-semibold text-amber-100">{title}</div>
                <div className="text-xs text-amber-100/60">{subtitle}</div>
            </div>
        </div>
    );
}

function IconPremium() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-200" fill="none">
            <path d="M4 10l4 3 4-7 4 7 4-3v9H4v-9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
    );
}
function IconTech() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-200" fill="none">
            <path d="M9 2h6v3H9V2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M8 5h8l2 4v11H6V9l2-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M9 12h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    );
}
function IconSafe() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-200" fill="none">
            <path d="M12 3l7 4v6c0 5-3 8-7 9-4-1-7-4-7-9V7l7-4z" stroke="currentColor" strokeWidth="1.6" />
            <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

/* ===== Iconos dorados para cada card (como tu imagen) ===== */
function CardIcon({ kind }: { kind: "laser" | "facial" | "body" | "vip" }) {
    const common = "h-6 w-6 text-amber-200";
    if (kind === "laser")
        return (
            <svg viewBox="0 0 24 24" className={common} fill="none">
                <path d="M7 14l10-10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M9 6l2 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M6 17c2.5 2.5 7.5 2.5 10 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
        );
    if (kind === "facial")
        return (
            <svg viewBox="0 0 24 24" className={common} fill="none">
                <path d="M12 3c4 0 7 3 7 7 0 6-3 10-7 11-4-1-7-5-7-11 0-4 3-7 7-7z" stroke="currentColor" strokeWidth="1.7" />
                <path d="M9 11c1.5 1.5 4.5 1.5 6 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
        );
    if (kind === "body")
        return (
            <svg viewBox="0 0 24 24" className={common} fill="none">
                <path d="M8 6c1-2 2-3 4-3s3 1 4 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M7 9c1 2 1 8 5 12 4-4 4-10 5-12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
            <path d="M12 3l2.7 5.6 6.1.9-4.4 4.2 1 6.1L12 17.8 6.6 19.8l1-6.1-4.4-4.2 6.1-.9L12 3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
    );
}

/* ===== Card EXACTA: icono+título+sub arriba, imagen abajo (sin CTA) ===== */
function ServiceCard({
    title,
    subtitle,
    imageSrc,
    iconKind,
}: {
    title: string;
    subtitle: string;
    imageSrc: string;
    iconKind: "laser" | "facial" | "body" | "vip";
}) {
    return (
        <div className="group overflow-hidden rounded-[1.75rem] border border-amber-300/15 bg-black/35 backdrop-blur">
            {/* Top content */}
            <div className="px-6 pt-6 pb-4">
                <div className="mb-3 flex items-center justify-center">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl border border-amber-300/20 bg-black/50">
                        <CardIcon kind={iconKind} />
                    </div>
                </div>

                <div className="text-center">
                    <div className="text-lg font-semibold text-amber-100">{title}</div>
                    <div className="mt-2 text-sm text-amber-100/65">{subtitle}</div>
                </div>
            </div>

            {/* Divider glow */}
            <div className="mx-6 h-px bg-gradient-to-r from-transparent via-amber-200/20 to-transparent" />

            {/* Bottom image (como en la referencia) */}
            <div className="relative mt-4 aspect-[16/10] overflow-hidden">
                <img
                    src={imageSrc}
                    alt={title}
                    className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                />
                {/* Overlay suave para look premium */}
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65),transparent_65%)]" />
            </div>
        </div>
    );
}

export default function ServiciosPage() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const whatsappGeneral = waLink(
        `Hola! Quiero información de tratamientos en ${SITE.brand} (precios y disponibilidad).`
    );

    const whatsappCatalogo = waLink(
        "Hola! ¿Me puedes enviar el catálogo completo de tratamientos y precios?"
    );

    // ✅ Tus imágenes reales (las que hicimos en 16:10)
    const services = [
        {
            title: "Depilación Láser",
            subtitle: "Piel suave y segura",
            imageSrc: "/servicios/laser.jpg",
            iconKind: "laser" as const,
        },
        {
            title: "Faciales Premium",
            subtitle: "Rejuvenecimiento",
            imageSrc: "/servicios/faciales.jpg",
            iconKind: "facial" as const,
        },
        {
            title: "Corporal & Reducción",
            subtitle: "Escultura corporal",
            imageSrc: "/servicios/corporales.jpg",
            iconKind: "body" as const,
        },
        {
            title: "Tratamientos VIP",
            subtitle: "Resultados visibles",
            imageSrc: "/servicios/asesoria.jpg",
            iconKind: "vip" as const,
        },
    ];

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Fondo dorado sutil */}
            <div className="pointer-events-none fixed inset-0 -z-30">
                <div className="absolute inset-0 bg-[radial-gradient(1000px_650px_at_20%_10%,rgba(255,215,128,0.10),transparent_60%),radial-gradient(900px_520px_at_80%_20%,rgba(255,215,128,0.06),transparent_55%),radial-gradient(900px_650px_at_50%_85%,rgba(255,215,128,0.05),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.96))]" />
            </div>

            {/* Header */}
            <header className="sticky top-0 z-30 bg-black/50 backdrop-blur">
                <div className="relative mx-auto h-20 max-w-6xl px-5">
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/25 to-transparent" />

                    {/* Logo centrado flotante (desktop) */}
                    <a
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="hidden sm:block absolute left-1/2 top-0 z-40 -translate-x-1/2 -translate-y-8"
                        aria-label="Ir al inicio"
                        title="Inicio"
                    >
                        <span className="pointer-events-none absolute left-1/2 top-[52px] h-10 w-44 -translate-x-1/2 rounded-full bg-black/70 blur-[0.3px]" />
                        <img
                            src={SITE.logoSrc}
                            alt="Alex Estética"
                            className="h-24 w-24 sm:h-50 sm:w-50 object-contain drop-shadow-[0_0_35px_rgba(255,215,128,0.35)]"
                        />
                    </a>

                    {/* Desktop layout */}
                    <div className="hidden sm:flex h-full items-center justify-between">
                        <nav className="flex items-center gap-4">
                            <NavA href="/#sobre">Sobre Nosotros</NavA>
                            <Sep />
                            <NavA href="/#contacto">Contacto</NavA>
                        </nav>

                        <div className="w-[180px]" />

                        <div className="flex items-center gap-2">
                            <nav className="flex items-center gap-4">
                                <NavA href="/servicios">
                                    <span className="text-amber-100 font-semibold">Servicios</span>
                                </NavA>
                                <Sep />
                                <NavA href="/curso">Curso</NavA>
                            </nav>

                            <a
                                href={whatsappGeneral}
                                className="ml-2 rounded-full border border-amber-300/25 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 px-5 py-2 text-sm font-semibold text-black hover:brightness-110"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {SITE.ctaLabel}
                            </a>
                        </div>
                    </div>

                    {/* Mobile layout */}
                    <div className="flex sm:hidden h-full items-center justify-between">
                        <a
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2"
                            aria-label="Ir al inicio"
                        >
                            <img
                                src={SITE.logoSrc}
                                alt="Alex Estética"
                                className="h-12 w-12 object-contain drop-shadow-[0_0_18px_rgba(255,215,128,0.35)]"
                            />
                            <div className="leading-tight">
                                <div className="text-sm font-semibold tracking-wide text-amber-100">{SITE.brand}</div>
                                <div className="text-[11px] text-amber-100/60">{SITE.city}</div>
                            </div>
                        </a>

                        <div className="flex items-center gap-2">
                            <a
                                href={whatsappGeneral}
                                className="rounded-full border border-amber-300/25 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 px-4 py-2 text-xs font-semibold text-black hover:brightness-110"
                                target="_blank"
                                rel="noreferrer"
                            >
                                WhatsApp
                            </a>

                            <button
                                type="button"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
                                onClick={() => setMenuOpen((v) => !v)}
                                aria-label="Abrir menú"
                                aria-expanded={menuOpen}
                            >
                                <span className="sr-only">Menú</span>
                                <span className="flex flex-col gap-1">
                                    <span className="h-0.5 w-5 rounded bg-amber-200" />
                                    <span className="h-0.5 w-5 rounded bg-amber-200" />
                                    <span className="h-0.5 w-5 rounded bg-amber-200" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile dropdown */}
                {menuOpen ? (
                    <div className="border-t border-white/10 bg-black/60 backdrop-blur sm:hidden">
                        <div className="mx-auto max-w-6xl px-5 py-3">
                            <div className="flex flex-col gap-1">
                                {[
                                    { href: "/", label: "Inicio" },
                                    { href: "/#sobre", label: "Sobre Nosotros" },
                                    { href: "/servicios", label: "Servicios" },
                                    { href: "/curso", label: "Curso" },
                                    { href: "/#contacto", label: "Contacto" },
                                ].map((x) => (
                                    <a
                                        key={x.href}
                                        href={x.href}
                                        className="rounded-xl px-3 py-2 text-sm font-semibold text-amber-100/90 hover:bg-white/5"
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

            {/* HERO */}
            <section className="relative isolate overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 -z-20 bg-black">
                    <img
                        src={SITE.tratamientosHeroImg}
                        alt="Tratamientos - Alex Estética"
                        className="h-full w-full object-cover object-[65%_center] sm:object-center opacity-95"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.55)_48%,rgba(0,0,0,0.35)_70%,rgba(0,0,0,0.65)_100%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_20%,rgba(255,215,128,0.12),transparent_60%)]" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/25 to-transparent" />
                </div>

                <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
                    <div className="max-w-2xl">
                        <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-black/35 px-3 py-1 text-xs text-amber-100/80 backdrop-blur">
                            <span className="inline-block h-2 w-2 rounded-full bg-amber-300" />
                            Servicios · {SITE.city}
                        </p>

                        <h1 className="mt-6 text-4xl font-semibold leading-tight text-amber-100 sm:text-6xl">
                            Realza tu Belleza
                            <span className="block text-amber-200/90">con Resultados Reales</span>
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-relaxed text-amber-100/70 sm:text-lg">
                            Tratamientos premium con atención personalizada, protocolos seguros y una experiencia elegante en cabina.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Button href={whatsappGeneral} variant="gold">
                                {SITE.ctaLabel}
                            </Button>

                            <Button href={whatsappCatalogo} variant="outline">
                                Pedir Catálogo
                            </Button>
                        </div>

                        <div className="mt-10 grid gap-3 sm:grid-cols-3">
                            <MiniStat icon={<IconPremium />} title="Atención" subtitle="Premium" />
                            <MiniStat icon={<IconTech />} title="Tecnología" subtitle="Avanzada" />
                            <MiniStat icon={<IconSafe />} title="100%" subtitle="Seguro" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Nuestros Servicios (IDENTICO al estilo de tu imagen) */}
            <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
                <div className="mb-8 text-center">
                    <div className="text-3xl font-semibold text-amber-100">Nuestros Servicios</div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((s) => (
                        <ServiceCard
                            key={s.title}
                            title={s.title}
                            subtitle={s.subtitle}
                            imageSrc={s.imageSrc}
                            iconKind={s.iconKind}
                        />
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10">
                <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-amber-100/60">
                    © {new Date().getFullYear()} {SITE.brand} · {SITE.city}
                </div>
            </footer>
        </main>
    );
}
"use client";

import React from "react";

const SITE = {
    brand: "Alex Estética",
    city: "Gran Canaria",
    phone: "34600111222",
    logoSrc: "/alex-logo.png",
    tratamientosHeroImg: "/tratamientos-hero.jpg",
};

function waLink(text: string) {
    return `https://wa.me/${SITE.phone}?text=${encodeURIComponent(text)}`;
}

function Button({
    href,
    children,
    variant = "gold",
}: {
    href: string;
    children: React.ReactNode;
    variant?: "gold" | "outline";
}) {
    const base =
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-amber-300/30";

    const styles =
        variant === "gold"
            ? "bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 text-black hover:brightness-110"
            : "border border-amber-300/30 bg-white/5 text-amber-100 hover:bg-white/10";

    return (
        <a href={href} className={`${base} ${styles}`} target="_blank" rel="noreferrer">
            {children}
        </a>
    );
}

function NavA({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="text-sm font-medium text-amber-100/80 hover:text-amber-100 transition"
        >
            {children}
        </a>
    );
}

export default function ServiciosPage() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const whatsappGeneral = waLink(
        `Hola! Quiero información de tratamientos en ${SITE.brand} (precios y disponibilidad).`
    );

    const services = [
        {
            title: "Depilación láser",
            desc:
                "Evaluación personalizada y protocolo seguro según tu tipo de piel. Te guiamos por sesiones.",
            msg: "Hola! Quiero información sobre depilación láser (precio, sesiones y cuidados).",
        },
        {
            title: "Tratamientos faciales",
            desc:
                "Opciones por objetivo: limpieza profunda, hidratación, manchas, acné y rejuvenecimiento.",
            msg: "Hola! Quiero información sobre tratamientos faciales (opciones y precios).",
        },
        {
            title: "Rejuvenecimiento y cuidado de la piel",
            desc:
                "Plan por objetivos: textura, luminosidad y mantenimiento. Recomendación personalizada.",
            msg: "Hola! Quiero un plan para rejuvenecimiento/cuidado de piel. ¿Qué recomiendas?",
        },
        {
            title: "Asesoría estética",
            desc:
                "Valoración y plan recomendado según tu caso. Ideal si no sabes qué tratamiento elegir.",
            msg: "Hola! Quiero agendar una valoración/asesoría estética. ¿Disponibilidad?",
        },
    ];

    const Sep = () => <span className="select-none text-amber-100/35">|</span>;

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Header (estilo referencia: logo centrado, grande, sin círculo extra) */}
            <header className="sticky top-0 z-30 bg-black/50 backdrop-blur">
                <div className="relative mx-auto h-20 max-w-6xl px-5">
                    {/* Línea inferior (queda POR DEBAJO del logo) */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/25 to-transparent" />

                    {/* Logo centrado flotante (solo desktop) */}
                    <a
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="hidden sm:block absolute left-1/2 top-0 z-40 -translate-x-1/2 -translate-y-8"
                        aria-label="Ir al inicio"
                        title="Inicio"
                    >
                        {/* Máscara oscura para que la línea NO atraviese el logo */}
                        <span className="pointer-events-none absolute left-1/2 top-[52px] h-10 w-44 -translate-x-1/2 rounded-full bg-black/70 blur-[0.3px]" />

                        <img
                            src={SITE.logoSrc}
                            alt="Alex Estética"
                            className="h-24 w-24 sm:h-50 sm:w-50 object-contain drop-shadow-[0_0_35px_rgba(255,215,128,0.35)]"
                        />
                    </a>

                    {/* Desktop layout */}
                    <div className="hidden sm:flex h-full items-center justify-between">
                        {/* Izquierda del logo */}
                        <nav className="flex items-center gap-4">
                            <NavA href="/#sobre">Sobre Nosotros</NavA>
                            <Sep />
                            <NavA href="/#contacto">Contacto</NavA>
                        </nav>

                        {/* Reserva centro para que el logo no empuje nada */}
                        <div className="w-[180px]" />

                        {/* Derecha del logo */}
                        <div className="flex items-center gap-2">
                            <nav className="flex items-center gap-4">
                                <NavA href="/servicios">
                                    <span className="text-amber-100 font-semibold">Tratamientos</span>
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
                                Agende una consulta
                            </a>
                        </div>
                    </div>

                    {/* Mobile layout */}
                    <div className="flex sm:hidden h-full items-center justify-between">
                        {/* Left: logo pequeño + marca */}
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
                                <div className="text-sm font-semibold tracking-wide text-amber-100">
                                    {SITE.brand}
                                </div>
                                <div className="text-[11px] text-amber-100/60">{SITE.city}</div>
                            </div>
                        </a>

                        {/* Right: CTA + menú */}
                        <div className="flex items-center gap-2">
                            <a
                                href={whatsappGeneral}
                                className="rounded-full border border-amber-300/25 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 px-4 py-2 text-xs font-semibold text-black hover:brightness-110"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Agendar
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
                                <a
                                    href="/"
                                    className="rounded-xl px-3 py-2 text-sm font-semibold text-amber-100/90 hover:bg-white/5"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Inicio
                                </a>
                                <a
                                    href="/#sobre"
                                    className="rounded-xl px-3 py-2 text-sm font-semibold text-amber-100/90 hover:bg-white/5"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Sobre Nosotros
                                </a>
                                <a
                                    href="/servicios"
                                    className="rounded-xl px-3 py-2 text-sm font-semibold text-amber-100/90 hover:bg-white/5"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Tratamientos
                                </a>
                                <a
                                    href="/curso"
                                    className="rounded-xl px-3 py-2 text-sm font-semibold text-amber-100/90 hover:bg-white/5"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Curso
                                </a>
                                <a
                                    href="/#contacto"
                                    className="rounded-xl px-3 py-2 text-sm font-semibold text-amber-100/90 hover:bg-white/5"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Contacto
                                </a>
                            </div>
                        </div>
                    </div>
                ) : null}
            </header>

            {/* HERO limpio */}
            <section className="relative isolate overflow-hidden border-b border-white/10 min-h-[520px] sm:min-h-[600px]">
                {/* Imagen fondo */}
                <div className="absolute inset-0 -z-20 bg-black">
                    <img
                        src={SITE.tratamientosHeroImg}
                        alt="Sala de tratamientos - Alex Estética"
                        className="h-full w-full object-cover opacity-80"
                        loading="eager"
                    />

                    {/* Overlay elegante */}
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.60)_45%,rgba(0,0,0,0.45)_70%,rgba(0,0,0,0.65)_100%)]" />
                </div>

                {/* Contenido */}
                <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
                    <div className="max-w-xl">
                        <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-black/35 px-3 py-1 text-xs text-amber-100/80 backdrop-blur">
                            <span className="inline-block h-2 w-2 rounded-full bg-amber-300" />
                            Tratamientos premium · {SITE.city}
                        </p>

                        <h1 className="mt-6 text-4xl font-semibold leading-tight text-amber-100 sm:text-5xl">
                            Realza tu belleza
                            <span className="block text-amber-200/90">con una estética sofisticada</span>
                        </h1>

                        <p className="mt-5 text-base leading-relaxed text-amber-100/70 sm:text-lg">
                            Tratamientos avanzados para una belleza natural y elegante. Atención
                            personalizada y resultados visibles.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Button href={whatsappGeneral} variant="gold">
                                Agendar una consulta
                            </Button>

                            <Button
                                href={waLink("Hola! Quiero ver el catálogo completo de tratamientos y precios.")}
                                variant="outline"
                            >
                                Pedir catálogo
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Servicios */}
            <section className="mx-auto max-w-6xl px-5 py-16">
                <div className="mb-8">
                    <div className="text-2xl font-semibold text-amber-100">Tratamientos</div>
                    <p className="mt-2 text-amber-100/70">
                        Selecciona un tratamiento y te respondemos por WhatsApp con precios, sesiones y
                        disponibilidad.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    {services.map((s) => (
                        <div
                            key={s.title}
                            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur"
                        >
                            <div className="text-xl font-semibold text-amber-100">{s.title}</div>
                            <p className="mt-3 text-amber-100/70">{s.desc}</p>

                            <div className="mt-6">
                                <Button href={waLink(s.msg)} variant="outline">
                                    Consultar por WhatsApp
                                </Button>
                            </div>
                        </div>
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
"use client";

import React from "react";

const SITE = {
    brand: "Alex Estética",
    city: "Gran Canaria",

    // ✅ wa.me usa solo números (sin +, sin espacios)
    phone: "34661026192",

    logoSrc: "/alex-logo.png",

    // ✅ Hero del curso (ponlo en /public/curso-hero.jpg)
    cursoHeroImg: "/curso-hero.jpg",

    instagramUrl:
        "https://www.instagram.com/alex_postquirurgicoscanarias?igsh=MTg3Y2NibWMwYTl5ZQ==",

    addressLine: "Av. Canarias 450, Bloque B, Local 3 · Vecindario",
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
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-amber-300/30";
    const styles =
        variant === "gold"
            ? "bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 text-black hover:brightness-110"
            : "border border-amber-300/30 bg-white/5 text-amber-100 hover:bg-white/10";

    return (
        <a
            href={href}
            className={`${base} ${styles} ${className}`}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    );
}

function NavA({
    href,
    children,
    active,
}: {
    href: string;
    children: React.ReactNode;
    active?: boolean;
}) {
    return (
        <a
            href={href}
            className={[
                "text-sm font-semibold transition",
                active ? "text-amber-100" : "text-amber-100/80 hover:text-amber-100",
            ].join(" ")}
        >
            {children}
        </a>
    );
}

function Sep() {
    return <span className="select-none text-amber-100/25">|</span>;
}

function SectionTitle({ title, desc }: { title: string; desc?: string }) {
    return (
        <div className="mb-7">
            <div className="text-2xl font-semibold text-amber-100">{title}</div>
            {desc ? <p className="mt-2 text-amber-100/70">{desc}</p> : null}
        </div>
    );
}

function OutlineDot({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-300/90" />
            <div className="text-sm text-amber-100/80">{children}</div>
        </div>
    );
}

/* ===== Iconos (estilo similar al banner) ===== */
function IconHand() {
    return (
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-amber-200" fill="none">
            <path
                d="M8 12V7.5a1.5 1.5 0 013 0V12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
            <path
                d="M11 12V6.5a1.5 1.5 0 013 0V12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
            <path
                d="M14 12V7.5a1.5 1.5 0 013 0V13"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
            <path
                d="M7.7 12.2l-.8-.8a1.6 1.6 0 00-2.3 2.3l2.9 2.9c1 1 2.3 1.6 3.7 1.6h2.3c1.6 0 3-.7 4-1.9l1.4-1.8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function IconClipboard() {
    return (
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-amber-200" fill="none">
            <path
                d="M9 4h6l1 2h3v16H5V6h3l1-2z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path
                d="M9 4a3 3 0 006 0"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
            <path
                d="M8 12h8M8 16h8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        </svg>
    );
}

function IconWarning() {
    return (
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-amber-200" fill="none">
            <path
                d="M12 3l10 18H2L12 3z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path
                d="M12 9v5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
            <path
                d="M12 17h.01"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
            />
        </svg>
    );
}

function IconJacket() {
    return (
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-amber-200" fill="none">
            <path
                d="M9 4l3 2 3-2 3 3-2 4v9H8v-9L6 7l3-3z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path
                d="M12 6v14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        </svg>
    );
}

function IconShield() {
    return (
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-amber-200" fill="none">
            <path
                d="M12 3l7 4v6c0 5-3 8-7 9-4-1-7-4-7-9V7l7-4z"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path
                d="M9 12l2 2 4-5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function FeatureTile({
    icon,
    title,
    subtitle,
    className = "",
}: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    className?: string;
}) {
    return (
        <div
            className={[
                "group rounded-[1.6rem] border border-amber-300/15 bg-black/35 p-5 backdrop-blur",
                className,
            ].join(" ")}
        >
            <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-amber-300/20 bg-black/40">
                    {icon}
                </div>
                <div className="min-w-0">
                    <div className="text-sm font-semibold text-amber-100">{title}</div>
                    <div className="mt-1 text-xs text-amber-100/60">{subtitle}</div>
                </div>
            </div>
        </div>
    );
}

export default function CursoPage() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const COURSE = {
        name: "DOMINA EL POST-QUIRÚRGICO DE PRINCIPIO A FIN",
        modality: "Presencial",
        hours: "40 horas",
        breakdown: "20h teoría · 20h práctica",
    };

    const whatsappCurso = waLink(
        `Hola Alex! Quiero info del curso "${COURSE.name}": precio, próximas fechas y cupos.`
    );

    const whatsappTemario = waLink(
        `Hola Alex! ¿Me puedes enviar el temario completo del curso "${COURSE.name}" y requisitos?`
    );

    const modules = [
        {
            title: "1) Fundamentos Anatómicos y Fisiológicos",
            summary:
                "Comprende qué ocurre en el cuerpo tras la cirugía: edema, drenaje, tejido y cicatrización, para tomar decisiones con más criterio.",
            points: [
                "Sistema linfático, edema, inflamación y cicatrización.",
                "Cómo “leer” el tejido sin invadir lo clínico.",
                "Señales normales vs. señales de alerta para derivación.",
            ],
        },
        {
            title: "2) Tipos de Cirugías Estéticas y Protocolos",
            summary:
                "Enfoque práctico por procedimientos frecuentes y objetivos: inflamación, confort, fibrosis y acompañamiento por fases.",
            points: [
                "Fases: primeros días, semanas, mantenimiento.",
                "Objetivos por etapa y organización de sesiones.",
                "Trabajo alineado a indicaciones del cirujano.",
            ],
        },
        {
            title: "3) Seguridad, Ética y Marco Legal",
            summary:
                "Aprende a trabajar con límites claros y comunicación profesional: higiene, consentimiento, documentación y responsabilidad.",
            points: [
                "Higiene y preparación de cabina (estándar premium).",
                "Consentimiento informado y comunicación clara.",
                "Cuándo NO intervenir y cuándo derivar.",
            ],
        },
        {
            title: "4) Drenaje Linfático Manual Postquirúrgico",
            summary:
                "Técnica guiada: ritmo, presión, secuencias y errores típicos, buscando confort, mejora visible y constancia del cliente.",
            points: [
                "Principios técnicos y control de presión.",
                "Secuencias adaptadas según evolución del caso.",
                "Errores comunes que bajan resultados (y cómo evitarlos).",
            ],
        },
        {
            title: "5) Terapia de Compresión y Prendas",
            summary:
                "Uso inteligente de compresión: tipos de prendas, ajuste, hábitos y educación al cliente para que el proceso sea más estable.",
            points: [
                "Qué revisar: ajuste, comodidad y seguridad.",
                "Cuidados, constancia y hábitos recomendados.",
                "Alertas por presión, dolor anómalo o cambios inusuales.",
            ],
        },
        {
            title: "6) Técnicas Complementarias y Aparatología",
            summary:
                "Aprende cuándo conviene (y cuándo no) usar técnicas/aparatos. Enfoque responsable: menos promesas, más criterio.",
            points: [
                "Elección por objetivo: confort, textura, apoyo al proceso.",
                "Parámetros generales de seguridad y buenas prácticas.",
                "Cómo explicar al cliente con lenguaje profesional.",
            ],
        },
        {
            title: "7) Manejo de Complicaciones y Emergencias",
            summary:
                "Identifica señales de alarma y aplica un protocolo de acción responsable: prioridad absoluta a la salud del cliente.",
            points: [
                "Signos de alerta: cuándo derivar de inmediato.",
                "Cómo documentar y comunicar con profesionalismo.",
                "Qué evitar para no empeorar una situación.",
            ],
        },
        {
            title: "8) Nutrición y Hábitos en la Recuperación",
            summary:
                "Acompañamiento educativo (no clínico): hidratación, descanso, hábitos y seguimiento sencillo que mejora adherencia.",
            points: [
                "Hábitos que favorecen el proceso (de forma general).",
                "Cómo orientar sin invadir áreas médicas.",
                "Plan de seguimiento simple y sostenible.",
            ],
        },
        {
            title: "9) Gestión de la Cabina Profesional",
            summary:
                "Estandariza tu servicio para que se vea premium: agenda, experiencia, comunicación y fidelización sin presión.",
            points: [
                "Estructura de sesiones y seguimiento por fases.",
                "Experiencia del cliente: antes/durante/después.",
                "Retención: continuidad, confianza y recomendación.",
            ],
        },
        {
            title: "10) Protocolos Prácticos y Casos Clínicos",
            summary:
                "Práctica con lógica real de cabina: valoración, plan por objetivos y toma de decisiones según evolución.",
            points: [
                "Protocolos completos de inicio a fin.",
                "Casos y decisiones: qué hacer según el progreso.",
                "Checklist profesional por sesión.",
            ],
        },
        {
            title: "AN) Anexos (materiales descargables)",
            summary:
                "Recursos listos para usar: guías, plantillas y documentos para implementar el método desde el primer día.",
            points: [
                "Plantillas de control y seguimiento.",
                "Guías de comunicación y post-tratamiento.",
                "Material de apoyo (descargables).",
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Fondo general (muy sutil, para que el sitio siga “luxury”) */}
            <div className="pointer-events-none fixed inset-0 -z-30">
                <div className="absolute inset-0 bg-[radial-gradient(1000px_650px_at_20%_10%,rgba(255,215,128,0.10),transparent_60%),radial-gradient(900px_520px_at_80%_20%,rgba(255,215,128,0.06),transparent_55%),radial-gradient(900px_650px_at_50%_85%,rgba(255,215,128,0.05),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.96))]" />
            </div>

            {/* Header EXACTO estilo referencia (igual a Tratamientos) */}
            <header className="sticky top-0 z-30 bg-black/50 backdrop-blur">
                <div className="relative mx-auto h-20 max-w-6xl px-5">
                    {/* Línea inferior (queda POR DEBAJO del logo) */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/25 to-transparent" />

                    {/* Logo centrado flotante (solo desktop) */}
                    <a
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="absolute left-1/2 top-0 z-40 hidden -translate-x-1/2 -translate-y-8 sm:block"
                        aria-label="Ir al inicio"
                        title="Inicio"
                    >
                        {/* Máscara oscura para que la línea NO atraviese el logo (EXACTA) */}
                        <span className="pointer-events-none absolute left-1/2 top-[52px] h-10 w-44 -translate-x-1/2 rounded-full bg-black/70 blur-[0.3px]" />

                        {/* ✅ MISMO tamaño que Tratamientos */}
                        <img
                            src={SITE.logoSrc}
                            alt="Alex Estética"
                            className="h-24 w-24 sm:h-50 sm:w-50 object-contain drop-shadow-[0_0_35px_rgba(255,215,128,0.35)]"
                        />
                    </a>

                    {/* Desktop layout */}
                    <div className="hidden h-full items-center justify-between sm:flex">
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
                                <NavA href="/servicios">Tratamientos</NavA>
                                <Sep />
                                <NavA href="/curso" active>
                                    Curso
                                </NavA>
                            </nav>

                            <a
                                href={whatsappCurso}
                                className="ml-2 rounded-full border border-amber-300/25 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 px-5 py-2 text-sm font-semibold text-black hover:brightness-110"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Agende una consulta
                            </a>

                            {SITE.instagramUrl ? (
                                <a
                                    href={SITE.instagramUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hidden h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 sm:inline-flex"
                                    aria-label="Instagram"
                                    title="Instagram"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5 text-amber-200"
                                        fill="none"
                                    >
                                        <path
                                            d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                        />
                                        <path
                                            d="M12 16a4 4 0 100-8 4 4 0 000 8z"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                        />
                                        <path
                                            d="M17.5 6.5h.01"
                                            stroke="currentColor"
                                            strokeWidth="2.2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </a>
                            ) : null}
                        </div>
                    </div>

                    {/* Mobile layout */}
                    <div className="flex h-full items-center justify-between sm:hidden">
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
                                href={whatsappCurso}
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
                                {[
                                    { href: "/", label: "Inicio" },
                                    { href: "/servicios", label: "Tratamientos" },
                                    { href: "/curso", label: "Curso" },
                                    { href: "/#sobre", label: "Sobre Nosotros" },
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

                                {SITE.instagramUrl ? (
                                    <a
                                        href={SITE.instagramUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-xl px-3 py-2 text-sm font-semibold text-amber-100/90 hover:bg-white/5"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        Instagram
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    </div>
                ) : null}
            </header>

            {/* HERO tipo “banner” (FONDO + TITULO + ICONOS) */}
            <section className="relative isolate overflow-hidden border-b border-white/10">
                {/* Imagen de fondo */}
                <div className="absolute inset-0 -z-20 bg-black">
                    <img
                        src={SITE.cursoHeroImg}
                        alt="Curso post-quirúrgico - Alex Estética"
                        className="h-full w-full object-cover opacity-90"
                        loading="eager"
                    />

                    {/* Overlay para que el texto siempre se lea bien (sin matar el fondo) */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.86))]" />
                    <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_20%,rgba(255,215,128,0.10),transparent_60%)]" />

                    {/* Granulado / partículas (sutil, sin líneas) */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-screen
            bg-[radial-gradient(circle_at_20%_30%,rgba(255,215,128,0.25)_0,transparent_18%),
                radial-gradient(circle_at_70%_35%,rgba(255,215,128,0.18)_0,transparent_20%),
                radial-gradient(circle_at_50%_80%,rgba(255,215,128,0.14)_0,transparent_22%),
                radial-gradient(circle_at_85%_75%,rgba(255,215,128,0.10)_0,transparent_22%)]"
                    />
                </div>

                {/* Contenido */}
                <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
                    {/* ✅ centrado en desktop, normal en móvil */}
                    <div className="max-w-3xl sm:mx-auto sm:text-center">
                        <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-black/35 px-3 py-1 text-xs text-amber-100/80 backdrop-blur">
                            <span className="inline-block h-2 w-2 rounded-full bg-amber-300" />
                            Curso presencial · {SITE.city} · 40h (20 teoría + 20 práctica)
                        </p>

                        <h1 className="mt-6 text-4xl font-semibold leading-tight text-amber-100 sm:text-6xl">
                            {COURSE.name}
                        </h1>

                        <p className="mt-5 max-w-2xl text-amber-100/70 sm:mx-auto sm:text-lg">
                            Una formación intensiva y práctica para dominar el acompañamiento estético
                            post-quirúrgico con criterio profesional, protocolos claros y una experiencia
                            premium de cabina. Aprenderás a organizar sesiones por fases, comunicarte con
                            seguridad y elevar tus resultados de forma responsable.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                            <Button href={whatsappCurso} variant="gold">
                                Pedir precio + próximas fechas
                            </Button>
                            <Button href={whatsappTemario} variant="outline">
                                Solicitar temario completo
                            </Button>
                        </div>
                    </div>

                    {/* ✅ Tiles: 2 cols en móvil, 5 cols en desktop, último centrado */}
                    <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-5">
                        <FeatureTile
                            icon={<IconHand />}
                            title="Drenaje linfático manual"
                            subtitle="Técnica + secuencias"
                        />
                        <FeatureTile
                            icon={<IconClipboard />}
                            title="Cirugías & protocolos"
                            subtitle="Fases + objetivos"
                        />
                        <FeatureTile
                            icon={<IconWarning />}
                            title="Manejo de complicaciones"
                            subtitle="Alertas + derivación"
                        />
                        <FeatureTile
                            icon={<IconJacket />}
                            title="Compresión & aparatología"
                            subtitle="Uso con criterio"
                        />
                        <FeatureTile
                            className="col-span-2 justify-self-center sm:col-span-1 sm:justify-self-auto"
                            icon={<IconShield />}
                            title="Seguridad & ética"
                            subtitle="Higiene + límites"
                        />
                    </div>

                    {/* Banda de datos reales */}
                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        <div className="rounded-[1.6rem] border border-white/10 bg-black/35 p-5 backdrop-blur">
                            <div className="text-xs text-amber-100/60">Modalidad</div>
                            <div className="mt-2 text-sm font-semibold text-amber-100">
                                {COURSE.modality}
                            </div>
                        </div>

                        <div className="rounded-[1.6rem] border border-white/10 bg-black/35 p-5 backdrop-blur">
                            <div className="text-xs text-amber-100/60">Duración</div>
                            <div className="mt-2 text-sm font-semibold text-amber-100">
                                {COURSE.hours} · {COURSE.breakdown}
                            </div>
                        </div>

                        <div className="rounded-[1.6rem] border border-white/10 bg-black/35 p-5 backdrop-blur">
                            <div className="text-xs text-amber-100/60">Ubicación</div>
                            <div className="mt-2 text-sm font-semibold text-amber-100">
                                {SITE.addressLine}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUÉ APRENDERÁS (en bloques) */}
            <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
                <SectionTitle
                    title="Qué vas a dominar"
                    desc="Formación práctica + criterio profesional. Todo estructurado para aplicar desde el primer día."
                />

                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
                        <div className="text-lg font-semibold text-amber-100">
                            Método claro y seguro
                        </div>
                        <div className="mt-4 space-y-3">
                            <OutlineDot>
                                Fundamentos aplicados para entender el proceso post-quirúrgico.
                            </OutlineDot>
                            <OutlineDot>
                                Higiene, ética y límites: actuar con responsabilidad y confianza.
                            </OutlineDot>
                            <OutlineDot>
                                Protocolos por fases: qué hacer primero, qué sigue y cómo mantener.
                            </OutlineDot>
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
                        <div className="text-lg font-semibold text-amber-100">
                            Técnica + resultados premium
                        </div>
                        <div className="mt-4 space-y-3">
                            <OutlineDot>
                                Drenaje linfático manual con secuencias y corrección de errores.
                            </OutlineDot>
                            <OutlineDot>
                                Compresión, aparatología y complementarias: uso con criterio.
                            </OutlineDot>
                            <OutlineDot>
                                Comunicación y seguimiento: continuidad, confianza y fidelización.
                            </OutlineDot>
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-[2rem] border border-white/10 bg-black/30 p-7">
                    <div className="text-sm font-semibold text-amber-100">
                        Nota importante (estilo profesional)
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-amber-100/70">
                        Esta formación es estética y se trabaja respetando siempre las indicaciones del cirujano.
                        Aprenderás a identificar señales de alerta y a derivar cuando corresponda, priorizando la
                        seguridad del cliente.
                    </p>
                </div>
            </section>

            {/* TEMARIO (ACORDEÓN) */}
            <section className="mx-auto max-w-6xl px-5 pb-14 sm:pb-16">
                <SectionTitle
                    title="Temario"
                    desc="Toca cada módulo para ver un resumen breve. El temario completo con detalle lo enviamos por WhatsApp."
                />

                <div className="space-y-4">
                    {modules.map((m) => (
                        <details
                            key={m.title}
                            className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur open:bg-white/7"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                                <div className="text-sm font-semibold text-amber-100 sm:text-base">
                                    {m.title}
                                </div>

                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5 text-amber-200 transition duration-300 group-open:rotate-180"
                                        fill="none"
                                    >
                                        <path
                                            d="M6 9l6 6 6-6"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </summary>

                            <div className="mt-4 text-sm text-amber-100/70">{m.summary}</div>

                            <div className="mt-4 grid gap-3 sm:grid-cols-3">
                                {m.points.map((p) => (
                                    <div
                                        key={p}
                                        className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-amber-100/80"
                                    >
                                        {p}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5">
                                <Button href={whatsappTemario} variant="outline">
                                    Quiero el detalle completo de este módulo
                                </Button>
                            </div>
                        </details>
                    ))}
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="mx-auto max-w-6xl px-5 pb-16">
                <div className="rounded-[2rem] border border-amber-300/15 bg-white/5 p-8 backdrop-blur sm:p-10">
                    <div className="text-2xl font-semibold text-amber-100">
                        ¿Quieres reservar tu cupo?
                    </div>
                    <p className="mt-2 max-w-3xl text-amber-100/70">
                        Escríbenos por WhatsApp y te enviamos precio, próximas fechas, cupos disponibles y requisitos.
                        Si tienes experiencia previa o estás empezando, también te orientamos para que sepas si este
                        curso encaja contigo.
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <Button href={whatsappCurso} variant="gold">
                            Hablar por WhatsApp ahora
                        </Button>
                        {SITE.instagramUrl ? (
                            <Button href={SITE.instagramUrl} variant="outline">
                                Ver Instagram
                            </Button>
                        ) : null}
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                            <div className="text-xs text-amber-100/60">Dirección</div>
                            <div className="mt-2 text-sm font-semibold text-amber-100">
                                {SITE.addressLine}
                            </div>
                            <div className="mt-3 text-sm text-amber-100/70">{SITE.city}</div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
                            <div className="text-xs text-amber-100/60">Contacto directo</div>
                            <div className="mt-2 text-sm font-semibold text-amber-100">
                                WhatsApp: +34 661 026 192
                            </div>

                            {SITE.instagramUrl ? (
                                <a
                                    href={SITE.instagramUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-3 inline-flex text-sm font-semibold text-amber-200 hover:text-amber-100"
                                >
                                    Instagram → @alex_postquirurgicoscanarias
                                </a>
                            ) : null}
                        </div>
                    </div>
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
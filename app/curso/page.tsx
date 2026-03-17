"use client";

import React from "react";

const SITE = {
    brand: "Alex Estética",
    city: "Gran Canaria",
    locality: "Vecindario",
    logoSrc: "/alex-logo.png",
    phone: "34661026192",
    phoneDisplay: "661 026 192",
    instagramUrl:
        "https://www.instagram.com/alex_postquirurgicoscanarias?igsh=MTg3Y2NibWMwYTl5ZQ==",
    cursoHeroImg: "/curso-hero.jpg",
    addressLine: "Av. Canarias 450, Bloque B, Local 3 · Vecindario",
    hours: "Lun–Vier · 9:00–13:00 y 16:00–20:00 | Sab · 9:00–13:00",
    mapsUrl:
        "https://www.google.com/maps?q=Av.%20Canarias%20450,%20Bloque%20B,%20Local%203,%20Vecindario",
};

function waLink(text: string) {
    return `https://wa.me/${SITE.phone}?text=${encodeURIComponent(text)}`;
}

function Button({
    href,
    children,
    variant = "gold",
    className = "",
    newTab = true,
}: {
    href: string;
    children: React.ReactNode;
    variant?: "gold" | "outline";
    className?: string;
    newTab?: boolean;
}) {
    const base =
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-[12px] sm:text-sm font-semibold uppercase tracking-[0.08em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300/30 font-[family:var(--font-dm-sans)]";
    const styles =
        variant === "gold"
            ? "bg-[linear-gradient(135deg,#f1d78f_0%,#ddb85a_30%,#c89f3f_55%,#f4e4b5_100%)] text-black shadow-[0_12px_34px_rgba(201,168,76,0.24)] hover:-translate-y-0.5 hover:brightness-105"
            : "border border-[rgba(201,168,76,0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.015)_100%)] text-amber-100 hover:border-[rgba(201,168,76,0.34)] hover:bg-white/10";

    const target = newTab ? "_blank" : undefined;
    const rel = newTab ? "noreferrer" : undefined;

    return (
        <a
            href={href}
            className={`${base} ${styles} ${className}`}
            target={target}
            rel={rel}
        >
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
            className="text-[13px] font-medium tracking-[0.06em] text-[#d7c6a7]/72 transition hover:text-[#fff4df] font-[family:var(--font-dm-sans)]"
        >
            {children}
        </a>
    );
}

function Sep() {
    return <span className="select-none text-[#d7c6a7]/28">|</span>;
}

function SectionTitle({
    title,
    desc,
    tag,
}: {
    title: string;
    desc?: string;
    tag?: string;
}) {
    return (
        <div className="mb-10">
            {tag ? (
                <span className="mb-4 block text-[10px] uppercase tracking-[0.35em] text-[#C9A84C] font-[family:var(--font-dm-sans)]">
                    {tag}
                </span>
            ) : null}

            <h2 className="font-[family:var(--font-cormorant)] text-[34px] sm:text-[48px] font-light leading-[1.08] text-[#FAF8F3]">
                {title}
            </h2>

            {desc ? (
                <p className="mt-4 max-w-3xl text-[13.5px] leading-[1.7] text-[#7A7168] font-[family:var(--font-dm-sans)]">
                    {desc}
                </p>
            ) : null}
        </div>
    );
}

function GlassCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={[
                "rounded-[2rem] border border-[rgba(201,168,76,0.14)]",
                "bg-[linear-gradient(180deg,rgba(24,18,13,0.42)_0%,rgba(15,12,9,0.22)_100%)]",
                "backdrop-blur-[10px]",
                "shadow-[0_10px_30px_rgba(0,0,0,0.22)]",
                className,
            ].join(" ")}
        >
            {children}
        </div>
    );
}

function InfoCard({
    title,
    desc,
    emoji,
}: {
    title: string;
    desc: string;
    emoji: string;
}) {
    return (
        <GlassCard className="p-6 transition-colors hover:border-[rgba(201,168,76,0.28)]">
            <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[rgba(201,168,76,0.08)] text-[18px]">
                    {emoji}
                </div>
                <h3 className="font-[family:var(--font-cormorant)] text-[22px] font-normal text-[#FAF8F3]">
                    {title}
                </h3>
            </div>
            <p className="text-[13.5px] leading-[1.7] text-[#7A7168] font-[family:var(--font-dm-sans)]">
                {desc}
            </p>
        </GlassCard>
    );
}

function PointItem({
    title,
    desc,
}: {
    title: string;
    desc: string;
}) {
    return (
        <div className="flex gap-3">
            <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-[#C9A84C]" />
            <div>
                <div className="text-[13px] font-medium tracking-[0.02em] text-[#D4C9B0] font-[family:var(--font-dm-sans)]">
                    {title}
                </div>
                <div className="mt-1 text-[13px] leading-[1.65] text-[#7A7168] font-[family:var(--font-dm-sans)]">
                    {desc}
                </div>
            </div>
        </div>
    );
}

function StatCard({
    label,
    value,
    note,
}: {
    label: string;
    value: string;
    note: string;
}) {
    return (
        <GlassCard className="p-5 text-center">
            <span className="block text-[10px] uppercase tracking-[0.15em] text-[#7A7168] font-[family:var(--font-dm-sans)]">
                {label}
            </span>
            <div className="mt-2 font-[family:var(--font-cormorant)] text-[28px] font-light leading-none text-[#FAF8F3]">
                {value}
            </div>
            <span className="mt-2 block text-[10px] text-[#7A7168] font-[family:var(--font-dm-sans)]">
                {note}
            </span>
        </GlassCard>
    );
}

function AudienceCard({
    title,
    emoji,
    items,
}: {
    title: string;
    emoji: string;
    items: string[];
}) {
    return (
        <GlassCard className="p-7">
            <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-[rgba(201,168,76,0.08)] text-[18px]">
                    {emoji}
                </div>
                <h3 className="font-[family:var(--font-cormorant)] text-[28px] font-normal text-[#FAF8F3]">
                    {title}
                </h3>
            </div>

            <div className="space-y-4">
                {items.map((item) => (
                    <div key={item} className="flex gap-3">
                        <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#C9A84C]" />
                        <p className="text-[13.5px] leading-[1.7] text-[#7A7168] font-[family:var(--font-dm-sans)]">
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
}

function ModuleCard({
    index,
    title,
    summary,
    points,
    chips,
    emoji,
}: {
    index: number;
    title: string;
    summary: string;
    points: string[];
    chips: string[];
    emoji: string;
}) {
    return (
        <details className="group overflow-hidden rounded-[2rem] border border-[rgba(201,168,76,0.12)] bg-[linear-gradient(180deg,rgba(24,18,13,0.42)_0%,rgba(15,12,9,0.22)_100%)] backdrop-blur-[10px] open:border-[rgba(201,168,76,0.40)]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-[18px] sm:px-[22px]">
                <div className="flex min-w-0 flex-1 items-center gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[rgba(201,168,76,0.08)] text-[14px] font-medium text-[#C9A84C] font-[family:var(--font-dm-sans)]">
                        {String(index).padStart(2, "0")}
                    </div>

                    <div className="min-w-0">
                        <div className="flex items-center gap-2">
                            <span className="text-[17px]">{emoji}</span>
                            <div className="font-[family:var(--font-cormorant)] text-[18px] sm:text-[20px] font-normal leading-[1.2] text-[#FAF8F3]">
                                {title}
                            </div>
                        </div>

                        <div className="mt-1 text-[11.5px] tracking-[0.04em] text-[#7A7168] font-[family:var(--font-dm-sans)]">
                            {summary}
                        </div>
                    </div>
                </div>

                <span className="shrink-0 text-[14px] text-[#C9A84C] transition-transform duration-300 group-open:rotate-180">
                    ▼
                </span>
            </summary>

            <div className="grid max-h-0 grid-rows-[0fr] transition-all duration-500 group-open:max-h-[1200px] group-open:grid-rows-[1fr]">
                <div className="overflow-hidden">
                    <div className="border-t border-[rgba(201,168,76,0.10)] px-5 pb-6 pt-5 sm:px-[22px]">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <h4 className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#C9A84C] font-[family:var(--font-dm-sans)]">
                                    Qué incluye este módulo
                                </h4>
                                <p className="text-[13.5px] leading-[1.7] text-[#7A7168] font-[family:var(--font-dm-sans)]">
                                    {summary}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {chips.map((chip) => (
                                        <span
                                            key={chip}
                                            className="border border-[rgba(201,168,76,0.20)] bg-[rgba(201,168,76,0.03)] px-3 py-1 text-[11.5px] text-[#7A7168] font-[family:var(--font-dm-sans)]"
                                        >
                                            {chip}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#C9A84C] font-[family:var(--font-dm-sans)]">
                                    Puntos clave
                                </h4>

                                <div className="space-y-3">
                                    {points.map((point) => (
                                        <div
                                            key={point}
                                            className="flex gap-3 border border-[rgba(201,168,76,0.10)] bg-[rgba(201,168,76,0.03)] p-4"
                                        >
                                            <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#C9A84C]" />
                                            <p className="text-[13.5px] leading-[1.65] text-[#D4C9B0] font-[family:var(--font-dm-sans)]">
                                                {point}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </details>
    );
}

export default function CursoPage() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const COURSE = {
        nameTop: "DOMINA EL POST-QUIRÚRGICO",
        nameBottom: "DE PRINCIPIO A FIN",
        modality: "Presencial",
        hours: "40 horas",
        breakdown: "20h teoría · 20h práctica",
    };

    const whatsappCurso = waLink(
        `Hola Alex! Quiero info del curso "${COURSE.nameTop} ${COURSE.nameBottom}": precio, próximas fechas y cupos.`
    );

    const whatsappTemario = waLink(
        `Hola Alex! ¿Me puedes enviar el temario completo del curso "${COURSE.nameTop} ${COURSE.nameBottom}" y requisitos?`
    );

    const whatsappReserva = waLink(
        `Hola Alex! Quiero reservar mi plaza para el curso "${COURSE.nameTop} ${COURSE.nameBottom}".`
    );

    const modules = [
        {
            emoji: "🫀",
            title: "Fundamentos Anatómicos y Fisiológicos",
            summary:
                "Comprende qué ocurre en el cuerpo tras la cirugía: edema, drenaje, tejido y cicatrización, para tomar decisiones con más criterio.",
            chips: ["Anatomía aplicada", "Inflamación", "Cicatrización"],
            points: [
                "Sistema linfático, edema, inflamación y cicatrización.",
                "Cómo leer el tejido sin invadir lo clínico.",
                "Señales normales vs. señales de alerta para derivación.",
            ],
        },
        {
            emoji: "📋",
            title: "Tipos de Cirugías Estéticas y Protocolos",
            summary:
                "Enfoque práctico por procedimientos frecuentes y objetivos: inflamación, confort, fibrosis y acompañamiento por fases.",
            chips: ["Lipoescultura", "Abdominoplastia", "Protocolos por fases"],
            points: [
                "Fases: primeros días, semanas y mantenimiento.",
                "Objetivos por etapa y organización de sesiones.",
                "Trabajo alineado a indicaciones del cirujano.",
            ],
        },
        {
            emoji: "🛡️",
            title: "Seguridad, Ética y Marco Legal",
            summary:
                "Aprende a trabajar con límites claros y comunicación profesional: higiene, consentimiento, documentación y responsabilidad.",
            chips: ["Higiene clínica", "Consentimiento", "Límites profesionales"],
            points: [
                "Higiene y preparación de cabina con estándar premium.",
                "Consentimiento informado y comunicación clara.",
                "Cuándo no intervenir y cuándo derivar.",
            ],
        },
        {
            emoji: "🤲",
            title: "Drenaje Linfático Manual Postquirúrgico",
            summary:
                "Técnica guiada: ritmo, presión, secuencias y corrección de errores.",
            chips: ["Ritmo y presión", "Secuencias", "Control del edema"],
            points: [
                "Principios técnicos y control de presión.",
                "Secuencias adaptadas según evolución del caso.",
                "Errores comunes que bajan resultados y cómo evitarlos.",
            ],
        },
        {
            emoji: "🩹",
            title: "Terapia de Compresión y Prendas",
            summary:
                "Uso inteligente de compresión: tipos de prendas, ajuste, hábitos y educación al cliente.",
            chips: ["Fajas postquirúrgicas", "Compresión adecuada", "Seguimiento"],
            points: [
                "Qué revisar: ajuste, comodidad y seguridad.",
                "Cuidados, constancia y hábitos recomendados.",
                "Alertas por presión, dolor anómalo o cambios inusuales.",
            ],
        },
        {
            emoji: "⚙️",
            title: "Técnicas Complementarias y Aparatología",
            summary:
                "Aprende cuándo conviene y cuándo no usar técnicas o equipos. Menos promesas, más criterio.",
            chips: ["Ultrasonido", "Radiofrecuencia", "Fibrosis"],
            points: [
                "Elección por objetivo: confort, textura y apoyo al proceso.",
                "Parámetros generales de seguridad y buenas prácticas.",
                "Cómo explicarlo al cliente con lenguaje profesional.",
            ],
        },
        {
            emoji: "🚨",
            title: "Manejo de Complicaciones y Emergencias",
            summary:
                "Identifica señales de alarma y aplica un protocolo de acción responsable: prioridad absoluta a la salud del cliente.",
            chips: ["Seroma", "Signos de alarma", "Derivación médica"],
            points: [
                "Signos de alerta y cuándo derivar de inmediato.",
                "Cómo documentar y comunicar con profesionalismo.",
                "Qué evitar para no empeorar una situación.",
            ],
        },
        {
            emoji: "💧",
            title: "Nutrición y Hábitos en la Recuperación",
            summary:
                "Acompañamiento educativo: hidratación, descanso, hábitos y seguimiento sencillo.",
            chips: ["Hidratación", "Descanso", "Hábitos saludables"],
            points: [
                "Hábitos que favorecen el proceso de forma general.",
                "Cómo orientar sin invadir áreas médicas.",
                "Plan de seguimiento simple y sostenible.",
            ],
        },
        {
            emoji: "✨",
            title: "Gestión de la Cabina Profesional",
            summary:
                "Estandariza tu servicio para que se vea premium: agenda, experiencia, comunicación y fidelización.",
            chips: ["Experiencia cliente", "Agenda estratégica", "Fidelización"],
            points: [
                "Estructura de sesiones y seguimiento por fases.",
                "Experiencia del cliente: antes, durante y después.",
                "Retención: continuidad, confianza y recomendación.",
            ],
        },
        {
            emoji: "🧠",
            title: "Protocolos Prácticos y Casos Clínicos",
            summary:
                "Práctica con lógica real de cabina: valoración, plan por objetivos y toma de decisiones según evolución.",
            chips: ["Casos reales", "Valoración inicial", "Checklist por sesión"],
            points: [
                "Protocolos completos de inicio a fin.",
                "Casos y decisiones: qué hacer según el progreso.",
                "Checklist profesional por sesión.",
            ],
        },
        {
            emoji: "📦",
            title: "Anexos y Material Descargable",
            summary:
                "Recursos listos para usar: guías, plantillas y documentos para implementar el método desde el primer día.",
            chips: ["Plantillas", "Guías PDF", "Material descargable"],
            points: [
                "Plantillas de control y seguimiento.",
                "Guías de comunicación y post-tratamiento.",
                "Material de apoyo descargable.",
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-[#0b0806] text-white">
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(1000px_620px_at_18%_8%,rgba(201,168,76,0.14),transparent_58%),radial-gradient(900px_560px_at_82%_86%,rgba(201,168,76,0.10),transparent_56%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0a0705_0%,#120d09_42%,#0b0806_100%)]" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/18 to-transparent" />
            </div>

            <header className="sticky top-0 z-30 border-b border-[rgba(201,168,76,0.08)] bg-[rgba(10,8,6,0.60)] backdrop-blur-xl">
                <div className="relative mx-auto h-20 max-w-6xl px-5">
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/18 to-transparent" />

                    <a
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="hidden sm:block absolute left-1/2 top-0 z-40 -translate-x-1/2 -translate-y-8"
                        aria-label="Ir al inicio"
                        title="Inicio"
                    >
                        <span className="pointer-events-none absolute left-1/2 top-[52px] h-10 w-44 -translate-x-1/2 rounded-full bg-black/70 blur-[1px]" />
                        <img
                            src={SITE.logoSrc}
                            alt="Alex Estética"
                            className="h-24 w-24 sm:h-50 sm:w-50 object-contain drop-shadow-[0_0_35px_rgba(201,168,76,0.34)]"
                        />
                    </a>

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

                            {SITE.instagramUrl ? (
                                <a
                                    href={SITE.instagramUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="ml-2 hidden h-10 w-10 items-center justify-center rounded-2xl border border-[rgba(201,168,76,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] hover:bg-white/10 sm:inline-flex"
                                    aria-label="Instagram"
                                    title="Instagram"
                                >
                                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-200" fill="none">
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
                                className="h-12 w-12 object-contain drop-shadow-[0_0_18px_rgba(201,168,76,0.35)]"
                            />
                            <div className="leading-tight">
                                <div className="font-[family:var(--font-cormorant)] text-lg font-medium tracking-[0.04em] text-[#fff4df]">
                                    {SITE.brand}
                                </div>
                                <div className="text-[11px] uppercase tracking-[0.16em] text-[#d7c6a7]/54 font-[family:var(--font-dm-sans)]">
                                    {SITE.city}
                                </div>
                            </div>
                        </a>

                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[rgba(201,168,76,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] hover:bg-white/10"
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

                {menuOpen ? (
                    <div className="border-t border-[rgba(201,168,76,0.08)] bg-[rgba(10,8,6,0.76)] backdrop-blur-xl sm:hidden">
                        <div className="mx-auto max-w-6xl px-5 py-3">
                            <div className="flex flex-col gap-1">
                                {[
                                    { href: "/", label: "Inicio" },
                                    { href: "/servicios", label: "Tratamientos" },
                                    { href: "/curso", label: "Curso" },
                                    { href: "/sobre", label: "Sobre Nosotros" },
                                    { href: "/#contacto", label: "Contacto" },
                                ].map((x) => (
                                    <a
                                        key={x.href}
                                        href={x.href}
                                        className="rounded-2xl px-3 py-2 text-sm font-semibold text-amber-100/90 hover:bg-white/5 font-[family:var(--font-dm-sans)]"
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
                                        className="rounded-2xl px-3 py-2 text-sm font-semibold text-amber-100/90 hover:bg-white/5 font-[family:var(--font-dm-sans)]"
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

            <section
                className="relative min-h-[58vh] sm:min-h-[62vh] overflow-hidden px-5 py-20 text-center sm:px-10 sm:py-24"
                style={{
                    backgroundImage: `
                        linear-gradient(to bottom, rgba(10,10,10,0.28), rgba(10,10,10,0.60)),
                        radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%),
                        url(${SITE.cursoHeroImg})
                    `,
                    backgroundSize: "cover, cover, cover",
                    backgroundPosition: "center, center, center",
                    backgroundRepeat: "no-repeat, no-repeat, no-repeat",
                }}
            >
                <div className="mx-auto max-w-4xl">
                    <span className="mb-5 inline-block text-[10.5px] font-normal uppercase tracking-[0.30em] text-[#C9A84C] font-[family:var(--font-dm-sans)]">
                        Formación Presencial · {SITE.city}
                    </span>

                    <h1 className="font-[family:var(--font-cormorant)] text-[42px] font-light leading-[1.1] text-[#FAF8F3] sm:text-[68px] drop-shadow-[0_8px_26px_rgba(0,0,0,0.28)]">
                        {COURSE.nameTop}
                        <br />
                        <em className="font-normal italic text-[#C9A84C]">
                            {COURSE.nameBottom}
                        </em>
                    </h1>

                    <p className="mx-auto mt-6 max-w-[560px] text-[15px] leading-[1.7] text-[#e7dcc5] font-[family:var(--font-dm-sans)]">
                        Aprende a acompañar procesos postquirúrgicos con más criterio,
                        seguridad y estructura profesional. Técnica, observación y
                        experiencia premium aplicadas a cabina real.
                    </p>

                    <div className="mt-9 flex flex-wrap justify-center gap-[14px]">
                        <Button href={whatsappReserva} variant="gold">
                            📲 Reservar mi plaza
                        </Button>
                        <Button
                            href={whatsappTemario}
                            variant="outline"
                            className="bg-[rgba(10,10,10,0.18)] backdrop-blur-[3px]"
                        >
                            Ver temario
                        </Button>
                    </div>
                </div>
            </section>

            <section className="border-y border-[rgba(201,168,76,0.10)] bg-transparent px-5 py-12 sm:px-10">
                <div className="mx-auto max-w-6xl">
                    <p className="text-center text-[13px] uppercase tracking-[0.04em] text-[#7A7168] font-[family:var(--font-dm-sans)]">
                        VISTA RÁPIDA DEL CURSO
                    </p>
                    <h2 className="mt-2 text-center font-[family:var(--font-cormorant)] text-[26px] font-normal text-[#FAF8F3]">
                        Todo lo importante de un vistazo
                    </h2>
                    <p className="mx-auto mt-2 max-w-[620px] text-center text-[13px] leading-[1.7] text-[#7A7168] font-[family:var(--font-dm-sans)]">
                        Antes de entrar al temario completo, aquí tienes una visión clara
                        de la formación, su enfoque y lo que te llevarás al terminarla.
                    </p>

                    <div className="mt-8 grid gap-[10px] sm:grid-cols-2 lg:grid-cols-4">
                        <StatCard label="Modalidad" value="Presencial" note="Aprendizaje guiado y práctica real" />
                        <StatCard label="Duración" value="40h" note="20h teoría · 20h práctica" />
                        <StatCard label="Enfoque" value="Premium" note="Cabina, seguridad y estructura" />
                        <StatCard label="Salida" value="Real" note="Aplicación desde el primer día" />
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-5 py-[72px] sm:px-10">
                <SectionTitle
                    tag="Para quién es"
                    title="Una formación con salida real"
                    desc="Ideal tanto si ya trabajas en estética como si quieres especializarte en una de las áreas con mayor crecimiento del sector."
                />

                <div className="grid gap-6 md:grid-cols-2">
                    <AudienceCard
                        emoji="💼"
                        title="Si ya trabajas en estética"
                        items={[
                            "Quieres elevar tu nivel técnico y trabajar con más seguridad.",
                            "Buscas ofrecer un servicio más premium y mejor estructurado.",
                            "Necesitas criterio para organizar protocolos por fases.",
                            "Quieres comunicar mejor tu trabajo y fidelizar más.",
                        ]}
                    />

                    <AudienceCard
                        emoji="🚀"
                        title="Si quieres especializarte"
                        items={[
                            "Te interesa entrar en el postquirúrgico con una base sólida.",
                            "Quieres aprender una metodología clara y aplicable.",
                            "Buscas diferenciarte con una formación seria y elegante.",
                            "Quieres sentirte preparada antes de atender estos casos.",
                        ]}
                    />
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-5 pb-[72px] sm:px-10">
                <GlassCard className="p-7 sm:p-8">
                    <SectionTitle
                        tag="Qué vas a dominar"
                        title="No es solo hacer maniobras"
                        desc="La diferencia entre una profesional correcta y una profesional premium está en el criterio, la observación y la manera de acompañar cada fase."
                    />

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-5">
                            <PointItem
                                title="Entender lo que ocurre en el cuerpo"
                                desc="Aprenderás a leer edema, inflamación, tejido, fibrosis y cicatrización con lógica clara."
                            />
                            <PointItem
                                title="Aplicar protocolos con estructura"
                                desc="Sabrás organizar sesiones según la etapa de recuperación, sin improvisar."
                            />
                            <PointItem
                                title="Trabajar con más seguridad"
                                desc="Identificarás señales normales, señales de alerta y límites de actuación."
                            />
                        </div>

                        <div className="space-y-5">
                            <PointItem
                                title="Explicar mejor al cliente"
                                desc="Aprenderás a comunicar qué haces, por qué lo haces y qué puede esperar realmente."
                            />
                            <PointItem
                                title="Elevar la experiencia de cabina"
                                desc="Desde higiene y orden hasta seguimiento y fidelización."
                            />
                            <PointItem
                                title="Tener materiales listos"
                                desc="Contarás con plantillas, guías y apoyo descargable para implementar el sistema."
                            />
                        </div>
                    </div>

                    <div className="mt-7 border border-[rgba(201,168,76,0.20)] bg-[rgba(201,168,76,0.04)] p-[14px_18px]">
                        <p className="text-[13px] leading-[1.7] text-[#7A7168] font-[family:var(--font-dm-sans)]">
                            ⚠️ <strong className="font-medium text-[#C9A84C]">Importante:</strong> Esta formación está enfocada al trabajo estético y al acompañamiento responsable del cliente.
                        </p>
                    </div>
                </GlassCard>
            </section>

            <section className="mx-auto max-w-6xl px-5 pb-[72px] sm:px-10">
                <GlassCard className="p-7 sm:p-8">
                    <SectionTitle
                        tag="Metodología"
                        title="Cómo se vive esta formación"
                        desc="La idea no es que salgas con teoría bonita, sino con una estructura clara para aplicar en casos reales."
                    />

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <InfoCard emoji="1️⃣" title="Comprender" desc="Primero entiendes la lógica del proceso y el porqué de cada fase." />
                        <InfoCard emoji="2️⃣" title="Observar" desc="Aprendes a valorar tejidos, evolución, alertas y necesidades reales." />
                        <InfoCard emoji="3️⃣" title="Aplicar" desc="Pasas a secuencias, protocolos, compresión y estructura de sesión." />
                        <InfoCard emoji="4️⃣" title="Elevar" desc="Trabajas imagen, seguimiento y experiencia premium del cliente." />
                    </div>
                </GlassCard>
            </section>

            <section className="mx-auto max-w-6xl px-5 pb-[100px] sm:px-10">
                <SectionTitle
                    tag="Programa completo"
                    title="Temario del curso"
                    desc="Abre cada módulo para ver exactamente qué trabajarás dentro de la formación."
                />

                <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="inline-flex flex-wrap gap-2">
                        <span className="border border-[rgba(201,168,76,0.20)] bg-[rgba(201,168,76,0.03)] px-3 py-1 text-[11.5px] text-[#7A7168] font-[family:var(--font-dm-sans)]">
                            {COURSE.modality}
                        </span>
                        <span className="border border-[rgba(201,168,76,0.20)] bg-[rgba(201,168,76,0.03)] px-3 py-1 text-[11.5px] text-[#7A7168] font-[family:var(--font-dm-sans)]">
                            {COURSE.hours}
                        </span>
                        <span className="border border-[rgba(201,168,76,0.20)] bg-[rgba(201,168,76,0.03)] px-3 py-1 text-[11.5px] text-[#7A7168] font-[family:var(--font-dm-sans)]">
                            {COURSE.breakdown}
                        </span>
                    </div>

                    <Button href={whatsappTemario} variant="outline" className="w-full sm:w-auto">
                        📩 Pedir info del temario
                    </Button>
                </div>

                <div className="flex flex-col gap-2">
                    {modules.map((m, idx) => (
                        <ModuleCard
                            key={m.title}
                            index={idx + 1}
                            title={m.title}
                            summary={m.summary}
                            points={m.points}
                            chips={m.chips}
                            emoji={m.emoji}
                        />
                    ))}
                </div>
            </section>

            <section className="border-t border-[rgba(201,168,76,0.10)] bg-transparent px-5 py-16 sm:px-10">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-center font-[family:var(--font-cormorant)] text-[38px] font-light text-[#FAF8F3]">
                        Lo que te llevarás al finalizar
                    </h2>
                    <p className="mt-2 text-center text-[13px] tracking-[0.04em] text-[#7A7168] font-[family:var(--font-dm-sans)]">
                        Formación diseñada para aplicar, comunicar y diferenciarte
                    </p>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        <GlassCard className="p-6">
                            <div className="mb-3 text-[14px] text-[#C9A84C]">✦</div>
                            <h3 className="font-[family:var(--font-cormorant)] text-[24px] text-[#FAF8F3]">Más seguridad</h3>
                            <p className="mt-3 text-[14px] leading-[1.7] text-[#7A7168] font-[family:var(--font-dm-sans)]">
                                Sabrás cómo actuar con lógica, límites y criterio profesional.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-6">
                            <div className="mb-3 text-[14px] text-[#C9A84C]">✦</div>
                            <h3 className="font-[family:var(--font-cormorant)] text-[24px] text-[#FAF8F3]">Más estructura</h3>
                            <p className="mt-3 text-[14px] leading-[1.7] text-[#7A7168] font-[family:var(--font-dm-sans)]">
                                Tendrás una metodología clara para organizar fases, sesiones y seguimiento.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-6">
                            <div className="mb-3 text-[14px] text-[#C9A84C]">✦</div>
                            <h3 className="font-[family:var(--font-cormorant)] text-[24px] text-[#FAF8F3]">Más valor</h3>
                            <p className="mt-3 text-[14px] leading-[1.7] text-[#7A7168] font-[family:var(--font-dm-sans)]">
                                Elevarás tu imagen, tu experiencia de cabina y la percepción premium de tu trabajo.
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-transparent px-5 py-[72px] text-center sm:px-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,168,76,0.05)_0%,transparent_70%)]" />
                <div className="relative mx-auto max-w-4xl">
                    <h2 className="font-[family:var(--font-cormorant)] text-[38px] sm:text-[54px] font-light leading-[1.1] text-[#FAF8F3]">
                        ¿Lista para llevar tu nivel
                        <br />
                        <em className="italic text-[#C9A84C]">al siguiente punto?</em>
                    </h2>

                    <p className="mx-auto mt-5 max-w-[520px] text-[14.5px] leading-[1.7] text-[#7A7168] font-[family:var(--font-dm-sans)]">
                        Escríbenos por WhatsApp y te enviamos precio, próximas fechas,
                        requisitos y disponibilidad.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-[14px]">
                        <Button href={whatsappReserva} variant="gold">
                            📲 Reservar mi cupo
                        </Button>
                        <Button href={whatsappCurso} variant="outline">
                            Consultar información
                        </Button>
                    </div>
                </div>
            </section>

            <footer className="border-t border-[rgba(201,168,76,0.15)] bg-[linear-gradient(180deg,rgba(19,14,10,0.98)_0%,rgba(12,9,7,1)_100%)] px-5 py-10 sm:px-10">
                <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
                    <div>
                        <div className="font-[family:var(--font-cormorant)] text-[22px] tracking-[0.1em] text-[#E2C47A]">
                            {SITE.brand}
                        </div>
                        <p className="mt-3 text-[12.5px] leading-[1.6] text-[#b8a78b] font-[family:var(--font-dm-sans)]">
                            {SITE.addressLine}
                            <br />
                            {SITE.city}
                            <br />
                            <br />
                            Tel.: {SITE.phoneDisplay}
                            <br />
                            {SITE.hours}
                        </p>
                    </div>

                    <div>
                        <h5 className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#E2C47A] font-[family:var(--font-dm-sans)]">
                            Información
                        </h5>
                        <div className="space-y-2">
                            <a
                                href="/sobre"
                                className="block text-[13px] text-[#b8a78b] hover:text-[#E2C47A] font-[family:var(--font-dm-sans)]"
                            >
                                Sobre Nosotros
                            </a>
                            <a
                                href="/servicios"
                                className="block text-[13px] text-[#b8a78b] hover:text-[#E2C47A] font-[family:var(--font-dm-sans)]"
                            >
                                Tratamientos
                            </a>
                            <a
                                href="/curso"
                                className="block text-[13px] text-[#b8a78b] hover:text-[#E2C47A] font-[family:var(--font-dm-sans)]"
                            >
                                Curso
                            </a>
                            <a
                                href={whatsappTemario}
                                target="_blank"
                                rel="noreferrer"
                                className="block text-[13px] text-[#b8a78b] hover:text-[#E2C47A] font-[family:var(--font-dm-sans)]"
                            >
                                Ver temario
                            </a>
                            <a
                                href={whatsappReserva}
                                target="_blank"
                                rel="noreferrer"
                                className="block text-[13px] text-[#b8a78b] hover:text-[#E2C47A] font-[family:var(--font-dm-sans)]"
                            >
                                Reservar plaza
                            </a>
                        </div>
                    </div>

                    <div>
                        <h5 className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#E2C47A] font-[family:var(--font-dm-sans)]">
                            Centro
                        </h5>
                        <div className="space-y-2">
                            <a
                                href="/sobre"
                                className="block text-[13px] text-[#b8a78b] hover:text-[#E2C47A] font-[family:var(--font-dm-sans)]"
                            >
                                Sobre Nosotros
                            </a>
                            <a
                                href={waLink("Hola! Quiero información sobre el curso.")}
                                target="_blank"
                                rel="noreferrer"
                                className="block text-[13px] text-[#b8a78b] hover:text-[#E2C47A] font-[family:var(--font-dm-sans)]"
                            >
                                WhatsApp
                            </a>
                            <a
                                href={SITE.mapsUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="block text-[13px] text-[#b8a78b] hover:text-[#E2C47A] font-[family:var(--font-dm-sans)]"
                            >
                                Google Maps
                            </a>
                            <a
                                href="/privacidad"
                                className="block text-[13px] text-[#b8a78b] hover:text-[#E2C47A] font-[family:var(--font-dm-sans)]"
                            >
                                Política de privacidad
                            </a>
                            <a
                                href="/aviso-legal"
                                className="block text-[13px] text-[#b8a78b] hover:text-[#E2C47A] font-[family:var(--font-dm-sans)]"
                            >
                                Aviso legal
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-7 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-[rgba(201,168,76,0.08)] pt-5 text-[11.5px] text-[#b8a78b] font-[family:var(--font-dm-sans)]">
                    <span>
                        © {new Date().getFullYear()} {SITE.brand} · {SITE.city}
                    </span>
                    <span>Diseñado con ♥ en {SITE.locality}</span>
                </div>
            </footer>
        </main>
    );
}
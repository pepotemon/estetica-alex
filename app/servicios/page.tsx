"use client";

import React from "react";

const SITE = {
    brand: "Alex Estética",
    city: "Gran Canaria",
    phone: "34661026192",
    logoSrc: "/alex-logo.png",

    // ✅ HERO principal
    tratamientosHeroImg: "/tratamientos-hero.jpg",

    // ✅ NUEVO HERO para el catálogo
    catalogoHeroImg: "/hero-catalogo.jpg",

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
            <path
                d="M4 10l4 3 4-7 4 7 4-3v9H4v-9z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
        </svg>
    );
}
function IconTech() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-200" fill="none">
            <path
                d="M9 2h6v3H9V2z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path
                d="M8 5h8l2 4v11H6V9l2-4z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path
                d="M9 12h6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        </svg>
    );
}
function IconSafe() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-200" fill="none">
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

/* ===== Iconos dorados para cada card ===== */
function CardIcon({ kind }: { kind: "laser" | "facial" | "body" | "vip" }) {
    const common = "h-6 w-6 text-amber-200";
    if (kind === "laser")
        return (
            <svg viewBox="0 0 24 24" className={common} fill="none">
                <path
                    d="M7 14l10-10"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />
                <path
                    d="M9 6l2 2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />
                <path
                    d="M6 17c2.5 2.5 7.5 2.5 10 0"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />
            </svg>
        );
    if (kind === "facial")
        return (
            <svg viewBox="0 0 24 24" className={common} fill="none">
                <path
                    d="M12 3c4 0 7 3 7 7 0 6-3 10-7 11-4-1-7-5-7-11 0-4 3-7 7-7z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                />
                <path
                    d="M9 11c1.5 1.5 4.5 1.5 6 0"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />
            </svg>
        );
    if (kind === "body")
        return (
            <svg viewBox="0 0 24 24" className={common} fill="none">
                <path
                    d="M8 6c1-2 2-3 4-3s3 1 4 3"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />
                <path
                    d="M7 9c1 2 1 8 5 12 4-4 4-10 5-12"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    return (
        <svg viewBox="0 0 24 24" className={common} fill="none">
            <path
                d="M12 3l2.7 5.6 6.1.9-4.4 4.2 1 6.1L12 17.8 6.6 19.8l1-6.1-4.4-4.2 6.1-.9L12 3z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />
        </svg>
    );
}

/* ===== Card servicios ===== */
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

            <div className="mx-6 h-px bg-gradient-to-r from-transparent via-amber-200/20 to-transparent" />

            <div className="relative mt-4 aspect-[16/10] overflow-hidden">
                <img
                    src={imageSrc}
                    alt={title}
                    className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.65),transparent_65%)]" />
            </div>
        </div>
    );
}

/* ===========================
   Catálogo Accordion
=========================== */

function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-full border border-amber-300/20 bg-black/35 px-3 py-1 text-xs font-semibold text-amber-100/80">
            {children}
        </span>
    );
}

function SectionTitle({
    title,
    subtitle,
}: {
    title: string;
    subtitle?: string;
}) {
    return (
        <div className="mb-6">
            <div className="text-2xl font-semibold text-amber-100">{title}</div>
            {subtitle ? (
                <div className="mt-2 text-sm text-amber-100/65">{subtitle}</div>
            ) : null}
        </div>
    );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
            <path
                d="M20 11.9c0 4.5-3.7 8.1-8.2 8.1-1.4 0-2.7-.3-3.9-.9L4 20l1-3.6c-.7-1.2-1.1-2.6-1.1-4.2C3.9 7.6 7.5 4 12 4c4.5 0 8 3.5 8 7.9z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path
                d="M9.3 9.2c.1-.4.5-.7.9-.7h.7c.3 0 .6.2.7.5l.5 1.2c.1.3.1.6-.1.8l-.5.6c.4.8 1.1 1.5 1.9 1.9l.6-.5c.2-.2.6-.2.8-.1l1.2.5c.3.1.5.4.5.7v.7c0 .4-.3.8-.7.9-.7.2-1.5.2-2.5-.1-2.1-.6-4.3-2.8-4.9-4.9-.3-1-.3-1.8-.1-2.5z"
                fill="currentColor"
                opacity="0.9"
            />
        </svg>
    );
}

function ItemCard({
    icon,
    title,
    desc,
    tags,
    whatsappHref,
}: {
    icon?: string;
    title: string;
    desc: string;
    tags?: string[];
    whatsappHref: string;
}) {
    return (
        <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-start gap-4">
                {icon ? (
                    <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-2xl border border-amber-300/20 bg-black/40 text-sm font-semibold text-amber-200">
                        {icon}
                    </div>
                ) : null}

                <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-amber-100 sm:text-base">
                        {title}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-amber-100/70">
                        {desc}
                    </div>

                    {tags && tags.length ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {tags.map((t) => (
                                <Tag key={t}>{t}</Tag>
                            ))}
                        </div>
                    ) : null}

                    {/* ✅ Botón WhatsApp por tratamiento */}
                    <div className="mt-5">
                        <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-black/35 px-4 py-2 text-xs font-semibold text-amber-100/90 hover:bg-white/5 transition"
                            title={`Consultar ${title} por WhatsApp`}
                            aria-label={`Consultar ${title} por WhatsApp`}
                        >
                            <WhatsAppIcon className="h-4 w-4 text-amber-200" />
                            <span>Consultar</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AccordionSection({
    id,
    indexLabel,
    title,
    subtitle,
    note,
    thumbSrc,
    children,
    open,
    onToggle,
}: {
    id: string;
    indexLabel: string;
    title: string;
    subtitle?: string;
    note?: string;
    thumbSrc?: string;
    children: React.ReactNode;
    open: boolean;
    onToggle: (next: boolean) => void;
}) {
    return (
        <details
            id={id}
            className="group rounded-[2rem] border border-amber-300/15 bg-black/35 backdrop-blur open:bg-black/40 scroll-mt-28"
            open={open}
            onToggle={(e) => onToggle((e.currentTarget as HTMLDetailsElement).open)}
        >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                <div className="flex items-center gap-4 min-w-0">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl border border-amber-300/20 bg-black/45 text-sm font-semibold text-amber-200">
                        {indexLabel}
                    </div>

                    <div className="min-w-0">
                        <div className="text-base font-semibold text-amber-100 sm:text-lg">
                            {title}
                        </div>
                        {subtitle ? (
                            <div className="mt-1 text-sm text-amber-100/60">{subtitle}</div>
                        ) : null}

                        {/* ✅ Mini imagen en móvil (debajo del título) */}
                        {thumbSrc ? (
                            <div className="mt-3 sm:hidden relative h-16 w-full overflow-hidden rounded-2xl border border-amber-300/15 bg-black/40">
                                <img
                                    src={thumbSrc}
                                    alt={title}
                                    className="h-full w-full object-cover opacity-85"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.6),transparent_70%)]" />
                            </div>
                        ) : null}
                    </div>
                </div>

                {/* ✅ Derecha: mini imagen + flecha */}
                <div className="flex items-center gap-3">
                    {thumbSrc ? (
                        <div className="relative hidden sm:block h-14 w-24 overflow-hidden rounded-2xl border border-amber-300/15 bg-black/40">
                            <img
                                src={thumbSrc}
                                alt={title}
                                className="h-full w-full object-cover opacity-90"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(0,0,0,0.55),transparent_70%)]" />
                        </div>
                    ) : null}

                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/35">
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
                </div>
            </summary>

            <div className="px-6 pb-6">
                <div className="mx-1 h-px bg-gradient-to-r from-transparent via-amber-200/20 to-transparent" />

                {note ? (
                    <div className="mt-5 rounded-[1.6rem] border border-white/10 bg-black/30 p-5 text-sm text-amber-100/70">
                        {note}
                    </div>
                ) : null}

                <div className="mt-6">{children}</div>
            </div>
        </details>
    );
}

type CatalogItem = {
    icon?: string;
    title: string;
    desc: string;
    tags?: string[];
};

type CatalogSection = {
    id: string;
    indexLabel: string;
    title: string;
    subtitle?: string;
    note?: string;
    thumbSrc?: string;
    items: CatalogItem[];
};

// ✅ Puedes cambiar estas imágenes por las tuyas reales
const CATALOG: CatalogSection[] = [
    {
        id: "cuerpo",
        indexLabel: "01",
        title: "Cuerpo",
        subtitle: "Tratamientos corporales",
        thumbSrc: "/catalogo/cuerpo.jpg",
        items: [
            {
                icon: "✦",
                title: "Masaje Moldeador con Radiofrecuencia",
                desc: "Combinación que moldea la figura, activa la circulación y reafirma la piel mediante calor profundo. Disponible en sesión individual o bonos.",
                tags: ["Sesión", "Bono 5", "Bono 10"],
            },
            {
                icon: "◈",
                title: "Masaje Moldeador con Diatermia Indiba",
                desc: "Tecnología Indiba de alta eficacia combinada con masaje moldeador para reducir volumen y mejorar la calidad de la piel en profundidad.",
                tags: ["Sesión", "Bono 5", "Bono 10"],
            },
            {
                icon: "❖",
                title: "Masaje Moldeador + Cavitación + Radiofrecuencia + Vacumterapia",
                desc: "Tratamiento completo que combina cuatro técnicas para reducir la celulitis, moldear y tonificar el cuerpo en una sola sesión.",
                tags: ["Sesión", "Bono 5", "Bono 10"],
            },
            {
                icon: "◯",
                title: "Vacum Rotation",
                desc: "Vacumterapia rotatoria que estimula la circulación linfática, reduce la celulitis y reafirma los tejidos de forma visible y progresiva.",
                tags: ["Consultar sesiones"],
            },
            {
                icon: "❄",
                title: "Criolipolisis",
                desc: "Eliminación de grasa localizada mediante frío controlado. Tratamiento no invasivo que destruye las células grasas sin tiempo de recuperación.",
                tags: ["Consultar zonas"],
            },
            {
                icon: "⚡",
                title: "EMS Sculpt",
                desc: "Estimulación muscular electromagnética de alta intensidad que tonifica y define la musculatura equivalente a miles de contracciones en una sola sesión.",
                tags: ["Consultar programa"],
            },
        ],
    },
    {
        id: "recuperacion",
        indexLabel: "02",
        title: "Recuperación",
        subtitle: "Tratamientos postquirúrgicos por etapas",
        thumbSrc: "/catalogo/recuperacion.jpg",
        note:
            "Cada etapa está diseñada para acompañarte en cada fase de tu recuperación. Consultamos tu caso de forma personalizada y ajustamos las sesiones según tu pauta.",
        items: [
            {
                icon: "1",
                title: "Drenaje Postquirúrgico — 1ª Etapa",
                desc: "Primera fase de recuperación. Drena el exceso de líquidos, reduce la inflamación inicial y prepara los tejidos para las siguientes etapas del proceso.",
                tags: ["Etapa inicial", "Sesiones según pauta"],
            },
            {
                icon: "2",
                title: "Masaje Linfático Postquirúrgico con Ultrasonido — 2ª Etapa",
                desc: "Ultrasonido terapéutico que favorece la reabsorción profunda de líquidos, mejora la fibrosis y acelera la recuperación de los tejidos.",
                tags: ["Etapa intermedia", "Sesiones según pauta"],
            },
            {
                icon: "3",
                title: "Masaje Linfático Postquirúrgico con Indiba — 3ª Etapa",
                desc: "Fase final con tecnología Indiba que reafirma, mejora las cicatrices y consolida los resultados definitivos de la cirugía estética.",
                tags: ["Etapa final", "Bono 5", "Bono 10"],
            },
        ],
    },
    {
        id: "rostro",
        indexLabel: "03",
        title: "Rostro",
        subtitle: "Tratamientos faciales",
        thumbSrc: "/catalogo/rostro.jpg",
        items: [
            {
                title: "Limpieza Facial Profunda",
                desc: "Limpieza completa en profundidad para una piel revitalizada y luminosa.",
            },
            {
                title: "Microdermoabrasión / Punta de Diamante",
                desc: "Exfoliación mecánica que renueva la textura de la piel y reduce imperfecciones.",
            },
            {
                title: "Dermapem + Punta de Diamante + Ácido Hialurónico",
                desc: "Hidratación profunda con ácido hialurónico no reticulado para un efecto relleno natural.",
            },
            {
                title: "Dermapem + Punta de Diamante + Vitamina C",
                desc: "Iluminación y antioxidación para combatir manchas y el envejecimiento cutáneo.",
            },
            {
                title: "Dermapem + Punta de Diamante + Cóctel de Vitaminas",
                desc: "Nutrición intensiva con complejo vitamínico para revitalizar la piel apagada.",
            },
            {
                title: "Dermapem + Punta de Diamante + Exosomas",
                desc: "Regeneración celular avanzada con tecnología de exosomas de última generación.",
            },
            {
                title: "Carbón Peel",
                desc: "Tratamiento láser con carbón que reduce poros, controla la grasa y unifica el tono.",
            },
            {
                title: "Radiofrecuencia Indiba Facial + Punta de Diamante",
                desc: "Reafirmación y rejuvenecimiento profundo con tecnología Indiba de alto rendimiento.",
            },
            {
                title: "Radiofrecuencia Indiba Facial — Bono 6 sesiones",
                desc: "Programa intensivo para resultados duraderos de lifting y firmeza facial.",
                tags: ["Bono 6"],
            },
            {
                title: "Radiofrecuencia Fraccionada con Nano Agujas",
                desc: "Última generación con microagujas: Oligoelementos · Exosomas · Polivitaminas.",
            },
        ],
    },
    {
        id: "laser-avanzado",
        indexLabel: "04",
        title: "Láser Avanzado",
        subtitle: "Eliminación de tatuajes",
        thumbSrc: "/catalogo/laser.jpg",
        items: [
            {
                icon: "◉",
                title: "Eliminación con Láser Pico Segundo",
                desc: "Tecnología láser picosegundo de última generación que fragmenta el pigmento del tatuaje en micropartículas con mínima molestia y máxima eficacia. Apta para todos los colores y fototipos de piel.",
                tags: ["Consultar según tamaño y zona"],
            },
        ],
    },
    {
        id: "depilacion",
        indexLabel: "05",
        title: "Depilación Láser",
        subtitle: "Mujer · Hombre · Paquetes completos",
        thumbSrc: "/catalogo/depilacion.jpg",
        note: "✦ Pack de zonas específicas — consultar precio personalizado.",
        items: [
            {
                title: "Paquetes completos",
                desc: "Cuerpo completo sin cara · Cuerpo completo con cara · Cara.",
            },
            { title: "Cara", desc: "Rostro completo · Bigote · Mentón." },
            { title: "Tronco", desc: "Axilas · Línea del alba · Abdomen completo." },
            { title: "Brazos", desc: "Brazo · Ante-brazo · Brazo + Ante-brazo." },
            {
                title: "Zona Íntima",
                desc: "Zona íntima + Perianal · Axilas + Zona íntima · Axilas + Zona íntima + Perianal · Axilas + Zona íntima + Perianal + Piernas.",
            },
            { title: "Piernas", desc: "Muslos · Piernas · Muslos y piernas." },
        ],
    },
    {
        id: "cejas-pestanas",
        indexLabel: "06",
        title: "Cejas & Pestañas",
        subtitle: "Diseño, definición y mirada",
        thumbSrc: "/catalogo/cejas.jpg",
        items: [
            {
                icon: "〜",
                title: "Depilación con Hilo + Henna o Tinte",
                desc: "Depilación de precisión con hilo para un trazo perfecto, combinada con henna o tinte para definir, rellenar y darle color a las cejas de forma natural y duradera.",
                tags: ["Consultar disponibilidad"],
            },
            {
                icon: "◎",
                title: "Depilación con Hilo + Laminado + Tinte o Henna",
                desc: "Tratamiento completo de cejas: depilación con hilo, laminado para fijar y dar volumen a los pelitos, y color con tinte o henna para un acabado impecable y duradero.",
                tags: ["Consultar disponibilidad"],
            },
            {
                icon: "✧",
                title: "Lifting de Pestañas",
                desc: "Riza y levanta las pestañas naturales desde la raíz para conseguir una mirada más abierta y expresiva de forma duradera, sin necesidad de rizador ni máscara.",
                tags: ["Consultar disponibilidad"],
            },
            {
                icon: "✦",
                title: "Lifting de Pestañas + Tinte",
                desc: "Lifting completo con tinte incluido para intensificar el color de las pestañas y conseguir una mirada todavía más intensa, oscura y definida sin maquillaje.",
                tags: ["Consultar disponibilidad"],
            },
        ],
    },
];

export default function ServiciosPage() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    // ✅ Catálogo: todo cerrado al entrar
    const [openIds, setOpenIds] = React.useState<Set<string>>(() => new Set());

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

    function toggleSection(id: string, next: boolean) {
        setOpenIds((prev) => {
            const s = new Set(prev);
            if (next) s.add(id);
            else s.delete(id);
            return s;
        });
    }

    function jumpToSection(id: string) {
        // ✅ abrir al presionar el chip del índice
        setOpenIds((prev) => {
            const s = new Set(prev);
            s.add(id);
            return s;
        });

        requestAnimationFrame(() => {
            const el = document.getElementById(id);
            if (!el) return;
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            history.replaceState(null, "", `#${id}`);
        });
    }

    function perItemWhatsapp(title: string) {
        return waLink(
            `Hola! Deseo más información del tratamiento "${title}" en ${SITE.brand}. ¿Me puedes decir precio y disponibilidad?`
        );
    }

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
                            {/* ✅ CAMBIO: ahora va a la nueva página /sobre */}
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
                                <div className="text-sm font-semibold tracking-wide text-amber-100">
                                    {SITE.brand}
                                </div>
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
                                    // ✅ CAMBIO: /sobre
                                    { href: "/sobre", label: "Sobre Nosotros" },
                                    { href: "/servicios", label: "Tratamientos" },
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
                            Tratamientos premium con atención personalizada, protocolos seguros y una experiencia
                            elegante en cabina.
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

            {/* Nuestros Servicios */}
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

            {/* Catálogo */}
            <section className="relative isolate overflow-hidden border-t border-white/10">
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <img
                        src={SITE.catalogoHeroImg}
                        alt="Catálogo - Alex Estética"
                        className="h-full w-full object-cover opacity-20"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.78),rgba(0,0,0,0.92),rgba(0,0,0,0.96))]" />
                    <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_10%,rgba(255,215,128,0.12),transparent_60%)]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/25 to-transparent" />
                </div>

                <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
                    <SectionTitle
                        title="Catálogo de Tratamientos"
                        subtitle="Toca una sección para ver todos los tratamientos disponibles."
                    />

                    {/* Índice rápido */}
                    <div className="mb-8 flex flex-wrap gap-2">
                        {CATALOG.map((s) => (
                            <button
                                key={s.id}
                                type="button"
                                onClick={() => jumpToSection(s.id)}
                                className="rounded-full border border-amber-300/20 bg-black/35 px-4 py-2 text-xs font-semibold text-amber-100/80 hover:bg-white/5 transition"
                            >
                                {s.indexLabel} · {s.title}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-5">
                        {CATALOG.map((sec) => (
                            <AccordionSection
                                key={sec.id}
                                id={sec.id}
                                indexLabel={sec.indexLabel}
                                title={sec.title}
                                subtitle={sec.subtitle}
                                note={sec.note}
                                thumbSrc={sec.thumbSrc}
                                open={openIds.has(sec.id)}
                                onToggle={(next) => toggleSection(sec.id, next)}
                            >
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {sec.items.map((it) => (
                                        <ItemCard
                                            key={`${sec.id}-${it.title}`}
                                            icon={it.icon}
                                            title={it.title}
                                            desc={it.desc}
                                            tags={it.tags}
                                            whatsappHref={perItemWhatsapp(it.title)}
                                        />
                                    ))}
                                </div>
                            </AccordionSection>
                        ))}
                    </div>

                    {/* CTA final */}
                    <div className="mt-10 rounded-[2rem] border border-amber-300/15 bg-black/35 p-7 backdrop-blur sm:p-10">
                        <div className="text-2xl font-semibold text-amber-100">¿Hablamos de tu caso?</div>
                        <p className="mt-2 max-w-3xl text-amber-100/70">
                            Cada piel es única. Cuéntanos lo que necesitas y te asesoramos sin compromiso. Te
                            orientamos según tu objetivo (cuerpo, postquirúrgico, rostro, láser, depilación o
                            cejas/pestañas).
                        </p>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <Button href={whatsappGeneral} variant="gold">
                                Solicitar cita
                            </Button>
                            <Button href={whatsappCatalogo} variant="outline">
                                Pedir catálogo completo
                            </Button>
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
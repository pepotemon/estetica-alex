"use client";

import React from "react";
import {
    addDoc,
    collection,
    limit,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    where,
    Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

const SITE = {
    brand: "Alex Estética",
    city: "Gran Canaria",
    phone: "34661026192",
    phoneDisplay: "661 026 192",
    logoSrc: "/alex-logo.png",
    instagramUrl:
        "https://www.instagram.com/alex_postquirurgicoscanarias?igsh=MTg3Y2NibWMwYTl5ZQ==",
};

const OTHER_SERVICE_VALUE = "__other__";

const SERVICE_GROUPS = [
    {
        label: "Tratamientos corporales",
        options: [
            "Masaje Moldeador con Radiofrecuencia",
            "Masaje Moldeador con Diatermia Indiba",
            "Masaje Moldeador + Cavitación + Radiofrecuencia + Vacumterapia",
            "Criolipólisis",
            "EMS Sculpt",
            "Masaje Manual + Vacum Rotation + Cavitación o Radiofrecuencia",
        ],
    },
    {
        label: "Pre y postoperatorio",
        options: [
            "Tratamiento Preoperatorio — Preparación con Diatermia Indiba",
            "Tratamiento Postoperatorio — Protocolo en 3 Etapas",
            "Drenaje Postquirúrgico — 1ª Etapa",
            "Masaje Linfático Postquirúrgico con Ultrasonido — 2ª Etapa",
            "Masaje Linfático Postquirúrgico con Indiba — 3ª Etapa",
            "Mantenimiento post-3 meses — Indiba + Masaje Moldeador",
        ],
    },
    {
        label: "Tratamientos faciales",
        options: [
            "Limpieza Facial Hidratante con Indiba",
            "Limpieza Facial Profunda",
            "Derma Pen + Punta de Diamante",
            "Indiba Facial + Dermoabrasión",
            "Hidralips",
            "Carbón Peel",
            "Radiofrecuencia Fraccionada con Nano Agujas",
        ],
    },
    {
        label: "Láser avanzado",
        options: ["Eliminación de Tatuajes con Láser Picosegundo"],
    },
    {
        label: "Cejas y pestañas",
        options: [
            "Lifting de Pestañas — Técnica Coreana",
            "Depilación con Hilo — Visagismo",
            "Depilación con Hilo + Tinte Híbrido",
            "Laminado de Cejas — Técnica Coreana",
            "Pack Mirada Completa",
        ],
    },
    {
        label: "Depilación láser mujer",
        options: [
            "Depilación Láser Mujer — Cuerpo completo (sin rostro)",
            "Depilación Láser Mujer — Cuerpo completo con rostro",
            "Depilación Láser Mujer — Rostro completo",
            "Depilación Láser Mujer — Bigote",
            "Depilación Láser Mujer — Mentón",
            "Depilación Láser Mujer — Brazo",
            "Depilación Láser Mujer — Antebrazo",
            "Depilación Láser Mujer — Brazo y antebrazo",
            "Depilación Láser Mujer — Piernas",
            "Depilación Láser Mujer — Muslos",
            "Depilación Láser Mujer — Muslos y piernas",
            "Depilación Láser Mujer — Zona íntima y perianal",
            "Depilación Láser Mujer — Axila + Zona íntima",
            "Depilación Láser Mujer — Axila + Zona íntima + Perianal",
            "Depilación Láser Mujer — Axila + Zona íntima + Perianal + Piernas",
        ],
    },
    {
        label: "Depilación láser hombre",
        options: [
            "Depilación Láser Hombre — Cuerpo completo sin rostro",
            "Depilación Láser Hombre — Rostro completo",
            "Depilación Láser Hombre — Brazo",
            "Depilación Láser Hombre — Antebrazo y manos",
            "Depilación Láser Hombre — Brazo, antebrazo y manos",
            "Depilación Láser Hombre — Axilas",
            "Depilación Láser Hombre — Piernas",
            "Depilación Láser Hombre — Muslos",
            "Depilación Láser Hombre — Muslos y piernas",
            "Depilación Láser Hombre — Zona íntima y perianal",
            "Depilación Láser Hombre — Pecho",
            "Depilación Láser Hombre — Abdomen",
            "Depilación Láser Hombre — Pecho y abdomen",
            "Depilación Láser Hombre — Espalda",
        ],
    },
] as const;

type FirestoreReview = {
    name?: string;
    phone?: string | null;
    meta?: string | null;
    service?: string | null;
    text?: string;
    comment?: string;
    stars?: number;
    rating?: number;
    approved?: boolean;
    createdAt?: Timestamp | Date | null;
    source?: string;
};

type Review = {
    id: string;
    name: string;
    meta: string;
    text: string;
    stars: 1 | 2 | 3 | 4 | 5;
    when: string;
};

function waLink(text: string) {
    return `https://wa.me/${SITE.phone}?text=${encodeURIComponent(text)}`;
}

function NavLink({
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
            className="text-[13px] font-medium tracking-[0.04em] text-[#d7c6a7]/72 transition hover:text-[#fff4df]"
        >
            {children}
        </a>
    );
}

function Sep() {
    return <span className="select-none text-[#d7c6a7]/28">|</span>;
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
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-[12px] sm:text-sm font-semibold uppercase tracking-[0.08em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300/30";
    const styles =
        variant === "gold"
            ? "bg-[linear-gradient(135deg,#f1d78f_0%,#ddb85a_30%,#c89f3f_55%,#f4e4b5_100%)] text-black shadow-[0_12px_34px_rgba(201,168,76,0.24)] hover:-translate-y-0.5 hover:brightness-105"
            : "border border-[rgba(201,168,76,0.22)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.015)_100%)] text-amber-100 hover:border-[rgba(201,168,76,0.34)] hover:bg-white/10";

    return (
        <a
            href={href}
            className={`${base} ${styles} ${className}`}
            target={newTab ? "_blank" : undefined}
            rel={newTab ? "noreferrer" : undefined}
        >
            {children}
        </a>
    );
}

function StarButton({
    value,
    selected,
    onClick,
}: {
    value: number;
    selected: boolean;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={`Puntuar con ${value} estrellas`}
            className="transition duration-200 hover:scale-110"
        >
            <svg
                viewBox="0 0 24 24"
                className={`h-9 w-9 ${selected ? "text-[#C9A84C]" : "text-[#C9A84C]/25"}`}
                fill={selected ? "currentColor" : "none"}
            >
                <path
                    d="M12 3l2.7 5.6 6.1.9-4.4 4.2 1 6.1L12 17.8 6.6 19.8l1-6.1-4.4-4.2 6.1-.9L12 3z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}

function InputField({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[#C9A84C]">
                {label}
            </label>
            {children}
        </div>
    );
}

function normalizeStars(value?: number) {
    const safe = Math.round(Number(value ?? 5));
    if (safe < 1) return 1 as const;
    if (safe > 5) return 5 as const;
    return safe as 1 | 2 | 3 | 4 | 5;
}

function formatRelativeDate(input?: Timestamp | Date | null) {
    if (!input) return "Reciente";

    const date =
        input instanceof Timestamp ? input.toDate() : input instanceof Date ? input : null;

    if (!date) return "Reciente";

    const diffMs = Date.now() - date.getTime();
    const diffDays = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));

    if (diffDays <= 0) return "Hoy";
    if (diffDays === 1) return "Hace 1 día";
    if (diffDays < 7) return `Hace ${diffDays} días`;
    if (diffDays < 30) {
        const weeks = Math.floor(diffDays / 7);
        return weeks === 1 ? "Hace 1 semana" : `Hace ${weeks} semanas`;
    }
    if (diffDays < 365) {
        const months = Math.floor(diffDays / 30);
        return months === 1 ? "Hace 1 mes" : `Hace ${months} meses`;
    }

    const years = Math.floor(diffDays / 365);
    return years === 1 ? "Hace 1 año" : `Hace ${years} años`;
}

function mapFirestoreReview(id: string, data: FirestoreReview): Review {
    return {
        id,
        name: (data.name || "Cliente").trim(),
        meta: (data.meta || data.service || "Experiencia en Alex Estética").trim(),
        text: (data.text || data.comment || "").trim(),
        stars: normalizeStars(data.stars ?? data.rating ?? 5),
        when: formatRelativeDate(data.createdAt ?? null),
    };
}

function StarRow({ value }: { value: number }) {
    const full = Math.max(0, Math.min(5, Math.round(value)));
    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => {
                const filled = i < full;
                return (
                    <svg
                        key={i}
                        viewBox="0 0 24 24"
                        className={`h-4 w-4 ${filled ? "text-[#C9A84C]" : "text-[#C9A84C]/20"}`}
                        fill={filled ? "currentColor" : "none"}
                    >
                        <path
                            d="M12 3l2.7 5.6 6.1.9-4.4 4.2 1 6.1L12 17.8 6.6 19.8l1-6.1-4.4-4.2 6.1-.9L12 3z"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinejoin="round"
                        />
                    </svg>
                );
            })}
        </div>
    );
}

function ReviewCard({ review }: { review: Review }) {
    return (
        <article
            className="
        min-w-[290px] max-w-[290px] sm:min-w-[360px] sm:max-w-[360px]
        rounded-[1.8rem] border border-[rgba(201,168,76,0.14)]
        bg-[linear-gradient(180deg,rgba(24,18,13,0.95)_0%,rgba(15,12,9,0.92)_100%)]
        p-6 shadow-[0_12px_34px_rgba(0,0,0,0.24)]
      "
        >
            <div className="flex items-start justify-between gap-4">
                <StarRow value={review.stars} />
                <span className="text-[11px] uppercase tracking-[0.12em] text-[#6A6257]">
                    {review.when}
                </span>
            </div>

            <p className="mt-5 font-[family:var(--font-cormorant)] text-[23px] italic leading-[1.65] text-[#d7c6a7]">
                “{review.text}”
            </p>

            <div className="mt-6 border-t border-[rgba(201,168,76,0.10)] pt-4">
                <div className="text-[13px] font-medium tracking-[0.05em] text-[#F5F0E8]">
                    {review.name}
                </div>
                <div className="mt-1 text-[11.5px] text-[#6A6257]">{review.meta}</div>
            </div>
        </article>
    );
}

export default function OpinarPage() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [selectedService, setSelectedService] = React.useState("");
    const [otherService, setOtherService] = React.useState("");
    const [text, setText] = React.useState("");
    const [stars, setStars] = React.useState(5);

    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState("");

    const [reviews, setReviews] = React.useState<Review[]>([]);
    const [reviewsLoading, setReviewsLoading] = React.useState(true);

    const reviewsScrollerRef = React.useRef<HTMLDivElement | null>(null);

    const whatsappGeneral = waLink(
        `Hola Alex! Quiero agendar una cita en ${SITE.brand}. ¿Me puedes dar disponibilidad?`
    );

    React.useEffect(() => {
        const reviewsRef = collection(db, "reviews");
        const reviewsQuery = query(
            reviewsRef,
            where("approved", "==", true),
            orderBy("createdAt", "desc"),
            limit(20)
        );

        const unsubscribe = onSnapshot(
            reviewsQuery,
            (snapshot) => {
                const items = snapshot.docs
                    .map((doc) => mapFirestoreReview(doc.id, doc.data() as FirestoreReview))
                    .filter((item) => item.text.length > 0);

                setReviews(items);
                setReviewsLoading(false);
            },
            (err) => {
                console.error(err);
                setReviews([]);
                setReviewsLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    const resolvedMeta = React.useMemo(() => {
        if (selectedService === OTHER_SERVICE_VALUE) {
            return otherService.trim() || "Otro tratamiento";
        }
        return selectedService.trim();
    }, [selectedService, otherService]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setSuccess(false);

        const cleanName = name.trim();
        const cleanPhone = phone.trim();
        const cleanText = text.trim();
        const cleanMeta = resolvedMeta.trim();

        if (!cleanName) {
            setError("Por favor, escribe tu nombre.");
            return;
        }

        if (!cleanMeta) {
            setError("Selecciona un tratamiento o servicio.");
            return;
        }

        if (!cleanText || cleanText.length < 12) {
            setError("El comentario debe tener al menos 12 caracteres.");
            return;
        }

        if (stars < 1 || stars > 5) {
            setError("Selecciona una calificación válida.");
            return;
        }

        try {
            setLoading(true);

            await addDoc(collection(db, "reviews"), {
                name: cleanName,
                phone: cleanPhone || null,
                meta: cleanMeta,
                service: cleanMeta,
                text: cleanText,
                comment: cleanText,
                stars,
                rating: stars,
                createdAt: serverTimestamp(),
                approved: true,
                source: "web",
            });

            setName("");
            setPhone("");
            setSelectedService("");
            setOtherService("");
            setText("");
            setStars(5);
            setSuccess(true);

            if (reviewsScrollerRef.current) {
                reviewsScrollerRef.current.scrollTo({
                    left: 0,
                    behavior: "smooth",
                });
            }
        } catch (err) {
            console.error(err);
            setError("No se pudo enviar tu reseña. Inténtalo de nuevo.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-[#080808] text-white">
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.05)_0%,transparent_34%),linear-gradient(180deg,#080808_0%,#111111_45%,#080808_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(900px_480px_at_80%_22%,rgba(201,168,76,0.08),transparent_60%)]" />
            </div>

            <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(201,168,76,0.08)] bg-[rgba(10,8,6,0.60)] backdrop-blur-xl">
                <div className="relative mx-auto h-20 max-w-6xl px-5">
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/18 to-transparent" />

                    <a
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="absolute left-1/2 top-0 z-40 hidden -translate-x-1/2 -translate-y-8 sm:block"
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
                            <NavLink href="/sobre">Sobre Nosotros</NavLink>
                            <Sep />
                            <NavLink href="/#contacto">Contacto</NavLink>
                        </nav>

                        <div className="w-[180px]" />

                        <div className="flex items-center gap-2">
                            <nav className="flex items-center gap-4">
                                <NavLink href="/servicios">Tratamientos</NavLink>
                                <Sep />
                                <NavLink href="/curso">Curso</NavLink>
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
                                <div className="text-[11px] uppercase tracking-[0.16em] text-[#d7c6a7]/54">
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
                                        className="rounded-2xl px-3 py-2 text-sm font-semibold text-amber-100/90 hover:bg-white/5"
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

            <div className="pt-20">
                <section className="relative overflow-hidden border-b border-[rgba(201,168,76,0.10)]">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(201,168,76,0.05)_0%,transparent_70%)]" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/14 to-transparent" />

                    <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-24">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(201,168,76,0.20)] bg-[rgba(18,14,10,0.45)] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-amber-100/82 backdrop-blur-[6px]">
                                <span className="inline-block h-2 w-2 rounded-full bg-amber-300" />
                                Opiniones reales
                            </div>

                            <h1 className="mt-6 font-[family:var(--font-cormorant)] text-[42px] sm:text-[68px] font-light leading-[1.02] text-[#FAF8F3]">
                                Cuéntanos tu
                                <span className="block italic text-[#C9A84C]">experiencia</span>
                            </h1>

                            <p className="mt-5 max-w-2xl text-[14.5px] leading-[1.8] text-[#b8a78b]">
                                Si ya viviste tu experiencia en Alex Estética, deja tu comentario aquí.
                                Tu opinión aparecerá directamente publicada y ayudará a otras personas a
                                conocer una experiencia real del centro.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Button href={whatsappGeneral} variant="gold">
                                    Hablar por WhatsApp
                                </Button>
                                <Button href="/" variant="outline" newTab={false}>
                                    Volver al inicio
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
                    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                        <div className="rounded-[2rem] border border-[rgba(201,168,76,0.14)] bg-[linear-gradient(180deg,rgba(24,18,13,0.92)_0%,rgba(15,12,9,0.88)_100%)] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)] sm:p-8">
                            <div className="mb-8">
                                <div className="text-[10px] uppercase tracking-[0.30em] text-[#d9b861]/82">
                                    Formulario de reseña
                                </div>
                                <h2 className="mt-3 font-[family:var(--font-cormorant)] text-[34px] font-light text-[#FAF8F3]">
                                    Déjanos tu comentario
                                </h2>
                                <p className="mt-3 text-[14px] leading-[1.75] text-[#b8a78b]">
                                    Tu reseña se publicará con la misma estética premium del sitio.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <InputField label="Nombre">
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Tu nombre"
                                        className="w-full rounded-[1.2rem] border border-[rgba(201,168,76,0.18)] bg-[rgba(10,10,10,0.45)] px-4 py-3 text-sm text-[#FAF8F3] outline-none placeholder:text-[#8f8577] focus:border-[#C9A84C]"
                                    />
                                </InputField>

                                <InputField label="Teléfono">
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Opcional"
                                        className="w-full rounded-[1.2rem] border border-[rgba(201,168,76,0.18)] bg-[rgba(10,10,10,0.45)] px-4 py-3 text-sm text-[#FAF8F3] outline-none placeholder:text-[#8f8577] focus:border-[#C9A84C]"
                                    />
                                </InputField>

                                <InputField label="Tratamiento o servicio">
                                    <select
                                        value={selectedService}
                                        onChange={(e) => setSelectedService(e.target.value)}
                                        className="w-full rounded-[1.2rem] border border-[rgba(201,168,76,0.18)] bg-[rgba(10,10,10,0.45)] px-4 py-3 text-sm text-[#FAF8F3] outline-none focus:border-[#C9A84C]"
                                    >
                                        <option value="" className="bg-[#15110d] text-[#FAF8F3]">
                                            Selecciona tu tratamiento o servicio
                                        </option>

                                        {SERVICE_GROUPS.map((group) => (
                                            <optgroup
                                                key={group.label}
                                                label={group.label}
                                                className="bg-[#15110d] text-[#d7c6a7]"
                                            >
                                                {group.options.map((option) => (
                                                    <option
                                                        key={option}
                                                        value={option}
                                                        className="bg-[#15110d] text-[#FAF8F3]"
                                                    >
                                                        {option}
                                                    </option>
                                                ))}
                                            </optgroup>
                                        ))}

                                        <option
                                            value={OTHER_SERVICE_VALUE}
                                            className="bg-[#15110d] text-[#FAF8F3]"
                                        >
                                            Otro tratamiento / No lo sé
                                        </option>
                                    </select>
                                </InputField>

                                {selectedService === OTHER_SERVICE_VALUE ? (
                                    <InputField label="Si quieres, especifícalo aquí">
                                        <input
                                            type="text"
                                            value={otherService}
                                            onChange={(e) => setOtherService(e.target.value)}
                                            placeholder="Ej: Otro tratamiento, consulta, sesión..."
                                            className="w-full rounded-[1.2rem] border border-[rgba(201,168,76,0.18)] bg-[rgba(10,10,10,0.45)] px-4 py-3 text-sm text-[#FAF8F3] outline-none placeholder:text-[#8f8577] focus:border-[#C9A84C]"
                                        />
                                    </InputField>
                                ) : null}

                                <div>
                                    <label className="mb-3 block text-[11px] uppercase tracking-[0.18em] text-[#C9A84C]">
                                        Calificación
                                    </label>

                                    <div className="flex flex-wrap items-center gap-2 rounded-[1.2rem] border border-[rgba(201,168,76,0.14)] bg-[rgba(10,10,10,0.28)] px-4 py-3">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <StarButton
                                                key={value}
                                                value={value}
                                                selected={value <= stars}
                                                onClick={() => setStars(value)}
                                            />
                                        ))}

                                        <span className="ml-2 text-sm text-[#b8a78b]">
                                            {stars} de 5 estrellas
                                        </span>
                                    </div>
                                </div>

                                <InputField label="Comentario">
                                    <textarea
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        placeholder="Cuéntanos tu experiencia"
                                        rows={7}
                                        className="w-full resize-none rounded-[1.2rem] border border-[rgba(201,168,76,0.18)] bg-[rgba(10,10,10,0.45)] px-4 py-3 text-sm leading-[1.7] text-[#FAF8F3] outline-none placeholder:text-[#8f8577] focus:border-[#C9A84C]"
                                    />
                                </InputField>

                                {error ? (
                                    <div className="rounded-[1rem] border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                                        {error}
                                    </div>
                                ) : null}

                                {success ? (
                                    <div className="rounded-[1rem] border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                                        Gracias. Tu comentario fue enviado correctamente y ya quedó publicado.
                                    </div>
                                ) : null}

                                <div>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#f1d78f_0%,#ddb85a_30%,#c89f3f_55%,#f4e4b5_100%)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-black transition hover:-translate-y-0.5 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {loading ? "Publicando..." : "Publicar comentario"}
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="min-w-0">
                            <div className="mb-6 flex items-end justify-between gap-4">
                                <div>
                                    <div className="text-[10px] uppercase tracking-[0.30em] text-[#d9b861]/82">
                                        Comentarios publicados
                                    </div>
                                    <h2 className="mt-3 font-[family:var(--font-cormorant)] text-[34px] font-light text-[#FAF8F3]">
                                        Así se ven en tu web
                                    </h2>
                                </div>

                                <div className="hidden sm:block text-right text-[11px] uppercase tracking-[0.12em] text-[#6A6257]">
                                    Desliza →
                                </div>
                            </div>

                            <div
                                ref={reviewsScrollerRef}
                                className="
                  flex gap-4 overflow-x-auto pb-3
                  [scrollbar-width:none] [-ms-overflow-style:none]
                  [&::-webkit-scrollbar]:hidden
                "
                            >
                                {reviewsLoading ? (
                                    Array.from({ length: 3 }).map((_, idx) => (
                                        <div
                                            key={idx}
                                            className="
                        min-w-[290px] max-w-[290px] sm:min-w-[360px] sm:max-w-[360px]
                        rounded-[1.8rem] border border-[rgba(201,168,76,0.10)]
                        bg-[linear-gradient(180deg,rgba(24,18,13,0.84)_0%,rgba(15,12,9,0.76)_100%)]
                        p-6 animate-pulse
                      "
                                        >
                                            <div className="h-4 w-24 rounded bg-white/10" />
                                            <div className="mt-5 h-5 w-full rounded bg-white/10" />
                                            <div className="mt-3 h-5 w-[85%] rounded bg-white/10" />
                                            <div className="mt-3 h-5 w-[70%] rounded bg-white/10" />
                                            <div className="mt-8 h-4 w-28 rounded bg-white/10" />
                                            <div className="mt-2 h-3 w-36 rounded bg-white/10" />
                                        </div>
                                    ))
                                ) : reviews.length > 0 ? (
                                    reviews.map((review) => <ReviewCard key={review.id} review={review} />)
                                ) : (
                                    <div className="w-full rounded-[1.8rem] border border-[rgba(201,168,76,0.12)] bg-[linear-gradient(180deg,rgba(24,18,13,0.92)_0%,rgba(15,12,9,0.88)_100%)] p-8">
                                        <div className="text-[10px] uppercase tracking-[0.28em] text-[#d9b861]/82">
                                            Aún no hay reseñas
                                        </div>
                                        <p className="mt-4 text-[14px] leading-[1.8] text-[#b8a78b]">
                                            Sé la primera persona en dejar un comentario sobre tu experiencia en Alex Estética.
                                        </p>
                                    </div>
                                )}
                            </div>

                            <p className="mt-4 text-[12.5px] leading-[1.7] text-[#6A6257]">
                                Los comentarios se muestran en formato horizontal para que se vean más premium,
                                tanto en móvil como en ordenador.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
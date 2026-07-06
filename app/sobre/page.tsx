"use client";

import React from "react";

const SITE = {
    brand: "Alex Estética",
    city: "Gran Canaria",
    logoSrc: "/alex-logo.png",
    phone: "34661026192",
    instagramUrl:
        "https://www.instagram.com/alex_postquirurgicoscanarias?igsh=MTg3Y2NibWMwYTl5ZQ==",

    galleryImages: [
        "/sobre/1.jpg",
        "/sobre/2.jpg",
        "/sobre/3.jpg",
        "/sobre/4.jpg",
        "/sobre/5.jpg",
        "/sobre/6.jpg",
        "/sobre/7.jpg",
        "/sobre/8.jpg",
    ],
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
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-[12px] sm:text-sm font-semibold uppercase tracking-[0.08em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300/30";
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
            className="text-[13px] font-medium tracking-[0.06em] text-[#d7c6a7]/72 transition hover:text-[#fff4df]"
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
    overline,
}: {
    title: string;
    desc?: string;
    overline?: string;
}) {
    return (
        <div className="mb-10">
            {overline ? (
                <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.34em] text-[#d9b861]/85">
                    {overline}
                </div>
            ) : null}

            <h2 className="font-[family:var(--font-cormorant)] text-4xl sm:text-5xl font-light leading-[1.04] text-[#fffaf2]">
                {title}
            </h2>

            {desc ? (
                <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-[#d7c6a7]/70">
                    {desc}
                </p>
            ) : null}
        </div>
    );
}

function ValueCard({
    title,
    desc,
}: {
    title: string;
    desc: string;
}) {
    return (
        <div className="rounded-[2rem] border border-[rgba(201,168,76,0.14)] bg-[linear-gradient(180deg,rgba(28,21,16,0.97)_0%,rgba(17,13,10,0.97)_100%)] p-7 shadow-[0_16px_42px_rgba(0,0,0,0.24)] backdrop-blur">
            <div className="mb-4 h-px w-12 bg-gradient-to-r from-amber-300/80 to-transparent" />
            <div className="font-[family:var(--font-cormorant)] text-[28px] leading-none font-light text-[#fffaf2]">
                {title}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#d7c6a7]/70">{desc}</p>
        </div>
    );
}

function ChevronLeftIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ChevronRightIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function GalleryHero({
    images,
    brand,
}: {
    images: string[];
    brand: string;
}) {
    const [current, setCurrent] = React.useState(0);
    const touchStartX = React.useRef<number | null>(null);
    const touchEndX = React.useRef<number | null>(null);

    const goTo = React.useCallback(
        (index: number) => {
            setCurrent((index + images.length) % images.length);
        },
        [images.length]
    );

    const goPrev = React.useCallback(() => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    const goNext = React.useCallback(() => {
        setCurrent((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX;
        touchEndX.current = null;
    };

    const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const onTouchEnd = () => {
        if (touchStartX.current === null || touchEndX.current === null) return;

        const delta = touchStartX.current - touchEndX.current;
        const threshold = 50;

        if (delta > threshold) goNext();
        if (delta < -threshold) goPrev();

        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <div className="relative">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(640px_420px_at_50%_50%,rgba(201,168,76,0.16),transparent_60%)]" />

            <div
                className="group relative overflow-hidden rounded-[2.5rem] border border-[rgba(201,168,76,0.14)] bg-[linear-gradient(180deg,rgba(18,14,10,0.88)_0%,rgba(9,7,5,0.95)_100%)] shadow-[0_24px_70px_rgba(0,0,0,0.34)]"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/30 to-transparent" />

                <div className="relative aspect-[4/5] sm:aspect-[5/6] w-full overflow-hidden">
                    <div
                        className="flex h-full w-full transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {images.map((src, index) => (
                            <div
                                key={`${src}-${index}`}
                                className="relative h-full w-full shrink-0"
                            >
                                <img
                                    src={src}
                                    alt={`${brand} galería ${index + 1}`}
                                    className="h-full w-full object-cover"
                                    loading={index === 0 ? "eager" : "lazy"}
                                    draggable={false}
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,6,5,0.68),rgba(8,6,5,0.12),rgba(8,6,5,0.20))]" />
                            </div>
                        ))}
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(to_top,rgba(8,6,5,0.78),transparent)]" />

                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                        <div className="rounded-full border border-white/10 bg-[rgba(12,9,7,0.56)] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-amber-100/80 backdrop-blur">
                            Espacio Alex Estética
                        </div>

                        <div className="rounded-full border border-white/10 bg-[rgba(12,9,7,0.56)] px-3 py-1 text-[11px] tracking-[0.14em] text-amber-100/75 backdrop-blur">
                            {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                        </div>
                    </div>

                    {images.length > 1 ? (
                        <>
                            <button
                                type="button"
                                onClick={goPrev}
                                aria-label="Foto anterior"
                                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-[rgba(12,9,7,0.58)] p-3 text-amber-100 backdrop-blur transition hover:bg-[rgba(12,9,7,0.78)]"
                            >
                                <ChevronLeftIcon />
                            </button>

                            <button
                                type="button"
                                onClick={goNext}
                                aria-label="Foto siguiente"
                                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-[rgba(12,9,7,0.58)] p-3 text-amber-100 backdrop-blur transition hover:bg-[rgba(12,9,7,0.78)]"
                            >
                                <ChevronRightIcon />
                            </button>
                        </>
                    ) : null}

                    {images.length > 1 ? (
                        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
                            {images.map((_, index) => {
                                const active = index === current;
                                return (
                                    <button
                                        key={index}
                                        type="button"
                                        aria-label={`Ir a la foto ${index + 1}`}
                                        onClick={() => goTo(index)}
                                        className={[
                                            "h-2.5 rounded-full transition-all duration-300",
                                            active
                                                ? "w-8 bg-amber-300 shadow-[0_0_18px_rgba(255,215,128,0.45)]"
                                                : "w-2.5 bg-white/35 hover:bg-white/50",
                                        ].join(" ")}
                                    />
                                );
                            })}
                        </div>
                    ) : null}
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
                <div className="text-xs text-[#d7c6a7]/52">
                    Desliza con el dedo o usa las flechas para recorrer la clínica.
                </div>

                <div className="hidden sm:flex items-center gap-2 text-xs text-[#d7c6a7]/56">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-300/80" />
                    Galería del espacio
                </div>
            </div>
        </div>
    );
}

export default function SobrePage() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const whatsappGeneral = waLink(
        `Hola! Quiero agendar una valoración en ${SITE.brand}. ¿Me puedes dar disponibilidad?`
    );

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

                                {SITE.instagramUrl ? (
                                    <a
                                        href={SITE.instagramUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-2xl px-3 py-2 text-sm font-semibold text-amber-100/90 hover:bg-white/5"
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

            <section className="relative isolate overflow-hidden border-b border-[rgba(201,168,76,0.10)]">
                <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
                    <div className="grid items-center gap-12 sm:grid-cols-2">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(201,168,76,0.20)] bg-[rgba(16,12,9,0.48)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-amber-100/82">
                                Más de 25 años de experiencia
                            </div>

                            <h1 className="mt-6 font-[family:var(--font-cormorant)] text-5xl sm:text-6xl font-light leading-[0.98] text-[#fffaf2]">
                                Trayectoria, ciencia y compromiso
                                <span className="mt-2 block text-[0.82em] italic text-[#d9b861]">
                                    al servicio de tu recuperación
                                </span>
                            </h1>

                            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#d7c6a7]/72">
                                Con más de dos décadas dedicadas al bienestar corporal y la recuperación
                                funcional, nuestro fundador ha acompañado a cientos de pacientes en
                                procesos postquirúrgicos, combinando conocimiento técnico, experiencia
                                clínica y una atención profundamente personalizada.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Button href={whatsappGeneral} variant="gold">
                                    Agendar valoración
                                </Button>
                                <Button href="/servicios" variant="outline" newTab={false}>
                                    Ver tratamientos
                                </Button>
                            </div>
                        </div>

                        <GalleryHero
                            images={SITE.galleryImages}
                            brand={SITE.brand}
                        />
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
                <SectionTitle
                    overline="Perfil profesional"
                    title="Experiencia real, técnica especializada y visión integral"
                    desc="Formación técnica, experiencia práctica y una mirada profunda del cuerpo humano para acompañar cada proceso con precisión."
                />

                <div className="grid gap-8 sm:grid-cols-2">
                    <div className="rounded-[2rem] border border-[rgba(201,168,76,0.14)] bg-[linear-gradient(180deg,rgba(22,17,13,0.96)_0%,rgba(14,11,8,0.96)_100%)] p-8 shadow-[0_16px_44px_rgba(0,0,0,0.22)]">
                        <div className="mb-4 h-px w-14 bg-gradient-to-r from-amber-300/80 to-transparent" />

                        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#d7c6a7]/72">
                            <p>
                                Especialista en masajes postoperatorios con más de 25 años de experiencia,
                                ha desarrollado protocolos personalizados enfocados en acelerar la
                                recuperación, mejorar la movilidad y optimizar los resultados estéticos
                                tras intervenciones quirúrgicas.
                            </p>

                            <p>
                                Técnico en medicina estética, combina conocimientos anatómicos avanzados
                                con técnicas manuales precisas y aparatología complementaria, garantizando
                                seguridad y efectividad en cada sesión.
                            </p>

                            <p>
                                Su formación en nutrición deportiva y preparación física le permite
                                ofrecer una visión integral del proceso de recuperación, entendiendo
                                cómo el metabolismo, la alimentación y el movimiento influyen en
                                los resultados finales del paciente.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-[rgba(201,168,76,0.16)] bg-[linear-gradient(180deg,rgba(28,21,16,0.98)_0%,rgba(18,14,10,0.96)_100%)] p-8 shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
                        <div className="text-[10px] uppercase tracking-[0.28em] text-[#d9b861]/82">
                            Especializaciones
                        </div>

                        <div className="mt-4 font-[family:var(--font-cormorant)] text-3xl font-light text-[#fffaf2]">
                            Áreas de enfoque
                        </div>

                        <ul className="mt-7 space-y-4 text-sm leading-relaxed text-[#d7c6a7]/72">
                            {[
                                "Recuperación post-liposucción y abdominoplastia",
                                "Drenaje linfático manual avanzado",
                                "Terapia de compresión postquirúrgica",
                                "Nutrición aplicada a procesos de recuperación",
                                "Planificación física adaptada al postoperatorio",
                                "Protocolos personalizados por fases",
                            ].map((item) => (
                                <li key={item} className="flex gap-3">
                                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300/80" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-5 pb-20">
                <SectionTitle
                    overline="Nuestra filosofía"
                    title="La estética bien hecha nace de la responsabilidad"
                    desc="No se trata solo de estética, sino de acompañar cada proceso con criterio, seguridad y atención personalizada."
                />

                <div className="grid gap-6 sm:grid-cols-3">
                    <ValueCard
                        title="Seguridad ante todo"
                        desc="Cada protocolo es diseñado respetando los tiempos biológicos del cuerpo, priorizando siempre la salud y evitando prácticas invasivas innecesarias."
                    />

                    <ValueCard
                        title="Acompañamiento personalizado"
                        desc="Cada paciente recibe una evaluación individualizada para adaptar técnicas y frecuencia según su evolución real."
                    />

                    <ValueCard
                        title="Resultados responsables"
                        desc="Nuestro enfoque no busca promesas irreales, sino mejoras progresivas, sostenibles y visibles con respaldo técnico."
                    />
                </div>

                <div className="mt-10 overflow-hidden rounded-[2.25rem] border border-[rgba(201,168,76,0.14)] bg-[linear-gradient(180deg,rgba(24,18,13,0.98)_0%,rgba(14,11,8,0.98)_100%)] p-7 sm:p-10 shadow-[0_22px_62px_rgba(0,0,0,0.26)] backdrop-blur">
                    <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-amber-300/22 to-transparent" />

                    <div className="text-[10px] uppercase tracking-[0.30em] text-[#d9b861]/80">
                        Atención premium
                    </div>

                    <div className="mt-3 font-[family:var(--font-cormorant)] text-4xl sm:text-5xl font-light leading-none text-[#fffaf2]">
                        Te invitamos a conocernos
                    </div>

                    <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-[#d7c6a7]/72">
                        Cuéntanos tu objetivo y te orientamos sin compromiso. Atención premium,
                        protocolos responsables y acompañamiento real durante tu proceso.
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <Button href={whatsappGeneral} variant="gold">
                            Agendar una valoración
                        </Button>
                        <Button href="/servicios" variant="outline" newTab={false}>
                            Ver catálogo de tratamientos
                        </Button>
                    </div>
                </div>
            </section>

            <footer className="border-t border-[rgba(201,168,76,0.08)] bg-[rgba(10,8,6,0.45)]">
                <div className="mx-auto max-w-6xl px-5 py-10">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <div className="font-[family:var(--font-cormorant)] text-2xl font-light tracking-[0.06em] text-amber-200">
                                {SITE.brand}
                            </div>
                            <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#d7c6a7]/44">
                                {SITE.city}
                            </div>
                        </div>

                        <div className="text-sm text-[#d7c6a7]/54">
                            © {new Date().getFullYear()} {SITE.brand} · {SITE.city}
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
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
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-amber-300/30";
    const styles =
        variant === "gold"
            ? "bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 text-black hover:brightness-110 shadow-[0_10px_30px_rgba(255,215,128,0.18)]"
            : "border border-amber-300/30 bg-white/5 text-amber-100 hover:bg-white/10";

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
            className="text-sm font-medium text-amber-100/80 hover:text-amber-100 transition"
        >
            {children}
        </a>
    );
}

function Sep() {
    return <span className="select-none text-amber-100/35">|</span>;
}

function SectionTitle({
    title,
    desc,
}: {
    title: string;
    desc?: string;
}) {
    return (
        <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-amber-100">
                {title}
            </h2>
            {desc && (
                <p className="mt-3 max-w-3xl text-amber-100/70 text-sm sm:text-base">
                    {desc}
                </p>
            )}
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
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
            <div className="text-lg font-semibold text-amber-100">{title}</div>
            <p className="mt-3 text-sm text-amber-100/70 leading-relaxed">{desc}</p>
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
            <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_50%_50%,rgba(255,215,128,0.18),transparent_60%)]" />

            <div
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/20"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
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
                                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),rgba(0,0,0,0.08),rgba(0,0,0,0.18))]" />
                            </div>
                        ))}
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,rgba(0,0,0,0.55),transparent)]" />

                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                        <div className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] text-amber-100/80 backdrop-blur">
                            Espacio Alex Estética
                        </div>

                        <div className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] text-amber-100/75 backdrop-blur">
                            {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                        </div>
                    </div>

                    {images.length > 1 ? (
                        <>
                            <button
                                type="button"
                                onClick={goPrev}
                                aria-label="Foto anterior"
                                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-black/45 p-3 text-amber-100 backdrop-blur transition hover:bg-black/60"
                            >
                                <ChevronLeftIcon />
                            </button>

                            <button
                                type="button"
                                onClick={goNext}
                                aria-label="Foto siguiente"
                                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-black/45 p-3 text-amber-100 backdrop-blur transition hover:bg-black/60"
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
                <div className="text-xs text-amber-100/55">
                    Desliza con el dedo o usa las flechas para recorrer la clínica.
                </div>

                <div className="hidden sm:flex items-center gap-2 text-xs text-amber-100/60">
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
        <main className="min-h-screen bg-black text-white">
            {/* Fondo luxury */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_20%_10%,rgba(255,215,128,0.18),transparent_60%),radial-gradient(900px_600px_at_80%_80%,rgba(255,215,128,0.12),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.95))]" />
            </div>

            {/* HEADER */}
            <header className="sticky top-0 z-30 bg-black/50 backdrop-blur">
                <div className="relative mx-auto h-20 max-w-6xl px-5">
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/25 to-transparent" />

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
                                    className="ml-2 hidden h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 sm:inline-flex"
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

                {menuOpen ? (
                    <div className="border-t border-white/10 bg-black/60 backdrop-blur sm:hidden">
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

            {/* HERO */}
            <section className="relative isolate overflow-hidden border-b border-white/10">
                <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
                    <div className="grid gap-12 sm:grid-cols-2 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-black/30 px-3 py-1 text-xs text-amber-100/80">
                                Más de 25 años de experiencia
                            </div>

                            <h1 className="mt-6 text-4xl sm:text-5xl font-semibold leading-tight text-amber-100">
                                Trayectoria, ciencia y compromiso
                                <span className="block text-amber-200/90">
                                    al servicio de tu recuperación
                                </span>
                            </h1>

                            <p className="mt-6 text-amber-100/70 leading-relaxed">
                                Con más de dos décadas dedicadas al bienestar corporal y la recuperación
                                funcional, nuestro fundador ha acompañado a cientos de pacientes en
                                procesos postquirúrgicos, combinando conocimiento técnico, experiencia
                                clínica y una atención profundamente personalizada.
                            </p>
                        </div>

                        <GalleryHero
                            images={SITE.galleryImages}
                            brand={SITE.brand}
                        />
                    </div>
                </div>
            </section>

            {/* PERFIL PROFESIONAL */}
            <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
                <SectionTitle
                    title="Perfil Profesional"
                    desc="Formación técnica, experiencia práctica y una visión integral del cuerpo humano."
                />

                <div className="grid gap-8 sm:grid-cols-2">
                    <div className="space-y-6 text-amber-100/70 text-sm sm:text-base leading-relaxed">
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

                    <div className="rounded-[2rem] border border-white/10 bg-black/30 p-8">
                        <div className="text-amber-100 font-semibold text-lg">
                            Especializaciones
                        </div>

                        <ul className="mt-6 space-y-4 text-sm text-amber-100/70">
                            <li>• Recuperación post-liposucción y abdominoplastia</li>
                            <li>• Drenaje linfático manual avanzado</li>
                            <li>• Terapia de compresión postquirúrgica</li>
                            <li>• Nutrición aplicada a procesos de recuperación</li>
                            <li>• Planificación física adaptada al postoperatorio</li>
                            <li>• Protocolos personalizados por fases</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* FILOSOFÍA */}
            <section className="mx-auto max-w-6xl px-5 pb-20">
                <SectionTitle
                    title="Nuestra Filosofía"
                    desc="No se trata solo de estética, sino de acompañar procesos con responsabilidad."
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

                <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-7 sm:p-10 backdrop-blur">
                    <div className="text-2xl font-semibold text-amber-100">
                        Te invitamos a conocernos
                    </div>
                    <p className="mt-2 max-w-3xl text-amber-100/70">
                        Cuéntanos tu objetivo y te orientamos sin compromiso. Atención premium, protocolos
                        responsables y acompañamiento real durante tu proceso.
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

            <footer className="border-t border-white/10">
                <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-amber-100/60">
                    © {new Date().getFullYear()} {SITE.brand} · {SITE.city}
                </div>
            </footer>
        </main>
    );
}
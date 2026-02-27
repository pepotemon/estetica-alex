"use client";

import React from "react";

const SITE = {
    brand: "Alex Estética",
    city: "Gran Canaria",
    phone: "34600111222",
    logoSrc: "/alex-logo.png",
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

export default function CursoPage() {
    const whatsappCurso = waLink(
        "Hola Alex! Quiero info del curso: precio, fechas, modalidad y cupos."
    );

    const bullets = [
        "Protocolos paso a paso (evaluación → tratamiento → post-tratamiento)",
        "Higiene y seguridad (buenas prácticas)",
        "Materiales, preparación y errores comunes",
        "Atención al cliente y fidelización",
        "Plantillas/guías (bonus) + soporte",
    ];

    const faqs = [
        { q: "¿Cuánto cuesta?", a: "Escríbeme por WhatsApp y te paso precio y promociones." },
        { q: "¿Cuándo empieza?", a: "Te confirmo fechas disponibles y cupos por WhatsApp." },
        { q: "¿Es presencial u online?", a: "Depende de la edición. Te confirmo por WhatsApp." },
    ];

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Fondo luxury */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_20%_10%,rgba(255,215,128,0.18),transparent_60%),radial-gradient(800px_500px_at_80%_20%,rgba(255,215,128,0.12),transparent_55%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.95))]" />
            </div>

            {/* Header */}
            <header className="sticky top-0 z-20 border-b border-white/10 bg-black/50 backdrop-blur">
                <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
                    <a href="/" className="flex items-center gap-2">
                        <div className="relative h-14 w-14 flex items-center justify-center">
                            <img
                                src={SITE.logoSrc}
                                alt="Alex Estética"
                                className="absolute h-28 w-28 object-contain drop-shadow-[0_0_25px_rgba(255,215,128,0.35)]"
                            />
                        </div>
                        <div>
                            <div className="font-semibold tracking-wide text-amber-100">
                                {SITE.brand}
                            </div>
                            <div className="text-xs text-amber-100/60">{SITE.city}</div>
                        </div>
                    </a>

                    <nav className="hidden items-center gap-7 sm:flex">
                        <a href="/" className="text-sm text-amber-100/80 hover:text-amber-100">
                            Inicio
                        </a>
                        <a href="/servicios" className="text-sm text-amber-100/80 hover:text-amber-100">
                            Tratamientos
                        </a>
                        <a href="/curso" className="text-sm text-amber-100 font-semibold">
                            Curso
                        </a>
                    </nav>

                    <Button href={whatsappCurso} variant="gold">
                        WhatsApp
                    </Button>
                </div>
            </header>

            {/* Hero */}
            <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
                <h1 className="text-4xl font-semibold text-amber-100 sm:text-5xl">
                    Curso Profesional de Estética
                </h1>

                <p className="mt-4 max-w-3xl text-lg text-amber-100/70">
                    Aprende el método paso a paso para trabajar con seguridad, mejorar resultados y ofrecer
                    un servicio profesional.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Button href={whatsappCurso} variant="gold">
                        Preguntar por WhatsApp
                    </Button>
                    <Button
                        href={waLink("Hola! ¿Me pasas el temario completo y requisitos?")}
                        variant="outline"
                    >
                        Pedir temario completo
                    </Button>
                </div>
            </section>

            {/* Información rápida */}
            <section className="mx-auto max-w-6xl px-5">
                <div className="grid gap-4 sm:grid-cols-3">
                    {[
                        { t: "Modalidad", d: "Presencial / Online (edita)" },
                        { t: "Duración", d: "X horas (edita)" },
                        { t: "Cupos", d: "Limitados (recomendado)" },
                    ].map((x) => (
                        <div
                            key={x.t}
                            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                        >
                            <div className="text-xs text-amber-100/60">{x.t}</div>
                            <div className="mt-2 text-sm font-semibold text-amber-100">{x.d}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Qué aprenderás */}
            <section className="mx-auto max-w-6xl px-5 py-16">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
                    <div className="text-2xl font-semibold text-amber-100">
                        Qué aprenderás
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {bullets.map((b) => (
                            <div
                                key={b}
                                className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm text-amber-100"
                            >
                                {b}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="mx-auto max-w-6xl px-5 pb-20">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
                    <div className="text-2xl font-semibold text-amber-100">
                        Preguntas frecuentes
                    </div>

                    <div className="mt-8 space-y-4">
                        {faqs.map((f) => (
                            <details
                                key={f.q}
                                className="rounded-2xl border border-white/10 bg-black/30 p-6"
                            >
                                <summary className="cursor-pointer font-semibold text-amber-100">
                                    {f.q}
                                </summary>
                                <p className="mt-4 text-sm text-amber-100/70">{f.a}</p>
                            </details>
                        ))}
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
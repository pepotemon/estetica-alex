"use client";

import React from "react";

const SITE = {
    brand: "Alex Estética",
    city: "Gran Canaria",
    phone: "34661026192",
    logoSrc: "/alex-logo.png",
    instagramUrl:
        "https://www.instagram.com/alex_postquirurgicoscanarias?igsh=MTg3Y2NibWMwYTl5ZQ==",

    legal: {
        razonSocial: "Alex estética",
        nif: "45393142C",
        domicilioFiscal: "Av. Canarias 450, Bloque B, Local 3",
        email: "alex37valle@hotmail.com",
    },
};

function waLink(text: string) {
    return `https://wa.me/${SITE.phone}?text=${encodeURIComponent(text)}`;
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

function Button({
    href,
    children,
    variant = "gold",
    className = "",
    newTab = false,
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
            ? "bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 text-black hover:brightness-110"
            : "border border-amber-300/30 bg-white/5 text-amber-100 hover:bg-white/10";

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

function SectionTitle({ title, desc }: { title: string; desc?: string }) {
    return (
        <div className="mb-7">
            <div className="text-2xl font-semibold text-amber-100">{title}</div>
            {desc ? <p className="mt-2 text-amber-100/70">{desc}</p> : null}
        </div>
    );
}

function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
            {children}
        </div>
    );
}

export default function PrivacidadPage() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const whatsappGeneral = waLink(
        `Hola Alex! Quiero agendar una cita en ${SITE.brand}. ¿Me puedes dar disponibilidad?`
    );

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Fondo luxury */}
            <div className="pointer-events-none fixed inset-0 -z-30">
                <div className="absolute inset-0 bg-[radial-gradient(1000px_650px_at_20%_10%,rgba(255,215,128,0.10),transparent_60%),radial-gradient(900px_520px_at_80%_20%,rgba(255,215,128,0.06),transparent_55%),radial-gradient(900px_650px_at_50%_85%,rgba(255,215,128,0.05),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.96))]" />
            </div>

            {/* Header */}
            <header className="sticky top-0 z-30 bg-black/50 backdrop-blur">
                <div className="relative mx-auto h-20 max-w-6xl px-5">
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/25 to-transparent" />

                    <a
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="absolute left-1/2 top-0 z-40 hidden -translate-x-1/2 -translate-y-8 sm:block"
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

                    <div className="hidden h-full items-center justify-between sm:flex">
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

                    <div className="flex h-full items-center justify-between sm:hidden">
                        <a
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-2"
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
                                    { href: "/privacidad", label: "Privacidad" },
                                    { href: "/cookies", label: "Cookies" },
                                    { href: "/aviso-legal", label: "Aviso Legal" },
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
                <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-black/35 px-3 py-1 text-xs text-amber-100/80">
                            <span className="h-2 w-2 rounded-full bg-amber-300/90" />
                            Protección de datos
                        </div>

                        <h1 className="mt-5 text-3xl sm:text-4xl font-semibold text-amber-100">
                            Política de Privacidad
                        </h1>

                        <p className="mt-3 text-amber-100/70">
                            Aquí explicamos cómo tratamos los datos personales cuando navegas por el sitio o
                            contactas con nosotros.
                        </p>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <Button href="/cookies" variant="outline">
                                Ver Cookies
                            </Button>
                            <Button href="/aviso-legal" variant="outline">
                                Ver Aviso Legal
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENIDO */}
            <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
                <div className="grid gap-6">
                    <Card>
                        <SectionTitle title="1. Responsable del tratamiento" />
                        <div className="mt-2 space-y-2 text-sm text-amber-100/75">
                            <div>
                                <span className="font-semibold text-amber-100">Razón social:</span>{" "}
                                {SITE.legal.razonSocial}
                            </div>
                            <div>
                                <span className="font-semibold text-amber-100">NIF:</span>{" "}
                                {SITE.legal.nif}
                            </div>
                            <div>
                                <span className="font-semibold text-amber-100">Domicilio fiscal:</span>{" "}
                                {SITE.legal.domicilioFiscal}
                            </div>
                            <div>
                                <span className="font-semibold text-amber-100">Email:</span>{" "}
                                <a
                                    className="text-amber-200 hover:text-amber-100"
                                    href={`mailto:${SITE.legal.email}`}
                                >
                                    {SITE.legal.email}
                                </a>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <SectionTitle
                            title="2. Qué datos tratamos"
                            desc="Dependiendo del uso del sitio, podemos tratar:"
                        />
                        <ul className="mt-2 space-y-2 text-sm text-amber-100/75">
                            <li>• Datos de contacto (si nos escribes): nombre, teléfono, email y mensaje.</li>
                            <li>• Datos de navegación (si aplican cookies/analítica): IP, dispositivo, páginas vistas, etc.</li>
                        </ul>
                    </Card>

                    <Card>
                        <SectionTitle
                            title="3. Finalidades"
                            desc="Para qué usamos los datos:"
                        />
                        <ul className="mt-2 space-y-2 text-sm text-amber-100/75">
                            <li>• Gestionar consultas y solicitudes de información.</li>
                            <li>• Gestionar reservas/citas si el usuario lo solicita.</li>
                            <li>• Mejorar la experiencia del sitio (solo si el usuario acepta cookies no esenciales).</li>
                        </ul>
                    </Card>

                    <Card>
                        <SectionTitle
                            title="4. Base legal"
                            desc="Las bases que legitiman el tratamiento:"
                        />
                        <ul className="mt-2 space-y-2 text-sm text-amber-100/75">
                            <li>• Consentimiento del usuario (por ejemplo, al enviar un formulario o aceptar cookies).</li>
                            <li>• Interés legítimo (seguridad del sitio, prevención de fraude y mantenimiento técnico).</li>
                            <li>• Ejecución de medidas precontractuales si solicitas una cita o información de servicios.</li>
                        </ul>
                    </Card>

                    <Card>
                        <SectionTitle
                            title="5. Conservación"
                            desc="Cuánto tiempo guardamos los datos:"
                        />
                        <div className="mt-2 text-sm text-amber-100/75 leading-relaxed">
                            Conservaremos los datos durante el tiempo necesario para atender tu solicitud y, si
                            procede, durante los plazos legales aplicables. Los datos de cookies dependerán del
                            tipo de cookie y de la configuración aceptada por el usuario.
                        </div>
                    </Card>

                    <Card>
                        <SectionTitle
                            title="6. Destinatarios"
                            desc="Con quién compartimos datos:"
                        />
                        <div className="mt-2 text-sm text-amber-100/75 leading-relaxed">
                            No cedemos datos a terceros salvo obligación legal o cuando sea necesario para la
                            prestación del servicio (por ejemplo, proveedores técnicos del sitio). En caso de
                            usar herramientas de terceros (analítica, etc.), se informará en la Política de Cookies.
                        </div>
                    </Card>

                    <Card>
                        <SectionTitle title="7. Derechos del usuario" />
                        <div className="mt-2 text-sm text-amber-100/75 leading-relaxed">
                            Puedes solicitar acceso, rectificación, supresión, oposición, limitación del tratamiento
                            y portabilidad, cuando corresponda. Para ejercer tus derechos, escribe a{" "}
                            <a className="text-amber-200 hover:text-amber-100" href={`mailto:${SITE.legal.email}`}>
                                {SITE.legal.email}
                            </a>
                            .
                        </div>
                    </Card>

                    <Card>
                        <SectionTitle title="8. Cambios en esta política" />
                        <div className="mt-2 text-sm text-amber-100/75 leading-relaxed">
                            Podemos actualizar esta política por cambios legales o técnicos. Recomendamos revisarla
                            periódicamente.
                        </div>
                    </Card>
                </div>
            </section>

            {/* CTA FINAL (dos botones) */}
            <section className="mx-auto max-w-6xl px-5 pb-16">
                <div className="rounded-[2rem] border border-amber-300/15 bg-white/5 p-8 backdrop-blur sm:p-10">
                    <div className="text-2xl font-semibold text-amber-100">
                        ¿Tienes dudas sobre privacidad?
                    </div>
                    <p className="mt-2 max-w-3xl text-amber-100/70">
                        Si necesitas aclarar algo sobre el tratamiento de datos, contáctanos y te respondemos.
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <Button href={whatsappGeneral} variant="gold">
                            Hablar por WhatsApp
                        </Button>
                        <Button href="/cookies" variant="outline">
                            Ver Cookies
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10">
                <div className="mx-auto max-w-6xl px-5 py-10">
                    <div className="grid gap-3 sm:grid-cols-2 sm:items-center sm:justify-between">
                        <div className="text-sm text-amber-100/60">
                            © {new Date().getFullYear()} {SITE.brand} · {SITE.city}
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end text-sm">
                            <a href="/privacidad" className="text-amber-100/70 hover:text-amber-100">
                                Privacidad
                            </a>
                            <a href="/cookies" className="text-amber-100/70 hover:text-amber-100">
                                Cookies
                            </a>
                            <a href="/aviso-legal" className="text-amber-100/70 hover:text-amber-100">
                                Aviso legal
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
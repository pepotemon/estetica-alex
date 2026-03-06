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

function Row({ k, v }: { k: string; v: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div className="text-sm font-semibold text-amber-100">{k}</div>
            <div className="text-sm text-amber-100/75 sm:max-w-[70%] sm:text-right">
                {v}
            </div>
        </div>
    );
}

export default function AvisoLegalPage() {
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

            {/* Header (igual al resto) */}
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

                    {/* Desktop */}
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

                    {/* Mobile */}
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
                            Información legal del sitio
                        </div>

                        <h1 className="mt-5 text-3xl sm:text-4xl font-semibold text-amber-100">
                            Aviso Legal
                        </h1>

                        <p className="mt-3 text-amber-100/70">
                            Este documento regula el uso del sitio web, así como la información
                            del titular y las condiciones generales de acceso.
                        </p>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <Button href="/privacidad" variant="outline">
                                Ver Política de Privacidad
                            </Button>
                            <Button href="/cookies" variant="outline">
                                Ver Política de Cookies
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENIDO */}
            <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
                <div className="grid gap-6">
                    <Card>
                        <SectionTitle
                            title="1. Titular del sitio web"
                            desc="Datos identificativos del responsable del sitio."
                        />

                        <div className="space-y-4">
                            <Row k="Razón social" v={SITE.legal.razonSocial} />
                            <div className="h-px w-full bg-white/10" />
                            <Row k="NIF" v={SITE.legal.nif} />
                            <div className="h-px w-full bg-white/10" />
                            <Row k="Domicilio fiscal" v={SITE.legal.domicilioFiscal} />
                            <div className="h-px w-full bg-white/10" />
                            <Row
                                k="Email de contacto"
                                v={
                                    <a
                                        className="text-amber-200 hover:text-amber-100"
                                        href={`mailto:${SITE.legal.email}`}
                                    >
                                        {SITE.legal.email}
                                    </a>
                                }
                            />
                        </div>
                    </Card>

                    <Card>
                        <SectionTitle
                            title="2. Condiciones de uso"
                            desc="Acceso, navegación y responsabilidades."
                        />
                        <div className="space-y-3 text-sm text-amber-100/75 leading-relaxed">
                            <p>
                                El acceso y uso de este sitio atribuye la condición de usuario e implica la
                                aceptación de las presentes condiciones. El usuario se compromete a hacer un
                                uso diligente del sitio y a no emplearlo para actividades ilícitas o contrarias
                                a la buena fe y al orden público.
                            </p>
                            <p>
                                El titular podrá modificar en cualquier momento la presentación, configuración
                                y contenidos del sitio, así como las presentes condiciones.
                            </p>
                        </div>
                    </Card>

                    <Card>
                        <SectionTitle title="3. Propiedad intelectual e industrial" />
                        <div className="space-y-3 text-sm text-amber-100/75 leading-relaxed">
                            <p>
                                Todos los contenidos del sitio (textos, imágenes, logotipos, diseño, código fuente
                                y demás elementos) están protegidos por la normativa de propiedad intelectual e
                                industrial. Queda prohibida su reproducción, distribución o transformación sin
                                autorización expresa del titular.
                            </p>
                        </div>
                    </Card>

                    <Card>
                        <SectionTitle title="4. Responsabilidad" />
                        <div className="space-y-3 text-sm text-amber-100/75 leading-relaxed">
                            <p>
                                El titular no se hace responsable de los daños o perjuicios derivados del acceso
                                o uso del sitio, incluyendo fallos técnicos, interrupciones del servicio o presencia
                                de virus u otros elementos dañinos.
                            </p>
                            <p>
                                La información del sitio tiene carácter informativo y no sustituye el asesoramiento
                                profesional o médico cuando corresponda.
                            </p>
                        </div>
                    </Card>

                    <Card>
                        <SectionTitle title="5. Enlaces a terceros" />
                        <div className="space-y-3 text-sm text-amber-100/75 leading-relaxed">
                            <p>
                                En caso de que el sitio contenga enlaces a páginas de terceros, el titular no
                                asume responsabilidad sobre sus contenidos, políticas o prácticas.
                            </p>
                        </div>
                    </Card>

                    <Card>
                        <SectionTitle title="6. Legislación aplicable" />
                        <div className="space-y-3 text-sm text-amber-100/75 leading-relaxed">
                            <p>
                                Las presentes condiciones se regirán por la normativa aplicable en España.
                                Para cualquier controversia, las partes se someterán a los juzgados y tribunales
                                que correspondan conforme a la legislación vigente.
                            </p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* CTA FINAL (dos botones) */}
            <section className="mx-auto max-w-6xl px-5 pb-16">
                <div className="rounded-[2rem] border border-amber-300/15 bg-white/5 p-8 backdrop-blur sm:p-10">
                    <div className="text-2xl font-semibold text-amber-100">
                        ¿Necesitas ayuda o más información?
                    </div>
                    <p className="mt-2 max-w-3xl text-amber-100/70">
                        Si tienes preguntas sobre el uso del sitio o cualquier punto legal, escríbenos y te orientamos.
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <Button href={whatsappGeneral} variant="gold">
                            Hablar por WhatsApp
                        </Button>
                        <Button href="/privacidad" variant="outline">
                            Ver Privacidad
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
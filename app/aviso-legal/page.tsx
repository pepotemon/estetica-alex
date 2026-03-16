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
        "inline-flex items-center justify-center gap-2 px-7 py-3 text-[12.5px] tracking-[0.10em] uppercase transition-all duration-200";
    const styles =
        variant === "gold"
            ? "bg-[#C9A84C] text-black hover:bg-[#E2C47A] hover:-translate-y-[2px]"
            : "border border-[rgba(201,168,76,0.40)] text-[#C9A84C] hover:border-[#C9A84C] hover:bg-[rgba(201,168,76,0.06)]";

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
                <span className="mb-4 block text-[10px] uppercase tracking-[0.35em] text-[#C9A84C]">
                    {tag}
                </span>
            ) : null}

            <h2 className="font-[family:var(--font-cormorant)] text-[34px] sm:text-[48px] font-light leading-[1.08] text-[#FAF8F3]">
                {title}
            </h2>

            {desc ? (
                <p className="mt-4 max-w-3xl text-[13.5px] leading-[1.7] text-[#b8a78b]">
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
                "border border-[rgba(201,168,76,0.14)]",
                "bg-[linear-gradient(180deg,rgba(24,18,13,0.74)_0%,rgba(15,12,9,0.52)_100%)]",
                "backdrop-blur-[10px]",
                "shadow-[0_10px_30px_rgba(0,0,0,0.22)]",
                className,
            ].join(" ")}
        >
            {children}
        </div>
    );
}

function Card({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <GlassCard className="p-7">
            <div className="font-[family:var(--font-cormorant)] text-[28px] leading-none font-light text-[#FAF8F3]">
                {title}
            </div>
            <div className="mt-4 text-[13.5px] leading-[1.7] text-[#b8a78b]">{children}</div>
        </GlassCard>
    );
}

function QuickItem({
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
                <div className="text-[13px] font-medium text-[#D4C9B0]">{title}</div>
                <div className="mt-1 text-[13px] leading-[1.65] text-[#b8a78b]">{desc}</div>
            </div>
        </div>
    );
}

function Row({
    k,
    v,
}: {
    k: string;
    v: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div className="text-sm font-medium text-[#FAF8F3]">{k}</div>
            <div className="text-sm text-[#b8a78b] sm:max-w-[70%] sm:text-right">{v}</div>
        </div>
    );
}

export default function AvisoLegalPage() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const whatsappGeneral = waLink(
        `Hola Alex! Quiero agendar una cita en ${SITE.brand}. ¿Me puedes dar disponibilidad?`
    );

    return (
        <main className="min-h-screen bg-[#0A0A0A] font-[family:var(--font-dm-sans)] font-light text-[#D4C9B0] overflow-x-hidden">
            {/* Fondo luxury */}
            <div className="pointer-events-none fixed inset-0 -z-30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.06)_0%,transparent_34%),linear-gradient(180deg,#0b0806_0%,#120d09_42%,#0d0907_100%)]" />
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
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(201,168,76,0.08)_0%,transparent_70%)]" />

                <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-black/35 px-3 py-1 text-xs uppercase tracking-[0.16em] text-amber-100/80">
                            <span className="h-2 w-2 rounded-full bg-amber-300/90" />
                            Información legal del sitio
                        </div>

                        <h1 className="mt-5 font-[family:var(--font-cormorant)] text-[42px] sm:text-[68px] font-light leading-[1.04] text-[#FAF8F3]">
                            Aviso
                            <span className="block italic text-[#C9A84C]">Legal</span>
                        </h1>

                        <p className="mt-5 max-w-[620px] text-[15px] leading-[1.7] text-[#e8dcc3]">
                            Este documento regula el uso del sitio web, la identificación del titular
                            y las condiciones generales de acceso, navegación y utilización.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-[14px]">
                            <Button href="/privacidad" variant="outline">
                                Ver Privacidad
                            </Button>
                            <Button href="/cookies" variant="outline">
                                Ver Cookies
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* RESUMEN */}
            <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
                <GlassCard className="p-7 sm:p-8">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-[#d9b861]/82">
                        Resumen rápido
                    </div>

                    <div className="mt-5 grid gap-5 md:grid-cols-3">
                        <QuickItem
                            title="Identificación del titular"
                            desc="Aquí se detallan los datos del responsable legal del sitio web."
                        />
                        <QuickItem
                            title="Condiciones de uso"
                            desc="Se regulan las normas generales de acceso y utilización del sitio."
                        />
                        <QuickItem
                            title="Limitaciones y responsabilidad"
                            desc="Se informa sobre el alcance de la responsabilidad del titular y el uso de enlaces externos."
                        />
                    </div>
                </GlassCard>
            </section>

            {/* CONTENIDO */}
            <section className="mx-auto max-w-6xl px-5 pb-16">
                <div className="mb-10">
                    <SectionTitle
                        tag="Documento legal"
                        title="Condiciones generales del sitio"
                        desc="Este aviso legal contiene la información identificativa del titular y regula el acceso, navegación y uso de la web."
                    />
                </div>

                <div className="grid gap-6">
                    <Card title="1. Titular del sitio web">
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

                    <Card title="2. Condiciones de uso">
                        <div className="space-y-3">
                            <p>
                                El acceso y uso de este sitio atribuye la condición de usuario e implica la
                                aceptación de las presentes condiciones generales.
                            </p>
                            <p>
                                El usuario se compromete a utilizar la web, sus contenidos y servicios de
                                conformidad con la ley, la buena fe, el orden público y las presentes
                                condiciones.
                            </p>
                            <p>
                                El titular podrá modificar en cualquier momento la presentación,
                                configuración, contenidos y condiciones del sitio web.
                            </p>
                        </div>
                    </Card>

                    <Card title="3. Propiedad intelectual e industrial">
                        <div className="space-y-3">
                            <p>
                                Todos los contenidos del sitio, incluyendo textos, imágenes, logotipos,
                                diseños, estructura, código fuente y demás elementos, están protegidos por
                                la normativa de propiedad intelectual e industrial.
                            </p>
                            <p>
                                Queda prohibida su reproducción, distribución, comunicación pública,
                                transformación o cualquier otro uso no autorizado expresamente por el titular.
                            </p>
                        </div>
                    </Card>

                    <Card title="4. Responsabilidad">
                        <div className="space-y-3">
                            <p>
                                El titular no garantiza la inexistencia de errores en el acceso al sitio ni
                                en sus contenidos, aunque empleará las medidas razonables para evitarlos o
                                corregirlos.
                            </p>
                            <p>
                                Tampoco se responsabiliza de daños o perjuicios derivados del uso del sitio,
                                de interrupciones del servicio, errores técnicos o presencia de virus u otros
                                elementos dañinos.
                            </p>
                            <p>
                                La información ofrecida en la web tiene carácter general e informativo y no
                                sustituye asesoramiento profesional específico cuando sea necesario.
                            </p>
                        </div>
                    </Card>

                    <Card title="5. Enlaces a terceros">
                        <div className="space-y-3">
                            <p>
                                En caso de que el sitio contenga enlaces a páginas externas o servicios de
                                terceros, el titular no asume responsabilidad sobre sus contenidos,
                                disponibilidad, políticas o prácticas.
                            </p>
                            <p>
                                La presencia de dichos enlaces tiene una finalidad meramente informativa o de
                                conveniencia para el usuario.
                            </p>
                        </div>
                    </Card>

                    <Card title="6. Legislación aplicable y jurisdicción">
                        <div className="space-y-3">
                            <p>
                                Las presentes condiciones se regirán por la normativa aplicable en España.
                            </p>
                            <p>
                                Para cualquier controversia que pudiera derivarse del acceso o uso del sitio,
                                las partes se someterán a los juzgados y tribunales que correspondan conforme
                                a la legislación vigente.
                            </p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="relative overflow-hidden px-5 pb-16">
                <div className="mx-auto max-w-6xl">
                    <GlassCard className="p-7 sm:p-10">
                        <div className="text-[10px] uppercase tracking-[0.28em] text-[#d9b861]/82">
                            ¿Necesitas ayuda?
                        </div>

                        <div className="mt-4 font-[family:var(--font-cormorant)] text-[34px] sm:text-[48px] font-light leading-[1.08] text-[#FAF8F3]">
                            Si tienes dudas legales,
                            <span className="block italic text-[#C9A84C]">te orientamos sin problema</span>
                        </div>

                        <p className="mt-4 max-w-3xl text-[14px] leading-[1.7] text-[#b8a78b]">
                            Si necesitas aclarar cualquier punto sobre el uso del sitio, la titularidad o
                            las condiciones legales, puedes escribirnos directamente.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-[14px]">
                            <Button href={whatsappGeneral} variant="gold" newTab>
                                Hablar por WhatsApp
                            </Button>
                            <Button href="/privacidad" variant="outline">
                                Ver Privacidad
                            </Button>
                        </div>
                    </GlassCard>
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
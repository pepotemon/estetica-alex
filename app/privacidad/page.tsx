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
            <div className="mt-4 space-y-3 text-[13.5px] leading-[1.7] text-[#b8a78b]">
                {children}
            </div>
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

export default function PrivacidadPage() {
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
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(201,168,76,0.08)_0%,transparent_70%)]" />

                <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 border border-amber-300/20 bg-black/35 px-3 py-1 text-xs uppercase tracking-[0.16em] text-amber-100/80">
                            <span className="h-2 w-2 rounded-full bg-amber-300/90" />
                            Protección de datos
                        </div>

                        <h1 className="mt-5 font-[family:var(--font-cormorant)] text-[42px] sm:text-[68px] font-light leading-[1.04] text-[#FAF8F3]">
                            Política de
                            <span className="block italic text-[#C9A84C]">Privacidad</span>
                        </h1>

                        <p className="mt-5 max-w-[620px] text-[15px] leading-[1.7] text-[#e8dcc3]">
                            Aquí explicamos cómo tratamos los datos personales cuando navegas por el
                            sitio, contactas con nosotros o solicitas información sobre nuestros
                            servicios.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-[14px]">
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

            {/* RESUMEN */}
            <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
                <GlassCard className="p-7 sm:p-8">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-[#d9b861]/82">
                        Resumen rápido
                    </div>

                    <div className="mt-5 grid gap-5 md:grid-cols-3">
                        <QuickItem
                            title="Tratamos solo los datos necesarios"
                            desc="Usamos la información imprescindible para responder consultas, gestionar citas o atender solicitudes."
                        />
                        <QuickItem
                            title="La base legal depende del caso"
                            desc="Puede ser tu consentimiento, el interés legítimo o medidas precontractuales."
                        />
                        <QuickItem
                            title="Puedes ejercer tus derechos"
                            desc="Acceso, rectificación, supresión, oposición, limitación y otros, cuando proceda."
                        />
                    </div>
                </GlassCard>
            </section>

            {/* CONTENIDO */}
            <section className="mx-auto max-w-6xl px-5 pb-16">
                <div className="mb-10">
                    <SectionTitle
                        tag="Documento informativo"
                        title="Cómo protegemos y tratamos tus datos"
                        desc="Esta política describe qué datos personales podemos tratar, con qué finalidad y cuáles son tus derechos como usuario."
                    />
                </div>

                <div className="grid gap-6">
                    <Card title="1. Responsable del tratamiento">
                        <div className="space-y-2">
                            <div>
                                <span className="font-medium text-[#FAF8F3]">Razón social:</span>{" "}
                                {SITE.legal.razonSocial}
                            </div>
                            <div>
                                <span className="font-medium text-[#FAF8F3]">NIF:</span> {SITE.legal.nif}
                            </div>
                            <div>
                                <span className="font-medium text-[#FAF8F3]">Domicilio fiscal:</span>{" "}
                                {SITE.legal.domicilioFiscal}
                            </div>
                            <div>
                                <span className="font-medium text-[#FAF8F3]">Email:</span>{" "}
                                <a
                                    className="text-amber-200 hover:text-amber-100"
                                    href={`mailto:${SITE.legal.email}`}
                                >
                                    {SITE.legal.email}
                                </a>
                            </div>
                        </div>
                    </Card>

                    <Card title="2. Qué datos tratamos">
                        <p>Dependiendo del uso del sitio, podemos tratar:</p>
                        <ul className="space-y-2">
                            <li>• Datos de contacto, como nombre, teléfono, email y mensaje.</li>
                            <li>
                                • Datos relacionados con reservas o solicitudes de información, cuando el
                                usuario los facilita.
                            </li>
                            <li>
                                • Datos de navegación, si procede, cuando se utilicen herramientas técnicas
                                o analíticas compatibles con la política de cookies.
                            </li>
                        </ul>
                    </Card>

                    <Card title="3. Finalidades del tratamiento">
                        <p>Podemos utilizar los datos para:</p>
                        <ul className="space-y-2">
                            <li>• Gestionar consultas y solicitudes de información.</li>
                            <li>• Responder mensajes enviados por formulario, email o WhatsApp.</li>
                            <li>• Gestionar reservas o citas cuando el usuario lo solicite.</li>
                            <li>
                                • Mejorar el funcionamiento, seguridad y experiencia del sitio, cuando sea
                                aplicable.
                            </li>
                        </ul>
                    </Card>

                    <Card title="4. Base legal">
                        <p>Las bases que legitiman el tratamiento pueden ser:</p>
                        <ul className="space-y-2">
                            <li>
                                • El consentimiento del usuario, por ejemplo al escribirnos, solicitar
                                información o aceptar cookies no esenciales.
                            </li>
                            <li>
                                • El interés legítimo, en cuestiones relacionadas con seguridad, prevención
                                de fraude, mantenimiento técnico y mejora básica del sitio.
                            </li>
                            <li>
                                • La aplicación de medidas precontractuales, cuando el usuario solicita una
                                cita o información previa a contratar un servicio.
                            </li>
                        </ul>
                    </Card>

                    <Card title="5. Conservación de los datos">
                        <p>
                            Conservaremos los datos durante el tiempo necesario para atender tu solicitud
                            y, en su caso, durante los plazos legalmente exigibles. Cuando los datos ya
                            no sean necesarios, se eliminarán o se bloquearán conforme a la normativa
                            aplicable.
                        </p>
                    </Card>

                    <Card title="6. Destinatarios">
                        <p>
                            No cedemos datos personales a terceros salvo obligación legal o cuando sea
                            necesario para la prestación del servicio, por ejemplo con proveedores
                            técnicos que den soporte a la web o a herramientas de contacto.
                        </p>
                        <p>
                            Si se utilizan servicios de terceros relacionados con cookies o analítica, se
                            indicará de forma complementaria en la Política de Cookies.
                        </p>
                    </Card>

                    <Card title="7. Derechos del usuario">
                        <p>
                            Puedes solicitar, cuando corresponda, el acceso a tus datos personales, su
                            rectificación, supresión, oposición, limitación del tratamiento y
                            portabilidad.
                        </p>
                        <p>
                            Para ejercer tus derechos, puedes escribir a{" "}
                            <a
                                className="text-amber-200 hover:text-amber-100"
                                href={`mailto:${SITE.legal.email}`}
                            >
                                {SITE.legal.email}
                            </a>
                            .
                        </p>
                    </Card>

                    <Card title="8. Cambios en esta política">
                        <p>
                            Podemos actualizar esta Política de Privacidad por cambios legales, técnicos
                            o de funcionamiento del sitio. Recomendamos revisarla periódicamente.
                        </p>
                    </Card>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="relative overflow-hidden px-5 pb-16">
                <div className="mx-auto max-w-6xl">
                    <GlassCard className="p-7 sm:p-10">
                        <div className="text-[10px] uppercase tracking-[0.28em] text-[#d9b861]/82">
                            ¿Tienes dudas?
                        </div>

                        <div className="mt-4 font-[family:var(--font-cormorant)] text-[34px] sm:text-[48px] font-light leading-[1.08] text-[#FAF8F3]">
                            Si necesitas aclararlo,
                            <span className="block italic text-[#C9A84C]">te respondemos encantados</span>
                        </div>

                        <p className="mt-4 max-w-3xl text-[14px] leading-[1.7] text-[#b8a78b]">
                            Si tienes preguntas sobre privacidad, tratamiento de datos o cualquier punto
                            legal de la web, puedes escribirnos directamente.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-[14px]">
                            <Button href={whatsappGeneral} variant="gold" newTab>
                                Hablar por WhatsApp
                            </Button>
                            <Button href="/cookies" variant="outline">
                                Ver Cookies
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
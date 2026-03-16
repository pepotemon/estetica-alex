"use client";

import React from "react";

const SITE = {
    brand: "Alex Estética",
    city: "Gran Canaria",
    phone: "34661026192",
    instagramUrl:
        "https://www.instagram.com/alex_postquirurgicoscanarias?igsh=MTg3Y2NibWMwYTl5ZQ==",
    logoSrc: "/alex-logo.png",

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
        "inline-flex items-center justify-center gap-2 px-7 py-3 text-[12.5px] tracking-[0.10em] uppercase transition-all duration-200";
    const styles =
        variant === "gold"
            ? "bg-[#C9A84C] text-black hover:bg-[#E2C47A] hover:-translate-y-[2px]"
            : "border border-[rgba(201,168,76,0.40)] text-[#C9A84C] hover:border-[#C9A84C] hover:bg-[rgba(201,168,76,0.06)]";

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

            <h1 className="font-[family:var(--font-cormorant)] text-[34px] sm:text-[48px] font-light leading-[1.08] text-[#FAF8F3]">
                {title}
            </h1>

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

function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center gap-2 border border-[rgba(201,168,76,0.20)] bg-[rgba(18,14,10,0.45)] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-amber-100/82 backdrop-blur-[6px]">
            <span className="inline-block h-2 w-2 rounded-full bg-amber-300" />
            {children}
        </span>
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

export default function CookiesPage() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const whatsappGeneral = waLink(
        `Hola! Quiero agendar una valoración en ${SITE.brand}. ¿Me puedes dar disponibilidad?`
    );

    return (
        <main className="min-h-screen overflow-x-hidden bg-[#0A0A0A] font-[family:var(--font-dm-sans)] font-light text-[#D4C9B0]">
            <div className="pointer-events-none fixed inset-0 -z-30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.06)_0%,transparent_34%),linear-gradient(180deg,#0b0806_0%,#120d09_42%,#0d0907_100%)]" />
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
                                    { href: "/cookies", label: "Cookies" },
                                    { href: "/privacidad", label: "Privacidad" },
                                    { href: "/aviso-legal", label: "Aviso legal" },
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

            {/* HERO LEGAL */}
            <section className="relative isolate overflow-hidden border-b border-[rgba(201,168,76,0.10)]">
                <div className="absolute inset-0 -z-20" />
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(201,168,76,0.08)_0%,transparent_70%)]" />

                <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
                    <Badge>Información legal</Badge>

                    <div className="mt-6 max-w-3xl">
                        <h1 className="font-[family:var(--font-cormorant)] text-[42px] sm:text-[68px] font-light leading-[1.04] text-[#FAF8F3]">
                            Política de
                            <span className="block italic text-[#C9A84C]">Cookies</span>
                        </h1>

                        <p className="mt-5 max-w-[620px] text-[15px] leading-[1.7] text-[#e8dcc3]">
                            En {SITE.brand} usamos cookies para mejorar la experiencia de navegación,
                            entender el rendimiento del sitio y ofrecer una experiencia más fluida,
                            clara y segura.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-[14px]">
                            <Button href="/privacidad" variant="outline" newTab={false}>
                                Ver privacidad
                            </Button>
                            <Button href="/aviso-legal" variant="outline" newTab={false}>
                                Ver aviso legal
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
                            title="Puedes aceptar, rechazar o bloquear cookies"
                            desc="La gestión depende de la configuración de tu navegador y de los permisos que concedas."
                        />
                        <QuickItem
                            title="Las cookies técnicas son necesarias"
                            desc="Son las que permiten que la web cargue, navegue y funcione correctamente."
                        />
                        <QuickItem
                            title="Las cookies analíticas ayudan a mejorar"
                            desc="Nos permiten entender el uso del sitio de forma agregada para optimizarlo."
                        />
                    </div>
                </GlassCard>
            </section>

            {/* CONTENIDO */}
            <section className="mx-auto max-w-6xl px-5 pb-16">
                <div className="mb-10">
                    <SectionTitle
                        tag="Documento informativo"
                        title="Cómo usamos las cookies en este sitio"
                        desc={`Aquí te explicamos qué son las cookies, qué tipos pueden utilizarse en esta web y cómo puedes gestionarlas en cualquier momento.`}
                    />
                </div>

                <div className="grid gap-6">
                    <Card title="1) ¿Qué son las cookies?">
                        <p>
                            Una cookie es un pequeño archivo que se descarga en tu dispositivo al
                            acceder a determinadas páginas web. Permite, por ejemplo, recordar
                            preferencias, mantener sesiones abiertas o recopilar información estadística.
                        </p>
                    </Card>

                    <Card title="2) Tipos de cookies que pueden usarse en este sitio">
                        <div>
                            <div className="text-[#FAF8F3] font-medium">Cookies técnicas o necesarias</div>
                            <p className="mt-2">
                                Son imprescindibles para el funcionamiento básico del sitio: seguridad,
                                navegación, carga correcta de páginas y estabilidad general.
                            </p>
                        </div>

                        <div className="pt-2">
                            <div className="text-[#FAF8F3] font-medium">Cookies de preferencias</div>
                            <p className="mt-2">
                                Permiten recordar elecciones del usuario, como idioma o ciertos ajustes
                                visuales, para mejorar la experiencia de navegación.
                            </p>
                        </div>

                        <div className="pt-2">
                            <div className="text-[#FAF8F3] font-medium">Cookies analíticas</div>
                            <p className="mt-2">
                                Ayudan a entender cómo se usa el sitio: páginas visitadas, tiempo de
                                permanencia o navegación general, con el fin de mejorar contenidos y
                                estructura.
                            </p>
                        </div>

                        <div className="pt-2">
                            <div className="text-[#FAF8F3] font-medium">Cookies de terceros</div>
                            <p className="mt-2">
                                Algunas integraciones, como mapas, redes sociales o servicios externos de
                                medición, pueden establecer cookies bajo las políticas propias del
                                proveedor tercero.
                            </p>
                        </div>
                    </Card>

                    <Card title="3) ¿Qué cookies usamos exactamente?">
                        <p>
                            Este sitio puede utilizar cookies técnicas propias para su funcionamiento.
                            Además, si se habilitan servicios de terceros como mapas, analítica o
                            integraciones sociales, dichos proveedores pueden establecer cookies según
                            sus propias políticas.
                        </p>
                        <p>
                            Para ampliar información, puedes consultar también{" "}
                            <a
                                href="/privacidad"
                                className="text-amber-200 hover:text-amber-100 font-semibold"
                            >
                                Política de Privacidad
                            </a>{" "}
                            y{" "}
                            <a
                                href="/aviso-legal"
                                className="text-amber-200 hover:text-amber-100 font-semibold"
                            >
                                Aviso Legal
                            </a>
                            .
                        </p>
                    </Card>

                    <Card title="4) Cómo gestionar, bloquear o eliminar cookies">
                        <p>
                            Puedes permitir, bloquear o eliminar cookies desde la configuración de tu
                            navegador. Ten en cuenta que, si bloqueas cookies técnicas, algunas partes
                            del sitio podrían no funcionar correctamente.
                        </p>

                        <GlassCard className="mt-4 p-5">
                            <div className="text-[#FAF8F3] font-medium text-sm">Guía rápida por navegador</div>
                            <ul className="mt-3 space-y-2 text-[#b8a78b]">
                                <li>• Chrome: Configuración → Privacidad y seguridad → Cookies</li>
                                <li>• Safari: Preferencias → Privacidad → Cookies</li>
                                <li>• Firefox: Ajustes → Privacidad y Seguridad → Cookies</li>
                                <li>• Edge: Configuración → Cookies y permisos del sitio</li>
                            </ul>
                        </GlassCard>
                    </Card>

                    <Card title="5) Actualizaciones de esta política">
                        <p>
                            Podemos actualizar esta Política de Cookies para adaptarla a cambios legales,
                            técnicos o de funcionamiento del sitio. Te recomendamos revisarla de forma
                            periódica.
                        </p>
                    </Card>

                    <Card title="6) Contacto">
                        <p>
                            Si tienes dudas sobre esta Política de Cookies, puedes escribirnos y te
                            responderemos con la mayor brevedad posible.
                        </p>

                        <GlassCard className="mt-4 p-5">
                            <div className="text-[#FAF8F3] font-medium text-sm">Datos del responsable</div>

                            <div className="mt-3 space-y-2 text-[13.5px] leading-[1.7] text-[#b8a78b]">
                                <div>
                                    <span className="text-[#FAF8F3] font-medium">Razón social:</span>{" "}
                                    {SITE.legal.razonSocial}
                                </div>
                                <div>
                                    <span className="text-[#FAF8F3] font-medium">NIF:</span> {SITE.legal.nif}
                                </div>
                                <div>
                                    <span className="text-[#FAF8F3] font-medium">Domicilio fiscal:</span>{" "}
                                    {SITE.legal.domicilioFiscal}
                                </div>
                                <div>
                                    <span className="text-[#FAF8F3] font-medium">Email:</span>{" "}
                                    <a
                                        className="text-amber-200 hover:text-amber-100"
                                        href={`mailto:${SITE.legal.email}`}
                                    >
                                        {SITE.legal.email}
                                    </a>
                                </div>
                            </div>

                            <div className="mt-5">
                                <Button href={whatsappGeneral} variant="outline">
                                    Consultar por WhatsApp
                                </Button>
                            </div>
                        </GlassCard>
                    </Card>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="relative overflow-hidden px-5 pb-16">
                <div className="mx-auto max-w-6xl">
                    <GlassCard className="p-7 sm:p-10">
                        <div className="text-[10px] uppercase tracking-[0.28em] text-[#d9b861]/82">
                            Te invitamos a conocernos
                        </div>

                        <div className="mt-4 font-[family:var(--font-cormorant)] text-[34px] sm:text-[48px] font-light leading-[1.08] text-[#FAF8F3]">
                            Si necesitas ayuda,
                            <span className="block italic text-[#C9A84C]">te orientamos sin compromiso</span>
                        </div>

                        <p className="mt-4 max-w-3xl text-[14px] leading-[1.7] text-[#b8a78b]">
                            Si deseas información sobre tratamientos, agenda o disponibilidad, estaremos
                            encantados de orientarte.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-[14px]">
                            <Button href={whatsappGeneral} variant="gold">
                                Agendar una valoración
                            </Button>
                            <Button href="/servicios" variant="outline" newTab={false}>
                                Ver catálogo de tratamientos
                            </Button>
                        </div>
                    </GlassCard>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-[rgba(201,168,76,0.15)] bg-[linear-gradient(180deg,rgba(19,14,10,0.55)_0%,rgba(12,9,7,0.78)_100%)] px-5 py-10 sm:px-10">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-3 sm:grid-cols-2 sm:items-center sm:justify-between">
                        <div className="text-sm text-[#b8a78b]">
                            © {new Date().getFullYear()} {SITE.brand} · {SITE.city}
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end text-sm">
                            <a href="/cookies" className="text-[#b8a78b] hover:text-amber-100">
                                Cookies
                            </a>
                            <a href="/privacidad" className="text-[#b8a78b] hover:text-amber-100">
                                Privacidad
                            </a>
                            <a href="/aviso-legal" className="text-[#b8a78b] hover:text-amber-100">
                                Aviso legal
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
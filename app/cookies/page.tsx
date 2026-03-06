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
            <h1 className="text-3xl sm:text-4xl font-semibold text-amber-100">
                {title}
            </h1>
            {desc ? (
                <p className="mt-3 max-w-3xl text-amber-100/70 text-sm sm:text-base">
                    {desc}
                </p>
            ) : null}
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
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
            <div className="text-lg font-semibold text-amber-100">{title}</div>
            <div className="mt-4 text-sm text-amber-100/70 leading-relaxed space-y-3">
                {children}
            </div>
        </div>
    );
}

function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-black/30 px-3 py-1 text-xs text-amber-100/80">
            <span className="inline-block h-2 w-2 rounded-full bg-amber-300" />
            {children}
        </span>
    );
}

export default function CookiesPage() {
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

            {/* ✅ HEADER (igual a todas las pantallas) */}
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

                    {/* Desktop */}
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

                    {/* Mobile */}
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

                {/* Mobile dropdown */}
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

            {/* CONTENT */}
            <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
                <div className="mb-10">
                    <Badge>Información legal</Badge>
                    <div className="mt-4">
                        <SectionTitle
                            title="Política de Cookies"
                            desc={`En ${SITE.brand} usamos cookies para mejorar la experiencia de navegación, medir el rendimiento del sitio y ofrecer contenidos más relevantes. Aquí te explicamos qué son, qué usamos y cómo puedes gestionarlas.`}
                        />
                    </div>

                    <div className="rounded-[2rem] border border-white/10 bg-black/30 p-7 text-sm text-amber-100/70">
                        <div className="text-amber-100 font-semibold">Resumen rápido</div>
                        <ul className="mt-3 space-y-2">
                            <li>• Puedes aceptar, rechazar o configurar cookies desde tu navegador.</li>
                            <li>• Las cookies técnicas son necesarias para que el sitio funcione correctamente.</li>
                            <li>• Las cookies analíticas ayudan a entender el uso del sitio (de forma agregada).</li>
                        </ul>
                    </div>
                </div>

                <div className="grid gap-6">
                    <Card title="1) ¿Qué son las cookies?">
                        <p>
                            Una cookie es un pequeño archivo que se descarga en tu dispositivo al acceder
                            a determinadas páginas web. Permite, por ejemplo, recordar preferencias,
                            mantener sesiones o recopilar información estadística.
                        </p>
                    </Card>

                    <Card title="2) Tipos de cookies que pueden usarse en este sitio">
                        <div>
                            <div className="text-amber-100 font-semibold">Cookies técnicas (necesarias)</div>
                            <p className="mt-2">
                                Son imprescindibles para el funcionamiento básico del sitio: seguridad,
                                navegación y carga correcta de contenidos.
                            </p>
                        </div>

                        <div className="pt-2">
                            <div className="text-amber-100 font-semibold">Cookies de preferencias</div>
                            <p className="mt-2">
                                Permiten recordar tus elecciones (por ejemplo, idioma o preferencias visuales)
                                para que no tengas que configurarlas cada vez.
                            </p>
                        </div>

                        <div className="pt-2">
                            <div className="text-amber-100 font-semibold">Cookies analíticas</div>
                            <p className="mt-2">
                                Ayudan a entender cómo se usa el sitio (páginas más visitadas, tiempo de
                                permanencia, etc.) con el fin de mejorar el contenido y la experiencia.
                            </p>
                        </div>

                        <div className="pt-2">
                            <div className="text-amber-100 font-semibold">Cookies de terceros</div>
                            <p className="mt-2">
                                Algunas integraciones pueden establecer cookies (por ejemplo, redes sociales,
                                mapas o servicios de medición). Estas cookies dependen del proveedor tercero.
                            </p>
                        </div>
                    </Card>

                    <Card title="3) ¿Qué cookies usamos exactamente?">
                        <p>
                            Este sitio puede utilizar cookies técnicas propias para su funcionamiento. Además, si
                            se habilitan servicios de terceros (por ejemplo, analítica, mapas o integraciones de
                            redes sociales), dichos proveedores pueden establecer cookies bajo sus propias políticas.
                        </p>
                        <p>
                            Para ver cómo se gestionan, consulta también{" "}
                            <a href="/privacidad" className="text-amber-200 hover:text-amber-100 font-semibold">
                                Política de Privacidad
                            </a>{" "}
                            y{" "}
                            <a href="/aviso-legal" className="text-amber-200 hover:text-amber-100 font-semibold">
                                Aviso Legal
                            </a>
                            .
                        </p>
                    </Card>

                    <Card title="4) Cómo gestionar, bloquear o eliminar cookies">
                        <p>
                            Puedes permitir, bloquear o eliminar cookies desde la configuración de tu navegador.
                            Ten en cuenta que, si bloqueas cookies técnicas, el sitio podría no funcionar
                            correctamente.
                        </p>
                        <div className="rounded-[1.6rem] border border-white/10 bg-black/30 p-5">
                            <div className="text-amber-100 font-semibold text-sm">Guía rápida</div>
                            <ul className="mt-3 space-y-2">
                                <li>• Chrome: Configuración → Privacidad y seguridad → Cookies</li>
                                <li>• Safari: Preferencias → Privacidad → Cookies</li>
                                <li>• Firefox: Ajustes → Privacidad & Seguridad → Cookies</li>
                                <li>• Edge: Configuración → Cookies y permisos del sitio</li>
                            </ul>
                        </div>
                    </Card>

                    <Card title="5) Actualizaciones de esta política">
                        <p>
                            Podemos actualizar esta Política de Cookies para adaptarla a cambios legales o
                            técnicos. Te recomendamos revisarla periódicamente.
                        </p>
                    </Card>

                    <Card title="6) Contacto">
                        <p>
                            Si tienes dudas sobre esta Política de Cookies, puedes escribirnos y te respondemos
                            con la mayor brevedad posible.
                        </p>

                        <div className="mt-4 rounded-[1.6rem] border border-white/10 bg-black/30 p-5">
                            <div className="text-amber-100 font-semibold text-sm">Datos del responsable</div>
                            <div className="mt-3 space-y-2 text-sm text-amber-100/70">
                                <div>
                                    <span className="text-amber-100 font-semibold">Razón social:</span>{" "}
                                    {SITE.legal.razonSocial}
                                </div>
                                <div>
                                    <span className="text-amber-100 font-semibold">NIF:</span> {SITE.legal.nif}
                                </div>
                                <div>
                                    <span className="text-amber-100 font-semibold">Domicilio fiscal:</span>{" "}
                                    {SITE.legal.domicilioFiscal}
                                </div>
                                <div>
                                    <span className="text-amber-100 font-semibold">Email:</span>{" "}
                                    <a
                                        className="text-amber-200 hover:text-amber-100"
                                        href={`mailto:${SITE.legal.email}`}
                                    >
                                        {SITE.legal.email}
                                    </a>
                                </div>
                            </div>

                            <div className="mt-4">
                                <Button href={whatsappGeneral} variant="outline">
                                    Consultar por WhatsApp
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* ✅ FINAL (2 botones) */}
            <section className="mx-auto max-w-6xl px-5 pb-16">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 sm:p-10 backdrop-blur">
                    <div className="text-2xl font-semibold text-amber-100">
                        Te invitamos a conocernos
                    </div>
                    <p className="mt-2 max-w-3xl text-amber-100/70">
                        Si deseas información de tratamientos, agenda y disponibilidad, te orientamos sin compromiso.
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

            {/* Footer */}
            <footer className="border-t border-white/10">
                <div className="mx-auto max-w-6xl px-5 py-10">
                    <div className="grid gap-3 sm:grid-cols-2 sm:items-center sm:justify-between">
                        <div className="text-sm text-amber-100/60">
                            © {new Date().getFullYear()} {SITE.brand} · {SITE.city}
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end text-sm">
                            <a href="/cookies" className="text-amber-100/70 hover:text-amber-100">
                                Cookies
                            </a>
                            <a href="/privacidad" className="text-amber-100/70 hover:text-amber-100">
                                Privacidad
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
"use client";

import React from "react";

const SITE = {
    brand: "Alex Estética",
    city: "Gran Canaria",
    phone: "34661026192",
    instagramUrl:
        "https://www.instagram.com/alex_postquirurgicoscanarias?igsh=MTg3Y2NibWMwYTl5ZQ==",
    logoSrc: "/alex-logo.png",
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

export default function PrivacidadPage() {
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
                            title="Política de Privacidad"
                            desc={`En ${SITE.brand} nos tomamos muy en serio tu privacidad. Esta política explica qué datos tratamos, con qué finalidad, durante cuánto tiempo, con qué base legal y cuáles son tus derechos.`}
                        />
                    </div>

                    <div className="rounded-[2rem] border border-white/10 bg-black/30 p-7 text-sm text-amber-100/70">
                        <div className="text-amber-100 font-semibold">Importante</div>
                        <ul className="mt-3 space-y-2">
                            <li>• Esta web puede incluir enlaces de contacto (por ejemplo, WhatsApp) y redes sociales.</li>
                            <li>• No solicitamos datos “sensibles” por la web; si compartes información de salud, lo haces voluntariamente.</li>
                            <li>• Puedes ejercer tus derechos en cualquier momento (ver sección “Tus derechos”).</li>
                        </ul>
                    </div>
                </div>

                <div className="grid gap-6">
                    <Card title="1) Responsable del tratamiento">
                        <p>
                            <span className="text-amber-100 font-semibold">{SITE.brand}</span> (en adelante,
                            “el Centro”).
                        </p>
                        <p>
                            <span className="text-amber-100 font-semibold">Ámbito:</span> {SITE.city}.
                        </p>
                        <p>
                            <span className="text-amber-100 font-semibold">Contacto:</span>{" "}
                            puedes escribirnos por WhatsApp desde la web.
                        </p>
                        <div className="pt-1">
                            <Button href={whatsappGeneral} variant="outline">
                                Contactar por WhatsApp
                            </Button>
                        </div>
                        <p className="text-xs text-amber-100/55">
                            *Si quieres que quede perfecto a nivel legal, luego añadimos: razón social/NIF, email
                            de contacto y domicilio fiscal exacto.
                        </p>
                    </Card>

                    <Card title="2) Qué datos recogemos">
                        <p>
                            Dependiendo de cómo interactúes con la web, podemos tratar:
                        </p>
                        <ul className="space-y-2">
                            <li>• <span className="text-amber-100 font-semibold">Datos de contacto</span>: nombre, teléfono, mensajes (si nos escribes).</li>
                            <li>• <span className="text-amber-100 font-semibold">Datos de navegación</span>: IP, dispositivo, páginas visitadas, cookies (ver Política de Cookies).</li>
                            <li>• <span className="text-amber-100 font-semibold">Datos de redes sociales</span>: si interactúas con Instagram o enlaces de terceros.</li>
                            <li>• <span className="text-amber-100 font-semibold">Contenido del mensaje</span>: lo que escribas voluntariamente (por ejemplo, tu objetivo estético).</li>
                        </ul>
                    </Card>

                    <Card title="3) Finalidades del tratamiento">
                        <ul className="space-y-2">
                            <li>• Atender solicitudes de información, dudas y consultas.</li>
                            <li>• Gestionar citas, disponibilidad y seguimiento de solicitudes.</li>
                            <li>• Mejorar la experiencia de navegación y el rendimiento del sitio.</li>
                            <li>• En su caso, enviar comunicaciones relacionadas con tu solicitud (nunca spam).</li>
                            <li>• Cumplir obligaciones legales cuando sea aplicable.</li>
                        </ul>
                    </Card>

                    <Card title="4) Base legal (por qué podemos tratar tus datos)">
                        <ul className="space-y-2">
                            <li>• <span className="text-amber-100 font-semibold">Consentimiento</span>: cuando nos contactas o aceptas cookies (si aplica).</li>
                            <li>• <span className="text-amber-100 font-semibold">Ejecución de medidas precontractuales</span>: para gestionar tu petición de cita o información.</li>
                            <li>• <span className="text-amber-100 font-semibold">Interés legítimo</span>: para seguridad del sitio y mejora del servicio (analítica agregada, prevención de fraude).</li>
                            <li>• <span className="text-amber-100 font-semibold">Obligación legal</span>: cuando una norma nos obligue (por ejemplo, facturación si procede).</li>
                        </ul>
                    </Card>

                    <Card title="5) ¿Con quién compartimos tus datos?">
                        <p>
                            No vendemos tus datos. Solo se compartirán cuando sea necesario para prestar el servicio
                            o por obligación legal.
                        </p>
                        <ul className="space-y-2">
                            <li>• <span className="text-amber-100 font-semibold">Proveedores técnicos</span> (hosting, analítica si se usa, etc.).</li>
                            <li>• <span className="text-amber-100 font-semibold">Plataformas de comunicación</span> (por ejemplo, WhatsApp) cuando decides escribirnos.</li>
                            <li>• <span className="text-amber-100 font-semibold">Autoridades</span> si existe obligación legal.</li>
                        </ul>

                    </Card>

                    <Card title="6) Transferencias internacionales">
                        <p>
                            Algunos proveedores (por ejemplo, redes sociales o herramientas de analítica) pueden
                            tratar datos fuera del Espacio Económico Europeo. En ese caso, se aplicarán garantías
                            adecuadas según normativa vigente (por ejemplo, cláusulas contractuales tipo).
                        </p>
                    </Card>

                    <Card title="7) Plazos de conservación">
                        <ul className="space-y-2">
                            <li>• Consultas: durante el tiempo necesario para atender y cerrar tu solicitud.</li>
                            <li>• Citas/gestión: durante el tiempo necesario para la coordinación y seguimiento.</li>
                            <li>• Obligaciones legales: durante los plazos exigidos por normativa aplicable.</li>
                            <li>• Cookies: según el tipo (ver Política de Cookies).</li>
                        </ul>
                    </Card>

                    <Card title="8) Tus derechos">
                        <p>
                            Puedes solicitar:
                        </p>
                        <ul className="space-y-2">
                            <li>• Acceso a tus datos</li>
                            <li>• Rectificación de datos inexactos</li>
                            <li>• Supresión (“derecho al olvido”)</li>
                            <li>• Oposición al tratamiento</li>
                            <li>• Limitación del tratamiento</li>
                            <li>• Portabilidad de tus datos</li>
                        </ul>

                        <p className="pt-1">
                            Para ejercerlos, contáctanos y te responderemos lo antes posible.
                        </p>

                        <div className="pt-2">
                            <Button href={whatsappGeneral} variant="outline">
                                Ejercer derechos por WhatsApp
                            </Button>
                        </div>

                        <p className="text-xs text-amber-100/55">
                            También tienes derecho a presentar una reclamación ante la autoridad de control competente
                            si consideras que el tratamiento no se ajusta a la normativa.
                        </p>
                    </Card>

                    <Card title="9) Seguridad de la información">
                        <p>
                            Aplicamos medidas razonables de seguridad para proteger la información frente a accesos no
                            autorizados, alteración, pérdida o divulgación. Aun así, ninguna transmisión por Internet
                            es 100% segura.
                        </p>
                    </Card>

                    <Card title="10) Menores de edad">
                        <p>
                            Este sitio y sus servicios no están dirigidos a menores sin la supervisión de un adulto.
                            Si crees que un menor nos ha facilitado datos, contáctanos para eliminarlos.
                        </p>
                    </Card>

                    <Card title="11) Cambios en esta política">
                        <p>
                            Podemos actualizar esta Política de Privacidad para adaptarla a cambios legales o técnicos.
                            La versión publicada en esta página será la vigente en cada momento.
                        </p>
                    </Card>

                    <Card title="12) Contacto">
                        <p>
                            Si tienes dudas sobre privacidad o sobre esta política, escríbenos y te orientamos.
                        </p>
                        <div className="pt-2">
                            <Button href={whatsappGeneral} variant="gold">
                                Consultar por WhatsApp
                            </Button>
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
                <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-amber-100/60">
                    © {new Date().getFullYear()} {SITE.brand} · {SITE.city}
                    <span className="mx-2 text-amber-100/35">·</span>
                    <a href="/cookies" className="text-amber-100/70 hover:text-amber-100">
                        Cookies
                    </a>
                    <span className="mx-2 text-amber-100/35">·</span>
                    <a href="/privacidad" className="text-amber-100/70 hover:text-amber-100">
                        Privacidad
                    </a>
                    <span className="mx-2 text-amber-100/35">·</span>
                    <a href="/aviso-legal" className="text-amber-100/70 hover:text-amber-100">
                        Aviso legal
                    </a>
                </div>
            </footer>
        </main>
    );
}
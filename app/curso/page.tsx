const SITE = {
    brand: "Alex Estética",
    city: "Gran Canaria",
    phone: "34600111222",
};

function waLink(text: string) {
    return `https://wa.me/${SITE.phone}?text=${encodeURIComponent(text)}`;
}

function Button({
    href,
    children,
    variant = "primary",
}: {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "outline";
}) {
    const base =
        "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium transition";
    const styles =
        variant === "primary"
            ? "bg-neutral-900 text-white hover:bg-neutral-800"
            : "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50";
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
        <main className="min-h-screen bg-white text-neutral-900">
            <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                    <a href="/" className="font-semibold">{SITE.brand}</a>

                    <nav className="hidden items-center gap-6 sm:flex">
                        <a href="/servicios" className="text-sm text-neutral-700 hover:text-neutral-900">Servicios</a>
                        <a href="/curso" className="text-sm text-neutral-900 font-medium">Curso</a>
                        <a href="/" className="text-sm text-neutral-700 hover:text-neutral-900">Inicio</a>
                    </nav>

                    <a
                        href={whatsappCurso}
                        className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
                        target="_blank"
                        rel="noreferrer"
                    >
                        WhatsApp
                    </a>
                </div>
            </header>

            <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
                <p className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-neutral-700">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                    Curso · {SITE.city}
                </p>

                <h1 className="text-4xl font-semibold sm:text-5xl">
                    Curso Profesional de Estética
                </h1>

                <p className="mt-4 max-w-3xl text-lg text-neutral-700">
                    Aprende el método paso a paso para trabajar con seguridad, mejorar resultados y ofrecer
                    un servicio profesional.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Button href={whatsappCurso}>Preguntar por WhatsApp</Button>
                    <Button href={waLink("Hola! ¿Me pasas el temario completo y requisitos?")} variant="outline">
                        Pedir temario completo
                    </Button>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {[
                        { t: "Modalidad", d: "Presencial / Online (edita)" },
                        { t: "Duración", d: "X horas (edita)" },
                        { t: "Cupos", d: "Limitados (recomendado)" },
                    ].map((x) => (
                        <div key={x.t} className="rounded-2xl border p-5">
                            <div className="text-sm text-neutral-600">{x.t}</div>
                            <div className="mt-1 font-semibold">{x.d}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 rounded-3xl border p-6">
                    <div className="text-2xl font-semibold">Qué aprenderás</div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {bullets.map((b) => (
                            <div key={b} className="rounded-2xl border bg-neutral-50 p-4">
                                <div className="font-medium">{b}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 rounded-3xl border p-6">
                    <div className="text-2xl font-semibold">Preguntas frecuentes</div>
                    <div className="mt-6 space-y-3">
                        {faqs.map((f) => (
                            <details key={f.q} className="rounded-2xl border p-5">
                                <summary className="cursor-pointer font-medium">{f.q}</summary>
                                <p className="mt-3 text-neutral-700">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="border-t">
                <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-neutral-600">
                    © {new Date().getFullYear()} {SITE.brand} · {SITE.city}
                </div>
            </footer>

            <a
                href={whatsappCurso}
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-5 right-5 z-30 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-lg hover:bg-neutral-800"
            >
                WhatsApp
            </a>
        </main>
    );
}
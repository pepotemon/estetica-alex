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

export default function ServiciosPage() {
    const whatsappGeneral = waLink(
        `Hola! Quiero información de servicios en ${SITE.brand} (precios y disponibilidad).`
    );

    const services = [
        {
            title: "Depilación láser",
            desc:
                "Evaluación personalizada y protocolo seguro según tu tipo de piel. Te guiamos por sesiones.",
            msg: "Hola! Quiero información sobre depilación láser (precio, sesiones y cuidados).",
        },
        {
            title: "Tratamientos faciales",
            desc:
                "Opciones por objetivo: limpieza profunda, hidratación, manchas, acné y rejuvenecimiento.",
            msg: "Hola! Quiero información sobre tratamientos faciales (opciones y precios).",
        },
        {
            title: "Rejuvenecimiento y cuidado de la piel",
            desc:
                "Plan por objetivos: textura, luminosidad y mantenimiento. Recomendación personalizada.",
            msg: "Hola! Quiero un plan para rejuvenecimiento/cuidado de piel. ¿Qué recomiendas?",
        },
        {
            title: "Asesoría estética",
            desc:
                "Valoración y plan recomendado según tu caso. Ideal si no sabes qué tratamiento elegir.",
            msg: "Hola! Quiero agendar una valoración/asesoría estética. ¿Disponibilidad?",
        },
    ];

    return (
        <main className="min-h-screen bg-white text-neutral-900">
            <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
                    <a href="/" className="font-semibold">{SITE.brand}</a>

                    <nav className="hidden items-center gap-6 sm:flex">
                        <a href="/servicios" className="text-sm text-neutral-900 font-medium">Servicios</a>
                        <a href="/curso" className="text-sm text-neutral-700 hover:text-neutral-900">Curso</a>
                        <a href="/" className="text-sm text-neutral-700 hover:text-neutral-900">Inicio</a>
                    </nav>

                    <a
                        href={whatsappGeneral}
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
                    Servicios · {SITE.city}
                </p>

                <h1 className="text-4xl font-semibold sm:text-5xl">Servicios</h1>
                <p className="mt-4 max-w-3xl text-lg text-neutral-700">
                    Selecciona un servicio y te respondemos por WhatsApp con precios, sesiones y disponibilidad.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {services.map((s) => (
                        <div key={s.title} className="rounded-3xl border p-6">
                            <div className="text-xl font-semibold">{s.title}</div>
                            <p className="mt-2 text-neutral-700">{s.desc}</p>
                            <div className="mt-5">
                                <Button href={waLink(s.msg)} variant="outline">
                                    Consultar por WhatsApp
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 rounded-3xl border bg-neutral-50 p-6">
                    <div className="text-lg font-semibold">¿No sabes cuál elegir?</div>
                    <p className="mt-2 text-neutral-700">
                        Escríbenos y te recomendamos el tratamiento ideal según tu caso.
                    </p>
                    <div className="mt-5">
                        <Button href={waLink("Hola! No sé qué tratamiento elegir. ¿Me recomiendas uno?")}>
                            Pedir recomendación
                        </Button>
                    </div>
                </div>
            </section>

            <footer className="border-t">
                <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-neutral-600">
                    © {new Date().getFullYear()} {SITE.brand} · {SITE.city}
                </div>
            </footer>

            <a
                href={whatsappGeneral}
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-5 right-5 z-30 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-lg hover:bg-neutral-800"
            >
                WhatsApp
            </a>
        </main>
    );
}
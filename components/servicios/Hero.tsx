import type { SiteConfig } from "./types";

export default function Hero({ site }: { site: SiteConfig }) {
    return (
        <section className="relative overflow-hidden border-b border-white/10 py-32 md:py-36">

            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-tratamientos.jpg"
                    alt="Tratamientos estéticos"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* overlay oscuro */}
                <div className="absolute inset-0 bg-black/70" />

                {/* glow dorado */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.15),transparent_65%)]" />
            </div>

            {/* CONTENIDO */}
            <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

                <span className="text-amber-200 text-sm tracking-[0.25em] uppercase">
                    Tratamientos Estéticos
                </span>

                <h1 className="mt-6 text-5xl md:text-6xl font-[var(--font-cormorant)] text-amber-100 leading-tight">
                    Resultados reales
                    <br />
                    belleza natural
                </h1>

                <p className="mt-6 text-amber-100/70 text-lg max-w-2xl mx-auto">
                    Tecnología avanzada y protocolos personalizados para
                    ayudarte a conseguir tu mejor versión.
                </p>

            </div>

        </section>
    );
}
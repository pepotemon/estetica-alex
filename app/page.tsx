"use client";

import React from "react";

const SITE = {
  brand: "Alex Estética",
  city: "Gran Canaria",
  phone: "34600111222", // ✅ 34 + número sin +, sin espacios
  instagramUrl: "https://instagram.com/", // pon el link real
  addressLine: "Tu dirección aquí, Gran Canaria",
  hours: "Lun–Sáb · 10:00–20:00",
  logoSrc: "/alex-logo.png", // /public/alex-logo.png

  // ✅ HERO (pon la imagen en /public/hero.jpg)
  hero: "/hero.jpg",

  // Google Maps embed (cambia el src por el tuyo cuando lo tengas)
  mapsEmbedSrc: "https://www.google.com/maps?q=Gran%20Canaria&output=embed",
};

function waLink(text: string) {
  return `https://wa.me/${SITE.phone}?text=${encodeURIComponent(text)}`;
}

function Button({
  href,
  children,
  variant = "gold",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-amber-300/30";
  const styles =
    variant === "gold"
      ? "bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 text-black hover:brightness-110"
      : "border border-amber-300/30 bg-white/5 text-amber-100 hover:bg-white/10";
  return (
    <a href={href} className={`${base} ${styles}`} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function NavLink({
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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-black/30 px-3 py-1 text-xs text-amber-100/80 backdrop-blur">
      <span className="inline-block h-2 w-2 rounded-full bg-amber-300" />
      {children}
    </span>
  );
}

function Stat({ t, d }: { t: string; d: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="text-xs text-amber-100/60">{t}</div>
      <div className="mt-1 text-sm font-semibold text-amber-100">{d}</div>
    </div>
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

function Icon({ name }: { name: "shield" | "spark" | "star" | "clock" }) {
  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-200" fill="none">
        <path
          d="M12 3l7 4v6c0 5-3 8-7 9-4-1-7-4-7-9V7l7-4z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M9 12l2 2 4-5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (name === "spark") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-200" fill="none">
        <path
          d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (name === "star") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-200" fill="none">
        <path
          d="M12 3l2.7 5.6 6.1.9-4.4 4.2 1 6.1L12 17.8 6.6 19.8l1-6.1-4.4-4.2 6.1-.9L12 3z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-200" fill="none">
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

/* ===== Iconos para el HERO (estilo “banner”) ===== */
function HeroIcon({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-[1.6rem] border border-amber-300/15 bg-black/35 p-5 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-amber-300/20 bg-black/40">
          {children}
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-amber-100">{title}</div>
          <div className="mt-1 text-xs text-amber-100/60">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

function IconShieldBig() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-amber-200" fill="none">
      <path
        d="M12 3l7 4v6c0 5-3 8-7 9-4-1-7-4-7-9V7l7-4z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9 12l2 2 4-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSparkBig() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-amber-200" fill="none">
      <path
        d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconStarBig() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-amber-200" fill="none">
      <path
        d="M12 3l2.7 5.6 6.1.9-4.4 4.2 1 6.1L12 17.8 6.6 19.8l1-6.1-4.4-4.2 6.1-.9L12 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconClockBig() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-amber-200" fill="none">
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const whatsappGeneral = waLink(
    `Hola! Estoy interesado/a en ${SITE.brand}. ¿Me puedes dar información y disponibilidad?`
  );

  const whatsappServicios = waLink(
    "Hola! Quiero información sobre tratamientos (precios y disponibilidad)."
  );

  const whatsappCurso = waLink(
    "Hola! Quiero información del curso (precio, fechas, modalidad y cupos)."
  );

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background dorado (estilo luxury) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_15%_10%,rgba(255,215,128,0.18),transparent_60%),radial-gradient(900px_500px_at_85%_20%,rgba(255,215,128,0.12),transparent_55%),radial-gradient(900px_600px_at_50%_85%,rgba(255,215,128,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.92))]" />
      </div>

      {/* Header responsive (desktop referencia / mobile limpio) */}
      <header className="sticky top-0 z-30 bg-black/50 backdrop-blur">
        <div className="relative mx-auto h-20 max-w-6xl px-5">
          {/* Línea inferior */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/25 to-transparent" />

          {/* ========================= */}
          {/* DESKTOP (sm+): referencia */}
          {/* ========================= */}

          {/* Logo centrado flotante (solo desktop) */}
          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className="hidden sm:block absolute left-1/2 top-0 z-40 -translate-x-1/2 -translate-y-8"
            aria-label="Ir al inicio"
            title="Inicio"
          >
            {/* Máscara para que la línea no atraviese el logo */}
            <span className="pointer-events-none absolute left-1/2 top-[52px] h-10 w-44 -translate-x-1/2 rounded-full bg-black/70 blur-[0.3px]" />
            <img
              src={SITE.logoSrc}
              alt="Alex Estética"
              className="h-24 w-24 sm:h-50 sm:w-50 object-contain drop-shadow-[0_0_35px_rgba(255,215,128,0.35)]"
            />
          </a>

          {/* Contenido desktop */}
          <div className="hidden sm:flex h-full items-center justify-between">
            {(() => {
              const Sep = () => <span className="select-none text-amber-100/35">|</span>;
              return (
                <>
                  {/* Izquierda */}
                  <nav className="flex items-center gap-4">
                    <NavLink href="/#sobre">Sobre Nosotros</NavLink>
                    <Sep />
                    <NavLink href="/#contacto">Contacto</NavLink>
                  </nav>

                  {/* Reserva centro */}
                  <div className="w-[180px]" />

                  {/* Derecha */}
                  <div className="flex items-center gap-2">
                    <nav className="flex items-center gap-4">
                      <NavLink href="/servicios">Tratamientos</NavLink>
                      <Sep />
                      <NavLink href="/curso">Curso</NavLink>
                    </nav>

                    <a
                      href={whatsappGeneral}
                      className="ml-2 rounded-full border border-amber-300/25 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 px-5 py-2 text-sm font-semibold text-black hover:brightness-110"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Agende una consulta
                    </a>
                  </div>
                </>
              );
            })()}
          </div>

          {/* ==================== */}
          {/* MOBILE (<sm): limpio */}
          {/* ==================== */}
          <div className="flex sm:hidden h-full items-center justify-between">
            {/* Left: logo pequeño + marca */}
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

            {/* Right: CTA + menú */}
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

        {/* Mobile dropdown (solo móvil) */}
        {menuOpen ? (
          <div className="border-t border-white/10 bg-black/60 backdrop-blur sm:hidden">
            <div className="mx-auto max-w-6xl px-5 py-3">
              <div className="flex flex-col gap-1">
                <a
                  href="/"
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-amber-100/90 hover:bg-white/5"
                  onClick={() => setMenuOpen(false)}
                >
                  Inicio
                </a>

                <a
                  href="/#sobre"
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-amber-100/90 hover:bg-white/5"
                  onClick={() => setMenuOpen(false)}
                >
                  Sobre Nosotros
                </a>

                <a
                  href="/servicios"
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-amber-100/90 hover:bg-white/5"
                  onClick={() => setMenuOpen(false)}
                >
                  Tratamientos
                </a>

                <a
                  href="/curso"
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-amber-100/90 hover:bg-white/5"
                  onClick={() => setMenuOpen(false)}
                >
                  Curso
                </a>

                <a
                  href="/#contacto"
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-amber-100/90 hover:bg-white/5"
                  onClick={() => setMenuOpen(false)}
                >
                  Contacto
                </a>

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

      {/* ✅ NUEVO HERO TIPO BANNER (como curso/tratamientos) */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        {/* Imagen fondo */}
        <div className="absolute inset-0 -z-20 bg-black">
          <img
            src={SITE.hero}
            alt={`${SITE.brand} - ${SITE.city}`}
            className="h-full w-full object-cover opacity-90"
            loading="eager"
          />
          {/* Overlay elegante (para legibilidad sin matar el fondo) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.30),rgba(0,0,0,0.86))]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_20%,rgba(255,215,128,0.10),transparent_60%)]" />
        </div>

        {/* Contenido */}
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <div className="max-w-3xl">
            <Pill>Clínica estética · {SITE.city}</Pill>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-amber-100 sm:text-6xl">
              Realza tu belleza
              <span className="block text-amber-200/90">con resultados reales</span>
            </h1>

            <p className="mt-5 max-w-2xl text-amber-100/70 sm:text-lg">
              En <strong className="text-amber-100">{SITE.brand}</strong> trabajamos con protocolos
              seguros, atención personalizada y un enfoque premium para que te sientas acompañada en
              cada paso.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappGeneral} variant="gold">
                Agendar cita por WhatsApp
              </Button>

              <Button href={whatsappServicios} variant="outline">
                Consultar tratamientos
              </Button>
            </div>
          </div>

          {/* Tiles iconos (como el banner de curso) */}
          <div className="mt-12 grid gap-4 sm:grid-cols-4">
            <HeroIcon title="Seguridad" subtitle="Protocolos y evaluación">
              <IconShieldBig />
            </HeroIcon>

            <HeroIcon title="Calidad" subtitle="Técnica + productos">
              <IconSparkBig />
            </HeroIcon>

            <HeroIcon title="Resultados" subtitle="Naturales y elegantes">
              <IconStarBig />
            </HeroIcon>

            <HeroIcon title="Horario" subtitle={SITE.hours}>
              <IconClockBig />
            </HeroIcon>
          </div>

          {/* Banda de datos (igual estilo) */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.6rem] border border-white/10 bg-black/35 p-5 backdrop-blur">
              <div className="text-xs text-amber-100/60">Ubicación</div>
              <div className="mt-2 text-sm font-semibold text-amber-100">{SITE.addressLine}</div>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-black/35 p-5 backdrop-blur">
              <div className="text-xs text-amber-100/60">Tratamientos</div>
              <div className="mt-2 text-sm font-semibold text-amber-100">
                Láser · Faciales · Asesoría
              </div>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-black/35 p-5 backdrop-blur">
              <div className="text-xs text-amber-100/60">Formación</div>
              <div className="mt-2 text-sm font-semibold text-amber-100">
                Curso profesional disponible
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <SectionTitle
          title="Por qué elegirnos"
          desc="Una experiencia premium: seguridad, técnica y acompañamiento."
        />
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { icon: "shield" as const, t: "Seguridad", d: "Protocolos y evaluación" },
            { icon: "spark" as const, t: "Calidad", d: "Productos y técnica" },
            { icon: "star" as const, t: "Resultados", d: "Naturales y elegantes" },
            { icon: "clock" as const, t: "Atención", d: "Puntual y personalizada" },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-2">
                <Icon name={x.icon} />
                <div className="text-sm font-semibold text-amber-100">{x.t}</div>
              </div>
              <div className="mt-2 text-sm text-amber-100/70">{x.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Resultados / Galería */}
      <section id="resultados" className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <SectionTitle
          title="Resultados"
          desc="Imágenes de ejemplo. Si quieres, conectamos esta sección con tu Instagram."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
            >
              <div className="grid h-full place-items-center">
                <div className="text-sm text-amber-100/60">Foto {i} (placeholder)</div>
              </div>
            </div>
          ))}
        </div>

        {SITE.instagramUrl ? (
          <div className="mt-6">
            <Button href={SITE.instagramUrl} variant="outline">
              Ver más resultados en Instagram
            </Button>
          </div>
        ) : null}
      </section>

      {/* Testimonios */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <SectionTitle
          title="Testimonios"
          desc="Prueba social = confianza. Luego metemos los reales."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { n: "María G.", t: "“Trato excelente y resultados increíbles.”" },
            { n: "Laura P.", t: "“Muy profesional, me sentí segura en todo momento.”" },
            { n: "Ana S.", t: "“Recomendadísimo. Atención premium.”" },
          ].map((x) => (
            <div
              key={x.n}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur"
            >
              <div className="flex items-center gap-1 text-amber-200">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <div className="mt-3 text-sm font-semibold text-amber-100">{x.t}</div>
              <div className="mt-3 text-xs text-amber-100/60">— {x.n}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Curso (preview) */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <div className="rounded-[2rem] border border-amber-300/15 bg-white/5 p-7 backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-2xl font-semibold text-amber-100">Curso profesional</div>
              <p className="mt-2 max-w-2xl text-amber-100/70">
                Formación enfocada en técnica, seguridad y atención al cliente.
              </p>
            </div>
            <a href="/curso" className="text-sm font-semibold text-amber-200 hover:text-amber-100">
              Ver curso →
            </a>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {[
              "Protocolos paso a paso",
              "Higiene y seguridad",
              "Atención al cliente y fidelización",
            ].map((x) => (
              <div key={x} className="rounded-3xl border border-white/10 bg-black/30 p-5">
                <div className="text-sm font-semibold text-amber-100">{x}</div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappCurso} variant="gold">
              Pedir info del curso (WhatsApp)
            </Button>
            <Button href="/curso" variant="outline">
              Ver temario y detalles
            </Button>
          </div>
        </div>
      </section>

      {/* Ubicación / Mapa */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <SectionTitle title="Ubicación" desc="Ven a visitarnos. (Luego ponemos el mapa exacto.)" />
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
            <div className="text-sm font-semibold text-amber-100">Dirección</div>
            <div className="mt-2 text-amber-100/70">{SITE.addressLine}</div>

            <div className="mt-6 grid gap-3">
              <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                <div className="text-xs text-amber-100/60">Horario</div>
                <div className="mt-1 text-sm font-semibold text-amber-100">{SITE.hours}</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                <div className="text-xs text-amber-100/60">Atención</div>
                <div className="mt-1 text-sm font-semibold text-amber-100">
                  Solo con cita previa (recomendado)
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <iframe
              title="Mapa"
              src={SITE.mapsEmbedSrc}
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
          <div className="text-2xl font-semibold text-amber-100">Contacto</div>
          <p className="mt-2 text-amber-100/70">
            Te respondemos por WhatsApp con precios, promociones y disponibilidad.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappGeneral} variant="gold">
              Abrir WhatsApp
            </Button>

            {SITE.instagramUrl ? (
              <Button href={SITE.instagramUrl} variant="outline">
                Ver Instagram
              </Button>
            ) : null}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
              <div className="text-xs text-amber-100/60">Horario</div>
              <div className="mt-1 text-sm font-semibold text-amber-100">{SITE.hours}</div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
              <div className="text-xs text-amber-100/60">Dirección</div>
              <div className="mt-1 text-sm font-semibold text-amber-100">{SITE.addressLine}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer completo */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-amber-100">{SITE.brand}</div>
              <div className="mt-2 text-sm text-amber-100/60">{SITE.city}</div>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={whatsappGeneral}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-amber-100 hover:bg-white/10"
                >
                  WhatsApp
                </a>
                {SITE.instagramUrl ? (
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
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

            <div>
              <div className="text-sm font-semibold text-amber-100">Información</div>
              <div className="mt-3 flex flex-col gap-2 text-sm text-amber-100/70">
                <a className="hover:text-amber-100" href="/servicios">
                  Tratamientos
                </a>
                <a className="hover:text-amber-100" href="#resultados">
                  Resultados
                </a>
                <a className="hover:text-amber-100" href="/curso">
                  Curso
                </a>
                <a className="hover:text-amber-100" href="#contacto">
                  Contacto
                </a>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-amber-100">Legal</div>
              <div className="mt-3 flex flex-col gap-2 text-sm text-amber-100/70">
                <a className="hover:text-amber-100" href="/aviso-legal">
                  Aviso legal
                </a>
                <a className="hover:text-amber-100" href="/privacidad">
                  Política de privacidad
                </a>
                <a className="hover:text-amber-100" href="/cookies">
                  Política de cookies
                </a>
              </div>
              <div className="mt-4 text-xs text-amber-100/50">
                *Links legales como placeholder. Los creamos cuando quieras.
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-amber-100/60">
              © {new Date().getFullYear()} {SITE.brand} · {SITE.city}
            </div>
            <div className="text-sm text-amber-100/40">Next.js + Vercel</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
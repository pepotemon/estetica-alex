"use client";

import React from "react";

const SITE = {
  brand: "Alex Estética",
  city: "Gran Canaria",

  // ✅ wa.me usa solo números (sin +, sin espacios)
  phone: "34661026192",

  instagramUrl:
    "https://www.instagram.com/alex_postquirurgicoscanarias?igsh=MTg3Y2NibWMwYTl5ZQ==",

  addressLine: "Av. Canarias 450, Bloque B, Local 3 · Vecindario",
  hours: "Lun–Sáb · 10:00–20:00",
  logoSrc: "/alex-logo.png",

  // ✅ HERO (pon la imagen en /public/hero.jpg)
  hero: "/hero.jpg",

  // ✅ Mapa por dirección real (sin relleno)
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Av.%20Canarias%20450,%20Bloque%20B,%20Local%203,%20Vecindario&output=embed",
};

const COURSE = {
  name: "DOMINA EL POST-QUIRÚRGICO DE PRINCIPIO A FIN",
  modality: "Presencial",
  hours: "40 horas",
  breakdown: "20h teoría · 20h práctica",
  city: SITE.city,
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
    `Hola Alex! Quiero agendar una cita en ${SITE.brand}. ¿Me puedes dar disponibilidad?`
  );

  const whatsappServicios = waLink(
    "Hola Alex! Quiero información sobre tratamientos (precios y disponibilidad)."
  );

  const whatsappCurso = waLink(
    `Hola Alex! Quiero info del curso "${COURSE.name}" (${COURSE.modality}, ${COURSE.hours}, ${COURSE.breakdown}) en ${COURSE.city}: precio, próximas fechas y cupos.`
  );

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background dorado (estilo luxury) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_15%_10%,rgba(255,215,128,0.18),transparent_60%),radial-gradient(900px_500px_at_85%_20%,rgba(255,215,128,0.12),transparent_55%),radial-gradient(900px_600px_at_50%_85%,rgba(255,215,128,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.92))]" />
      </div>

      {/* Header (tu layout) */}
      <header className="sticky top-0 z-30 bg-black/50 backdrop-blur">
        <div className="relative mx-auto h-20 max-w-6xl px-5">
          {/* Línea inferior */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/25 to-transparent" />

          {/* Logo centrado flotante (solo desktop) */}
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

                    {SITE.instagramUrl ? (
                      <a
                        href={SITE.instagramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hidden h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 sm:inline-flex"
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
                </>
              );
            })()}
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

        {/* Dropdown móvil */}
        {menuOpen ? (
          <div className="border-t border-white/10 bg-black/60 backdrop-blur sm:hidden">
            <div className="mx-auto max-w-6xl px-5 py-3">
              <div className="flex flex-col gap-1">
                {[
                  { href: "/", label: "Inicio" },
                  { href: "/servicios", label: "Tratamientos" },
                  { href: "/curso", label: "Curso" },
                  { href: "/#sobre", label: "Sobre Nosotros" },
                  { href: "/#contacto", label: "Contacto" },
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

      {/* HERO tipo banner */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-20 bg-black">
          <img
            src={SITE.hero}
            alt={`${SITE.brand} - ${SITE.city}`}
            className="h-full w-full object-cover opacity-90"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.30),rgba(0,0,0,0.86))]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_20%,rgba(255,215,128,0.10),transparent_60%)]" />
        </div>

        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <div className="max-w-3xl">
            <Pill>{SITE.city} · Atención con cita previa</Pill>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-amber-100 sm:text-6xl">
              Estética avanzada
              <span className="block text-amber-200/90">con enfoque premium</span>
            </h1>

            <p className="mt-5 max-w-2xl text-amber-100/70 sm:text-lg">
              Tratamientos faciales, corporales y depilación láser con protocolos seguros.
              Además, formación profesional en post-quirúrgico.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappGeneral} variant="gold">
                Agendar por WhatsApp
              </Button>
              <Button href={whatsappServicios} variant="outline">
                Consultar tratamientos
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-4">
            <HeroIcon title="Horario" subtitle={SITE.hours}>
              <IconClockBig />
            </HeroIcon>
            <HeroIcon title="Ubicación" subtitle="Vecindario">
              <IconStarBig />
            </HeroIcon>
            <HeroIcon title="Protocolos" subtitle="Seguros y personalizados">
              <IconShieldBig />
            </HeroIcon>
            <HeroIcon title="Contacto" subtitle="WhatsApp directo">
              <IconSparkBig />
            </HeroIcon>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.6rem] border border-white/10 bg-black/35 p-5 backdrop-blur">
              <div className="text-xs text-amber-100/60">Dirección</div>
              <div className="mt-2 text-sm font-semibold text-amber-100">{SITE.addressLine}</div>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-black/35 p-5 backdrop-blur">
              <div className="text-xs text-amber-100/60">Servicios</div>
              <div className="mt-2 text-sm font-semibold text-amber-100">
                Láser · Faciales · Corporales · Asesorías
              </div>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-black/35 p-5 backdrop-blur">
              <div className="text-xs text-amber-100/60">Curso</div>
              <div className="mt-2 text-sm font-semibold text-amber-100">
                Presencial · {COURSE.hours} · {COURSE.breakdown}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <SectionTitle
          title="Por qué elegirnos"
          desc="Seguridad, técnica y acompañamiento con atención premium."
        />
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { icon: "shield" as const, t: "Seguridad", d: "Protocolos claros y responsables" },
            { icon: "spark" as const, t: "Calidad", d: "Técnica y cuidado en cada sesión" },
            { icon: "star" as const, t: "Resultados", d: "Enfoque realista y progresivo" },
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
          desc="Podemos mostrar aquí tus publicaciones reales de Instagram (te explico abajo cómo conectarlo)."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
            >
              <div className="grid h-full place-items-center">
                <div className="text-sm text-amber-100/60">Foto {i}</div>
              </div>
            </div>
          ))}
        </div>

        {SITE.instagramUrl ? (
          <div className="mt-6">
            <Button href={SITE.instagramUrl} variant="outline">
              Ver Instagram @alex_postquirurgicoscanarias
            </Button>
          </div>
        ) : null}
      </section>

      {/* Curso (preview) */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <div className="rounded-[2rem] border border-amber-300/15 bg-white/5 p-7 backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-2xl font-semibold text-amber-100">{COURSE.name}</div>
              <p className="mt-2 max-w-2xl text-amber-100/70">
                Curso {COURSE.modality} en {COURSE.city} · {COURSE.hours} ({COURSE.breakdown})
              </p>
            </div>
            <a href="/curso" className="text-sm font-semibold text-amber-200 hover:text-amber-100">
              Ver curso →
            </a>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {[
              "Post-quirúrgico por fases (criterio profesional)",
              "Drenaje linfático manual + compresión",
              "Seguridad, higiene y comunicación con el cliente",
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
              Ver detalles del curso
            </Button>
          </div>
        </div>
      </section>
      {/* Ubicación + Contacto (Fusionado) */}
      <section id="contacto" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionTitle
          title="Ubicación & Contacto"
          desc="Estamos en Vecindario. Escríbenos directamente por WhatsApp o visítanos en nuestro centro."
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {/* Columna izquierda – Información */}
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">

            {/* Dirección */}
            <div className="mb-6">
              <div className="text-xs text-amber-100/60">Dirección</div>
              <div className="mt-1 text-sm font-semibold text-amber-100">
                {SITE.addressLine}
              </div>
              <div className="mt-1 text-xs text-amber-100/60">
                {SITE.city}
              </div>
            </div>

            {/* Horario */}
            <div className="mb-6">
              <div className="text-xs text-amber-100/60">Horario</div>
              <div className="mt-1 text-sm font-semibold text-amber-100">
                {SITE.hours}
              </div>
            </div>

            {/* Botones */}
            <div className="mt-6 flex flex-col gap-3">
              <Button href={whatsappGeneral} variant="gold">
                Escribir por WhatsApp
              </Button>

              {SITE.instagramUrl ? (
                <Button href={SITE.instagramUrl} variant="outline">
                  Ver Instagram
                </Button>
              ) : null}
            </div>

            {/* Nota profesional */}
            <div className="mt-8 text-xs text-amber-100/50">
              Atención con cita previa recomendada.
            </div>
          </div>

          {/* Columna derecha – Mapa */}
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <iframe
              title="Mapa"
              src={SITE.mapsEmbedSrc}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>


      {/* Footer */}
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
                *Los textos legales se preparan con tu asesoría/gestoría para dejarlos perfectos.
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
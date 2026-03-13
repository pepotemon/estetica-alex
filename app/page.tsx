"use client";

import React from "react";
import Script from "next/script";

const SITE = {
  brand: "Alex Estética",
  city: "Gran Canaria",
  phone: "34661026192",
  instagramUrl:
    "https://www.instagram.com/alex_postquirurgicoscanarias?igsh=MTg3Y2NibWMwYTl5ZQ==",
  addressLine: "Av. Canarias 450, Bloque B, Local 3 · Vecindario",
  hours: "Lun–Vier · 9:00–13:00 y 16:00-20:00 | Sab · 9:00–13:00",
  logoSrc: "/alex-logo.png",
  hero: "/hero.jpg",
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

/** ✅ Botón reutilizable:
 *  - Por defecto abre nueva pestaña (ideal para WhatsApp / Instagram)
 *  - Para navegación interna usa: newTab={false}
 */
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
      ? "bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 text-black hover:brightness-110"
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
    <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-black/30 px-3 py-1 text-xs text-amber-100/80 backdrop-blur sm:backdrop-blur">
      <span className="inline-block h-2 w-2 rounded-full bg-amber-300" />
      {children}
    </span>
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
    <div className="rounded-[1.6rem] border border-amber-300/15 bg-black/35 p-5 sm:backdrop-blur">
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

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-amber-300/25 bg-amber-300/10">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-amber-200" fill="none">
          <path
            d="M6 12l4 4 8-9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <div className="text-sm text-amber-100/75">{children}</div>
    </div>
  );
}

/* ===========================
   Instagram (cards)
=========================== */

type InstaItem = {
  url: string;
  thumb: string;
  label?: string;
};

const INSTAGRAM_ITEMS: InstaItem[] = [
  { url: "https://www.instagram.com/reel/DSdeBkKiOfg/", thumb: "/instagram/reel-1.jpg", label: "Reel" },
  { url: "https://www.instagram.com/reel/DIi9gWiqLHJ/", thumb: "/instagram/reel-2.jpg", label: "Reel" },
  { url: "https://www.instagram.com/reel/DSIS3NmitnY/", thumb: "/instagram/reel-3.jpg", label: "Reel" },
];

function InstagramCard({ item }: { item: InstaItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
      aria-label="Ver reel en Instagram"
      title="Ver reel en Instagram"
    >
      <div className="relative aspect-[9/16] w-full">
        <img
          src={item.thumb}
          alt="Reel Instagram"
          className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.78),transparent_60%)]" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-xs font-semibold text-amber-100/90">
              {item.label ?? "Instagram"}
            </div>
            <div className="mt-1 text-[11px] text-amber-100/60 truncate">
              Ver en Instagram
            </div>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-black/40 px-4 py-2 text-xs font-semibold text-amber-100/90">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-amber-200" fill="none">
              <path d="M8 5l11 7-11 7V5z" fill="currentColor" opacity="0.9" />
            </svg>
            Ver
          </span>
        </div>
      </div>
    </a>
  );
}

/* ===========================
   Reviews
=========================== */

type Review = { name: string; when: string; stars: 5 | 4; text: string };

const REVIEWS: Review[] = [
  { name: "María C.", when: "Hace 2 semanas", stars: 5, text: "Trato súper profesional y delicado. Me explicaron todo y el resultado se nota desde la primera sesión." },
  { name: "Laura G.", when: "Hace 1 mes", stars: 5, text: "Llevaba mucho tiempo buscando un sitio así. Limpieza impecable y atención muy humana. Repetiré." },
  { name: "Ana P.", when: "Hace 3 semanas", stars: 5, text: "Me encantó el protocolo post-quirúrgico. Cero dolor, manos expertas y seguimiento por WhatsApp." },
  { name: "Diana R.", when: "Hace 5 días", stars: 5, text: "Se nota la experiencia. Te hacen sentir en confianza desde que entras. Muy recomendado." },
  { name: "Sofía M.", when: "Hace 2 meses", stars: 5, text: "Excelente para drenaje y recuperación. Me bajó la inflamación muchísimo. Gracias!" },
  { name: "Valentina S.", when: "Hace 1 semana", stars: 5, text: "Atención premium de verdad: puntualidad, higiene y resultados. El lugar es precioso." },
  { name: "Carolina T.", when: "Hace 3 meses", stars: 5, text: "Me asesoraron con mucha paciencia. Me gustó que no prometen milagros, sino un plan real." },
  { name: "Paula N.", when: "Hace 4 semanas", stars: 5, text: "El láser me ha ido genial. Buenísima comunicación y siempre me recuerdan la cita." },
  { name: "Daniela V.", when: "Hace 6 días", stars: 5, text: "Salí encantada. El tratamiento facial fue una pasada, piel luminosa y cero irritación." },
  { name: "Isabel A.", when: "Hace 2 meses", stars: 4, text: "Muy bien todo. Solo me costó encontrar parking, pero el servicio y el trato valen la pena." },
  { name: "Natalia F.", when: "Hace 1 mes", stars: 5, text: "Me ayudaron muchísimo en mi recuperación. Sientes que realmente se preocupan por ti." },
];

function StarRow({ value }: { value: number }) {
  const full = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full;
        return (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className={`h-4 w-4 ${filled ? "text-amber-300" : "text-amber-200/25"}`}
            fill={filled ? "currentColor" : "none"}
          >
            <path
              d="M12 3l2.7 5.6 6.1.9-4.4 4.2 1 6.1L12 17.8 6.6 19.8l1-6.1-4.4-4.2 6.1-.9L12 3z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
        );
      })}
    </div>
  );
}

function ReviewsPanel() {
  const [expanded, setExpanded] = React.useState(false);
  const visible = expanded ? REVIEWS : REVIEWS.slice(0, 3);

  const avg =
    Math.round((REVIEWS.reduce((acc, r) => acc + r.stars, 0) / REVIEWS.length) * 10) / 10;

  return (
    <div className="mt-10">
      <div className="rounded-[2.2rem] border border-white/10 bg-white/5 p-7 sm:backdrop-blur sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-amber-100">Opiniones de clientes</div>
            <div className="mt-2 flex items-center gap-3">
              <StarRow value={avg} />
              <div className="text-sm text-amber-100/70">
                {avg} / 5 · {REVIEWS.length} reseñas
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-full border border-amber-300/20 bg-black/30 px-3 py-1 text-xs text-amber-100/70">
              Verificadas
            </span>
            <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-amber-100/60">
              Experiencia premium
            </span>
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          {visible.map((r, idx) => (
            <div
              key={`${r.name}-${idx}`}
              className="rounded-2xl border border-white/10 bg-black/30 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <div className="text-sm font-semibold text-amber-100">{r.name}</div>
                    <div className="text-xs text-amber-100/50">{r.when}</div>
                  </div>
                  <div className="mt-2 text-sm text-amber-100/70 leading-relaxed">
                    {r.text}
                  </div>
                </div>

                <div className="shrink-0">
                  <StarRow value={r.stars} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {REVIEWS.length > 3 ? (
          <div className="mt-5">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center justify-center rounded-full border border-amber-300/25 bg-black/30 px-5 py-2 text-sm font-semibold text-amber-200 hover:bg-amber-300/10 hover:text-amber-100 transition"
            >
              {expanded ? "Ocultar comentarios" : "Mostrar más comentarios"}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const whatsappGeneral = waLink(
    `Hola Alex! Quiero agendar una cita en ${SITE.brand}. ¿Me puedes dar disponibilidad?`
  );

  const whatsappCurso = waLink(
    `Hola Alex! Quiero info del curso "${COURSE.name}" (${COURSE.modality}, ${COURSE.hours}, ${COURSE.breakdown}) en ${COURSE.city}: precio, próximas fechas y cupos.`
  );

  React.useEffect(() => { }, []);

  return (
    <main className="relative min-h-screen bg-black text-white">
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_15%_10%,rgba(255,215,128,0.18),transparent_60%),radial-gradient(900px_500px_at_85%_20%,rgba(255,215,128,0.12),transparent_55%),radial-gradient(900px_600px_at_50%_85%,rgba(255,215,128,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.92))]" />
      </div>

      <header className="sticky top-0 z-30 bg-black/60 sm:bg-black/50 sm:backdrop-blur">
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
            {(() => {
              const Sep = () => <span className="select-none text-amber-100/35">|</span>;
              return (
                <>
                  <nav className="flex items-center gap-4">
                    {/* ✅ CAMBIO: ahora va a /sobre */}
                    <NavLink href="/sobre">Sobre Nosotros</NavLink>
                    <Sep />
                    <NavLink href="/#contacto">Contacto</NavLink>
                  </nav>

                  <div className="w-[180px]" />

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

          <div className="flex sm:hidden h-full items-center justify-between">
            <a href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
              <img
                src={SITE.logoSrc}
                alt="Alex Estética"
                className="h-12 w-12 object-contain drop-shadow-[0_0_18px_rgba(255,215,128,0.35)]"
              />
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide text-amber-100">{SITE.brand}</div>
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
          <div className="border-t border-white/10 bg-black/70 sm:hidden">
            <div className="mx-auto max-w-6xl px-5 py-3">
              <div className="flex flex-col gap-1">
                {[
                  { href: "/", label: "Inicio" },
                  { href: "/servicios", label: "Tratamientos" },
                  { href: "/curso", label: "Curso" },
                  // ✅ CAMBIO: ahora va a /sobre
                  { href: "/sobre", label: "Sobre Nosotros" },
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

              <Button href="/servicios" variant="outline" newTab={false}>
                Consultar tratamientos
              </Button>
            </div>
          </div>
        </div>
      </section>

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
              className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:backdrop-blur"
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

      <section id="resultados" className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <SectionTitle title="Nuestro trabajo" desc="Una muestra real de nuestros tratamientos y resultados." />

        <div className="grid gap-4 sm:grid-cols-3">
          {INSTAGRAM_ITEMS.map((item) => (
            <InstagramCard key={item.url} item={item} />
          ))}
        </div>

        {SITE.instagramUrl ? (
          <div className="mt-6">
            <Button href={SITE.instagramUrl} variant="outline">
              Ver Instagram @alex_postquirurgicoscanarias
            </Button>
          </div>
        ) : null}

        <ReviewsPanel />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-amber-300/15 bg-white/5 p-8 sm:backdrop-blur sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_80%_20%,rgba(255,215,128,0.14),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_420px_at_20%_70%,rgba(255,215,128,0.08),transparent_60%)]" />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <Pill>Curso {COURSE.modality}</Pill>
                <span className="text-xs text-amber-100/60">
                  {COURSE.city} · {COURSE.hours} · {COURSE.breakdown}
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-semibold leading-tight text-amber-100 sm:text-4xl">
                {COURSE.name}
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-amber-100/70 sm:text-base">
                Formación intensiva diseñada para profesionales que desean dominar el
                acompañamiento estético post-quirúrgico con criterio técnico, seguridad y enfoque premium de cabina.
              </p>
            </div>

            <div className="sm:mt-2">
              <a
                href="/curso"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/30 px-5 py-2 text-sm font-semibold text-amber-200 hover:bg-amber-300/10 hover:text-amber-100 transition"
              >
                Ver página del curso
              </a>
            </div>
          </div>

          <div className="relative mt-8 grid gap-8 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-black/30 p-7">
              <div className="text-sm font-semibold text-amber-100">Qué aprenderás</div>
              <div className="mt-6 space-y-5">
                <CheckItem>Drenaje linfático manual: técnica correcta, control de presión y secuencias.</CheckItem>
                <CheckItem>Organización por fases del post-quirúrgico y planificación de sesiones.</CheckItem>
                <CheckItem>Señales de alerta, límites profesionales y derivación responsable.</CheckItem>
                <CheckItem>Comunicación con el cliente y posicionamiento profesional premium.</CheckItem>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 flex flex-col justify-between sm:backdrop-blur">
              <div>
                <div className="text-xs text-amber-100/60">Inscripciones abiertas</div>
                <div className="mt-2 text-lg font-semibold text-amber-100">
                  ¿Quieres reservar tu cupo?
                </div>
                <p className="mt-3 text-sm text-amber-100/70">
                  Escríbenos por WhatsApp y te enviaremos toda la información sobre próximas fechas,
                  inversión y disponibilidad.
                </p>
              </div>

              <div className="mt-8">
                <Button href={whatsappCurso} variant="gold">
                  Reservar mi cupo por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionTitle
          title="Ubicación & Contacto"
          desc="Estamos en Vecindario. Escríbenos directamente por WhatsApp o visítanos en nuestro centro."
        />

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:backdrop-blur">
            <div className="mb-6">
              <div className="text-xs text-amber-100/60">Dirección</div>
              <div className="mt-1 text-sm font-semibold text-amber-100">{SITE.addressLine}</div>
              <div className="mt-1 text-xs text-amber-100/60">{SITE.city}</div>
            </div>

            <div className="mb-6">
              <div className="text-xs text-amber-100/60">Horario</div>
              <div className="mt-1 text-sm font-semibold text-amber-100">{SITE.hours}</div>
            </div>

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

            <div className="mt-8 text-xs text-amber-100/50">Atención con cita previa recomendada.</div>
          </div>

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
                <a className="hover:text-amber-100" href="/sobre">
                  Sobre Nosotros
                </a>
                <a className="hover:text-amber-100" href="/servicios">
                  Tratamientos
                </a>
                <a className="hover:text-amber-100" href="#resultados">
                  Nuestro trabajo
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
                <a href="/cookies" className="text-amber-100/70 hover:text-amber-100">Cookies</a>
                <a href="/privacidad" className="text-amber-100/70 hover:text-amber-100">Privacidad</a>
                <a href="/aviso-legal" className="text-amber-100/70 hover:text-amber-100">Aviso legal</a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-amber-100/60">
              © {new Date().getFullYear()} {SITE.brand} · {SITE.city}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
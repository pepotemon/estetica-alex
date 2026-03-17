"use client";

import React from "react";
import Script from "next/script";

const SITE = {
  brand: "Alex Estética",
  city: "Gran Canaria",
  phone: "34661026192",
  phoneDisplay: "661 026 192",
  instagramUrl:
    "https://www.instagram.com/alex_postquirurgicoscanarias?igsh=MTg3Y2NibWMwYTl5ZQ==",
  addressLine: "Av. Canarias 450, Bloque B, Local 3 · Vecindario",
  hours: "Lun–Vier · 9:00–13:00 y 16:00–20:00 | Sab · 9:00–13:00",
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

  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
      className={`${base} ${styles} ${className}`}
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
      className="text-[13px] font-medium tracking-[0.06em] text-[#d7c6a7]/72 transition hover:text-[#fff4df]"
    >
      {children}
    </a>
  );
}

function Sep() {
  return <span className="select-none text-[#d7c6a7]/28">|</span>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 border border-[rgba(201,168,76,0.20)] bg-[rgba(18,14,10,0.45)] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-amber-100/82 backdrop-blur-[6px]">
      <span className="inline-block h-2 w-2 rounded-full bg-amber-300" />
      {children}
    </span>
  );
}

function SectionTitle({
  title,
  desc,
  overline,
}: {
  title: string;
  desc?: string;
  overline?: string;
}) {
  return (
    <div className="mb-10 text-center sm:text-left">
      {overline ? (
        <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.34em] text-[#d9b861]/85">
          {overline}
        </div>
      ) : null}

      <h2 className="font-[family:var(--font-cormorant)] text-[34px] sm:text-[48px] font-light leading-[1.08] text-[#FAF8F3]">
        {title}
      </h2>

      {desc ? (
        <p className="mt-4 max-w-3xl text-[13.5px] leading-[1.7] text-[#b8a78b] sm:text-[14px]">
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

function ValueCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <GlassCard className="p-6 transition-colors hover:border-[rgba(201,168,76,0.28)]">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center bg-[rgba(201,168,76,0.08)] text-[#E2C47A]">
          {icon}
        </div>
        <h3 className="font-[family:var(--font-cormorant)] text-[24px] font-normal text-[#FAF8F3]">
          {title}
        </h3>
      </div>
      <p className="text-[13.5px] leading-[1.7] text-[#b8a78b]">{desc}</p>
    </GlassCard>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.10)]">
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
      <div className="text-sm leading-relaxed text-[#b8a78b]">{children}</div>
    </div>
  );
}

function Icon({ name }: { name: "shield" | "spark" | "star" | "clock" }) {
  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
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
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
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
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
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
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
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

type InstaItem = {
  url: string;
  thumb: string;
  label?: string;
};

const INSTAGRAM_ITEMS: InstaItem[] = [
  {
    url: "https://www.instagram.com/reel/DSdeBkKiOfg/",
    thumb: "/instagram/reel-1.jpg",
    label: "Reel",
  },
  {
    url: "https://www.instagram.com/reel/DIi9gWiqLHJ/",
    thumb: "/instagram/reel-2.jpg",
    label: "Reel",
  },
  {
    url: "https://www.instagram.com/reel/DSIS3NmitnY/",
    thumb: "/instagram/reel-3.jpg",
    label: "Reel",
  },
];

function InstagramCard({ item }: { item: InstaItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden border border-[rgba(201,168,76,0.14)] bg-[rgba(20,15,11,0.48)] shadow-[0_16px_44px_rgba(0,0,0,0.24)]"
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
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,6,5,0.82),transparent_60%)]" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-100/88">
              {item.label ?? "Instagram"}
            </div>
            <div className="mt-1 text-[11px] text-[#b8a78b] truncate">
              Ver en Instagram
            </div>
          </div>

          <span className="inline-flex items-center gap-2 border border-[rgba(201,168,76,0.22)] bg-[rgba(12,9,7,0.55)] px-4 py-2 text-xs font-semibold text-amber-100/90">
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

type Review = { name: string; when: string; stars: 5 | 4; text: string };

const REVIEWS: Review[] = [
  {
    name: "María C.",
    when: "Hace 2 semanas",
    stars: 5,
    text: "Trato súper profesional y delicado. Me explicaron todo y el resultado se nota desde la primera sesión.",
  },
  {
    name: "Laura G.",
    when: "Hace 1 mes",
    stars: 5,
    text: "Llevaba mucho tiempo buscando un sitio así. Limpieza impecable y atención muy humana. Repetiré.",
  },
  {
    name: "Ana P.",
    when: "Hace 3 semanas",
    stars: 5,
    text: "Me encantó el protocolo post-quirúrgico. Cero dolor, manos expertas y seguimiento por WhatsApp.",
  },
  {
    name: "Diana R.",
    when: "Hace 5 días",
    stars: 5,
    text: "Se nota la experiencia. Te hacen sentir en confianza desde que entras. Muy recomendado.",
  },
  {
    name: "Sofía M.",
    when: "Hace 2 meses",
    stars: 5,
    text: "Excelente para drenaje y recuperación. Me bajó la inflamación muchísimo. Gracias!",
  },
  {
    name: "Valentina S.",
    when: "Hace 1 semana",
    stars: 5,
    text: "Puntualidad, higiene y resultados. El lugar es precioso.",
  },
  {
    name: "Carolina T.",
    when: "Hace 3 meses",
    stars: 5,
    text: "Me asesoraron con mucha paciencia. Me gustó que no prometen milagros, sino un plan real.",
  },
  {
    name: "Paula N.",
    when: "Hace 4 semanas",
    stars: 5,
    text: "El láser me ha ido genial. Buenísima comunicación y siempre me recuerdan la cita.",
  },
  {
    name: "Daniela V.",
    when: "Hace 6 días",
    stars: 5,
    text: "Salí encantada. El tratamiento facial fue una pasada, piel luminosa y cero irritación.",
  },
  {
    name: "Isabel A.",
    when: "Hace 2 meses",
    stars: 4,
    text: "Muy bien todo. Solo me costó encontrar parking, pero el servicio y el trato valen la pena.",
  },
  {
    name: "Natalia F.",
    when: "Hace 1 mes",
    stars: 5,
    text: "Me ayudaron muchísimo en mi recuperación. Sientes que realmente se preocupan por ti.",
  },
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
      <GlassCard className="p-7 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-[#d9b861]/82">
              Opiniones
            </div>
            <div className="mt-3 font-[family:var(--font-cormorant)] text-3xl font-light text-[#fffaf2]">
              Lo que dicen nuestras clientas
            </div>
            <div className="mt-3 flex items-center gap-3">
              <StarRow value={avg} />
              <div className="text-sm text-[#b8a78b]">
                {avg} / 5 · {REVIEWS.length} reseñas
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="border border-[rgba(201,168,76,0.20)] bg-[rgba(12,9,7,0.38)] px-3 py-1 text-xs uppercase tracking-[0.12em] text-amber-100/70">
              Verificadas
            </span>
            <span className="border border-white/10 bg-[rgba(12,9,7,0.38)] px-3 py-1 text-xs uppercase tracking-[0.12em] text-[#b8a78b]">
              Atención cuidada
            </span>
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          {visible.map((r, idx) => (
            <div
              key={`${r.name}-${idx}`}
              className="border border-[rgba(201,168,76,0.12)] bg-[rgba(20,15,11,0.40)] p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <div className="font-[family:var(--font-cormorant)] text-[24px] leading-none font-light text-[#fffaf2]">
                      {r.name}
                    </div>
                    <div className="text-xs text-[#b8a78b]">{r.when}</div>
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-[#b8a78b]">
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
              className="inline-flex items-center justify-center border border-[rgba(201,168,76,0.24)] bg-[rgba(12,9,7,0.38)] px-5 py-2 text-sm font-semibold text-amber-200 transition hover:bg-amber-300/10 hover:text-amber-100"
            >
              {expanded ? "Ocultar comentarios" : "Mostrar más comentarios"}
            </button>
          </div>
        ) : null}
      </GlassCard>
    </div>
  );
}

function FloatingWhatsApp({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp"
      title="Escríbenos por WhatsApp"
      className={[
        "group fixed bottom-5 right-4 z-[70] sm:bottom-7 sm:right-7",
        "inline-flex items-center gap-3 rounded-full",
        "border border-[rgba(201,168,76,0.35)]",
        "bg-[linear-gradient(180deg,rgba(214,184,96,0.98)_0%,rgba(201,168,76,0.96)_100%)]",
        "px-3 py-3 sm:px-4",
        "text-black shadow-[0_18px_40px_rgba(0,0,0,0.35)]",
        "transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_22px_50px_rgba(0,0,0,0.42)]",
      ].join(" ")}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 ring-1 ring-black/10">
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.34c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.84 1.05-.16.18-.31.2-.58.07-.27-.14-1.12-.41-2.14-1.31-.79-.71-1.33-1.58-1.49-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.23 0 1.31.96 2.58 1.09 2.76.14.18 1.89 2.88 4.57 4.04.64.27 1.14.43 1.53.55.64.2 1.22.17 1.68.1.51-.08 1.58-.65 1.8-1.28.22-.63.22-1.17.15-1.28-.07-.11-.25-.18-.52-.31Z" />
          <path d="M16.02 3.2c-7.08 0-12.82 5.73-12.82 12.8 0 2.24.59 4.43 1.71 6.35L3.2 28.8l6.6-1.69a12.8 12.8 0 0 0 6.22 1.6h.01c7.07 0 12.8-5.74 12.8-12.81 0-3.42-1.33-6.63-3.75-9.05A12.73 12.73 0 0 0 16.02 3.2Zm0 23.35h-.01a10.5 10.5 0 0 1-5.35-1.47l-.38-.22-3.92 1 1.05-3.82-.25-.39a10.48 10.48 0 0 1-1.62-5.62c0-5.79 4.71-10.5 10.5-10.5 2.8 0 5.43 1.09 7.41 3.08a10.4 10.4 0 0 1 3.08 7.41c0 5.79-4.71 10.5-10.5 10.5Z" />
        </svg>
      </span>

      <span className="hidden sm:flex flex-col leading-none">
        <span className="text-[10px] uppercase tracking-[0.16em] text-black/60">
          Contacto directo
        </span>
        <span className="mt-1 text-[13px] font-semibold tracking-[0.02em]">
          WhatsApp
        </span>
      </span>
    </a>
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

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.06)_0%,transparent_34%),linear-gradient(180deg,#0b0806_0%,#120d09_42%,#0d0907_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/18 to-transparent" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(201,168,76,0.08)] bg-[rgba(10,8,6,0.60)] backdrop-blur-xl">
        <div className="relative mx-auto h-20 max-w-6xl px-5">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/18 to-transparent" />

          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className="hidden sm:block absolute left-1/2 top-0 z-40 -translate-x-1/2 -translate-y-8"
            aria-label="Ir al inicio"
            title="Inicio"
          >
            <span className="pointer-events-none absolute left-1/2 top-[52px] h-10 w-44 -translate-x-1/2 rounded-full bg-black/70 blur-[1px]" />
            <img
              src={SITE.logoSrc}
              alt="Alex Estética"
              className="h-24 w-24 sm:h-50 sm:w-50 object-contain drop-shadow-[0_0_35px_rgba(201,168,76,0.34)]"
            />
          </a>

          <div className="hidden sm:flex h-full items-center justify-between">
            <nav className="flex items-center gap-4">
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

              {SITE.instagramUrl ? (
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 hidden h-10 w-10 items-center justify-center rounded-2xl border border-[rgba(201,168,76,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] hover:bg-white/10 sm:inline-flex"
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
                className="h-12 w-12 object-contain drop-shadow-[0_0_18px_rgba(201,168,76,0.35)]"
              />
              <div className="leading-tight">
                <div className="font-[family:var(--font-cormorant)] text-lg font-medium tracking-[0.04em] text-[#fff4df]">
                  {SITE.brand}
                </div>
                <div className="text-[11px] uppercase tracking-[0.16em] text-[#d7c6a7]/54">
                  {SITE.city}
                </div>
              </div>
            </a>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[rgba(201,168,76,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] hover:bg-white/10"
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
          <div className="border-t border-[rgba(201,168,76,0.08)] bg-[rgba(10,8,6,0.76)] backdrop-blur-xl sm:hidden">
            <div className="mx-auto max-w-6xl px-5 py-3">
              <div className="flex flex-col gap-1">
                {[
                  { href: "/", label: "Inicio" },
                  { href: "/servicios", label: "Tratamientos" },
                  { href: "/curso", label: "Curso" },
                  { href: "/sobre", label: "Sobre Nosotros" },
                  { href: "/#contacto", label: "Contacto" },
                ].map((x) => (
                  <a
                    key={x.href}
                    href={x.href}
                    className="rounded-2xl px-3 py-2 text-sm font-semibold text-amber-100/90 hover:bg-white/5"
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
                    className="rounded-2xl px-3 py-2 text-sm font-semibold text-amber-100/90 hover:bg-white/5"
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

      <div className="pt-20">
        <section className="relative isolate overflow-hidden border-b border-[rgba(201,168,76,0.10)]">
          <div className="absolute inset-0 -z-20">
            <img
              src={SITE.hero}
              alt={`${SITE.brand} - ${SITE.city}`}
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,6,5,0.42),rgba(8,6,5,0.68))]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(201,168,76,0.08)_0%,transparent_70%)]" />
          </div>

          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
            <div className="max-w-3xl">
              <Pill>{SITE.city} · Atención con cita previa</Pill>

              <h1 className="mt-6 font-[family:var(--font-cormorant)] text-[44px] sm:text-[76px] font-light leading-[1.02] text-[#FAF8F3]">
                Cuidado estético
                <span className="block italic text-[#C9A84C]">con técnica y delicadeza</span>
              </h1>

              <p className="mt-5 max-w-[560px] text-[15px] leading-[1.7] text-[#e8dcc3]">
                Tratamientos faciales, corporales y depilación láser en un espacio pensado
                para cuidar cada detalle, con protocolos responsables y una atención cercana.
              </p>

              <div className="mt-8 flex flex-wrap gap-[14px]">
                <Button href={whatsappGeneral} variant="gold">
                  📲 Agendar por WhatsApp
                </Button>
                <Button href="/servicios" variant="outline" newTab={false}>
                  Ver tratamientos
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
          <SectionTitle
            overline="Por qué elegirnos"
            title="Seguridad, técnica y acompañamiento"
            desc="Cuidamos la experiencia completa: desde la valoración inicial hasta el seguimiento, con una estética más limpia, cercana y profesional."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "shield" as const,
                t: "Seguridad",
                d: "Protocolos claros y responsables en cada tratamiento.",
              },
              {
                icon: "spark" as const,
                t: "Calidad",
                d: "Tecnología, técnica y detalle en cada sesión.",
              },
              {
                icon: "star" as const,
                t: "Resultados",
                d: "Un enfoque realista, progresivo y personalizado.",
              },
              {
                icon: "clock" as const,
                t: "Atención",
                d: "Puntualidad, seguimiento y trato cuidado.",
              },
            ].map((x) => (
              <ValueCard
                key={x.t}
                icon={
                  <span className="text-amber-200">
                    <Icon name={x.icon} />
                  </span>
                }
                title={x.t}
                desc={x.d}
              />
            ))}
          </div>
        </section>

        <section id="resultados" className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
          <SectionTitle
            overline="Nuestro trabajo"
            title="Una muestra real del centro"
            desc="Contenido auténtico, tratamientos reales y una imagen cuidada que refleja cómo trabajamos."
          />

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
          <GlassCard className="relative overflow-hidden p-8 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_80%_20%,rgba(201,168,76,0.14),transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_420px_at_20%_70%,rgba(201,168,76,0.08),transparent_60%)]" />

            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <Pill>Curso {COURSE.modality}</Pill>
                  <span className="text-xs uppercase tracking-[0.14em] text-[#b8a78b]">
                    {COURSE.city} · {COURSE.hours} · {COURSE.breakdown}
                  </span>
                </div>

                <h2 className="mt-5 font-[family:var(--font-cormorant)] text-[38px] sm:text-[54px] font-light leading-[1.04] text-[#FAF8F3]">
                  {COURSE.name}
                </h2>

                <p className="mt-4 max-w-2xl text-[14px] leading-[1.7] text-[#b8a78b]">
                  Formación intensiva diseñada para profesionales que desean dominar el
                  acompañamiento estético post-quirúrgico con criterio técnico, seguridad
                  y práctica real de cabina.
                </p>
              </div>

              <div className="sm:mt-2">
                <a
                  href="/curso"
                  className="inline-flex items-center justify-center border border-[rgba(201,168,76,0.24)] bg-[rgba(12,9,7,0.38)] px-5 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-amber-200 transition hover:bg-amber-300/10 hover:text-amber-100"
                >
                  Ver página del curso
                </a>
              </div>
            </div>

            <div className="relative mt-8 grid gap-8 sm:grid-cols-2">
              <GlassCard className="p-7">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#d9b861]/82">
                  Qué aprenderás
                </div>
                <div className="mt-6 space-y-5">
                  <CheckItem>
                    Drenaje linfático manual: técnica correcta, control de presión y secuencias.
                  </CheckItem>
                  <CheckItem>
                    Organización por fases del post-quirúrgico y planificación de sesiones.
                  </CheckItem>
                  <CheckItem>
                    Señales de alerta, límites profesionales y derivación responsable.
                  </CheckItem>
                  <CheckItem>
                    Comunicación con el cliente y posicionamiento profesional de alto nivel.
                  </CheckItem>
                </div>
              </GlassCard>

              <GlassCard className="p-8">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-[#d9b861]/80">
                    Inscripciones abiertas
                  </div>
                  <div className="mt-3 font-[family:var(--font-cormorant)] text-[34px] font-light text-[#FAF8F3]">
                    ¿Quieres reservar tu cupo?
                  </div>
                  <p className="mt-4 text-[14px] leading-[1.7] text-[#b8a78b]">
                    Escríbenos por WhatsApp y te enviaremos toda la información sobre
                    próximas fechas, inversión y disponibilidad.
                  </p>
                </div>

                <div className="mt-8">
                  <Button href={whatsappCurso} variant="gold">
                    📲 Reservar mi cupo
                  </Button>
                </div>
              </GlassCard>
            </div>
          </GlassCard>
        </section>

        <section id="contacto" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <SectionTitle
            overline="Ubicación & contacto"
            title="Estamos en Vecindario"
            desc="Escríbenos directamente por WhatsApp o visítanos en nuestro centro."
          />

          <div className="grid gap-8 sm:grid-cols-2">
            <GlassCard className="p-8">
              <div className="mb-6">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#d9b861]/80">
                  Dirección
                </div>
                <div className="mt-3 font-[family:var(--font-cormorant)] text-[30px] font-light leading-[1.1] text-[#FAF8F3]">
                  {SITE.addressLine}
                </div>
                <div className="mt-2 text-sm text-[#b8a78b]">{SITE.city}</div>
              </div>

              <div className="mb-6">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#d9b861]/80">
                  Horario
                </div>
                <div className="mt-3 text-[14px] leading-[1.7] text-[#b8a78b]">{SITE.hours}</div>
              </div>

              <div className="mb-6">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#d9b861]/80">
                  Teléfono
                </div>
                <div className="mt-3 text-[14px] leading-[1.7] text-[#b8a78b]">
                  {SITE.phoneDisplay}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Button href={whatsappGeneral} variant="gold">
                  📲 Escribir por WhatsApp
                </Button>

                {SITE.instagramUrl ? (
                  <Button href={SITE.instagramUrl} variant="outline">
                    Ver Instagram
                  </Button>
                ) : null}
              </div>

              <div className="mt-8 text-xs uppercase tracking-[0.12em] text-[#b8a78b]">
                Atención con cita previa recomendada.
              </div>
            </GlassCard>

            <GlassCard className="overflow-hidden p-0">
              <iframe
                title="Mapa"
                src={SITE.mapsEmbedSrc}
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </GlassCard>
          </div>
        </section>

        <section className="relative overflow-hidden px-5 py-[72px] text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,168,76,0.05)_0%,transparent_70%)]" />
          <div className="relative mx-auto max-w-4xl">
            <h2 className="font-[family:var(--font-cormorant)] text-[38px] sm:text-[58px] font-light leading-[1.08] text-[#FAF8F3]">
              ¿No sabes
              <br />
              <em className="italic text-[#C9A84C]">por dónde empezar?</em>
            </h2>

            <p className="mx-auto mt-5 max-w-[520px] text-[14.5px] leading-[1.7] text-[#b8a78b]">
              Te orientamos sin compromiso para que encuentres el tratamiento o la
              formación que mejor encaja contigo.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-[14px]">
              <Button href={whatsappGeneral} variant="gold">
                📲 Valoración por WhatsApp
              </Button>
              <Button href={`tel:+${SITE.phone}`} variant="outline" newTab={false}>
                📞 {SITE.phoneDisplay}
              </Button>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-[rgba(201,168,76,0.15)] bg-[linear-gradient(180deg,rgba(19,14,10,0.55)_0%,rgba(12,9,7,0.78)_100%)] px-5 py-10 sm:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <div className="font-[family:var(--font-cormorant)] text-[22px] tracking-[0.1em] text-[#C9A84C]">
              {SITE.brand.toUpperCase()}
            </div>
            <p className="mt-3 text-[12.5px] leading-[1.6] text-[#b8a78b]">
              {SITE.addressLine}
              <br />
              {SITE.city}
              <br />
              <br />
              Tel.: {SITE.phoneDisplay}
              <br />
              {SITE.hours}
            </p>
          </div>

          <div>
            <h5 className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#C9A84C]">
              Información
            </h5>
            <div className="space-y-2">
              <a href="/sobre" className="block text-[13px] text-[#b8a78b] hover:text-[#C9A84C]">
                Sobre Nosotros
              </a>
              <a
                href="/servicios"
                className="block text-[13px] text-[#b8a78b] hover:text-[#C9A84C]"
              >
                Tratamientos
              </a>
              <a
                href="#resultados"
                className="block text-[13px] text-[#b8a78b] hover:text-[#C9A84C]"
              >
                Nuestro trabajo
              </a>
              <a href="/curso" className="block text-[13px] text-[#b8a78b] hover:text-[#C9A84C]">
                Curso
              </a>
              <a
                href="#contacto"
                className="block text-[13px] text-[#b8a78b] hover:text-[#C9A84C]"
              >
                Contacto
              </a>
            </div>
          </div>

          <div>
            <h5 className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#C9A84C]">
              Legal
            </h5>
            <div className="space-y-2">
              <a href="/cookies" className="block text-[13px] text-[#b8a78b] hover:text-[#C9A84C]">
                Cookies
              </a>
              <a
                href="/privacidad"
                className="block text-[13px] text-[#b8a78b] hover:text-[#C9A84C]"
              >
                Privacidad
              </a>
              <a
                href="/aviso-legal"
                className="block text-[13px] text-[#b8a78b] hover:text-[#C9A84C]"
              >
                Aviso legal
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-7 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-[rgba(201,168,76,0.08)] pt-5 text-[11.5px] text-[#b8a78b]">
          <span>
            © {new Date().getFullYear()} {SITE.brand} · {SITE.city}
          </span>
          <span>Diseñado con ♥ en Vecindario</span>
        </div>
      </footer>

      <FloatingWhatsApp href={whatsappGeneral} />
    </main>
  );
}
"use client";

import React from "react";
import Script from "next/script";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

const SITE = {
  brand: "Alex Estética",
  city: "Gran Canaria",
  phone: "34661026192",
  phoneDisplay: "661 026 192",
  instagramUrl:
    "https://www.instagram.com/alex_postquirurgicoscanarias?igsh=MTg3Y2NibWMwYTl5ZQ==",
  addressLine: "Av. Canarias 450, Bloque B, Local 3 · Vecindario",
  locality: "Vecindario",
  hours: "Lun–Vier · 9:00–13:00 y 16:00–20:00 | Sab · 9:00–13:00",
  logoSrc: "/alex-logo.png",
  hero: "/hero.jpg",
  mapsUrl:
    "https://www.google.com/maps?q=Av.%20Canarias%20450,%20Bloque%20B,%20Local%203,%20Vecindario",
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
    "inline-flex items-center justify-center gap-2 px-7 py-3 text-[12px] sm:text-[12.5px] tracking-[0.10em] uppercase transition-all duration-200 font-[family:var(--font-dm-sans)]";
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
      className="text-[13px] font-[family:var(--font-dm-sans)] font-medium tracking-[0.04em] text-[#d7c6a7]/72 transition hover:text-[#fff4df]"
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
    <span className="inline-flex items-center gap-2 border border-[rgba(201,168,76,0.20)] bg-[rgba(18,14,10,0.45)] px-3 py-1 text-[10.5px] uppercase tracking-[0.16em] text-amber-100/82 backdrop-blur-[6px] font-[family:var(--font-dm-sans)]">
      <span className="inline-block h-2 w-2 rounded-full bg-amber-300" />
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 block text-[10px] uppercase tracking-[0.35em] text-[#C9A84C]">
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
        <div className="mb-3 text-[10px] font-[family:var(--font-dm-sans)] font-medium uppercase tracking-[0.34em] text-[#d9b861]/85">
          {overline}
        </div>
      ) : null}

      <h2 className="font-[family:var(--font-cormorant)] text-[34px] sm:text-[48px] font-light leading-[1.08] text-[#FAF8F3]">
        {title}
      </h2>

      {desc ? (
        <p className="mt-4 max-w-3xl text-[13.5px] leading-[1.7] text-[#b8a78b] sm:text-[14px] font-[family:var(--font-dm-sans)]">
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
        "bg-[linear-gradient(180deg,rgba(24,18,13,0.92)_0%,rgba(15,12,9,0.88)_100%)]",
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
      <p className="text-[13.5px] leading-[1.7] text-[#b8a78b] font-[family:var(--font-dm-sans)]">
        {desc}
      </p>
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
      <div className="text-[13.5px] leading-[1.7] text-[#b8a78b] font-[family:var(--font-dm-sans)]">
        {children}
      </div>
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
      className="group relative overflow-hidden bg-[#141414] transition duration-300 hover:bg-[#1c1c1c]"
      aria-label="Ver reel en Instagram"
      title="Ver reel en Instagram"
    >
      <div className="relative aspect-[9/16] w-full">
        <img
          src={item.thumb}
          alt="Reel Instagram"
          className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,8,8,0.85),transparent_60%)]" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E8C96A] font-[family:var(--font-dm-sans)]">
          {item.label ?? "Instagram"}
        </div>
        <div className="mt-1 text-[11px] text-[#b8a78b] font-[family:var(--font-dm-sans)]">
          Ver en Instagram
        </div>
      </div>
    </a>
  );
}

type Review = {
  name: string;
  when: string;
  stars: 5 | 4;
  text: string;
  meta: string;
};

const REVIEWS: Review[] = [
  {
    name: "Laura P.",
    when: "Hace 3 meses",
    stars: 5,
    text: "Me operé de lipo hace 3 meses y hice todo el postoperatorio aquí. Fue clave para mi recuperación, mucho más rápida de lo esperado y sin fibrosis. Las chicas son un amor y el trato es excelente.",
    meta: "Recuperación Postquirúrgica · Liposucción",
  },
  {
    name: "Sofía M.",
    when: "Hace 1 mes",
    stars: 5,
    text: "Llevo 5 sesiones de depilación láser en piernas y axilas y ya no me sale prácticamente nada. El proceso es súper cómodo con el Soprano Ice. Me arrepiento de no haberlo hecho antes.",
    meta: "Depilación Láser Soprano · Piernas y Axilas",
  },
  {
    name: "María G.",
    when: "Hace 4 meses",
    stars: 5,
    text: "Llevo 4 meses con el protocolo de Indiba corporal y los resultados son increíbles. La piel está mucho más firme y he perdido volumen en zonas que no conseguía trabajar en el gimnasio.",
    meta: "Masaje Moldeador con Diatermia Indiba",
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
            className={`h-4 w-4 ${filled ? "text-[#C9A84C]" : "text-[#C9A84C]/20"}`}
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

      <span className="hidden sm:flex flex-col leading-none font-[family:var(--font-dm-sans)]">
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
  const particlesRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    container.innerHTML = "";
    for (let i = 0; i < 18; i += 1) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      p.style.setProperty("--dur", `${4 + Math.random() * 6}s`);
      p.style.setProperty("--delay", `${Math.random() * 5}s`);
      p.style.setProperty("--op", `${0.15 + Math.random() * 0.35}`);
      container.appendChild(p);
    }
  }, []);

  const whatsappGeneral = waLink(
    `Hola Alex! Quiero agendar una cita en ${SITE.brand}. ¿Me puedes dar disponibilidad?`
  );

  const whatsappCurso = waLink(
    `Hola Alex! Quiero info del curso "${COURSE.name}" (${COURSE.modality}, ${COURSE.hours}, ${COURSE.breakdown}) en ${COURSE.city}: precio, próximas fechas y cupos.`
  );

  const whatsappLaser = waLink(
    "Hola! Quiero información sobre depilación láser Soprano Trionda."
  );

  const whatsappPostqx = waLink(
    "Hola! Necesito información sobre el protocolo postquirúrgico."
  );

  return (
    <main
      className={`${cormorant.variable} ${dmSans.variable} relative min-h-screen overflow-x-hidden bg-[#080808] text-white [font-family:var(--font-dm-sans)]`}
    >
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />

      <style jsx global>{`
        @keyframes lineSweep {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes floatParticle {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: var(--op, 0.4);
          }
          50% {
            transform: translateY(-20px) scale(1.5);
            opacity: calc(var(--op, 0.4) * 1.5);
          }
        }

        @keyframes pulseDot {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(201, 168, 76, 0.4);
          }
          50% {
            box-shadow: 0 0 0 6px rgba(201, 168, 76, 0);
          }
        }

        .hero-line {
          position: absolute;
          height: 1px;
          width: 100%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(201, 168, 76, 0.15),
            transparent
          );
          animation: lineSweep 8s ease-in-out infinite;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #c9a84c;
          border-radius: 999px;
          animation: floatParticle var(--dur, 6s) ease-in-out infinite;
          animation-delay: var(--delay, 0s);
          opacity: var(--op, 0.4);
        }

        .hero-dot {
          animation: pulseDot 2s ease infinite;
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.04)_0%,transparent_30%),linear-gradient(180deg,#080808_0%,#111111_45%,#080808_100%)]" />
      </div>

      {/* HEADER ORIGINAL FIJO */}
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
        {/* HERO ESTILO REFERENCIA */}
        <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_70%_30%,rgba(201,168,76,0.06)_0%,transparent_60%),radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(201,168,76,0.04)_0%,transparent_50%),#080808]" />
          <div className="absolute inset-0">
            <img
              src={SITE.hero}
              alt={`${SITE.brand} - ${SITE.city}`}
              className="h-full w-full object-cover opacity-[0.40]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,8,8,0.55),rgba(8,8,8,0.88))]" />
          </div>

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="hero-line top-[25%]" />
            <div className="hero-line top-[55%] opacity-60 [animation-delay:2.5s]" />
            <div className="hero-line top-[78%] opacity-30 [animation-delay:5s]" />
          </div>

          <div ref={particlesRef} className="pointer-events-none absolute inset-0" />

          <div className="relative z-10 mx-auto grid max-w-[1200px] gap-12 px-5 py-[80px] sm:px-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-[720px]">
              <div className="mb-7 inline-flex items-center gap-3">
                <div className="hero-dot h-[6px] w-[6px] rounded-full bg-[#C9A84C]" />
                <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A84C]">
                  Gran Canaria · Vecindario · Cita Previa
                </span>
              </div>

              <h1 className="font-[family:var(--font-cormorant)] font-semibold leading-[0.95]">
                <span className="block text-[52px] tracking-[-0.02em] text-[#F5F0E8] sm:text-[88px]">
                  Depilación láser
                </span>
                <span className="block text-[52px] italic tracking-[-0.02em] text-[#C9A84C] sm:text-[88px]">
                  definitiva.
                </span>
                <span className="mt-1 block text-[30px] font-normal italic tracking-[-0.01em] text-[#6A6257] sm:text-[54px]">
                  Recuperación postquirúrgica experta.
                </span>
              </h1>

              <p className="mt-8 max-w-[560px] text-[15px] leading-[1.8] text-[#8f8577] sm:text-[17px]">
                Tecnología <strong className="text-[#C8BFA8]">Soprano Ice Trionda</strong>, protocolos
                postquirúrgicos especializados, formación profesional y una experiencia elegante,
                cercana y cuidada.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href={whatsappGeneral} variant="gold">
                  📲 Agendar por WhatsApp
                </Button>
                <Button href="/servicios" variant="outline" newTab={false}>
                  Ver todos los tratamientos →
                </Button>
              </div>
            </div>

            <div className="hidden flex-col gap-7 lg:flex">
              <div className="border-r-2 border-[rgba(201,168,76,0.3)] pr-5 text-right">
                <span className="block font-[family:var(--font-cormorant)] text-[38px] font-semibold leading-none text-[#C9A84C]">
                  3
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.15em] text-[#6A6257]">
                  Longitudes de onda
                  <br />
                  Soprano Trionda
                </span>
              </div>

              <div className="border-r-2 border-[rgba(201,168,76,0.3)] pr-5 text-right">
                <span className="block font-[family:var(--font-cormorant)] text-[38px] font-semibold leading-none text-[#C9A84C]">
                  4
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.15em] text-[#6A6257]">
                  Etapas postquirúrgicas
                  <br />
                  especializadas
                </span>
              </div>

              <div className="border-r-2 border-[rgba(201,168,76,0.3)] pr-5 text-right">
                <span className="block font-[family:var(--font-cormorant)] text-[38px] font-semibold leading-none text-[#C9A84C]">
                  +8
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.15em] text-[#6A6257]">
                  Tipos de tratamiento
                  <br />
                  disponibles
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-5 hidden items-center gap-3 lg:flex lg:left-10">
            <div className="h-px w-10 bg-[#8B6914]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#6A6257]">
              Explorar
            </span>
          </div>
        </section>

        {/* BLOQUES PROTAGONISTAS */}
        <section className="mx-auto max-w-[1300px] px-5 py-[90px] sm:px-10">
          <SectionLabel>Nuestras especialidades</SectionLabel>
          <h2 className="font-[family:var(--font-cormorant)] text-[38px] font-semibold leading-[1.1] text-[#F5F0E8] sm:text-[60px]">
            Lo que nos hace <em className="italic text-[#C9A84C]">diferentes</em>
          </h2>

          <div className="mt-14 grid gap-[2px] lg:grid-cols-2">
            <div className="group relative min-h-[520px] overflow-hidden bg-[#141414]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,168,76,0.12)_0%,transparent_50%),linear-gradient(to_top,rgba(8,8,8,0.97)_0%,rgba(8,8,8,0.5)_50%,rgba(8,8,8,0.2)_100%),radial-gradient(ellipse_at_60%_20%,rgba(201,168,76,0.1)_0%,transparent_60%)] transition-transform duration-500 group-hover:scale-[1.04]" />
              <div className="absolute right-8 top-8 h-20 w-20 rounded-full border border-[rgba(201,168,76,0.15)] transition-all duration-300 group-hover:scale-125 group-hover:border-[rgba(201,168,76,0.3)]" />
              <div className="absolute right-[47px] top-[47px] h-[50px] w-[50px] rounded-full border border-[rgba(201,168,76,0.25)] transition-all duration-300 group-hover:scale-150 group-hover:border-[rgba(201,168,76,0.1)]" />

              <div className="absolute inset-0 z-[3] flex flex-col justify-end p-10 sm:p-12">
                <span className="mb-4 text-[42px]">⚡</span>
                <span className="mb-4 inline-block w-fit border border-[rgba(201,168,76,0.3)] px-3 py-1 text-[9.5px] uppercase tracking-[0.2em] text-[#C9A84C]">
                  Protagonista · Tecnología de élite
                </span>

                <h3 className="font-[family:var(--font-cormorant)] text-[30px] font-semibold leading-[1.1] text-[#F5F0E8] sm:text-[42px]">
                  Depilación Láser
                  <br />
                  <em className="italic text-[#C9A84C]">Soprano Ice Trionda</em>
                </h3>

                <p className="mt-4 max-w-[400px] text-[14px] leading-[1.75] text-[#8f8577]">
                  El sistema que combina simultáneamente <strong className="text-[#C8BFA8]">3 longitudes de onda</strong>
                  para tratar distintos tipos de vello y piel con gran eficacia y mayor confort.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "⚡ Trionda 755+808+1064nm",
                    "✅ Todos los fototipos",
                    "❄️ Soprano Ice",
                    "👨👩 Hombre y Mujer",
                    "📋 Bonos disponibles",
                  ].map((x) => (
                    <span
                      key={x}
                      className="border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.03)] px-3 py-1 text-[11px] text-[#8f8577]"
                    >
                      {x}
                    </span>
                  ))}
                </div>

                <a
                  href="/servicios#catalogo"
                  className="mt-7 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.1em] text-[#C9A84C] transition hover:gap-4"
                >
                  Ver precios y zonas
                  <span className="relative h-px w-8 bg-[#C9A84C] after:absolute after:right-0 after:top-[-3px] after:h-[7px] after:w-[7px] after:rotate-45 after:border-r-[1.5px] after:border-t-[1.5px] after:border-[#C9A84C] after:content-['']" />
                </a>
              </div>
            </div>

            <div className="group relative min-h-[520px] overflow-hidden bg-[#141414]">
              <div className="absolute inset-0 bg-[linear-gradient(225deg,rgba(201,168,76,0.08)_0%,transparent_50%),linear-gradient(to_top,rgba(8,8,8,0.97)_0%,rgba(8,8,8,0.5)_50%,rgba(8,8,8,0.2)_100%),radial-gradient(ellipse_at_40%_20%,rgba(120,100,60,0.08)_0%,transparent_60%)] transition-transform duration-500 group-hover:scale-[1.04]" />
              <div className="absolute right-8 top-8 h-20 w-20 rounded-full border border-[rgba(201,168,76,0.15)] transition-all duration-300 group-hover:scale-125 group-hover:border-[rgba(201,168,76,0.3)]" />
              <div className="absolute right-[47px] top-[47px] h-[50px] w-[50px] rounded-full border border-[rgba(201,168,76,0.25)] transition-all duration-300 group-hover:scale-150 group-hover:border-[rgba(201,168,76,0.1)]" />

              <div className="absolute inset-0 z-[3] flex flex-col justify-end p-10 sm:p-12">
                <span className="mb-4 text-[42px]">🌿</span>
                <span className="mb-4 inline-block w-fit border border-[rgba(201,168,76,0.3)] px-3 py-1 text-[9.5px] uppercase tracking-[0.2em] text-[#C9A84C]">
                  Especialidad · Pre y Postoperatorio
                </span>

                <h3 className="font-[family:var(--font-cormorant)] text-[30px] font-semibold leading-[1.1] text-[#F5F0E8] sm:text-[42px]">
                  Recuperación
                  <br />
                  <em className="italic text-[#C9A84C]">Postquirúrgica</em>
                </h3>

                <p className="mt-4 max-w-[400px] text-[14px] leading-[1.75] text-[#8f8577]">
                  Protocolo organizado por etapas para acompañarte desde el inicio hasta el
                  resultado final, con drenaje, ultrasonido, Indiba y mantenimiento.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "🌱 Preoperatorio con Indiba",
                    "💧 Drenaje 1ª etapa",
                    "🔊 Ultrasonido 2ª etapa",
                    "⚡ Indiba 3ª etapa",
                    "🏆 Moldeo post-3 meses",
                  ].map((x) => (
                    <span
                      key={x}
                      className="border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.03)] px-3 py-1 text-[11px] text-[#8f8577]"
                    >
                      {x}
                    </span>
                  ))}
                </div>

                <a
                  href="/servicios#catalogo"
                  className="mt-7 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.1em] text-[#C9A84C] transition hover:gap-4"
                >
                  Ver protocolo completo
                  <span className="relative h-px w-8 bg-[#C9A84C] after:absolute after:right-0 after:top-[-3px] after:h-[7px] after:w-[7px] after:rotate-45 after:border-r-[1.5px] after:border-t-[1.5px] after:border-[#C9A84C] after:content-['']" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* STRIP LASER */}
        <section className="relative overflow-hidden border-y border-[rgba(201,168,76,0.1)] bg-[#141414] px-5 py-[72px] sm:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_50%,rgba(201,168,76,0.04)_0%,transparent_70%)]" />
          <div className="relative z-[1] mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-5 block text-[9.5px] uppercase tracking-[0.35em] text-[#C9A84C]">
                ¿Por qué Soprano Ice Trionda?
              </span>

              <h2 className="font-[family:var(--font-cormorant)] text-[36px] font-semibold leading-[1.1] text-[#F5F0E8] sm:text-[54px]">
                La tecnología láser
                <br />
                más avanzada
                <br />
                <em className="italic text-[#C9A84C]">del mercado</em>
              </h2>

              <p className="mt-6 text-[15px] leading-[1.8] text-[#8f8577]">
                La mayoría de láseres trabajan con una sola longitud de onda. El Soprano Ice
                Trionda utiliza <strong className="text-[#C8BFA8]">tres simultáneamente</strong>, cubriendo
                distintos ciclos del vello y distintos fototipos en una sola pasada.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "755nm · Vello fino y rubio",
                  "808nm · Vello grueso y oscuro",
                  "1064nm · Pieles oscuras",
                  "Soprano Ice · Cabezal refrigerante",
                ].map((x) => (
                  <div
                    key={x}
                    className="flex items-center gap-2 border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.04)] px-4 py-2 text-[12px] text-[#C8BFA8]"
                  >
                    <span className="h-[6px] w-[6px] rounded-full bg-[#C9A84C]" />
                    {x}
                  </div>
                ))}
              </div>

              <div className="mt-9">
                <Button href={whatsappLaser} variant="gold">
                  📲 Consultar mi caso
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="col-span-full flex items-center gap-5 bg-[#C9A84C] px-6 py-5 text-black">
                <span className="text-[32px]">⭐</span>
                <div>
                  <span className="block font-[family:var(--font-cormorant)] text-[32px] font-semibold leading-none">
                    Soprano Ice Trionda
                  </span>
                  <span className="mt-2 block text-[11.5px] leading-[1.4] text-black/70">
                    Tecnología premium para depilación láser avanzada en Vecindario, Gran Canaria
                  </span>
                </div>
              </div>

              {[
                { num: "3×", label: "Longitudes de onda combinadas para máxima eficacia" },
                { num: "100%", label: "Fototipos de piel tratables" },
                { num: "5–8", label: "Sesiones recomendadas" },
                { num: "0", label: "Tiempo de recuperación" },
              ].map((x) => (
                <div
                  key={x.label}
                  className="border border-[rgba(201,168,76,0.12)] bg-[#1C1C1C] px-5 py-6 transition hover:-translate-y-1 hover:border-[rgba(201,168,76,0.35)]"
                >
                  <span className="block font-[family:var(--font-cormorant)] text-[40px] font-semibold leading-none text-[#C9A84C]">
                    {x.num}
                  </span>
                  <span className="mt-2 block text-[11.5px] leading-[1.4] text-[#8f8577]">
                    {x.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GRID SERVICIOS */}
        <section className="mx-auto max-w-[1300px] px-5 py-[90px] sm:px-10">
          <SectionLabel>Catálogo completo</SectionLabel>
          <h2 className="font-[family:var(--font-cormorant)] text-[38px] font-semibold leading-[1.1] text-[#F5F0E8] sm:text-[60px]">
            Todos nuestros <em className="italic text-[#C9A84C]">tratamientos</em>
          </h2>

          <div className="mt-14 grid gap-[2px] md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                icon: "⚡",
                name: "Depilación Láser Diodo",
                desc: "Soprano Ice Trionda · Mujer y Hombre · Bonos con descuento",
              },
              {
                icon: "🌿",
                name: "Pre y Postoperatorio",
                desc: "Protocolo por etapas · Drenaje · Ultrasonido · Indiba",
              },
              {
                icon: "🔥",
                name: "Corporales & Moldeo",
                desc: "Criolipólisis · EMS Sculpt · Cavitación · Indiba corporal",
              },
              {
                icon: "✨",
                name: "Faciales Premium",
                desc: "Limpieza profunda · RF Fraccionada · Indiba facial",
              },
              {
                icon: "👁️",
                name: "Cejas & Pestañas Coreanas",
                desc: "Técnica coreana · Laminado · Lifting · Pack Mirada Completa",
              },
              {
                icon: "🎯",
                name: "Láser Picosegundo",
                desc: "Eliminación de tatuajes · Tinta negra · Todo tipo de piel",
              },
            ].map((item) => (
              <a
                key={item.name}
                href="/servicios"
                className="block border-b-2 border-transparent bg-[#141414] px-8 py-10 transition hover:-translate-y-1 hover:border-[#C9A84C] hover:bg-[#1C1C1C]"
              >
                <span className="mb-4 block text-[32px]">{item.icon}</span>
                <div className="font-[family:var(--font-cormorant)] text-[22px] font-semibold text-[#F5F0E8]">
                  {item.name}
                </div>
                <div className="mt-3 text-[12.5px] leading-[1.7] text-[#8f8577]">
                  {item.desc}
                </div>
                <span className="mt-5 block text-[11px] uppercase tracking-[0.1em] text-[#C9A84C]">
                  Ver tratamiento →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* POSTQX */}
        <section className="relative overflow-hidden border-y border-[rgba(201,168,76,0.1)] bg-[#141414] px-5 py-[90px] sm:px-10">
          <div className="pointer-events-none absolute -right-[100px] -top-[100px] h-[500px] w-[500px] rounded-full border border-[rgba(201,168,76,0.06)]" />

          <div className="mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <SectionLabel>Especialidad postquirúrgica</SectionLabel>

              <h2 className="font-[family:var(--font-cormorant)] text-[36px] font-semibold leading-[1.1] text-[#F5F0E8] sm:text-[52px]">
                Tu cirugía merece
                <br />
                una recuperación
                <br />
                <em className="italic text-[#C9A84C]">experta</em>
              </h2>

              <p className="mt-6 text-[15px] leading-[1.8] text-[#8f8577]">
                El resultado final no depende solo de la cirugía, también del acompañamiento
                durante la recuperación. Nuestro protocolo está pensado para cuidar cada fase con
                criterio y delicadeza.
              </p>

              <div className="mt-8 border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.03)] p-6">
                <div className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]">
                  🌱 Antes de operar · Tratamiento Preoperatorio
                </div>
                <p className="text-[13.5px] leading-[1.7] text-[#8f8577]">
                  Preparar la piel con <strong className="text-[#C9A84C]">Diatermia Indiba</strong> antes de la cirugía
                  ayuda a que el tejido llegue en mejores condiciones al proceso.
                </p>
              </div>

              <div className="mt-8">
                <Button href={whatsappPostqx} variant="gold">
                  📲 Consultar mi caso
                </Button>
              </div>
            </div>

            <div className="relative flex flex-col">
              <div className="absolute left-5 top-10 bottom-10 w-px bg-[linear-gradient(to_bottom,#C9A84C,rgba(201,168,76,0.1))]" />

              {[
                {
                  num: "1",
                  title: "Drenaje Postquirúrgico",
                  text: "Reduce la inflamación inicial, drena líquidos y prepara los tejidos para las siguientes etapas.",
                  price: "Precio según pauta personalizada",
                },
                {
                  num: "2",
                  title: "Masaje Linfático + Ultrasonido",
                  text: "Favorece la reabsorción de líquidos, acompaña la fibrosis incipiente y acelera la recuperación tisular.",
                  price: "Precio según pauta personalizada",
                },
                {
                  num: "3",
                  title: "Masaje Linfático + Indiba 448kHz",
                  text: "Ayuda a reafirmar, mejorar cicatrices, romper adherencias y consolidar el resultado final.",
                  price: "Precio según pauta personalizada",
                },
                {
                  num: "+",
                  title: "Mantenimiento post-3 meses · Indiba + Moldeo",
                  text: "Protocolo de mantenimiento y pulido del resultado con Indiba y masaje moldeador.",
                  price: "Sesión €35 · Bono 10 → €280",
                },
              ].map((step) => (
                <div key={step.title} className="relative flex gap-6 py-5">
                  <div className="relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center border-[1.5px] border-[#C9A84C] bg-[#1C1C1C] font-[family:var(--font-cormorant)] text-[15px] font-semibold text-[#C9A84C]">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-[family:var(--font-cormorant)] text-[20px] font-semibold text-[#F5F0E8]">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-[13px] leading-[1.7] text-[#8f8577]">
                      {step.text}
                    </p>
                    <span className="mt-2 block text-[12px] tracking-[0.06em] text-[#C9A84C]">
                      {step.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMACIÓN */}
        <section className="border-t border-[rgba(201,168,76,0.08)] bg-[#080808] px-5 py-[56px] sm:px-10">
          <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center border-[1.5px] border-[#C9A84C] text-[26px]">
                🎓
              </div>
              <div>
                <h3 className="font-[family:var(--font-cormorant)] text-[24px] font-semibold text-[#F5F0E8]">
                  También ofrecemos Formación
                </h3>
                <p className="mt-1 text-[13.5px] leading-[1.6] text-[#8f8577]">
                  Cursos especializados para profesionales del sector.{" "}
                  <strong className="text-[#C9A84C]">Aprende de los mejores.</strong>
                </p>
              </div>
            </div>

            <Button href="/curso" variant="outline" newTab={false}>
              Ver cursos disponibles →
            </Button>
          </div>
        </section>

        {/* RESULTADOS / INSTAGRAM */}
        <section id="resultados" className="bg-[#141414] px-5 py-[90px] sm:px-10">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <SectionLabel>Nuestro trabajo</SectionLabel>
                <h2 className="font-[family:var(--font-cormorant)] text-[36px] font-semibold leading-[1.1] text-[#F5F0E8] sm:text-[52px]">
                  Una muestra real del
                  <br />
                  <em className="italic text-[#C9A84C]">centro</em>
                </h2>
              </div>

              {SITE.instagramUrl ? (
                <Button href={SITE.instagramUrl} variant="outline">
                  Ver Instagram
                </Button>
              ) : null}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {INSTAGRAM_ITEMS.map((item) => (
                <InstagramCard key={item.url} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section className="border-t border-[rgba(201,168,76,0.1)] bg-[#141414] px-5 py-[90px] sm:px-10">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="font-[family:var(--font-cormorant)] text-[36px] font-semibold leading-[1.1] text-[#F5F0E8] sm:text-[52px]">
                  Lo que dicen
                  <br />
                  nuestras <em className="italic text-[#C9A84C]">clientas</em>
                </h2>
              </div>

              <div className="text-right">
                <span className="block text-[18px] tracking-[3px] text-[#C9A84C]">★★★★★</span>
                <span className="text-[12px] tracking-[0.06em] text-[#6A6257]">
                  Google Reviews · Alex Estética
                </span>
              </div>
            </div>

            <div className="grid gap-[2px] lg:grid-cols-3">
              {REVIEWS.map((review) => (
                <div
                  key={review.name}
                  className="border-t-2 border-transparent bg-[#1C1C1C] px-7 py-9 transition hover:border-[#C9A84C]"
                >
                  <div className="mb-4">
                    <StarRow value={review.stars} />
                  </div>
                  <p className="font-[family:var(--font-cormorant)] text-[18px] italic leading-[1.8] text-[#8f8577]">
                    "{review.text}"
                  </p>
                  <div className="mt-5 text-[12.5px] font-medium tracking-[0.06em] text-[#C8BFA8]">
                    {review.name}
                    <span className="mt-1 block text-[11.5px] font-light tracking-[0.04em] text-[#6A6257]">
                      {review.meta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contacto" className="relative overflow-hidden px-5 py-[110px] text-center sm:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,rgba(201,168,76,0.06)_0%,transparent_70%)]" />

          <div className="relative z-[1] mx-auto max-w-[900px]">
            <span className="mb-5 block text-[9.5px] uppercase tracking-[0.4em] text-[#C9A84C]">
              Sin compromiso · Valoración gratuita
            </span>

            <h2 className="font-[family:var(--font-cormorant)] text-[42px] font-semibold leading-none text-[#F5F0E8] sm:text-[88px]">
              ¿Empezamos
              <br />
              <em className="italic text-[#C9A84C]">hoy?</em>
            </h2>

            <p className="mx-auto mt-6 max-w-[520px] text-[15.5px] leading-[1.8] text-[#8f8577]">
              Te orientamos para que encuentres el tratamiento o la formación que mejor encaja
              contigo, tu piel y tus objetivos.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href={whatsappGeneral} variant="gold">
                📲 Valoración gratuita por WhatsApp
              </Button>
              <Button href="/servicios" variant="outline" newTab={false}>
                Ver todos los tratamientos
              </Button>
            </div>

            <p className="mt-7 text-[13px] tracking-[0.1em] text-[#6A6257]">
              O llámanos directamente:{" "}
              <a href={`tel:+${SITE.phone}`} className="text-[#C9A84C] no-underline">
                {SITE.phoneDisplay}
              </a>
            </p>
          </div>
        </section>

        {/* MAPA / CONTACTO EXTRA */}
        <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-10 sm:pb-20">
          <div className="grid gap-8 sm:grid-cols-2">
            <GlassCard className="p-8">
              <div className="mb-6">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#d9b861]/80 font-[family:var(--font-dm-sans)]">
                  Dirección
                </div>
                <div className="mt-3 font-[family:var(--font-cormorant)] text-[30px] font-light leading-[1.1] text-[#FAF8F3]">
                  {SITE.addressLine}
                </div>
                <div className="mt-2 text-sm text-[#b8a78b] font-[family:var(--font-dm-sans)]">
                  {SITE.city}
                </div>
              </div>

              <div className="mb-6">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#d9b861]/80 font-[family:var(--font-dm-sans)]">
                  Horario
                </div>
                <div className="mt-3 text-[14px] leading-[1.7] text-[#b8a78b] font-[family:var(--font-dm-sans)]">
                  {SITE.hours}
                </div>
              </div>

              <div className="mb-6">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[#d9b861]/80 font-[family:var(--font-dm-sans)]">
                  Teléfono
                </div>
                <div className="mt-3 text-[14px] leading-[1.7] text-[#b8a78b] font-[family:var(--font-dm-sans)]">
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
      </div>

      {/* FOOTER REFERENCIA ADAPTADO */}
      <footer className="border-t border-[rgba(201,168,76,0.12)] bg-[#141414] px-5 pb-8 pt-14 sm:px-10">
        <div className="mx-auto grid max-w-[1200px] gap-12 border-b border-[rgba(201,168,76,0.08)] pb-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <span className="block font-[family:var(--font-cormorant)] text-[24px] font-semibold tracking-[0.08em] text-[#C9A84C]">
              ALEX ESTÉTICA
            </span>
            <p className="mt-4 text-[13px] leading-[1.75] text-[#8f8577]">
              Estética avanzada con tecnología de élite y trato cercano. Especialistas en
              depilación láser, recuperación postquirúrgica y formación profesional en Gran Canaria.
            </p>

            <div className="mt-5 space-y-1">
              <a href={`tel:+${SITE.phone}`} className="block text-[13px] text-[#8f8577] hover:text-[#C9A84C]">
                📞 {SITE.phoneDisplay}
              </a>
              <a
                href={waLink("Hola! Quiero información sobre tratamientos.")}
                target="_blank"
                rel="noreferrer"
                className="block text-[13px] text-[#8f8577] hover:text-[#C9A84C]"
              >
                💬 WhatsApp
              </a>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-[13px] text-[#8f8577] hover:text-[#C9A84C]"
              >
                📍 {SITE.addressLine}
              </a>
              <span className="block text-[13px] text-[#8f8577]">🕐 {SITE.hours}</span>
            </div>
          </div>

          <div>
            <h5 className="mb-4 text-[9.5px] uppercase tracking-[0.25em] text-[#C9A84C]">
              Tratamientos
            </h5>
            <a href="/servicios" className="block mb-2 text-[13px] text-[#8f8577] hover:text-[#C9A84C]">
              Depilación Láser
            </a>
            <a href="/servicios" className="block mb-2 text-[13px] text-[#8f8577] hover:text-[#C9A84C]">
              Pre y Postoperatorio
            </a>
            <a href="/servicios" className="block mb-2 text-[13px] text-[#8f8577] hover:text-[#C9A84C]">
              Corporales & Moldeo
            </a>
            <a href="/servicios" className="block mb-2 text-[13px] text-[#8f8577] hover:text-[#C9A84C]">
              Faciales Premium
            </a>
            <a href="/servicios" className="block mb-2 text-[13px] text-[#8f8577] hover:text-[#C9A84C]">
              Cejas & Pestañas
            </a>
            <a href="/servicios" className="block text-[13px] text-[#8f8577] hover:text-[#C9A84C]">
              Láser Picosegundo
            </a>
          </div>

          <div>
            <h5 className="mb-4 text-[9.5px] uppercase tracking-[0.25em] text-[#C9A84C]">
              Centro
            </h5>
            <a href="/sobre" className="block mb-2 text-[13px] text-[#8f8577] hover:text-[#C9A84C]">
              Sobre Nosotros
            </a>
            <a href="/curso" className="block mb-2 text-[13px] text-[#8f8577] hover:text-[#C9A84C]">
              Formación
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="block mb-2 text-[13px] text-[#8f8577] hover:text-[#C9A84C]"
            >
              Google Maps
            </a>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="block mb-2 text-[13px] text-[#8f8577] hover:text-[#C9A84C]"
            >
              Instagram
            </a>
            <a href="#resultados" className="block text-[13px] text-[#8f8577] hover:text-[#C9A84C]">
              Nuestro trabajo
            </a>
          </div>

          <div>
            <h5 className="mb-4 text-[9.5px] uppercase tracking-[0.25em] text-[#C9A84C]">
              Legal
            </h5>
            <a href="/privacidad" className="block mb-2 text-[13px] text-[#8f8577] hover:text-[#C9A84C]">
              Política de privacidad
            </a>
            <a href="/aviso-legal" className="block mb-2 text-[13px] text-[#8f8577] hover:text-[#C9A84C]">
              Aviso legal
            </a>
          </div>
        </div>

        <div className="mx-auto mt-7 flex max-w-[1200px] flex-wrap items-center justify-between gap-3 text-[11.5px] text-[#6A6257]">
          <span>
            © {new Date().getFullYear()} {SITE.brand} · {SITE.city}
          </span>
          <span>{SITE.addressLine}</span>
        </div>
      </footer>

      <FloatingWhatsApp href={whatsappGeneral} />
    </main>
  );
}
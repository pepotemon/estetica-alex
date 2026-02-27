"use client";

import React from "react";

const SITE = {
  brand: "Alex Estética",
  city: "Gran Canaria",
  phone: "34600111222", // ✅ 34 + número sin +, sin espacios
  instagramUrl: "https://instagram.com/", // opcional
  addressLine: "Tu dirección aquí, Gran Canaria",
  hours: "Lun–Sáb · 10:00–20:00",
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
      className="text-sm text-neutral-700 hover:text-neutral-900"
    >
      {children}
    </a>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const whatsappGeneral = waLink(
    `Hola! Estoy interesado/a en ${SITE.brand}. ¿Me puedes dar información y disponibilidad?`
  );

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          {/* Brand */}
          <a
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-neutral-900 text-white">
              A
            </div>
            <div className="leading-tight">
              <div className="font-semibold">{SITE.brand}</div>
              <div className="text-xs text-neutral-600">{SITE.city}</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 sm:flex">
            <NavLink href="/servicios">Servicios</NavLink>
            <NavLink href="/curso">Curso</NavLink>
            <NavLink href="#contacto">Contacto</NavLink>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <a
              href={whatsappGeneral}
              className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm font-medium hover:bg-neutral-50 sm:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen ? (
          <div className="border-t bg-white sm:hidden">
            <div className="mx-auto max-w-6xl px-5 py-3">
              <div className="flex flex-col gap-2">
                <a
                  href="/servicios"
                  className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-neutral-50"
                  onClick={() => setMenuOpen(false)}
                >
                  Servicios
                </a>
                <a
                  href="/curso"
                  className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-neutral-50"
                  onClick={() => setMenuOpen(false)}
                >
                  Curso
                </a>
                <a
                  href="#contacto"
                  className="rounded-xl px-3 py-2 text-sm font-medium hover:bg-neutral-50"
                  onClick={() => setMenuOpen(false)}
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-neutral-700">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Clínica estética en {SITE.city}
            </p>

            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Estética profesional,{" "}
              <span className="underline decoration-2 underline-offset-4">
                resultados reales
              </span>
              .
            </h1>

            <p className="mt-4 max-w-xl text-lg text-neutral-700">
              En <strong>{SITE.brand}</strong> cuidamos tu piel con protocolos seguros y
              atención personalizada. También ofrecemos un <strong>curso</strong> para
              formación profesional.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappGeneral} variant="primary">
                Pedir información por WhatsApp
              </Button>

              <a
                href="/servicios"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { t: "Atención", d: "Personalizada" },
                { t: "Protocolos", d: "Seguros" },
                { t: "Ubicación", d: SITE.city },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border p-5">
                  <div className="text-sm text-neutral-600">{x.t}</div>
                  <div className="mt-1 font-semibold">{x.d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="rounded-3xl border bg-neutral-50 p-6">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-neutral-600">Hoy</div>
                  <div className="text-xl font-semibold">Valoración y agenda</div>
                </div>
                <div className="rounded-xl bg-emerald-600 px-3 py-1 text-sm font-medium text-white">
                  Disponible
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  { a: "Depilación láser", b: "Consulta por sesiones" },
                  { a: "Faciales", b: "Opciones por objetivo" },
                  { a: "Asesoría estética", b: "Plan recomendado" },
                ].map((x) => (
                  <div
                    key={x.a}
                    className="flex items-center justify-between rounded-2xl border p-4"
                  >
                    <div>
                      <div className="font-medium">{x.a}</div>
                      <div className="text-sm text-neutral-600">{x.b}</div>
                    </div>
                    <a
                      href={whatsappGeneral}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm font-medium hover:bg-neutral-50"
                    >
                      Consultar
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border bg-neutral-50 p-4">
                <div className="text-sm text-neutral-600">Horario</div>
                <div className="font-semibold">{SITE.hours}</div>
                <div className="mt-2 text-sm text-neutral-600">{SITE.addressLine}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presentación de Alex (resumen) */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="sm:col-span-2 rounded-3xl border p-6">
            <div className="text-2xl font-semibold">Sobre Alex</div>
            <p className="mt-3 text-neutral-700">
              Aquí pondremos tu presentación real: experiencia, enfoque, y por qué confiar.
              (Luego lo afinamos con tus datos.)
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { t: "Experiencia", d: "X años (edita)" },
                { t: "Enfoque", d: "Seguridad + resultados" },
                { t: "Formación", d: "Certificaciones (edita)" },
                { t: "Atención", d: "Personalizada" },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border bg-neutral-50 p-5">
                  <div className="text-sm text-neutral-600">{x.t}</div>
                  <div className="mt-1 font-semibold">{x.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                href={waLink("Hola Alex! Quiero agendar una valoración. ¿Disponibilidad?")}
              >
                Hablar con Alex por WhatsApp
              </Button>
              <a
                href="/curso"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
              >
                Ver curso
              </a>
            </div>
          </div>

          <div className="rounded-3xl border bg-neutral-50 p-6">
            <div className="text-sm font-medium text-neutral-600">Acceso rápido</div>
            <div className="mt-4 space-y-3">
              <a
                href="/servicios"
                className="block rounded-2xl border bg-white p-4 hover:bg-neutral-50"
              >
                <div className="font-semibold">Ver servicios</div>
                <div className="mt-1 text-sm text-neutral-600">
                  Depilación, faciales y más
                </div>
              </a>
              <a
                href="/curso"
                className="block rounded-2xl border bg-white p-4 hover:bg-neutral-50"
              >
                <div className="font-semibold">Ver curso</div>
                <div className="mt-1 text-sm text-neutral-600">
                  Temario + info por WhatsApp
                </div>
              </a>
              <a
                href={whatsappGeneral}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border bg-white p-4 hover:bg-neutral-50"
              >
                <div className="font-semibold">WhatsApp</div>
                <div className="mt-1 text-sm text-neutral-600">
                  Preguntar disponibilidad
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <div className="rounded-3xl border p-6">
          <div className="text-2xl font-semibold">Contacto</div>
          <p className="mt-2 text-neutral-700">
            Te respondemos por WhatsApp con precios, promociones y disponibilidad.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappGeneral}>Abrir WhatsApp</Button>
            {SITE.instagramUrl ? (
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3 text-sm font-medium hover:bg-neutral-50"
              >
                Ver Instagram
              </a>
            ) : null}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-neutral-50 p-5">
              <div className="text-sm text-neutral-600">Horario</div>
              <div className="mt-1 font-semibold">{SITE.hours}</div>
            </div>
            <div className="rounded-2xl border bg-neutral-50 p-5">
              <div className="text-sm text-neutral-600">Dirección</div>
              <div className="mt-1 font-semibold">{SITE.addressLine}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-neutral-600">
              © {new Date().getFullYear()} {SITE.brand} · {SITE.city}
            </div>
            <div className="text-sm text-neutral-600">Next.js + Vercel</div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating */}
      <a
        href={whatsappGeneral}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-30 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-lg hover:bg-neutral-800"
        aria-label="Abrir WhatsApp"
        title="Abrir WhatsApp"
      >
        WhatsApp
      </a>
    </main>
  );
}
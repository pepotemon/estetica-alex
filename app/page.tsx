export default function Page() {
  const phone = "34600111222"; // <-- CAMBIA ESTO (34 + número)
  const message = encodeURIComponent(
    "Hola! Quiero información del curso (precio, fechas y cómo inscribirme)."
  );
  const waLink = `https://wa.me/${phone}?text=${message}`;

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <div className="font-semibold">Clínica Estética</div>

          <a
            href={waLink}
            className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <p className="mb-3 inline-block rounded-full border px-3 py-1 text-sm">
          Gran Canaria · Formación
        </p>

        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
          Curso de <span className="underline decoration-2 underline-offset-4">Estética</span>
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-neutral-700">
          Aprende el método paso a paso para mejorar resultados, atender con seguridad
          y ofrecer un servicio profesional.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={waLink}
            className="rounded-2xl bg-neutral-900 px-6 py-3 text-center font-medium text-white"
            target="_blank"
            rel="noreferrer"
          >
            Preguntar por WhatsApp
          </a>

          <a
            href="#temario"
            className="rounded-2xl border px-6 py-3 text-center font-medium"
          >
            Ver temario
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { t: "Modalidad", d: "Presencial / Online" },
            { t: "Duración", d: "X horas / X semanas" },
            { t: "Soporte", d: "Grupo / tutorías" },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border p-5">
              <div className="text-sm text-neutral-600">{x.t}</div>
              <div className="mt-1 font-semibold">{x.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="temario" className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="text-2xl font-semibold">Qué aprenderás</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "Fundamentos y seguridad",
            "Protocolos paso a paso",
            "Materiales y preparación",
            "Atención al cliente y post-tratamiento",
            "Errores comunes y cómo evitarlos",
            "Cómo mejorar resultados y retención",
          ].map((item) => (
            <div key={item} className="rounded-2xl border p-5">
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="text-2xl font-semibold">Preguntas frecuentes</h2>
        <div className="mt-6 space-y-3">
          {[
            { q: "¿Cuánto cuesta?", a: "Escríbeme por WhatsApp y te paso precio y promos." },
            { q: "¿Cuándo empieza?", a: "Te confirmo fechas disponibles por WhatsApp." },
            { q: "¿Dónde es?", a: "Gran Canaria (y opciones online según edición)." },
          ].map((f) => (
            <details key={f.q} className="rounded-2xl border p-5">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-3 text-neutral-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <h2 className="text-2xl font-semibold">¿Te paso toda la info por WhatsApp?</h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Te respondo con precios, fechas, temario completo y cómo reservar tu plaza.
          </p>

          <a
            href={waLink}
            className="mt-6 inline-block rounded-2xl bg-neutral-900 px-6 py-3 font-medium text-white"
            target="_blank"
            rel="noreferrer"
          >
            Abrir WhatsApp
          </a>

          <footer className="mt-10 text-sm text-neutral-500">
            © {new Date().getFullYear()} Clínica Estética · Gran Canaria
          </footer>
        </div>
      </section>
    </main>
  );
}
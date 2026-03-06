"use client";

import React from "react";

type Consent = {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
};

const STORAGE_KEY = "ae_cookie_consent_v1";

function readConsent(): Consent | null {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        return JSON.parse(raw) as Consent;
    } catch {
        return null;
    }
}

function writeConsent(consent: Consent) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    // refresca para que layout re-monte y se carguen scripts si aplica
    window.location.reload();
}

export default function CookieBanner() {
    const [open, setOpen] = React.useState(false);
    const [show, setShow] = React.useState(false);

    const [analytics, setAnalytics] = React.useState(true);
    const [marketing, setMarketing] = React.useState(true);

    // ✅ Al montar: si no hay consentimiento -> mostrar banner
    // ✅ Si hay consentimiento -> ocultar
    React.useEffect(() => {
        const c = readConsent();
        if (!c) {
            setShow(true);
            // ✅ defaults cuando todavía no han elegido (puedes poner false si prefieres)
            setAnalytics(true);
            setMarketing(true);
            return;
        }
        setShow(false);
    }, []);

    // ✅ Cuando abres "Configurar": carga lo guardado si existe
    React.useEffect(() => {
        if (!open) return;
        const c = readConsent();
        if (c) {
            setAnalytics(!!c.analytics);
            setMarketing(!!c.marketing);
        }
    }, [open]);

    if (!show) return null;

    return (
        <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/80 backdrop-blur shadow-[0_20px_70px_rgba(0,0,0,0.65)]">
                <div className="p-5 sm:p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                            <div className="text-sm font-semibold text-amber-100">
                                Cookies y privacidad
                            </div>
                            <p className="mt-2 text-sm text-amber-100/70">
                                Usamos cookies necesarias para el funcionamiento del sitio. Con tu permiso,
                                también usaremos cookies{" "}
                                <span className="text-amber-100 font-semibold">analíticas</span> (Google Analytics)
                                y <span className="text-amber-100 font-semibold">marketing</span> (Meta Pixel)
                                para medir resultados y mejorar campañas.
                            </p>

                            <div className="mt-3 text-xs text-amber-100/60">
                                Puedes leer más en{" "}
                                <a
                                    href="/cookies"
                                    className="text-amber-200 hover:text-amber-100 font-semibold"
                                >
                                    Política de Cookies
                                </a>
                                .
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 sm:items-end">
                            <div className="flex flex-col gap-2 sm:flex-row">
                                <button
                                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-amber-100 hover:bg-white/10"
                                    onClick={() =>
                                        writeConsent({ necessary: true, analytics: false, marketing: false })
                                    }
                                >
                                    Rechazar
                                </button>

                                <button
                                    className="rounded-full border border-amber-300/25 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 px-4 py-2 text-sm font-semibold text-black hover:brightness-110"
                                    onClick={() =>
                                        writeConsent({ necessary: true, analytics: true, marketing: true })
                                    }
                                >
                                    Aceptar
                                </button>

                                <button
                                    className="rounded-full border border-amber-300/25 bg-black/40 px-4 py-2 text-sm font-semibold text-amber-100 hover:bg-white/10"
                                    onClick={() => setOpen((v) => !v)}
                                >
                                    {open ? "Cerrar" : "Configurar"}
                                </button>
                            </div>
                        </div>
                    </div>

                    {open ? (
                        <div className="mt-5 grid gap-3 rounded-[1.2rem] border border-white/10 bg-white/5 p-4 sm:grid-cols-3">
                            <div className="rounded-[1.1rem] border border-white/10 bg-black/30 p-4">
                                <div className="text-sm font-semibold text-amber-100">Necesarias</div>
                                <p className="mt-2 text-xs text-amber-100/70">
                                    Imprescindibles para que el sitio funcione correctamente.
                                </p>
                                <div className="mt-3 text-xs font-semibold text-amber-100/60">
                                    Siempre activas
                                </div>
                            </div>

                            <label className="rounded-[1.1rem] border border-white/10 bg-black/30 p-4 cursor-pointer">
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <div className="text-sm font-semibold text-amber-100">Analíticas</div>
                                        <div className="mt-1 text-xs text-amber-100/70">Google Analytics</div>
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 accent-amber-300"
                                        checked={analytics}
                                        onChange={(e) => setAnalytics(e.target.checked)}
                                    />
                                </div>
                                <p className="mt-3 text-xs text-amber-100/70">
                                    Nos ayudan a entender el uso del sitio para mejorar contenido y rendimiento.
                                </p>
                            </label>

                            <label className="rounded-[1.1rem] border border-white/10 bg-black/30 p-4 cursor-pointer">
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <div className="text-sm font-semibold text-amber-100">Marketing</div>
                                        <div className="mt-1 text-xs text-amber-100/70">Meta Pixel</div>
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 accent-amber-300"
                                        checked={marketing}
                                        onChange={(e) => setMarketing(e.target.checked)}
                                    />
                                </div>
                                <p className="mt-3 text-xs text-amber-100/70">
                                    Permite medir resultados de anuncios y crear audiencias para campañas.
                                </p>
                            </label>

                            <div className="sm:col-span-3 flex flex-col gap-2 sm:flex-row sm:justify-end">
                                <button
                                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-amber-100 hover:bg-white/10"
                                    onClick={() =>
                                        writeConsent({ necessary: true, analytics: false, marketing: false })
                                    }
                                >
                                    Guardar solo necesarias
                                </button>
                                <button
                                    className="rounded-full border border-amber-300/25 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 px-4 py-2 text-sm font-semibold text-black hover:brightness-110"
                                    onClick={() =>
                                        writeConsent({ necessary: true, analytics, marketing })
                                    }
                                >
                                    Guardar preferencias
                                </button>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
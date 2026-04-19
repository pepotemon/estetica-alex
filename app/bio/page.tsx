import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Alex Estética | Enlaces",
    description:
        "Accede rápidamente a WhatsApp, Instagram, Facebook, TikTok, ubicación, reseñas, reservas y web principal de Alex Estética.",
};

const SITE = {
    brand: "Alex Estética",
    city: "Gran Canaria",
    description:
        "Estética avanzada, depilación láser y recuperación postquirúrgica con una atención premium, delicada y profesional.",
    logoSrc: "/alex-logo.png",
    backgroundSrc: "/bio-bg.jpg",
    phone: "34661026192",
    instagramUrl:
        "https://www.instagram.com/alex_postquirurgicoscanarias?igsh=MTg3Y2NibWMwYTl5ZQ==",
    facebookUrl:
        "https://www.facebook.com/profile.php?id=61580982916810&mibextid=wwXIfr&rdid=CwcIRoIdlxCMUq8X&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18XFZSjJ85%2F%3Fmibextid%3DwwXIfr#",
    tiktokUrl: "https://www.tiktok.com/@alexestetic?_r=1&_t=ZN-95eHTbmJtiA",
    mapsUrl:
        "https://www.google.com/maps?q=Av.%20Canarias%20450,%20Bloque%20B,%20Local%203,%20Vecindario",
    websiteUrl: "https://alexesteticanarias.com",
    reviewsUrl: "https://alexesteticanarias.com/opinar",
    bookingUrl:
        "https://wa.me/34661026192?text=Hola%20Alex!%20Quiero%20reservar%20una%20cita.%20%C2%BFMe%20puedes%20dar%20disponibilidad%3F",
};

type IconName =
    | "phone"
    | "whatsapp"
    | "instagram"
    | "facebook"
    | "tiktok"
    | "map"
    | "star"
    | "globe"
    | "arrow";

type LinkItem = {
    label: string;
    href: string;
    icon: Exclude<IconName, "arrow">;
    description: string;
    highlight?: boolean;
};

const links: LinkItem[] = [
    {
        label: "Reservar cita",
        href: SITE.bookingUrl,
        icon: "phone",
        highlight: true,
        description: "Agenda tu cita directamente por WhatsApp",
    },
    {
        label: "Instagram",
        href: SITE.instagramUrl,
        icon: "instagram",
        description: "Descubre resultados, reels y novedades",
    },
    {
        label: "Facebook",
        href: SITE.facebookUrl,
        icon: "facebook",
        description: "Síguenos y descubre más contenido del centro",
    },
    {
        label: "TikTok",
        href: SITE.tiktokUrl,
        icon: "tiktok",
        description: "Mira vídeos, novedades y contenido visual",
    },
    {
        label: "Ubicación",
        href: SITE.mapsUrl,
        icon: "map",
        description: "Encuéntranos en Vecindario, Gran Canaria",
    },
    {
        label: "Dejar reseña",
        href: SITE.reviewsUrl,
        icon: "star",
        description: "Comparte tu experiencia en Alex Estética",
    },
    {
        label: "Web principal",
        href: SITE.websiteUrl,
        icon: "globe",
        description: "Visita la web completa del centro",
    },
];

function Icon({
    name,
    className = "h-5 w-5",
}: {
    name: IconName;
    className?: string;
}) {
    if (name === "phone") {
        return (
            <svg viewBox="0 0 24 24" className={className} fill="none">
                <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    if (name === "whatsapp") {
        return (
            <svg viewBox="0 0 32 32" className={className} fill="currentColor">
                <path d="M19.11 17.34c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.84 1.05-.16.18-.31.2-.58.07-.27-.14-1.12-.41-2.14-1.31-.79-.71-1.33-1.58-1.49-1.85-.16-.27-.02-.42.12-.56.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.23 0 1.31.96 2.58 1.09 2.76.14.18 1.89 2.88 4.57 4.04.64.27 1.14.43 1.53.55.64.2 1.22.17 1.68.1.51-.08 1.58-.65 1.8-1.28.22-.63.22-1.17.15-1.28-.07-.11-.25-.18-.52-.31Z" />
                <path d="M16.02 3.2c-7.08 0-12.82 5.73-12.82 12.8 0 2.24.59 4.43 1.71 6.35L3.2 28.8l6.6-1.69a12.8 12.8 0 0 0 6.22 1.6h.01c7.07 0 12.8-5.74 12.8-12.81 0-3.42-1.33-6.63-3.75-9.05A12.73 12.73 0 0 0 16.02 3.2Zm0 23.35h-.01a10.5 10.5 0 0 1-5.35-1.47l-.38-.22-3.92 1 1.05-3.82-.25-.39a10.48 10.48 0 0 1-1.62-5.62c0-5.79 4.71-10.5 10.5-10.5 2.8 0 5.43 1.09 7.41 3.08a10.4 10.4 0 0 1 3.08 7.41c0 5.79-4.71 10.5-10.5 10.5Z" />
            </svg>
        );
    }

    if (name === "instagram") {
        return (
            <svg viewBox="0 0 24 24" className={className} fill="none">
                <rect
                    x="2.5"
                    y="2.5"
                    width="19"
                    height="19"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
            </svg>
        );
    }

    if (name === "facebook") {
        return (
            <svg viewBox="0 0 24 24" className={className} fill="currentColor">
                <path d="M13.5 21v-7.2h2.4l.36-2.8H13.5V9.21c0-.81.23-1.36 1.39-1.36h1.48V5.34c-.26-.03-1.14-.1-2.17-.1-2.15 0-3.62 1.31-3.62 3.73V11H8.2v2.8h2.43V21h2.87Z" />
            </svg>
        );
    }

    if (name === "tiktok") {
        return (
            <svg viewBox="0 0 24 24" className={className} fill="currentColor">
                <path d="M16.8 3c.24 1.9 1.32 3.52 3.2 4.14v2.69a7.12 7.12 0 0 1-3.16-.74v5.2c0 3.96-3.17 6.71-7.03 6.71-3.98 0-6.81-3.1-6.81-6.64 0-3.9 3.07-6.75 6.94-6.75.31 0 .61.02.91.08v2.8a4.1 4.1 0 0 0-.91-.11c-2.2 0-3.96 1.69-3.96 3.9 0 2.06 1.56 3.97 4.03 3.97 2.12 0 3.9-1.37 3.9-4.28V3h2.89Z" />
            </svg>
        );
    }

    if (name === "map") {
        return (
            <svg viewBox="0 0 24 24" className={className} fill="none">
                <path
                    d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                />
                <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
            </svg>
        );
    }

    if (name === "star") {
        return (
            <svg viewBox="0 0 24 24" className={className} fill="none">
                <path
                    d="M12 3l2.7 5.6 6.1.9-4.4 4.2 1 6.1L12 17.8 6.6 19.8l1-6.1-4.4-4.2 6.1-.9L12 3z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    if (name === "globe") {
        return (
            <svg viewBox="0 0 24 24" className={className} fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                <path
                    d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
            <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function BioPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#0b0806] text-white">
            <div className="absolute inset-0 z-0">
                <Image
                    src={SITE.backgroundSrc}
                    alt={`${SITE.brand} background`}
                    fill
                    priority
                    sizes="100vw"
                    quality={82}
                    className="object-cover object-[62%_center] sm:object-center"
                />
            </div>

            <div className="pointer-events-none absolute inset-0 z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,6,5,0.66)_0%,rgba(11,8,6,0.66)_28%,rgba(11,8,6,0.80)_60%,rgba(7,5,4,0.90)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(820px_440px_at_50%_0%,rgba(201,168,76,0.10),transparent_60%),radial-gradient(620px_360px_at_80%_90%,rgba(201,168,76,0.07),transparent_55%)]" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/24 to-transparent" />
            </div>

            <div className="relative z-20 mx-auto flex min-h-screen max-w-md flex-col px-5 py-8 sm:py-10">
                <section className="rounded-[2rem] border border-[rgba(201,168,76,0.14)] bg-[linear-gradient(180deg,rgba(24,18,13,0.54)_0%,rgba(15,12,9,0.68)_100%)] px-6 pb-7 pt-8 shadow-[0_14px_34px_rgba(0,0,0,0.30)]">
                    <div className="mx-auto flex w-full max-w-[160px] justify-center">
                        <div className="relative h-[145px] w-[145px] overflow-hidden rounded-full border border-[rgba(201,168,76,0.18)] bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] shadow-[0_8px_22px_rgba(201,168,76,0.12)]">
                            <Image
                                src={SITE.logoSrc}
                                alt={SITE.brand}
                                fill
                                priority
                                sizes="145px"
                                className="object-contain scale-[1.55]"
                            />
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-[11px] uppercase tracking-[0.32em] text-[#e4c97f]/82">
                            {SITE.city}
                        </p>

                        <h1 className="mt-3 font-[family:var(--font-cormorant)] text-4xl font-light leading-none text-[#fffaf2]">
                            {SITE.brand}
                        </h1>

                        <p className="mx-auto mt-4 max-w-[28rem] text-sm leading-7 text-[#e4d4b3]/74">
                            {SITE.description}
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                        <span className="inline-flex items-center rounded-full border border-[rgba(201,168,76,0.18)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-amber-100/76">
                            Atención premium
                        </span>
                        <span className="inline-flex items-center rounded-full border border-[rgba(201,168,76,0.18)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-amber-100/76">
                            Cita previa
                        </span>
                    </div>
                </section>

                <section className="mt-6 flex flex-col gap-3">
                    {links.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className={[
                                "group relative overflow-hidden rounded-[1.7rem] border px-5 py-4",
                                "transition-transform duration-300",
                                item.highlight
                                    ? "border-[rgba(201,168,76,0.30)] bg-[linear-gradient(135deg,#f1d78f_0%,#ddb85a_28%,#c89f3f_58%,#f4e4b5_100%)] text-black shadow-[0_12px_26px_rgba(201,168,76,0.20)] hover:-translate-y-0.5 hover:brightness-105"
                                    : "border-[rgba(201,168,76,0.14)] bg-[linear-gradient(180deg,rgba(26,20,15,0.54)_0%,rgba(17,13,10,0.70)_100%)] text-white shadow-[0_10px_24px_rgba(0,0,0,0.24)] hover:-translate-y-0.5 hover:border-[rgba(201,168,76,0.24)]",
                            ].join(" ")}
                        >
                            <div className="relative flex items-center gap-4">
                                <div
                                    className={[
                                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border",
                                        item.highlight
                                            ? "border-black/10 bg-black/10"
                                            : "border-[rgba(201,168,76,0.14)] bg-[rgba(255,255,255,0.04)] text-amber-200",
                                    ].join(" ")}
                                >
                                    <Icon name={item.icon} className="h-5 w-5" />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div
                                        className={[
                                            "text-sm font-semibold tracking-[0.03em]",
                                            item.highlight ? "text-black" : "text-[#fffaf2]",
                                        ].join(" ")}
                                    >
                                        {item.label}
                                    </div>
                                    <div
                                        className={[
                                            "mt-1 text-xs leading-5",
                                            item.highlight ? "text-black/70" : "text-[#dccaa8]/68",
                                        ].join(" ")}
                                    >
                                        {item.description}
                                    </div>
                                </div>

                                <div className={item.highlight ? "text-black/75" : "text-amber-200/80"}>
                                    <Icon
                                        name="arrow"
                                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </div>
                            </div>
                        </a>
                    ))}
                </section>

                <footer className="mt-8 pb-2 text-center">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[#d7c6a7]/42">
                        © {new Date().getFullYear()} {SITE.brand}
                    </p>
                </footer>
            </div>
        </main>
    );
}
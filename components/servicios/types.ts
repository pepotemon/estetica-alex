export type QuizKey =
    | "grasa"
    | "tonificar"
    | "postqx"
    | "piel"
    | "depilacion"
    | "cejas"
    | "anticelulitico"
    | "remodelacion"
    | "flacidez";

export type PriceCard = {
    label: string;
    amount?: string;
    per?: string;
    save?: string;
    featured?: boolean;
};

export type TreatmentGalleryItem = {
    src: string;
    alt?: string;
};

export type Treatment = {
    id: string;
    icon: string;
    name: string;
    tagline: string;
    badge?: string;
    badgeType?: "pop" | "new";
    descriptionBlocks?: { title: string; text: string }[];
    tags?: string[];
    note?: string;
    prices?: PriceCard[];
    ctaPrimary?: { label: string; href: string };
    etapas?: { num: string; title: string; text: string }[];
    introText?: string;
    gallery?: { src: string; alt?: string }[];
};

export type TabId =
    | "cuerpo"
    | "recuperacion"
    | "rostro"
    | "laser-avanzado"
    | "depilacion"
    | "cejas";

export type TabConfig = {
    id: TabId;
    label: string;
    introIcon: string;
    introTitle: string;
    introText: string;
    treatments?: Treatment[];
    custom?: "depilacion";
};

export type SiteConfig = {
    brand: string;
    city: string;

    phone: string;
    displayPhone: string;

    logoSrc: string;

    tratamientosHeroImg: string;
    catalogoHeroImg: string;

    ctaLabel: string;

    address: string;
    locality: string;

    mapsUrl: string;

    hours: string;
};
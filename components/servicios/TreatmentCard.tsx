"use client";

import React from "react";
import Button from "./Button";
import type {
    PriceCard,
    Treatment,
    TreatmentGalleryItem,
    TreatmentMedia,
} from "./types";

function formatRichText(text: string) {
    return text.split("\n\n").map((p, i) => <p key={i}>{p}</p>);
}

function PriceTable({ prices }: { prices?: PriceCard[] }) {
    if (!prices?.length) return null;

    return (
        <div className="price-table">
            {prices.map((price) => (
                <div
                    key={`${price.label}-${price.amount ?? "consultar"}`}
                    className={`price-card ${price.featured ? "featured" : ""}`}
                >
                    <span className="price-label">{price.label}</span>
                    <div className="price-amount">{price.amount}</div>
                    {price.per ? <span className="price-per">{price.per}</span> : null}
                    {price.save ? <span className="price-save">{price.save}</span> : null}
                </div>
            ))}
        </div>
    );
}

function TreatmentGallery({
    treatmentId,
    gallery,
}: {
    treatmentId: string;
    gallery?: TreatmentGalleryItem[];
}) {
    const [visibleImages, setVisibleImages] = React.useState(gallery ?? []);

    React.useEffect(() => {
        setVisibleImages(gallery ?? []);
    }, [gallery, treatmentId]);

    if (!visibleImages.length) return null;

    return (
        <div className="treatment-gallery-wrap">
            <div className="treatment-gallery-head">
                <h4>Galería del tratamiento</h4>
                <span>Imágenes reales</span>
            </div>

            <div className="treatment-gallery">
                {visibleImages.map((image, index) => (
                    <a
                        key={`${treatmentId}-${image.src}-${index}`}
                        href={image.src}
                        target="_blank"
                        rel="noreferrer"
                        className="treatment-gallery-card"
                    >
                        <img
                            src={image.src}
                            alt={image.alt ?? `Imagen ${index + 1}`}
                            className="treatment-gallery-img"
                            loading="lazy"
                            onError={() => {
                                setVisibleImages((prev) =>
                                    prev.filter((item) => item.src !== image.src)
                                );
                            }}
                        />
                        <span className="treatment-gallery-overlay">
                            Ver imagen
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
}

function TreatmentMediaCard({ media }: { media?: TreatmentMedia }) {
    if (!media) return null;

    return (
        <div className="treatment-media-wrap">
            <div className="treatment-gallery-head">


            </div>

            <a
                href={media.url}
                target="_blank"
                rel="noreferrer"
                className="treatment-media-card"
            >
                <div className="treatment-media-thumb-wrap">
                    <img
                        src={media.thumbnail}
                        alt={media.title ?? media.label ?? "Resultado real del tratamiento"}
                        className="treatment-media-thumb"
                        loading="lazy"
                    />
                    <span className="treatment-media-play">▶</span>
                </div>

                <div className="treatment-media-content">
                    <div className="treatment-media-badge">Instagram Reel</div>
                    <div className="treatment-media-title">
                        {media.title ?? "Ver resultado real"}
                    </div>
                    <div className="treatment-media-link">
                        {media.label ?? "Ver video"}
                    </div>
                </div>
            </a>
        </div>
    );
}

export default function TreatmentCard({
    treatment,
    isOpen,
    onToggle,
}: {
    treatment: Treatment;
    isOpen: boolean;
    onToggle: () => void;
}) {
    const itemRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!isOpen || !itemRef.current) return;
        const el = itemRef.current;
        const timer = setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 580); // wait for the collapse transition of the previous card (0.55s)
        return () => clearTimeout(timer);
    }, [isOpen]);

    return (
        <div ref={itemRef} className={`treatment-item ${isOpen ? "open" : ""}`}>
            <button type="button" className="treatment-header" onClick={onToggle}>
                <div className="treatment-left">
                    <div className="treatment-icon">{treatment.icon}</div>
                    <div>
                        <div className="treatment-name">{treatment.name}</div>
                        <div className="treatment-tagline">{treatment.tagline}</div>
                    </div>
                </div>

                <div className="treatment-badges">
                    {treatment.badge ? (
                        <span
                            className={`badge ${treatment.badgeType === "new"
                                ? "badge-new"
                                : "badge-pop"
                                }`}
                        >
                            {treatment.badge}
                        </span>
                    ) : null}
                </div>

                <span className="treatment-chevron">{isOpen ? "▲" : "▼"}</span>
            </button>

            <div
                className="treatment-body"
                style={{ maxHeight: isOpen ? "5000px" : "0px" }}
            >
                <div className="treatment-body-inner">
                    {treatment.introText ? (
                        <p className="body-copy intro-copy">{treatment.introText}</p>
                    ) : null}

                    {treatment.etapas?.length ? (
                        <div className="etapas">
                            {treatment.etapas.map((etapa) => (
                                <div key={`${treatment.id}-${etapa.num}`} className="etapa">
                                    <div className="etapa-num">{etapa.num}</div>
                                    <div className="etapa-content">
                                        <h4>{etapa.title}</h4>
                                        <p>{etapa.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}

                    {treatment.descriptionBlocks?.length ? (
                        <div className="body-grid">
                            {treatment.descriptionBlocks.map((block) => (
                                <div key={`${treatment.id}-${block.title}`} className="body-block">
                                    <h4>{block.title}</h4>
                                    <div className="body-copy">
                                        {formatRichText(block.text)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}

                    <TreatmentGallery
                        treatmentId={treatment.id}
                        gallery={treatment.gallery}
                    />

                    <TreatmentMediaCard media={treatment.media} />

                    {treatment.tags?.length ? (
                        <div className="body-tags">
                            {treatment.tags.map((tag) => (
                                <span key={`${treatment.id}-${tag}`} className="body-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    ) : null}

                    {treatment.note ? (
                        <div className="notice-box">{treatment.note}</div>
                    ) : null}

                    <PriceTable prices={treatment.prices} />

                    {treatment.ctaPrimary ? (
                        <div className="treatment-cta">
                            <Button href={treatment.ctaPrimary.href} variant="gold">
                                {treatment.ctaPrimary.label}
                            </Button>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
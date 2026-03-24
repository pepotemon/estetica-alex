"use client";

import React from "react";
import DepilacionTable from "./DepilacionTable";
import TreatmentCard from "./TreatmentCard";
import Button from "./Button";
import type { TabConfig, TabId } from "./types";
import { waLink } from "./content";

function DepGallery({
    depGender,
}: {
    depGender: "mujer" | "hombre";
}) {
    const initialImages =
        depGender === "mujer"
            ? [
                {
                    src: "/tratamientos/depilacion/mujer-1.jpg",
                    alt: "Depilación láser mujer · imagen 1",
                },
                {
                    src: "/tratamientos/depilacion/mujer-2.jpg",
                    alt: "Depilación láser mujer · imagen 2",
                },
            ]
            : [
                {
                    src: "/tratamientos/depilacion/hombre-1.jpg",
                    alt: "Depilación láser hombre · imagen 1",
                },
                {
                    src: "/tratamientos/depilacion/hombre-2.jpg",
                    alt: "Depilación láser hombre · imagen 2",
                },
            ];

    const [visibleImages, setVisibleImages] = React.useState(initialImages);

    React.useEffect(() => {
        setVisibleImages(initialImages);
    }, [depGender]);

    if (!visibleImages.length) return null;

    return (
        <div className="treatment-gallery-wrap">
            <div className="treatment-gallery-head">
                <h4>Galería del tratamiento</h4>
                <span>
                    {depGender === "mujer"
                        ? "Depilación láser · Mujer"
                        : "Depilación láser · Hombre"}
                </span>
            </div>

            <div className="treatment-gallery">
                {visibleImages.map((image, index) => (
                    <a
                        key={`${depGender}-${image.src}-${index}`}
                        href={image.src}
                        target="_blank"
                        rel="noreferrer"
                        className="treatment-gallery-card"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
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

export default function CatalogSection({
    id,
    tabs,
    activeTab,
    activeTabData,
    openTreatmentId,
    depGender,
    depRows,
    onSwitchTab,
    onToggleTreatment,
    onChangeDepGender,
}: {
    id: string;
    tabs: TabConfig[];
    activeTab: TabId;
    activeTabData: TabConfig;
    openTreatmentId: string | null;
    depGender: "mujer" | "hombre";
    depRows: readonly (readonly [string, string])[];
    onSwitchTab: (id: TabId) => void;
    onToggleTreatment: (id: string) => void;
    onChangeDepGender: (value: "mujer" | "hombre") => void;
}) {
    return (
        <section className="catalog-section" id={id}>
            <div className="catalog-header">
                <span className="tag">Catálogo completo 2025</span>
                <h2>Todos nuestros tratamientos</h2>
            </div>

            <div className="cat-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        className={`cat-tab ${activeTab === tab.id ? "active" : ""}`}
                        onClick={() => onSwitchTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="cat-intro">
                <div className="cat-intro-icon">{activeTabData.introIcon}</div>
                <div>
                    <h3>{activeTabData.introTitle}</h3>
                    <p>{activeTabData.introText}</p>
                </div>
            </div>

            {activeTabData.custom === "depilacion" ? (
                <>
                    <p className="body-copy intro-copy">
                        Nuestra depilación láser avanzada está diseñada para trabajar con
                        seguridad, confort y eficacia en distintas zonas del cuerpo, tanto
                        en mujer como en hombre.
                    </p>

                    <DepGallery depGender={depGender} />

                    <div className="dep-toggle">
                        <button
                            type="button"
                            className={depGender === "mujer" ? "active" : "inactive"}
                            onClick={() => onChangeDepGender("mujer")}
                        >
                            ♀ Mujer
                        </button>
                        <button
                            type="button"
                            className={depGender === "hombre" ? "active" : "inactive"}
                            onClick={() => onChangeDepGender("hombre")}
                        >
                            ♂ Hombre
                        </button>
                    </div>

                    <DepilacionTable rows={depRows} />

                    <div className="notice-box">
                        💳 <strong style={{ color: "var(--gold)" }}>Bonos con descuento:</strong>{" "}
                        Disponemos de bonos de 6 y 10 sesiones con precio especial en todas
                        las zonas. Consúltanos por WhatsApp y te preparamos tu presupuesto
                        personalizado.
                    </div>

                    <div className="treatment-cta">
                        <Button
                            href={waLink(
                                "Hola! Quiero consultar precio de bono de depilación láser para mi zona."
                            )}
                            variant="gold"
                        >
                            📲 Consultar bono personalizado
                        </Button>
                    </div>
                </>
            ) : (
                <div className="treatment-list">
                    {activeTabData.treatments?.map((treatment) => (
                        <TreatmentCard
                            key={treatment.id}
                            treatment={treatment}
                            isOpen={openTreatmentId === treatment.id}
                            onToggle={() => onToggleTreatment(treatment.id)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
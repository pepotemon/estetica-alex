"use client";

import React from "react";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

import "./servicios.css";

import Header from "@/components/servicios/Header";
import PromoBar from "@/components/servicios/PromoBar";

import QuizSection from "@/components/servicios/QuizSection";
import CatalogSection from "@/components/servicios/CatalogSection";
import TestimonialsSection from "@/components/servicios/TestimonialsSection";
import FinalCTA from "@/components/servicios/FinalCTA";
import Footer from "@/components/servicios/Footer";

import {
    SITE,
    QUIZ_DATA,
    TABS,
    DEPILACION_HOMBRE,
    DEPILACION_MUJER,
    TESTIMONIALS,
    getMonthlyPromo,
    waLink,
} from "@/components/servicios/content";
import type { QuizKey, TabId } from "@/components/servicios/types";

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

export default function ServiciosPage() {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState<TabId>("cuerpo");
    const [openTreatmentId, setOpenTreatmentId] = React.useState<string | null>(null);
    const [quizKey, setQuizKey] = React.useState<QuizKey | null>(null);
    const [depGender, setDepGender] = React.useState<"mujer" | "hombre">("mujer");

    const activeQuiz = quizKey ? QUIZ_DATA[quizKey] : null;
    const activeTabData = TABS.find((tab) => tab.id === activeTab)!;

    const whatsappGeneral = waLink(
        `Hola! Quiero información de tratamientos en ${SITE.brand} (precios y disponibilidad).`
    );

    const promoText = getMonthlyPromo();

    function switchTab(id: TabId) {
        setActiveTab(id);
        setOpenTreatmentId(null);
    }

    function selectQuiz(key: QuizKey) {
        setQuizKey(key);
        setActiveTab(QUIZ_DATA[key].tab);
        setOpenTreatmentId(null);

        requestAnimationFrame(() => {
            const el = document.getElementById("objetivo");
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });
    }

    return (
        <main
            className={`${cormorant.variable} ${dmSans.variable} min-h-screen bg-black text-white`}
        >
            <div className="pointer-events-none fixed inset-0 -z-30">
                <div className="absolute inset-0 bg-[radial-gradient(1000px_650px_at_20%_10%,rgba(255,215,128,0.10),transparent_60%),radial-gradient(900px_520px_at_80%_20%,rgba(255,215,128,0.06),transparent_55%),radial-gradient(900px_650px_at_50%_85%,rgba(255,215,128,0.05),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.96))]" />
            </div>

            <div className="sticky top-0 z-50">
                <PromoBar promoText={promoText} displayPhone={SITE.displayPhone} />
                <Header
                    site={SITE}
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                    whatsappGeneral={whatsappGeneral}
                />
            </div>



            <QuizSection
                id="quiz"
                quizData={QUIZ_DATA}
                quizKey={quizKey}
                activeQuiz={activeQuiz}
                onSelectQuiz={selectQuiz}
                onViewTreatments={() => {
                    if (!activeQuiz) return;
                    switchTab(activeQuiz.tab);
                    document.getElementById("catalogo")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }}
            />

            <CatalogSection
                id="catalogo"
                tabs={TABS}
                activeTab={activeTab}
                activeTabData={activeTabData}
                openTreatmentId={openTreatmentId}
                depGender={depGender}
                depRows={depGender === "mujer" ? DEPILACION_MUJER : DEPILACION_HOMBRE}
                onSwitchTab={switchTab}
                onToggleTreatment={(id) =>
                    setOpenTreatmentId((prev) => (prev === id ? null : id))
                }
                onChangeDepGender={setDepGender}
            />

            <TestimonialsSection testimonials={TESTIMONIALS} />

            <FinalCTA
                phone={SITE.phone}
                displayPhone={SITE.displayPhone}
            />

            <Footer
                site={SITE}
                tabs={TABS}
                onSwitchTab={(id) => {
                    switchTab(id);
                    document.getElementById("catalogo")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }}
            />
        </main>
    );
}
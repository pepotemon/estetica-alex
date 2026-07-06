import type {
    QuizKey,
    SiteConfig,
    TabConfig,
    TabId,
} from "./types";

function galleryFor(treatmentId: string, label: string) {
    return [
        { src: `/tratamientos/${treatmentId}/1.jpg`, alt: `${label} · imagen 1` },
        { src: `/tratamientos/${treatmentId}/2.jpg`, alt: `${label} · imagen 2` },
        { src: `/tratamientos/${treatmentId}/3.jpg`, alt: `${label} · imagen 3` },
        { src: `/tratamientos/${treatmentId}/4.jpg`, alt: `${label} · imagen 4` },
    ];
}

export const SITE: SiteConfig = {
    brand: "Alex Estética",
    city: "Gran Canaria",
    phone: "34661026192",
    displayPhone: "661 026 192",
    logoSrc: "/alex-logo.png",
    tratamientosHeroImg: "/tratamientos-hero.jpg",
    catalogoHeroImg: "/hero-catalogo.jpg",
    ctaLabel: "Agendar Cita por WhatsApp",
    address: "Av. Canarias 450, Bloque B, Local 3",
    locality: "Vecindario",
    mapsUrl:
        "https://www.google.com/maps?q=Av.%20Canarias%20450,%20Bloque%20B,%20Local%203,%20Vecindario",
    hours: "Lun–Vier · 9:00–13:00 y 16:00–20:00 | Sab · 9:00–13:00",
};

export function waLink(text: string) {
    return `https://wa.me/${SITE.phone}?text=${encodeURIComponent(text)}`;
}

export function telLink() {
    return `tel:+${SITE.phone}`;
}

export function getMonthlyPromo() {
    const promos = {
        0: "ENERO: Tratamientos corporales con 15% de descuento",
        1: "FEBRERO: Pack Mirada Completa con regalo especial",
        2: "MARZO: 10% en depilación láser por zonas completas",
        3: "ABRIL: Bono EMS Sculpt con sesión extra gratuita",
        4: "🌹 MAYO: ¡Para todas las mamás! 10% de descuento en Indiba Facial y Limpieza Facial",
        5: "JUNIO: Criolipólisis con consulta gratuita",
        6: "JULIO: Depilación láser piernas + axilas promo verano",
        7: "AGOSTO: Facial premium con vitamina C regalo",
        8: "SEPTIEMBRE: Remodelación corporal con descuento",
        9: "OCTUBRE: Indiba facial pack rejuvenecimiento",
        10: "NOVIEMBRE: Bono 10 sesiones Criolipólisis -20%",
        11: "DICIEMBRE: Pack Mirada Completa edición Navidad",
    } as const;

    return promos[new Date().getMonth() as keyof typeof promos];
}

export const QUIZ_DATA: Record<
    QuizKey,
    { icon: string; label: string; text: string; tab: TabId; link: string }
> = {
    grasa: {
        icon: "🔥",
        label: "Eliminar grasa localizada",
        text: 'Para eliminar grasa localizada te recomendamos la "Criolipólisis" o el protocolo combinado "Masaje Moldeador + Cavitación + Radiofrecuencia + Vacumterapia".',
        tab: "cuerpo",
        link: waLink("Hola! Quiero eliminar grasa localizada. ¿Qué me recomendáis?"),
    },
    tonificar: {
        icon: "💪",
        label: "Tonificar y definir músculo",
        text: 'Para tonificar y definir músculo, el tratamiento ideal es "EMS Sculpt". También podemos combinarlo con "Diatermia Indiba" para reafirmar el contorno.',
        tab: "cuerpo",
        link: waLink("Hola! Quiero tonificar y definir músculo. ¿Qué me recomendáis?"),
    },
    postqx: {
        icon: "🌿",
        label: "Drenaje linfático postoperatorio",
        text: "Tenemos un protocolo postquirúrgico en 3 etapas adaptado a tu cirugía y evolución, desde drenaje inicial hasta mantenimiento final con Indiba.",
        tab: "recuperacion",
        link: waLink("Hola! Acabo de operarme y necesito orientación para el postoperatorio."),
    },
    piel: {
        icon: "✨",
        label: "Mejorar mi piel y rostro",
        text: 'Para mejorar tu piel y rostro trabajamos desde "Limpieza Facial Profunda" hasta "Radiofrecuencia Fraccionada con Nano Agujas" e "Indiba Facial".',
        tab: "rostro",
        link: waLink("Hola! Quiero mejorar mi piel. ¿Qué tratamiento me recomendáis?"),
    },
    depilacion: {
        icon: "⚡",
        label: "Depilación definitiva",
        text: "Nuestro láser diodo Soprano Ice Trionda trata distintos tipos de piel y vello con eficacia, rapidez y mayor confort.",
        tab: "depilacion",
        link: waLink("Hola! Quiero información sobre depilación láser. ¿Cuáles son los precios?"),
    },
    cejas: {
        icon: "👁",
        label: "Diseño de cejas y mirada",
        text: "Para cejas y mirada tenemos depilación con hilo, tinte híbrido, laminado de cejas, lifting de pestañas y pack mirada completa.",
        tab: "cejas",
        link: waLink("Hola! Quiero información sobre cejas y pestañas."),
    },
    anticelulitico: {
        icon: "🍊",
        label: "Tratar la celulitis",
        text: 'Para celulitis recomendamos especialmente "Masaje Moldeador + Cavitación + RF + Vacumterapia" o "Masaje Manual + Vacum Rotation + Cavitación o Radiofrecuencia".',
        tab: "cuerpo",
        link: waLink("Hola! Quiero información para tratar la celulitis."),
    },
    remodelacion: {
        icon: "🔷",
        label: "Remodelación corporal",
        text: 'Para remodelar la figura destacan "Masaje Manual + Vacum Rotation + Cavitación o Radiofrecuencia" y el protocolo con "Diatermia Indiba".',
        tab: "cuerpo",
        link: waLink("Hola! Quiero información para remodelación corporal."),
    },
    flacidez: {
        icon: "🌟",
        label: "Combatir la flacidez",
        text: 'Para la flacidez corporal, nuestros tratamientos estrella son "Masaje Moldeador con Diatermia Indiba" y "EMS Sculpt".',
        tab: "cuerpo",
        link: waLink("Hola! Quiero información para tratar la flacidez corporal."),
    },
    masajes: {
        icon: "🤲",
        label: "Relajación y bienestar",
        text: "Tenemos una selección completa de masajes: relajantes, terapéuticos, con Indiba, prenatales y reflexología. Cuéntanos qué necesitas y te orientamos.",
        tab: "masajes",
        link: waLink("Hola! Quiero información sobre los masajes disponibles."),
    },
};

export const TABS: TabConfig[] = [
    {
        id: "cuerpo",
        label: "01 · Cuerpo",
        introIcon: "🔥",
        introTitle: "Tratamientos Corporales",
        introText:
            "Reducción de grasa, moldeo de figura y reafirmación de la piel con la tecnología más avanzada. Protocolos personalizados según tu objetivo y tipo de cuerpo.",
        treatments: [
            {
                id: "masaje-indiba",
                icon: "⚡",
                name: "Masaje Moldeador con Diatermia Indiba",
                tagline: "La tecnología más avanzada para reducir volumen en profundidad",
                badge: "🏆 Premium",
                badgeType: "pop",
                gallery: galleryFor("masaje-indiba", "Masaje Moldeador con Diatermia Indiba"),
                descriptionBlocks: [
                    {
                        title: "¿Qué hace en tu cuerpo?",
                        text: "Indiba emite radiofrecuencia a 448 kHz, la única frecuencia con evidencia clínica publicada. Activa el metabolismo celular, mejora la microcirculación y estimula la regeneración tisular a tres niveles. Es la tecnología usada por equipos médicos y deportivos de élite a nivel mundial. Reduce volumen y mejora la calidad de la piel de forma visible y duradera.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para personas que buscan resultados superiores y más duraderos. Especialmente eficaz en celulitis grado III-IV, flacidez y redistribución de volumen. También indicada para deportistas en recuperación muscular activa. Los resultados son notablemente superiores a la radiofrecuencia convencional.",
                    },
                    {
                        title: "⚠️ Contraindicaciones",
                        text: "Marcapasos o dispositivos electrónicos implantados · Implantes metálicos en la zona · Embarazo · Cáncer activo · Trombosis · Heridas abiertas o infecciones · Fiebre alta.",
                    },
                ],
                tags: [
                    "⏱ 1 hora",
                    "🔁 6–10 sesiones recomendadas",
                    "📅 1–2 veces por semana",
                    "✅ Sin recuperación",
                    "🏅 Evidencia clínica publicada",
                ],
                prices: [
                    { label: "Sesión individual", amount: "€40", per: "por sesión" },
                    { label: "Bono 5 sesiones", amount: "€175", per: "€35 / sesión", save: "Ahorras €25" },
                    { label: "Bono 10 sesiones", amount: "€300", per: "€30 / sesión", save: "Ahorras €100", featured: true },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información del Masaje Moldeador con Diatermia Indiba."),
                },
            },
            {
                id: "diatermia-indiba-cap-res",
                icon: "⚡",
                name: "Diatermia Indiba Capacitiva y Resistiva",
                tagline: "La combinación más completa de Indiba para reafirmar, drenar y remodelar",
                badge: "✨ Nuevo",
                badgeType: "new",
                gallery: galleryFor("diatermia-indiba-cap-res", "Diatermia Indiba Capacitiva y Resistiva"),
                descriptionBlocks: [
                    {
                        title: "¿Qué hace en tu cuerpo?",
                        text: "Combina los dos modos de radiofrecuencia Indiba: el modo capacitivo, que actúa en las capas superficiales activando la circulación y la oxigenación de los tejidos, y el modo resistivo, que llega a capas más profundas estimulando el metabolismo celular y la producción de colágeno. Esta combinación intensifica el efecto reafirmante y remodelador.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para quienes buscan un tratamiento corporal completo que une efecto reafirmante, drenante y remodelador en una sola sesión. Especialmente útil en flacidez, retención de líquidos y mejora de la calidad de la piel.",
                    },
                    {
                        title: "⚠️ Contraindicaciones",
                        text: "Marcapasos o dispositivos electrónicos implantados · Implantes metálicos en la zona · Embarazo · Cáncer activo · Trombosis · Heridas abiertas o infecciones · Fiebre alta.",
                    },
                ],
                tags: [
                    "⏱ 1 hora",
                    "🔁 6–10 sesiones recomendadas",
                    "📅 1–2 veces por semana",
                    "✅ Sin recuperación",
                    "🏅 Tecnología Indiba 448 kHz",
                ],
                prices: [
                    { label: "Sesión individual", amount: "€40", per: "por sesión" },
                    { label: "Bono 5 sesiones", amount: "€190", per: "€38 / sesión", save: "Ahorras €10" },
                    { label: "Bono 10 sesiones", amount: "€350", per: "€35 / sesión", save: "Ahorras €50", featured: true },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información de la Diatermia Indiba Capacitiva y Resistiva."),
                },
            },
            {
                id: "combo-4",
                icon: "💎",
                name: "Masaje Moldeador + Cavitación + Radiofrecuencia + Vacumterapia",
                tagline: "El protocolo más completo para moldear el cuerpo en una sola sesión",
                badge: "🔥 Más completo",
                badgeType: "pop",
                gallery: galleryFor("combo-4", "Masaje Moldeador + Cavitación + Radiofrecuencia + Vacumterapia"),
                descriptionBlocks: [
                    {
                        title: "¿Qué hace en tu cuerpo?",
                        text: "Cavitación: ondas ultrasónicas que destruyen las membranas de las células grasas desde dentro. La grasa se elimina naturalmente por el sistema linfático.\n\nRadiofrecuencia: reafirma y estimula el colágeno.\n\nVacumterapia: activa el drenaje linfático y rompe la celulitis desde la superficie. Masaje moldeador: integra y potencia los resultados de las tres técnicas anteriores.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para quien quiere resultados visibles y rápidos combinando varias técnicas en una sola sesión. Ideal para grasa localizada + celulitis + flacidez simultáneos. Es el protocolo más demandado del centro por su relación calidad-precio y eficacia combinada.",
                    },
                ],
                tags: [
                    "⏱ 50 min",
                    "🔁 5–10 sesiones recomendadas",
                    "📅 1–2 veces por semana",
                    "✅ Sin recuperación",
                    "💧 Beber 2L agua antes/después",
                ],
                prices: [
                    { label: "Sesión individual", amount: "€35", per: "por sesión" },
                    { label: "Bono 5 sesiones", amount: "€160", per: "€32 / sesión", save: "Ahorras €15" },
                    { label: "Bono 10 sesiones", amount: "€280", per: "€28 / sesión", save: "Ahorras €70", featured: true },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información del tratamiento combinado Cavitación + RF + Vacumterapia."),
                },
            },
            {
                id: "criolipolisis",
                icon: "❄️",
                name: "Criolipólisis",
                tagline: "Elimina la grasa localizada para siempre con frío controlado. Sin cirugía.",
                badge: "⭐ Top ventas",
                badgeType: "pop",
                gallery: galleryFor("criolipolisis", "Criolipólisis"),
                descriptionBlocks: [
                    {
                        title: "¿Qué hace en tu cuerpo?",
                        text: "Las células grasas son 3 veces más sensibles al frío que las células de la piel. El aparato aplica frío controlado (-10°C) de forma precisa sobre la zona a tratar, cristalizando y destruyendo las células de grasa de forma selectiva y permanente. El organismo las elimina de forma natural en 6–12 semanas. Sin anestesia, sin incisiones, sin tiempo de recuperación.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para grasa localizada resistente a la dieta y el ejercicio: michelines, cartucheras, grasa abdominal baja, papada, brazos. No es un tratamiento para adelgazar en general, sino para eliminar depósitos grasos concretos. Resultados visibles en 6–12 semanas tras cada sesión. Una sola sesión puede ser suficiente en muchos casos.",
                    },
                ],
                tags: [
                    "⏱ 50 min por zona",
                    "🔁 1–3 sesiones recomendadas por zona",
                    "❄️ Resultados en 6–12 semanas",
                    "✅ Sin recuperación",
                    "📍 Abdomen, cartucheras, papada, brazos, espalda",
                ],
                note:
                    "⚠️ Importante: El tratamiento se aplica con 2 cabezales por zona para cubrir toda el área de forma homogénea. El precio de cabezal único (zonas pequeñas): €40.",
                prices: [
                    { label: "1 zona (2 cabezales)", amount: "€90", per: "por sesión" },
                    { label: "2 zonas (mismo día)", amount: "€150", per: "€75 / zona", save: "Ahorras €30", featured: true },
                    { label: "Bono 3 sesiones (misma zona)", amount: "€210", per: "€70 / sesión", save: "Ahorras €60" },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre Criolipólisis en Alex Estética."),
                },
            },
            {
                id: "ems-sculpt",
                icon: "💪",
                name: "EMS Sculpt",
                tagline: "20.000 contracciones en 30 minutos. Define músculo mientras elimina grasa.",
                badge: "🚀 Alta tecnología",
                badgeType: "new",
                gallery: galleryFor("ems-sculpt", "EMS Sculpt"),
                descriptionBlocks: [
                    {
                        title: "¿Qué hace en tu cuerpo?",
                        text: "La estimulación muscular electromagnética de alta intensidad (HIFEM) genera contracciones musculares supramáximas imposibles de lograr voluntariamente. Cada sesión de 30 minutos equivale a más de 20.000 contracciones musculares intensas. El resultado: aumento de la masa muscular, definición, y reducción simultánea de la grasa del área tratada. El tratamiento más avanzado para esculpir el cuerpo sin cirugía.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para personas que quieren tonificar y definir sin pasar horas en el gimnasio. Especialmente eficaz en abdomen, glúteos, muslos y brazos. También indicado como complemento del entrenamiento deportivo o como solución para músculo flácido post-adelgazamiento. Resultados visibles a partir de la 3.ª–4.ª sesión.",
                    },
                ],
                tags: [
                    "⏱ 30 min por zona",
                    "🔁 6–10 sesiones recomendadas",
                    "📅 1–2 veces por semana",
                    "✅ Sin recuperación",
                    "💪 +16% músculo demostrado",
                ],
                prices: [
                    { label: "Sesión individual", amount: "€30", per: "por sesión / zona" },
                    { label: "6 sesiones", amount: "€150", per: "€25 / sesión", save: "Ahorras €30", featured: true },
                    { label: "10 sesiones", amount: "Consultar", per: "precio especial" },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre EMS Sculpt en Alex Estética."),
                },
            },
            {
                id: "vacum-rotation",
                icon: "🔄",
                name: "Vacuum Rotation + Radiofrecuencia",
                tagline: "Protocolo anticelulítico y remodelador de alta intensidad en 50 minutos",
                badge: "⭐ Más demandado",
                badgeType: "pop",
                gallery: galleryFor("vacum-rotation", "Vacuum Rotation + Radiofrecuencia"),
                descriptionBlocks: [
                    {
                        title: "¿Qué hace en tu cuerpo?",
                        text: "Combina la succión mecánica del vacuum rotation, que moviliza la grasa localizada y mejora el drenaje linfático, con el calor profundo de la radiofrecuencia, que estimula la producción de colágeno y reafirma la piel. Juntos activan la circulación, reducen la celulitis y remodelan la silueta.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para personas con celulitis, piel flácida o irregular, y quienes buscan un efecto remodelador y drenante en zonas como abdomen, glúteos, piernas o brazos.",
                    },
                    {
                        title: "⚠️ Contraindicaciones",
                        text: "Marcapasos o dispositivos electrónicos implantados · Implantes metálicos en la zona · Embarazo · Cáncer activo · Trombosis · Heridas abiertas o infecciones · Fiebre alta.",
                    },
                ],
                tags: [
                    "⏱ 50 min",
                    "🔁 5–10 sesiones recomendadas",
                    "📅 1–2 veces por semana",
                    "✅ Sin recuperación",
                    "💧 Hidratación abundante recomendada",
                ],
                prices: [
                    { label: "Sesión individual", amount: "€50", per: "por sesión" },
                    { label: "Bono 5 sesiones", amount: "€200", per: "€40 / sesión", save: "Ahorras €50" },
                    { label: "Bono 10 sesiones", amount: "€340", per: "€34 / sesión", save: "Ahorras €160", featured: true },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información del Vacuum Rotation + Radiofrecuencia."),
                },
            },
        ],
    },
    {
        id: "recuperacion",
        label: "02 · Pre y Postoperatorio",
        introIcon: "🌿",
        introTitle: "Pre y Postoperatorio",
        introText:
            "Protocolos especializados para preparar tu cuerpo antes de la cirugía y acompañarte en cada fase de recuperación. Cada etapa está diseñada para optimizar tus resultados y acelerar tu bienestar.",
        treatments: [
            {
                id: "preoperatorio",
                icon: "🌱",
                name: "Tratamiento Preoperatorio — Preparación con Diatermia Indiba",
                tagline:
                    "Prepara tu piel y tus tejidos antes de la cirugía para mejores resultados y recuperación más rápida",
                badge: "✦ Preoperatorio",
                badgeType: "new",
                gallery: galleryFor("preoperatorio", "Tratamiento Preoperatorio"),
                descriptionBlocks: [
                    {
                        title: "¿Por qué preparar la piel antes de operar?",
                        text: "La preparación preoperatoria con Diatermia Indiba (448 kHz) activa el metabolismo celular, mejora la microcirculación y oxigenación de los tejidos, y estimula la síntesis de colágeno. Una piel bien preparada cicatriza mejor, reduce el riesgo de fibrosis post-cirugía y permite una recuperación notablemente más rápida y con menos inflamación.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para cualquier persona que vaya a someterse a una cirugía estética: liposucción, abdominoplastia, mamoplastia, lifting, etc. Se recomienda iniciar el protocolo entre 2 y 4 semanas antes de la intervención. Cuanto mejor preparada esté la piel, mejor será el resultado final de tu cirugía.",
                    },
                ],
                tags: [
                    "⏱ 50 min por sesión",
                    "🔁 5–10 sesiones recomendadas",
                    "📅 1–2 veces por semana",
                    "✅ Sin recuperación",
                    "🏅 Tecnología Indiba 448 kHz",
                ],
                prices: [
                    { label: "Sesión individual", amount: "€40", per: "por sesión" },
                    { label: "Bono 10 sesiones", amount: "€300", per: "€30 / sesión", save: "Ahorras €100", featured: true },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre el tratamiento preoperatorio con Indiba."),
                },
            },
            {
                id: "postoperatorio",
                icon: "🌿",
                name: "Tratamiento Postoperatorio — Protocolo en 3 Etapas",
                tagline:
                    "¿Has pasado por una cirugía estética? Te acompañamos en cada fase hasta el resultado definitivo",
                badge: "🌿 Postoperatorio",
                badgeType: "pop",
                gallery: galleryFor("postoperatorio", "Tratamiento Postoperatorio"),
                introText:
                    "¿Has pasado por una cirugía estética? Estas sesiones están especialmente diseñadas para acompañarte en cada fase de recuperación y optimizar tus resultados. Cada etapa se adapta a tu pauta médica y evolución personal.",
                etapas: [
                    {
                        num: "1",
                        title: "Drenaje Postquirúrgico — 1ª Etapa",
                        text: "Primera fase de recuperación. Técnica manual especializada que drena el exceso de líquidos, reduce la inflamación inicial y prepara los tejidos para las siguientes etapas. Se inicia habitualmente a los 2–3 días de la intervención según pauta médica.",
                    },
                    {
                        num: "2",
                        title: "Masaje Linfático Postquirúrgico con Ultrasonido — 2ª Etapa",
                        text: "Ultrasonido terapéutico que favorece la reabsorción profunda de líquidos, mejora la fibrosis incipiente y acelera la recuperación tisular. Se combina con masaje linfático especializado. Fase intermedia: semanas 2–6 aproximadamente.",
                    },
                    {
                        num: "3",
                        title: "Masaje Linfático Postquirúrgico con Indiba — 3ª Etapa",
                        text: "Fase final con tecnología Indiba de 448 kHz: reafirma la piel, mejora las cicatrices, rompe adherencias y consolida los resultados definitivos de la cirugía estética. La fase más importante para el resultado final.",
                    },
                ],
                note:
                    "📲 Precio personalizado según tu cirugía y evolución. Consúltanos por WhatsApp y te preparamos un presupuesto adaptado a ti.",
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Acabo de operarme y necesito información sobre el tratamiento postquirúrgico."),
                },
            },
            {
                id: "mantenimiento-postop",
                icon: "🌿",
                name: "Mantenimiento Post-3 Meses — Indiba + Masaje Moldeador",
                tagline: "Consolida y mantiene los resultados de tu cirugía a partir del tercer mes",
                badge: "✦ Mantenimiento",
                badgeType: "new",
                gallery: galleryFor("postoperatorio", "Mantenimiento Postoperatorio"),
                descriptionBlocks: [
                    {
                        title: "¿En qué consiste?",
                        text: "A partir de los 3 meses de postoperatorio, este protocolo combina la tecnología Indiba (448 kHz) con masaje moldeador para consolidar y mantener los resultados definitivos de tu cirugía estética. Actúa sobre la calidad de la piel, reafirmación de tejidos y eliminación de adherencias residuales.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para personas a partir del tercer mes postoperatorio que quieren mantener y optimizar sus resultados quirúrgicos a largo plazo. Recomendado 1–2 veces por semana.",
                    },
                ],
                tags: [
                    "⏱ 50 min por sesión",
                    "📅 A partir del 3.er mes postoperatorio",
                    "🔁 1–2 veces por semana",
                    "✅ Sin recuperación",
                    "🏅 Tecnología Indiba 448 kHz",
                ],
                prices: [
                    { label: "Sesión individual", amount: "€45", per: "por sesión" },
                    { label: "Bono 5 sesiones", amount: "€200", per: "€40 / sesión", save: "Ahorras €25" },
                    { label: "Bono 10 sesiones", amount: "€340", per: "€34 / sesión", save: "Ahorras €110", featured: true },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre el Mantenimiento Post-3 Meses con Indiba."),
                },
            },
        ],
    },
    {
        id: "rostro",
        label: "03 · Rostro",
        introIcon: "✨",
        introTitle: "Tratamientos Faciales",
        introText:
            "Protocolos faciales diseñados para hidratar, renovar, iluminar y rejuvenecer la piel con tecnología avanzada y activos seleccionados según cada necesidad.",
        treatments: [
            {
                id: "limpieza-hidratante-indiba",
                icon: "💧",
                name: "Indiba Facial Hidratante",
                tagline: "Hidratación profunda y regeneración celular con tecnología Indiba facial",
                badge: "✨ Hidratante",
                badgeType: "pop",
                gallery: galleryFor("limpieza-hidratante-indiba", "Indiba Facial Hidratante"),
                descriptionBlocks: [
                    {
                        title: "Qué incluye",
                        text: "Indiba facial capacitiva + higiene facial.",
                    },
                    {
                        title: "Descripción",
                        text: "Tratamiento que combina la tecnología Indiba facial capacitiva para activar la regeneración celular en profundidad con higiene facial. Piel más hidratada, luminosa y uniforme desde la primera sesión.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Pieles apagadas, deshidratadas o con falta de luminosidad. Ideal como tratamiento de mantenimiento o inicio de protocolo facial. Apta para todo tipo de piel.",
                    },
                ],
                tags: [
                    "⏱ 1 hora",
                    "📅 Programa recomendado: 6 sesiones",
                    "💧 Hidratación profunda",
                    "✨ Luminosidad inmediata",
                ],
                prices: [
                    { label: "Sesión individual", amount: "€48", per: "por sesión" },
                    { label: "Bono 6 sesiones", amount: "€240", per: "€40 / sesión", save: "Ahorras €48", featured: true },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre el Indiba Facial Hidratante."),
                },
            },
            {
                id: "limpieza-facial-profunda",
                icon: "✨",
                name: "Limpieza Facial Profunda",
                tagline: "Protocolo de 13 pasos para limpiar, exfoliar y regenerar la piel",
                badge: "⭐ Esencial",
                badgeType: "pop",
                gallery: galleryFor("limpieza-facial-profunda", "Limpieza Facial Profunda"),
                descriptionBlocks: [
                    {
                        title: "Qué incluye",
                        text: "Leche limpiadora · Limpiador · Exfoliante · Tónico · Vapor de ozono · Pala ultrasónica · Microdermoabrasión · Mascarilla calmante · Alta frecuencia · Mascarilla hidratante · Máscara LED · Masaje facial · Protección solar.",
                    },
                    {
                        title: "Descripción",
                        text: "Protocolo de 13 pasos que limpia, exfolia y regenera la piel en profundidad. La microdermoabrasión renueva la superficie, la alta frecuencia oxigena y controla la bacteria, y la máscara LED potencia la recuperación celular. Finaliza con masaje facial y protección solar. Ideal para pieles mixtas, grasas o con tendencia acneica.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Pieles mixtas, grasas, con tendencia acneica o congestionadas. Se recomienda cada 4–6 semanas. Perfecta como tratamiento base antes de protocolos más avanzados.",
                    },
                ],
                tags: [
                    "⏱ 1 hora 20 min",
                    "📅 Cada 4–6 semanas",
                    "🧼 Limpieza profunda",
                    "✅ Ideal como base de protocolo",
                ],
                prices: [
                    { label: "Sesión individual", amount: "€60", per: "por sesión", featured: true },
                ],
                media: {
                    type: "instagram",
                    url: "https://www.instagram.com/reel/DH7Ui9tq9mB/?igsh=MWY3bGpnZmNrNXl6dw==",
                    thumbnail: "/tratamientos/limpieza-facial-profunda/reel-cover.jpg",
                    label: "Ver resultado real",
                    title: "Resultado real de Limpieza Facial Profunda",
                },
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre la Limpieza Facial Profunda."),
                },
            },
            {
                id: "derma-pen-punta-diamante",
                icon: "🖊️",
                name: "Derma Pen + Punta de Diamante",
                tagline: "Renovación, nutrición e hidratación intensa con activos personalizados",
                badge: "💎 Personalizable",
                badgeType: "new",
                gallery: galleryFor("derma-pen-punta-diamante", "Derma Pen + Punta de Diamante"),
                descriptionBlocks: [
                    {
                        title: "Qué incluye",
                        text: "Microdermoabrasión + activos inyectados a elegir.",
                    },
                    {
                        title: "Descripción",
                        text: "La punta de diamante exfolia la superficie y abre microcanales para que el Derma Pen introduzca activos directamente en la dermis. El cóctel se personaliza según las necesidades de cada piel.",
                    },
                    {
                        title: "Opciones de activo",
                        text: "💧 Ácido Hialurónico — efecto relleno e hidratación profunda · ☀️ Vitamina C — iluminación y tratamiento de manchas · 🔬 Exosomas — regeneración celular avanzada · 💊 Cóctel de Vitaminas — nutrición intensiva y revitalización.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Cualquier piel que necesite renovación, hidratación o nutrición intensiva. El protocolo se adapta según el activo elegido.",
                    },
                ],
                tags: [
                    "⏱ 60 min",
                    "🔁 3 sesiones recomendadas",
                    "💧 Activos personalizados",
                    "✨ Renovación intensiva",
                ],
                prices: [
                    { label: "Con cóctel de vitaminas", amount: "€60" },
                    { label: "Con exosomas", amount: "€65" },
                    { label: "Bono 3 sesiones", amount: "€160", per: "precio especial", save: "Ahorro en pack", featured: true },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre Derma Pen + Punta de Diamante."),
                },
            },
            {
                id: "indiba-facial-dermoabrasion",
                icon: "⚡",
                name: "Indiba Facial + Dermoabrasión",
                tagline: "Rejuvenecimiento, luminosidad y efecto tensor progresivo",
                badge: "🏅 Reafirmante",
                badgeType: "pop",
                gallery: galleryFor("indiba-facial-dermoabrasion", "Indiba Facial + Dermoabrasión"),
                descriptionBlocks: [
                    {
                        title: "Qué incluye",
                        text: "Higienización + Microdermoabrasión + Indiba 448 kHz + Sérum adaptado + Protector solar.",
                    },
                    {
                        title: "Descripción",
                        text: "Protocolo completo de rejuvenecimiento. La Indiba a 448 kHz estimula el colágeno, reafirma los tejidos y mejora la microcirculación desde las capas más profundas. Efecto lifting natural y progresivo con el sérum adaptado a cada tipo de piel.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Pieles con pérdida de firmeza, flacidez facial incipiente, surcos de expresión o piel apagada que busca luminosidad y efecto tensor.",
                    },
                ],
                tags: [
                    "⏱ 1 hora",
                    "🔁 Programa recomendado: 6 sesiones",
                    "📅 1 vez por semana",
                    "✨ Efecto lifting progresivo",
                ],
                prices: [
                    { label: "Sesión individual", amount: "€50", per: "por sesión" },
                    { label: "Bono 6 sesiones", amount: "€240", per: "€40 / sesión", save: "Ahorras €60", featured: true },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre Indiba Facial + Dermoabrasión."),
                },
            },
            {
                id: "hidralips",
                icon: "💋",
                name: "Hidralips",
                tagline: "Hidratación profunda y definición natural para tus labios",
                badge: "💄 Labios",
                badgeType: "new",
                gallery: galleryFor("hidralips", "Hidralips"),
                descriptionBlocks: [
                    {
                        title: "Descripción",
                        text: "Tratamiento especializado para labios que aporta hidratación profunda, mejora la definición del contorno y devuelve el volumen y la luminosidad natural. Resultado: labios hidratados, suaves y con un aspecto naturalmente más llenos sin relleno invasivo.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Labios deshidratados, apagados, con líneas de expresión alrededor o para quienes desean mejorar su aspecto de forma natural y no invasiva.",
                    },
                ],
                tags: [
                    "⏱ Sesión rápida",
                    "✅ No invasivo",
                    "💋 Hidratación profunda",
                    "✨ Acabado natural",
                ],
                prices: [
                    { label: "Sesión individual", amount: "€35", per: "por sesión" },
                    { label: "Bono 3 sesiones", amount: "€90", per: "€30 / sesión", save: "Ahorras €15", featured: true },
                ],
                media: {
                    type: "instagram",
                    url: "https://www.instagram.com/reel/DILiBfqqyjh/?igsh=MWd4Njh3Mm1obDFxNA==",
                    thumbnail: "/tratamientos/hidralips/reel-cover.jpg",
                    label: "Ver resultado real",
                    title: "Resultado real de Hidralips",
                },
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre Hidralips."),
                },
            },
            {
                id: "carbon-peel",
                icon: "🖤",
                name: "Carbón Peel",
                tagline: "Reduce poros, controla grasa y deja un efecto piel de porcelana",
                badge: "✨ Glow",
                badgeType: "pop",
                gallery: galleryFor("carbon-peel", "Carbón Peel"),
                descriptionBlocks: [
                    {
                        title: "Descripción",
                        text: "Se aplica carbón activado sobre la piel y el láser lo activa, generando una microexplosión controlada que elimina el exceso de sebo, reduce los poros dilatados, controla el brillo y unifica el tono. Efecto «piel de porcelana» visible desde la primera sesión.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Pieles grasas, con poros dilatados, tono irregular o manchas leves. También como tratamiento de mantenimiento de luminosidad.",
                    },
                ],
                tags: [
                    "⏱ 40 min",
                    "🔁 3 sesiones recomendadas",
                    "✅ Sin recuperación",
                    "🖤 Efecto piel de porcelana",
                ],
                prices: [
                    { label: "Sesión individual", amount: "€60", per: "por sesión" },
                    { label: "Bono 3 sesiones", amount: "€150", per: "€50 / sesión", save: "Ahorras €30", featured: true },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre Carbón Peel."),
                },
            },
            {
                id: "rf-fraccionada-nano-agujas",
                icon: "🎯",
                name: "Radiofrecuencia Fraccionada con Nano Agujas",
                tagline: "Estimulación intensiva de colágeno con activos en profundidad",
                badge: "🔬 Avanzado",
                badgeType: "pop",
                gallery: galleryFor("rf-fraccionada-nano-agujas", "Radiofrecuencia Fraccionada con Nano Agujas"),
                descriptionBlocks: [
                    {
                        title: "Activos disponibles",
                        text: "Oligoelementos · Exosomas · Polivitaminas.",
                    },
                    {
                        title: "Descripción",
                        text: "Las nano agujas crean microcanales en la piel que llevan la radiofrecuencia fraccionada a la profundidad exacta, estimulando colágeno y elastina de forma intensiva. Simultáneamente se introducen activos directamente en la dermis según las necesidades de cada piel.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Pieles con arrugas, pérdida de firmeza, cicatrices de acné, poros dilatados o textura irregular.",
                    },
                ],
                tags: [
                    "⏱ 40 min",
                    "🔁 3 sesiones recomendadas",
                    "📅 1 sesión cada 21 días",
                    "✨ Colágeno y elastina",
                ],
                prices: [
                    { label: "Sesión individual", amount: "€60", per: "por sesión" },
                    { label: "Bono 3 sesiones", amount: "€150", per: "€50 / sesión", save: "Ahorras €30", featured: true },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre Radiofrecuencia Fraccionada con Nano Agujas."),
                },
            },
        ],
    },
    {
        id: "laser-avanzado",
        label: "04 · Láser Avanzado",
        introIcon: "🎯",
        introTitle: "Láser Avanzado",
        introText:
            "Tecnología láser picosegundo de última generación para eliminación de tatuajes. Especializado en tinta negra. Duración variable según el tatuaje. Recomendadas 5–8 sesiones, una vez cada mes y medio.",
        treatments: [
            {
                id: "laser-picosegundo",
                icon: "◉",
                name: "Eliminación de Tatuajes con Láser Picosegundo",
                tagline: "Eliminación de tatuajes con tecnología picosegundo · Especializado en tinta negra",
                badge: "🔬 Picosegundo",
                badgeType: "pop",
                gallery: galleryFor("laser-picosegundo", "Eliminación de Tatuajes con Láser Picosegundo"),
                descriptionBlocks: [
                    {
                        title: "¿Cómo funciona?",
                        text: "El láser picosegundo emite pulsos de energía 100 veces más cortos que el láser Q-Switch convencional. Esto fragmenta el pigmento del tatuaje en micropartículas mínimas que el organismo puede eliminar con mayor facilidad. Resultado: eliminación más completa en menos sesiones, con menor riesgo de hiperpigmentación y mínima molestia.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para cualquier persona que quiera eliminar total o parcialmente un tatuaje de tinta negra. El láser picosegundo es apto para todo tipo de piel. El número de sesiones depende del tamaño, antigüedad y profundidad de la tinta. Consulta valoración gratuita sin compromiso.",
                    },
                ],
                tags: [
                    "⏱ Variable según tamaño del tatuaje",
                    "🔁 5–8 sesiones recomendadas",
                    "📅 Una vez cada mes y medio",
                    "🖤 Especializado en tinta negra",
                    "✅ Apto para todo tipo de piel",
                ],
                note:
                    "El precio se establece de forma personalizada según el tamaño, número de colores y zona del tatuaje. Solicita una valoración gratuita sin compromiso.",
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero valoración gratuita para eliminar un tatuaje con láser picosegundo."),
                },
            },
        ],
    },
    {
        id: "depilacion",
        label: "05 · Depilación Láser",
        introIcon: "⚡",
        introTitle: "Depilación Láser Diodo — Soprano & Trionda",
        introText:
            "La mejor tecnología del mercado. Nuestro sistema Soprano Ice Trionda combina 3 longitudes de onda simultáneas (755nm + 808nm + 1064nm) para tratar distintos tipos de vello y piel con eficacia y confort. Consulta bonos de 3 a 5 sesiones con precio especial.",
        custom: "depilacion",
    },
    {
        id: "cejas",
        label: "06 · Cejas & Pestañas",
        introIcon: "👁️",
        introTitle: "Cejas & Pestañas — Técnica Coreana",
        introText:
            "Aplicamos la técnica coreana en nuestros servicios de cejas y pestañas: productos con cistamina, ácido hialurónico y nutrición intensiva que cuidan y fortalecen el pelo mientras transforman tu mirada.",
        treatments: [
            {
                id: "lifting-coreano",
                icon: "✧",
                name: "Lifting de Pestañas — Técnica Coreana",
                tagline: "Cistamina + TGA + Keratina: mirada abierta, sana y duradera en solo 30 minutos",
                badge: "❤️ Favorito",
                badgeType: "pop",
                gallery: galleryFor("lifting-coreano", "Lifting de Pestañas — Técnica Coreana"),
                descriptionBlocks: [
                    {
                        title: "¿Qué lo hace diferente?",
                        text: "La técnica coreana utiliza cistamina y TGA en lugar de los tioglicolatos convencionales: productos más suaves que respetan la estructura del pelo mientras lo rizan y levantan desde la raíz. Más keratina que otros sistemas = pestañas más nutridas, brillantes y con mayor durabilidad. Todo en solo 30 minutos, menos tiempo que un lifting convencional.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para quien quiere una mirada más abierta y expresiva sin maquillaje ni rizador diario. Resultado natural, dura 6–8 semanas. El tinte intensifica el color para una mirada todavía más impactante.",
                    },
                ],
                tags: [
                    "⏱ 30 min",
                    "📅 Dura 6–8 semanas",
                    "💊 Cistamina + TGA + Keratina",
                    "✅ Sin mantenimiento diario",
                ],
                prices: [
                    { label: "Lifting solo", amount: "€28" },
                    { label: "Lifting + Tinte (Keratina)", amount: "€32", save: "Mirada más intensa", featured: true },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero reservar el Lifting de Pestañas Técnica Coreana."),
                },
            },
            {
                id: "hilo-visagismo",
                icon: "〜",
                name: "Depilación con Hilo — Visagismo",
                tagline: "Depilación de precisión milimétrica + ácido hialurónico: cejas perfectas adaptadas a tu rostro",
                gallery: galleryFor("hilo-visagismo", "Depilación con Hilo — Visagismo"),
                descriptionBlocks: [
                    {
                        title: "¿Qué incluye?",
                        text: "Diseño por visagismo, depilación con hilo de precisión y aplicación de ácido hialurónico para nutrir e hidratar la zona tras el tratamiento. Resultado: cejas perfectamente diseñadas y adaptadas a tu estructura facial.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para quien quiere una ceja bien diseñada y natural, sin añadir color. El visagismo garantiza que el arco y la forma se adapten perfectamente a los rasgos de cada persona.",
                    },
                ],
                tags: [
                    "⏱ Sesión rápida",
                    "💧 Ácido hialurónico incluido",
                    "🎨 Diseño por visagismo",
                ],
                prices: [{ label: "Solo depilación", amount: "€10" }],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero reservar depilación con hilo con visagismo."),
                },
            },
            {
                id: "hilo-tinte",
                icon: "🎨",
                name: "Depilación con Hilo + Tinte Híbrido",
                tagline: "El tinte que actúa sobre el vello y la piel: rellena huecos, da forma y volumen. Dura 7–14 días.",
                gallery: galleryFor("hilo-tinte", "Depilación con Hilo + Tinte Híbrido"),
                descriptionBlocks: [
                    {
                        title: "¿Qué lo hace diferente?",
                        text: "El tinte híbrido actúa tanto sobre el vello como sobre la piel, rellenando los huecos donde falta pelo, dando forma y añadiendo volumen y densidad visual. Resistente, de larga duración y apto incluso para personas con canas.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para cejas con huecos, poco pelo, canas o con forma irregular que necesitan densidad y definición extra. También para quien quiere un resultado más marcado y duradero que la henna tradicional.",
                    },
                ],
                tags: [
                    "⏱ Sesión rápida",
                    "📅 Dura 7–14 días",
                    "✅ Apto para canas",
                    "🎨 Rellena huecos y da volumen",
                ],
                prices: [{ label: "Depilación + Tinte Híbrido", amount: "€15", featured: true }],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre depilación con tinte híbrido."),
                },
            },
            {
                id: "laminado-cejas",
                icon: "◎",
                name: "Laminado de Cejas — Técnica Coreana",
                tagline: "Visagismo + Depilación + Tinte Híbrido: las cejas más voluminosas y definidas que hayas tenido",
                badge: "✨ Completo",
                badgeType: "new",
                gallery: galleryFor("laminado-cejas", "Laminado de Cejas — Técnica Coreana"),
                descriptionBlocks: [
                    {
                        title: "¿Qué incluye?",
                        text: "Protocolo completo: diseño por visagismo, depilación con hilo de precisión, laminado para fijar y dirigir los pelos hacia arriba dando máximo volumen y forma, y tinte híbrido para color, densidad y definición. Resultado: cejas perfectas, naturales y con un acabado impecable que dura semanas.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para quien quiere el máximo resultado en cejas: volumen, forma, color y definición en una sola cita. El tratamiento más completo para transformar por completo la mirada de forma natural.",
                    },
                ],
                tags: [
                    "⏱ Sesión completa",
                    "🎨 Visagismo incluido",
                    "💎 Tinte híbrido + Laminado",
                    "✅ Resultado duradero",
                ],
                prices: [
                    { label: "Sin tinte", amount: "€25" },
                    { label: "Con tinte híbrido", amount: "€30", save: "Resultado máximo", featured: true },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre el Laminado de Cejas."),
                },
            },
            {
                id: "pack-mirada",
                icon: "⭐",
                name: "Pack Mirada Completa",
                tagline: "Lifting de pestañas + Laminado de cejas con tinte híbrido + Depilación — todo en una cita",
                badge: "🔥 Pack estrella",
                badgeType: "pop",
                gallery: galleryFor("pack-mirada", "Pack Mirada Completa"),
                introText:
                    "El pack definitivo para resaltar tu mirada al máximo: cejas perfectas con volumen y color (laminado + tinte híbrido + depilación) y pestañas rizadas y levantadas con la técnica coreana. Todo en una sola cita. Sin maquillaje, sin esfuerzo diario.",
                tags: [
                    "⭐ Lifting de Pestañas (técnica coreana)",
                    "⭐ Laminado de Cejas",
                    "⭐ Tinte Híbrido",
                    "⭐ Depilación incluida",
                ],
                prices: [
                    { label: "Pack completo", amount: "€55", save: "Todo incluido en 1 cita", featured: true },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero reservar el Pack Mirada Completa."),
                },
            },
        ],
    },
    {
        id: "masajes",
        label: "07 · Masajes",
        introIcon: "🤲",
        introTitle: "Masajes Terapéuticos y de Bienestar",
        introText:
            "De la tensión muscular al equilibrio total. Una selección de masajes manuales y combinados con tecnología Indiba, diseñados para aliviar, recuperar y restablecer. Cada sesión, adaptada a tu cuerpo y a lo que necesitas en ese momento.",
        treatments: [
            {
                id: "back-ritual",
                icon: "◉",
                name: "Back Ritual — Masaje de Espalda, Cuello y Hombros · Indiba",
                tagline: "Técnica manual + Indiba para liberar la tensión acumulada donde más la sufres",
                badge: "⚡ Con Indiba",
                badgeType: "pop",
                gallery: galleryFor("back-ritual", "Back Ritual — Masaje de Espalda, Cuello y Hombros"),
                descriptionBlocks: [
                    {
                        title: "¿Qué incluye?",
                        text: "Una experiencia de recuperación profunda en dos fases: 25 minutos de trabajo manual con técnicas de effleurage y amasamiento sobre espalda, cuello y hombros para aflojar la musculatura y liberar la tensión superficial. Después, 25 minutos de Indiba que penetra en el tejido profundo para regenerar, aliviar contracturas crónicas y devolver la movilidad.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para quienes acumulan el estrés del día a día en la zona alta del cuerpo: horas frente a la pantalla, mala postura, tensión crónica en trapecios y cervicales. El efecto de la Indiba prolonga el alivio mucho más allá de la sesión.",
                    },
                ],
                tags: [
                    "⏱ 50 min",
                    "🖐 25 min masaje manual",
                    "⚡ 25 min Indiba",
                    "✅ Sin recuperación",
                ],
                prices: [{ label: "Sesión individual", amount: "€55", featured: true }],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero reservar el Back Ritual (Masaje Espalda, Cuello y Hombros con Indiba)."),
                },
            },
            {
                id: "swedish-full-body",
                icon: "〰",
                name: "Swedish Full Body — Masaje Sueco Cuerpo Completo · Indiba",
                tagline: "El clásico que nunca falla, potenciado con Indiba para un resultado más profundo y duradero",
                badge: "⚡ Con Indiba",
                badgeType: "pop",
                gallery: galleryFor("swedish-full-body", "Swedish Full Body — Masaje Sueco Cuerpo Completo"),
                descriptionBlocks: [
                    {
                        title: "¿Qué incluye?",
                        text: "El masaje sueco clásico en su versión más completa: 40 minutos de trabajo sobre espalda, piernas y brazos con técnicas de deslizamiento y amasamiento a presión media. A continuación, 20 minutos de Indiba para potenciar la recuperación muscular, activar la circulación profunda y prolongar la sensación de bienestar. Sin trabajo en abdomen ni rostro.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para quien quiere una sesión de relajación total que también cuida el cuerpo desde dentro. El Indiba añade el componente terapéutico que transforma un masaje relajante en un tratamiento con resultados reales y duraderos.",
                    },
                ],
                tags: [
                    "⏱ 60 min",
                    "🖐 40 min masaje sueco",
                    "⚡ 20 min Indiba",
                    "✅ Espalda · Piernas · Brazos",
                ],
                prices: [{ label: "Sesión individual", amount: "€60", featured: true }],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero reservar el Swedish Full Body (Masaje Sueco Cuerpo Completo con Indiba)."),
                },
            },
            {
                id: "aroma-soul",
                icon: "✦",
                name: "Aroma Soul — Aromaterapia · Aceites Esenciales 100% Puros",
                tagline: "Una experiencia sensorial completa: cuerpo entero, aceites seleccionados para ti, bienestar que dura horas",
                gallery: galleryFor("aroma-soul", "Aroma Soul — Aromaterapia"),
                descriptionBlocks: [
                    {
                        title: "¿Qué hace en tu cuerpo?",
                        text: "Un masaje de cuerpo completo con presión suave y aceites esenciales 100% puros, seleccionados en función de las necesidades de cada cliente. Durante la sesión, los aceites penetran en las capas dérmicas nutriendo e hidratando la piel en profundidad, suavizando su textura y dejando una sensación de calor y bienestar que permanece horas después.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para quien busca más que relajación: una experiencia que cuida la piel mientras desconecta la mente. Los aceites se seleccionan según tu estado y objetivo — relajante, energizante o equilibrante — para que cada sesión sea única.",
                    },
                ],
                tags: [
                    "⏱ 50 min",
                    "🌿 Aceites esenciales 100% puros",
                    "✅ Cuerpo completo",
                    "💧 Hidratación profunda incluida",
                ],
                prices: [{ label: "Sesión individual", amount: "€52", featured: true }],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero reservar el Aroma Soul (Masaje de Aromaterapia)."),
                },
            },
            {
                id: "bioenergetico",
                icon: "☯",
                name: "Bioenergético — Masaje Bioenergético Cuerpo Completo",
                tagline: "Cuerpo, mente y energía en equilibrio — más allá del masaje convencional",
                gallery: galleryFor("bioenergetico", "Masaje Bioenergético Cuerpo Completo"),
                descriptionBlocks: [
                    {
                        title: "¿Qué hace?",
                        text: "Un recorrido completo por espalda, cráneo, rostro, piernas y pies a través de técnicas que trabajan los puntos energéticos del cuerpo. El objetivo es liberar bloqueos, restaurar el equilibrio interno y calmar el sistema nervioso. El resultado va más allá del alivio físico: es una sensación de ligereza y calma que pocas terapias consiguen.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para quien busca algo más allá del masaje convencional: una terapia que trabaje cuerpo y mente al mismo tiempo. Especialmente recomendado en momentos de estrés intenso, agotamiento emocional o cuando el cuerpo pide un reinicio.",
                    },
                ],
                tags: [
                    "⏱ 50 min",
                    "🧘 Puntos energéticos",
                    "✅ Cuerpo completo",
                    "✅ Sistema nervioso",
                ],
                prices: [{ label: "Sesión individual", amount: "€52", featured: true }],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre el Masaje Bioenergético."),
                },
            },
            {
                id: "craneo-facial",
                icon: "◎",
                name: "Cráneo Facial — Masaje Cráneo-Facial · Indiba",
                tagline: "Alivio de cefaleas, lifting natural y descanso profundo para mente y piel",
                badge: "⚡ Con Indiba",
                badgeType: "pop",
                gallery: galleryFor("craneo-facial", "Cráneo Facial — Masaje Cráneo-Facial con Indiba"),
                descriptionBlocks: [
                    {
                        title: "¿Qué incluye?",
                        text: "Un tratamiento de alta precisión que combina maniobras manuales sobre cráneo y rostro con la acción regeneradora del Indiba. Alivia las cefaleas tensionales desde la raíz, activa la circulación facial, reduce la retención de líquidos y proporciona un efecto lifting natural visible desde la primera sesión.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para quien sufre dolores de cabeza frecuentes por tensión, retención facial o simplemente quiere un tratamiento que cuide la piel del rostro mientras descansa la mente. El Indiba potencia el resultado mucho más allá de lo que consigue el masaje manual solo.",
                    },
                ],
                tags: [
                    "⏱ 40 min",
                    "🖐 Masaje manual en cráneo y rostro",
                    "⚡ Indiba facial",
                    "✅ Efecto lifting natural",
                ],
                prices: [{ label: "Sesión individual", amount: "€45", featured: true }],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre el Masaje Cráneo Facial con Indiba."),
                },
            },
            {
                id: "deep-relief",
                icon: "⬡",
                name: "Deep Relief — Descontracturante Localizado · Indiba",
                tagline: "Presión profunda + Indiba: donde la mano no llega, la tecnología sí",
                gallery: galleryFor("deep-relief", "Deep Relief — Descontracturante Localizado con Indiba"),
                descriptionBlocks: [
                    {
                        title: "¿Qué hace?",
                        text: "Técnica de presión profunda combinada con Indiba para liberar contracturas, nudos musculares y tensión crónica en zonas específicas. La aparatología penetra en el tejido donde la mano no llega, acelerando la recuperación y prolongando el alivio muy por encima de lo que consigue el masaje descontracturante convencional.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para dolor localizado persistente, contracturas que no ceden con masaje convencional, o personas que pasan muchas horas sentadas frente al ordenador. También indicado en recuperación muscular tras esfuerzo físico intenso.",
                    },
                ],
                tags: [
                    "⏱ 40 min",
                    "🖐 20 min masaje profundo",
                    "⚡ 20 min Indiba",
                    "✅ Tratamiento localizado",
                ],
                prices: [{ label: "Sesión individual", amount: "€42", featured: true }],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre el Deep Relief (Descontracturante con Indiba)."),
                },
            },
            {
                id: "piernas-ligeras",
                icon: "〜",
                name: "Piernas Ligeras — Masaje Circulatorio y Drenante",
                tagline: "Drenaje linfático manual + activación venosa: alivio inmediato de pesadez e hinchazón",
                gallery: galleryFor("piernas-ligeras", "Piernas Ligeras — Masaje Circulatorio y Drenante"),
                descriptionBlocks: [
                    {
                        title: "¿Qué hace?",
                        text: "Masaje circulatorio específico para piernas con sensación de pesadez, retención o cansancio. Combina maniobras de drenaje linfático manual y activación venosa que alivian de forma inmediata la hinchazón y el malestar, mejoran el retorno venoso y reducen la sensación de piernas cargadas.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para quienes pasan muchas horas de pie o sentados, sufren retención de líquidos o notan las piernas pesadas al final del día. Resultados perceptibles desde la primera sesión.",
                    },
                ],
                tags: [
                    "⏱ 35 min",
                    "💧 Drenaje linfático manual",
                    "✅ Piernas completas",
                    "✅ Alivio inmediato",
                ],
                prices: [{ label: "Sesión individual", amount: "€35", featured: true }],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre el masaje de Piernas Ligeras."),
                },
            },
            {
                id: "mom-glow",
                icon: "✧",
                name: "Mom Glow — Masaje Prenatal",
                tagline: "Un momento de calma diseñado para ti y para el bebé — seguro, suave y transformador",
                gallery: galleryFor("mom-glow", "Mom Glow — Masaje Prenatal"),
                descriptionBlocks: [
                    {
                        title: "¿Qué incluye?",
                        text: "Un masaje diseñado exclusivamente para el cuerpo de la futura mamá: posiciones seguras, técnicas suaves adaptadas al embarazo y atención especial a las zonas más afectadas. Alivia el dolor lumbar, reduce la tensión en piernas y glúteos, mejora la circulación y proporciona un momento de calma que también beneficia al bebé.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para embarazadas a partir del segundo trimestre que quieren cuidarse de forma segura y consciente. Sin ningún tipo de aparatología. Completamente adaptado a las necesidades y comodidad de cada mamá.",
                    },
                ],
                note: "A partir del 2.º trimestre · Sin aparatología",
                tags: [
                    "⏱ 45 min",
                    "✅ A partir del 2.º trimestre",
                    "✅ Sin aparatología",
                    "🤰 Posiciones seguras",
                ],
                prices: [{ label: "Sesión individual", amount: "€45", featured: true }],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre el masaje prenatal Mom Glow."),
                },
            },
            {
                id: "foot-therapy",
                icon: "◦",
                name: "Foot Therapy — Reflexología Podal",
                tagline: "Los pies como mapa del cuerpo: una terapia milenaria con resultados reales",
                gallery: galleryFor("foot-therapy", "Foot Therapy — Reflexología Podal"),
                descriptionBlocks: [
                    {
                        title: "¿Qué hace?",
                        text: "La reflexología podal trabaja sobre los puntos reflejos de los pies para estimular órganos, glándulas y sistemas del cuerpo de forma integral. Alivia el estrés, favorece el equilibrio interno y produce una profunda sensación de relajación que se extiende a todo el organismo.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para quien quiere cuidarse de forma holística: tratar el cuerpo entero a través de los pies. Especialmente recomendado en estados de estrés, insomnio o para mantener el equilibrio interno.",
                    },
                ],
                tags: [
                    "⏱ 30 min",
                    "✅ Reflexología completa",
                    "🌿 Terapia holística",
                ],
                prices: [{ label: "Sesión individual", amount: "€30", featured: true }],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre la Reflexología Podal (Foot Therapy)."),
                },
            },
        ],
    },
];

export const DEPILACION_MUJER = [
    ["PAQUETES COMPLETOS", ""],
    ["Cuerpo completo sin rostro", "€100–110"],
    ["Cuerpo completo con rostro", "€110–125"],
    ["ROSTRO", ""],
    ["Rostro completo", "€35"],
    ["Bigote", "€15"],
    ["Mentón", "€15"],
    ["BRAZOS", ""],
    ["Antebrazo", "€20"],
    ["Brazo", "€25"],
    ["Antebrazo y brazo", "€30"],
    ["Brazo + antebrazo + manos", "€45"],
    ["Axilas", "€20"],
    ["PIERNAS", ""],
    ["Piernas (medias piernas)", "€35"],
    ["Muslos", "€40"],
    ["Muslos y piernas (completas)", "€50"],
    ["ZONA ÍNTIMA", ""],
    ["Solo ingles", "€20"],
    ["Glúteo", "€20"],
    ["Zona íntima C (sin perianal)", "€30"],
    ["Zona íntima C + perianal", "€35"],
    ["Axila + Zona íntima C", "€45"],
    ["Axila + Zona íntima C + Perianal", "€50"],
    ["Axila + Zona íntima C + Perianal + Piernas C", "€90"],
    ["TRONCO", ""],
    ["Espalda", "€40"],
] as const;

export const DEPILACION_HOMBRE = [
    ["PAQUETES COMPLETOS", ""],
    ["Cuerpo completo sin rostro", "€110–120"],
    ["Cuerpo completo con rostro", "€120–130"],
    ["ROSTRO", ""],
    ["Rostro completo", "€35"],
    ["Bigote", "€15"],
    ["Mentón", "€15"],
    ["BRAZOS", ""],
    ["Antebrazo", "€30"],
    ["Brazo", "€25"],
    ["Antebrazo y brazo", "€40"],
    ["Brazo + antebrazo + manos", "€40"],
    ["Axilas", "€20"],
    ["PIERNAS", ""],
    ["Piernas (medias piernas)", "€35"],
    ["Muslos", "€40"],
    ["Muslos y piernas (completas)", "€55"],
    ["ZONA ÍNTIMA", ""],
    ["Solo ingles", "€20"],
    ["Glúteo", "€20"],
    ["Zona íntima C (sin perianal)", "€30"],
    ["Zona íntima C + perianal", "€35"],
    ["Axila + Zona íntima C", "€45"],
    ["Axila + Zona íntima C + Perianal", "€50"],
    ["Axila + Zona íntima C + Perianal + Piernas C", "€90"],
    ["TRONCO", ""],
    ["Pecho", "€30"],
    ["Abdomen", "€30"],
    ["Pecho + abdomen", "€40"],
    ["Espalda", "€40"],
] as const;

export const TESTIMONIALS = [
    {
        text: "Llevo 4 meses con el protocolo de Indiba corporal y los resultados son increíbles. La piel está mucho más firme y he perdido volumen en zonas que no conseguía trabajar con el gym. Muy profesionales.",
        author: "María G.",
        meta: "Criolipólisis + Indiba Corporal",
    },
    {
        text: "Me operé de lipo hace 3 meses y hice todo el postoperatorio aquí. Fue clave para mi recuperación, mucho más rápida de lo que esperaba y sin fibrosis. Las chicas son un amor.",
        author: "Laura P.",
        meta: "Recuperación Postquirúrgica",
    },
    {
        text: "Llevo 5 sesiones de depilación láser en piernas y axilas y ya no me sale casi nada. El proceso es muy cómodo, rápido y el trato es excelente. Me arrepiento de no haberlo hecho antes.",
        author: "Sofía M.",
        meta: "Depilación Láser Diodo",
    },
];
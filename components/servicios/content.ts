import type {
    QuizKey,
    SiteConfig,
    TabConfig,
} from "./types";

export const SITE: SiteConfig = {
    brand: "Alex Estética",
    city: "Gran Canaria",
    phone: "34661026192",
    displayPhone: "661 026 192",
    logoSrc: "/alex-logo.png",
    tratamientosHeroImg: "/tratamientos-hero.jpg",
    catalogoHeroImg: "/hero-catalogo.jpg",
    ctaLabel: "Agendar Cita por WhatsApp",
    address: "Av. Canarias 450, Bloq. B, Local 3",
    locality: "Vecindario, Gran Canaria",
    mapsUrl: "https://g.page/r/alexestetica",
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
        4: "MAYO: Indiba corporal con precio especial",
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
    { icon: string; label: string; text: string; tab: any; link: string }
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
        text: 'Tenemos un protocolo postquirúrgico en 3 etapas adaptado a tu cirugía y evolución, desde drenaje inicial hasta mantenimiento final con Indiba.',
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
                id: "masaje-rf",
                icon: "🌡️",
                name: "Masaje Moldeador con Radiofrecuencia",
                tagline: "Moldea, activa la circulación y reafirma la piel desde dentro",
                badge: "⭐ Popular",
                badgeType: "pop",
                descriptionBlocks: [
                    {
                        title: "¿Qué hace en tu cuerpo?",
                        text: "La radiofrecuencia genera calor controlado en las capas profundas de la piel, estimulando la producción de colágeno y elastina. Combinada con masaje manual, activa el drenaje linfático, rompe los nódulos de celulitis y mejora la microcirculación. La piel se ve más firme y el contorno más definido.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Ideal para flacidez moderada, celulitis y pérdida de definición corporal. Perfecta también como mantenimiento post-adelgazamiento o post-parto. Los resultados mejoran progresivamente durante semanas tras cada sesión.",
                    },
                    {
                        title: "⚠️ Contraindicaciones",
                        text: "Implantes metálicos o electrónicos en la zona a tratar · Marcapasos · Embarazo · Cáncer activo · Trombosis o varices severas · Heridas abiertas o infecciones activas · Prótesis metálicas en la zona.",
                    },
                ],
                tags: [
                    "⏱ 50 min",
                    "🔁 5–10 sesiones recomendadas",
                    "📅 1 vez por semana",
                    "✅ Sin recuperación",
                    "📍 Abdomen, piernas, glúteos, brazos, espalda",
                ],
                prices: [
                    { label: "Sesión individual", amount: "€40", per: "por sesión" },
                    {
                        label: "Bono 5 sesiones",
                        amount: "€175",
                        per: "€35 / sesión",
                        save: "Ahorras €25",
                    },
                    {
                        label: "Bono 10 sesiones",
                        amount: "€290",
                        per: "€29 / sesión",
                        save: "Ahorras €110",
                        featured: true,
                    },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero reservar el Masaje Moldeador con Radiofrecuencia."),
                },
            },
            {
                id: "masaje-indiba",
                icon: "⚡",
                name: "Masaje Moldeador con Diatermia Indiba",
                tagline: "La tecnología más avanzada para reducir volumen en profundidad",
                badge: "🏆 Premium",
                badgeType: "pop",
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
                    { label: "Sesión individual", amount: "€50", per: "por sesión" },
                    {
                        label: "Bono 5 sesiones",
                        amount: "€200",
                        per: "€40 / sesión",
                        save: "Ahorras €50",
                    },
                    {
                        label: "Bono 10 sesiones",
                        amount: "€340",
                        per: "€34 / sesión",
                        save: "Ahorras €160",
                        featured: true,
                    },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información del Masaje Moldeador con Diatermia Indiba."),
                },
            },
            {
                id: "combo-4",
                icon: "💎",
                name: "Masaje Moldeador + Cavitación + Radiofrecuencia + Vacumterapia",
                tagline: "El protocolo más completo para moldear el cuerpo en una sola sesión",
                badge: "🔥 Más completo",
                badgeType: "pop",
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
                    {
                        label: "Bono 5 sesiones",
                        amount: "€150",
                        per: "€30 / sesión",
                        save: "Ahorras €25",
                    },
                    {
                        label: "Bono 10 sesiones",
                        amount: "€290",
                        per: "€29 / sesión",
                        save: "Ahorras €60",
                        featured: true,
                    },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink(
                        "Hola! Quiero información del tratamiento combinado Cavitación + RF + Vacumterapia."
                    ),
                },
            },
            {
                id: "criolipolisis",
                icon: "❄️",
                name: "Criolipólisis",
                tagline: "Elimina la grasa localizada para siempre con frío controlado. Sin cirugía.",
                badge: "⭐ Top ventas",
                badgeType: "pop",
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
                    {
                        label: "2 zonas (mismo día)",
                        amount: "€150",
                        per: "€75 / zona",
                        save: "Ahorras €30",
                        featured: true,
                    },
                    {
                        label: "Bono 3 sesiones (misma zona)",
                        amount: "€210",
                        per: "€70 / sesión",
                        save: "Ahorras €60",
                    },
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
                    {
                        label: "6 sesiones",
                        amount: "€150",
                        per: "€25 / sesión",
                        save: "Ahorras €30",
                        featured: true,
                    },
                    {
                        label: "10 sesiones",
                        amount: "Consultar",
                        per: "precio especial",
                    },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre EMS Sculpt en Alex Estética."),
                },
            },
            {
                id: "vacum-rotation",
                icon: "🔄",
                name: "Masaje Manual + Vacum Rotation + Cavitación o Radiofrecuencia",
                tagline: "Protocolo anticelulítico y remodelador de alta intensidad en 50 minutos",
                badge: "⭐ Más demandado",
                badgeType: "pop",
                descriptionBlocks: [
                    {
                        title: "¿Qué hace en tu cuerpo?",
                        text: "El Vacum Rotation combina succión y rotación para activar el drenaje linfático, romper nódulos de celulitis y mejorar la microcirculación desde la superficie. La Cavitación o Radiofrecuencia actúa en profundidad destruyendo grasa y reafirmando la piel. El masaje manual integra y potencia los efectos de ambas tecnologías para un resultado superior.",
                    },
                    {
                        title: "¿Para quién es ideal?",
                        text: "Para celulitis de cualquier grado, remodelación corporal y mejora del contorno. Uno de los dos tratamientos más demandados del centro por sus resultados visibles desde las primeras sesiones. La opción ideal para quienes buscan máxima eficacia anticelulítica y remodeladora.",
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
                    {
                        label: "Bono 5 sesiones",
                        amount: "€200",
                        per: "€40 / sesión",
                        save: "Ahorras €50",
                    },
                    {
                        label: "Bono 10 sesiones",
                        amount: "€340",
                        per: "€34 / sesión",
                        save: "Ahorras €160",
                        featured: true,
                    },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink(
                        "Hola! Quiero información del Masaje Manual con Vacum Rotation y Cavitación."
                    ),
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
                    {
                        label: "Bono 10 sesiones",
                        amount: "€300",
                        per: "€30 / sesión",
                        save: "Ahorras €100",
                        featured: true,
                    },
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
                    {
                        num: "+",
                        title: "Mantenimiento post-3 meses — Indiba + Masaje Moldeador",
                        text: "A partir de los 3 meses de postoperatorio, el protocolo de moldeo con Indiba y masaje moldeador consolida y mantiene los resultados de tu cirugía. 1 sesión de 50 min, recomendado 1–2 veces por semana.",
                    },
                ],
                prices: [
                    {
                        label: "Sesión mantenimiento",
                        amount: "€35",
                        per: "por sesión",
                    },
                    {
                        label: "Bono 10 sesiones",
                        amount: "€280",
                        per: "€28 / sesión",
                        save: "Ahorras €70",
                        featured: true,
                    },
                ],
                note:
                    "⚠️ Importante: Los precios de las etapas 1, 2 y 3 se establecen de forma personalizada según tu tipo de cirugía y evolución. El precio de mantenimiento indicado aplica al protocolo post-3 meses.",
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink(
                        "Hola! Acabo de operarme y necesito información sobre el tratamiento postquirúrgico."
                    ),
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
            "Desde limpiezas profundas hasta protocolos de rejuvenecimiento con tecnología de última generación. Cada tratamiento se adapta a tu tipo de piel y objetivo.",
        treatments: [
            {
                id: "limpieza-facial",
                icon: "✨",
                name: "Limpieza Facial Profunda",
                tagline: "Limpieza completa en profundidad para una piel revitalizada y luminosa",
                descriptionBlocks: [
                    {
                        title: "Descripción",
                        text: "Limpieza profunda enfocada en renovar la piel, retirar impurezas y devolver luminosidad.",
                    },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre Limpieza Facial Profunda."),
                },
            },
            {
                id: "microdermoabrasion",
                icon: "💎",
                name: "Microdermoabrasión / Punta de Diamante",
                tagline: "Exfoliación mecánica que renueva la textura de la piel",
                descriptionBlocks: [
                    {
                        title: "Descripción",
                        text: "Tratamiento de renovación superficial para mejorar textura, suavidad y aspecto general de la piel.",
                    },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre Microdermoabrasión / Punta de Diamante."),
                },
            },
            {
                id: "dermapen-hialuronico",
                icon: "💧",
                name: "Dermapem + Punta de Diamante + Ácido Hialurónico",
                tagline: "Hidratación profunda con efecto relleno natural",
                descriptionBlocks: [
                    {
                        title: "Descripción",
                        text: "Combinación pensada para hidratación intensa y mejora visible de la calidad de la piel.",
                    },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre Dermapem + Punta de Diamante + Ácido Hialurónico."),
                },
            },
            {
                id: "dermapen-vitamina-c",
                icon: "🍊",
                name: "Dermapem + Punta de Diamante + Vitamina C",
                tagline: "Iluminación y antioxidación para combatir manchas",
                descriptionBlocks: [
                    {
                        title: "Descripción",
                        text: "Ideal para aportar luz al rostro y acompañar protocolos enfocados en tono apagado y signos de cansancio.",
                    },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre Dermapem + Punta de Diamante + Vitamina C."),
                },
            },
            {
                id: "dermapen-vitaminas",
                icon: "🌟",
                name: "Dermapem + Punta de Diamante + Cóctel de Vitaminas",
                tagline: "Nutrición intensiva para revitalizar la piel apagada",
                descriptionBlocks: [
                    {
                        title: "Descripción",
                        text: "Protocolo nutritivo pensado para pieles que necesitan revitalización y un plus de energía.",
                    },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre Dermapem + Punta de Diamante + Cóctel de Vitaminas."),
                },
            },
            {
                id: "dermapen-exosomas",
                icon: "🧬",
                name: "Dermapem + Punta de Diamante + Exosomas",
                tagline: "Regeneración celular avanzada",
                descriptionBlocks: [
                    {
                        title: "Descripción",
                        text: "Tecnología avanzada orientada a regeneración y mejora de la calidad cutánea.",
                    },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre Dermapem + Punta de Diamante + Exosomas."),
                },
            },
            {
                id: "carbon-peel",
                icon: "🖤",
                name: "Carbón Peel",
                tagline: "Reduce poros, controla grasa y unifica el tono",
                descriptionBlocks: [
                    {
                        title: "Descripción",
                        text: "Tratamiento ideal para piel con textura irregular, poros visibles o exceso de grasa.",
                    },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre Carbón Peel."),
                },
            },
            {
                id: "indiba-facial",
                icon: "⚡",
                name: "Radiofrecuencia Indiba Facial + Punta de Diamante",
                tagline: "Reafirmación y rejuvenecimiento profundo",
                descriptionBlocks: [
                    {
                        title: "Descripción",
                        text: "Protocolo premium para firmeza, mejora de textura y rejuvenecimiento no invasivo.",
                    },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre Radiofrecuencia Indiba Facial + Punta de Diamante."),
                },
            },
            {
                id: "indiba-facial-bono",
                icon: "🏅",
                name: "Radiofrecuencia Indiba Facial — Bono 6 sesiones",
                tagline: "Programa intensivo para resultados duraderos",
                tags: ["Bono 6"],
                descriptionBlocks: [
                    {
                        title: "Descripción",
                        text: "Programa pensado para trabajar firmeza facial y mantener resultados más consistentes en el tiempo.",
                    },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero información sobre el bono de 6 sesiones de Radiofrecuencia Indiba Facial."),
                },
            },
            {
                id: "rf-fraccionada",
                icon: "🎯",
                name: "Radiofrecuencia Fraccionada con Nano Agujas",
                tagline: "Última generación con microagujas",
                descriptionBlocks: [
                    {
                        title: "Descripción",
                        text: "Tecnología avanzada con opciones como oligoelementos, exosomas y polivitaminas según valoración profesional.",
                    },
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
                    {
                        label: "Lifting + Tinte (Keratina)",
                        amount: "€32",
                        save: "Mirada más intensa",
                        featured: true,
                    },
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
                prices: [
                    {
                        label: "Depilación + Tinte Híbrido",
                        amount: "€15",
                        featured: true,
                    },
                ],
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
                    {
                        label: "Con tinte híbrido",
                        amount: "€30",
                        save: "Resultado máximo",
                        featured: true,
                    },
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
                introText:
                    "El pack definitivo para resaltar tu mirada al máximo: cejas perfectas con volumen y color (laminado + tinte híbrido + depilación) y pestañas rizadas y levantadas con la técnica coreana. Todo en una sola cita. Sin maquillaje, sin esfuerzo diario.",
                tags: [
                    "⭐ Lifting de Pestañas (técnica coreana)",
                    "⭐ Laminado de Cejas",
                    "⭐ Tinte Híbrido",
                    "⭐ Depilación incluida",
                ],
                prices: [
                    {
                        label: "Pack completo",
                        amount: "€55",
                        save: "Todo incluido en 1 cita",
                        featured: true,
                    },
                ],
                ctaPrimary: {
                    label: "📲 Consultar por WhatsApp",
                    href: waLink("Hola! Quiero reservar el Pack Mirada Completa."),
                },
            },
        ],
    },
];

export const DEPILACION_MUJER = [
    ["PAQUETES COMPLETOS", ""],
    ["Cuerpo completo (sin rostro)", "€110"],
    ["Cuerpo completo con rostro", "€125"],
    ["ROSTRO", ""],
    ["Rostro completo", "€35"],
    ["Bigote", "€15"],
    ["Mentón", "€15"],
    ["BRAZOS", ""],
    ["Brazo", "€25"],
    ["Antebrazo", "€25"],
    ["Brazo y antebrazo", "€40"],
    ["PIERNAS", ""],
    ["Piernas", "€35"],
    ["Muslos", "€40"],
    ["Muslos y piernas", "€60"],
    ["ZONA ÍNTIMA", ""],
    ["Zona íntima y perianal", "€40"],
    ["Axila + Zona íntima", "€45"],
    ["Axila + Zona íntima + Perianal", "€50"],
    ["Axila + Zona íntima + Perianal + Piernas", "€90"],
] as const;

export const DEPILACION_HOMBRE = [
    ["PAQUETES COMPLETOS", ""],
    ["Cuerpo completo sin rostro", "€110–130"],
    ["ROSTRO", ""],
    ["Rostro completo", "€35"],
    ["BRAZOS", ""],
    ["Brazo", "€25"],
    ["Antebrazo y manos", "€35"],
    ["Brazo, antebrazo y manos", "€45"],
    ["Axilas", "€25"],
    ["PIERNAS", ""],
    ["Piernas", "€35"],
    ["Muslos", "€40"],
    ["Muslos y piernas", "€60"],
    ["ZONA ÍNTIMA", ""],
    ["Zona íntima y perianal", "€40"],
    ["TRONCO", ""],
    ["Pecho", "€40"],
    ["Abdomen", "€35"],
    ["Pecho y abdomen", "€40"],
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
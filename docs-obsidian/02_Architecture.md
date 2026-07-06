# 02 · Arquitectura

## Stack

| Tecnología | Versión | Rol |
|------------|---------|-----|
| Next.js | 16.1.6 | Framework (App Router) |
| React | 19.2.3 | UI |
| TypeScript | 5 | Tipado |
| Tailwind CSS | v4 | Estilos (utility-first) |
| Firebase | 12.12.0 | Firestore — reseñas de usuarios |
| Vercel | — | Deployment |

## Estructura de carpetas

```
estetica-curso/
├── app/
│   ├── layout.tsx              # Layout raíz (fuentes, metadata, CookieBanner, Analytics)
│   ├── page.tsx                # Home (~1709 líneas — monolítica, ver [[05_Ideas]])
│   ├── servicios/
│   │   ├── page.tsx            # Catálogo de servicios (estado, tabs, acordeones)
│   │   └── servicios.css       # CSS específico del catálogo
│   ├── sobre/page.tsx
│   ├── opinar/page.tsx         # Reseñas (Firebase Firestore)
│   ├── curso/page.tsx
│   ├── bio/page.tsx
│   ├── privacidad/page.tsx
│   ├── aviso-legal/page.tsx
│   ├── cookies/page.tsx
│   └── components/
│       ├── SharedHeader.tsx        # Header compartido para todas las páginas excepto /servicios
│       └── analytics/
│           ├── CookieBanner.tsx
│           └── analytics.tsx
├── components/
│   └── servicios/              # Todos los componentes del catálogo
│       ├── content.ts          # ⭐ FUENTE DE VERDAD de todos los tratamientos
│       ├── types.ts            # Tipos TypeScript del catálogo
│       ├── TreatmentCard.tsx   # Acordeón individual por tratamiento
│       ├── CatalogSection.tsx  # Catálogo completo con tabs
│       ├── Header.tsx          # Header exclusivo de /servicios
│       ├── Button.tsx          # Botón del catálogo
│       ├── DepilacionTable.tsx # Tabla especial de precios de depilación
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── PromoBar.tsx
│       ├── QuizSection.tsx
│       ├── TestimonialsSection.tsx
│       └── FinalCTA.tsx
├── lib/
│   └── firebase.ts             # Configuración de Firebase
└── public/
    └── tratamientos/           # Imágenes de los tratamientos por ID
        └── {treatment-id}/
            └── 1.jpg, 2.jpg, 3.jpg, 4.jpg
```

## Patrón central: content.ts

Todo el contenido del catálogo vive en `components/servicios/content.ts`. Ningún tratamiento, precio o texto se define en los componentes.

Exports principales:
- `SITE` — configuración global (marca, teléfono, dirección, horario)
- `TABS` — array de tabs con todos los tratamientos anidados
- `QUIZ_DATA` — opciones del quiz y a qué tab/link apuntan
- `DEPILACION_MUJER` / `DEPILACION_HOMBRE` — tablas de precios de depilación
- `TESTIMONIALS` — testimonios estáticos
- `waLink(text)` — genera URL de WhatsApp con texto precodificado
- `getMonthlyPromo()` — devuelve la promo del mes actual

## Tipos clave (types.ts)

```typescript
TabId = "cuerpo" | "recuperacion" | "rostro" | "laser-avanzado" | "depilacion" | "cejas" | "masajes"
QuizKey = "grasa" | "tonificar" | "postqx" | "piel" | "depilacion" | "cejas" | "anticelulitico" | "remodelacion" | "flacidez" | "masajes"
Treatment = { id, icon, name, tagline, badge?, descriptionBlocks?, tags?, prices?, ctaPrimary?, ... }
TabConfig = { id: TabId, label, introIcon, introTitle, introText, treatments?, custom? }
```

## Patrón de acordeón (TreatmentCard)

Los tratamientos se expanden/colapsan con CSS `maxHeight` transition:
- Cerrado: `maxHeight: "0px"` + `overflow: hidden`
- Abierto: `maxHeight: "5000px"` + transición `0.55s cubic-bezier`
- Estado controlado por `openTreatmentId` en `app/servicios/page.tsx`

**Scroll al abrir:** `useEffect` con `setTimeout(580ms)` + `scrollIntoView({ block: "start" })`.
El delay espera que el acordeón anterior termine de colapsar antes de calcular posición.
CSS: `scroll-margin-top: 130px` en `.treatment-item` para compensar el sticky header.

## Firebase (Firestore)

Usado únicamente para reseñas de clientes en `/opinar`.
- Colección: `reviews` (presunto, ver `lib/firebase.ts`)
- Tipos: `FirestoreReview`, `Review` — definidos en `app/page.tsx` y `app/opinar/page.tsx` (duplicado — ver [[05_Ideas]])

## Header

Hay **dos sistemas de header distintos** (intencional):
1. `components/servicios/Header.tsx` — usado solo en `/servicios` (incluye PromoBar)
2. `app/components/SharedHeader.tsx` — usado en todas las demás páginas

### SharedHeader
- Prop `sticky?: boolean` — `false` → `fixed inset-x-0 top-0 z-50`, `true` → `sticky top-0 z-30`
- Consume `SITE` desde `components/servicios/content.ts`
- Fuentes cargadas internamente (Cormorant Garamond + DM Sans)
- Desktop: logo centrado flotante, nav izquierda (Sobre | Contacto), nav derecha (Tratamientos | Curso) + icono Instagram
- Mobile: logo+brand a la izquierda, hamburger a la derecha con dropdown

## Imágenes de tratamientos

Cada tratamiento con galería espera imágenes en:
```
public/tratamientos/{treatment-id}/1.jpg
public/tratamientos/{treatment-id}/2.jpg
public/tratamientos/{treatment-id}/3.jpg
public/tratamientos/{treatment-id}/4.jpg
```
Si no existen, la galería se oculta automáticamente (`onError` en `TreatmentGallery`).

## Relacionado

- [[01_Project]] — descripción del negocio
- [[03_Decisions]] — por qué se tomaron estas decisiones
- [[05_Ideas]] — qué mejorar

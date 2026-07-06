# 06 · Changelog

Historial de cambios relevantes. Commits menores o de contenido no se registran aquí.

---

## 2026-07-06

### Refactor: header compartido extraído a SharedHeader
**Commit:** `dc3a149`  
**Qué cambió:**
- `app/components/SharedHeader.tsx` — nuevo componente client-side con prop `sticky?: boolean`
- Sustituye el header inline (~150–300 líneas) en 7 páginas: `page.tsx`, `sobre`, `opinar`, `curso`, `privacidad`, `aviso-legal`, `cookies`
- Elimina ~868 líneas de código duplicado
- `SITE` consumido desde `components/servicios/content.ts` (fuente única de verdad)
- `instagramUrl` añadido a `SITE` y al tipo `SiteConfig`
- Ver [[05_Ideas#IDEA-001]]

---

### Sección Masajes añadida al catálogo
**Commits:** `f711e41`, `8c43235`  
**Qué cambió:**
- `components/servicios/types.ts` — `"masajes"` añadido a `TabId` y `QuizKey`
- `components/servicios/content.ts` — nuevo tab `07 · Masajes` con 9 tratamientos y entrada en `QUIZ_DATA`
- 9 tratamientos: Back Ritual, Swedish Full Body, Aroma Soul, Bioenergético, Cráneo Facial, Deep Relief, Piernas Ligeras, Mom Glow, Foot Therapy
- Los tratamientos con Indiba llevan badge `⚡ Con Indiba`
- Mom Glow incluye `note` de seguridad: "A partir del 2.º trimestre · Sin aparatología"

---

### Fix: scroll incorrecto al abrir tratamientos
**Commits:** `4343d26`, `a461bd3`  
**Qué cambió:**
- `app/servicios/servicios.css` — `scroll-margin-top: 130px` en `.treatment-item`
- `components/servicios/TreatmentCard.tsx` — `setTimeout(580ms)` para esperar colapso del accordion anterior antes de scrollear
- Ver [[04_Errors#ERR-002]]

---

### Fix: barra horizontal detrás del logo
**Commits:** `6e653b2`, `4213f0d`  
**Qué cambió:**
- Eliminado `<span>` fantasma con `bg-black/70 blur-[0.3px]` de 8 archivos:
  `components/servicios/Header.tsx`, `app/page.tsx`, `app/sobre/page.tsx`, `app/opinar/page.tsx`, `app/curso/page.tsx`, `app/cookies/page.tsx`, `app/privacidad/page.tsx`, `app/aviso-legal/page.tsx`
- Ver [[04_Errors#ERR-001]]

---

## Antes de 2026-07-06

### Actualización de tratamientos y precios (junio 2025)
**Commit:** `20616b5`  
Actualización de contenido en `content.ts` — precios y tratamientos según cambios de junio 2025.

### Cambios varios
**Commits:** `41b163a`, `3a3d8c7`, `6f71a53`, `d0ae3bf`  
Ajustes de contenido, imagen y pantalla bio.

---

## Plantilla para nuevas entradas

```markdown
## YYYY-MM-DD

### Título del cambio
**Commits:** `hash`
**Qué cambió:**
- archivo — descripción
**Relacionado:** [[04_Errors#ERR-XXX]] o [[03_Decisions#DEC-XXX]]
```

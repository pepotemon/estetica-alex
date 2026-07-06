# 04 · Errores y Bugs

Registro de bugs encontrados, causa raíz y solución aplicada.

---

## ERR-001 · Barra horizontal visible detrás del logo

**Fecha:** 2026-07-06  
**Síntoma:** En todas las páginas con logo centrado en el header se veía una barra negra horizontal detrás del logo.  
**Causa:** Un `<span>` decorativo con `bg-black/70 blur-[0.3px]` posicionado absolutamente (`top-[52px]`, `w-44`, `h-10`). El blur era tan pequeño (0.3px y 1px) que el span se veía como una barra sólida en lugar de una sombra suave.  
**Archivos afectados:** 8 archivos — `components/servicios/Header.tsx` + `app/page.tsx` + `app/sobre/page.tsx` + `app/opinar/page.tsx` + `app/curso/page.tsx` + `app/cookies/page.tsx` + `app/privacidad/page.tsx` + `app/aviso-legal/page.tsx`  
**Solución:** Eliminar el span en todos los archivos. El logo ya tiene `drop-shadow` dorado propio.  
**Commit:** `6e653b2`, `4213f0d`

---

## ERR-002 · Scroll incorrecto al abrir un tratamiento

**Fecha:** 2026-07-06  
**Síntoma:** Al abrir un tratamiento en el catálogo, el scroll automático posicionaba la vista demasiado abajo, ocultando el título del tratamiento.  
**Causa raíz — caso 1 (primer open):** El sticky header (130px) no estaba compensado. El browser scrolleaba al borde del elemento sin margen.  
**Causa raíz — caso 2 (switch entre tratamientos):** `scrollIntoView` se llamaba con `requestAnimationFrame` (~16ms), antes de que el accordion anterior terminara de colapsar (transición 0.55s). El browser calculaba la posición de B mientras A todavía ocupaba espacio, quedando el viewport demasiado abajo cuando A finalmente colapsaba.  
**Solución:**
1. `scroll-margin-top: 130px` en `.treatment-item` (CSS)
2. `setTimeout(580ms)` en lugar de `requestAnimationFrame` en `TreatmentCard.tsx`
**Commits:** `4343d26`, `a461bd3`

---

## ERR-003 · Masajes no aparecía en el quiz

**Fecha:** 2026-07-06  
**Síntoma:** La nueva sección de Masajes existía en el catálogo pero no era accesible desde el quiz "Encuentra tu tratamiento ideal".  
**Causa:** Al añadir el tab `masajes` a `TABS`, no se añadió la entrada correspondiente en `QUIZ_DATA` ni el literal `"masajes"` al type union `QuizKey`.  
**Solución:** Añadir `"masajes"` a `QuizKey` en `types.ts` y nueva entrada en `QUIZ_DATA` en `content.ts`.  
**Commit:** `8c43235`

---

## Plantilla para nuevos bugs

```
## ERR-XXX · Título del bug

**Fecha:** YYYY-MM-DD
**Síntoma:** Qué veía el usuario
**Causa:** Por qué pasaba
**Archivos afectados:** lista
**Solución:** Qué se hizo
**Commit:** hash
```

---

## Relacionado

- [[03_Decisions#DEC-004]] — decisión del scroll
- [[06_Changelog]] — commits asociados

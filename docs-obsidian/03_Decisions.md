# 03 · Decisiones Técnicas

Registro de decisiones importantes y su razonamiento.

---

## DEC-001 · Todo el contenido del catálogo en un solo archivo

**Fecha:** antes de 2026-07  
**Decisión:** Centralizar todos los tratamientos, precios y textos en `components/servicios/content.ts`  
**Razón:** Facilitar que el cliente (o Claude Code) actualice precios y descripciones sin tocar JSX. Un solo lugar para cambios de contenido.  
**Consecuencia:** El archivo crece pero es fácil de editar. Los componentes son puros (reciben datos, no los definen).

---

## DEC-002 · WhatsApp como único canal de conversión

**Fecha:** diseño inicial  
**Decisión:** No hay sistema de reservas online. Todos los CTA generan un link `wa.me/` con mensaje preescrito.  
**Razón:** El negocio gestiona citas por WhatsApp. Añadir un sistema de reservas sería sobreingeniería para el volumen actual.  
**Implementación:** `waLink(text)` en `content.ts` genera las URLs.

---

## DEC-003 · Acordeón con maxHeight CSS en lugar de librería

**Fecha:** diseño inicial  
**Decisión:** Animación de acordeón mediante `maxHeight: 0 → 5000px` con CSS transition, sin librería de animación.  
**Razón:** Dependencia cero, control total sobre el CSS.  
**Limitación:** El valor `5000px` es arbitrario (debe ser mayor que cualquier contenido). Si un tratamiento tuviera más contenido podría quedar cortado.

---

## DEC-004 · scroll-margin-top + setTimeout para el acordeón

**Fecha:** 2026-07-06  
**Decisión:** Al abrir un tratamiento, esperar 580ms antes de `scrollIntoView` + usar `scroll-margin-top: 130px`  
**Razón:** Sin el delay, el scroll se calcula mientras el acordeón anterior todavía está colapsando, posicionando el viewport en la posición incorrecta. Los 580ms cubren la transición de 0.55s. Los 130px compensan el sticky header (PromoBar ~38px + Header ~80px + margen).  
**Relacionado:** [[04_Errors#ERR-002]]

---

## DEC-005 · Firebase solo para reseñas

**Fecha:** diseño inicial  
**Decisión:** Firebase Firestore se usa únicamente para almacenar y leer reseñas de clientes en `/opinar`.  
**Razón:** El resto del contenido es estático. No hay CMS, no hay auth, no hay base de datos de citas.

---

## DEC-006 · Tab "Depilación" con componente custom

**Fecha:** diseño inicial  
**Decisión:** El tab de Depilación Láser no usa el componente `TreatmentCard` sino `DepilacionTable`, que renderiza tablas de precios por zonas.  
**Razón:** La depilación láser tiene decenas de zonas con precios variables, no encaja en el formato de acordeón de los demás tratamientos.  
**Implementación:** `TabConfig` tiene campo `custom: "depilacion"` que el `CatalogSection` detecta para renderizar el componente alternativo.

---

## DEC-007 · Imágenes de galería opcionales con fallback

**Fecha:** diseño inicial  
**Decisión:** Si una imagen de galería no existe, se oculta silenciosamente con `onError`.  
**Razón:** Permite añadir tratamientos al catálogo antes de tener las fotos. La galería simplemente no aparece.

---

## DEC-008 · Sección Masajes añadida como 7º tab

**Fecha:** 2026-07-06  
**Decisión:** Masajes se integra como nuevo tab en el catálogo existente, no como sección separada.  
**Razón:** Mantiene consistencia UX con los demás servicios. El usuario navega por tabs, no por páginas.  
**Tratamientos incluidos:** Back Ritual, Swedish Full Body, Aroma Soul, Bioenergético, Cráneo Facial, Deep Relief, Piernas Ligeras, Mom Glow, Foot Therapy.

---

## Relacionado

- [[02_Architecture]] — cómo está implementado
- [[04_Errors]] — bugs derivados de estas decisiones
- [[05_Ideas]] — decisiones que podrían revisarse

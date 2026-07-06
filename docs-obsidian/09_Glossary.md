# 09 · Glosario

Términos del dominio del negocio y del código.

---

## Dominio del negocio

**Indiba / Diatermia Indiba**
Tecnología de radiofrecuencia a 448 kHz con evidencia clínica publicada. Usada en tratamientos corporales y faciales del centro. Genera calor en profundidad para estimular tejidos. Se menciona en varios tratamientos del catálogo con badge `⚡ Con Indiba`.

**EMS Sculpt**
Electroestimulación muscular de alta intensidad. Contrae músculos para tonificar y definir sin esfuerzo físico.

**Criolipólisis**
Tratamiento de reducción de grasa localizada mediante frío controlado. Cristaliza células de grasa sin dañar tejidos adyacentes.

**Vacum Rotation / Vacumterapia**
Técnica de masaje con succión y rotación para tratar celulitis y mejorar la microcirculación.

**Effleurage**
Técnica de masaje con deslizamiento suave. Base del masaje sueco.

**Amasamiento**
Técnica de masaje con presión y amasado de la musculatura.

**Reflexología podal**
Terapia que trabaja sobre puntos reflejos en los pies para estimular órganos y sistemas del cuerpo.

**Laminado de cejas**
Tratamiento que fija y dirige los pelos de la ceja hacia arriba para dar volumen y forma. Técnica coreana.

**Tinte híbrido**
Tinte que actúa tanto en el vello como en la piel. Da densidad y color, dura 7–14 días.

**Visagismo**
Técnica de diseño de cejas adaptada a la estructura facial de cada persona.

**Lifting de pestañas**
Tratamiento que riza y levanta las pestañas desde la raíz. Técnica coreana con cistamina y TGA.

**Nano agujas / Derma-pen**
Microagujas que crean microcanales en la piel para potenciar la absorción de activos y estimular colágeno.

---

## Código

**TABS**
Array principal en `content.ts` que contiene todos los tabs del catálogo y sus tratamientos anidados. Es la fuente de verdad del catálogo.

**TabId**
Union type en `types.ts` con los IDs válidos de los tabs. Hay que actualizar este tipo cuando se añade un tab nuevo.

**QuizKey**
Union type en `types.ts` con las opciones del quiz "Encuentra tu tratamiento ideal". Hay que actualizar cuando se añade una opción al quiz.

**QUIZ_DATA**
Record en `content.ts` que mapea cada `QuizKey` a un icono, label, texto descriptivo, tab destino y link de WhatsApp.

**waLink(text)**
Función en `content.ts` que genera una URL `https://wa.me/34661026192?text=...` con el texto precodificado. Se usa en todos los CTA del catálogo.

**galleryFor(id, label)**
Función en `content.ts` que genera el array de 4 imágenes esperadas para un tratamiento dado su ID. Las imágenes deben estar en `public/tratamientos/{id}/1.jpg` etc.

**TreatmentCard**
Componente acordeón que muestra un tratamiento. Controlado por `isOpen` desde el estado de `app/servicios/page.tsx`.

**openTreatmentId**
Estado en `app/servicios/page.tsx` que guarda el ID del tratamiento actualmente abierto. Solo puede haber uno abierto a la vez.

**custom: "depilacion"**
Campo especial en `TabConfig` que indica que ese tab usa el componente `DepilacionTable` en lugar de la lista de `TreatmentCard`.

**scroll-margin-top: 130px**
Regla CSS en `.treatment-item` que compensa el sticky header al usar `scrollIntoView`. Valor = PromoBar (~38px) + Header (~80px) + margen.

**badgeType: "pop" | "new"**
Variante visual del badge de un tratamiento. `"pop"` es dorado, `"new"` es neutro.

---

## Relacionado

- [[01_Project]] — contexto del negocio
- [[02_Architecture]] — cómo se usa cada término en el código

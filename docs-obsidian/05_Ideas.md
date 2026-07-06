# 05 · Ideas y Deuda Técnica

Backlog de mejoras identificadas. Ordenadas por impacto.

---

## 🔴 Alta prioridad

### IDEA-001 · Extraer header compartido

**Problema:** El header (logo centrado, menú móvil, nav links, objeto `SITE`) está copiado en 7 páginas con 150–300 líneas repetidas. Cambiar el teléfono o un nav link requiere editar 7 archivos.  
**Solución:** Crear `app/components/SharedHeader.tsx` que consuma `SITE` de `components/servicios/content.ts` y se use en todas las páginas.  
**Impacto:** Elimina ~1000 líneas de código duplicado. Hace el mantenimiento trivial.  
**Esfuerzo:** Medio (hay variaciones menores entre páginas que hay que unificar).

---

### IDEA-002 · Dividir app/page.tsx (1709 líneas)

**Problema:** La home tiene 20+ componentes inline, lógica de Firebase, animaciones de partículas y todo el layout en un solo archivo.  
**Solución propuesta:**
```
app/
└── components/
    └── home/
        ├── Hero.tsx
        ├── ServicesOverview.tsx
        ├── ReviewsSection.tsx
        ├── FloatingWhatsApp.tsx
        └── ...
```
**Impacto:** Legibilidad y mantenibilidad drásticamente mejor.  
**Esfuerzo:** Alto (hay que trazar dependencias con cuidado para no romper nada).

---

### IDEA-003 · Shared types y utils

**Problema:** `FirestoreReview` y `Review` están definidos dos veces (`page.tsx` y `opinar/page.tsx`). `waLink` existe en múltiples sitios. Si cambia la estructura de Firestore hay que actualizar varios archivos.  
**Solución:**
- `lib/types.ts` — tipos de Firestore compartidos
- `lib/utils.ts` — `waLink`, `normalizeStars`, `formatRelativeDate`  
**Esfuerzo:** Bajo.

---

## 🟡 Prioridad media

### IDEA-004 · Componente Button unificado

**Problema:** Hay 3+ variantes de botón con estilos ligeramente distintos (padding, rounded, fuente) definidas inline en distintas páginas.  
**Solución:** `app/components/ui/Button.tsx` con variantes `primary`, `secondary`, `gold`, etc. El `Button.tsx` de servicios ya existe y puede servir de base.  
**Esfuerzo:** Bajo-medio.

---

### IDEA-005 · SEO por ruta con generateMetadata()

**Problema:** Todas las páginas tienen el mismo título genérico del `layout.tsx`. Google no diferencia entre `/servicios` y `/sobre`.  
**Solución:** Añadir `export async function generateMetadata()` en cada `page.tsx` con título, descripción y OG tags específicos.  
**Esfuerzo:** Bajo.

---

### IDEA-006 · Footer unificado

**Problema:** Hay 3 implementaciones distintas de footer en el proyecto.  
**Solución:** Un `app/components/SharedFooter.tsx` reutilizable.  
**Esfuerzo:** Bajo.

---

### IDEA-007 · Iconos SVG como componentes

**Problema:** El icono de Instagram aparece 5+ veces idéntico. `Shield`, `Star`, `Spark` definidos inline en `page.tsx`.  
**Solución:** `app/components/ui/icons/` con un componente por icono.  
**Esfuerzo:** Bajo.

---

## 🟢 Cosmético / nice-to-have

### IDEA-008 · Limpiar prop `active` en NavA

**Problema:** `NavA` en `privacidad/page.tsx` tiene prop `active?: boolean` declarado pero nunca usado ni aplicado.  
**Solución:** Eliminar la prop o implementarla.  
**Esfuerzo:** Mínimo.

---

### IDEA-009 · generateMetadata en /bio

**Problema:** `/bio/page.tsx` probablemente sin metadata.  
**Solución:** Añadir metadata con nombre de la esteticista y descripción.

---

### IDEA-010 · Verificar imports no usados en page.tsx

**Problema:** Un archivo de 1709 líneas probablemente tiene imports que ya no se usan.  
**Solución:** Ejecutar ESLint + revisar warnings de TypeScript.

---

## Relacionado

- [[02_Architecture]] — estado actual
- [[03_Decisions]] — por qué está así
- [[08_Workflows]] — cómo implementar estas mejoras

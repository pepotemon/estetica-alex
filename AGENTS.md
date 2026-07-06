# AGENTS.md — Instrucciones para Claude Code

## Proyecto
Alex Estética — Next.js 16 · React 19 · TypeScript · Tailwind v4 · Firebase · Vercel

Repositorio: github.com/pepotemon/estetica-alex · Branch principal: `main`

---

## Second Brain — docs-obsidian/

Este proyecto usa un sistema de documentación viva en `docs-obsidian/`. Claude Code debe leerlo y mantenerlo.

### Leer antes de trabajar

Para cualquier tarea de más de 5 minutos, leer primero:
- `docs-obsidian/02_Architecture.md` — estructura del proyecto, patrones clave
- `docs-obsidian/03_Decisions.md` — decisiones ya tomadas (no reinventar la rueda)
- `docs-obsidian/04_Errors.md` — bugs ya resueltos (no resolver dos veces el mismo problema)

Para tareas de contenido del catálogo, leer también:
- `docs-obsidian/01_Project.md` — qué es el proyecto y qué páginas tiene

### Actualizar después de cambios relevantes

Después de cualquier sesión con cambios significativos, actualizar:

| Si hubo... | Actualizar |
|------------|------------|
| Bug encontrado y resuelto | `docs-obsidian/04_Errors.md` — añadir ERR-XXX |
| Decisión técnica tomada | `docs-obsidian/03_Decisions.md` — añadir DEC-XXX |
| Cambio en código o contenido | `docs-obsidian/06_Changelog.md` — añadir entrada con fecha y commits |
| Idea de mejora identificada | `docs-obsidian/05_Ideas.md` — añadir IDEA-XXX |
| Cambio en la arquitectura | `docs-obsidian/02_Architecture.md` — actualizar sección relevante |
| Nuevo término del dominio | `docs-obsidian/09_Glossary.md` — añadir definición |

No actualizar la documentación para: correcciones de typos, cambios de 1 línea, ajustes de contenido menores.

### Formato de los documentos

Los documentos usan sintaxis Obsidian. Usar siempre:
- `[[Nombre_Nota]]` para enlaces internos entre documentos
- `[[Nombre_Nota#Sección]]` para enlazar a una sección específica
- Prefijos de ID: `ERR-XXX`, `DEC-XXX`, `IDEA-XXX` para trazabilidad

---

## Reglas de trabajo

### Antes de editar código

1. Leer el archivo completo antes de editar (nunca editar a ciegas)
2. Verificar TypeScript antes de commitear: `npx tsc --noEmit`
3. No hacer cambios fuera del alcance de la tarea (no "aprovechar" para limpiar)

### Fuente de verdad del catálogo

**Todo el contenido del catálogo vive en `components/servicios/content.ts`.**
Nunca definir tratamientos, precios o textos en los componentes.
Si añades un tab nuevo: actualizar `TabId` en `types.ts` y `QUIZ_DATA` en `content.ts`.
Si añades una opción al quiz: actualizar `QuizKey` en `types.ts`.

### Commits

- Mensajes en español, descriptivos del cambio
- Un commit por tema (no mezclar bug fix con feature)
- Formato: `verbo en infinitivo + descripción` (ej: "corregir scroll al abrir tratamiento")

### No hacer nunca

- Definir contenido de tratamientos fuera de `content.ts`
- Crear archivos de documentación o README innecesarios
- Añadir dependencias sin justificación
- Modificar `node_modules` o archivos generados (`next-env.d.ts`, `tsconfig.tsbuildinfo`)
- Hacer push a `main` sin verificar TypeScript

---

## Flujo de trabajo: Claude Code ↔ Git ↔ docs-obsidian

```
INICIO DE SESIÓN
  └── Leer docs-obsidian/02_Architecture.md + 03_Decisions.md
  └── Revisar docs-obsidian/04_Errors.md si hay bug a resolver

DURANTE EL TRABAJO
  └── Editar código
  └── npx tsc --noEmit (verificar)

AL TERMINAR
  ├── git add [archivos específicos]
  ├── git commit -m "descripción"
  ├── git push
  └── Actualizar docs-obsidian/ según la tabla de arriba
```

---

## Contexto rápido para nuevas sesiones

**Qué es:** Web de presentación de Alex Estética (centro de estética, Gran Canaria). Sin reservas online — toda la conversión va a WhatsApp.

**Lo más importante del código:**
- `components/servicios/content.ts` — toda la data del catálogo (no toques la estructura, solo edita contenido)
- `app/servicios/page.tsx` — la página del catálogo (estado de tabs y acordeones)
- `components/servicios/TreatmentCard.tsx` — acordeón de tratamiento con scroll gestionado

**Deuda técnica conocida:** header duplicado en 7 páginas, `app/page.tsx` monolítico (~1709 líneas). Ver `docs-obsidian/05_Ideas.md`.

**Deployment:** Push a `main` → Vercel despliega automáticamente.

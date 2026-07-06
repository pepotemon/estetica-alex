# 08 · Workflows

Cómo trabajar en este proyecto de forma eficiente.

---

## Workflow: Añadir o modificar un tratamiento

1. Abrir `components/servicios/content.ts`
2. Localizar el tab correspondiente (`id: "cuerpo"`, `"masajes"`, etc.)
3. Añadir o editar el objeto de tratamiento siguiendo la estructura existente
4. Si es un tab nuevo: añadir el literal al type `TabId` en `types.ts` y una entrada en `QUIZ_DATA`
5. Si es un tipo de quiz nuevo: añadir a `QuizKey` en `types.ts`
6. Verificar TypeScript: `npx tsc --noEmit`
7. Commit + push

**Nunca** definir contenido de tratamientos en los componentes. Solo en `content.ts`.

---

## Workflow: Fix de bug visual

1. Reproducir el bug (describir el síntoma exacto)
2. Identificar el componente responsable (`TreatmentCard`, `CatalogSection`, `Header`, etc.)
3. Leer el componente completo antes de editar
4. Hacer el fix mínimo necesario (no aprovechar para limpiar)
5. Verificar TypeScript
6. Commit descriptivo
7. Actualizar [[04_Errors]] con la causa raíz y la solución

---

## Workflow: Actualizar precios mensuales

Los precios están todos en `components/servicios/content.ts` dentro del array `TABS`. Buscar por el campo `prices` del tratamiento a actualizar. También revisar `DEPILACION_MUJER` y `DEPILACION_HOMBRE` para la tabla de depilación.

La promo mensual se actualiza en la función `getMonthlyPromo()` al principio del mismo archivo.

---

## Workflow: Deploy

El proyecto se despliega automáticamente en Vercel al hacer push a `main`. No hay pasos manuales.

```bash
git add [archivos]
git commit -m "descripción del cambio"
git push
```

Vercel construye y despliega en ~1-2 minutos.

---

## Workflow: Añadir imágenes a un tratamiento

Las imágenes se sirven desde `public/tratamientos/{treatment-id}/`:

```
public/
└── tratamientos/
    └── back-ritual/
        ├── 1.jpg
        ├── 2.jpg
        ├── 3.jpg
        └── 4.jpg
```

El ID del tratamiento es el campo `id` en `content.ts`. Si las imágenes no existen, la galería simplemente no aparece (manejo de error automático).

---

## Workflow: Mantener el Second Brain actualizado

Después de cualquier sesión de trabajo relevante:

1. **Si hubo bug:** Añadir entrada en [[04_Errors]] con síntoma, causa y solución
2. **Si hubo decisión técnica:** Añadir entrada en [[03_Decisions]]
3. **Si hubo cambios de código:** Añadir entrada en [[06_Changelog]]
4. **Si surgió idea de mejora:** Añadir entrada en [[05_Ideas]]
5. **Actualizar [[00_Index]]** si cambia el estado general del proyecto

Opcionalmente, crear una nota en `Daily/YYYY-MM-DD.md` con el resumen de la sesión.

---

## Comandos útiles

```bash
# Verificar TypeScript sin compilar
npx tsc --noEmit

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Ver últimos commits
git log --oneline -10
```

---

## Relacionado

- [[07_Prompts]] — prompts para Claude Code
- [[02_Architecture]] — estructura del proyecto
- [[05_Ideas]] — mejoras pendientes

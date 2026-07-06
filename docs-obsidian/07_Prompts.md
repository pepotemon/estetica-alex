# 07 · Prompts para Claude Code

Prompts probados y útiles para trabajar en este proyecto.

---

## Contenido del catálogo

### Añadir un tratamiento nuevo a un tab existente
```
Añade el siguiente tratamiento al tab "[nombre-tab]" en components/servicios/content.ts.
Sigue exactamente la estructura de los tratamientos existentes del mismo tab.
Incluye: id, icon, name, tagline, badge (si aplica), gallery, descriptionBlocks (qué hace + para quién es ideal), tags (duración, características), prices, ctaPrimary con waLink.
Datos del tratamiento: [pegar datos]
```

### Añadir un tab nuevo completo
```
Añade un nuevo tab al catálogo de servicios. Antes de empezar, confirma que entiendes la estructura leyendo los primeros 200 líneas de components/servicios/content.ts y el archivo types.ts. El nuevo tab se llama "[nombre]" con los siguientes tratamientos: [datos]
```

### Actualizar precio de un tratamiento
```
Actualiza el precio de "[nombre tratamiento]" en components/servicios/content.ts. El nuevo precio es €XX. Busca por el id del tratamiento.
```

---

## Bugs y diagnóstico

### Investigar un bug visual
```
Hay un bug visual en [descripción del síntoma]. Antes de tocar código, analiza los componentes relevantes y dime cuál es la causa raíz. No hagas cambios todavía.
```

### Diagnóstico de deuda técnica
```
Analiza el proyecto en busca de código duplicado, componentes sin usar, imports muertos y problemas de estructura. Sé específico con rutas y líneas. Agrupa por severidad.
```

---

## Refactorización (ver [[05_Ideas]])

### Extraer header compartido
```
Quiero extraer el header que está duplicado en todas las páginas a un componente compartido. Lee primero app/page.tsx y app/sobre/page.tsx para entender las variaciones que hay entre ellos. Propón la estructura del componente antes de implementar.
```

### Dividir page.tsx
```
app/page.tsx tiene más de 1700 líneas. Quiero extraer los componentes inline a archivos separados en app/components/home/. Lee el archivo completo primero, lista los componentes que identificas y propón la estructura de carpetas antes de hacer cualquier cambio.
```

---

## Documentación (este Second Brain)

### Actualizar changelog después de cambios
```
Acabo de hacer los siguientes cambios: [descripción]. Actualiza docs-obsidian/06_Changelog.md añadiendo una nueva entrada con fecha de hoy, los commits relevantes y qué archivos cambiaron. Si hubo bugs, añádelos también a docs-obsidian/04_Errors.md.
```

### Registrar una decisión técnica
```
Acabamos de decidir [descripción de la decisión]. Añade una nueva entrada en docs-obsidian/03_Decisions.md con el formato DEC-XXX, explicando la decisión, la razón y las consecuencias.
```

---

## Relacionado

- [[08_Workflows]] — flujo completo de trabajo
- [[02_Architecture]] — contexto del proyecto

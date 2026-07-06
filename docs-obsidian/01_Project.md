# 01 · Proyecto

## Qué es

Sitio web de **Alex Estética**, centro de estética y bienestar ubicado en Gran Canaria. Es una web de presentación de servicios con catálogo interactivo, sistema de reseñas con Firebase y formulario de contacto vía WhatsApp.

No hay e-commerce ni sistema de reservas online. Toda la conversión pasa por WhatsApp.

## Cliente

- **Negocio:** Alex Estética
- **Ciudad:** Vecindario, Gran Canaria
- **Dirección:** Av. Canarias 450, Bloque B, Local 3
- **Teléfono:** 661 026 192
- **Horario:** Lun–Vier 9:00–13:00 y 16:00–20:00 · Sab 9:00–13:00
- **CTA principal:** WhatsApp (`wa.me/34661026192`)

## Páginas del sitio

| Ruta | Descripción |
|------|-------------|
| `/` | Home — hero, servicios destacados, reseñas, CTA final |
| `/servicios` | Catálogo completo con tabs y acordeones por tratamiento |
| `/sobre` | Sobre nosotros / presentación del centro |
| `/opinar` | Página de reseñas (leer + enviar, conectado a Firebase) |
| `/curso` | Página de formación / cursos que ofrece el centro |
| `/bio` | Bio de la esteticista |
| `/privacidad` | Política de privacidad |
| `/aviso-legal` | Aviso legal |
| `/cookies` | Política de cookies |

## Secciones del catálogo (`/servicios`)

El catálogo está organizado en **7 tabs**:

| ID | Nombre | Tipo |
|----|--------|------|
| `cuerpo` | 01 · Cuerpo | Tratamientos corporales (grasa, celulitis, moldeo) |
| `recuperacion` | 02 · Recuperación | Pre/postoperatorio, mantenimiento |
| `rostro` | 03 · Rostro | Faciales, limpieza, radiofrecuencia |
| `laser-avanzado` | 04 · Láser Avanzado | Eliminación de tatuajes |
| `depilacion` | 05 · Depilación Láser | Tabla de precios por zonas (componente custom) |
| `cejas` | 06 · Cejas & Pestañas | Lifting, hilo, laminado, tinte híbrido |
| `masajes` | 07 · Masajes | 9 masajes terapéuticos y de bienestar |

## Objetivo del sitio

1. Presentar los servicios del centro de forma clara y atractiva
2. Resolver dudas antes de que el cliente llame
3. Redirigir al WhatsApp para agendar cita
4. Recoger y mostrar reseñas de clientes reales

## Relacionado

- [[02_Architecture]] — cómo está construido
- [[03_Decisions]] — decisiones de diseño
- [[09_Glossary]] — términos del dominio

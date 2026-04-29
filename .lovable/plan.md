# Plan: Copy fixes + WhatsApp-only contact + Reordering

## 1. Copy changes

### Hero (`src/components/sections/Hero.tsx`)
- Subtitle → "Encontrá la cobertura que necesitás con una experiencia Simple, Rápida y Confiable."

### CoverageCategories (`src/utils/constants.ts` → `COVERAGE_CATEGORIES`)
Replace `sectionDescription` of:
- **Movilidad**: "En A1 Broker diseñamos coberturas a medida para autos, motos y flotas. Te respaldamos ante robos o accidentes con las mejores compañías y gestión de siniestros al instante."
- **Hogar y Propiedad**: "Tu hogar, protegido integralmente. Aseguramos tu esfuerzo con coberturas ante incendio, robo, daños por agua y cristales. Además, contás con asistencia domiciliaria 24h (plomería, electricidad y cerrajería) para tu total tranquilidad."
- **Salud y Personas**: "Respaldo total para tu equipo y proyectos. Gestionamos tu ART y Seguros de Accidentes Personales para independientes, personal doméstico o empresas. Garantizamos cumplimiento legal, atención médica inmediata y respaldo financiero ante cualquier imprevisto laboral."
- **Vida Urbana y Tecnología**: "Protección para tu día a día. Aseguramos lo que llevás con vos: celular, bolso y tecnología. Además, viajá tranquilo con nuestra Asistencia al Viajero internacional. Soluciones integrales frente a imprevistos, en cuotas accesibles."

In `CoverageCategories.tsx` final CTA box: "¿Buscás algo específico? Escribinos. Estamos acá para diseñar una solución que se adapte justo a lo que necesitás." → button → WhatsApp.

### SegurosSection (`src/components/sections/SegurosSection.tsx`)
- "Somos analistas de riesgos." → "Somos Analistas de Riesgos"

### SegurosVidaSection (`src/components/sections/SegurosVidaSection.tsx`)
- Intro long copy → "Tu futuro y el de tu familia, asegurados. Planificá con tranquilidad. Analizamos tu perfil para garantizar que, pase lo que pase, tu familia mantenga su nivel de vida y estabilidad económica."
- Promesa → "Nuestra promesa es convertir tu inversión en un capital Rentable, Predecible y Seguro."

### MedicinaSection (`src/components/sections/MedicinaSection.tsx`)
- Intro → "No des más vueltas con tu prepaga. Comparamos las mejores opciones del mercado para que tengas la cartilla médica que necesitás al mejor precio."

### Respuesta / contacto copy
- Replace "Respuesta garantizada en menos de 10 minutos" wherever present (Contacto, Cotizar, Seguros) with: "Te ayudamos a elegir tu cobertura. Consultanos ahora. Te respondemos en el momento para que no pierdas tiempo. Atención: L a V de 9 a 18 h."

### Vocabulario (búsqueda global)
- Verificar y corregir en todo el código: "Arte"→"ART", "Precauciones"→"Cauciones", "Médico suizo"→"Swiss Medical", "Menta"→"Omint". (Ya están correctos en `constants.ts`; revisar otros archivos por las dudas.)

### Footer (`src/components/layout/Footer.tsx`)
- Dirección → "Juan Manuel Fragio 175 PB 3 — Edif. \"Los Naranjos\" — Ituzaingó Norte"

## 2. Estructura / Orden

### Home (`src/pages/Home.tsx`)
Reordenar para: **SegurosSection (Patrimoniales) → SegurosVidaSection (Vida y Retiro) → MedicinaSection (Prepaga)**.

### Mega-menu Header (`src/components/layout/Header.tsx`)
Desktop: reordenar columnas a **Seguros / Seguros de Vida / Medicina Prepaga** (coherente con Home).

### Bug menú mobile "Productos"
Actualmente el menú mobile no tiene título "Productos" plegable; lista las 3 categorías sueltas. El cliente dice que "salta error al acceder a Productos". Probable causa: en mobile no existe entrada llamada "Productos". Acción: agregar un acordeón "Productos" en mobile que contenga las 3 sub-secciones (Seguros, Seguros de Vida, Medicina Prepaga) usando `Collapsible`, evitando overflow y el viewport de 100vh. Verificar también que no haya links rotos en `SEGUROS_ITEMS` paths.

## 3. Eliminación de Formularios → WhatsApp directo

Número: `5491133258129`. Helper nuevo:

`src/utils/whatsapp.ts`
```ts
export const WHATSAPP_NUMBER = "5491133258129";
export const buildWhatsAppUrl = (interest: string) => {
  const msg = `Hola, estuve viendo los servicios de A1 Broker y estoy interesado en ${interest}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};
```

### Páginas / componentes a modificar

- **`src/pages/Cotizar.tsx`**: reemplazar la página entera por una landing simple que redirige/abre WhatsApp con mensaje "cotizar un seguro". Mantener ruta `/cotizar` para no romper links existentes; el contenido será un CTA grande "Hablar por WhatsApp".
- **`src/components/cotizar/QuoteFormFields.tsx`**: eliminar archivo (ya no se usa).
- **`src/pages/productos/MedicinaPrepagas.tsx`**: quitar el formulario "ANÁLISIS GRATUITO" y reemplazar por bloque CTA WhatsApp con interés `"un plan de Medicina Prepaga {provider}"`.
- **`src/pages/productos/SegurosVida.tsx`**: quitar formulario, reemplazar por CTA WhatsApp con interés `"un Seguro de Vida {tipo}"`.
- **`src/pages/productos/Seguros.tsx`**: el CTA ya redirige; cambiar a WhatsApp directo con interés `"un seguro de {tipo}"`.
- **`src/pages/Contacto.tsx`**: si hay formulario, reemplazar por CTA WhatsApp + datos de contacto + email/whatsapp icons. Interés: `"información general"`.
- **Botones "Cotizar Ahora" en Header (desktop + mobile)**: cambiar `to="/cotizar"` por `<a href={buildWhatsAppUrl("cotizar un seguro")} target="_blank">` (manteniendo texto "Cotizar Ahora").
- **Botones en secciones Home**:
  - `SegurosSection`: "Cotizar Mis Seguros" → WhatsApp con interés "Seguros Patrimoniales".
  - `SegurosVidaSection`: WhatsApp con interés "Seguros de Vida y Retiro".
  - `MedicinaSection`: WhatsApp con interés "Medicina Prepaga".
  - `CoverageCategories` CTA final: WhatsApp con interés "asesoramiento personalizado".
  - `EnterpriseValue` (Calendly): mantener Calendly pero agregar botón secundario WhatsApp con interés "soluciones para empresas".
  - `Hero` botón "Llamanos": cambiar a WhatsApp con interés "conocer las coberturas" (mantiene rol de contacto rápido) o conservar `tel:` — **consultar abajo**.
- **`src/components/floating/WhatsAppButton.tsx`**: agregar mensaje precargado genérico "información general".
- **Footer**: link "Cotizar" → URL WhatsApp.

### Iconografía contacto
En Footer y Contacto, agregar fila con icono WhatsApp (link directo) y mail clickeable (ya existen; verificar que estén ambos con iconos consistentes).

## 4. Texto recortado
Revisar en `CoverageCategories.tsx` que las cards "Accidentes Personales" y "Responsabilidad Civil" no tengan `truncate`/`line-clamp` que corten el texto. Si lo tienen, quitarlos o aumentar `line-clamp` y permitir wrap.

## 5. Imágenes asistentes virtuales
El cliente menciona "Punto 15: agregar fotos de asistentes virtuales". Las secciones (Lía/Sofía/Clara) ya existen en SegurosSection/SegurosVidaSection/MedicinaSection. Sin nuevos assets aportados, **se deja placeholder y se solicita al cliente las fotos**; no se modifica código de imagen ahora.

## Pregunta abierta
- El botón Hero "Llamanos" actualmente abre `tel:`. ¿Mantener `tel:` o convertirlo también a WhatsApp? Por defecto del feedback ("todo botón debe ir a WhatsApp"), se convertirá a WhatsApp salvo indicación contraria.

## Secuencia de implementación
1. Crear `src/utils/whatsapp.ts`.
2. Aplicar copy fixes en constants y secciones.
3. Reordenar Home y mega-menú Header.
4. Reemplazar formularios por CTAs WhatsApp en las 5 páginas.
5. Reemplazar todos los botones `Cotizar` por WhatsApp.
6. Fix mobile menu "Productos" con Collapsible.
7. Footer: dirección + link Cotizar.
8. Eliminar `QuoteFormFields.tsx`.

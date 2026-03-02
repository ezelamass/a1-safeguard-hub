

# Plan de Implementacion - Feedback Completo A1 Broker

## Resumen

Este plan cubre 3 grandes bloques: correcciones de diseno/funcionamiento en la pagina de inicio, actualizacion de textos de venta por seccion en la grilla de coberturas, y la creacion de un nuevo sistema de formularios de cotizacion dinamicos con campos condicionales segun el tipo de riesgo elegido.

---

## Bloque 1: Correcciones de Diseno y Funcionamiento (Hero)

### 1.1 Texto Principal
- **Archivo**: `src/components/sections/Hero.tsx` (linea 30)
- Cambiar "Seguros a tu medida" por "Cobertura a tu medida" (con C mayuscula)

### 1.2 Alineacion de los 3 iconos de valor agregado
- **Archivo**: `src/components/sections/Hero.tsx` (lineas 60-78)
- Los 3 bloques (Sin costos de gestion, Multimarca, Respuesta en 10') necesitan alineacion simetrica
- Ajustar el grid para que queden centrados y con espaciado uniforme en mobile y desktop
- Agregar `text-center` o `justify-center` en cada item para simetria

### 1.3 Boton "Llamanos" 
- **Archivo**: `src/components/sections/Hero.tsx` (lineas 48-50)
- El boton ya tiene `<a href="tel:+5491133258129">` pero puede no funcionar en ciertos contextos
- Verificar que el variant "primary" del boton renderice correctamente el link. El boton usa `asChild` con un `<a>`, lo cual deberia funcionar. Se verificara en el navegador y se corregira si es necesario

### 1.4 Carrusel de imagenes
- Las fotos actuales del carrusel son las que envio el cliente previamente
- Este punto queda **pendiente** hasta que el cliente envie las nuevas imagenes. No se modifica codigo ahora

---

## Bloque 2: Actualizacion de Textos de Venta (Coberturas)

### 2.1 Actualizar descripciones en COVERAGE_CATEGORIES
- **Archivo**: `src/utils/constants.ts` (lineas 111-162)
- Reemplazar las descripciones cortas actuales de cada categoria/item por los nuevos copys de venta proporcionados

Los cambios especificos en `COVERAGE_CATEGORIES`:

| Categoria | Texto nuevo |
|-----------|-------------|
| **Movilidad** (descripcion general para Autos, Motos, Flotas, Embarcaciones) | "Tu libertad, siempre protegida. No solo aseguramos tu vehiculo; protegemos tu tranquilidad en cada kilometro..." |
| **Bicicletas y Monopatines** (Micro-movilidad) | "Movete inteligente, movete seguro. La ciudad cambio y tu forma de moverte tambien..." |
| **Combinado Familiar** (Hogar) | "Tu refugio, nuestro compromiso. Tu casa es mucho mas que paredes..." |
| **Responsabilidad Civil** (RC Profesional) | "Blindaje para tu prestigio profesional. Sabemos cuanto te costo construir tu carrera..." |
| **Empresas y Trabajo** (Integral de Comercio, Consorcio) | "La continuidad de tu negocio es nuestra prioridad. Un imprevisto no tiene por que detener tu crecimiento..." |
| **ART, Accidentes Personales** (Personas) | "Cuidamos a los que hacen crecer tu proyecto. Cumplir con la ley es solo el principio..." |
| **Transporte de Mercaderias** | "Tu carga segura, de punta a punta. El transporte es el motor de la economia..." |
| **Tecnologia, Bolso Protegido, Asist. Viajero** (Otros) | "Proteccion para tu estilo de vida. Desde el celular que llevas en la mano hasta el bolso..." |

### 2.2 Modificar CoverageCategories para mostrar textos largos
- **Archivo**: `src/components/sections/CoverageCategories.tsx`
- Agregar un campo `sectionDescription` a cada categoria en `COVERAGE_CATEGORIES` para el texto de venta largo
- Mostrar ese texto debajo del header de cada categoria, antes de la grilla de items
- Mantener las descripciones cortas en cada item individual

---

## Bloque 3: Formulario de Cotizacion Dinamico

Este es el cambio mas grande. Se reemplaza el formulario actual simple de `Cotizar.tsx` por un sistema multi-paso con campos condicionales.

### 3.1 Estructura del nuevo formulario

```text
+------------------------------------------+
|  CABECERA (fija para todos los riesgos)  |
|  - Nombre y Apellido / Razon Social      |
|  - DNI / CUIT                            |
|  - Localidad y Codigo Postal             |
|  - Telefono WhatsApp                     |
|  - Email                                 |
|  - Fecha de nacimiento                   |
+------------------------------------------+
         |
         v
+------------------------------------------+
|  SELECTOR DE RIESGO (dropdown actual)    |
+------------------------------------------+
         |
         v (campos dinamicos segun riesgo)
+------------------------------------------+
|  CUERPO CONDICIONAL                      |
|  (campos especificos por tipo)           |
+------------------------------------------+
         |
         v
+------------------------------------------+
|  CIERRE (fijo para todos)                |
|  - Medio de pago preferido (dropdown)    |
|  - Terminos y condiciones                |
|  - Boton enviar                          |
+------------------------------------------+
```

### 3.2 Archivos a crear/modificar

**Nuevo archivo**: `src/components/cotizar/QuoteFormFields.tsx`
- Componente que renderiza los campos condicionales segun el riesgo seleccionado
- Cada grupo de riesgo tiene sus campos especificos:
  - **Movilidad** (autos, motos): Marca/modelo, Ano, GNC (Si/No + valor), Uso (Particular/Comercial/Uber), Tipo cobertura
  - **Flotas**: Igual que movilidad + boton para adjuntar Excel
  - **Micro-movilidad** (bicicletas, monopatines): Tipo, Marca/modelo, Suma asegurada, Accesorios
  - **Hogar/Comercio** (combinado_familiar, integral_comercio, incendio): Tipo vivienda, m2, Seguridad, Suma asegurada, Linderos peligrosos
  - **Personas** (art, accidentes_personales): Actividad, CBU/Nomina, Suma asegurada, Ambito. ART: adjuntar archivo
  - **RC Profesional** (responsabilidad_civil): Profesion, Matricula, Reclamos anteriores, Suma asegurada. Condicional medico: ambulancia, emergencias, jefe sector, personal a cargo
  - **Empresas/Especiales** (cauciones, transporte, tro): Tipo actividad RC, Datos alquiler Caucion, Trayecto/mercaderia Transporte. TRO: adjuntar inspeccion/balance
  - **Otros** (tecnologia, embarcaciones, asistencia_viajero, bolso_protegido, sepelio): Datos equipo, Datos nave, Destino/fechas/edades

**Modificar**: `src/pages/Cotizar.tsx`
- Expandir el schema de Zod para incluir los campos de cabecera nuevos (DNI/CUIT, localidad, CP, fecha nacimiento, telefono WhatsApp)
- Agregar el selector de riesgo existente
- Importar y renderizar `QuoteFormFields` condicionalmente segun el riesgo
- Agregar el cierre con medio de pago (Debito Automatico CBU / Tarjeta de Credito)
- Usar Shadcn DatePicker para fecha de nacimiento
- Usar inputs tipo `file` para los botones de adjuntar archivos (Excel flotas, ART, TRO)

### 3.3 Validacion con Zod
- Campos de cabecera: todos requeridos con validaciones apropiadas
- Campos condicionales: validacion dinamica usando `z.discriminatedUnion` o `z.superRefine` segun el riesgo seleccionado
- Los campos opcionales como "adjuntar archivo" no seran obligatorios

### 3.4 Flujo de envio
- Al enviar, se genera el mensaje de WhatsApp con todos los datos del formulario
- Los archivos adjuntos no se pueden enviar por WhatsApp directamente; se mostrara un aviso al usuario de que los archivos seran solicitados por el asesor

---

## Secuencia de implementacion

1. Correcciones Hero (texto, alineacion, boton) - `Hero.tsx`
2. Actualizar textos de venta en `constants.ts` y `CoverageCategories.tsx`
3. Crear componente de campos condicionales `QuoteFormFields.tsx`
4. Refactorizar `Cotizar.tsx` con el nuevo formulario completo


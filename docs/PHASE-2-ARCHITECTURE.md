# FASE 2: Arquitectura del Portal

> **Proyecto:** Smart Medical Tourism
> **Fecha:** 2024-08-06
> **Versión:** 1.0
> **Estado:** Propuesta para aprobación

---

## Resumen Ejecutivo

Este documento define la arquitectura completa de Smart Medical Tourism, incluyendo navegación, estructura de URLs, jerarquías de contenido, y templates de proveedores. La arquitectura está diseñada para:

1. **Escalar** de Costa Rica a toda Latinoamérica
2. **Capturar** búsquedas con intención comercial alta
3. **Distribuir** autoridad SEO eficientemente
4. **Convertir** visitantes en leads cualificados

---

## 1. Navegación Principal

### 1.1 Análisis de la Navegación Actual

La navegación actual tiene 6 elementos principales:
- Treatments, Providers, Guides, Costs, Patient Stories, Blog

**Problemas identificados:**
- ❌ No hay "Destinations" (elemento clave para turismo médico)
- ❌ "Providers" es vago (debería ser más específico)
- ❌ "Patient Stories" sin contenido verificable aún
- ❌ "Costs" sin calculadora ni datos reales

### 1.2 Navegación Propuesta - Versión 1.0 (Lanzamiento)

Para el lanzamiento inicial, propongo **5 elementos** en navegación principal:

```
┌─────────────────────────────────────────────────────────────────┐
│  SMT Logo    Destinations  Treatments  How It Works  Blog  [CTA]│
└─────────────────────────────────────────────────────────────────┘
```

| Elemento | Justificación | Prioridad |
|----------|---------------|-----------|
| **Destinations** | Core del turismo médico. CR como primer destino | CRÍTICO |
| **Treatments** | Categorías de procedimientos | CRÍTICO |
| **How It Works** | Genera confianza, explica proceso | ALTO |
| **Blog** | Contenido educativo y SEO | ALTO |
| **[Contact CTA]** | Conversión primaria | CRÍTICO |

### 1.3 Elementos para Fase 2 (Post-Lanzamiento)

Agregar después cuando exista contenido:

| Elemento | Requisito previo |
|----------|------------------|
| Clinics | Mínimo 5 clínicas verificadas |
| Doctors | Mínimo 10 doctores verificados |
| Patient Stories | Mínimo 3 testimonios con consentimiento |
| Cost Guide | Datos de precios verificables |

### 1.4 Submenús Propuestos

#### Destinations
```
Destinations
├── Costa Rica (Featured) ←── Destacado visual
│   ├── San José
│   ├── Escazú
│   └── View All Costa Rica
├── Coming Soon
│   ├── Panama
│   ├── Colombia
│   └── Mexico
└── Compare Destinations
```

#### Treatments
```
Treatments
├── Dental
│   ├── Dental Implants
│   ├── Veneers
│   └── All Dental
├── Cosmetic Surgery
├── Weight Loss
├── Gastroenterology
├── Orthopedics
├── Fertility
└── All Treatments
```

#### How It Works
```
How It Works
├── Getting Started Guide
├── Planning Your Trip
├── What to Expect
├── After Your Procedure
└── FAQs
```

### 1.5 Footer Propuesto

```
┌─────────────────────────────────────────────────────────────────┐
│ DESTINATIONS        TREATMENTS         RESOURCES      COMPANY   │
│ Costa Rica          Dental             Travel Guide   About     │
│ └─ San José         Cosmetic Surgery   FAQs           Contact   │
│ └─ Escazú           Weight Loss        Blog           Editorial │
│ Panama (Soon)       Gastroenterology                  Privacy   │
│ Colombia (Soon)     Orthopedics                       Terms     │
│                     Fertility                         Disclaimer│
├─────────────────────────────────────────────────────────────────┤
│ © 2024 Smart Medical Tourism. Information only, not medical    │
│ advice. All providers independently verified. [Disclaimers]    │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Estructura de URLs

### 2.1 Principios de Diseño

1. **Humano-primero**: URLs legibles y descriptivas
2. **Keyword-optimized**: Palabras clave en URLs
3. **Jerárquico**: Refleja estructura del sitio
4. **Consistente**: Mismo patrón en todo el sitio
5. **Sin trailing slash**: `example.com/page` no `example.com/page/`

### 2.2 Convenciones

| Elemento | Formato | Ejemplo |
|----------|---------|---------|
| Separador | Guión `-` | `dental-implants` |
| Case | Lowercase | `costa-rica` |
| Artículos | Omitir | `getting-started` no `the-getting-started` |
| Plurales | Singular para items, plural para índices | `/treatments` vs `/treatment/dental` |

### 2.3 Estructura Completa de URLs

```
PÁGINAS ESTÁTICAS
/                                    → Home
/about                               → About Us
/contact                             → Contact Form
/how-it-works                        → Proceso general
/privacy                             → Privacy Policy
/terms                               → Terms of Service
/disclaimer                          → Medical Disclaimer
/editorial-policy                    → Editorial Policy
/verification-process                → How We Verify Providers

DESTINOS (Geográfico)
/destinations                        → Índice de destinos
/destinations/costa-rica             → Hub de Costa Rica
/destinations/costa-rica/san-jose    → San José específico
/destinations/costa-rica/escazu      → Escazú específico
/destinations/panama                 → Hub de Panamá (futuro)
/destinations/colombia               → Hub de Colombia (futuro)

TRATAMIENTOS (Por categoría y procedimiento)
/treatments                          → Índice de tratamientos
/treatments/dental                   → Categoría dental
/treatments/dental/implants          → Implantes dentales
/treatments/dental/veneers           → Carillas
/treatments/cosmetic-surgery         → Categoría cosmética
/treatments/cosmetic-surgery/rhinoplasty
/treatments/weight-loss              → Categoría peso
/treatments/weight-loss/gastric-sleeve
/treatments/gastroenterology         → Gastroenterología
/treatments/gastroenterology/endoscopy

COMBINACIONES DESTINO + TRATAMIENTO (Alta intención)
/costa-rica/dental-implants          → Implantes en CR
/costa-rica/weight-loss-surgery      → Peso en CR
/costa-rica/gastroenterology         → Gastro en CR
/costa-rica/cosmetic-surgery         → Cosmética en CR
/san-jose/dental-implants            → Implantes en San José

PROVEEDORES
/clinics                             → Índice de clínicas
/clinics/[clinic-slug]               → Perfil de clínica
/doctors                             → Índice de doctores
/doctors/[doctor-slug]               → Perfil de doctor
/hospitals                           → Índice de hospitales
/hospitals/[hospital-slug]           → Perfil de hospital

CONTENIDO
/blog                                → Índice del blog
/blog/[category]                     → Categoría del blog
/blog/[category]/[slug]              → Artículo individual
/guides                              → Índice de guías
/guides/[slug]                       → Guía específica
/faq                                 → Preguntas frecuentes
```

### 2.4 Páginas de Alta Intención (Treatment + Destination)

Estas páginas son **críticas para SEO** porque capturan búsquedas como:
- "dental implants costa rica"
- "gastric sleeve costa rica"
- "plastic surgery san jose costa rica"

**Estructura recomendada:**

```
/{country-slug}/{treatment-slug}
/{city-slug}/{treatment-slug}
```

**Ejemplos Costa Rica:**

| URL | Keyword Target | Prioridad |
|-----|----------------|-----------|
| `/costa-rica/dental-implants` | dental implants costa rica | CRÍTICA |
| `/costa-rica/dental-tourism` | dental tourism costa rica | CRÍTICA |
| `/costa-rica/weight-loss-surgery` | weight loss surgery costa rica | ALTA |
| `/costa-rica/gastric-sleeve` | gastric sleeve costa rica | ALTA |
| `/costa-rica/gastroenterology` | gastroenterology costa rica | ALTA |
| `/costa-rica/cosmetic-surgery` | cosmetic surgery costa rica | MEDIA |
| `/costa-rica/fertility-treatment` | ivf costa rica | MEDIA |
| `/san-jose/dental-implants` | dental implants san jose | ALTA |
| `/escazu/cosmetic-surgery` | plastic surgery escazu | MEDIA |

**Regla anti-duplicación:**
- NO crear `/costa-rica/dental` Y `/treatments/dental` con el mismo contenido
- La página `/costa-rica/dental-implants` debe ser específica de Costa Rica
- La página `/treatments/dental/implants` debe ser educativa general

---

## 3. Estructura Geográfica

### 3.1 Jerarquía de Destinos

```
destinations/
├── costa-rica/                 ← Hub principal (lanzamiento)
│   ├── index (hub page)
│   ├── san-jose/
│   │   └── index
│   ├── escazu/
│   │   └── index
│   ├── santa-ana/
│   │   └── index
│   └── guanacaste/             ← Fase 2
│       └── index
├── panama/                     ← Fase 2
│   ├── index
│   └── panama-city/
├── colombia/                   ← Fase 3
│   ├── index
│   ├── bogota/
│   ├── medellin/
│   └── cartagena/
└── mexico/                     ← Fase 3
    ├── index
    ├── tijuana/
    ├── cancun/
    └── mexico-city/
```

### 3.2 Contenido por Nivel Geográfico

#### Página de País (Hub)
```
/destinations/costa-rica

Contenido:
├── Hero: Por qué Costa Rica para turismo médico
├── Quick Stats: Hospitales, ahorro promedio, idiomas
├── Tratamientos populares en Costa Rica
├── Ciudades principales
├── Clínicas destacadas (cuando existan)
├── Doctores destacados (cuando existan)
├── Información de viaje
│   ├── Visa/requisitos
│   ├── Vuelos directos desde USA/Canadá
│   ├── Mejor época para viajar
│   └── Qué esperar
├── FAQs específicas de Costa Rica
├── CTA: Solicitar información
└── Artículos relacionados del blog

SEO:
├── Title: Medical Tourism Costa Rica | Treatments, Costs & Top Clinics
├── Description: Explore medical tourism in Costa Rica. Find accredited
│   hospitals, qualified doctors, and save 40-70% on dental, cosmetic,
│   and weight loss procedures.
└── Schema: MedicalBusiness + FAQPage
```

#### Página de Ciudad
```
/destinations/costa-rica/san-jose

Contenido:
├── Hero: San José como destino médico
├── Ubicación y cómo llegar
├── Hospitales en San José
├── Clínicas especializadas
├── Opciones de hospedaje/recuperación
├── Qué hacer durante la recuperación
├── Mapa interactivo
└── CTA: Ver proveedores en San José

SEO:
├── Title: Medical Tourism San José Costa Rica | Hospitals & Clinics
├── Description: Find the best hospitals and clinics in San José,
│   Costa Rica for your medical procedure. Compare options and
│   request free quotes.
└── Schema: City + MedicalBusiness
```

### 3.3 Prioridad de Implementación Geográfica

| Fase | Destino | Ciudades | Justificación |
|------|---------|----------|---------------|
| 1.0 | Costa Rica | San José, Escazú | Clientes actuales |
| 1.1 | Costa Rica | Santa Ana | Expansión natural |
| 2.0 | Panama | Panama City | Mercado cercano |
| 2.1 | Colombia | Bogotá, Medellín | Alta demanda |
| 3.0 | Mexico | Tijuana, Cancún | Volumen alto |

---

## 4. Estructura de Tratamientos

### 4.1 Taxonomía de Tratamientos

```
treatments/
├── dental/
│   ├── index (categoría)
│   ├── implants/
│   ├── veneers/
│   ├── crowns/
│   ├── root-canal/
│   ├── teeth-whitening/
│   └── full-mouth-restoration/
├── cosmetic-surgery/
│   ├── index
│   ├── rhinoplasty/
│   ├── breast-augmentation/
│   ├── liposuction/
│   ├── tummy-tuck/
│   ├── facelift/
│   └── brazilian-butt-lift/
├── weight-loss/
│   ├── index
│   ├── gastric-sleeve/
│   ├── gastric-bypass/
│   └── lap-band/
├── gastroenterology/
│   ├── index
│   ├── endoscopy/
│   ├── colonoscopy/
│   └── gastric-procedures/
├── orthopedics/
│   ├── index
│   ├── knee-replacement/
│   ├── hip-replacement/
│   └── spine-surgery/
├── fertility/
│   ├── index
│   ├── ivf/
│   ├── egg-freezing/
│   └── iui/
├── ophthalmology/
│   ├── index
│   ├── lasik/
│   └── cataract-surgery/
└── cardiac/
    ├── index
    └── angioplasty/
```

### 4.2 Contenido por Nivel de Tratamiento

#### Página de Categoría
```
/treatments/dental

Contenido:
├── Hero: Dental Tourism in Latin America
├── Overview del turismo dental
├── Procedimientos disponibles (grid)
├── Comparación de costos vs USA
├── Por qué elegir LATAM para dental
├── Destinos populares para dental
├── Cómo elegir una clínica dental
├── FAQs de dental
├── CTA: Explorar clínicas dentales
└── Artículos relacionados

SEO:
├── Title: Dental Tourism Latin America | Save 50-70% on Dental Work
├── Description: Complete guide to dental tourism in Latin America.
│   Compare costs, find accredited clinics, and save up to 70% on
│   implants, veneers, crowns and more.
└── Schema: MedicalWebPage + FAQPage
```

#### Página de Procedimiento Específico
```
/treatments/dental/implants

Contenido:
├── Hero: Dental Implants Abroad
├── ¿Qué son los implantes dentales?
├── Tipos de implantes
├── El proceso paso a paso
├── Tiempo de tratamiento
├── Costos comparativos (rango, con disclaimer)
├── Factores que afectan el precio
├── Riesgos y consideraciones
├── Cómo elegir un implantólogo
├── Preguntas para hacer al doctor
├── Recuperación y cuidados
├── FAQs
├── CTA: Ver especialistas en implantes
└── Medical Disclaimer

SEO:
├── Title: Dental Implants Abroad | Costs, Process & What to Expect
├── Description: Everything you need to know about getting dental
│   implants abroad. Understand costs, find qualified specialists,
│   and plan your treatment.
└── Schema: MedicalProcedure + FAQPage
```

### 4.3 Prioridad de Tratamientos para Costa Rica

Basado en demanda real y disponibilidad de proveedores:

| Prioridad | Categoría | Procedimientos | Justificación |
|-----------|-----------|----------------|---------------|
| CRÍTICA | Dental | Implants, Veneers | Alta demanda, muchos proveedores |
| ALTA | Gastroenterology | Endoscopy, colonoscopy | Clientes actuales |
| ALTA | Weight Loss | Gastric sleeve | Creciente demanda |
| MEDIA | Cosmetic | Rhinoplasty, lipo | Mercado establecido |
| MEDIA | Fertility | IVF | Nicho específico |
| FUTURA | Orthopedics | Knee, hip | Requiere hospitales |

---

## 5. Perfiles de Proveedores

### 5.1 Tipos de Proveedores

| Tipo | Descripción | URL Pattern |
|------|-------------|-------------|
| Hospital | Centro médico grande, múltiples especialidades | `/hospitals/[slug]` |
| Clinic | Centro especializado, una o pocas especialidades | `/clinics/[slug]` |
| Doctor | Médico individual | `/doctors/[slug]` |
| Dentist | Odontólogo | `/doctors/[slug]` (mismo que doctor) |
| Recovery Center | Centro de recuperación post-operatorio | `/recovery/[slug]` (futuro) |

### 5.2 Template de Perfil de Clínica

```
/clinics/[clinic-slug]

┌─────────────────────────────────────────────────────────────────┐
│ BREADCRUMB: Home > Clinics > Costa Rica > San José > [Clinic]  │
├─────────────────────────────────────────────────────────────────┤
│ [CLINIC PHOTO/GALLERY]                                          │
│                                                                 │
│ CLINIC NAME                                                     │
│ ★★★★☆ (Reviews pending verification)                           │
│ 📍 San José, Costa Rica                                         │
│ 🗣️ English, Spanish                                             │
│                                                                 │
│ [Request Information]  [Visit Website ↗]                       │
├─────────────────────────────────────────────────────────────────┤
│ ABOUT                                                           │
│ Description of the clinic...                                    │
│                                                                 │
│ SPECIALTIES                    │ TREATMENTS OFFERED            │
│ • Gastroenterology             │ • Upper Endoscopy             │
│ • General Surgery              │ • Colonoscopy                 │
│                                │ • ERCP                        │
├─────────────────────────────────────────────────────────────────┤
│ CREDENTIALS                                                      │
│ ┌──────────────────────────────────────────────────────────┐   │
│ │ ⚠️ Provider Verification                                  │   │
│ │ This clinic's information was last reviewed on [DATE].   │   │
│ │ [Learn about our verification process]                   │   │
│ └──────────────────────────────────────────────────────────┘   │
│                                                                 │
│ • Licensed by: [Costa Rica Ministry of Health]                 │
│ • Established: [Year]                                           │
│ • Accreditations: [List if verified]                           │
├─────────────────────────────────────────────────────────────────┤
│ MEDICAL TEAM                                                     │
│ [Doctor Card] [Doctor Card] [Doctor Card]                       │
├─────────────────────────────────────────────────────────────────┤
│ LOCATION & CONTACT                                              │
│ [MAP]                                                           │
│ Address: [Full address]                                         │
│ Phone: [Number]                                                 │
│ Website: [Link with rel="nofollow sponsored" if paid]          │
├─────────────────────────────────────────────────────────────────┤
│ FREQUENTLY ASKED QUESTIONS                                      │
│ [Accordion FAQ specific to clinic]                              │
├─────────────────────────────────────────────────────────────────┤
│ RELATED CONTENT                                                 │
│ • Guide: Getting Dental Work in Costa Rica                      │
│ • Treatment: Dental Implants                                    │
│ • Destination: San José                                         │
├─────────────────────────────────────────────────────────────────┤
│ [Request Information] [Compare Clinics]                         │
├─────────────────────────────────────────────────────────────────┤
│ ℹ️ Medical Disclaimer                                            │
│ Information is for educational purposes only...                 │
│ Last updated: [DATE]                                            │
└─────────────────────────────────────────────────────────────────┘

Schema: MedicalClinic + LocalBusiness + FAQPage + BreadcrumbList
```

### 5.3 Template de Perfil de Doctor

```
/doctors/[doctor-slug]

┌─────────────────────────────────────────────────────────────────┐
│ BREADCRUMB: Home > Doctors > Costa Rica > [Specialty] > [Name] │
├─────────────────────────────────────────────────────────────────┤
│ [PHOTO]  DR. [NAME], [CREDENTIALS]                              │
│          [Specialty]                                             │
│          📍 San José, Costa Rica                                │
│          🗣️ English, Spanish                                    │
│                                                                 │
│          [Request Appointment]  [View Clinic]                   │
├─────────────────────────────────────────────────────────────────┤
│ ABOUT                                                           │
│ Professional biography...                                       │
├─────────────────────────────────────────────────────────────────┤
│ CREDENTIALS & EDUCATION                                         │
│                                                                 │
│ ⚠️ Credentials Verification Notice                              │
│ The credentials listed below were provided by the physician.   │
│ Patients should independently verify credentials before        │
│ proceeding with treatment. [Learn more]                        │
│                                                                 │
│ EDUCATION                                                       │
│ • [Degree] - [Institution], [Country] ([Year])                 │
│                                                                 │
│ BOARD CERTIFICATIONS                                            │
│ • [Certification] - [Issuer] ([Year])                          │
│                                                                 │
│ PROFESSIONAL MEMBERSHIPS                                        │
│ • [Membership]                                                  │
├─────────────────────────────────────────────────────────────────┤
│ SPECIALTIES & PROCEDURES                                        │
│ Primary: [Specialty]                                            │
│ Procedures:                                                     │
│ • Procedure 1                                                   │
│ • Procedure 2                                                   │
├─────────────────────────────────────────────────────────────────┤
│ PRACTICE LOCATIONS                                              │
│ [Clinic Card with link]                                         │
│ [Hospital Card with link]                                       │
├─────────────────────────────────────────────────────────────────┤
│ QUESTIONS TO ASK                                                │
│ • What is your experience with [procedure]?                    │
│ • How many of these procedures have you performed?             │
│ • What are the potential complications?                        │
├─────────────────────────────────────────────────────────────────┤
│ [Request Appointment]                                           │
├─────────────────────────────────────────────────────────────────┤
│ ℹ️ Medical Disclaimer                                            │
│ Last updated: [DATE]                                            │
└─────────────────────────────────────────────────────────────────┘

Schema: Physician + Person + BreadcrumbList
```

### 5.4 Política de Verificación de Proveedores

**IMPORTANTE**: La palabra "Verified" NO debe usarse sin un proceso documentado.

#### Niveles de Estado de Proveedor

| Estado | Badge | Significado | Requisitos |
|--------|-------|-------------|------------|
| Listed | Sin badge | Información básica publicada | Datos públicos verificados |
| Reviewed | "Information Reviewed" | Información revisada | Documentos solicitados y recibidos |
| Verified | "Credentials Verified" | Credenciales verificadas | Verificación independiente completada |
| Featured | "Featured Provider" | Proveedor destacado (puede ser pagado) | Verificado + acuerdo comercial |

#### Proceso de Verificación (Documentar en página pública)

```
/verification-process

1. Solicitud de información
   - Licencia médica vigente
   - Especialidad registrada
   - Dirección física verificable

2. Verificación de documentos
   - Validación con autoridad reguladora
   - Confirmación de especialidades

3. Revisión periódica
   - Actualización cada 12 meses
   - Re-verificación si hay cambios

4. Lo que NO verificamos
   - Resultados de tratamientos
   - Satisfacción de pacientes
   - Precios exactos
```

---

## 6. Sistema de Componentes

### 6.1 Componentes Requeridos

#### Navegación y Layout
- [ ] `MainNav` - Navegación principal con dropdowns
- [ ] `MobileNav` - Navegación móvil (drawer)
- [ ] `Footer` - Footer actualizado
- [ ] `Breadcrumbs` - Con schema markup

#### Cards
- [ ] `TreatmentCard` - Para grids de tratamientos
- [ ] `DestinationCard` - Para destinos
- [ ] `ClinicCard` - Preview de clínica
- [ ] `DoctorCard` - Preview de doctor
- [ ] `BlogCard` - Preview de artículo

#### Perfiles
- [ ] `ClinicProfile` - Página completa de clínica
- [ ] `DoctorProfile` - Página completa de doctor
- [ ] `VerificationBadge` - Badge de estado
- [ ] `CredentialsSection` - Sección de credenciales

#### Contenido
- [ ] `MedicalDisclaimer` - Disclaimer reutilizable
- [ ] `PriceRange` - Mostrar rangos de precio
- [ ] `FAQAccordion` - Con schema
- [ ] `TableOfContents` - Para guías
- [ ] `AuthorCard` - Atribución de autor
- [ ] `LastUpdated` - Fecha de actualización

#### Conversión
- [ ] `ContactForm` - Formulario de contacto
- [ ] `QuoteRequestForm` - Solicitud de cotización
- [ ] `CTASection` - Secciones de llamada a acción
- [ ] `CTAButton` - Botones con variantes por intención

#### SEO
- [ ] `JsonLd` - Wrapper de schema (existe)
- [ ] `BreadcrumbSchema` - Componente específico
- [ ] `MetaTags` - Componente de metadata

### 6.2 Estructura de Componentes

```
src/components/
├── ui/                      # shadcn/ui base
│   ├── button.tsx
│   ├── accordion.tsx
│   ├── card.tsx (nuevo)
│   ├── badge.tsx (nuevo)
│   ├── sheet.tsx (nuevo) - para mobile nav
│   └── ...
├── layouts/
│   ├── Header.tsx (actualizar)
│   ├── Footer.tsx (actualizar)
│   ├── MobileNav.tsx (nuevo)
│   └── Breadcrumbs.tsx (nuevo)
├── cards/
│   ├── TreatmentCard.tsx
│   ├── DestinationCard.tsx
│   ├── ClinicCard.tsx
│   ├── DoctorCard.tsx
│   └── BlogCard.tsx
├── profiles/
│   ├── ClinicProfile.tsx
│   ├── DoctorProfile.tsx
│   ├── VerificationBadge.tsx
│   └── CredentialsSection.tsx
├── content/
│   ├── MedicalDisclaimer.tsx
│   ├── PriceRange.tsx
│   ├── FAQAccordion.tsx
│   ├── TableOfContents.tsx
│   ├── AuthorCard.tsx
│   └── LastUpdated.tsx
├── forms/
│   ├── ContactForm.tsx
│   ├── QuoteRequestForm.tsx
│   └── FormField.tsx
├── cta/
│   ├── CTASection.tsx
│   └── CTAButton.tsx
├── seo/
│   ├── JsonLd.tsx (existe)
│   ├── BreadcrumbSchema.tsx
│   └── MetaTags.tsx
└── home/
    └── ... (componentes existentes)
```

---

## 7. Estructura de Contenido MDX

### 7.1 Directorio de Contenido

```
content/
├── destinations/
│   ├── costa-rica/
│   │   ├── index.mdx           # Hub de Costa Rica
│   │   ├── san-jose.mdx        # Ciudad
│   │   └── escazu.mdx          # Ciudad
│   └── panama/                  # Futuro
├── treatments/
│   ├── dental/
│   │   ├── index.mdx           # Categoría dental
│   │   ├── implants.mdx        # Procedimiento
│   │   └── veneers.mdx         # Procedimiento
│   ├── weight-loss/
│   │   ├── index.mdx
│   │   └── gastric-sleeve.mdx
│   └── gastroenterology/
│       ├── index.mdx
│       └── endoscopy.mdx
├── location-treatments/         # Combinaciones
│   ├── costa-rica/
│   │   ├── dental-implants.mdx
│   │   ├── weight-loss-surgery.mdx
│   │   └── gastroenterology.mdx
│   └── san-jose/
│       └── dental-implants.mdx
├── clinics/
│   └── [clinic-slug].mdx
├── doctors/
│   └── [doctor-slug].mdx
├── blog/
│   └── [category]/
│       └── [slug].mdx
├── guides/
│   ├── getting-started.mdx
│   ├── planning-your-trip.mdx
│   └── what-to-expect.mdx
└── pages/
    ├── about.mdx
    ├── contact.mdx
    ├── disclaimer.mdx
    ├── privacy.mdx
    ├── terms.mdx
    ├── editorial-policy.mdx
    └── verification-process.mdx
```

### 7.2 Frontmatter Estándar

#### Para Destinos
```yaml
---
title: "Medical Tourism in Costa Rica"
description: "Complete guide to medical tourism in Costa Rica..."
slug: "costa-rica"
type: "destination"
level: "country" # country | city
parent: null # or parent slug for cities
status: "published"
publishedAt: "2024-08-06"
updatedAt: "2024-08-06"
author: "editorial-team"
seo:
  title: "Medical Tourism Costa Rica | Top Hospitals & Clinics 2024"
  description: "..."
  keywords: ["medical tourism costa rica", "healthcare costa rica"]
  canonical: "/destinations/costa-rica"
featured:
  treatments: ["dental", "weight-loss", "gastroenterology"]
  cities: ["san-jose", "escazu"]
travel:
  nearestAirport: "SJO"
  flightTimeFromMiami: "3h"
  visaRequired: false
---
```

#### Para Tratamientos
```yaml
---
title: "Dental Implants"
description: "Everything you need to know about dental implants abroad"
slug: "implants"
type: "treatment"
category: "dental"
status: "published"
publishedAt: "2024-08-06"
updatedAt: "2024-08-06"
author: "editorial-team"
medicalReviewer: null # Pending
seo:
  title: "Dental Implants Abroad | Costs, Process & What to Expect"
  description: "..."
  keywords: ["dental implants abroad", "dental implant cost"]
priceRange:
  note: "Prices vary by location, provider, and case complexity"
  disclaimer: true
relatedTreatments: ["veneers", "crowns"]
relatedDestinations: ["costa-rica", "mexico"]
schema:
  type: "MedicalProcedure"
  procedureType: "Surgical"
---
```

#### Para Clínicas
```yaml
---
name: "Clinic Name"
slug: "clinic-slug"
type: "clinic"
status: "published"
publishedAt: "2024-08-06"
updatedAt: "2024-08-06"
verificationStatus: "reviewed" # listed | reviewed | verified
verificationDate: "2024-08-06"
location:
  country: "costa-rica"
  city: "san-jose"
  address: "Full address"
  coordinates:
    lat: 9.9281
    lng: -84.0907
contact:
  phone: "+506 XXXX XXXX"
  email: "info@clinic.com"
  website: "https://clinic.com"
  whatsapp: "+506 XXXX XXXX"
specialties: ["gastroenterology", "general-surgery"]
treatments: ["endoscopy", "colonoscopy"]
languages: ["English", "Spanish"]
credentials:
  license: "Ministry of Health License #XXXX"
  established: 2010
  accreditations: []
seo:
  title: "Clinic Name | Gastroenterology Clinic San José Costa Rica"
  description: "..."
---
```

---

## 8. Rutas de App Router

### 8.1 Estructura de Rutas Propuesta

```
src/app/
├── layout.tsx                          # Root layout
├── (marketing)/
│   ├── layout.tsx                      # Marketing layout
│   ├── page.tsx                        # Home
│   │
│   ├── destinations/
│   │   ├── page.tsx                    # /destinations
│   │   └── [country]/
│   │       ├── page.tsx                # /destinations/costa-rica
│   │       └── [city]/
│   │           └── page.tsx            # /destinations/costa-rica/san-jose
│   │
│   ├── treatments/
│   │   ├── page.tsx                    # /treatments
│   │   └── [category]/
│   │       ├── page.tsx                # /treatments/dental
│   │       └── [slug]/
│   │           └── page.tsx            # /treatments/dental/implants
│   │
│   ├── [destination]/                  # Catch para /costa-rica/dental-implants
│   │   └── [treatment]/
│   │       └── page.tsx
│   │
│   ├── clinics/
│   │   ├── page.tsx                    # /clinics
│   │   └── [slug]/
│   │       └── page.tsx                # /clinics/clinic-name
│   │
│   ├── doctors/
│   │   ├── page.tsx                    # /doctors
│   │   └── [slug]/
│   │       └── page.tsx                # /doctors/dr-name
│   │
│   ├── blog/
│   │   ├── page.tsx                    # /blog
│   │   └── [slug]/
│   │       └── page.tsx                # /blog/article-slug
│   │
│   ├── guides/
│   │   ├── page.tsx                    # /guides
│   │   └── [slug]/
│   │       └── page.tsx                # /guides/getting-started
│   │
│   ├── how-it-works/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   ├── terms/
│   │   └── page.tsx
│   ├── disclaimer/
│   │   └── page.tsx
│   ├── editorial-policy/
│   │   └── page.tsx
│   └── verification-process/
│       └── page.tsx
│
├── api/
│   └── contact/
│       └── route.ts                    # API para formulario
│
├── sitemap.ts                          # Sitemap dinámico
├── robots.ts                           # Robots.txt
└── not-found.tsx                       # 404 page
```

---

## 9. Orden de Implementación

### Fase 2A: Infraestructura Base (Inmediato)

| # | Tarea | Archivos | Prioridad |
|---|-------|----------|-----------|
| 1 | Crear sitemap.ts | `src/app/sitemap.ts` | CRÍTICA |
| 2 | Crear robots.ts | `src/app/robots.ts` | CRÍTICA |
| 3 | Crear not-found.tsx | `src/app/not-found.tsx` | ALTA |
| 4 | Actualizar navegación | `src/config/navigation.ts` | ALTA |
| 5 | Crear MobileNav | `src/components/layouts/MobileNav.tsx` | ALTA |
| 6 | Actualizar Header | `src/components/layouts/Header.tsx` | ALTA |
| 7 | Crear Breadcrumbs | `src/components/layouts/Breadcrumbs.tsx` | ALTA |

### Fase 2B: Páginas Legales (Crítico)

| # | Tarea | Ruta | Prioridad |
|---|-------|------|-----------|
| 8 | Medical Disclaimer | `/disclaimer` | CRÍTICA |
| 9 | Privacy Policy | `/privacy` | CRÍTICA |
| 10 | Terms of Service | `/terms` | CRÍTICA |
| 11 | Editorial Policy | `/editorial-policy` | ALTA |
| 12 | Verification Process | `/verification-process` | ALTA |

### Fase 2C: Componentes Core

| # | Tarea | Componente | Prioridad |
|---|-------|------------|-----------|
| 13 | MedicalDisclaimer | `content/MedicalDisclaimer.tsx` | CRÍTICA |
| 14 | ContactForm | `forms/ContactForm.tsx` | CRÍTICA |
| 15 | DestinationCard | `cards/DestinationCard.tsx` | ALTA |
| 16 | TreatmentCard | `cards/TreatmentCard.tsx` | ALTA |
| 17 | ClinicCard | `cards/ClinicCard.tsx` | ALTA |
| 18 | CTASection | `cta/CTASection.tsx` | ALTA |

### Fase 2D: Rutas de Destinos

| # | Tarea | Ruta | Prioridad |
|---|-------|------|-----------|
| 19 | Destinations index | `/destinations` | ALTA |
| 20 | Costa Rica hub | `/destinations/costa-rica` | CRÍTICA |
| 21 | San José | `/destinations/costa-rica/san-jose` | ALTA |
| 22 | Escazú | `/destinations/costa-rica/escazu` | MEDIA |

---

## 10. Decisiones de Arquitectura

### 10.1 Decisiones Tomadas

| Decisión | Opción Elegida | Justificación |
|----------|----------------|---------------|
| URL para destinos | `/destinations/country/city` | Claro, escalable, SEO-friendly |
| URL para tratamientos | `/treatments/category/procedure` | Consistente con destinos |
| URL combinaciones | `/costa-rica/dental-implants` | Captura búsquedas de alta intención |
| Verificación | Niveles graduales | Honesto, evita problemas legales |
| Navegación inicial | 5 elementos | Simple, expandible |
| Contenido MDX | En `/content` | Separación clara del código |

### 10.2 Decisiones Pendientes

| Decisión | Opciones | Requiere |
|----------|----------|----------|
| Sistema de reviews | Interno vs externo | Definir política de moderación |
| Precios | Mostrar vs no mostrar | Fuente de datos verificable |
| Chat/WhatsApp | Widget vs link | Preferencia del cliente |
| Newsletter | Implementar vs no | Estrategia de email marketing |

---

## 11. Validación

### Comandos de Verificación

```bash
# Verificar build
npm run build

# Verificar tipos
npx tsc --noEmit

# Verificar lint
npm run lint

# Verificar rutas
# (después de implementar)
curl -I https://site.com/sitemap.xml
curl -I https://site.com/robots.txt
```

---

## Próximos Pasos

Después de aprobar esta arquitectura:

1. **Implementar Fase 2A**: Infraestructura base (sitemap, robots, navegación)
2. **Implementar Fase 2B**: Páginas legales críticas
3. **Proceder a FASE 3**: Estructura de contenido de Costa Rica

¿Aprueba esta arquitectura para proceder con la implementación?

# Dolphin — Registro de Decisiones de Arquitectura e Implementación (Wayfinder)

Este documento centraliza las especificaciones, decisiones de diseño, contratos y prototipos resueltos en los tickets de planificación previa a la implementación del código.

---

## Ticket #3: Definición de la Espina Narrativa (Landing Narrative Spine)

Se establece la secuencia modular oficial de 12 secciones para la landing v1, optimizada para no generar redundancias y comunicar la propuesta en menos de 5 segundos:

1. **Navbar** (`<Navbar />`): Navegación compacta, enlaces de salto (`Product`, `How it works`, `Privacy`, `Use cases`), enlace a GitHub y CTA *"Watch demo"*.
2. **Hero Section** (`<Hero />`): Headline canónico (*"Understand the meeting while you're still in it."*), sub-headline de contexto en tiempo real y CTAs (*"See how it works"* + *"View on GitHub"*).
3. **Live Product Demo** (`<ProductDemo />`): Demostración interactiva en dos columnas (Conversación vs. Entendimiento estructurado).
4. **The Problem** (`<Problem />`): Diferenciación entre "¿Qué se dijo?" (transcripción) vs "¿Qué significa?" (Dolphin).
5. **Core Capabilities** (`<Capabilities />`): 6 tarjetas semánticas (*Understand, Translate, Connect, Detect, Remember, Clarify*).
6. **Signature Loop** (`<HowItWorks />`): Ciclo cognitivo: `Listen → Understand → Structure → Connect → Intervene`.
7. **Deep-Dive: Translation Engine** (`<TranslationDemo />`): Traducción bidireccional (Negocio ↔ Técnico con Idempotencia y Flujo de Aprobación).
8. **Deep-Dive: Contradiction Engine** (`<ContradictionDemo />`): Detección temporal de reglas contradictorias y preguntas sugeridas.
9. **Privacy & Local AI** (`<Privacy />`): *"Your meetings stay yours"*, diagrama comparativo On-Device vs External Cloud.
10. **Powered by QVAC** (`<QvacSection />`): Infraestructura de inferencia local basada en QVAC by Tether.
11. **Focused Use Cases** (`<UseCases />`): 4 casos de uso (Client Discovery, Engineering Meetings, Consulting, Product & Ops).
12. **Footer** (`<Footer />`): Enlaces semánticos, créditos y disclaimer de interfaz conceptual para hackathon.

---

## Ticket #4: Prototipo de Interacción (Conversation vs. Understanding)

Se especifica el comportamiento, máquina de estados y accesibilidad del componente principal de demostración interactiva:

### 1. Modelo Mental (Conversación vs. Entendimiento)
* **Panel Izquierdo (Conversación)**: Diálogo literal con hablante, mensaje y timestamp.
* **Panel Derecho (Entendimiento de Dolphin)**: Inferencia semántica estructurada en tiempo real (Procesos, Requerimientos, Explicaciones técnicas y Contradicciones).

### 2. Máquina de Estados (Timeline de 3 Pasos)
* **Paso 1 (`14:30`)**:
  * *Diálogo*: Cliente explica el flujo de compra y validación del manager.
  * *Inferencia*: Proceso `Compra → Revisión → Manager → ERP` + Requerimiento de validación previa.
* **Paso 2 (`14:32`)**:
  * *Diálogo*: Ingeniero menciona la necesidad de *"idempotencia"*.
  * *Inferencia*: Card contextual explicando qué es la idempotencia y por qué previene registros duplicados en el ERP.
* **Paso 3 (`14:35`)**:
  * *Diálogo*: Cliente indica que *"las compras menores a $500 se procesan automáticamente"*.
  * *Inferencia*: Card de **Posible Contradicción** detectada frente al Paso 1 + Pregunta sugerida: *"¿Las compras <$500 omiten la aprobación del manager?"*.

### 3. Controles e Interactividad
* **Selector de pasos**: Tabs numeradas `[01. Proceso base]`, `[02. Concepto técnico]`, `[03. Contradicción]` con soporte para teclado (`ArrowLeft` / `ArrowRight`).
* **Auto-play / Pause**: Barra de progreso con ciclo de 6 segundos por paso; se pausa al interactuar manualmente.
* **Resaltado cruzado**: Clic en un insight ilumina el mensaje de diálogo correspondiente.

### 4. Responsividad y Accesibilidad (a11y)
* **Desktop ($\ge 1024\text{px}$)**: Grid 1:1 lado a lado con scroll sincronizado.
* **Mobile ($< 1024\text{px}$)**: Selector de pestañas accesible (`[Transcripción]` vs `[Entendimiento (3)]`) o vista apilada sin scroll horizontal.
* **`prefers-reduced-motion`**: Desactiva animaciones y transiciones de desplazamiento; estados inmediatos y auto-play desactivado por defecto.
* **Lectores de pantalla**: Región con `aria-live="polite"` para anunciar nuevos insights detectados.

---

## Ticket #5: Definición del Contrato de Datos Simulados (Canonical Mock-Data Contract)

Se define el esquema de tipos estricto en TypeScript y los datos estáticos centralizados que alimentarán todos los componentes y secciones visuales de la landing, garantizando consistencia absoluta en el escenario canónico de compras SMB sin hacer afirmaciones falsas de producto.

### 1. Esquema de Tipos TypeScript (`src/types/landing.ts`)

```typescript
export type SpeakerRole = "Client" | "Engineer" | "Manager" | "Accounting";

export interface TranscriptEntry {
  id: string;
  timestamp: string;
  speaker: string;
  role: SpeakerRole;
  text: string;
  highlightedInSteps?: number[];
}

export type InsightType = 
  | "process" 
  | "requirement" 
  | "explanation" 
  | "contradiction" 
  | "question";

export interface ProcessStep {
  label: string;
  order: number;
}

export interface InsightItem {
  id: string;
  stepId: number;
  type: InsightType;
  title: string;
  summary: string;
  details?: string[];
  processFlow?: string[];
  contextNote?: string;
  relatedTranscriptId?: string;
}

export interface DemoStep {
  stepNumber: number;
  title: string;
  timestamp: string;
  transcriptIds: string[];
  activeInsightIds: string[];
}

export interface CapabilityItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  targetRole: string;
  valueProposition: string;
  scenarioSnippet: string;
}

export interface PrivacyComparisonItem {
  feature: string;
  dolphinOnDevice: string;
  traditionalCloud: string;
}
```

### 2. Datos Simulados Canónicos (`src/content/mock-data.ts`)

```typescript
export const CANONICAL_TRANSCRIPT: TranscriptEntry[] = [
  {
    id: "tx-1",
    timestamp: "14:30",
    speaker: "Sarah Jenkins",
    role: "Client",
    text: "When a purchase comes in, someone reviews it and then the manager approves it before accounting loads it into the ERP.",
    highlightedInSteps: [1]
  },
  {
    id: "tx-2",
    timestamp: "14:32",
    speaker: "Alex Rivera",
    role: "Engineer",
    text: "We'll need to make that ERP sync operation idempotent to prevent duplicate order generation.",
    highlightedInSteps: [2]
  },
  {
    id: "tx-3",
    timestamp: "14:35",
    speaker: "Sarah Jenkins",
    role: "Client",
    text: "Purchases below $500 actually go through automatically without waiting for sign-off.",
    highlightedInSteps: [3]
  }
];

export const CANONICAL_INSIGHTS: InsightItem[] = [
  {
    id: "ins-1",
    stepId: 1,
    type: "process",
    title: "Proceso detectado",
    summary: "Flujo secuencial de compras identificado:",
    processFlow: ["Compra recibida", "Revisión inicial", "Aprobación Manager", "Contabilidad", "Carga ERP"],
    relatedTranscriptId: "tx-1"
  },
  {
    id: "ins-2",
    stepId: 1,
    type: "requirement",
    title: "Requerimiento potencial",
    summary: "La aprobación del manager es una condición de bloqueo antes de la sincronización con el ERP.",
    details: [
      "Verificación de stock previa a la creación",
      "Ruta de excepción si falla la validación"
    ],
    relatedTranscriptId: "tx-1"
  },
  {
    id: "ins-3",
    stepId: 2,
    type: "explanation",
    title: "Explicación contextual: Idempotencia",
    summary: "Ejecutar la misma petición varias veces debe producir exactamente el mismo resultado final.",
    details: [
      "Por qué importa aquí: Las llamadas al ERP pueden reintentarse por fallos de red.",
      "Riesgo evitado: Evita crear pedidos o cargos duplicados en la base de datos."
    ],
    relatedTranscriptId: "tx-2"
  },
  {
    id: "ins-4",
    stepId: 3,
    type: "contradiction",
    title: "Posible contradicción detectada",
    summary: "Discrepancia en las reglas de aprobación:",
    details: [
      "Anterior (14:30): Toda compra requiere aprobación obligatoria del manager.",
      "Ahora (14:35): Las compras <$500 se procesan automáticamente."
    ],
    relatedTranscriptId: "tx-3"
  },
  {
    id: "ins-5",
    stepId: 3,
    type: "question",
    title: "Pregunta sugerida para aclarar",
    summary: "¿Las compras menores a $500 omiten por completo la aprobación del manager o requieren una notificación asíncrona?",
    relatedTranscriptId: "tx-3"
  }
];

export const CANONICAL_CAPABILITIES: CapabilityItem[] = [
  {
    id: "cap-understand",
    title: "Understand",
    shortDescription: "Comprende el significado real",
    detailedDescription: "Entiende de qué trata la conversación en profundidad, no solo las palabras exactas pronunciadas.",
    iconName: "BrainCircuit"
  },
  {
    id: "cap-translate",
    title: "Translate",
    shortDescription: "Traducción bidireccional",
    detailedDescription: "Conecta lenguaje técnico y de negocio en tiempo real sin perder el contexto de la conversación.",
    iconName: "ArrowLeftRight"
  },
  {
    id: "cap-connect",
    title: "Connect",
    shortDescription: "Relaciona acuerdos y contexto",
    detailedDescription: "Vincula lo que se dice ahora con decisiones, reglas y requerimientos mencionados previamente.",
    iconName: "GitMerge"
  },
  {
    id: "cap-detect",
    title: "Detect",
    shortDescription: "Detección de contradicciones",
    detailedDescription: "Identifica en vivo contradicciones, ambigüedades y vacíos de información durante la reunión.",
    iconName: "ShieldAlert"
  },
  {
    id: "cap-remember",
    title: "Remember",
    shortDescription: "Mantiene el modelo mental",
    detailedDescription: "Estructura y actualiza el mapa mental dinámico de la reunión a medida que evoluciona el diálogo.",
    iconName: "Layers"
  },
  {
    id: "cap-clarify",
    title: "Clarify",
    shortDescription: "Sugerencia de preguntas clave",
    detailedDescription: "Recomienda la pregunta exacta que destraba información faltante antes de que termine la llamada.",
    iconName: "HelpCircle"
  }
];

export const CANONICAL_USE_CASES: UseCaseItem[] = [
  {
    id: "uc-discovery",
    title: "Client Discovery",
    targetRole: "Consultores y Product Managers",
    valueProposition: "Transforma explicaciones de negocio informales en procesos estructurados y requerimientos claros.",
    scenarioSnippet: "Reuniones de levantamiento de requerimientos con stakeholders no técnicos."
  },
  {
    id: "uc-eng",
    title: "Engineering Meetings",
    targetRole: "Desarrolladores y Tech Leads",
    valueProposition: "Explica conceptos arquitectónicos y técnicos sin interrumpir la conversación ni generar fricción.",
    scenarioSnippet: "Debates de diseño de sistemas, contratos de API e integraciones complejas."
  },
  {
    id: "uc-consulting",
    title: "Consulting & Advisory",
    targetRole: "Consultores de Estrategia y Operaciones",
    valueProposition: "Rastrea procesos, puntos de dolor, contradicciones y dudas no resueltas en tiempo real.",
    scenarioSnippet: "Auditorías de procesos internos y talleres de diagnóstico empresarial."
  },
  {
    id: "uc-product",
    title: "Product & Operations",
    targetRole: "Líderes de Operaciones y Analistas",
    valueProposition: "Mantiene un entendimiento compartido y unificado de reglas de negocio y dependencias críticas.",
    scenarioSnippet: "Planificación de sprint y definición de flujos operativos entre equipos."
  }
];

export const PRIVACY_COMPARISON: PrivacyComparisonItem[] = [
  {
    feature: "Procesamiento de Audio y Transcripción",
    dolphinOnDevice: "100% en tu máquina vía QVAC",
    traditionalCloud: "Audio transmitido a servidores de terceros"
  },
  {
    feature: "Inferencia y Razonamiento",
    dolphinOnDevice: "Modelos locales on-device",
    traditionalCloud: "APIs de IA en la nube comercial"
  },
  {
    feature: "Retención de Datos Confidenciales",
    dolphinOnDevice: "Tus datos nunca salen de tu ordenador",
    traditionalCloud: "Almacenamiento y potencial re-entrenamiento en nube"
  },
  {
    feature: "Funcionamiento Offline",
    dolphinOnDevice: "Capacidad completa sin conexión a internet",
    traditionalCloud: "Inoperativo sin conexión a internet constante"
  }
];
```

---

## Ticket #6: Criterios de Aceptación Visual y Accesibilidad (Visual & A11y Acceptance Gate)

Se establecen los criterios observables y obligatorios para la aceptación de la landing page v1:

1. **Dirección Estética White-First**:
   * Fondo primario limpio (`#FFFFFF` / `--background`), con tarjetas en capas sutiles (`--surface`, `--surface-raised`), bordes nítidos de bajo contraste (`--border`) y tipografía oscura de alta legibilidad (`--foreground`).
   * Superficies oscuras reservadas únicamente para contraste secundario o bloques técnicos puntuales.
   * Sin elementos clichés de IA: prohibido el uso de neón, estética crypto, cerebros holográficos o brillos excesivos.

2. **Garantía Responsiva (Zero Horizontal Scroll)**:
   * Verificación en viewports estándar: `360px` (móvil pequeño), `390px` (móvil estándar), `768px` (tablet), `1024px` (laptop) y `1280px` / `1440px+` (desktop ancho).
   * En pantallas `<1024px`, los grids de dos columnas se apilan verticalmente o proporcionan selectores de pestañas accesibles.

3. **Accesibilidad (WCAG 2.1 AA)**:
   * Contraste mínimo de texto $\ge 4.5:1$ contra su fondo.
   * Enlaces y botones con estados `:focus-visible` claramente identificables.
   * Regiones dinámicas con `aria-live="polite"` y roles semánticos correctos.
   * Respeto estricto a `prefers-reduced-motion: reduce` desactivando transiciones continuas.

4. **Presupuesto de Rendimiento (Web Vitals)**:
   * LCP (Largest Contentful Paint) < 2.5 segundos.
   * CLS (Cumulative Layout Shift) < 0.1.
   * INP (Interaction to Next Paint) < 200 milisegundos.

---

## Ticket #7: Plan de Slices de Implementación (Implementation Slices)

Se divide el trabajo de código en fases modulares y atómicas:

* **Slice 0 (Scaffolding & Configuración)**: Creación de `package.json`, configuración de Next.js App Router, TypeScript, Tailwind CSS, fuentes (Geist), Lucide Icons y utilidades base.
* **Slice 1 (Tipos y Datos Mock Centralizados)**: Creación de `src/types/landing.ts` y `src/content/mock-data.ts` con el escenario canónico de compras SMB.
* **Slice 2 (Shell de Layout & Primitivas UI)**: Implementación de `<Container />`, `<Section />`, `<Navbar />`, `<Footer />` y botones/badges accesibles.
* **Slice 3 (Hero & Demo Interactiva)**: Implementación de `<Hero />`, `<MeetingWindow />`, `<TranscriptMessage />`, `<InsightCard />` y máquina de estados con timeline interactivo.
* **Slice 4 (Secciones de Inteligencia y Narrativa)**: Implementación de `<Problem />`, `<Capabilities />`, `<TranslationDemo />`, `<ContradictionDemo />`, `<HowItWorks />`, `<Privacy />`, `<QvacSection />` y `<UseCases />`.
* **Slice 5 (Validación, Optimización y QA)**: Verificación de lint, typecheck, build y responsive testing.



import { 
  TranscriptEntry, 
  InsightItem, 
  DemoStep, 
  CapabilityItem, 
  UseCaseItem, 
  PrivacyComparisonItem 
} from "@/types/landing";

export const PRODUCT_INFO = {
  name: "Dolphin",
  tagline: "Understand the meeting while you're still in it.",
  description: "A local intelligence layer for work conversations that understands meaning and context in real time.",
  subHeadline: "Dolphin understands work conversations in near real time, turning messy discussions into structured processes, requirements, contextual explanations, contradictions, and actionable questions.",
  githubUrl: "https://github.com/DarienPerezGit/dolphin-web",
};

export const DEMO_STEPS: DemoStep[] = [
  {
    stepNumber: 1,
    title: "01. Proceso de compras",
    subtitle: "Detección de flujos y requerimientos",
    timestamp: "14:30",
    transcriptIds: ["tx-1"],
    activeInsightIds: ["ins-1", "ins-2"],
  },
  {
    stepNumber: 2,
    title: "02. Concepto técnico",
    subtitle: "Explicación contextual en tiempo real",
    timestamp: "14:32",
    transcriptIds: ["tx-1", "tx-2"],
    activeInsightIds: ["ins-1", "ins-2", "ins-3"],
  },
  {
    stepNumber: 3,
    title: "03. Contradicción",
    subtitle: "Identificación de excepciones y preguntas",
    timestamp: "14:35",
    transcriptIds: ["tx-1", "tx-2", "tx-3"],
    activeInsightIds: ["ins-1", "ins-3", "ins-4", "ins-5"],
  },
];

export const CANONICAL_TRANSCRIPT: TranscriptEntry[] = [
  {
    id: "tx-1",
    timestamp: "14:30",
    speaker: "Sarah Jenkins",
    role: "Client",
    text: "When a purchase comes in, someone reviews it and then the manager approves it before accounting loads it into the ERP.",
    highlightedInSteps: [1],
  },
  {
    id: "tx-2",
    timestamp: "14:32",
    speaker: "Alex Rivera",
    role: "Engineer",
    text: "We'll need to make that ERP sync operation idempotent to prevent duplicate order generation.",
    highlightedInSteps: [2],
  },
  {
    id: "tx-3",
    timestamp: "14:35",
    speaker: "Sarah Jenkins",
    role: "Client",
    text: "Purchases below $500 actually go through automatically without waiting for manager sign-off.",
    highlightedInSteps: [3],
  },
];

export const CANONICAL_INSIGHTS: InsightItem[] = [
  {
    id: "ins-1",
    stepId: 1,
    type: "process",
    title: "Proceso detectado",
    summary: "Flujo secuencial de compras identificado:",
    processFlow: ["Compra recibida", "Revisión inicial", "Aprobación Manager", "Contabilidad", "Carga ERP"],
    relatedTranscriptId: "tx-1",
  },
  {
    id: "ins-2",
    stepId: 1,
    type: "requirement",
    title: "Requerimiento potencial",
    summary: "La aprobación del manager es obligatoria antes de la sincronización con el ERP.",
    details: [
      "Verificación de stock previa a la creación de la orden",
      "Ruta de excepción si falla la validación del manager",
    ],
    relatedTranscriptId: "tx-1",
  },
  {
    id: "ins-3",
    stepId: 2,
    type: "explanation",
    title: "Explicación contextual: Idempotencia",
    summary: "Ejecutar la misma operación varias veces produce exactamente el mismo resultado sin duplicar registros.",
    details: [
      "Por qué importa: Las llamadas al ERP pueden reintentarse ante fallas de red.",
      "Riesgo evitado: Impide la creación de órdenes o cobros duplicados.",
    ],
    relatedTranscriptId: "tx-2",
  },
  {
    id: "ins-4",
    stepId: 3,
    type: "contradiction",
    title: "Posible contradicción detectada",
    summary: "Discrepancia temporal en las reglas de aprobación:",
    details: [
      "Anterior (14:30): Toda compra requiere aprobación del manager.",
      "Ahora (14:35): Compras <$500 se procesan de forma automática.",
    ],
    relatedTranscriptId: "tx-3",
  },
  {
    id: "ins-5",
    stepId: 3,
    type: "question",
    title: "Pregunta sugerida para la reunión",
    summary: "¿Las compras menores a $500 omiten la aprobación del manager o requieren una notificación asíncrona posterior?",
    relatedTranscriptId: "tx-3",
  },
];

export const CANONICAL_CAPABILITIES: CapabilityItem[] = [
  {
    id: "cap-understand",
    title: "Understand",
    shortDescription: "Comprende el significado real",
    detailedDescription: "Entiende de qué trata la conversación en profundidad, abstrayendo conceptos en lugar de transcribir palabras sueltas.",
    iconName: "BrainCircuit",
  },
  {
    id: "cap-translate",
    title: "Translate",
    shortDescription: "Traducción bidireccional",
    detailedDescription: "Conecta lenguaje de negocio y conceptos técnicos en tiempo real sin perder el contexto ni interrumpir la reunión.",
    iconName: "ArrowLeftRight",
  },
  {
    id: "cap-connect",
    title: "Connect",
    shortDescription: "Relaciona acuerdos previos",
    detailedDescription: "Vincula lo que se dice ahora con decisiones, reglas y requerimientos mencionados minutos o temas atrás.",
    iconName: "GitMerge",
  },
  {
    id: "cap-detect",
    title: "Detect",
    shortDescription: "Detección de contradicciones",
    detailedDescription: "Identifica en vivo contradicciones, ambigüedades y vacíos de información mientras la reunión sigue su curso.",
    iconName: "ShieldAlert",
  },
  {
    id: "cap-remember",
    title: "Remember",
    shortDescription: "Mantiene el modelo mental",
    detailedDescription: "Estructura y actualiza el mapa dinámico de la reunión (procesos, entidades y decisiones) conforme avanza el diálogo.",
    iconName: "Layers",
  },
  {
    id: "cap-clarify",
    title: "Clarify",
    shortDescription: "Sugerencia de preguntas clave",
    detailedDescription: "Recomienda la pregunta exacta que destraba información faltante antes de que termine la llamada.",
    iconName: "HelpCircle",
  },
];

export const CANONICAL_USE_CASES: UseCaseItem[] = [
  {
    id: "uc-discovery",
    title: "Client Discovery",
    targetRole: "Consultores y Product Managers",
    valueProposition: "Transforma explicaciones de negocio informales en procesos estructurados y requerimientos claros para el equipo.",
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
    dolphinOnDevice: "100% en tu ordenador vía QVAC",
    traditionalCloud: "Audio transmitido a servidores de terceros",
  },
  {
    feature: "Inferencia y Razonamiento",
    dolphinOnDevice: "Modelos locales on-device",
    traditionalCloud: "APIs de IA en la nube comercial",
  },
  {
    feature: "Retención de Datos Confidenciales",
    dolphinOnDevice: "Tus datos nunca salen de tu ordenador",
    traditionalCloud: "Almacenamiento y potencial re-entrenamiento",
  },
  {
    feature: "Funcionamiento Offline",
    dolphinOnDevice: "Capacidad completa sin conexión a internet",
    traditionalCloud: "Inoperativo sin conexión a internet",
  },
];

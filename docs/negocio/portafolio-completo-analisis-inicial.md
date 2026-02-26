# ANÁLISIS COMPLETO DE PORTAFOLIO - VERSIÓN INICIAL

**Fecha:** 19 de Febrero 2026
**Autor:** Análisis generado por agente architect
**Estado:** Análisis preliminar - Reemplazado por estructura de 4 pilares

---

## RESUMEN EJECUTIVO

Este documento contiene el análisis inicial completo del portafolio de productos y servicios antes de la redefinición en 4 pilares estratégicos.

### Estructura Original Propuesta

El portafolio se organizaba en 4 categorías por modelo de ingresos:

1. **Productos SaaS (ARR)** - Ingresos recurrentes anuales
   - HelpDesk IA
   - InfraAgent
   - CloudLens (FinOps Dashboard)
   - AsistenteGov (Expediente Digital)

2. **Servicios Recurrentes (MRR)** - Ingresos mensuales predecibles
   - FinOps Managed
   - Cloud Ops
   - IA Ops

3. **Proyectos (One-time)** - Cashflow inmediato
   - Migraciones Cloud
   - Modernización Legacy
   - Implementaciones IA/Chatbots
   - Expediente Digital GOB (proyecto)
   - Automatización Marketing con IA

4. **Consultoría (Advisory)** - Puerta de entrada
   - IA Discovery
   - Cloud Health Check
   - Workshop Transformación Digital
   - Diagnóstico GOB Digital

---

## DETALLE DE PRODUCTOS/SERVICIOS ANALIZADOS

### Productos SaaS

#### 1. HelpDesk IA

**Descripción:** Plataforma de mesa de ayuda con IA conversacional que resuelve tickets de forma autónoma y escala los complejos a humanos.

**ICP:** Empresas con 100-500 empleados, con mesa de ayuda existente ineficiente o tercerizada.

**Pricing:**
- Starter: USD 800/mes + USD 3.000 setup
- Professional: USD 1.800/mes + USD 6.000 setup
- Enterprise: USD 3.500+/mes + USD 10.000+ setup

**Tiers:**

| Característica | Starter | Professional | Enterprise |
|----------------|---------|--------------|------------|
| Canales | 1 (web chat) | 3 (web, email, WhatsApp) | Ilimitados + telefonía |
| Base de conocimiento | Hasta 500 artículos | Hasta 2.000 | Ilimitada |
| Integraciones | Básicas (email) | AD, Jira, sistemas internos | Custom + API abierta |
| Agentes humanos | Escalación via email | Panel de agentes (hasta 5) | Panel ilimitado + SLA |
| SLA uptime | 99% | 99.5% | 99.9% |

**Líder técnico:** Dino (desarrollo IA/bot) + Ale (integración infra)
**Ciclo de venta:** 30-60 días sector privado, 90-180 días sector público

---

#### 2. InfraAgent

**Descripción:** Agentes autónomos de IA que monitorean, diagnostican y resuelven problemas de infraestructura IT sin intervención humana.

**ICP:** Empresas con 50-500 empleados, equipo IT reducido (1-5 personas), infraestructura propia o cloud.

**Pricing:**
- Basic: USD 500/mes + USD 1.500 setup
- Standard: USD 1.200/mes + USD 3.000 setup
- Premium: USD 2.000+/mes + USD 5.000 setup

**Tiers:**

| Característica | Basic | Standard | Premium |
|----------------|-------|----------|---------|
| Servidores monitoreados | Hasta 10 | Hasta 50 | Ilimitados |
| Acciones autónomas | Alertas + diagnóstico | Diagnóstico + remediación básica | Remediación completa + escalación inteligente |
| Reportes | Semanal | Diario + dashboard | Tiempo real + predicciones |

**Líder técnico:** Dino (agentes IA) + Ale (integración infra)
**Ciclo de venta:** 30-45 días

---

#### 3. CloudLens

**Descripción:** Dashboard SaaS de visibilidad y optimización de costos cloud con recomendaciones automatizadas por IA.

**ICP:** Empresas con gasto cloud USD 3.000+/mes en AWS, Azure o GCP.

**Pricing:**
- Free: USD 0 (1 cuenta, top 3 ahorros, 30 días histórico)
- Pro: USD 200/mes (hasta 5 cuentas, todas las recomendaciones, 12 meses histórico)
- Business: USD 500-800/mes (ilimitadas cuentas, implementación asistida, histórico ilimitado)

**Estrategia:** Free tier como lead magnet para FinOps Managed.

**Líder técnico:** Ale (expertise AWS/FinOps) + Dino (dashboard/backend)
**Ciclo de venta:** 15-30 días

---

#### 4. AsistenteGov (Expediente Digital)

**Descripción:** Plataforma de gestión de expedientes digitales para municipios y organismos públicos, con firma digital, workflow de aprobaciones y búsqueda inteligente.

**ICP:** Municipios de 10.000-100.000 habitantes, organismos provinciales con procesos en papel.

**Pricing base:** Implementación USD 10.000-30.000 + USD 500-2.000/mes

**Módulos:**

| Módulo | Descripción | Precio implementación | Precio mensual |
|--------|-------------|----------------------|----------------|
| Core | Expedientes digitales, workflow básico, firma digital | USD 10.000 | USD 500 |
| Trámites Online | Portal ciudadano, seguimiento de trámites | USD 8.000 | USD 400 |
| Archivo Digital | Digitalización y búsqueda inteligente | USD 5.000 | USD 300 |
| Notificaciones | Sistema con validez legal | USD 3.000 | USD 200 |
| BI Municipal | Dashboard de gestión | USD 5.000 | USD 300 |

**Líder técnico:** Dino (desarrollo) + Martín (gestión, relación institucional)
**Ciclo de venta:** 90-365 días

---

### Servicios Recurrentes (MRR)

#### 5. FinOps Managed

**Descripción:** Servicio gestionado de optimización continua de costos cloud con reportes mensuales, implementación de ahorros y governance.

**ICP:** Empresas con gasto cloud USD 5.000+/mes que no tienen expertise FinOps interno.

**Pricing:** USD 1.500-5.000/mes fijo O 15-25% del ahorro generado

**Líder técnico:** Ale (líder, análisis y ejecución) + Martín (relación cliente)
**Ciclo de venta:** 15-30 días

---

#### 6. Cloud Ops

**Descripción:** Operación y mantenimiento de infraestructura cloud: monitoreo, backups, patching, seguridad, soporte N2.

**ICP:** Empresas sin equipo de infra dedicado o con equipo reducido que necesita soporte especializado.

**Pricing:** USD 800-3.000/mes según cantidad de recursos gestionados

**Líder técnico:** Ale (operación) + Dino (automatización)
**Ciclo de venta:** 15-30 días

---

#### 7. IA Ops

**Descripción:** Mantenimiento, reentrenamiento y evolución continua de soluciones de IA implementadas.

**ICP:** Clientes existentes que ya implementaron soluciones de IA.

**Pricing:** USD 500-1.500/mes

**Líder técnico:** Dino
**Ciclo de venta:** 0 días (upsell a clientes existentes)

---

### Proyectos (One-time)

#### 8. Migración Cloud

**Descripción:** Migración de infraestructura on-premise o entre proveedores cloud, incluyendo assessment, planificación, ejecución y validación.

**ICP:** Empresas con sistemas on-premise, o con cloud desordenado.

**Pricing:** USD 5.000-50.000 según alcance

**Líder técnico:** Ale (infra destino) + Dino (aplicaciones) + Martín (PM)
**Ciclo de venta:** 30-90 días

---

#### 9. Modernización Legacy

**Descripción:** Refactorización de aplicaciones monolíticas, migración de base de datos, actualización de stacks obsoletos.

**ICP:** Empresas con sistemas de 5+ años que frenan operaciones.

**Pricing:** USD 8.000-40.000 según alcance

**Líder técnico:** Dino (desarrollo) + Ale (infra) + Martín (PM)
**Ciclo de venta:** 30-90 días

---

#### 10. Implementación de Chatbot / Asistente IA

**Descripción:** Diseño, desarrollo y deploy de chatbots y asistentes virtuales para atención al cliente, ventas o procesos internos.

**ICP:** Empresas con alto volumen de consultas repetitivas.

**Pricing:** USD 3.000-15.000

**Líder técnico:** Dino (desarrollo) + Martín (diseño conversacional y UX)
**Ciclo de venta:** 15-45 días

---

#### 11. Expediente Digital GOB (Proyecto Custom)

**Descripción:** Implementación a medida de sistema de expedientes digitales.

**Diferencia con AsistenteGov:** AsistenteGov es producto configurable; esto es desarrollo a medida total.

**Pricing:** USD 15.000-50.000

**Líder técnico:** Dino (desarrollo) + Martín (gestión institucional) + Ale (infra/seguridad)
**Ciclo de venta:** 90-365 días

---

#### 12. Automatización de Marketing con IA

**Descripción:** Implementación de pipelines de marketing automatizado con IA: generación de contenido, segmentación inteligente, chatbots de venta, scoring de leads.

**ICP:** Pymes y startups con equipo de marketing reducido.

**Pricing:** USD 2.000-10.000

**Líder técnico:** Martín (estrategia marketing) + Dino (desarrollo IA)
**Ciclo de venta:** 15-30 días

---

### Consultoría (Advisory)

#### 13. IA Discovery

**Descripción:** Diagnóstico de 2-4 semanas para identificar oportunidades de aplicación de IA en procesos del negocio.

**ICP:** Empresas que saben que "necesitan IA" pero no saben por dónde empezar.

**Entregables:**
- Informe con 5-10 casos de uso identificados
- Priorización por impacto y viabilidad
- Business case de cada uno (ROI estimado)
- Roadmap de implementación

**Pricing:** USD 1.500-4.000

**Líder técnico:** Martín (facilitación, negocio) + Dino (viabilidad técnica)
**Ciclo de venta:** 7-15 días

---

#### 14. Cloud Health Check

**Descripción:** Auditoría de infraestructura cloud (arquitectura, seguridad, costos, performance) con informe de hallazgos y plan de acción.

**ICP:** Empresas con cloud existente que sospechan que están pagando de más o tienen riesgos.

**Entregables:**
- Informe de arquitectura actual
- Hallazgos de seguridad
- Análisis de costos (cuánto se desperdicia)
- Plan de acción priorizado

**Pricing:** USD 1.000-3.000

**Líder técnico:** Ale (análisis técnico) + Martín (presentación ejecutiva)
**Ciclo de venta:** 7-15 días

---

#### 15. Workshop Transformación Digital

**Descripción:** Sesión facilitada de 1-2 días con equipo directivo para diagnosticar madurez digital, identificar oportunidades y definir hoja de ruta.

**ICP:** Pymes de 20-200 empleados que operan con procesos manuales / Excel.

**Pricing:** USD 800-2.000

**Líder técnico:** Martín (facilitación)
**Ciclo de venta:** 7 días

---

#### 16. Diagnóstico GOB Digital

**Descripción:** Relevamiento de procesos administrativos de un municipio/organismo, identificación de oportunidades de digitalización.

**ICP:** Municipios y organismos que quieren modernizarse pero necesitan justificar la inversión.

**Entregables:**
- Documento técnico con procesos actuales
- Oportunidades de digitalización priorizadas
- Estimación de costos y beneficios
- Base para licitaciones/presupuestos

**Pricing:** USD 2.000-5.000

**Líder técnico:** Martín (relevamiento, documento) + Dino (viabilidad técnica)
**Ciclo de venta:** 30-60 días

---

## BUNDLES ESTRATÉGICOS

### Bundle 1: "Cloud Total"

**Componentes:**
- Cloud Health Check (assessment): USD 1.500 one-time (25% dto)
- FinOps Managed (servicio): USD 2.000/mes
- Cloud Ops (servicio): USD 1.500/mes
- CloudLens Pro (herramienta): Incluido

**Precio total:** USD 1.500 + USD 3.000/mes (ahorro 15-20% vs compra separada)

**Por qué funciona:** El assessment demuestra valor inmediato, facilita venta de servicios recurrentes.

---

### Bundle 2: "IA para Operaciones"

**Componentes:**
- IA Discovery (assessment): USD 2.000
- HelpDesk IA Starter (producto): USD 800/mes
- InfraAgent Basic (producto): USD 500/mes

**Precio total:** USD 2.000 + USD 1.100/mes (ahorro 15%)

---

### Bundle 3: "Gobierno Digital"

**Componentes:**
- Diagnóstico GOB Digital: USD 3.000
- AsistenteGov Core + Trámites: USD 15.000 implementación
- Soporte anual: USD 800/mes

**Precio total:** USD 16.000 implementación + USD 700/mes

---

### Bundle 4: "Modernización Completa"

**Componentes:**
- Migración Cloud: USD 15.000-40.000
- Modernización Legacy: USD 10.000-30.000
- Cloud Ops (post-migración): USD 1.500/mes

**Descuento:** 10% en proyecto total si contratan Cloud Ops por 12 meses

---

## ESTRATEGIA DE UPSELL

```
FASE 1: ENTRADA          FASE 2: EXPANSIÓN           FASE 3: PROFUNDIZACIÓN
(mes 0-3)                (mes 3-9)                   (mes 9+)

Assessment               Primer servicio              Servicios adicionales
(USD 1-3K)              recurrente (USD 1-3K/mes)    + Producto SaaS
  │                       │                            │
  ├─ IA Discovery ──────> HelpDesk IA ──────────────> InfraAgent + IA Ops
  │
  ├─ Cloud Health ──────> FinOps Managed ───────────> Cloud Ops + CloudLens
  │
  ├─ Workshop Transform > Chatbot IA (proyecto) ────> HelpDesk IA (producto)
  │
  └─ Diagnóstico GOB ───> Expediente Digital ───────> Módulos adicionales
```

---

## GO-TO-MARKET POR SEGMENTO

### Segmento: Privado Tech (Startups, Software Houses, Fintech)

| Aspecto | Detalle |
|---------|---------|
| **Canal principal** | Directo: LinkedIn outbound + contenido técnico |
| **Canales secundarios** | Comunidades tech (meetups Córdoba), referidos |
| **Estrategia de adquisición** | CloudLens free como lead magnet, demos en vivo |
| **Materiales necesarios** | Landing page por servicio, CloudLens demo, case studies |
| **Ciclo de venta típico** | 15-30 días |
| **Deal size esperado** | USD 1.500-5.000/mes recurrente |
| **Mensajes clave** | "Reducimos tu factura de AWS 30% en 30 días" |

---

### Segmento: Privado Tradicional (Pymes, Industria)

| Aspecto | Detalle |
|---------|---------|
| **Canal principal** | Referidos + networking local (Córdoba, Alta Gracia) |
| **Canales secundarios** | Cámaras empresariales, alianza con contadores |
| **Estrategia de adquisición** | Workshops gratuitos, assessments de bajo ticket |
| **Materiales necesarios** | Presentación ejecutiva, calculadora de ROI, testimonios |
| **Ciclo de venta típico** | 30-60 días |
| **Deal size esperado** | USD 800-3.000/mes recurrente |
| **Mensajes clave** | "Digitaliza tu empresa sin equipo IT" |

---

### Segmento: Gobierno (Municipios, Organismos)

| Aspecto | Detalle |
|---------|---------|
| **Canal principal** | Relaciones directas con funcionarios, licitaciones |
| **Canales secundarios** | Eventos de gobierno digital, consultoras de gestión pública |
| **Estrategia de adquisición** | Diagnóstico GOB Digital como entrada (bajo riesgo político) |
| **Materiales necesarios** | Presentación institucional, compliance, caso piloto |
| **Ciclo de venta típico** | 90-365 días |
| **Deal size esperado** | USD 15.000-50.000 proyectos |
| **Mensajes clave** | "Gobierno digital real, no escaneo de papeles" |

---

## ROADMAP DE PRODUCTO (12 meses)

### Q1 (Mar-May 2026): CASHFLOW + FOUNDATION

| Semana | Hito |
|--------|------|
| 1-2 | Constitución SAS, web + LinkedIn |
| 3-4 | Cloud Health Check: 1er assessment |
| 5-6 | FinOps Managed: 1er cliente |
| 7-8 | CloudLens Free: MVP + lanzamiento |
| 9-10 | IA Discovery: 1er assessment |
| 11-12 | **Revenue target: USD 2K-5K/mes** |

---

### Q2 (Jun-Ago 2026): RECURRENCIA

| Semana | Hito |
|--------|------|
| 1-3 | FinOps Managed: 2-3 clientes |
| 4-6 | HelpDesk IA: MVP (Starter tier) |
| 7-9 | HelpDesk IA: 1er cliente piloto |
| 10-12 | Cloud Ops: 1er cliente |
| | **Revenue target: USD 4K-8K/mes** |

---

### Q3 (Sep-Nov 2026): PRODUCTO + EXPANSIÓN

| Semana | Hito |
|--------|------|
| 1-3 | HelpDesk IA: Professional tier |
| 4-6 | InfraAgent: MVP (Basic tier) |
| 7-9 | CloudLens Pro: Lanzamiento |
| 10-12 | 1er proyecto grande (Migración/Modernización) |
| | **Revenue target: USD 8K-15K/mes** |

---

### Q4 (Dic 2026 - Feb 2027): ESCALA + GOB

| Semana | Hito |
|--------|------|
| 1-3 | AsistenteGov: MVP módulo Core |
| 4-6 | HelpDesk IA: Enterprise tier |
| 7-9 | Gobierno: 1er diagnóstico + propuesta |
| 10-12 | Contratar 1er colaborador? |
| | **Revenue target: USD 15K-25K/mes** |

---

## CONSIDERACIONES ESPECIALES

### Sector Público vs Privado

| Dimensión | Sector Privado | Sector Público |
|-----------|---------------|----------------|
| **Moneda** | USD (o pesos con ajuste) | Pesos argentinos |
| **Forma de pago** | Transferencia, 15-30 días | Orden de pago, 30-90 días |
| **Proceso de compra** | Propuesta → negociación → contrato | Contratación directa o licitación |
| **Decisión** | Gerente/CTO | Funcionario + legal + presupuesto |
| **Duración contrato** | Mensual/anual, flexible | Anual o plurianual, rígido |
| **Margen** | 40-60% | 25-40% (compensado por volumen) |

**Recomendación:** No entrar al sector público hasta tener al menos 1 caso de éxito en sector privado (Q3-Q4 2026).

---

### Escalabilidad

| Producto/Servicio | Escala sin headcount | Requiere headcount | Notas |
|-------------------|---------------------|-------------------|-------|
| CloudLens (SaaS) | Sí | No | Software puro, self-service |
| HelpDesk IA (SaaS) | Parcialmente | Setup por cliente requiere horas | La operación escala, onboarding no |
| InfraAgent (SaaS) | Parcialmente | Integraciones custom | Similar a HelpDesk |
| AsistenteGov | No | Sí, cada gobierno es custom | Puede escalar con módulos |
| FinOps Managed | No | Cada cliente requiere análisis | Parcialmente automatizable |
| Cloud Ops | No | Directamente proporcional | Límite: ~10 clientes/persona |
| Proyectos | No | Directamente proporcional | Límite natural de capacidad |
| Assessments | No | Corta duración | Alto throughput posible |

---

## MÉTRICAS CLAVE

| Métrica | Target Q1 | Target Q2 | Target Q4 |
|---------|-----------|-----------|-----------|
| MRR (ingresos recurrentes mensuales) | USD 1.500 | USD 5.000 | USD 15.000 |
| Clientes activos | 2-3 | 5-8 | 10-15 |
| Pipeline (oportunidades activas) | 5 | 10 | 15 |
| Productos SaaS en producción | 0 | 1 (CloudLens) | 3 |
| NPS / satisfacción | Baseline | >8 | >8 |

---

## RIESGOS Y MITIGACIONES

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| No conseguir primeros clientes en 90 días | Media | Alto | Pricing agresivo, assessments gratuitos, red de contactos |
| Dino no tiene suficiente tiempo | Media | Alto | Priorizar UN producto (CloudLens), usar AI tools |
| Cliente grande absorbe capacidad | Media | Medio | Alcance cerrado, cap de horas, subcontratación |
| Conflicto de intereses | Baja | Crítico | Política documentada, consultar abogado |
| Scope creep en proyectos | Alta | Medio | Propuestas cerradas, change requests formales |

---

## CONCLUSIÓN

Este análisis proporciona una base sólida para el portafolio inicial. Sin embargo, fue refinado posteriormente en una **estructura de 4 pilares estratégicos** que simplifica el mensaje comercial y alinea mejor con las fortalezas del equipo.

Ver documento: `portafolio-4-pilares.md`

---

**Estado:** Documento de referencia - No es la versión activa del portafolio
**Próximo paso:** Implementar estructura de 4 pilares
**Fecha de redefinición:** 19 de Febrero 2026

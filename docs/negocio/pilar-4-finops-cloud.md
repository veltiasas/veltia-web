# PILAR 4: Optimización Cloud & FinOps
## Reducción de Costos Cloud - Governance - Performance - Seguridad

**Versión:** 1.0
**Fecha:** Febrero 2026
**Estado:** Activo
**Responsables:** Ale (Líder técnico FinOps), Martín (Comercial), Dino (Automatización)

---

## RESUMEN EJECUTIVO

Ayudamos a empresas a **reducir costos de infraestructura cloud (AWS, Azure, GCP) entre 30-50%** mediante análisis especializado, implementación de mejores prácticas y automatización de governance.

### Propuesta de Valor

| Problema | Solución | Impacto |
|----------|----------|---------|
| Factura cloud creciendo sin control | FinOps Analysis + Implementación | -30% a -50% costos |
| Recursos sobre-dimensionados | Rightsizing automatizado | -25% a -40% costos compute |
| Falta visibilidad de costos por proyecto | Tagging + Cost Allocation | +100% transparencia |
| Ambientes de desarrollo 24/7 | Scheduling automático | -60% costos no-prod |
| Storage sin lifecycle policies | S3 Intelligent Tiering | -40% costos storage |

### Diferencial Competitivo

- **Expertise real AWS:** No consultores teóricos, implementamos en producción
- **ROI garantizado:** Si no reducimos 20% mínimo, no cobramos
- **Implementación incluida:** No solo report, ejecutamos los cambios
- **Dashboards en tiempo real:** CloudLens (producto propio)
- **Conocimiento local:** Entendemos la realidad argentina (facturación en pesos, impuestos)

---

## 1. SERVICIOS

### 1.1 FinOps Managed - Servicio Gestionado de Optimización

**Descripción:** Optimización continua de costos cloud con análisis mensual, implementación de ahorros y governance.

**Incluye:**
- Análisis mensual de factura cloud (línea por línea)
- Identificación de oportunidades de ahorro (top 10 mensual)
- Implementación de optimizaciones (con aprobación cliente)
- Reportes ejecutivos mensuales (PDF + presentación)
- Dashboard de costos en tiempo real (CloudLens)
- Alertas de anomalías (picos de costo inesperados)
- Recomendaciones proactivas

**Categorías de optimización:**

| Categoría | Acciones Típicas | Ahorro Esperado |
|-----------|------------------|-----------------|
| **Compute** | Rightsizing, Reserved Instances, Spot | 30-40% |
| **Storage** | S3 Intelligent Tiering, lifecycle | 20-40% |
| **Database** | Rightsizing RDS, Aurora Serverless | 25-35% |
| **Networking** | NAT Gateway optimization, VPC endpoints | 10-20% |
| **Eliminación desperdicio** | EBS sin usar, IPs estáticas, snapshots | 10-30% |

**Proceso mensual:**
1. **Análisis:** Descarga de billing data (Cost Explorer API)
2. **Identificación:** Top 10 oportunidades de ahorro
3. **Presentación:** Reunión mensual con cliente (30-60 min)
4. **Implementación:** Ejecución de cambios aprobados
5. **Validación:** Verificación de ahorros mes siguiente

**ICP:** Empresas con gasto cloud USD 5.000+/mes en AWS, Azure o GCP

**Pricing:**

| Modelo | Descripción | Precio |
|--------|-------------|--------|
| **Fijo** | Fee mensual predecible | USD 1.500 - 5.000/mes |
| **% Ahorro** | 15-25% del ahorro generado mensual | Variable |
| **Híbrido** | USD 1.000 base + 10% del ahorro | Predecible + incentivo |

**Recomendación:** Modelo híbrido (alinea incentivos)

**Contrato típico:** 6-12 meses

**ROI típico:**
- Empresa con gasto USD 20.000/mes
- Reducción 35% = USD 7.000/mes ahorro
- Costo servicio: USD 1.500/mes
- **Ahorro neto:** USD 5.500/mes = USD 66.000/año

**Líder técnico:** Ale (análisis + implementación) + Martín (presentación ejecutiva)

**Ciclo de venta:** 15-30 días

---

### 1.2 Cloud Health Check - Assessment One-Time

**Descripción:** Auditoría exhaustiva de infraestructura cloud (arquitectura, seguridad, costos, performance) con informe de hallazgos y roadmap de acción.

**Duración:** 1-2 semanas

**Incluye:**
- Análisis de arquitectura actual
- Identificación de riesgos de seguridad
- Análisis de costos (top 20 líneas de gasto)
- Recomendaciones priorizadas (quick wins + long term)
- Business case de cada recomendación (ahorro estimado)
- Roadmap de implementación (fases)

**Entregables:**
- Informe ejecutivo (15-20 páginas)
- Presentación (slides)
- Hoja de ruta priorizada

**Áreas evaluadas:**

| Área | Evaluación | Score |
|------|------------|-------|
| **Costos** | Oportunidades de ahorro identificadas | 1-10 |
| **Seguridad** | Vulnerabilidades, compliance | 1-10 |
| **Performance** | Bottlenecks, latencia | 1-10 |
| **Resiliencia** | Backups, DR, HA | 1-10 |
| **Governance** | Tagging, políticas, accesos | 1-10 |

**ICP:** Empresas con cloud existente que sospechan ineficiencias

**Pricing:** USD 1.000 - 3.000 (según tamaño de infraestructura)

**Modelo de conversión:** 60-70% de assessments convierten a FinOps Managed

**Líder técnico:** Ale (análisis) + Martín (presentación)

**Ciclo de venta:** 7-15 días

---

### 1.3 CloudLens - Dashboard SaaS de FinOps

**Descripción:** Plataforma SaaS de visibilidad y optimización de costos cloud con recomendaciones automáticas.

**Características:**
- Conexión a cuentas AWS/Azure/GCP (read-only)
- Dashboard de costos por servicio/proyecto/ambiente
- Alertas de anomalías (machine learning)
- Recomendaciones automatizadas (top 10 ahorros)
- Reportes programados (email semanal/mensual)
- Forecasting de costos (predicción 3 meses)
- Comparativas mes a mes

**Casos de uso:**
- CFO quiere visibilidad de costos cloud sin herramientas complejas
- CTO quiere identificar proyectos que más gastan
- Equipo de DevOps quiere detectar picos de costo rápido

**ICP:** Empresas con gasto cloud USD 3.000+/mes que no tienen herramienta de FinOps

**Pricing:**

| Tier | Cuentas | Features | Precio |
|------|---------|----------|--------|
| **Free** | 1 cuenta AWS | Top 3 ahorros, 30 días histórico | USD 0 |
| **Pro** | Hasta 5 cuentas | Todas las recomendaciones, 12 meses histórico | USD 200/mes |
| **Business** | Ilimitado | Implementación asistida, histórico ilimitado, soporte prioritario | USD 500-800/mes |

**Estrategia:** Free tier como lead magnet para FinOps Managed

**Roadmap:**
- Q1: MVP (AWS only, top 5 ahorros)
- Q2: Soporte multi-cloud (Azure, GCP)
- Q3: Alertas de anomalías (ML)
- Q4: Forecasting de costos

**Líder técnico:** Dino (desarrollo plataforma) + Ale (lógica de análisis)

**Ciclo de venta:** 0-7 días (self-service)

---

### 1.4 Cloud Ops - Operación y Mantenimiento de Infraestructura

**Descripción:** Servicio gestionado de operación de infraestructura cloud (monitoreo, backups, patching, soporte N2).

**Incluye:**
- Monitoreo 24/7 de recursos cloud
- Gestión de backups y DR
- Patching de seguridad (OS, aplicaciones)
- Incident response (soporte N2/N3)
- Optimización de performance
- Reportes mensuales de uptime y métricas

**Casos de uso:**
- Empresas sin equipo de DevOps dedicado
- Startups que necesitan cobertura 24/7 pero no pueden contratar equipo
- Empresas que quieren reducir headcount de infra

**ICP:** Empresas con infraestructura cloud mediana (50-500 recursos)

**Pricing:** USD 800 - 3.000/mes (según cantidad de recursos gestionados)

**SLA:**
- Uptime: 99.5%
- Tiempo de respuesta: Crítico <30 min, Alto <2 horas

**Líder técnico:** Ale (operación) + Dino (automatización)

**Ciclo de venta:** 15-30 días

---

### 1.5 Implementación de Cloud Governance

**Descripción:** Setup de políticas, automatización y mejores prácticas de governance cloud.

**Incluye:**
- **Tagging strategy:** Definición de tags obligatorios (proyecto, ambiente, owner)
- **Cost allocation:** Setup de cost allocation tags en AWS
- **Policies:** Service Control Policies (SCPs), IAM policies
- **Automation:** Lambda functions para enforcement (ej: apagar instancias sin tag)
- **Budgets & Alerts:** Configuración de budgets y alertas
- **Well-Architected Review:** Framework de AWS aplicado

**Casos de uso:**
- Empresas con múltiples equipos sin visibilidad de quién gasta qué
- Empresas que quieren prevenir gastos futuros incontrolados
- Empresas con compliance requirements (ISO 27001, SOC 2)

**ICP:** Empresas con gasto cloud USD 10.000+/mes y múltiples equipos/proyectos

**Pricing:** USD 5.000 - 15.000 (proyecto one-time) + USD 500-1.000/mes mantenimiento

**Timeline:** 2-6 semanas

**Líder técnico:** Ale (implementación) + Martín (diseño de políticas)

**Ciclo de venta:** 30-60 días

---

### 1.6 Migraciones Cloud (Enlace con Pilar 3)

**Nota:** Las migraciones cloud están detalladas en Pilar 3 (Modernización Legacy), pero se coordinan con el equipo de FinOps para asegurar que la infraestructura target esté optimizada desde día 1.

---

## 2. PAQUETES Y BUNDLES

### Bundle 1: "Cloud Total"

**Incluye:**
- Cloud Health Check (assessment)
- FinOps Managed (12 meses)
- CloudLens Business (incluido)
- Cloud Ops (opcional)

**Precio:** USD 1.500 one-time + USD 3.500/mes

**Ahorro:** 20% vs compra separada

**Target:** Empresas con gasto cloud USD 15.000+/mes

---

### Bundle 2: "Startup Cloud"

**Incluye:**
- Cloud Health Check (lite)
- CloudLens Pro (12 meses)
- 3 sesiones de consultoría mensuales

**Precio:** USD 500 one-time + USD 300/mes

**Target:** Startups con gasto cloud USD 3.000-10.000/mes

---

### Bundle 3: "FinOps + Governance"

**Incluye:**
- FinOps Managed (12 meses)
- Implementación de Cloud Governance
- CloudLens Business

**Precio:** USD 8.000 one-time + USD 2.500/mes

**Target:** Empresas con múltiples equipos, gasto USD 20.000+/mes

---

## 3. METODOLOGÍA FINOPS

### Framework de Análisis

Para cada cliente, seguimos el ciclo FinOps:

```
┌──────────────┐
│   INFORM     │ ← Visibilidad de costos (dashboards, tagging)
└──────┬───────┘
       │
┌──────▼───────┐
│  OPTIMIZE    │ ← Identificar y ejecutar ahorros
└──────┬───────┘
       │
┌──────▼───────┐
│   OPERATE    │ ← Governance, políticas, cultura FinOps
└──────────────┘
```

---

### Quick Wins (Mes 1)

Ahorros rápidos implementables en las primeras semanas:

| Acción | Ahorro típico | Esfuerzo |
|--------|---------------|----------|
| Eliminar EBS snapshots viejos | 5-10% | Bajo |
| Eliminar EBS volumes sin attach | 2-5% | Bajo |
| Liberar Elastic IPs sin usar | 1-3% | Bajo |
| Apagar instancias dev/staging fuera horario | 30-50% ambientes no-prod | Medio |
| Rightsizing obvio (instancias con <10% CPU) | 10-20% | Medio |

---

### Long-term Optimizations (Mes 2-6)

Ahorros que requieren más análisis y cambios arquitectónicos:

| Acción | Ahorro típico | Esfuerzo |
|--------|---------------|----------|
| Reserved Instances (1 año) | 30-40% compute | Alto |
| Savings Plans | 30-40% compute | Alto |
| S3 Intelligent Tiering | 20-40% storage | Medio |
| Aurora Serverless | 25-35% BD | Alto |
| Lambda vs EC2 para cargas intermitentes | 40-60% | Alto |

---

## 4. STACK TECNOLÓGICO

### Herramientas de Análisis

- **AWS Cost Explorer API:** Extracción de billing data
- **AWS Cost and Usage Report (CUR):** Data granular en S3
- **CloudWatch:** Métricas de uso (CPU, memoria, IOPS)
- **AWS Trusted Advisor:** Recomendaciones básicas
- **AWS Compute Optimizer:** Rightsizing recommendations

### CloudLens - Stack Técnico

- **Backend:** FastAPI (Python)
- **DB:** PostgreSQL + TimescaleDB (series temporales)
- **Queue:** Celery + Redis
- **Frontend:** React + Next.js + Recharts
- **Deployment:** AWS (ECS Fargate)

### Automatización

- **IaC:** Terraform, AWS CDK
- **Lambda functions:** Python 3.11
- **EventBridge:** Scheduling de acciones

---

## 5. GO-TO-MARKET

### Canal Principal: Directo (LinkedIn + Outbound)

**Estrategia:**
1. Identificar empresas con infra cloud (job postings con "AWS", "DevOps")
2. Mensaje directo: "Vimos que usan AWS. ¿Analizamos su factura gratis para identificar ahorros?"
3. Cloud Health Check gratuito (1 semana)
4. Presentación de hallazgos con business case
5. Propuesta de FinOps Managed

**Tasa de conversión esperada:**
- 10% responden a outreach
- 50% aceptan assessment gratuito
- 60% de assessments convierten a FinOps Managed

---

### Canales Secundarios

- **CloudLens free:** Lead magnet (registros self-service)
- **Partnerships:** Consultoras, integradores, agencies
- **Contenido:** Blog posts, LinkedIn (casos de estudio de ahorros)
- **Eventos:** Meetups de AWS, webinars de FinOps

---

### Mensajes Clave

| Segmento | Pain Point | Mensaje |
|----------|-----------|---------|
| Startups | "Nuestra factura de AWS crece 20%/mes" | "Reducimos tu factura 30% sin afectar performance" |
| Scale-ups | "No sabemos quién gasta qué" | "Visibilidad total por proyecto/equipo en 48 horas" |
| Enterprise | "Queremos compliance ISO/SOC 2" | "Governance + FinOps = control + ahorro" |

---

## 6. ROADMAP DE SERVICIO

### Q1 2026 (Mar-May): Lanzamiento
- [ ] 2-3 assessments gratuitos
- [ ] 1-2 clientes FinOps Managed
- [ ] CloudLens Free (MVP)

**Target revenue:** USD 3K-6K/mes

---

### Q2 2026 (Jun-Ago): Tracción
- [ ] 3-5 clientes FinOps Managed
- [ ] CloudLens Pro lanzado
- [ ] Primeros casos de éxito documentados

**Target revenue:** USD 8K-15K/mes

---

### Q3 2026 (Sep-Nov): Escala
- [ ] 8-12 clientes FinOps Managed
- [ ] CloudLens Business tier
- [ ] Servicio de Cloud Ops activo

**Target revenue:** USD 20K-35K/mes

---

### Q4 2026 (Dic-Feb): Consolidación
- [ ] 15-20 clientes FinOps
- [ ] CloudLens con 50+ usuarios free
- [ ] Partnership con AWS (posible)

**Target revenue:** USD 30K-50K/mes

---

## 7. EQUIPO NECESARIO

### Fase Inicial (Q1-Q2)
| Rol | Persona | Dedicación |
|-----|---------|------------|
| FinOps Lead | Ale | 60% |
| Comercial / PM | Martín | 30% |
| CloudLens Developer | Dino | 40% |

**Costo:** USD 4.000 - 6.000/mes

### Fase Escalamiento (Q3-Q4)
- Contratar FinOps Engineer (análisis + implementación)
- Dino aumenta dedicación a CloudLens (50%)

---

## 8. MÉTRICAS DE ÉXITO

| Métrica | Target Q1 | Target Q2 | Target Q4 |
|---------|-----------|-----------|-----------|
| Clientes FinOps Managed | 2 | 5 | 15 |
| MRR Pilar 4 | USD 5K | USD 12K | USD 40K |
| Ahorro promedio cliente | >30% | >35% | >40% |
| CloudLens free users | 10 | 30 | 80 |
| Conversión free → paid | N/A | >20% | >25% |

---

## 9. RIESGOS Y MITIGACIONES

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| No alcanzar ahorro prometido | Baja | Alto | Assessment conservador, buffer 10% |
| Cliente implementa ahorros sin nosotros | Media | Medio | Contrato de 6-12 meses |
| AWS cambia pricing | Media | Medio | Análisis mensual continuo |
| Competencia de consultoras grandes | Media | Medio | Diferenciarnos con CloudLens + implementación |
| Resistencia a cambios (RIs, apagar dev) | Media | Medio | Change management incluido |

---

## 10. CASOS DE USO DETALLADOS

### Caso 1: Startup SaaS con gasto USD 15k/mes

**Cliente:** Startup con 30 empleados, producto SaaS B2B
**Problema:** Factura AWS creciendo 20%/mes sin control
**Solución:** FinOps Managed por 6 meses
**Resultados:**
- Reducción 42% en factura (USD 6.300/mes ahorro)
- Principales ahorros: RDS rightsizing, RIs compute, S3 lifecycle
- ROI: USD 75.000/año
- Inversión: USD 1.500/mes (servicio)
- **Ahorro neto:** USD 4.800/mes

---

### Caso 2: eCommerce con ambientes dev/staging 24/7

**Cliente:** eCommerce con 100 empleados
**Problema:** 8 ambientes de desarrollo corriendo 24/7
**Solución:** Scheduling automático (Lambda + EventBridge)
**Resultados:**
- Ambientes dev/staging activos solo 50 horas/semana (vs 168)
- Reducción 70% costos no-prod
- Ahorro: USD 3.500/mes
- Inversión: USD 2.000 (one-time implementación)
- Payback: <1 mes

---

### Caso 3: Empresa con falta visibilidad de costos

**Cliente:** Consultora con 10 proyectos, sin tagging
**Problema:** CFO no sabe cuánto gasta cada proyecto
**Solución:** Implementación de Cloud Governance + CloudLens
**Resultados:**
- 100% recursos taggeados automáticamente
- Dashboard de costos por proyecto en tiempo real
- Identificación de proyecto "muerto" gastando USD 800/mes
- Ahorro directo: USD 1.200/mes (recursos ociosos detectados)

---

## 11. CERTIFICACIONES Y PARTNERSHIPS

### Certificaciones Recomendadas

| Certificación | Persona | Prioridad |
|---------------|---------|-----------|
| AWS Certified Solutions Architect | Ale | Alta |
| AWS Certified DevOps Engineer | Ale | Media |
| FinOps Certified Practitioner | Ale + Martín | Alta |

**Inversión:** USD 500 - 1.500 (exámenes + preparación)

---

### Partnerships

**AWS Partner Network (APN):**
- Tier: Select (inicial) → Advanced (6-12 meses)
- Beneficios: Leads, co-marketing, créditos AWS
- Requisito: Certificaciones + casos de éxito

---

## 12. PRÓXIMOS PASOS

### Acción Inmediata (Esta Semana)

- [ ] Identificar 10 empresas con gasto cloud alto (LinkedIn)
- [ ] Desarrollar template de Cloud Health Check
- [ ] Iniciar desarrollo de CloudLens MVP (4 semanas)
- [ ] Ale: Estudiar para AWS SA certification

### Decisiones Pendientes

- [ ] ¿Priorizamos FinOps Managed o CloudLens en Q1?
- [ ] ¿Modelo de pricing: fijo, % ahorro, o híbrido?
- [ ] ¿Inversión en certificaciones AWS de entrada?
- [ ] ¿Partnership con AWS desde Q1 o esperar a Q3?

---

**Documento confidencial - Mi Empresa SAS**
**Febrero 2026**

# PILAR 3: Modernización de Sistemas Legacy
## Refactoring - Migraciones - Actualización Tecnológica - Reducción de Deuda Técnica

**Versión:** 1.0
**Fecha:** Febrero 2026
**Estado:** Activo
**Responsables:** Dino (Desarrollo), Ale (Infraestructura), Martín (PM)

---

## RESUMEN EJECUTIVO

Ayudamos a empresas a **modernizar aplicaciones obsoletas, migrar a la nube y reducir deuda técnica** que frena la innovación y aumenta costos operativos.

### Propuesta de Valor

| Problema | Solución | Impacto |
|----------|----------|---------|
| Sistema monolítico imposible de mantener | Refactoring a microservicios | -60% tiempo deploy |
| Infraestructura on-premise costosa | Migración a cloud | -40% costos IT |
| Base de datos legacy (Oracle, SQL Server) | Migración a PostgreSQL | -70% costos licencias |
| Stack obsoleto (PHP 5, .NET Framework 2.0) | Actualización a stack moderno | +200% velocidad desarrollo |
| Aplicación de escritorio (WinForms, VB6) | Migración a web/cloud | +100% accesibilidad |

### Diferencial Competitivo

- **Zero downtime:** Migraciones sin afectar operaciones
- **Metodología probada:** Strangler Pattern, Blue/Green deployments
- **ROI claro:** Reducción de costos medible
- **Expertise técnico:** Stack completo (backend, frontend, infra, datos)
- **Soporte post-migración:** No te dejamos solo después del go-live

---

## 1. SERVICIOS

### 1.1 Refactoring de Aplicaciones Monolíticas

**Descripción:** Transformación de monolitos en arquitecturas modernas (microservicios, modular monolith).

**Casos de uso:**
- Aplicación web monolítica (Ruby on Rails, Django, Laravel) que se volvió inmanejable
- Sistema legacy con módulos acoplados (CRM, facturación, inventario en un solo código)
- Aplicación que escala mal (toda la app o nada)

**Metodología: Strangler Pattern**
1. **Análisis:** Mapeo de módulos y dependencias
2. **Priorización:** Identificar módulos críticos para extraer
3. **Extracción:** Migración gradual módulo por módulo
4. **Coexistencia:** Nuevo sistema convive con legacy
5. **Deprecación:** Apagar módulos legacy progresivamente

**Tecnologías target:**
- Backend: FastAPI (Python), NestJS (TypeScript), Spring Boot (Java)
- Frontend: React + Next.js
- Comunicación: REST APIs, GraphQL, gRPC, event-driven (RabbitMQ, Kafka)
- Infraestructura: Docker, Kubernetes

**ICP:** Empresas con aplicación legacy de 5+ años, equipo de desarrollo de 3+ personas

**Pricing:** USD 20.000 - 100.000 (según complejidad)

**Timeline típico:** 3-9 meses

**ROI esperado:**
- Reducción 40-60% tiempo de deploy
- Reducción 30-50% bugs en producción
- Aumento 100-200% velocidad de desarrollo

**Líder técnico:** Dino (arquitectura + desarrollo) + Ale (infra/deployment)

**Ciclo de venta:** 30-90 días

---

### 1.2 Migración a la Nube (Cloud Migration)

**Descripción:** Traslado de aplicaciones e infraestructura desde on-premise a cloud (AWS, Azure, GCP).

**Estrategias de migración:**

| Estrategia | Descripción | Cuándo usarla | Costo | Tiempo |
|-----------|-------------|---------------|-------|--------|
| **Rehost (Lift & Shift)** | Mover tal cual a cloud | Migración rápida, sin refactoring | Bajo | 1-3 meses |
| **Replatform** | Ajustes menores (ej: BD a RDS) | Ganar eficiencia con poco cambio | Medio | 2-4 meses |
| **Refactor** | Reescribir para cloud-native | Maximizar beneficios cloud | Alto | 3-9 meses |
| **Retire** | Apagar sistemas obsoletos | Sistema duplicado o innecesario | N/A | 1 mes |
| **Retain** | Dejar on-premise | No vale la pena migrar aún | N/A | N/A |

**Proceso:**

#### Fase 1: Assessment (2-4 semanas)
- Inventario de aplicaciones y dependencias
- Análisis de costos actuales vs cloud
- Estrategia de migración por aplicación
- Plan de migración priorizado

**Entregable:** Documento de assessment + business case

---

#### Fase 2: Preparación (2-6 semanas)
- Setup de infraestructura cloud (VPC, seguridad, networking)
- Configuración de herramientas (IaC con Terraform, CI/CD)
- Plan de rollback
- Entrenamiento a equipo cliente

**Entregable:** Infraestructura cloud ready

---

#### Fase 3: Migración (4-12 semanas)
- Migración piloto (aplicación no crítica)
- Migración de aplicaciones críticas
- Migración de datos (bases de datos, archivos)
- Testing exhaustivo

**Entregable:** Aplicaciones en cloud funcionando

---

#### Fase 4: Optimización (4-8 semanas)
- Ajuste de costos (rightsizing, reserved instances)
- Implementación de monitoreo y alertas
- Documentación de arquitectura
- Apagado de infra on-premise

**Entregable:** Infraestructura cloud optimizada

---

**ICP:** Empresas con infraestructura on-premise costosa (servidores físicos, datacenter propio)

**Pricing:** USD 10.000 - 80.000 (según alcance)

**ROI esperado:**
- Reducción 30-50% costos infraestructura
- Reducción 60-80% tiempo de provisioning
- Aumento disponibilidad (99.9%+)
- Eliminación de CAPEX (servidores)

**Líder técnico:** Ale (infra cloud) + Dino (aplicaciones) + Martín (PM)

**Ciclo de venta:** 30-90 días

---

### 1.3 Migración de Bases de Datos

**Descripción:** Migración de bases de datos legacy a plataformas modernas.

**Migraciones típicas:**

| Desde | Hacia | Motivación | Ahorro anual |
|-------|-------|------------|--------------|
| Oracle | PostgreSQL | Costos de licencias | USD 50.000 - 200.000 |
| SQL Server | PostgreSQL | Costos de licencias | USD 20.000 - 100.000 |
| MySQL 5.x | PostgreSQL / MySQL 8 | Features + performance | N/A |
| MongoDB legacy | PostgreSQL + JSONB | Simplificar stack | N/A |
| Access | PostgreSQL + app web | Escalabilidad | N/A |

**Proceso:**
1. **Análisis:** Schema actual, volumetría, queries críticas
2. **Diseño:** Schema target, estrategia de migración
3. **Testing:** Migración de datos en ambiente test
4. **Validación:** Verificación de integridad, performance
5. **Cutover:** Migración en producción (downtime mínimo)
6. **Monitoreo:** Validación post-migración (1 mes)

**Herramientas:**
- AWS Database Migration Service (DMS)
- pgloader (migración a PostgreSQL)
- Debezium (CDC - Change Data Capture)
- Custom scripts (Python, SQL)

**ICP:** Empresas con licencias caras de Oracle/SQL Server

**Pricing:** USD 8.000 - 50.000 (según volumetría y complejidad)

**Timeline típico:** 2-6 meses

**ROI:** Payback 6-18 meses (ahorro en licencias)

**Líder técnico:** Ale (bases de datos) + Dino (ajuste de aplicaciones)

**Ciclo de venta:** 30-60 días

---

### 1.4 Actualización de Stack Tecnológico

**Descripción:** Upgrade de frameworks, lenguajes y librerías obsoletos.

**Actualizaciones típicas:**

| Desde | Hacia | Motivación |
|-------|-------|------------|
| PHP 5.x / 7.x | PHP 8.x | Security, performance |
| Ruby on Rails 3.x | Rails 7.x | Security, features |
| Django 1.x | Django 5.x | Security, async |
| Angular.js (1.x) | React / Vue 3 | Mantenibilidad |
| jQuery spaghetti | React + TypeScript | Arquitectura moderna |
| .NET Framework 4.x | .NET 8 | Cross-platform, performance |
| Python 2.7 | Python 3.11+ | EOL, ecosystem |

**Proceso:**
1. **Auditoría:** Identificar deprecaciones, vulnerabilidades (npm audit, Snyk)
2. **Planificación:** Roadmap de actualización (incremental vs big bang)
3. **Actualización:** Upgrade de dependencias, ajuste de código
4. **Testing:** Regresión completa
5. **Deploy:** Gradual con rollback plan

**ICP:** Empresas con aplicaciones en frameworks EOL (End of Life)

**Pricing:** USD 5.000 - 40.000 (según alcance)

**Timeline típico:** 1-6 meses

**Líder técnico:** Dino (desarrollo) + QA (testing exhaustivo)

**Ciclo de venta:** 15-45 días

---

### 1.5 Migración Desktop → Web

**Descripción:** Transformación de aplicaciones de escritorio (WinForms, WPF, VB6, Delphi) a aplicaciones web modernas.

**Casos de uso:**
- Sistema de gestión en VB6 que no corre en Windows 10+
- Aplicación WinForms que requiere instalación en cada PC
- Sistema Delphi sin soporte y con bugs críticos

**Metodología:**
1. **Reverse engineering:** Documentar lógica de negocio actual
2. **Diseño:** Arquitectura web (SPA, PWA, o app tradicional)
3. **Desarrollo:** Backend API + Frontend moderno
4. **Migración de datos:** DB Access/FoxPro → PostgreSQL
5. **Coexistencia:** Período de uso paralelo
6. **Cutover:** Migración completa

**Stack target:**
- Backend: FastAPI (Python) / NestJS (TypeScript)
- Frontend: React + Next.js
- Base de datos: PostgreSQL
- Deployment: Cloud (AWS, Azure)

**ICP:** Empresas con aplicaciones desktop críticas de 10+ años

**Pricing:** USD 15.000 - 80.000 (según complejidad)

**Timeline típico:** 3-9 meses

**ROI esperado:**
- Eliminación de instalaciones (0 soporte desktop)
- Acceso desde cualquier dispositivo
- Facilita trabajo remoto

**Líder técnico:** Dino (desarrollo full-stack) + Ale (deployment)

**Ciclo de venta:** 30-90 días

---

### 1.6 Rescate de Aplicaciones Abandonadas

**Descripción:** Recuperación de sistemas sin mantenimiento cuyo proveedor/desarrollador ya no está disponible.

**Situaciones típicas:**
- Freelancer desapareció, no hay código fuente
- Software house cerró
- Desarrollador interno se fue y nadie entiende el código
- Sistema sin documentación, "funciona pero nadie lo toca"

**Proceso:**
1. **Auditoría técnica:** Reverse engineering, análisis de código
2. **Documentación:** Reconstruir arquitectura y lógica
3. **Estabilización:** Resolver bugs críticos
4. **Mantenimiento:** Plan de soporte + evolución

**Opción 1: Estabilizar**
- Resolver bugs críticos
- Documentar código
- Setup de CI/CD
- Plan de mantenimiento

**Opción 2: Reescribir**
- Reconstruir desde cero con stack moderno
- Mantener misma funcionalidad
- Migración gradual

**ICP:** Empresas con sistema crítico sin soporte

**Pricing:** USD 5.000 - 40.000 (según opción)

**Líder técnico:** Dino (análisis + desarrollo) + Martín (gestión)

**Ciclo de venta:** 15-30 días (urgencia alta)

---

## 2. PAQUETES Y BUNDLES

### Bundle 1: "Migración Cloud Total"

**Incluye:**
- Cloud Assessment
- Migración de infraestructura
- Migración de base de datos
- Optimización de costos (FinOps)
- 3 meses de soporte post-migración

**Precio:** USD 40.000 - 100.000 (según alcance)

**Target:** Empresas con infra on-premise costosa

---

### Bundle 2: "Modernización Full-Stack"

**Incluye:**
- Refactoring de monolito
- Actualización de stack tecnológico
- Migración a cloud
- CI/CD automatizado
- 6 meses de soporte

**Precio:** USD 60.000 - 150.000

**Target:** Empresas tech con deuda técnica alta

---

### Bundle 3: "Rescate Express"

**Incluye:**
- Auditoría técnica completa
- Estabilización de bugs críticos
- Documentación de código
- Setup de CI/CD
- 3 meses de mantenimiento

**Precio:** USD 10.000 - 30.000

**Target:** Empresas con sistema abandonado

---

## 3. METODOLOGÍA

### Assessment Framework

Para cada proyecto, evaluamos:

| Dimensión | Evaluación | Score |
|-----------|------------|-------|
| **Complejidad técnica** | LOC, arquitectura, dependencias | 1-10 |
| **Deuda técnica** | Deprecaciones, vulnerabilidades | 1-10 |
| **Riesgo de negocio** | Impacto downtime, usuarios afectados | 1-10 |
| **Urgencia** | ¿Frena el negocio? ¿Amenaza seguridad? | 1-10 |

**Score total > 30:** Proyecto crítico, requiere planning exhaustivo

---

### Estrategia de Testing

Para migraciones/refactorings:
1. **Unit tests:** Cobertura >80% del código crítico
2. **Integration tests:** APIs, bases de datos
3. **E2E tests:** Flujos de usuario completos
4. **Load tests:** Performance bajo carga
5. **UAT:** Validación con usuarios finales

---

### Plan de Rollback

Cada migración incluye:
- Backup completo pre-migración
- Estrategia de rollback (tiempo estimado: <1 hora)
- Validación de integridad de datos
- Plan de comunicación

---

## 4. STACK TECNOLÓGICO

### Backend
- **Lenguajes:** Python, TypeScript, Java
- **Frameworks:** FastAPI, NestJS, Spring Boot
- **Bases de datos:** PostgreSQL, Redis

### Frontend
- **Framework:** React 18 + Next.js 14
- **TypeScript:** Obligatorio
- **UI:** Tailwind CSS + shadcn/ui

### Infraestructura
- **Cloud:** AWS (preferencia), Azure, GCP
- **IaC:** Terraform, AWS CDK
- **Containers:** Docker, Kubernetes
- **CI/CD:** GitHub Actions, GitLab CI

### Monitoreo
- **APM:** Datadog, New Relic
- **Logs:** CloudWatch, Elasticsearch
- **Errores:** Sentry

---

## 5. GO-TO-MARKET

### Canal Principal: Directo + Referidos

**Estrategia:**
1. Identificar empresas con sistemas legacy (LinkedIn, registros públicos)
2. Outreach con mensaje específico (ej: "Vimos que usan Oracle, podemos reducir costos 70%")
3. Assessment gratuito (1 semana) para demostrar valor
4. Propuesta con business case claro

---

### Mensajes Clave por Pain Point

| Pain Point | Mensaje |
|-----------|---------|
| "Nuestro sistema tiene 15 años y nadie lo entiende" | "Documentamos, estabilizamos y modernizamos sin reescribir desde cero" |
| "Las licencias de Oracle nos cuestan USD 100k/año" | "Migramos a PostgreSQL y recuperás la inversión en 12 meses" |
| "No podemos innovar porque el sistema es un monolito" | "Refactoring gradual a microservicios sin downtime" |
| "Nuestro desarrollador se fue y estamos bloqueados" | "Rescate express: en 2 semanas recuperamos el control" |

---

### Materiales

- **Assessment gratuito:** Documento de 10-15 páginas con hallazgos y recomendaciones
- **Caso de éxito:** Empresa similar con métricas reales (antes/después)
- **Business case:** Calculadora de ROI (ahorros, tiempos, riesgos)

---

## 6. ROADMAP DE SERVICIO

### Q1 2026 (Mar-May): Primeros Proyectos
- [ ] 1-2 proyectos de migración cloud (ticket alto)
- [ ] 1 proyecto de modernización stack
- [ ] Template de assessment estandarizado

**Target revenue:** USD 15K-30K (proyectos one-time)

---

### Q2 2026 (Jun-Ago): Especialización
- [ ] 2-3 proyectos simultáneos
- [ ] Primer caso de éxito documentado
- [ ] Partnership con proveedores cloud (AWS, Azure)

**Target revenue:** USD 30K-60K

---

### Q3 2026 (Sep-Nov): Escala
- [ ] 3-5 proyectos simultáneos
- [ ] Contratar desarrollador adicional
- [ ] Metodología y templates consolidados

**Target revenue:** USD 50K-100K

---

### Q4 2026 (Dic-Feb): Consolidación
- [ ] 5-7 proyectos activos
- [ ] Ofrecer mantenimiento post-proyecto (recurrente)
- [ ] Explorar modelo de staffing (body shopping)

**Target revenue:** USD 80K-150K

---

## 7. EQUIPO NECESARIO

### Fase Inicial (Q1-Q2)
| Rol | Persona | Dedicación |
|-----|---------|------------|
| Arquitecto / PM | Martín | 40% |
| Backend / Refactoring | Dino | 80% |
| DevOps / Cloud | Ale | 60% |
| Frontend | Freelance | 60% |
| QA | Freelance | 40% |

**Costo:** USD 10.000 - 15.000/mes

### Fase Escalamiento (Q3-Q4)
- Contratar desarrollador full-stack full-time
- Contratar DevOps part-time
- QA automation specialist

---

## 8. MÉTRICAS DE ÉXITO

| Métrica | Target Q1 | Target Q2 | Target Q4 |
|---------|-----------|-----------|-----------|
| Proyectos cerrados | 1-2 | 3-5 | 10-15 |
| Revenue Pilar 3 | USD 20K | USD 50K | USD 120K |
| Margen neto | >40% | >45% | >50% |
| Proyectos a tiempo | >80% | >85% | >90% |
| NPS | >8 | >8.5 | >9 |

---

## 9. RIESGOS Y MITIGACIONES

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Scope creep | Alta | Alto | Propuestas cerradas, change requests formales |
| Subestimar complejidad | Media | Alto | Assessment exhaustivo, buffer 20% en estimaciones |
| Cliente sin backup de datos | Baja | Crítico | Verificar backups antes de iniciar |
| Sistema legacy sin documentación | Alta | Medio | Reverse engineering incluido en cotización |
| Downtime durante migración | Baja | Crítico | Blue/Green deployment, plan de rollback probado |

---

## 10. CASOS DE USO DETALLADOS

### Caso 1: Migración Oracle → PostgreSQL en Empresa Industrial

**Cliente:** Empresa industrial con 200 empleados
**Problema:** Licencias Oracle USD 80.000/año, sistema ERP con BD Oracle
**Solución:** Migración a PostgreSQL + optimización de queries
**Timeline:** 4 meses
**Costo proyecto:** USD 35.000
**Resultados:**
- Ahorro anual: USD 80.000 (licencias)
- Payback: 5 meses
- Performance: +30% (después de optimización)

---

### Caso 2: Refactoring Monolito PHP en eCommerce

**Cliente:** eCommerce con 50.000 pedidos/mes
**Problema:** Monolito PHP imposible de mantener, deploys de 2 horas con downtime
**Solución:** Extracción gradual a microservicios (checkout, inventario, pagos)
**Timeline:** 6 meses
**Costo proyecto:** USD 60.000
**Resultados:**
- Tiempo de deploy: 2 horas → 10 minutos
- Downtime: Eliminado (blue/green)
- Velocidad de desarrollo: +150%

---

### Caso 3: Migración Desktop VB6 → Web

**Cliente:** Distribuidora con sistema de gestión VB6 (15 años)
**Problema:** No funciona en Windows 10+, imposible modificar
**Solución:** Reescritura completa en React + FastAPI
**Timeline:** 8 meses
**Costo proyecto:** USD 50.000
**Resultados:**
- Acceso desde cualquier dispositivo
- Trabajo remoto habilitado
- Eliminación de soporte desktop

---

## 11. PRÓXIMOS PASOS

### Acción Inmediata (Esta Semana)

- [ ] Identificar 10 empresas con Oracle/SQL Server (LinkedIn Sales Navigator)
- [ ] Crear template de assessment
- [ ] Desarrollar calculadora de ROI para migraciones
- [ ] Preparar propuesta estándar de migración cloud

### Decisiones Pendientes

- [ ] ¿Priorizamos migraciones cloud o refactorings en Q1?
- [ ] ¿Partnership con AWS/Azure para referidos?
- [ ] ¿Ofrecemos mantenimiento post-proyecto (recurrente)?
- [ ] ¿Necesitamos certificaciones cloud (AWS SA, etc.)?

---

**Documento confidencial - Mi Empresa SAS**
**Febrero 2026**

# PILAR 1: Organismos Públicos Más Eficientes
## Transformación Digital del Estado - Propuesta 0 Papel

**Versión:** 1.0
**Fecha:** Febrero 2026
**Estado:** Diseño - Requiere verificación legal por cliente
**Responsable Comercial:** Socio A (exclusivamente)

---

## ⚠️ RESTRICCIONES LEGALES

### Marco de Verificación Obligatorio

Antes de contactar cualquier prospecto del sector público, se DEBE verificar:

| Criterio | Verificación |
|----------|--------------|
| ¿Es proveedor actual del Organismo Provincial donde trabajan Socios B/C? | Si SÍ → **PROHIBIDO** |
| ¿Fue proveedor en últimos 2 años? | Si SÍ → **PROHIBIDO** |
| ¿Está en proceso de licitación con el Organismo? | Si SÍ → **PROHIBIDO** |
| ¿Tiene relación comercial indirecta? | Si SÍ → **CONSULTAR ABOGADO** |

### Segmentación de Mercado Público Permitido

```
MERCADO OBJETIVO (requiere verificación caso por caso):

✅ PERMITIDO:
├── Municipios SIN relación comercial con Organismo Provincial
├── Organismos Nacionales (AFIP, ANSES, Ministerios Nación)
├── Universidades Nacionales (verificar si son proveedores provinciales)
├── ONGs con financiamiento público
├── Gobiernos provinciales de otras provincias
└── Entes autárquicos sin vínculo comercial

❌ PROHIBIDO:
├── Organismo Provincial empleador de Socios B/C
├── Proveedores actuales del Organismo (últimos 2 años)
├── Licitantes activos del Organismo
└── Cualquier entidad con relación comercial directa/indirecta
```

### Participación de Socios

| Actividad | Socio A | Socios B/C |
|-----------|---------|------------|
| Contacto comercial | ✅ | ❌ |
| Propuestas | ✅ | ❌ |
| Implementación técnica | ✅ | ⚠️ Solo si verificado |
| Uso de información del Organismo | ❌ | ❌ |

**Regla de oro:** Socios B/C NO pueden participar en ninguna etapa si hay CUALQUIER duda de conflicto de interés.

---

## 1. RESUMEN EJECUTIVO

El sector público argentino enfrenta ineficiencias sistémicas debido a procesos manuales y dependencia del papel. Proponemos una suite de soluciones de transformación digital que reducen costos operativos, mejoran tiempos de respuesta y aumentan la transparencia.

### Propuesta de Valor

| Problema | Solución | Impacto Medible |
|----------|----------|-----------------|
| Expedientes en papel perdidos/demorados | Expediente Electrónico (EE) | -70% tiempo tramitación |
| Cedulones físicos costosos | Notificaciones Digitales | -80% costo impresión/correo |
| Recibos de sueldo en papel | Portal del Empleado | -90% costo distribución |
| Trámites presenciales lentos | Mesa de Entrada Virtual | -60% tiempo espera |
| Firma manuscrita presencial | Firma Digital | -50% ciclo aprobaciones |

### Diferencial Competitivo

- **Experiencia en sector público:** Conocimiento de normativa argentina (Ley 25.506 FED, Decreto 561/2016)
- **Soluciones probadas:** Stack tecnológico con casos de éxito en Argentina
- **ROI demostrable:** Ahorros medibles desde mes 1
- **Capacitación incluida:** Change management para adopción real
- **On-premise o Cloud:** Flexibilidad según requerimientos de seguridad

---

## 2. LÍNEAS DE SERVICIO

### 2.1 Expediente Electrónico (EE)

**Descripción:** Sistema de gestión documental con trazabilidad completa de expedientes administrativos digitales.

#### Características

- Caratulación automática
- Workflow configurable por tipo de trámite
- Firma digital integrada (FED, GEDO compatible)
- Búsqueda full-text
- Vistas según permisos (RRHH, Legal, Contaduría, etc.)
- Integración con sistemas legados (REST API)
- Auditoría completa de acciones

#### Cumplimiento Normativo

| Norma | Cumplimiento |
|-------|--------------|
| Ley 25.506 Firma Digital | ✅ Integración con AFIP CA |
| Decreto 561/2016 Simplificación | ✅ Workflow digital |
| Ley 25.188 Ética Pública | ✅ Trazabilidad total |
| Ley 27.275 Acceso Info Pública | ✅ Portal de consulta |

#### Módulos

```
Expediente Electrónico
├── Core
│   ├── Gestor Documental
│   ├── Motor de Workflow
│   ├── Firma Digital
│   └── Búsqueda & Reportes
├── Integraciones
│   ├── Active Directory / LDAP
│   ├── GEDO (GDE)
│   ├── SUAF / RAFAM
│   └── Sistemas propios
└── Portales
    ├── Portal Empleado Público
    ├── Portal Ciudadano
    └── API para 3ros
```

#### Pricing

| Concepto | Costo |
|----------|-------|
| **Setup inicial** | USD 15.000 - 40.000 |
| Licenciamiento | USD 3.000 - 8.000/mes |
| Capacitación | USD 2.000 - 5.000 |
| Soporte L1/L2 | USD 1.000 - 3.000/mes |
| Customizaciones | USD 80 - 120/hora |

**Modelo alternativo:** USD 5 - 10/usuario/mes (SaaS cloud)

#### ROI Típico

| Organismo | Expedientes/año | Ahorro anual | Payback |
|-----------|-----------------|--------------|---------|
| Municipio 50k hab | 5.000 | USD 50.000 | 8 meses |
| Municipio 150k hab | 15.000 | USD 120.000 | 5 meses |
| Organismo provincial | 50.000 | USD 400.000 | 4 meses |

---

### 2.2 Cedulones y Notificaciones Digitales

**Descripción:** Sistema de notificaciones electrónicas con validez legal para reemplazar cedulones físicos.

#### Características

- Notificación por email + SMS
- Portal web de consulta 24/7
- Firma digital del notificado
- Acuse de recibo automático
- Recordatorios programables
- Certificado de notificación descargable
- Integración con sistemas judiciales/administrativos

#### Tipos de Notificación

| Tipo | Casos de Uso |
|------|--------------|
| Administrativa | Resoluciones, intimaciones, citaciones |
| Laboral | Sumarios, apercibimientos, cesantías |
| Tributaria | Liquidaciones, intimaciones de pago |
| Judicial | Notificaciones judiciales (requiere homologación) |

#### Pricing

| Concepto | Costo |
|----------|-------|
| **Setup inicial** | USD 8.000 - 20.000 |
| Licencia mensual | USD 1.500 - 4.000/mes |
| Por notificación enviada | USD 0.20 - 0.50 (modelo alternativo) |
| Integración con sistemas | USD 3.000 - 8.000 |

#### Ahorro vs Cedulón Físico

| Concepto | Cedulón Físico | Digital | Ahorro |
|----------|----------------|---------|--------|
| Impresión | AR$ 500 | AR$ 0 | 100% |
| Correo/Mensajería | AR$ 1.500 | AR$ 30 | 98% |
| Tiempo de entrega | 5-15 días | Instantáneo | -90% |
| Certeza de recepción | 60-70% | 95%+ | +35% |

**ROI:** Con 1.000 notificaciones/mes → ahorro anual USD 20.000

---

### 2.3 Portal del Empleado - Recibo de Sueldo Digital

**Descripción:** Portal web/app móvil para que empleados públicos accedan a recibos de sueldo, certificados y trámites.

#### Características

- Recibos de sueldo descargables (PDF firmado)
- Historial de liquidaciones (últimos 5 años)
- Certificaciones automáticas:
  - Certificado de servicios
  - Certificado de haberes
  - Constancia de CUIL/CUIT
- Solicitud de trámites online:
  - Vacaciones
  - Licencias
  - Constancias
- Firma digital para formularios
- Notificaciones push

#### Integración con Sistemas de RRHH

| Sistema | Integración |
|---------|-------------|
| SUAF (Sistema Único) | ✅ API REST |
| RAFAM | ✅ Archivos XML |
| SAP HR | ✅ RFC/BAPI |
| Tango | ✅ API |
| Sistemas custom | ✅ ETL configurable |

#### Pricing

| Concepto | Costo |
|----------|-------|
| **Setup inicial** | USD 10.000 - 25.000 |
| Licencia mensual | USD 2.000 - 6.000/mes |
| Por empleado activo | USD 0.50 - 1.50/mes (modelo alternativo) |
| App móvil (iOS/Android) | USD 8.000 - 15.000 (one-time) |

#### ROI

| Organismo | Empleados | Costo papel/mes | Costo digital/mes | Ahorro anual |
|-----------|-----------|-----------------|-------------------|--------------|
| 500 empleados | 500 | USD 750 | USD 250 | USD 6.000 |
| 2.000 empleados | 2.000 | USD 3.000 | USD 1.000 | USD 24.000 |
| 10.000 empleados | 10.000 | USD 15.000 | USD 5.000 | USD 120.000 |

---

### 2.4 Mesa de Entrada Virtual

**Descripción:** Sistema de gestión de trámites ciudadanos online, reduciendo filas presenciales.

#### Características

- Formularios web configurables
- Upload de documentación
- Seguimiento de trámite en tiempo real
- Turnos online
- Videollamadas para consultas
- Chatbot asistido por IA (FAQ automáticas)
- Panel de gestión para empleados

#### Tipos de Trámites Digitalizables

| Área | Ejemplos |
|------|----------|
| Tributaria | Planes de pago, exenciones, consultas deuda |
| RRHH | Certificados, licencias, reclamos |
| Obras Públicas | Permisos, denuncias, consultas |
| Salud | Turnos, historia clínica, recetas |
| Educación | Inscripciones, certificados, becas |

#### Pricing

| Concepto | Costo |
|----------|-------|
| **Setup inicial** | USD 12.000 - 30.000 |
| Licencia mensual | USD 2.500 - 7.000/mes |
| Por trámite procesado | USD 0.10 - 0.30 (modelo alternativo) |
| Chatbot IA | USD 1.000 - 2.500/mes |

#### Impacto

- Reducción 60% consultas presenciales
- Reducción 70% tiempo de respuesta
- Satisfacción ciudadana: +40%
- Ahorro en personal de ventanilla: 2-3 FTE

---

### 2.5 Firma Digital y Circuitos de Aprobación

**Descripción:** Plataforma de firma digital con workflows de aprobación multinivel.

#### Características

- Firma con Certificado Digital (AFIP, ANSES, otros CA)
- Firma manuscrita biométrica
- Workflows de aprobación:
  - Secuencial (A → B → C)
  - Paralelo (A + B + C)
  - Condicional (si monto > X, requiere Y)
- Recordatorios automáticos
- Vencimientos programables
- Integración con Expediente Electrónico

#### Casos de Uso

| Documento | Workflow Típico |
|-----------|-----------------|
| Resolución | Redactor → Asesor Legal → Secretario → Titular |
| Orden de Compra | Solicitante → Jefe Área → Contaduría → Tesorería |
| Convenio | Dirección → Legal → Contaduría → Intendente/Ministro |
| Certificado | Auto-generado → Firma automática |

#### Pricing

| Concepto | Costo |
|----------|-------|
| **Setup inicial** | USD 8.000 - 18.000 |
| Licencia mensual | USD 1.500 - 4.000/mes |
| Por firma realizada | USD 0.05 - 0.15 (modelo alternativo) |

---

### 2.6 Business Intelligence para Gestión Pública

**Descripción:** Dashboards y reportes automáticos para toma de decisiones basada en datos.

#### Módulos

- Indicadores de Gestión en Tiempo Real
- Presupuesto ejecutado vs asignado
- Performance por área/secretaría
- Tiempos de respuesta de trámites
- Productividad de empleados
- Cumplimiento de metas
- Alertas de desvíos

#### Fuentes de Datos Integrables

- Expediente Electrónico
- Sistema de RRHH (SUAF, RAFAM)
- Sistemas contables
- CRM/Trámites
- Bases de datos legacy

#### Pricing

| Concepto | Costo |
|----------|-------|
| **Setup inicial** | USD 15.000 - 35.000 |
| Licencia mensual | USD 3.000 - 8.000/mes |
| Dashboards custom | USD 2.000 - 5.000 c/u |
| Capacitación | USD 2.000 - 4.000 |

---

### 2.7 Archivo Digital Histórico

**Descripción:** Digitalización masiva de archivos históricos en papel con OCR e indexación.

#### Proceso

1. **Relevamiento:** Medición volumétrica de documentación
2. **Digitalización:** Escaneo batch con OCR
3. **Indexación:** Metadata + búsqueda full-text
4. **Migración:** Carga al sistema de gestión documental
5. **Disposición:** Protocolo de destrucción/conservación del papel

#### Pricing

| Concepto | Costo |
|----------|-------|
| Relevamiento | USD 2.000 - 5.000 |
| Escaneo por página | USD 0.05 - 0.15 |
| OCR + indexación | USD 0.02 - 0.08/pág |
| Sistema de gestión | USD 3.000 - 8.000/mes |

#### ROI

| Volumen | Costo Digitalización | Ahorro Anual (espacio físico) | Payback |
|---------|----------------------|-------------------------------|---------|
| 100.000 págs | USD 15.000 | USD 8.000 | 22 meses |
| 500.000 págs | USD 65.000 | USD 35.000 | 22 meses |
| 1.000.000 págs | USD 120.000 | USD 70.000 | 20 meses |

---

## 3. PAQUETES INTEGRADOS

### Paquete 1: Municipio Pequeño (< 30k habitantes)

**Incluye:**
- Expediente Electrónico (lite)
- Portal del Empleado
- Mesa de Entrada Virtual

**Precio:** USD 30.000 setup + USD 4.000/mes
**Ahorro anual estimado:** USD 50.000 - 80.000

---

### Paquete 2: Municipio Mediano (30k - 150k habitantes)

**Incluye:**
- Expediente Electrónico (completo)
- Notificaciones Digitales
- Portal del Empleado
- Mesa de Entrada Virtual
- Firma Digital

**Precio:** USD 60.000 setup + USD 10.000/mes
**Ahorro anual estimado:** USD 120.000 - 200.000

---

### Paquete 3: Municipio Grande / Organismo Provincial (> 150k habitantes)

**Incluye:**
- Expediente Electrónico (enterprise)
- Notificaciones Digitales
- Portal del Empleado + App móvil
- Mesa de Entrada Virtual + Chatbot IA
- Firma Digital
- Business Intelligence
- Archivo Digital (opcional)

**Precio:** USD 120.000 - 200.000 setup + USD 25.000 - 40.000/mes
**Ahorro anual estimado:** USD 400.000 - 800.000

---

## 4. STACK TECNOLÓGICO

### Backend

| Componente | Tecnología |
|------------|------------|
| Framework | FastAPI (Python) / Spring Boot (Java) |
| Base de datos | PostgreSQL 15+ |
| Almacenamiento | MinIO (S3-compatible) / Azure Blob |
| Búsqueda | Elasticsearch |
| Workflow Engine | Camunda BPM |
| Queue | RabbitMQ / Redis |
| OCR | Tesseract / AWS Textract |

### Frontend

| Componente | Tecnología |
|------------|------------|
| Web App | React 18 + Next.js 14 |
| Mobile App | React Native / Flutter |
| UI Framework | Material-UI / Ant Design |
| Autenticación | OAuth 2.0 + SAML (integración AD) |

### Seguridad

- HTTPS obligatorio (TLS 1.3)
- Firma digital con certificados AFIP/ANSES
- Encriptación en reposo (AES-256)
- Logs de auditoría inmutables
- Backups automáticos cifrados
- Cumplimiento ISO 27001

### Deployment

- **On-premise:** Kubernetes / Docker Swarm
- **Cloud:** AWS / Azure / Google Cloud
- **Híbrido:** Datos sensibles on-prem, aplicaciones en cloud

---

## 5. MODELO DE IMPLEMENTACIÓN

### Fase 1: Discovery (2-4 semanas)

- Relevamiento de procesos actuales
- Mapeo de sistemas legados
- Identificación de actores y roles
- Definición de alcance

**Entregables:**
- Documento de Arquitectura
- Plan de Migración
- Cronograma de Implementación

---

### Fase 2: Setup (4-8 semanas)

- Instalación de infraestructura
- Configuración de integraciones
- Parametrización de workflows
- Carga de datos maestros

**Entregables:**
- Ambiente de desarrollo
- Ambiente de testing
- Ambiente de producción

---

### Fase 3: Capacitación (2-3 semanas)

- Capacitación a administradores
- Capacitación a usuarios clave
- Capacitación masiva (opcional: e-learning)
- Documentación de usuario

**Entregables:**
- Manuales de usuario
- Videos tutoriales
- FAQ

---

### Fase 4: Piloto (4-6 semanas)

- Despliegue en área piloto
- Monitoreo intensivo
- Ajustes y mejoras
- Validación de procesos

**Entregables:**
- Informe de piloto
- Lecciones aprendidas
- Plan de rollout

---

### Fase 5: Rollout (8-12 semanas)

- Despliegue gradual por áreas
- Migración de expedientes históricos
- Soporte on-site
- Go-live

**Entregables:**
- Sistema en producción
- Informe de cierre de proyecto

---

### Fase 6: Soporte (continuo)

- Soporte L1/L2/L3
- Mantenimiento correctivo
- Actualizaciones de seguridad
- Mejoras continuas

**SLA:**
- Crítico: 2 horas
- Alto: 8 horas
- Medio: 48 horas
- Bajo: 1 semana

---

## 6. CASOS DE ÉXITO (Ejemplos de Mercado)

### Municipalidad de Córdoba Capital

- 1.5M habitantes
- Expediente Electrónico + Trámites Online
- 70% reducción en tiempos de tramitación
- 100.000+ trámites digitales/año

### Gobierno de la Ciudad de Buenos Aires

- 3M habitantes
- Sistema TAD (Trámites a Distancia)
- 80% de trámites digitalizados
- Ahorro estimado: USD 10M anuales

### Municipalidad de Rosario

- 1M habitantes
- Portal del Ciudadano + Expediente Electrónico
- 60% reducción consultas presenciales
- Satisfacción ciudadana: 85%

---

## 7. FINANCIAMIENTO

### Opciones para Organismos Públicos

| Fuente | Características |
|--------|-----------------|
| **Presupuesto propio** | Pago directo, licitación pública |
| **BID/BIRF** | Préstamos para modernización del Estado |
| **CFI (Consejo Federal de Inversiones)** | Financiamiento a provincias/municipios |
| **Programa Municipios Digitales (Nación)** | Subsidios para transformación digital |
| **Leasing tecnológico** | Financiación privada |

---

## 8. ROADMAP COMERCIAL

### Mes 1-2: Preparación

- [ ] Verificación legal de cada prospecto
- [ ] Desarrollo de propuestas técnicas
- [ ] Casos de éxito/demos
- [ ] Sitio web de referencia

### Mes 3-4: Prospección

- [ ] Identificar 10-15 municipios target
- [ ] Contacto inicial (Solo Socio A)
- [ ] Webinars/presentaciones
- [ ] Propuestas técnico-económicas

### Mes 5-6: Cierre

- [ ] Licitación/contratación directa
- [ ] Negociación de contrato
- [ ] Firma de acuerdo

### Mes 7-12: Ejecución

- [ ] Implementación primer cliente
- [ ] Caso de éxito documentado
- [ ] Expansión a otros organismos

---

## 9. EQUIPO NECESARIO

### Fase Inicial (Proyecto 1)

| Rol | Perfil | Dedicación |
|-----|--------|------------|
| PM / Comercial | Socio A | 40% |
| Arquitecto / Backend | Socio C (Dino) | 60% |
| DevOps / Infra | Socio B (Ale) | 30% |
| Frontend Dev | Freelance | 80% |
| QA | Freelance | 50% |

**Costo estimado:** USD 8.000 - 12.000/mes

### Fase Escalamiento (3+ proyectos)

- Contratar desarrollador full-time
- Contratar soporte L1 part-time
- Especialista en firma digital

---

## 10. RIESGOS Y MITIGACIONES

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Licitación desierta por precio | Media | Alto | Pricing competitivo + financiamiento |
| Resistencia al cambio | Alta | Medio | Change management + capacitación |
| Integración con legados | Alta | Alto | POC previo + APIs flexibles |
| Demoras en aprobaciones | Alta | Medio | Cronograma realista + buffer |
| Cambio de gestión política | Media | Alto | Contratos multi-anuales + penalidades |
| Conflicto de interés no detectado | Baja | Crítico | **Verificación legal OBLIGATORIA pre-contacto** |

---

## 11. PRÓXIMOS PASOS

### Acción Inmediata

1. **Consulta legal final** sobre segmentación de mercado (USD 1.000 - 3.000)
2. **Desarrollar MVP demo** de Expediente Electrónico (4-6 semanas)
3. **Identificar 5 municipios piloto** sin conflicto de interés
4. **Preparar propuesta tipo** para licitaciones

### Decisiones Pendientes

- [ ] ¿Modelo on-premise o SaaS prioritario?
- [ ] ¿Desarrollamos producto propio o white-label de tercero?
- [ ] ¿Alianza con firma de abogados para firma digital?
- [ ] ¿Certificamos ISO 27001 para dar confianza?

---

## 12. ANEXO: CHECKLIST DE VERIFICACIÓN LEGAL

**Uso obligatorio antes de contactar cualquier organismo público**

```
PROSPECTO: _______________________________
FECHA: _______________
VERIFICADO POR: Socio A

1. Datos del Prospecto
   - Razón social completa: _______________________________
   - CUIT: _______________________________
   - Tipo (municipio/provincia/nacional/ONG): _______________________________
   - Jurisdicción: _______________________________

2. Verificación de Conflicto
   ☐ Consulté a Socios B/C si conocen al prospecto
   ☐ Busqué en registros públicos de contrataciones
   ☐ Verifiqué licitaciones activas
   ☐ Consulté con abogado (si dudoso)

3. Resultado
   ☐ VERDE - Sin conflicto, puede proceder
   ☐ AMARILLO - Dudoso, requiere análisis legal
   ☐ ROJO - Conflicto detectado, PROHIBIDO

4. Firmas
   Socio A: _______________________________
   Socio B: _______________________________
   Socio C: _______________________________

5. Decisión
   ☐ APROBADO para contacto
   ☐ RECHAZADO
   ☐ PENDIENTE análisis legal

Fecha decisión: _______________
```

---

**Documento confidencial - Mi Empresa SAS**
**Febrero 2026**

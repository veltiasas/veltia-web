# Estrategia de Discovery, Observabilidad y Knowledge Base para InfraAgent
## Relevamiento de Infraestructura -- Documentacion Automatizada -- Base de Conocimiento para Agentes IA

**Version:** 1.0
**Fecha:** Febrero 2026
**Estado:** En diseno
**Responsables:** Dino (Ejecucion tecnica), Ale (Infraestructura), Martin (Comercial)

---

## RESUMEN EJECUTIVO

Para implementar InfraAgent (Pilar 2), los agentes de IA necesitan una base de conocimiento estructurada de la infraestructura del cliente. El problema: la mayoria de los clientes no tienen documentadas sus cargas de trabajo, topologia de red, dependencias de servicios ni procedimientos de recuperacion.

### Dos Capas del Producto

| Capa | Necesita | Sin esto |
|------|---------|----------|
| **Analisis** | Knowledge base: que servicios existen, como se relacionan, que es normal vs anomalo | El agente no puede diagnosticar |
| **Accion** | Runbooks documentados: como reiniciar X, como escalar Y, como recuperar Z | El agente no puede remediar |

### Solucion

Un servicio de consultoria cobrable ("Infrastructure Discovery & Documentation") que genera la base de conocimiento como prerequisito para InfraAgent. El relevamiento se cobra como consultoria independiente y alimenta directamente al producto recurrente.

### Impacto Economico

| Metrica | Sin IA (manual) | Con IA (automatizado) |
|---------|----------------|----------------------|
| Horas humanas por engagement | ~160h | ~33h |
| Duracion calendario | 4-6 semanas | 2 semanas (10 dias habiles) |
| Personas requeridas | 2-3 full-time | 1.1 FTE equivalente |
| Costo interno VELTIA | ~USD 6.000 | ~USD 1.200 |
| Margen sobre precio venta (USD 4K-8K) | 25-50% | 70-85% |

---

## 1. GAPS IDENTIFICADOS EN LA DOCUMENTACION ACTUAL

### InfraAgent (Pilar 2) carece de:

- Mecanismo de auto-discovery de infraestructura
- CMDB o inventario estructurado de assets
- Proceso de onboarding especifico por cliente
- Arquitectura de knowledge base (almacenamiento de runbooks, patrones, resoluciones)
- Consideraciones on-premise (SNMP, agentes, AD/LDAP, VMware)

### Cloud Health Check (Pilar 4) carece de:

- Herramientas de discovery automatizado (evaluacion actual es manual)
- Puente con InfraAgent (el discovery del health check podria alimentar al agente)

### Observabilidad general:

- No hay estrategia unificada de los 3 pilares: Metricas + Logs + Traces
- No hay mencion de log aggregation (ELK, Loki)
- No hay mencion de distributed tracing (Jaeger, OpenTelemetry)
- Las herramientas mencionadas estan dispersas sin integracion

---

## 2. HERRAMIENTAS DE DISCOVERY EVALUADAS

### 2.1 Discovery de Red y Servicios

| Herramienta | Tipo | Costo | Que descubre | Ideal para |
|-------------|------|-------|-------------|------------|
| **nmap/masscan** | Scanner de red | Gratis (OSS) | Hosts activos, puertos, servicios, OS fingerprint | Escaneo inicial rapido |
| **Zabbix** | Monitoreo + Discovery | Gratis (OSS) | Discovery via SNMP, ICMP, agents. 300+ templates | On-premise con hardware variado |
| **Netbox** | CMDB/IPAM | Gratis (OSS) | NO descubre. Documenta racks, IPs, circuitos | Documentar lo descubierto |
| **Device42** | Discovery + CMDB | Comercial (~USD 1K+/ano) | Agentless discovery, dependency mapping | Clientes enterprise |
| **Ansible inventory** | Config management | Gratis (OSS) | Inventario de servers via SSH, facts | Si ya usa Ansible |
| **Steampipe** | Query cloud APIs | Gratis (OSS) | AWS/Azure/GCP resources como SQL queries | Discovery cloud nativa |
| **Cartography** | Graph de infra | Gratis (OSS) | Mapea relaciones entre assets cloud en Neo4j | Visualizar dependencias cloud |
| **AWS Systems Manager** | Inventario AWS | Incluido en AWS | Inventory de EC2, software, patches | Clientes AWS |
| **AWS Config** | Compliance + inventario | ~USD 0.003/item/mes | Historial de configuracion | Audit trail AWS |

### 2.2 Observabilidad (Metricas + Logs + Traces)

| Stack | Componentes | Costo | Ventaja | Desventaja |
|-------|------------|-------|---------|------------|
| **Grafana LGTM** | Loki + Grafana + Tempo + Mimir | Gratis (OSS) | Stack unificado, una UI | Mas complejo de operar |
| **Prometheus + Grafana** | Prometheus + Grafana | Gratis (OSS) | Probado, ya en Pilar 2 | Solo metricas |
| **ELK Stack** | Elasticsearch + Logstash + Kibana | Gratis/Cloud | Excelente para logs | Pesado en recursos |
| **Datadog** | Todo-en-uno | USD 15-23/host/mes | Facil, auto-discovery | Caro, vendor lock-in |
| **New Relic** | Todo-en-uno | 100GB gratis | Free tier generoso | Limitado en infra |
| **OpenTelemetry** | Framework instrumentacion | Gratis (CNCF) | Estandar, vendor-neutral | Solo collector |

### 2.3 Recomendacion por Segmento

| Segmento | Discovery | Observabilidad | Costo |
|----------|----------|---------------|-------|
| PYME on-premise (10-30 servers) | nmap + Zabbix + Netbox | Zabbix + Loki + Grafana | USD 0 (OSS) |
| Startup cloud (AWS) | Steampipe + SSM + Config | Prometheus + Loki + Grafana | USD 0-500/mes |
| Empresa mediana (50+ servers) | Zabbix + Steampipe + Netbox | Grafana LGTM completo | USD 0 (OSS) |
| Enterprise (100+ servers) | Device42 + Netbox | Datadog o Grafana Cloud | USD 1K-5K/mes |

---

## 3. SERVICIO: INFRASTRUCTURE DISCOVERY & DOCUMENTATION

### 3.1 Posicionamiento

Nuevo servicio de consultoria (Pilar 5) que funciona como prerequisito para InfraAgent (Pilar 2). Se cobra como consultoria independiente. Conversion esperada a InfraAgent: 80%+.

### 3.2 Fases de Ejecucion

#### Fase 1: Network Discovery (Semana 1)

- Escaneo de red con nmap (segmentos, hosts, puertos, servicios)
- Identificacion de VLANs, subnets, gateways
- Mapeo de DNS interno
- Identificacion de firewalls y reglas
- **Entregable:** Mapa de red (diagrama topologico)

#### Fase 2: Service Discovery (Semana 1-2)

- Inventario de servidores (fisicos y virtuales)
- Servicios corriendo en cada servidor (puertos, procesos)
- Bases de datos (motor, tamano, conexiones)
- APIs y endpoints expuestos
- Integraciones entre servicios (quien llama a quien)
- **Entregable:** Service Catalog + Dependency Map

#### Fase 3: Workload Profiling (Semana 2-3)

- Baseline de metricas: CPU, memoria, disco, red (7 dias minimo)
- Patrones de uso (picos, horarios, estacionalidad)
- Identificacion de cuellos de botella
- Capacidad disponible vs utilizada
- **Entregable:** Workload Profile Report + Baseline Metrics

#### Fase 4: Documentation Generation (Semana 3-4)

- Generacion de documentacion estructurada por workload
- Runbooks de operacion basicos (start/stop/restart/backup)
- Procedimientos de recuperacion conocidos
- Contactos y escalaciones
- **Entregable:** Knowledge Base inicial para InfraAgent

### 3.3 Pricing

| Tamano cliente | Servers | Duracion | Precio |
|---------------|---------|----------|--------|
| Pequeno | 5-15 | 2 semanas | USD 2.000-4.000 |
| Mediano | 15-50 | 3-4 semanas | USD 4.000-8.000 |
| Grande | 50-100+ | 4-6 semanas | USD 8.000-15.000 |

---

## 4. KNOWLEDGE BASE PARA INFRAAGENT

### 4.1 Estructura

```
knowledge-base/
├── topology/
│   ├── network-diagram.json          # Topologia de red (parseable)
│   ├── network-diagram.md            # Version legible
│   └── vlans.yaml                    # Segmentos de red
├── inventory/
│   ├── servers.yaml                  # Inventario de servers
│   ├── services.yaml                 # Catalogo de servicios
│   ├── databases.yaml                # Bases de datos
│   └── dependencies.yaml             # Mapa de dependencias
├── baselines/
│   ├── cpu-baselines.json            # Metricas normales por server
│   ├── memory-baselines.json
│   ├── disk-baselines.json
│   └── network-baselines.json
├── runbooks/
│   ├── service-restart/              # Runbooks por servicio
│   ├── recovery/                     # Procedimientos de recuperacion
│   └── escalation/                   # Cadena de escalamiento
│       └── contacts.yaml
└── standards/
    ├── naming-convention.md
    ├── tagging-strategy.md
    └── documentation-template.md
```

### 4.2 Formato para Consumo por LLM

| Formato | Uso | Razon |
|---------|-----|-------|
| YAML | Inventario, dependencias, baselines | Parseable por el agente, estructurado |
| Markdown | Runbooks, recovery procedures | Legible por LLM via RAG |
| JSON | Topologia, metricas en tiempo real | Queryable |

### 4.3 Alimentacion del Knowledge Base

| Fuente | Metodo | Frecuencia |
|--------|--------|-----------|
| Discovery inicial (consultoria) | Scripts + LLM + validacion humana | Una vez |
| Prometheus/Zabbix | API pull automatico | Cada 5 min |
| Logs (Loki) | Streaming | Continuo |
| Cambios infra (deploys, config) | Webhooks CI/CD | Por evento |
| Incidentes resueltos | Post-mortem -> runbook | Por incidente |
| Runbooks nuevos | Manual (equipo cliente) | Ad-hoc |

---

## 5. ESTANDAR DE DOCUMENTACION PARA NUEVOS SISTEMAS

### 5.1 Template Obligatorio por Servicio/Workload

```yaml
service:
  name: "[NOMBRE_SERVICIO]"
  owner: "[EQUIPO/PERSONA]"
  criticality: "[CRITICO|ALTO|MEDIO|BAJO]"
  description: "[Que hace este servicio]"

infrastructure:
  type: "[VM|Container|Serverless|Bare-metal]"
  host: "[hostname/IP]"
  os: "[OS version]"
  cpu: "[cores]"
  memory: "[GB]"
  disk: "[GB, tipo]"
  network:
    vlan: "[VLAN]"
    ip: "[IP]"
    ports: [80, 443, 5432]

dependencies:
  upstream:
    - name: "[servicio]"
      type: "[API|DB|Queue|File]"
      endpoint: "[url/host:port]"
      criticality: "[Si falla, que pasa]"
  downstream:
    - name: "[servicio]"
      impact: "[Que se rompe si este cae]"

monitoring:
  metrics_endpoint: "[url prometheus/exporter]"
  health_check: "[url /health]"
  logs: "[path o stream]"
  dashboards: "[url grafana]"
  alerts:
    - name: "[nombre alerta]"
      condition: "[cpu > 90% por 5min]"
      severity: "[critico|warning]"
      action: "[runbook-ref]"

operations:
  start: "[comando]"
  stop: "[comando]"
  restart: "[comando]"
  deploy: "[link a CI/CD]"
  backup: "[procedimiento]"
  restore: "[procedimiento]"
  rollback: "[procedimiento]"

recovery:
  rto: "[minutos]"
  rpo: "[minutos]"
  procedure: "[link a runbook]"
  escalation:
    l1: "[contacto]"
    l2: "[contacto]"
    l3: "[contacto]"
```

### 5.2 Reglas de Normalizacion

| Aspecto | Estandar |
|---------|----------|
| Nombres de servers | `{env}-{servicio}-{numero}` (ej: prod-api-01) |
| Tags/Labels | `environment`, `service`, `owner`, `cost-center`, `criticality` |
| Puertos | Documentar TODOS, incluyendo internos |
| Dependencias | Documentar upstream Y downstream |
| Alertas | Toda alerta debe referenciar un runbook |
| Runbooks | Markdown, pasos numerados, comandos copy-paste |
| Metricas | Baseline de 7 dias minimo antes de definir umbrales |

---

## 6. FLUJO COMPLETO: CONSULTORIA A INFRAAGENT

```
CONSULTORIA (Pilar 5)                    PRODUCTO (Pilar 2)
USD 2K-15K one-time                      USD 500-2K/mes recurrente

[1] Infrastructure Discovery             [4] InfraAgent Deploy
    - Network scan                           - Conectar a Prometheus/Zabbix
    - Service discovery                      - Cargar knowledge base
    - Workload profiling                     - Configurar alertas
    - Dependency mapping                     - Activar runbooks automaticos
           |                                        |
           v                                        v
[2] Documentation Generation             [5] Operacion Continua
    - Knowledge base (YAML/MD)               - Monitoreo 24/7
    - Runbooks                               - Diagnostico automatico
    - Baselines                              - Remediacion autonoma
    - Diagramas                              - Reportes automaticos
           |                                        |
           v                                        v
[3] Observability Setup                  [6] Mejora Continua
    - Instalar Prometheus/Zabbix             - Nuevos runbooks post-incidente
    - Instalar Loki (logs)                   - Refinamiento baselines
    - Configurar Grafana                     - Expansion a nuevos servicios
    - Definir alertas base                   - ML para prediccion
```

**Conversion esperada:** 80%+ de fase 3 a fase 4

---

## 7. STACK RECOMENDADO (MVP)

| Capa | Herramienta | Razon |
|------|-------------|-------|
| Discovery de red | nmap + scripts Python | Gratis, rapido, universal |
| Discovery cloud | Steampipe | SQL sobre APIs cloud, gratis |
| CMDB | Netbox o Supabase custom | OSS, flexible |
| Metricas | Prometheus + node_exporter | Estandar, gratis |
| Logs | Grafana Loki + Promtail | Liviano, integra con Grafana |
| Visualizacion | Grafana | Ya definido en Pilar 2 |
| Alerting | Alertmanager | Nativo Prometheus |
| Knowledge Base | YAML/MD en Git + RAG embeddings | Simple, versionable, LLM-ready |
| Agente IA | LangChain + function calling | Stack Pilar 2 |

**NO recomendado para MVP:** Datadog/New Relic como default (caro), ServiceNow (overkill), ELK (pesado)

---

## 8. IMPLEMENTACION: EQUIPO REDUCIDO + IA

### 8.1 Equipo Real

| Persona | Rol | Disponibilidad | Skills |
|---------|-----|----------------|--------|
| Dino | Ejecutor tecnico principal | ~60% | IA, Python, infra, cloud |
| Ale | Soporte infra e integraciones | ~30% | DevOps, redes, Linux, AWS |
| Martin | Comercial + coordinacion | ~20% | Gestion, documentacion |

**Capacidad real:** ~1.1 FTE. Restriccion: no pueden hacer 3 clientes en paralelo.

### 8.2 Automatizacion con IA (70% del Trabajo)

| Tarea | Sin IA | Con IA | Ahorro |
|-------|--------|--------|--------|
| Escaneo de red | 4h (manual) | 30min (script + LLM parsea) | 85% |
| Inventario servers | 40h (2h/server x 20) | 3h (Ansible + LLM) | 92% |
| Dependency mapping | 16h (entrevistas + manual) | 4h (netstat + LLM infiere) | 75% |
| Baseline metricas | 8h (manual) | 2h (Ansible + LLM analiza) | 75% |
| Documentacion | 40h (2h/servicio x 20) | 8h (LLM genera, humano revisa) | 80% |
| Runbooks | 40h (4h/servicio x 10) | 10h (LLM genera templates) | 75% |
| Reporte final | 8h (compilar manual) | 1h (LLM genera) | 87% |
| **TOTAL** | **~160h** | **~33h** | **79%** |

### 8.3 Pipeline Dia por Dia

#### DIA 1: Kickoff + Network Scan (Dino 4h, Ale 2h, Martin 1h)

**Humano (2h):** Reunion kickoff, obtener credenciales (SSH, VPN, rangos IP, cloud read-only)

**Automatizado (30min):**
1. `nmap-discovery.py` -- escanea rangos IP, detecta hosts, puertos, OS
2. `cloud-discovery.py` -- Steampipe queries: EC2, RDS, VPC, SGs

**IA (15min):** LLM analiza outputs y genera inventario YAML + diagrama Mermaid + observaciones seguridad

**Humano (1h):** Dino revisa, corrige, agrega contexto de negocio

#### DIA 2-3: Deep Service Discovery (Dino 6h, Ale 4h)

**Automatizado (1h):**
3. `server-profiler.yml` (Ansible) -- recolecta facts, procesos, puertos, configs, containers, crontabs por server
4. `db-discovery.py` -- databases, tamanos, conexiones, configs

**IA (30min):** LLM analiza todos los perfiles y genera service catalog, dependency map, riesgos, documentacion por servicio

**Humano (4h):** Dino revisa dependency map + entrevista tecnica con IT del cliente (1-2h). Ale valida red y firewalls

#### DIA 3: Observability Setup (Ale 4h)

**Automatizado (2h):**
5. `observability-setup.yml` (Ansible) -- instala node_exporter, Promtail, configura Prometheus, Loki, Grafana con dashboards pre-armados

**Humano (2h):** Ale verifica targets UP, ajusta scrape configs, configura accesos

#### DIA 4-7: Recoleccion de Baseline (0 horas humanas)

**Automatizado (7 dias):** Prometheus recolecta metricas cada 15s. Loki recolecta logs. Sin intervencion.

#### DIA 8-9: Analisis + Documentacion (Dino 8h)

**Automatizado (1h):**
6. `baseline-analyzer.py` -- exporta 7 dias de metricas, calcula promedios, p95, p99, detecta patrones

**IA (1h):** LLM analiza baselines + todo lo anterior y genera umbrales, patrones, recomendaciones capacidad, runbooks, informe ejecutivo, health scores

**Humano (6h):** Dino revisa informe, ajusta runbooks, prepara presentacion, carga knowledge base final

#### DIA 10: Entrega (Dino 2h, Martin 2h)

**Humano (4h):** Presentacion resultados (2h), entrega documentacion, propuesta InfraAgent

### 8.4 Resumen de Esfuerzo

| Fase | Dino | Ale | Martin | IA/Scripts | Total humano |
|------|------|-----|--------|------------|-------------|
| Dia 1: Kickoff + Network | 4h | 2h | 1h | 2h | 7h |
| Dia 2-3: Deep Discovery | 6h | 4h | 0h | 3h | 10h |
| Dia 3: Observability Setup | 0h | 4h | 0h | 2h | 4h |
| Dia 4-7: Baseline | 0h | 0h | 0h | 168h auto | 0h |
| Dia 8-9: Analisis + Docs | 8h | 0h | 0h | 2h | 8h |
| Dia 10: Entrega | 2h | 0h | 2h | 0h | 4h |
| **TOTAL** | **20h** | **10h** | **3h** | **177h** | **33h** |

### 8.5 Toolkit a Desarrollar (Inversion Unica)

| Componente | Esfuerzo | Quien |
|-----------|---------|-------|
| `nmap-discovery.py` | 4h | Dino |
| `cloud-discovery.py` (Steampipe) | 4h | Dino |
| `server-profiler.yml` (Ansible) | 8h | Ale |
| `db-discovery.py` | 4h | Dino |
| `baseline-analyzer.py` | 6h | Dino |
| `observability-setup.yml` (Ansible) | 12h | Ale |
| Prompts LLM optimizados | 8h | Dino |
| Templates documentacion + generador reportes | 6h | Dino |
| Grafana dashboards pre-armados | 4h | Ale |
| **TOTAL** | **56h (~2 semanas)** | |

### 8.6 Capacidad

| Escenario | Clientes/mes |
|-----------|-------------|
| Dino + Ale full-time | 3-4 (overlap en fase baseline) |
| Dino 60% + Ale 30% (realista) | 1-2 |
| Con 1 freelancer tecnico | 2-3 |

### 8.7 Riesgos por Tipo de Infraestructura

| Situacion | Frecuencia | Solucion |
|-----------|-----------|----------|
| Windows-only | 20% | windows_exporter + WinRM |
| Networking complejo (Cisco, Fortinet) | 15% | SNMP discovery con Zabbix |
| VMware/Hyper-V | 10% | vCenter API / PowerShell |
| Kubernetes | 20% | kube-state-metrics + Prometheus operator |
| Legacy (mainframe, AS/400) | 5% | Manual, cobrar premium |

---

## 9. PROXIMOS PASOS

### Inmediato (Decisiones)

- [ ] Validar pricing con socios (USD 2K-15K rango)
- [ ] Decidir si el toolkit se desarrolla antes del primer cliente o en paralelo
- [ ] Definir si Zabbix o Prometheus es el default para on-premise
- [ ] Evaluar si Netbox es necesario o un CMDB custom en Supabase alcanza

### Desarrollo Toolkit (2 semanas)

- [ ] Dino: nmap-discovery.py + cloud-discovery.py + db-discovery.py
- [ ] Dino: baseline-analyzer.py + prompts LLM + templates
- [ ] Ale: server-profiler.yml + observability-setup.yml + Grafana dashboards
- [ ] Test del pipeline completo en un entorno propio (dogfooding)

### Primer Cliente Piloto

- [ ] Identificar 1 cliente con 10-20 servers (tamano pequeno)
- [ ] Ejecutar discovery completo como piloto (precio reducido o gratis)
- [ ] Documentar lecciones aprendidas
- [ ] Ajustar toolkit y prompts segun resultados reales

### Actualizaciones a Pilares Existentes

- [ ] Pilar 2: Agregar seccion "Onboarding y Discovery" con link a este documento
- [ ] Pilar 5: Agregar "Infrastructure Discovery" como nuevo servicio de consultoria
- [ ] Pilar 4: Documentar bridge entre Cloud Health Check y este discovery

---

## 10. METRICAS DE EXITO

| Metrica | Target Q1 | Target Q2 |
|---------|-----------|-----------|
| Toolkit completo y testeado | Si | - |
| Primer cliente discovery | 1 (piloto) | - |
| Conversion discovery a InfraAgent | - | 80%+ |
| Horas humanas por engagement | <40h | <30h |
| Tiempo calendario por engagement | <3 semanas | <2 semanas |
| Satisfaccion cliente (NPS) | >8 | >8.5 |

---

**Documento confidencial -- VELTIA SAS**
**Febrero 2026**

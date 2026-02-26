# PILAR 0: Operaciones Financieras & Administrativas
## VELTIA SAS -- Gestion Interna -- Compliance -- Automatizacion

**Version:** 1.0
**Fecha:** Febrero 2026
**Estado:** En diseno (requiere constitucion SAS)
**Responsables:** Martin (Administrador SAS / Finanzas), Ale (Tesoreria), Dino (Automatizacion)

---

## RESUMEN EJECUTIVO

Este documento define como VELTIA gestiona sus operaciones financieras y administrativas internas. No es un servicio para vender: es la infraestructura que habilita los 5 pilares de servicio.

### Principios

| Principio | Descripcion |
|-----------|-------------|
| **Compliance primero** | Cumplir 100% obligaciones legales/fiscales argentinas |
| **Automatizar todo** | Solo el Contador Publico requiere intervencion humana obligatoria |
| **Costo minimo** | Target: USD 200-300/mes total (Xubio + Contador) |
| **Visibilidad total** | Dashboard financiero real-time desde dia 1 |
| **Dual currency** | Operar en ARS (obligatorio) y USD (clientes internacionales) |

### Costo Operativo Target

| Concepto | Costo mensual | Notas |
|----------|---------------|-------|
| Xubio (contabilidad cloud) | USD 15-20 | Plan para SAS |
| Contador Publico externo | USD 100-200 | Obligatorio por ley |
| Banco (mantenimiento) | USD 0-10 | Segun entidad |
| Herramientas propias | USD 0 | Build interno |
| **Total** | **USD 115-230/mes** | |

---

## 1. MARCO LEGAL -- OBLIGACIONES DE UNA SAS EN ARGENTINA

### 1.1 Ley 27.349 -- Apoyo al Capital Emprendedor

La SAS (Sociedad por Acciones Simplificada) se rige por la Ley 27.349 (2017). Puntos clave:

| Aspecto | Requisito |
|---------|-----------|
| Capital social minimo | 2 salarios minimos vitales y moviles |
| Socios | 1 a 50 personas humanas o juridicas |
| Organo de administracion | Administrador (1 o mas) |
| Inscripcion | Registro Publico (DGPJ Cordoba) -- 24 horas habiles |
| Libros | Pueden ser digitales (art. 58 Ley 27.349) |
| Fiscalizacion | No requiere sindicatura (si capital < umbral) |

### 1.2 Libros Contables Obligatorios

Segun Codigo Civil y Comercial (art. 320-329) y Ley 27.349:

| Libro | Obligatorio | Contenido | Formato |
|-------|-------------|-----------|---------|
| **Libro Diario** | Si | Todas las operaciones dia a dia | Digital (permitido por Ley 27.349) |
| **Libro Inventarios y Balances** | Si | Balance apertura + cierre anual | Digital |
| **Libro Actas Reuniones Socios** | Si | Decisiones de reuniones de socios | Digital |
| **Libro Registro de Acciones** | Si | Titularidad y transferencias de acciones | Digital |

**Rubricacion:** Los libros deben rubricarse ante la DGPJ Cordoba. La SAS permite libros electronicos, lo que simplifica el proceso.

### 1.3 Obligaciones AFIP (Nacionales)

| Obligacion | Frecuencia | Formulario | Vencimiento |
|-----------|-----------|------------|-------------|
| IVA | Mensual | F.2002 | Segun terminacion CUIT (dia 18-22 del mes sig.) |
| Ganancias Sociedades | Anual + 10 anticipos | F.713 | Mayo (cierre dic.) |
| Libro IVA Digital | Mensual | LIVA | Mismo plazo IVA |
| CITI Ventas/Compras | Mensual (si aplica) | RG 3685 | Mismo plazo IVA |
| Facturacion Electronica | Cada operacion | WSFE/WSFEX | En el momento |

### 1.4 Obligaciones Provinciales -- ARCA (ex-Rentas Cordoba)

| Obligacion | Frecuencia | Notas |
|-----------|-----------|-------|
| Ingresos Brutos (IIBB) | Mensual | Regimen Local si solo opera en Cordoba |
| Convenio Multilateral | Mensual | Si opera en multiples provincias |

**Nota:** Si VELTIA tiene clientes en otras provincias (probable), debera inscribirse en Convenio Multilateral. Evaluar con el Contador.

### 1.5 Obligaciones Municipales -- Alta Gracia

| Obligacion | Frecuencia | Notas |
|-----------|-----------|-------|
| Tasa Comercio e Industria | Mensual o bimestral | Segun calendario municipal |
| Habilitacion comercial | Una vez | Si opera desde local fisico |

---

## 2. FACTURACION ELECTRONICA

### 2.1 Tipos de Comprobante

| Tipo | Uso | Ejemplo VELTIA |
|------|-----|----------------|
| **Factura A** | A Responsable Inscripto (B2B Argentina) | Cliente empresa argentina con CUIT |
| **Factura B** | A Consumidor Final o Monotributista | Cliente pequeño, persona fisica |
| **Factura E** | Exportacion de servicios | Cliente que paga en USD desde exterior |
| **Nota de Credito A/B/E** | Anulacion parcial/total | Ajuste de factura emitida |
| **Nota de Debito A/B/E** | Ajuste en mas | Interes por mora, ajuste precio |

### 2.2 AFIP Web Services

| Web Service | Uso | Documentacion |
|-------------|-----|---------------|
| **WSFE** | Facturacion electronica nacional (A, B) | https://www.afip.gob.ar/ws/WSFE/ |
| **WSFEX** | Facturacion exportacion (E) | https://www.afip.gob.ar/ws/WSFEX/ |
| **WSAA** | Autenticacion (requisito previo) | Certificado digital obligatorio |

**Requisitos para operar:**
- CUIT de la SAS activo
- Certificado Digital AFIP (tramite online)
- Punto de venta electronico habilitado
- Clave fiscal nivel 3+

### 2.3 Facturacion en USD

VELTIA facturara servicios en USD a clientes con operaciones internacionales. Consideraciones:

| Aspecto | Detalle |
|---------|---------|
| Tipo comprobante | Factura E (exportacion de servicios) |
| Moneda | USD, EUR, u otra extranjera |
| Tipo de cambio contable | TC oficial BCRA (vendedor) al dia de emision |
| Liquidacion divisas | Sujeto a regulaciones BCRA/MULC vigentes |
| IVA | Exento (exportacion de servicios) |

**Importante:** Las regulaciones cambiarias argentinas cambian frecuentemente. El Contador debe mantenerse actualizado sobre obligaciones de liquidacion de divisas.

### 2.4 Automatizacion de Facturacion

**Fase 1 (manual asistido):** Emision via Xubio (interfaz web)

**Fase 2 (semi-automatico):** Script Python con `pyafipws` que:
1. Lee datos del proyecto/cliente de Supabase
2. Genera el comprobante via WSFE/WSFEX
3. Envia PDF al cliente por email
4. Registra en Xubio via API

**Fase 3 (automatico):** Agente IA que:
1. Detecta cierre de proyecto/milestone en sistema de gestion
2. Genera factura automaticamente
3. Envia y registra
4. Alerta al admin solo si hay error

### 2.5 Herramienta Principal: Xubio

| Caracteristica | Xubio |
|---------------|-------|
| Facturacion AFIP integrada | Si (A, B, E, NC, ND) |
| Libro IVA Digital automatico | Si |
| Plan de cuentas configurable | Si |
| Conciliacion bancaria | Si |
| Reportes (balance, EERR) | Si |
| API para integraciones | Si |
| Costo | ~ARS 15.000-25.000/mes |

**Alternativas evaluadas:**
- Colppy: similar features, precio superior
- Contabilium: mas orientado a contadores, menos self-service
- Custom 100%: posible pero innecesario, Xubio cubre el 90%

---

## 3. CONTABILIDAD

### 3.1 Libro Diario

Registro cronologico de todas las operaciones. Xubio lo genera automaticamente al registrar:
- Facturas emitidas
- Facturas recibidas (compras)
- Pagos y cobros
- Asientos manuales (amortizaciones, ajustes)

### 3.2 Libro de Inventarios y Balances

| Contenido | Frecuencia | Responsable |
|-----------|-----------|-------------|
| Balance de apertura | Al constituir | Contador |
| Balance de cierre | Anual (cierre ejercicio) | Contador |
| Estado de resultados | Anual | Contador |
| Detalle de cuentas | Anual | Automatico (Xubio) |

### 3.3 Plan de Cuentas -- Empresa de Servicios IT

```
1. ACTIVO
   1.1 Activo Corriente
       1.1.1 Caja y Bancos
             1.1.1.1 Caja en pesos
             1.1.1.2 Banco cuenta corriente ARS
             1.1.1.3 Banco caja ahorro USD
       1.1.2 Creditos por Ventas
             1.1.2.1 Clientes (facturas a cobrar)
             1.1.2.2 Clientes del exterior
       1.1.3 Otros Creditos
             1.1.3.1 IVA Credito Fiscal
             1.1.3.2 Anticipo Ganancias
             1.1.3.3 Retenciones sufridas
   1.2 Activo No Corriente
       1.2.1 Bienes de Uso
             1.2.1.1 Equipos informaticos
             1.2.1.2 Amortizacion acumulada equipos

2. PASIVO
   2.1 Pasivo Corriente
       2.1.1 Deudas Comerciales
             2.1.1.1 Proveedores
       2.1.2 Deudas Fiscales
             2.1.2.1 IVA Debito Fiscal
             2.1.2.2 IVA a pagar (saldo)
             2.1.2.3 IIBB a pagar
             2.1.2.4 Ganancias a pagar
             2.1.2.5 Tasa municipal a pagar
       2.1.3 Deudas Sociales
             2.1.3.1 Sueldos a pagar (si aplica)
             2.1.3.2 Cargas sociales a pagar

3. PATRIMONIO NETO
   3.1 Capital Social
   3.2 Resultados Acumulados
   3.3 Resultado del Ejercicio

4. INGRESOS
   4.1 Ventas de Servicios
       4.1.1 Pilar 1 - Transformacion Digital
       4.1.2 Pilar 2 - IA & Agentes
       4.1.3 Pilar 3 - Modernizacion Legacy
       4.1.4 Pilar 4 - FinOps & Cloud
       4.1.5 Pilar 5 - Consultoria
   4.2 Otros Ingresos
       4.2.1 Diferencia de cambio positiva
       4.2.2 Intereses ganados

5. EGRESOS
   5.1 Costos de Servicios
       5.1.1 Subcontrataciones / Freelancers
       5.1.2 Licencias y suscripciones cloud
       5.1.3 APIs (OpenAI, Anthropic, etc.)
   5.2 Gastos de Administracion
       5.2.1 Honorarios Contador
       5.2.2 Servicios bancarios
       5.2.3 Xubio (sistema contable)
       5.2.4 Dominio y hosting
   5.3 Gastos Comerciales
       5.3.1 Marketing y publicidad
       5.3.2 Networking y eventos
   5.4 Gastos Impositivos
       5.4.1 Ingresos Brutos
       5.4.2 Tasa municipal
       5.4.3 Impuesto sellos (si aplica)
   5.5 Resultados Financieros
       5.5.1 Diferencia de cambio negativa
       5.5.2 Comisiones bancarias
       5.5.3 Intereses pagados
```

### 3.4 Rol del Contador Publico

**Obligatorio por ley para SAS:**

| Tarea | Frecuencia | Automatizable |
|-------|-----------|---------------|
| Firma de balance anual | Anual | No |
| Certificacion estados contables | Anual | No |
| Presentacion DDJJ Ganancias | Anual | Parcial (datos auto, firma manual) |
| Asesoria fiscal | Continuo | No |
| Liquidacion IVA (revision) | Mensual | Parcial (Xubio calcula, contador verifica) |
| Liquidacion IIBB | Mensual | Parcial |

**Automatizable (sin contador):**

| Tarea | Herramienta |
|-------|-------------|
| Registro de facturas emitidas | Xubio (automatico al facturar) |
| Registro de facturas recibidas | Xubio + OCR (futuro) |
| Libro IVA Digital | Xubio (genera automaticamente) |
| Conciliacion bancaria | Xubio + script Python |
| Reportes mensuales | Xubio + dashboard custom |

### 3.5 Automatizacion del Asiento Contable

Flujo target:

```
Evento                    Xubio                     Contador
(factura, pago, gasto)    (asiento automatico)      (revision mensual)
        |                        |                        |
        v                        v                        v
   Trigger             Registra en Libro Diario     Revisa 1x/mes
   automatico          Actualiza Libro IVA          Firma si OK
                       Actualiza saldos             Alerta si error
```

---

## 4. IMPUESTOS -- CALENDARIO Y OBLIGACIONES

### 4.1 IVA (Mensual)

| Concepto | Detalle |
|----------|---------|
| Alicuota general | 21% |
| Calculo | IVA Debito (ventas) - IVA Credito (compras) = Saldo a pagar |
| Exportacion servicios | Exenta de IVA (Factura E) |
| DDJJ | F.2002 via AFIP servicios web |
| Libro IVA Digital | Obligatorio, generado por Xubio |

### 4.2 Ganancias Sociedades (Anual + Anticipos)

| Concepto | Detalle |
|----------|---------|
| Alicuota | 25% (utilidad neta imponible hasta cierto umbral), 30% (excedente) |
| Cierre ejercicio | Diciembre (tipico para SAS nuevas) |
| DDJJ anual | Mayo del ano siguiente |
| Anticipos | 10 anticipos mensuales (junio a marzo) |
| Base anticipo | % sobre impuesto determinado del ano anterior |

### 4.3 Ingresos Brutos -- Cordoba (ARCA)

| Concepto | Detalle |
|----------|---------|
| Alicuota | Variable segun actividad (tipico servicios informaticos: 3-4.5%) |
| Base imponible | Ingresos brutos devengados |
| Regimen | Local (solo Cordoba) o Convenio Multilateral (multi-provincia) |
| DDJJ | Mensual via ARCA |
| Exencion posible | Verificar Ley de Economia del Conocimiento (Ley 27.506) |

**Nota importante:** La Ley de Economia del Conocimiento puede otorgar beneficios fiscales (reduccion de hasta 60% en Ganancias, 70% en cargas patronales, estabilidad fiscal). Evaluar con Contador si VELTIA califica.

### 4.4 Tasa Municipal -- Alta Gracia

| Concepto | Detalle |
|----------|---------|
| Nombre | Tasa de Comercio e Industria (o similar) |
| Alicuota | Variable (verificar ordenanza municipal vigente) |
| Base | Ingresos brutos |
| Frecuencia | Mensual o bimestral |

### 4.5 Regimenes de Informacion

| Regimen | Aplica | Frecuencia |
|---------|--------|-----------|
| CITI Ventas | Si (si factura > umbral) | Mensual |
| CITI Compras | Si (si compras > umbral) | Mensual |
| Regimen informativo de operaciones internacionales | Posible (si factura E) | Verificar con Contador |

### 4.6 Tabla Calendario Fiscal Mensual

Ver documento separado: `calendario-fiscal-veltia.md`

---

## 5. TESORERIA Y CASH FLOW

### 5.1 Cuentas Bancarias

| Cuenta | Uso | Banco sugerido |
|--------|-----|----------------|
| Cuenta Corriente ARS | Operaciones locales, pagos, cobros | Banco tradicional (Galicia/Macro) |
| Caja Ahorro USD | Cobros en USD, reserva | Mismo banco o Brubank |

**Requisitos para abrir cuenta SAS:**
- Estatuto inscripto
- CUIT activo
- Designacion de firmantes (acta)
- Constancia de inscripcion AFIP

### 5.2 Cash Flow Projection Model

Modelo simple inicial (planilla o Supabase):

```
INGRESOS PROYECTADOS
  Pilar 1 - Setup fees
  Pilar 1 - MRR
  Pilar 2 - Setup fees
  Pilar 2 - MRR
  ...
  Total Ingresos

EGRESOS PROYECTADOS
  Costos directos (freelancers, APIs, cloud)
  Gastos admin (contador, Xubio, banco)
  Impuestos (IVA neto, IIBB, Ganancias anticipos)
  Total Egresos

FLUJO NETO = Ingresos - Egresos
SALDO ACUMULADO
```

### 5.3 Politica de Cobros y Pagos

Ver documento separado: `politica-facturacion-cobros.md`

### 5.4 Conciliacion Bancaria Automatizada

**Fase 1 (manual):** Xubio tiene conciliacion integrada con importacion de extractos

**Fase 2 (automatico):**
1. Script Python descarga CSV del home banking
2. Parsea movimientos
3. Matchea contra facturas emitidas/recibidas en Xubio
4. Marca coincidencias automaticamente
5. Alerta sobre discrepancias

### 5.5 Gestion de Divisas USD/ARS

| Aspecto | Politica |
|---------|----------|
| TC para facturacion E | TC oficial BCRA (vendedor) al dia de emision |
| TC para contabilidad | TC oficial BCRA |
| Diferencia de cambio | Registrar mensualmente como resultado financiero |
| Liquidacion USD | Segun normativa BCRA/MULC vigente (consultar Contador) |

---

## 6. PRESUPUESTOS Y RENTABILIDAD

### 6.1 Presupuesto Operativo Mensual

| Categoria | Estimado mensual | Notas |
|-----------|------------------|-------|
| Freelancers / Subcontrataciones | USD 0-3.000 | Variable segun proyectos |
| Suscripciones cloud (AWS) | USD 50-200 | Crece con clientes |
| APIs IA (OpenAI, Anthropic) | USD 50-200 | Crece con uso |
| SaaS (Xubio, dominios, etc.) | USD 50-100 | Fijo |
| Contador | USD 100-200 | Fijo |
| Marketing | USD 0-200 | Variable |
| Impuestos estimados | Variable | ~25-30% sobre revenue |
| **Total estimado (sin freelancers)** | **USD 250-900** | |

### 6.2 Rentabilidad por Pilar

Tracking mensual:

| Pilar | Ingresos | Costos directos | Margen bruto | % |
|-------|----------|-----------------|--------------|---|
| P1 - Transformacion Digital | [AUTO] | [AUTO] | [AUTO] | [AUTO] |
| P2 - IA & Agentes | [AUTO] | [AUTO] | [AUTO] | [AUTO] |
| P3 - Legacy | [AUTO] | [AUTO] | [AUTO] | [AUTO] |
| P4 - FinOps | [AUTO] | [AUTO] | [AUTO] | [AUTO] |
| P5 - Consultoria | [AUTO] | [AUTO] | [AUTO] | [AUTO] |

**Target:** Margen bruto >60% por pilar (tipico servicios IT)

### 6.3 Rentabilidad por Proyecto/Cliente

Para cada proyecto trackear:
- Horas invertidas x costo hora interno
- Costos directos (cloud, APIs, freelancers)
- Facturado al cliente
- Margen = Facturado - (Horas x Costo + Costos Directos)

### 6.4 Break-even Analysis

```
Costos fijos mensuales: ~USD 300-500
  Contador: USD 150
  Xubio: USD 20
  Cloud/hosting: USD 100
  SaaS tools: USD 50
  Otros: USD 50

Break-even = Costos Fijos / Margen Bruto %
Si margen bruto = 70% -> Break-even = USD 430-715/mes en revenue
Si margen bruto = 60% -> Break-even = USD 500-833/mes en revenue
```

---

## 7. INVENTARIO DE ACTIVOS DIGITALES

### 7.1 Licencias de Software

| Software | Tipo | Costo | Renovacion |
|----------|------|-------|------------|
| [A completar al contratar] | | | |

### 7.2 Suscripciones Cloud

| Servicio | Plan | Costo mensual | Uso |
|----------|------|---------------|-----|
| AWS | Pay as you go | Variable | Infraestructura clientes |
| OpenAI API | Pay as you go | Variable | Pilar 2 - IA |
| Anthropic API | Pay as you go | Variable | Pilar 2 - IA |
| Supabase | Free/Pro | USD 0-25 | Backend interno |
| Vercel | Free/Pro | USD 0-20 | Frontend interno |
| GitHub | Team | USD 0-19 | Repositorios |
| Xubio | SAS plan | USD 15-20 | Contabilidad |

### 7.3 Dominios y Certificados

| Dominio | Registrador | Vencimiento | Costo anual |
|---------|-------------|-------------|-------------|
| [veltia.tech - pendiente] | [TBD] | [TBD] | ~USD 15-30 |

### 7.4 Equipamiento

| Equipo | Propietario | Valor estimado | Amortizacion |
|--------|-------------|----------------|--------------|
| [Laptops socios - a inventariar] | | | 33% anual |

---

## 8. REPORTING Y DASHBOARDS

### 8.1 Balance General (Trimestral)

Generado por Xubio. Revisado por Contador. Estructura:

| Seccion | Contenido |
|---------|-----------|
| Activo Corriente | Caja, Bancos, Creditos, IVA CF |
| Activo No Corriente | Bienes de uso (neto amortizacion) |
| Pasivo Corriente | Proveedores, deudas fiscales |
| Patrimonio Neto | Capital + resultados |

### 8.2 Estado de Resultados (Mensual)

| Linea | Fuente |
|-------|--------|
| Ventas por pilar | Xubio (cuentas 4.1.x) |
| Costos directos | Xubio (cuenta 5.1) |
| Margen bruto | Calculado |
| Gastos operativos | Xubio (cuentas 5.2-5.4) |
| Resultado operativo | Calculado |
| Resultados financieros | Xubio (cuenta 5.5) |
| Resultado neto | Calculado |

### 8.3 Cash Flow Statement

Generado mensualmente. Tres secciones:
- Flujo operativo (cobros - pagos operativos)
- Flujo de inversion (compra equipos, licencias)
- Flujo financiero (aportes socios, dividendos)

### 8.4 KPIs Financieros

| KPI | Target | Frecuencia |
|-----|--------|-----------|
| MRR (Monthly Recurring Revenue) | Creciente | Mensual |
| Margen bruto por pilar | >60% | Mensual |
| Dias promedio de cobro (DSO) | <30 dias | Mensual |
| Burn rate | Decreciente | Mensual |
| Runway (meses de operacion sin ingresos) | >6 meses | Mensual |
| Revenue per employee equivalent | Creciente | Trimestral |

---

## 9. STACK TECNOLOGICO Y AUTOMATIZACION

### 9.1 Xubio como Backbone Contable

Xubio maneja el 90% de las necesidades contables out-of-the-box:
- Facturacion electronica AFIP
- Libro IVA Digital
- Plan de cuentas
- Reportes contables
- Conciliacion bancaria
- Multi-moneda

### 9.2 Integraciones AFIP

**Libreria:** `pyafipws` (Mariano Reingart) - Open source, Python
- WSFE: Facturacion nacional
- WSFEX: Facturacion exportacion
- WSAA: Autenticacion

**Arquitectura:**
```
Supabase (datos proyecto/cliente)
        |
        v
FastAPI (servicio facturacion)
        |
   +---------+
   |         |
   v         v
pyafipws   Xubio API
(AFIP)     (contabilidad)
   |         |
   v         v
 AFIP      Xubio DB
```

### 9.3 Agentes IA para Automatizacion Financiera

| Agente | Funcion | Fase |
|--------|---------|------|
| **InvoiceBot** | Genera facturas automaticamente al cerrar proyecto/milestone | Fase 2 |
| **ReconcileBot** | Concilia extracto bancario con Xubio diariamente | Fase 3 |
| **TaxCalendarBot** | Alertas Slack/WhatsApp antes de cada vencimiento fiscal | Fase 2 |
| **ExpenseBot** | OCR de recibos + clasificacion automatica en Plan de Cuentas | Fase 3 |
| **CashFlowBot** | Proyeccion de cash flow basado en pipeline + patrones historicos | Fase 4 |
| **ReportBot** | Genera P&L y dashboard mensual automaticamente | Fase 4 |

### 9.4 Arquitectura del Sistema Financiero

```
CAPA DE DATOS
  Xubio (contabilidad, facturacion)
  Supabase (proyectos, clientes, pipeline)
  Banco (extractos)

CAPA DE INTEGRACION
  FastAPI service (facturacion AFIP, sync Xubio)
  Python scripts (conciliacion, reportes)
  Agentes IA (automatizacion inteligente)

CAPA DE PRESENTACION
  Dashboard Next.js (metricas financieras real-time)
  Alertas Slack/WhatsApp (vencimientos, anomalias)
  Reportes PDF automaticos (mensuales)
```

---

## 10. ROADMAP DE IMPLEMENTACION

### Fase 0: Pre-constitucion (Ahora)

**Duracion:** 1-2 semanas
**Costo:** ARS 0

- [ ] Escribir documentos operativos (este pilar + 3 documentos soporte)
- [ ] Investigar y seleccionar Contador Publico en Cordoba
- [ ] Entrevistar 2-3 contadores (experiencia con SAS, Economia del Conocimiento)
- [ ] Crear cuenta de prueba en Xubio (evaluar)
- [ ] Definir Plan de Cuentas con el Contador seleccionado
- [ ] Verificar requisitos Ley Economia del Conocimiento

**Responsable:** Martin

---

### Fase 1: Constitucion + Setup Fiscal (Mes 1-2)

**Duracion:** 4-6 semanas
**Costo:** ~USD 500-1.000 (tramites + primer mes servicios)

- [ ] Completar inscripcion SAS en DGPJ Cordoba
- [ ] Obtener CUIT de la SAS en AFIP/ARCA
- [ ] Inscribir en IVA (Responsable Inscripto)
- [ ] Inscribir en Ganancias Sociedades
- [ ] Inscribir en IIBB Cordoba (evaluar regimen con Contador)
- [ ] Inscribir Tasa Municipal Alta Gracia
- [ ] Abrir cuenta bancaria corporativa (ARS + USD)
- [ ] Tramitar Certificado Digital AFIP
- [ ] Habilitar punto de venta electronico
- [ ] Activar Xubio (plan pago) y configurar
- [ ] Rubricar libros contables (DGPJ Cordoba)

**Responsable:** Martin + Contador

---

### Fase 2: Primera Factura + Contabilidad Basica (Mes 2-3)

**Duracion:** 2-4 semanas
**Costo:** ~USD 200-300/mes ongoing

- [ ] Emitir primera factura electronica (via Xubio)
- [ ] Establecer workflow mensual con Contador
- [ ] Primera liquidacion IVA
- [ ] Configurar categorias de gastos en Xubio
- [ ] Implementar TaxCalendarBot (alertas vencimientos)
- [ ] Implementar integracion basica AFIP (pyafipws)
- [ ] Definir politica de facturacion USD (Factura E)

**Responsable:** Martin (operativo), Dino (integracion AFIP), Contador (DDJJ)

---

### Fase 3: Automatizacion Avanzada (Mes 4-6)

**Duracion:** Continuo
**Costo:** Tiempo desarrollo interno

- [ ] Implementar InvoiceBot (facturacion automatica)
- [ ] Implementar ReconcileBot (conciliacion bancaria)
- [ ] Implementar ExpenseBot (OCR + clasificacion gastos)
- [ ] Tracker de suscripciones con alertas de renovacion
- [ ] Dashboard basico de cash flow (Next.js + Supabase)
- [ ] Tracking de rentabilidad por pilar

**Responsable:** Dino (desarrollo), Martin (requisitos), Ale (cloud)

---

### Fase 4: BI Financiero (Mes 7-12)

**Duracion:** Continuo
**Costo:** Tiempo desarrollo interno

- [ ] Dashboard financiero completo (P&L, balance, cash flow)
- [ ] Rentabilidad por pilar/proyecto/cliente automatizada
- [ ] CashFlowBot (proyecciones basadas en pipeline)
- [ ] ReportBot (generacion automatica reportes mensuales)
- [ ] Multi-currency management automatizado
- [ ] Evaluacion: aplicar a Ley Economia del Conocimiento

**Responsable:** Dino (desarrollo), Martin (analisis), Contador (compliance)

---

## 11. RIESGOS Y MITIGACIONES

| Riesgo | Probabilidad | Impacto | Mitigacion |
|--------|--------------|---------|------------|
| Cambios regulatorios AFIP | Alta | Medio | Contador actualizado + monitoreo RG nuevas |
| Multas por presentacion tardia | Media | Alto | TaxCalendarBot + alertas multiples |
| Tipo de cambio desfavorable | Alta | Medio | Facturar en USD, minimizar exposicion ARS |
| Regulaciones cambiarias restrictivas | Media | Alto | Consultar Contador antes de cada operacion USD |
| Contador no cumple | Baja | Alto | Contrato claro, backup de otro contador |
| Xubio discontinua o sube precio | Baja | Medio | Datos exportables, alternativas evaluadas |
| Error en facturacion automatica | Media | Medio | Validacion humana primeros 3 meses, luego sampling |

---

## 12. PROXIMOS PASOS

### Esta Semana

- [ ] Seleccionar 2-3 contadores para entrevistar en Cordoba
- [ ] Crear cuenta trial en Xubio
- [ ] Leer Ley 27.349 (secciones SAS: art. 33-62)
- [ ] Verificar requisitos Ley Economia del Conocimiento (Ley 27.506)

### Proximas 2 Semanas

- [ ] Entrevistar contadores y seleccionar
- [ ] Definir Plan de Cuentas con Contador
- [ ] Completar checklist de constitucion fiscal
- [ ] Evaluar regimen IIBB (local vs convenio multilateral)

### Proximo Mes

- [ ] Completar inscripciones fiscales
- [ ] Emitir primera factura
- [ ] Primer ciclo completo: factura -> cobro -> asiento -> conciliacion

---

**Documento confidencial -- VELTIA SAS**
**Febrero 2026**

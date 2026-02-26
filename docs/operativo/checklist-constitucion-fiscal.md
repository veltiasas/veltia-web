# Checklist de Constitucion Fiscal -- VELTIA SAS

**Version:** 1.0
**Fecha:** Febrero 2026
**Estado:** Pendiente
**Responsable principal:** Martin (Administrador SAS)

---

## INSTRUCCIONES

Completar en orden. Cada paso depende del anterior salvo donde se indica que pueden hacerse en paralelo. Marcar con [x] al completar. Anotar fecha y observaciones.

---

## FASE 1: PRE-CONSTITUCION

### 1.1 Seleccion de Contador Publico

- [ ] Identificar 2-3 contadores en Cordoba con experiencia en SAS
- [ ] Criterios de seleccion:
  - Experiencia con SAS (Ley 27.349)
  - Conocimiento de Ley Economia del Conocimiento
  - Manejo de operaciones en USD / exportacion de servicios
  - Disponibilidad para respuestas rapidas (WhatsApp/email)
  - Costo mensual razonable (target: USD 100-200/mes)
- [ ] Entrevistar candidatos
- [ ] Seleccionar y acordar terminos
- [ ] **Contador seleccionado:** _________________ | **Fecha:** ___/___/2026

### 1.2 Evaluacion Herramienta Contable

- [ ] Crear cuenta trial en Xubio (www.xubio.com)
- [ ] Verificar que soporta: Factura A, B, E, NC, ND
- [ ] Verificar integracion AFIP (WSFE, WSFEX)
- [ ] Verificar Libro IVA Digital automatico
- [ ] Verificar API disponible para integraciones
- [ ] Confirmar plan y precio para SAS
- [ ] **Herramienta elegida:** _________________ | **Plan:** ____________

### 1.3 Definiciones Previas con Contador

- [ ] Definir cierre de ejercicio fiscal (recomendado: 31 de diciembre)
- [ ] Acordar Plan de Cuentas (ver pilar-0, seccion 3.3)
- [ ] Definir regimen IIBB: Local Cordoba vs Convenio Multilateral
- [ ] Evaluar aplicabilidad Ley Economia del Conocimiento (Ley 27.506)
- [ ] Definir si socios cobran como: dividendos, honorarios de director, o relacion de dependencia
- [ ] Definir domicilio fiscal (puede ser distinto al domicilio legal)

---

## FASE 2: INSCRIPCIONES FISCALES

**Prerequisito:** SAS inscripta en DGPJ Cordoba con estatuto registrado.

### 2.1 AFIP -- Obtener CUIT

- [ ] Presentar formulario de inscripcion en AFIP
- [ ] Documentacion requerida:
  - [ ] Estatuto inscripto en DGPJ
  - [ ] Acta de designacion de Administrador
  - [ ] DNI del Administrador
  - [ ] Constancia de domicilio fiscal
- [ ] **CUIT obtenido:** ___-________-___ | **Fecha:** ___/___/2026

### 2.2 AFIP -- Inscripcion en Impuestos

- [ ] Inscripcion en IVA (Responsable Inscripto)
  - Obligatorio para SAS
  - Alicuota general: 21%
- [ ] Inscripcion en Impuesto a las Ganancias (Sociedades)
  - Alicuota: 25%/30% segun tramo
- [ ] Inscripcion en regimenes de retencion/percepcion (si aplica)
- [ ] **Fecha inscripcion IVA:** ___/___/2026
- [ ] **Fecha inscripcion Ganancias:** ___/___/2026

### 2.3 AFIP -- Certificado Digital y Facturacion Electronica

- [ ] Tramitar Certificado Digital (clave fiscal nivel 3+)
  - Puede hacerse online si ya tiene clave fiscal
  - O presencial en dependencia AFIP
- [ ] Solicitar punto de venta electronico
  - Tipo: "RECE" (Regimen de Emision de Comprobantes Electronicos)
  - Numero de punto de venta: ____
- [ ] Vincular punto de venta con Xubio
- [ ] Emitir factura de prueba (factura B a consumidor final por $1)
- [ ] **Punto de venta habilitado:** ______ | **Fecha:** ___/___/2026

### 2.4 ARCA (ex-Rentas Cordoba) -- Ingresos Brutos

- [ ] Inscripcion en IIBB Cordoba
  - Regimen elegido: [ ] Local Cordoba  [ ] Convenio Multilateral
- [ ] Obtener numero de inscripcion IIBB
- [ ] Configurar en Xubio
- [ ] Verificar alicuota aplicable (servicios informaticos)
- [ ] **Nro IIBB:** _________________ | **Fecha:** ___/___/2026

### 2.5 Municipalidad de Alta Gracia

- [ ] Inscripcion en Tasa de Comercio e Industria
- [ ] Tramitar habilitacion comercial (si opera desde local fisico)
- [ ] Verificar alicuota y frecuencia de pago
- [ ] **Nro inscripcion municipal:** _________ | **Fecha:** ___/___/2026

---

## FASE 3: SETUP BANCARIO

### 3.1 Cuenta Bancaria Corporativa

- [ ] Elegir banco: [ ] Galicia  [ ] Macro  [ ] Brubank  [ ] Otro: _______
- [ ] Documentacion requerida:
  - [ ] Estatuto inscripto
  - [ ] CUIT de la SAS
  - [ ] Acta designacion Administrador
  - [ ] DNI Administrador
  - [ ] Constancia inscripcion AFIP
- [ ] Abrir cuenta corriente en ARS
- [ ] Abrir caja de ahorro en USD (si disponible)
- [ ] Configurar home banking
- [ ] Configurar token/app de autorizacion
- [ ] **Banco:** _________________ | **CBU:** __________________________
- [ ] **Fecha apertura:** ___/___/2026

---

## FASE 4: CONFIGURACION CONTABLE

### 4.1 Xubio -- Setup Inicial

- [ ] Activar plan pago
- [ ] Cargar datos de la empresa (razon social, CUIT, domicilio, actividad)
- [ ] Configurar Plan de Cuentas (acordado con Contador)
- [ ] Configurar punto de venta electronico
- [ ] Configurar alicuotas IVA (21%, 10.5%, exento, exportacion)
- [ ] Cargar datos bancarios
- [ ] Configurar clientes frecuentes (si hay)
- [ ] Configurar proveedores frecuentes
- [ ] Vincular con AFIP (certificado digital)

### 4.2 Libros Contables

- [ ] Rubricar libros en DGPJ Cordoba
  - [ ] Libro Diario
  - [ ] Libro Inventarios y Balances
  - [ ] Libro Actas Reuniones de Socios
  - [ ] Libro Registro de Acciones
- [ ] Verificar si DGPJ Cordoba acepta formato digital para SAS
- [ ] Si es digital: configurar en Xubio
- [ ] Si es fisico: comprar libros y llevar a rubricar
- [ ] **Libros rubricados:** [ ] Si  [ ] No | **Fecha:** ___/___/2026

### 4.3 Balance de Apertura

- [ ] Registrar capital social aportado
- [ ] Registrar bienes aportados (si hay)
- [ ] Contador prepara balance de apertura
- [ ] Archivar balance de apertura firmado

---

## FASE 5: PRIMERA FACTURA

### 5.1 Verificacion Pre-facturacion

- [ ] CUIT activo
- [ ] IVA inscripto
- [ ] Punto de venta habilitado
- [ ] Certificado digital vinculado
- [ ] Xubio configurado
- [ ] Datos del primer cliente cargados

### 5.2 Emision

- [ ] Determinar tipo de comprobante:
  - [ ] Factura A (cliente RI en Argentina)
  - [ ] Factura B (cliente CF o Monotributo)
  - [ ] Factura E (cliente exportacion / USD)
- [ ] Emitir factura via Xubio
- [ ] Verificar CAE (Codigo de Autorizacion Electronico) recibido
- [ ] Enviar factura al cliente (PDF)
- [ ] Verificar registro automatico en Libro IVA
- [ ] **Primera factura emitida:** Nro _________ | **Fecha:** ___/___/2026

---

## FASE 6: PRIMER CICLO FISCAL COMPLETO

### 6.1 Cierre de Primer Mes

- [ ] Todas las facturas emitidas registradas en Xubio
- [ ] Todas las facturas de compra registradas
- [ ] Conciliacion bancaria del mes
- [ ] Liquidacion IVA preparada (Xubio)
- [ ] Contador revisa y aprueba
- [ ] DDJJ IVA presentada en AFIP
- [ ] Libro IVA Digital enviado a AFIP
- [ ] DDJJ IIBB presentada en ARCA
- [ ] Tasa municipal pagada
- [ ] **Primer mes cerrado:** ___/2026

---

## NOTAS Y OBSERVACIONES

| Fecha | Observacion |
|-------|-------------|
| | |
| | |
| | |

---

**Documento confidencial -- VELTIA SAS**
**Febrero 2026**

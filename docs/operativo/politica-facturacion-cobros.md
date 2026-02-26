# Politica de Facturacion y Cobros -- VELTIA SAS

**Version:** 1.0
**Fecha:** Febrero 2026
**Estado:** Borrador (requiere validacion con Contador)
**Responsable:** Martin (Administrador SAS)

---

## 1. PRINCIPIOS GENERALES

| Principio | Detalle |
|-----------|---------|
| Facturacion electronica obligatoria | Toda operacion se factura via AFIP (WSFE/WSFEX) |
| Facturacion inmediata | Emitir dentro de las 48 horas de prestado el servicio |
| Cobro anticipado preferido | 50% al iniciar, 50% al entregar (salvo MRR) |
| Dual currency | ARS para clientes locales, USD para exportacion |
| Registro inmediato | Toda factura se registra en Xubio el mismo dia |

---

## 2. TIPOS DE COMPROBANTE SEGUN CLIENTE

### 2.1 Matriz de Decision

| Tipo cliente | Ubicacion | Moneda | Comprobante | IVA |
|-------------|-----------|--------|-------------|-----|
| Empresa argentina (RI) | Argentina | ARS | **Factura A** | 21% |
| Empresa argentina (Monotributo) | Argentina | ARS | **Factura B** | 21% |
| Persona fisica (CF) | Argentina | ARS | **Factura B** | 21% |
| Empresa/persona extranjera | Exterior | USD/EUR | **Factura E** | Exento |
| Empresa argentina paga en USD | Argentina | ARS (factura) | **Factura A** | 21% |

### 2.2 Factura A (B2B Argentina)

- **Cuando:** Cliente es Responsable Inscripto en IVA
- **Moneda:** ARS
- **IVA:** Discriminado (21%)
- **Datos requeridos:** CUIT, razon social, domicilio fiscal, condicion IVA
- **Verificar:** Constancia de inscripcion en AFIP antes de facturar

### 2.3 Factura B (Consumidor Final / Monotributo)

- **Cuando:** Cliente es Consumidor Final o Monotributista
- **Moneda:** ARS
- **IVA:** Incluido en el precio (no se discrimina)
- **Datos requeridos:** Nombre, DNI/CUIT (si > monto minimo)

### 2.4 Factura E (Exportacion de Servicios)

- **Cuando:** Cliente en el exterior o servicio califica como exportacion
- **Moneda:** USD, EUR, u otra divisa
- **IVA:** Exento (exportacion)
- **Datos requeridos:** Nombre/razon social, pais, domicilio, ID fiscal extranjero
- **Tipo de cambio:** TC oficial BCRA vendedor al dia de emision
- **Incoterm:** No aplica (servicios)
- **Permiso de embarque:** No aplica (servicios digitales)

---

## 3. ESTRUCTURA DE PRECIOS Y MONEDA

### 3.1 Servicios en ARS

| Tipo servicio | Precio base | IVA | Total |
|--------------|-------------|-----|-------|
| Consultoria (setup/one-time) | Precio neto | +21% | Precio + IVA |
| MRR (mensual recurrente) | Precio neto | +21% | Precio + IVA |

### 3.2 Servicios en USD

| Tipo servicio | Moneda factura | Cobro | Conversion |
|--------------|----------------|-------|------------|
| Export (cliente exterior) | USD (Factura E) | USD wire/transferencia | TC BCRA al cobro |
| Local en USD (cliente AR) | ARS (Factura A/B) | Pesos al TC acordado | TC referencia en factura |

### 3.3 Ajuste por Inflacion / Tipo de Cambio

- Contratos en ARS de mas de 3 meses: incluir clausula de ajuste trimestral (IPC o TC referencia)
- Contratos en USD: no requieren ajuste
- MRR en ARS: revision trimestral de precios

---

## 4. CONDICIONES DE PAGO

### 4.1 Proyectos (One-time / Setup)

| Rango | Condicion estandar | Alternativa |
|-------|-------------------|-------------|
| Hasta USD 3.000 | 100% al iniciar | 50% inicio + 50% entrega |
| USD 3.000 - 10.000 | 50% al iniciar + 50% al entregar | 40% inicio + 30% mitad + 30% entrega |
| USD 10.000 - 50.000 | 30% inicio + 40% mitad + 30% entrega | Hitos custom |
| Mas de USD 50.000 | Hitos definidos en propuesta | Negociable |

### 4.2 Servicios Recurrentes (MRR)

| Aspecto | Politica |
|---------|----------|
| Facturacion | Mensual, al inicio de cada periodo |
| Vencimiento | 10 dias corridos desde emision |
| Cobro | Transferencia bancaria o debito automatico |
| Ajuste | Revision trimestral (ARS) / anual (USD) |

### 4.3 Consultorias (Bajo Ticket)

| Rango | Condicion |
|-------|-----------|
| Hasta USD 2.000 | 100% al iniciar (antes del kick-off) |
| USD 2.000 - 5.000 | 50% al iniciar + 50% al entregar informe |

---

## 5. METODOS DE COBRO

### 5.1 Clientes Argentinos

| Metodo | Preferencia | Notas |
|--------|-------------|-------|
| Transferencia bancaria (CBU) | Preferido | Sin costo |
| Cheque | Aceptado | Solo cheques al dia, verificar BCRA |
| Efectivo | Solo para montos menores | Limite legal: AR vigente |
| Tarjeta | No disponible inicialmente | Evaluar MercadoPago en futuro |

### 5.2 Clientes Extranjeros

| Metodo | Preferencia | Notas |
|--------|-------------|-------|
| Wire transfer (SWIFT) | Preferido | A cuenta USD de VELTIA |
| Wise / Payoneer | Alternativa | Verificar compliance con Contador |
| Cripto | No aceptado | Regulacion incierta en Argentina |

---

## 6. GESTION DE MORA

### 6.1 Proceso de Cobranza

| Dia despues vencimiento | Accion | Responsable |
|------------------------|--------|-------------|
| Dia 1 | Recordatorio automatico por email | Bot/Xubio |
| Dia 7 | Segundo recordatorio + WhatsApp | Martin |
| Dia 15 | Llamada telefonica | Martin |
| Dia 30 | Nota formal (email) + suspension servicio MRR | Martin |
| Dia 45 | Carta documento (si monto > USD 1.000) | Abogado |
| Dia 60 | Derivar a gestion judicial (si corresponde) | Abogado |

### 6.2 Interes por Mora

- **Tasa:** 2% mensual (o tasa activa BNA, la mayor)
- **Aplicacion:** Automatica a partir de dia 16 de mora
- **Instrumento:** Nota de Debito
- **Nota:** Incluir clausula de interes en todas las propuestas y contratos

### 6.3 Suspension de Servicio

- Servicios MRR: suspension automatica a los 30 dias de mora
- Proyectos en curso: pausa de entregables hasta regularizacion
- Reactivacion: al pagar deuda + interes + fee de reactivacion (si aplica)

---

## 7. NOTAS DE CREDITO Y DEBITO

### 7.1 Nota de Credito

| Motivo | Proceso |
|--------|---------|
| Error en factura | NC total + re-emision de factura corregida |
| Descuento post-venta | NC parcial por el monto del descuento |
| Devolucion / cancelacion | NC total |
| Bonificacion | NC parcial |

### 7.2 Nota de Debito

| Motivo | Proceso |
|--------|---------|
| Intereses por mora | ND por intereses calculados |
| Ajuste de precio en mas | ND por diferencia |
| Gastos adicionales | ND por concepto adicional |

---

## 8. FACTURACION AUTOMATIZADA (Target Fase 2-3)

### 8.1 Flujo Automatico -- Proyectos

```
Proyecto completado (marca en sistema)
        |
        v
InvoiceBot detecta trigger
        |
        v
Genera borrador factura (datos cliente + monto de propuesta)
        |
        v
Martin aprueba (1 click) o ajusta
        |
        v
InvoiceBot emite via AFIP (WSFE/WSFEX)
        |
        v
Registra en Xubio automaticamente
        |
        v
Envia PDF al cliente por email
```

### 8.2 Flujo Automatico -- MRR

```
Dia 1 de cada mes
        |
        v
InvoiceBot lista clientes MRR activos
        |
        v
Genera facturas recurrentes (mismo monto, mismos datos)
        |
        v
Emite todas via AFIP
        |
        v
Registra en Xubio
        |
        v
Envia a clientes
        |
        v
A los 10 dias: verifica cobro. Si no cobrado: alerta + recordatorio
```

---

## 9. ARCHIVO Y RESPALDO

| Documento | Formato | Retencion | Ubicacion |
|-----------|---------|-----------|-----------|
| Facturas emitidas (PDF + XML) | Digital | 10 anos (prescripcion fiscal) | Xubio + backup cloud |
| Facturas recibidas (compras) | Digital | 10 anos | Xubio + backup cloud |
| Notas de Credito/Debito | Digital | 10 anos | Xubio + backup cloud |
| Contratos con clientes | PDF firmado | Vigencia + 5 anos | Drive + backup |
| Propuestas aceptadas | PDF | 5 anos | Drive + backup |

---

## 10. EXCEPCIONES Y ESCALAMIENTO

| Situacion | Accion | Aprueba |
|-----------|--------|---------|
| Descuento > 15% | Requiere aprobacion previa | Martin + 1 socio |
| Plazo de pago > 30 dias | Requiere aprobacion previa | Martin |
| Facturacion en moneda distinta a ARS/USD | Consultar Contador | Contador |
| Cliente solicita no facturar | **Rechazar** (obligacion legal) | N/A |
| Monto > USD 20.000 en una sola factura | Verificar regimen informativo | Contador |

---

**Documento confidencial -- VELTIA SAS**
**Febrero 2026**

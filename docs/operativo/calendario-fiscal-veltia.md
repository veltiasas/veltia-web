# Calendario Fiscal -- VELTIA SAS

**Version:** 1.0
**Fecha:** Febrero 2026
**Estado:** Plantilla (ajustar vencimientos con Contador segun terminacion CUIT)
**Responsable:** Martin (presenta) + Contador (revisa/firma)

---

## NOTAS IMPORTANTES

- Los vencimientos de AFIP dependen del ultimo digito del CUIT (tabla abajo)
- Los vencimientos de ARCA Cordoba dependen del ultimo digito de inscripcion IIBB
- Este calendario es una PLANTILLA. Ajustar con fechas exactas una vez obtenido el CUIT
- Verificar anualmente cambios en RG de AFIP y ARCA

---

## VENCIMIENTOS AFIP SEGUN TERMINACION CUIT

| Terminacion CUIT | Vencimiento (dia del mes siguiente) |
|------------------|-------------------------------------|
| 0-1 | 18 |
| 2-3 | 19 |
| 4-5 | 20 |
| 6-7 | 21 |
| 8-9 | 22 |

**CUIT de VELTIA SAS:** ___-________-___ (completar al obtener)
**Dia de vencimiento:** ___ de cada mes

---

## CALENDARIO MENSUAL RECURRENTE

### Cada Mes (Ciclo Estandar)

| Dia | Tarea | Responsable | Herramienta | Estado |
|-----|-------|-------------|-------------|--------|
| 1-5 | Conciliacion bancaria mes anterior | Martin/Bot | Xubio + banco | |
| 1-5 | Registrar facturas de compra pendientes | Martin | Xubio | |
| 5-10 | Verificar todas las facturas emitidas registradas | Martin | Xubio | |
| 10-12 | Generar borrador liquidacion IVA | Bot/Xubio | Xubio automatico | |
| 12-15 | Contador revisa liquidacion IVA | Contador | Xubio | |
| 15-17 | Preparar Libro IVA Digital | Xubio | Xubio automatico | |
| **18-22** | **Presentar DDJJ IVA (F.2002)** | **Contador** | **AFIP** | |
| **18-22** | **Enviar Libro IVA Digital a AFIP** | **Contador** | **AFIP** | |
| **18-22** | **Presentar DDJJ IIBB Cordoba** | **Contador** | **ARCA** | |
| 20-25 | Pagar Tasa Municipal (si corresponde) | Martin | Municipal | |
| 25-28 | Revisar cash flow y proyeccion mes siguiente | Martin | Dashboard | |
| 28-30 | Generar reporte financiero mensual | Bot/Martin | Dashboard | |

### Recordatorio de Alertas (TaxCalendarBot)

| Alerta | Dias antes del vencimiento | Canal |
|--------|---------------------------|-------|
| Primer aviso | 7 dias | Slack/WhatsApp |
| Segundo aviso | 3 dias | Slack/WhatsApp |
| Aviso urgente | 1 dia | Slack/WhatsApp + Email |
| Vencido sin presentar | Dia siguiente | Llamada Contador |

---

## OBLIGACIONES ANUALES

### Impuesto a las Ganancias (Sociedades)

| Concepto | Fecha | Responsable |
|----------|-------|-------------|
| Cierre de ejercicio | 31 de diciembre | Automatico |
| Preparacion balance cierre | Enero-Febrero | Contador |
| DDJJ anual Ganancias (F.713) | Mayo (aprox.) | Contador |
| Pago saldo Ganancias | Mayo | Martin |
| Anticipos mensuales (10) | Junio a Marzo | Contador/Martin |

### Balance y Estados Contables

| Concepto | Fecha | Responsable |
|----------|-------|-------------|
| Cierre contable anual | 31 de diciembre | Xubio + Contador |
| Balance General | Enero-Febrero | Contador |
| Estado de Resultados | Enero-Febrero | Contador |
| Certificacion por Contador | Febrero-Marzo | Contador |
| Aprobacion en Reunion Socios | Dentro de 4 meses del cierre (Abril) | Socios |
| Presentacion en DGPJ (si requerido) | Dentro de 15 dias post-aprobacion | Martin |

### Reunion de Socios (Ordinaria)

| Concepto | Fecha | Responsable |
|----------|-------|-------------|
| Convocatoria | Marzo (60 dias pre-reunion) | Administrador |
| Reunion ordinaria | Abril (dentro de 4 meses del cierre) | Socios |
| Temas obligatorios: | | |
| - Aprobacion balance y EERR | | |
| - Distribucion de resultados | | |
| - Designacion Administrador (si vence) | | |
| Labrar acta en Libro de Actas | | Martin |

---

## CALENDARIO MENSUAL DETALLADO

### Enero

| Obligacion | Tipo | Vencimiento aprox. |
|-----------|------|-------------------|
| DDJJ IVA diciembre | Federal | Dia 18-22 |
| Libro IVA Digital diciembre | Federal | Dia 18-22 |
| IIBB Cordoba diciembre | Provincial | Dia 18-22 |
| Tasa Municipal diciembre/enero | Municipal | Segun calendario |
| **Inicio cierre contable anual** | Interno | Dia 1 |

### Febrero

| Obligacion | Tipo | Vencimiento aprox. |
|-----------|------|-------------------|
| DDJJ IVA enero | Federal | Dia 18-22 |
| Libro IVA Digital enero | Federal | Dia 18-22 |
| IIBB Cordoba enero | Provincial | Dia 18-22 |
| Tasa Municipal | Municipal | Segun calendario |
| Preparacion balance anual | Interno | En curso |

### Marzo

| Obligacion | Tipo | Vencimiento aprox. |
|-----------|------|-------------------|
| DDJJ IVA febrero | Federal | Dia 18-22 |
| Libro IVA Digital febrero | Federal | Dia 18-22 |
| IIBB Cordoba febrero | Provincial | Dia 18-22 |
| Tasa Municipal | Municipal | Segun calendario |
| Ultimo anticipo Ganancias (10/10) | Federal | Segun AFIP |
| Convocatoria reunion socios | Interno | Antes del 31 |

### Abril

| Obligacion | Tipo | Vencimiento aprox. |
|-----------|------|-------------------|
| DDJJ IVA marzo | Federal | Dia 18-22 |
| Libro IVA Digital marzo | Federal | Dia 18-22 |
| IIBB Cordoba marzo | Provincial | Dia 18-22 |
| Tasa Municipal | Municipal | Segun calendario |
| **Reunion ordinaria de socios** | Societario | Antes del 30 |
| Aprobacion balance | Societario | En reunion |

### Mayo

| Obligacion | Tipo | Vencimiento aprox. |
|-----------|------|-------------------|
| DDJJ IVA abril | Federal | Dia 18-22 |
| Libro IVA Digital abril | Federal | Dia 18-22 |
| IIBB Cordoba abril | Provincial | Dia 18-22 |
| Tasa Municipal | Municipal | Segun calendario |
| **DDJJ anual Ganancias Sociedades** | Federal | Segun AFIP (mayo aprox.) |
| Pago saldo Ganancias | Federal | Con la DDJJ |
| Presentacion balance en DGPJ | Societario | 15 dias post-aprobacion |

### Junio a Diciembre

| Obligacion | Tipo | Vencimiento aprox. |
|-----------|------|-------------------|
| DDJJ IVA mes anterior | Federal | Dia 18-22 (cada mes) |
| Libro IVA Digital mes anterior | Federal | Dia 18-22 (cada mes) |
| IIBB Cordoba mes anterior | Provincial | Dia 18-22 (cada mes) |
| Tasa Municipal | Municipal | Segun calendario (cada mes) |
| Anticipo Ganancias (1/10 a 7/10) | Federal | Junio a Diciembre (mensual) |

---

## RESUMEN ANUAL -- VISTA RAPIDA

| Mes | IVA | IIBB | Ganancias | Municipal | Societario |
|-----|-----|------|-----------|-----------|------------|
| Ene | Dic | Dic | - | Si | Inicio cierre |
| Feb | Ene | Ene | - | Si | Balance |
| Mar | Feb | Feb | Anticipo 10 | Si | Convocatoria |
| Abr | Mar | Mar | - | Si | **Reunion socios** |
| May | Abr | Abr | **DDJJ anual** | Si | Presentacion DGPJ |
| Jun | May | May | Anticipo 1 | Si | - |
| Jul | Jun | Jun | Anticipo 2 | Si | - |
| Ago | Jul | Jul | Anticipo 3 | Si | - |
| Sep | Ago | Ago | Anticipo 4 | Si | - |
| Oct | Sep | Sep | Anticipo 5 | Si | - |
| Nov | Oct | Oct | Anticipo 6 | Si | - |
| Dic | Nov | Nov | Anticipo 7 | Si | **Cierre ejercicio** |

---

## CHECKLIST DE VERIFICACION MENSUAL

Usar al cierre de cada mes:

- [ ] Todas las facturas emitidas registradas
- [ ] Todas las facturas de compra registradas
- [ ] Conciliacion bancaria completada
- [ ] DDJJ IVA presentada y pagada
- [ ] Libro IVA Digital enviado
- [ ] DDJJ IIBB presentada y pagada
- [ ] Tasa municipal pagada (si corresponde)
- [ ] Anticipo Ganancias pagado (si corresponde)
- [ ] Reporte financiero mensual generado
- [ ] Cash flow actualizado

---

**Documento confidencial -- VELTIA SAS**
**Febrero 2026**

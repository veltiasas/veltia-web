# PROMPT: Landing Page VELTIA -- Desarrollo Completo

## Para usar en: frontend-design agent, v0.dev, Bolt.new, o desarrollador frontend

---

## INSTRUCCION PRINCIPAL

Crea una landing page completa para VELTIA, una empresa de servicios IT e IA con estetica High-Tech Futurista y Cyber-Corporate. La pagina debe sentirse como un centro de comando tecnologico: dark mode profundo, acentos neon, glassmorphism, micro-animaciones y tipografia geometrica. Es una single-page con scroll suave entre secciones.

**Stack obligatorio:** Next.js 14+ (App Router) + Tailwind CSS + Framer Motion
**Idioma del contenido:** Espanol (voseo argentino)
**Responsive:** Mobile-first, funcional en todos los dispositivos

---

## SISTEMA DE DISENO

### Paleta de Colores

```css
:root {
  /* Fondos */
  --bg-primary: #0A0E14;       /* Azul medianoche - fondo principal */
  --bg-card: #1A222D;          /* Gris carbon - cards, contenedores, navbar */
  --bg-card-hover: #222B38;    /* Gris carbon claro - hover states */

  /* Acentos */
  --accent-primary: #00F2FF;   /* Cian neon - CTAs, bordes activos, iconos */
  --accent-secondary: #FF8C42; /* Naranja atardecer - highlights, gradientes, alertas */

  /* Texto */
  --text-primary: #E0F7FA;     /* Blanco hielo - titulos y texto principal */
  --text-secondary: #8899AA;   /* Gris azulado - texto secundario, captions */
  --text-muted: #4A5568;       /* Gris oscuro - metadata, placeholders */

  /* Efectos */
  --glow-cyan: 0 0 20px rgba(0, 242, 255, 0.3);
  --glow-orange: 0 0 20px rgba(255, 140, 66, 0.3);
  --glass-bg: rgba(26, 34, 45, 0.6);
  --glass-border: rgba(0, 242, 255, 0.15);
}
```

### Tailwind Config Personalizado

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        midnight: '#0A0E14',
        carbon: '#1A222D',
        'carbon-light': '#222B38',
        neon: '#00F2FF',
        sunset: '#FF8C42',
        ice: '#E0F7FA',
        'ice-muted': '#8899AA',
      },
      fontFamily: {
        display: ['Rajdhani', 'Orbitron', 'sans-serif'],
        body: ['Inter', 'Titillium Web', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      backdropBlur: {
        glass: '10px',
      },
      boxShadow: {
        neon: '0 0 20px rgba(0, 242, 255, 0.3)',
        'neon-strong': '0 0 40px rgba(0, 242, 255, 0.5)',
        sunset: '0 0 20px rgba(255, 140, 66, 0.3)',
      },
    },
  },
};
```

### Tipografia

| Uso | Fuente | Peso | Tamano | Color |
|-----|--------|------|--------|-------|
| H1 (hero) | Rajdhani / Orbitron | 700 | 64px / 4rem | #E0F7FA |
| H2 (secciones) | Rajdhani | 600 | 40px / 2.5rem | #E0F7FA |
| H3 (subtitulos) | Rajdhani | 500 | 24px / 1.5rem | #00F2FF |
| Body | Inter | 400 | 16px / 1rem | #E0F7FA |
| Body secondary | Inter | 400 | 14px / 0.875rem | #8899AA |
| Monospace/datos | Roboto Mono | 400 | 14px | #00F2FF |
| CTA buttons | Rajdhani | 600 | 16px uppercase | #0A0E14 sobre #00F2FF |

### Componentes UI Reutilizables

**Glass Card:**
```css
.glass-card {
  background: rgba(26, 34, 45, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 242, 255, 0.15);
  border-radius: 12px;
  transition: all 0.3s ease;
}
.glass-card:hover {
  border-color: rgba(0, 242, 255, 0.4);
  box-shadow: 0 0 20px rgba(0, 242, 255, 0.15);
}
```

**Neon Button (CTA primario):**
```css
.btn-neon {
  background: #00F2FF;
  color: #0A0E14;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 12px 32px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 242, 255, 0.3);
  transition: all 0.3s ease;
}
.btn-neon:hover {
  box-shadow: 0 0 40px rgba(0, 242, 255, 0.5);
  transform: translateY(-2px);
}
```

**Boton Secundario (outline):**
```css
.btn-outline {
  background: transparent;
  color: #00F2FF;
  border: 1px solid #00F2FF;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 12px 32px;
  border-radius: 8px;
  transition: all 0.3s ease;
}
.btn-outline:hover {
  background: rgba(0, 242, 255, 0.1);
  box-shadow: 0 0 20px rgba(0, 242, 255, 0.2);
}
```

**Fondo con grilla tecnica:**
```css
.tech-grid-bg {
  background-image: radial-gradient(circle, rgba(0, 242, 255, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
}
```

---

## ESTRUCTURA DE SECCIONES (en orden de scroll)

---

### SECCION 1: NAVBAR (fija, glassmorphism)

**Comportamiento:**
- Sticky top, glassmorphism background al hacer scroll
- Transparente al inicio, glass-bg al scrollear
- Mobile: hamburger menu con panel lateral glass

**Contenido:**
- Logo: "VELTIA" en fuente display, con efecto de glow cyan sutil
- Links: Servicios | Por que VELTIA | Como trabajamos | Equipo | Contacto
- CTA boton: "Hablemos" (btn-neon, pequeno)

---

### SECCION 2: HERO (viewport completo)

**Layout:** Centrado vertical y horizontal, full viewport height

**Fondo:**
- Color base: #0A0E14
- Overlay: grilla de puntos tecnica (radial-gradient muy sutil)
- Animacion: particulas flotantes lentas en cyan (usar Framer Motion o CSS keyframes) -- NO three.js, demasiado pesado para una landing
- Alternativa: lineas de circuito animadas SVG que se dibujan lentamente

**Contenido:**
```
[Icono: simbolo geometrico abstracto tipo fenix/halcon en lineas de circuito, animado]

VELTIA
Tecnologia que transforma

Somos tu equipo de tecnologia. Automatizamos procesos,
implementamos IA y optimizamos tu infraestructura cloud
para que tu empresa crezca sin friccion.

[Agendemos una llamada]  [Ver servicios ↓]
```

**Detalles:**
- "VELTIA" en fuente Rajdhani/Orbitron, 64-80px, #E0F7FA, con text-shadow cyan muy sutil
- Tagline en fuente display, 24px, gradiente text de #00F2FF a #FF8C42
- Parrafo en Inter, 18px, #8899AA, max-width 600px centrado
- CTA primario: "Agendemos una llamada" (btn-neon)
- CTA secundario: "Ver servicios" (btn-outline) con flecha animada hacia abajo
- Framer Motion: fade-in secuencial de cada elemento (icono -> titulo -> tagline -> parrafo -> botones)

---

### SECCION 3: SERVICIOS (Que hacemos)

**Layout:** Titulo centrado + grilla de 5 cards (3+2 en desktop, 1 columna mobile)

**Titulo de seccion:**
```
// 5 servicios, un objetivo
QUE HACEMOS
```
- Subtitulo en fuente mono, #8899AA, uppercase, tracking-wide, 12px
- Titulo en Rajdhani 600, 40px, #E0F7FA

**5 Service Cards (glass-card):**

Cada card tiene:
- Icono de linea fina arriba (lucide-icons o similar), color #00F2FF, 32px
- Titulo del servicio en Rajdhani 500, 20px, #E0F7FA
- Descripcion en Inter 400, 14px, #8899AA, 2-3 lineas
- Hover: borde cyan se intensifica + sutil glow
- Animacion: stagger fade-in al entrar en viewport (Framer Motion)

**Card 1 -- Transformacion Digital**
- Icono: FileDigit o Workflow (nodos conectados)
- Titulo: "Transformacion Digital"
- Texto: "Eliminamos el papel, automatizamos workflows y digitalizamos procesos. Gestion documental, firma electronica y portales de autoservicio."

**Card 2 -- IA & Agentes Inteligentes**
- Icono: Brain o BotMessageSquare
- Titulo: "IA & Agentes Inteligentes"
- Texto: "Agentes autonomos que resuelven tickets, monitorean infraestructura y automatizan tareas repetitivas. IA practica, no teorica."

**Card 3 -- Modernizacion Legacy**
- Icono: RefreshCcw o ArrowUpFromLine
- Titulo: "Modernizacion Legacy"
- Texto: "Migramos tu monolito a microservicios, tu Oracle a PostgreSQL y tus apps desktop a la web. Sin downtime."

**Card 4 -- FinOps & Cloud**
- Icono: CloudCog o TrendingDown
- Titulo: "Optimizacion Cloud & FinOps"
- Texto: "Reducimos tu factura AWS/Azure/GCP entre 30% y 50%. Analisis, implementacion y governance de costos."

**Card 5 -- Consultoria**
- Icono: Lightbulb o Compass
- Titulo: "Consultoria Profesional"
- Texto: "Diagnosticos, workshops de IA y advisory estrategico. Tu puerta de entrada para entender que necesitas antes de invertir."

---

### SECCION 4: POR QUE VELTIA (Diferenciales)

**Layout:** Titulo izquierda + lista de diferenciales con icono/indicador lateral

**Fondo:** Ligeramente distinto -- usar gradiente sutil de #0A0E14 a #0D1117 o una franja con borde neon superior

**Titulo:**
```
// lo que nos hace diferentes
POR QUE VELTIA
```

**5 Diferenciales (layout vertical, cada uno es un bloque horizontal):**

Cada diferencial:
- Indicador izquierdo: linea vertical cyan de 40px, con punto luminoso arriba
- Titulo en Rajdhani 500, 20px, #E0F7FA
- Descripcion en Inter 400, 15px, #8899AA

```
─── ROI medible desde el dia 1
    No prometemos resultados abstractos. Cada proyecto tiene metricas
    claras: ahorro en pesos, horas recuperadas, procesos automatizados.

─── Implementamos, no solo recomendamos
    No te dejamos un PDF con recomendaciones. Ejecutamos los cambios,
    validamos resultados y te acompanamos post go-live.

─── Stack moderno, expertise real
    FastAPI, React, Next.js, PostgreSQL, AWS, LLMs.
    No somos consultores teoricos: escribimos codigo todos los dias.

─── Consultoria primero
    Antes de comprometerte con un proyecto de USD 50K,
    invertis USD 2K en entender que necesitas. Sin letra chica.

─── Soporte local, vision global
    Base en Cordoba, Argentina. Entendemos la realidad local
    con estandares internacionales de calidad.
```

**Animacion:** Cada bloque aparece con fade-in + slide desde la izquierda al hacer scroll (Framer Motion, stagger 0.15s)

---

### SECCION 5: COMO TRABAJAMOS (Funnel de 3 pasos)

**Layout:** Titulo centrado + 3 columnas/steps conectadas con lineas

**Titulo:**
```
// de consultoria a resultados
COMO TRABAJAMOS
```

**3 Steps conectados por linea animada:**

```
[1]─────────────[2]─────────────[3]
DIAGNOSTICO     IMPLEMENTACION   SOPORTE CONTINUO
```

- Cada step es una glass-card con:
  - Numero grande en fuente display, gradiente cyan-a-naranja
  - Titulo en Rajdhani 500, 18px, #E0F7FA
  - Rango de precio en Roboto Mono, 14px, #00F2FF
  - Descripcion en Inter 400, 14px, #8899AA

**Step 1:**
- Numero: "01"
- Titulo: "Diagnostico"
- Precio: "USD 1K - 5K"
- Duracion: "1-4 semanas"
- Texto: "Relevamos tu situacion actual: procesos, sistemas, costos. Te entregamos un informe con oportunidades concretas."
- Badge: "60-70% convierten a proyecto" (badge con borde naranja)

**Step 2:**
- Numero: "02"
- Titulo: "Implementacion"
- Precio: "USD 10K - 50K"
- Duracion: "2-6 meses"
- Texto: "Desarrollamos la solucion con tu equipo. Metodologia agil, entregas incrementales, quality gates en cada fase."
- Badge: "40-50% convierten a recurrente" (badge con borde naranja)

**Step 3:**
- Numero: "03"
- Titulo: "Soporte Continuo"
- Precio: "USD 1K - 5K/mes"
- Duracion: "Continuo"
- Texto: "Monitoreo, mantenimiento, mejoras. No te dejamos solo despues del go-live."

**Lineas conectoras:** SVG animado que se dibuja al hacer scroll -- linea punteada cyan entre los 3 steps

**Mobile:** Stack vertical, linea conectora a la izquierda (tipo timeline)

---

### SECCION 6: NUMEROS QUE IMPORTAN (Metricas animadas)

**Layout:** Fondo con borde neon arriba/abajo, 5 metricas en fila (o 2+3)

**Fondo:** Franja con background levemente mas oscuro o con glass effect

**Metricas (cada una con contador animado al entrar en viewport):**

```
30-50%          4-12            40-65%          60-80%          6-12
Reduccion       semanas         Tickets IA      Reduccion       meses
costos cloud    implementacion  autonomos       procesos        ROI tipico
```

- Numero grande en Rajdhani 700, 48px, gradiente #00F2FF a #FF8C42
- Label en Inter 400, 14px, #8899AA, uppercase
- Animacion: countUp de 0 al valor final al entrar en viewport
- Separadores: lineas verticales en #1A222D entre cada metrica

---

### SECCION 7: CASOS DE EXITO

**Layout:** Titulo + 3 cards horizontales (carousel en mobile)

**Titulo:**
```
// resultados concretos
CASOS DE EXITO
```

**3 Case Study Cards (glass-card, mas grandes):**

Cada card:
- Badge superior: industria del cliente (en naranja)
- Titulo del problema en Rajdhani 500, 18px
- Separador: linea cyan
- 3 filas: Problema | Solucion | Resultado
- Resultado destacado: numero en grande con glow

**Card 1:**
- Badge: "INDUSTRIA"
- Problema: "Licencias Oracle USD 80.000/ano, sistema imposible de mantener"
- Solucion: "Migracion a PostgreSQL + optimizacion de queries"
- Resultado destacado: "USD 80K/ano ahorro" -- "Payback 5 meses. Performance +30%"

**Card 2:**
- Badge: "STARTUP SAAS"
- Problema: "Factura AWS creciendo 20% mensual sin control"
- Solucion: "FinOps Managed por 6 meses"
- Resultado destacado: "-42% factura" -- "Ahorro neto: USD 4.800/mes"

**Card 3:**
- Badge: "SOFTWARE"
- Problema: "1.000 tickets/mes de soporte IT, equipo saturado"
- Solucion: "HelpDesk IA con integracion AD, Jira, Confluence"
- Resultado destacado: "65% resolucion IA" -- "Ahorro anual: USD 60.000"

**Nota:** Estos son casos proyectados. Cuando haya casos reales, reemplazar.

---

### SECCION 8: EQUIPO

**Layout:** Split -- texto izquierda, visual derecho

**Titulo:**
```
// quienes somos
EL EQUIPO
```

**Columna izquierda (texto):**
```
VELTIA nacio en Alta Gracia, Cordoba, con una premisa simple:
la tecnologia tiene que generar resultados concretos,
no PowerPoints bonitos.
```

**Bloque Dino (CTO):**
- Glass-card con:
  - Placeholder avatar: circulo con borde neon cyan, iniciales "D" en fuente display
  - Nombre: "Dino" en Rajdhani 600, 20px
  - Rol: "CTO" en Roboto Mono, #00F2FF
  - Descripcion: "Arquitecto de software y especialista en IA. Lidera el desarrollo tecnico de todas las soluciones."
  - Link LinkedIn: icono con glow (placeholder URL)

**Bloque Equipo:**
- Texto: "Equipo multidisciplinario de especialistas en backend, frontend, cloud, DevOps, seguridad e inteligencia artificial."
- Lista de tecnologias en badges/chips con estilo mono:
  `FastAPI` `React` `Next.js` `PostgreSQL` `AWS` `Python` `TypeScript` `LLMs`

**Columna derecha (visual):**
- Grafico abstracto de nodos conectados representando el equipo (SVG animado o ilustracion de lineas tipo circuito)

---

### SECCION 9: CONTACTO

**Layout:** Titulo + formulario centrado (glass-card grande)

**Fondo:** Gradiente sutil hacia arriba de #0D1117 a #0A0E14

**Titulo:**
```
// empecemos
HABLEMOS
```

**Subtitulo:** "Contanos que necesitas y te respondemos en 24 horas." en Inter 400, #8899AA

**Formulario (dentro de glass-card grande, max-width 600px):**

Campos con estilo dark input:
- Background: #0A0E14
- Border: 1px solid #1A222D
- Focus border: #00F2FF con glow sutil
- Text: #E0F7FA
- Placeholder: #4A5568

```
[Nombre]              -- input text
[Email]               -- input email
[Empresa]             -- input text (opcional)
[Mensaje]             -- textarea, 4 rows

[Enviar consulta]     -- btn-neon full-width
```

**Debajo del formulario:**
```
contacto@veltia.ar  |  Alta Gracia, Cordoba, Argentina
```
(placeholders, en Roboto Mono, 14px, #8899AA)

---

### SECCION 10: FOOTER

**Layout:** Fondo #0A0E14 con borde superior cyan muy tenue

**Contenido:**
```
VELTIA                                    [LinkedIn] [GitHub] [Email]
Tecnologia que transforma

(c) 2026 VELTIA SAS.                     Alta Gracia, Cordoba, Argentina
Todos los derechos reservados.
```

- Logo "VELTIA" en fuente display, 20px, #E0F7FA
- Tagline en 14px, #8899AA
- Iconos sociales: estilo line, 20px, #8899AA, hover #00F2FF
- Copyright en 12px, #4A5568

---

## ANIMACIONES Y MICRO-INTERACCIONES (Framer Motion)

### Scroll-triggered (InView)
- Cada seccion: fade-in + slide-up al entrar en viewport
- Cards: stagger effect (aparecen una por una con 0.1s delay)
- Metricas: countUp animation al visible
- Lineas de circuito: draw animation (stroke-dashoffset)

### Hover
- Cards: border glow se intensifica + sutil scale(1.02)
- Botones neon: glow se expande + translateY(-2px)
- Links navbar: underline animado en cyan
- Iconos: rotate o pulse sutil

### Transiciones de pagina
- Smooth scroll entre secciones (CSS scroll-behavior: smooth)
- Navbar links scrollean a la seccion correspondiente

### Performance
- NO usar Three.js (demasiado pesado para una landing)
- Particulas: CSS puro o canvas 2D liviano
- Lazy load de secciones debajo del fold
- Preferir CSS animations sobre JS donde sea posible

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Layout |
|-----------|--------|
| Mobile (<640px) | 1 columna, cards stack, hamburger menu, hero texto centrado |
| Tablet (640-1024px) | 2 columnas cards, sidebar menu, hero centrado |
| Desktop (>1024px) | Layout completo, 3-5 columnas, fixed navbar |

### Mobile-specific:
- Hero: reducir titulo a 36px
- Cards servicios: full width, scroll vertical
- Casos exito: horizontal carousel (swipe)
- Metricas: 2x3 grid en lugar de 5 en fila
- Steps: timeline vertical con linea izquierda
- Formulario: full width con padding

---

## METADATA Y SEO

```html
<title>VELTIA | Tecnologia que transforma</title>
<meta name="description" content="Servicios IT e IA para empresas. Transformacion digital, agentes inteligentes, modernizacion legacy, FinOps y consultoria. Alta Gracia, Cordoba, Argentina." />
<meta property="og:title" content="VELTIA - Tecnologia que transforma" />
<meta property="og:description" content="Automatizamos procesos, implementamos IA y optimizamos tu infraestructura cloud." />
<meta property="og:image" content="/og-image.png" />
<meta property="og:type" content="website" />
```

---

## ESTRUCTURA DE ARCHIVOS SUGERIDA

```
src/
├── app/
│   ├── layout.tsx          # Root layout con fonts + metadata
│   ├── page.tsx            # Landing page (composicion de secciones)
│   └── globals.css         # Variables CSS, base styles, tech-grid
├── components/
│   ├── Navbar.tsx           # Glassmorphism navbar
│   ├── Hero.tsx             # Hero con particulas/circuitos
│   ├── Services.tsx         # 5 cards servicios
│   ├── WhyVeltia.tsx        # Diferenciales
│   ├── HowWeWork.tsx        # 3 steps funnel
│   ├── Metrics.tsx          # Contadores animados
│   ├── CaseStudies.tsx      # 3 cards casos
│   ├── Team.tsx             # Equipo
│   ├── Contact.tsx          # Formulario
│   ├── Footer.tsx           # Footer
│   └── ui/
│       ├── GlassCard.tsx    # Card reutilizable
│       ├── NeonButton.tsx   # Boton CTA
│       ├── SectionTitle.tsx # Titulo de seccion
│       └── AnimatedCounter.tsx # Contador numerico
├── lib/
│   └── animations.ts       # Variantes Framer Motion
└── public/
    ├── fonts/               # Rajdhani, Inter, Roboto Mono
    └── og-image.png         # Open Graph image
```

---

## DEPENDENCIAS

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.300.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "@tailwindcss/forms": "^0.5.0",
    "typescript": "^5.0.0"
  }
}
```

**Google Fonts a importar:**
- Rajdhani (500, 600, 700)
- Inter (400, 500)
- Roboto Mono (400)

---

## CHECKLIST DE CALIDAD

- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 95
- [ ] Todos los textos legibles (contraste WCAG AA minimo)
- [ ] Smooth scroll funciona en todos los browsers
- [ ] Formulario tiene validacion client-side
- [ ] Mobile responsive en 375px, 768px, 1024px, 1440px
- [ ] Animaciones respetan prefers-reduced-motion
- [ ] No hay layout shift (CLS = 0)
- [ ] Fonts loaded con font-display: swap
- [ ] Meta tags OG completos

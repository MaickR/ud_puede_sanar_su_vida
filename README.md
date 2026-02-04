# 🌿 Mundo Holístico - Usted Puede Sanar Su Vida

> **Retiro Transformador en Mount Shasta** | Basado en la Filosofía de Louise Hay  
> Una experiencia vivencial de 3 días para sanar tu **Salud**, **Amor** y **Dinero**

---

## 📖 Visión del Proyecto

Bienvenido al repositorio oficial de la **Landing Page del Retiro "Usted Puede Sanar Su Vida"**. Este proyecto es una experiencia digital inmersiva diseñada para guiar a visitantes a través del transformador viaje vivencial en Mount Shasta, California.

Basada en la metodología de Louise Hay y facilitada por Isabela Tena, esta landing page refleja los valores fundamentales de la transformación: **claridad**, **conectividad** y **conversión**.

### 🎯 Objetivos Clave

✨ **Inspiración**: Conectar emocionalmente con visitantes que buscan transformación  
🔐 **Credibilidad**: Comunicar autoridad a través del legado de Louise Hay  
📊 **Conversión**: Maximizar reservas con CTAs estratégicos y urgencia  
📱 **Accesibilidad**: Experiencia perfecta en cualquier dispositivo  

---

## ✨ Características Principales

### 🎨 Diseño & UX

- **Hero Section Inmersivo** con parallax effect de Mount Shasta
- **Gradientes y Overlay Dinámicos** para profundidad visual
- **Tipografía Elegante**: Playfair Display + Montserrat para jerarquía premium
- **Paleta de Colores Coherente**: Índigo (primario), Ámbar (acento), Esmeralda (CTA)
- **Animaciones AOS**: Revelación de contenido al scroll para engagement
- **Diseño Mobile-First**: Responsive perfecto en 375px → 1920px

### 📋 Secciones de Contenido

| Sección | Descripción |
|---------|-------------|
| **Hero** | Impacto visual + CTA principal + Propuesta única |
| **El Legado** | Autoridad: Louise Hay + Jennifer Lopez + resultados |
| **Los 3 Pilares** | Salud, Amor, Dinero - tarjetas interactivas |
| **Lo Que NO Hacemos** | Diferenciadores claros vs. competencia |
| **¿Para Ti?** | Calificación Sí/No + inclusividad |
| **Palabra de Isabela** | Manifiesto emocional + conexión personal |
| **Itinerario Hora a Hora** | Timeline detallado 3 días - Transparencia |
| **Logística** | Vuelos, hospedaje, transporte |
| **Inversión** | Estructura de precios + planes de pago |
| **FAQ** | Preguntas frecuentes en acordeón |
| **Footer** | Contacto, redes sociales, política de privacidad |

### 🛡️ Funcionalidades Avanzadas

✅ **Política de Privacidad Modal** - Cumplimiento CCPA/CPRA  
✅ **Efecto Hover Automático** - Imagen de autoridad se activa al scroll  
✅ **Botón WhatsApp Flotante** - Aparece después de 10s con CTA clara  
✅ **Banner de Urgencia** - "Cupos Limitados a 12 Participantes" con animación pulse  
✅ **Favicon Personalizado** - Logo de marca en todas las pestañas  
✅ **Smooth Scroll** - Navegación fluida por hash links  
✅ **Navbar Sticky** - Con transición dinámica al scroll  

---

## 🛠️ Stack Tecnológico

### Frontend
- **HTML5** - Semántica limpia y accesible
- **Tailwind CSS** - Utility-first CSS framework (CDN para flexibilidad)
- **JavaScript Vanilla** - Sin dependencias externas (IntersectionObserver, EventListeners)

### Librerías
- **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)** v2.3.1 - Animaciones al scroll
- **[Lucide Icons](https://lucide.dev/)** - Iconografía moderna y limpia
- **[Google Fonts](https://fonts.google.com/)** - Playfair Display + Montserrat
- **Swiper & Jarallax** - Carruseles y parallax (incluidos pero opcionales)

### Hosting & Deployment
- ✅ GitHub Pages
- ✅ Netlify
- ✅ Vercel
- ✅ Cualquier servidor estático

---

## 📁 Estructura del Proyecto

```
ud_puede_sanar_su_vida/
│
├── index.html                          # Landing page principal (1200+ líneas optimizadas)
│
├── assets/
│   ├── images/
│   │   ├── logo-Mundoholistico.png    # Logo marca (usado en navbar + footer)
│   │   ├── isa-louise.png             # Autoridad: Isabela + Louise Hay
│   │   ├── true-love.jpg              # Validación social: Jennifer Lopez
│   │   ├── isabela-tena.jpeg          # Foto facilitadora
│   │   ├── shasta.png                 # Background hero
│   │   ├── shasta-night.avif          # Optimización moderna
│   │   └── [bloggers, testimonios...]
│   │
│   ├── css/
│   │   ├── style.css                  # Estilos compilados por Tailwind
│   │   └── icons.min.css              # Set de iconos personalizados
│   │
│   ├── js/
│   │   ├── app.js                     # Lógica principal (desktop)
│   │   └── swiper.js                  # Carrusel testimonios
│   │
│   └── fonts/
│       └── [Montserrat, Playfair...]
│
├── README.md                           # Este archivo
└── .gitignore                          # Exclusiones de versión

```

---

## 🚀 Instrucciones de Despliegue

### Opción 1: GitHub Pages (Gratuito)

```bash
# Clone el repositorio
git clone https://github.com/MaickR/ud_puede_sanar_su_vida.git

# No requiere compilación - es HTML puro
# Habilite Pages en Settings → Pages → Source: main branch
```

### Opción 2: Netlify (Recomendado)

```bash
# Drop and drag la carpeta del proyecto en Netlify.com
# O conecte su repositorio de GitHub
```

### Opción 3: Local (Desarrollo)

```bash
# Abra el archivo index.html directamente en el navegador
# O use Live Server en VS Code
```

---

## 📈 Métricas de Conversión

Esta landing page está optimizada para:

| KPI | Estrategia |
|-----|-----------|
| **CTR** | 5 botones CTA + WhatsApp flotante |
| **Tiempo en Página** | Secciones enganchantes + paralaje visual |
| **Tasa de Rebote** | Hero impactante + propuesta clara |
| **Reservas** | Urgencia (cupos limitados) + testimonios |

---

## 🎨 Personalización

### Cambiar Colores

Edite el `tailwind.config` en el `<head>` de `index.html`:

```javascript
colors: {
    primary: '#1e1b4b',      // Índigo primario
    accent: '#d97706',       // Ámbar dorado
    contrast: '#064e3b',     // Esmeralda (CTAs)
    base: '#fafaf9',         // Off-white
}
```

### Agregar Secciones

Las secciones siguen un patrón coherente:

```html
<section class="py-24 bg-stone-50 relative" id="nueva-seccion">
    <div class="container mx-auto px-6">
        <h2 class="text-5xl font-display font-bold text-primary mb-12">Título</h2>
        <!-- Contenido -->
    </div>
</section>
```

### Traducir o Adaptar

Busque y reemplace para:
- WhatsApp: `+1 (408) 800-9376`
- Email: `mundoholisticousa@gmail.com`
- URLs de redes: `facebook.com/mundoholisticousa`

---

## 🔒 Cumplimiento Legal

✅ **Política de Privacidad CCPA/CPRA** - Modal completo incluido  
✅ **Favicon** - Reducción de errores 404  
✅ **Meta Tags** - OG:image, Twitter card, responsivos  
✅ **Accesibilidad** - ARIA labels, tabindex, semántica HTML5  

---

## 📱 Responsive Breakpoints

Optimizado para:
- **Mobile**: 375px (iPhone SE)
- **Tablet**: 768px (iPad)
- **Laptop**: 1024px (MacBook)
- **Desktop**: 1440px+ (4K)

---

## 🤝 Contribuciones

Para mejorar esta landing:

1. Clone el repositorio
2. Cree una rama: `git checkout -b feature/mejora`
3. Commit: `git commit -m "Mejora: descripción"`
4. Push: `git push origin feature/mejora`
5. Abra un Pull Request

---

## 📄 Licencia

© 2026 **Mundo Holístico USA** - Isabela Tena  
Todos los derechos reservados.

---

## 📞 Contacto

- **Email**: mundoholisticousa@gmail.com
- **WhatsApp**: +1 (408) 800-9376
- **Facebook**: facebook.com/mundoholisticousa
- **Instagram**: @mundoholisticousaoficial
- **YouTube**: @Mundoholisticousa

---

## 🌟 Agradecimientos

Creado con ❤️ para Mundo Holístico USA  
Inspirado en el legado transformador de Louise Hay  
Desarrollado con metodología mobile-first y accesibilidad primero

---

**v1.0** | Última actualización: Febrero 2026 | [Ver Demo en Vivo](https://mundoholistico.netlify.app)

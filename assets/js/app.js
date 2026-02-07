/* Template Name: Mundo Holístico - Retiro Usted Puede Sanar Su Vida
   Author: Isabela Tena - Mundo Holístico USA
   Version: 2.0.0
   Updated: February 2026
   File Description: Main JS file for Mount Shasta Retreat Landing Page
*/

/*********************************/
/*         INDEX                 */
/*================================
 *     01.  AOS Animations        *
 *     02.  Lucide Icons          *
 *     03.  Mobile Menu Toggle    *
 *     04.  Sticky Navbar         *
 *     05.  Smooth Scroll         *
 *     06.  WhatsApp Float        *
 *     07.  Auto Hover Images     *
 *     08.  Privacy Modal         *
 ================================*/

document.addEventListener('DOMContentLoaded', function() {
    
    /*********************/
    /*  AOS Animations   */
    /*********************/
    if (typeof AOS !== 'undefined') {
        AOS.init({ 
            once: false, // Permite que se repita al hacer scroll
            offset: 100,
            duration: 1000, 
            easing: 'ease-in-out-cubic',
            delay: 0
        });
    }

    /*********************/
    /*   Lucide Icons    */
    /*********************/
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    /*********************/
    /* Mobile Menu Toggle */
    /*********************/
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => { 
            mobileMenu.classList.toggle('hidden'); 
        });
    }

    /*********************/
    /*   Sticky Navbar   */
    /*********************/
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('shadow-md', 'bg-stone-50/95', 'py-2');
                navbar.classList.remove('bg-stone-50/90', 'py-4');
            } else {
                navbar.classList.remove('shadow-md', 'bg-stone-50/95', 'py-2');
                navbar.classList.add('bg-stone-50/90', 'py-4');
            }
        });
    }

    /*********************/
    /*   Smooth Scroll   */
    /*********************/
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    /*********************/
    /*  WhatsApp Float   */
    /*********************/
    // Mostrar WhatsApp flotante después de 10 segundos
    setTimeout(() => {
        const whatsappBtn = document.querySelector('.whatsapp-float');
        if (whatsappBtn) {
            whatsappBtn.style.display = 'block';
        }
    }, 10000);

    /*********************/
    /* Auto Hover Images */
    /*********************/
    // Activar efecto hover automático al entrar/salir de la sección
    const autoHoverImages = document.querySelectorAll('[data-auto-hover]');
    
    if (autoHoverImages.length > 0) {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('grayscale-0');
                    } else {
                        entry.target.classList.remove('grayscale-0');
                    }
                });
            }, { threshold: 0.4 });

            autoHoverImages.forEach((img) => observer.observe(img));
        } else {
            autoHoverImages.forEach((img) => img.classList.add('grayscale-0'));
        }
    }

    /*********************/
    /*  Privacy Modal    */
    /*********************/
    const privacyOpen = document.getElementById('privacy-open');
    const privacyModal = document.getElementById('privacy-modal');
    const privacyClose = document.getElementById('privacy-close');
    const privacyCloseBottom = document.getElementById('privacy-close-bottom');
    const privacyBackdrop = document.getElementById('privacy-backdrop');
    const privacyDate = document.getElementById('privacy-date');
    let lastFocusedElement = null;

    const openPrivacy = () => {
        if (!privacyModal) return;
        lastFocusedElement = document.activeElement;
        privacyModal.classList.remove('hidden');
        privacyModal.removeAttribute('inert');
        document.body.classList.add('overflow-hidden');
        if (privacyClose) privacyClose.focus();
    };

    const closePrivacy = () => {
        if (!privacyModal) return;
        privacyModal.classList.add('hidden');
        privacyModal.setAttribute('inert', '');
        document.body.classList.remove('overflow-hidden');
        if (lastFocusedElement && lastFocusedElement.focus) {
            lastFocusedElement.focus();
        }
    };

    // Event listeners para el modal de privacidad
    if (privacyOpen) privacyOpen.addEventListener('click', openPrivacy);
    if (privacyClose) privacyClose.addEventListener('click', closePrivacy);
    if (privacyCloseBottom) privacyCloseBottom.addEventListener('click', closePrivacy);
    if (privacyBackdrop) privacyBackdrop.addEventListener('click', closePrivacy);
    
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePrivacy();
    });

    // Actualizar fecha en el modal de privacidad
    if (privacyDate) {
        const now = new Date();
        const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        privacyDate.textContent = `${meses[now.getMonth()]} ${now.getFullYear()}`;
    }

});
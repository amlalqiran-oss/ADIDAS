        // Initialize GSAP
        gsap.registerPlugin(ScrollTrigger);
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Navigation hide/show
        let lastScrollY = window.scrollY;
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            lastScrollY = currentScrollY;
        }, { passive: true });

        // Mobile menu
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        let menuOpen = false;

        menuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            const icon = menuBtn.querySelector('svg');
            
            if (menuOpen) {
                mobileMenu.style.transform = 'translateX(0)';
                document.body.style.overflow = 'hidden';
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>';
                
                gsap.to('.mobile-link', {
                    opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.3, ease: 'power3.out'
                });
            } else {
                mobileMenu.style.transform = 'translateX(100%)';
                document.body.style.overflow = '';
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>';
                gsap.set('.mobile-link', { opacity: 0, y: 32 });
            }
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuOpen = false;
                mobileMenu.style.transform = 'translateX(100%)';
                document.body.style.overflow = '';
                menuBtn.querySelector('svg').innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>';
                gsap.set('.mobile-link', { opacity: 0, y: 32 });
            });
        });

        // Magnetic button effect
        if (!prefersReducedMotion) {
            document.querySelectorAll('.magnetic-btn').forEach(btn => {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: 'power2.out' });
                });
                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1, 0.5)' });
                });
            });
        }

        // Hero animations
        if (!prefersReducedMotion) {
            const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });
            heroTl
                .to('.hero-tag', { opacity: 1, duration: 0.8, delay: 0.3 })
                .to('.hero-text', { y: 0, duration: 1.2, ease: 'power4.out' }, '-=0.4')
                .to('.hero-desc', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6');
        } else {
            gsap.set(['.hero-tag', '.hero-text', '.hero-desc'], { opacity: 1, y: 0 });
        }

        // Section scroll animations
        const sections = ['help', 'shipping', 'returns', 'size', 'careers', 'press', 'sustain'];
        sections.forEach(id => {
            const el = document.getElementById(id + '-anim');
            if (el) {
                if (!prefersReducedMotion) {
                    gsap.to(el, {
                        scrollTrigger: { trigger: el, start: 'top 85%' },
                        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out'
                    });
                } else {
                    gsap.set(el, { opacity: 1, y: 0 });
                }
            }
        });

        // Accordion functionality
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const wasActive = item.classList.contains('active');
                
                // Close all
                document.querySelectorAll('.accordion-item').forEach(i => {
                    i.classList.remove('active');
                });
                
                // Toggle current
                if (!wasActive) {
                    item.classList.add('active');
                }
            });
        });

        // Sidebar active state
        const sidebarLinks = document.querySelectorAll('.sidebar-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            const contentSections = ['help', 'shipping', 'returns', 'size-guide', 'careers', 'press', 'sustainability'];
            
            contentSections.forEach(id => {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        current = id;
                    }
                }
            });

            sidebarLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href').replace('#', '');
                if (href === current || (href === 'size-guide' && current === 'size-guide')) {
                    link.classList.add('active');
                }
            });
        });

        // Focus visible styles
        const style = document.createElement('style');
        style.textContent = `
            :focus-visible {
                outline: 2px solid rgba(255, 255, 255, 0.5) !important;
                outline-offset: 3px !important;
            }
        `;
        document.head.appendChild(style);
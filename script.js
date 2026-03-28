 // Product data
        const products = [
            {
                id: 1,
                name: 'ULTRA BOOST 2024',
                category: 'Running',
                price: '$189.99',
                image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=85'
            },
            {
                id: 2,
                name: 'STAN SMITH CLASSIC',
                category: 'Lifestyle',
                price: '$109.99',
                image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=85'
            },
            {
                id: 3,
                name: 'NMD R1 V3',
                category: 'Streetwear',
                price: '$159.99',
                image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=85'
            },
            {
                id: 4,
                name: 'FORUM LOW',
                category: 'Basketball',
                price: '$119.99',
                image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=85'
            },
            {
                id: 5,
                name: 'SAMBA OG',
                category: 'Originals',
                price: '$99.99',
                image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=85'
            },
            {
                id: 6,
                name: 'TERREX FREE HIKER',
                category: 'Outdoor',
                price: '$199.99',
                image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=85'
            }
        ];

        // Render products
        const productsGrid = document.getElementById('productsGrid');
        products.forEach((product, index) => {
            const card = document.createElement('div');
            card.className = 'product-card group opacity-0';
            card.innerHTML = `
                <div class="relative aspect-square bg-gradient-to-br from-card to-bg rounded-xl overflow-hidden mb-5">
                    <img 
                        src="${product.image}" 
                        alt="${product.name}" 
                        class="product-image w-full h-full object-cover"
                        loading="lazy"
                    >
                    <div class="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <button class="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 magnetic-btn text-xs py-3 px-6">
                        <span>Add to Cart</span>
                    </button>
                </div>
                <div class="product-info px-1">
                    <p class="text-[9px] text-muted uppercase tracking-[0.2em] mb-2">${product.category}</p>
                    <h3 class="font-display text-xl mb-2">${product.name}</h3>
                    <p class="text-muted">${product.price}</p>
                </div>
            `;
            productsGrid.appendChild(card);
        });

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
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    delay: 0.3,
                    ease: 'power3.out'
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
                    
                    gsap.to(btn, {
                        x: x * 0.3,
                        y: y * 0.3,
                        duration: 0.4,
                        ease: 'power2.out'
                    });
                });
                
                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, {
                        x: 0,
                        y: 0,
                        duration: 0.4,
                        ease: 'elastic.out(1, 0.5)'
                    });
                });
            });
        }

        // Hero animations
        if (!prefersReducedMotion) {
            const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });
            
            heroTl
                .to('.hero-tag', { opacity: 1, duration: 0.8, delay: 0.3 })
                .to('.hero-text', { 
                    y: 0, 
                    duration: 1.2, 
                    stagger: 0.15,
                    ease: 'power4.out'
                }, '-=0.4')
                .to('.hero-desc', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
                .to('.hero-btns', { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
                .to('.hero-sneaker', { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }, '-=1.5')
                .to('.hero-stat-card', { 
                    opacity: 1, 
                    scale: 1, 
                    duration: 0.6, 
                    stagger: 0.15,
                    ease: 'back.out(1.5)'
                }, '-=0.6');
            
            // Floating animation for sneaker
            gsap.to('.floating-sneaker', {
                y: -20,
                duration: 3,
                ease: 'power1.inOut',
                yoyo: true,
                repeat: -1
            });
            
            // Shadow pulse
            gsap.to('.sneaker-shadow', {
                scale: 0.85,
                opacity: 0.3,
                duration: 3,
                ease: 'power1.inOut',
                yoyo: true,
                repeat: -1
            });
            
            // Parallax on scroll
            gsap.to('.hero-sneaker img', {
                y: 150,
                scrollTrigger: {
                    trigger: '.hero-sneaker',
                    start: 'top center',
                    end: 'bottom top',
                    scrub: 1
                }
            });
        } else {
            // Set all elements visible for reduced motion
            gsap.set([
                '.hero-tag', '.hero-text', '.hero-desc', '.hero-btns', 
                '.hero-sneaker', '.hero-stat-card'
            ], { opacity: 1, y: 0, scale: 1 });
        }

        // Scroll-triggered animations
        if (!prefersReducedMotion) {
            // Section animations
            const animateSection = (selector, trigger) => {
                gsap.to(selector, {
                    scrollTrigger: {
                        trigger: trigger || selector,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            };
            
            animateSection('.section-label');
            animateSection('.section-title');
            animateSection('.section-link');
            
            // Products stagger
            gsap.to('.product-card', {
                scrollTrigger: {
                    trigger: '#productsGrid',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: 'power3.out'
            });
            
            // Story section
            animateSection('.story-label');
            animateSection('.story-title');
            animateSection('.story-text');
            animateSection('.story-stat');
            
            gsap.to('.story-image', {
                scrollTrigger: {
                    trigger: '.story-image',
                    start: 'top 75%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out'
            });
            
            // Tech section
            animateSection('.tech-label');
            animateSection('.tech-title');
            
            gsap.to('.tech-card', {
                scrollTrigger: {
                    trigger: '.tech-card',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: 'power3.out'
            });
            
            // Newsletter section
            animateSection('.newsletter-label');
            animateSection('.newsletter-title');
            animateSection('.newsletter-text');
            animateSection('.newsletter-form');
            
            // Story image parallax
            gsap.to('.story-image img', {
                y: -60,
                scrollTrigger: {
                    trigger: '.story-image',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            });
            
        } else {
            // Set all elements visible
            gsap.set([
                '.section-label', '.section-title', '.section-link',
                '.product-card', '.story-label', '.story-title',
                '.story-text', '.story-stat', '.story-image',
                '.tech-label', '.tech-title', '.tech-card',
                '.newsletter-label', '.newsletter-title', '.newsletter-text', '.newsletter-form'
            ], { opacity: 1, y: 0, scale: 1 });
        }

        // Keyboard accessibility
        document.querySelectorAll('.product-card').forEach((card, i) => {
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'article');
            card.setAttribute('aria-label', products[i].name);
            
            card.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const btn = card.querySelector('button');
                    if (btn) btn.click();
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
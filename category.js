 const menProducts = [
            { id: 1, name: 'ULTRA BOOST 24', category: 'Running', price: '$189.99', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', filter: 'running' },
            { id: 2, name: 'NMD R1 V3', category: 'Lifestyle', price: '$159.99', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80', filter: 'lifestyle' },
            { id: 3, name: 'ALPHABOOST V1', category: 'Running', price: '$169.99', image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&q=80', filter: 'running' },
            { id: 4, name: 'CRAZY TRAINING', category: 'Training', price: '$129.99', image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&q=80', filter: 'training' },
            { id: 5, name: 'SAMBA OG', category: 'Lifestyle', price: '$99.99', image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80', filter: 'lifestyle' },
            { id: 6, name: '4DFWD 2', category: 'Running', price: '$219.99', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80', filter: 'running' },
            { id: 7, name: 'FORUM LOW', category: 'Lifestyle', price: '$109.99', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80', filter: 'lifestyle' },
            { id: 8, name: 'DROPSET TRAINER', category: 'Training', price: '$119.99', image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80', filter: 'training' }
        ];

        const womenProducts = [
            { id: 1, name: 'ULTRA BOOST 24 W', category: 'Running', price: '$179.99', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80', filter: 'running' },
            { id: 2, name: 'STAN SMITH W', category: 'Lifestyle', price: '$99.99', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80', filter: 'lifestyle' },
            { id: 3, name: 'ADIZERO SL W', category: 'Running', price: '$139.99', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80', filter: 'running' },
            { id: 4, name: 'STUDIO LUXE', category: 'Studio', price: '$129.99', image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80', filter: 'studio' },
            { id: 5, name: 'GAZELLE W', category: 'Lifestyle', price: '$109.99', image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&q=80', filter: 'lifestyle' },
            { id: 6, name: 'ULTRABOOST LIGHT', category: 'Running', price: '$189.99', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', filter: 'running' },
            { id: 7, name: 'GRAND COURT W', category: 'Lifestyle', price: '$89.99', image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&q=80', filter: 'lifestyle' },
            { id: 8, name: 'FLOW MOTION W', category: 'Studio', price: '$139.99', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80', filter: 'studio' }
        ];

        const kidsProducts = [
            { id: 1, name: 'ULTRA BOOST K', category: 'Junior', price: '$109.99', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', filter: 'junior' },
            { id: 2, name: 'SAMBA K', category: 'Preschool', price: '$69.99', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80', filter: 'preschool' },
            { id: 3, name: 'FORUM K', category: 'Junior', price: '$89.99', image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&q=80', filter: 'junior' },
            { id: 4, name: 'SUPERSTAR T', category: 'Toddler', price: '$49.99', image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80', filter: 'toddler' },
            { id: 5, name: 'NMD R1 K', category: 'Junior', price: '$99.99', image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&q=80', filter: 'junior' },
            { id: 6, name: 'STAN SMITH K', category: 'Preschool', price: '$59.99', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80', filter: 'preschool' }
        ];

        const runningProducts = [
            { id: 1, name: 'ADIZERO ADIOS PRO 3', category: 'Elite Racing', price: '$249.99', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80' },
            { id: 2, name: 'ULTRA BOOST 24', category: 'Daily Running', price: '$189.99', image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&q=80' },
            { id: 3, name: '4DFWD 2', category: 'Performance', price: '$219.99', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80' },
            { id: 4, name: 'ADIZERO SL', category: 'Speed', price: '$139.99', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80' }
        ];

        const basketballProducts = [
            { id: 1, name: 'HARDEN VOL. 8', category: 'Performance', price: '$159.99', image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&q=80' },
            { id: 2, name: 'DAME 9', category: 'Explosive', price: '$129.99', image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80' },
            { id: 3, name: 'FORUM LOW', category: 'Lifestyle', price: '$109.99', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80' },
            { id: 4, name: 'CRAZYFLIGHT', category: 'Court', price: '$139.99', image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80' }
        ];

        const originalsProducts = [
            { id: 1, name: 'SAMBA OG', category: 'Classic', price: '$99.99', image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80' },
            { id: 2, name: 'GAZELLE', category: 'Heritage', price: '$109.99', image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&q=80' },
            { id: 3, name: 'CAMPUS 80S', category: 'Retro', price: '$119.99', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80' },
            { id: 4, name: 'FORUM BONEGA', category: 'Basketball Heritage', price: '$129.99', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80' }
        ];

        // Render Product Card
        function renderProductCard(product, container) {
            const card = document.createElement('div');
            card.className = 'product-card group opacity-0';
            card.setAttribute('data-filter', product.filter || 'all');
            card.innerHTML = `
                <div class="relative aspect-square bg-gradient-to-br from-card to-bg rounded-xl overflow-hidden mb-4">
                    <img 
                        src="${product.image}" 
                        alt="${product.name}" 
                        class="product-image w-full h-full object-cover"
                        loading="lazy"
                    >
                    <div class="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <button class="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 magnetic-btn sm text-xs py-2.5 px-5">
                        <span>Add to Cart</span>
                    </button>
                </div>
                <div class="product-info px-1">
                    <p class="text-[8px] text-muted uppercase tracking-[0.2em] mb-1.5">${product.category}</p>
                    <h3 class="font-display text-sm lg:text-base mb-1">${product.name}</h3>
                    <p class="text-muted text-sm">${product.price}</p>
                </div>
            `;
            container.appendChild(card);
        }

        // Render all products
        const menGrid = document.getElementById('menGrid');
        const womenGrid = document.getElementById('womenGrid');
        const kidsGrid = document.getElementById('kidsGrid');
        const runningGrid = document.getElementById('runningGrid');
        const basketballGrid = document.getElementById('basketballGrid');
        const originalsGrid = document.getElementById('originalsGrid');

        menProducts.forEach(p => renderProductCard(p, menGrid));
        womenProducts.forEach(p => renderProductCard(p, womenGrid));
        kidsProducts.forEach(p => renderProductCard(p, kidsGrid));
        runningProducts.forEach(p => renderProductCard(p, runningGrid));
        basketballProducts.forEach(p => renderProductCard(p, basketballGrid));
        originalsProducts.forEach(p => renderProductCard(p, originalsGrid));

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
                .to('.hero-btns', { opacity: 1, y: 0, duration: 0.8 }, '-=0.4');
        } else {
            gsap.set([
                '.hero-tag', '.hero-text', '.hero-desc', '.hero-btns'
            ], { opacity: 1, y: 0 });
        }

        // Scroll-triggered animations
        function animateSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (!section) return;

            if (!prefersReducedMotion) {
                gsap.to(section.querySelector('.section-label'), {
                    scrollTrigger: { trigger: section, start: 'top 80%' },
                    opacity: 1, y: 0, duration: 0.6
                });
                gsap.to(section.querySelector('.section-title'), {
                    scrollTrigger: { trigger: section, start: 'top 80%' },
                    opacity: 1, y: 0, duration: 0.8, delay: 0.1
                });
                gsap.to(section.querySelector('.section-filters'), {
                    scrollTrigger: { trigger: section, start: 'top 80%' },
                    opacity: 1, y: 0, duration: 0.6, delay: 0.2
                });
                gsap.to(section.querySelectorAll('.product-card'), {
                    scrollTrigger: { trigger: section.querySelector('.product-card')?.parentElement, start: 'top 85%' },
                    opacity: 1, y: 0, duration: 0.5, stagger: 0.08
                });
                gsap.to(section.querySelector('.section-cta'), {
                    scrollTrigger: { trigger: section.querySelector('.section-cta'), start: 'top 90%' },
                    opacity: 1, y: 0, duration: 0.6
                });
            } else {
                gsap.set([
                    section.querySelector('.section-label'),
                    section.querySelector('.section-title'),
                    section.querySelector('.section-filters'),
                    section.querySelector('.section-cta')
                ], { opacity: 1, y: 0 });
                gsap.set(section.querySelectorAll('.product-card'), { opacity: 1, y: 0 });
            }
        }

        animateSection('men');
        animateSection('women');
        animateSection('kids');

        // Sports section animations
        if (!prefersReducedMotion) {
            gsap.to('#sports .section-label', {
                scrollTrigger: { trigger: '#sports', start: 'top 80%' },
                opacity: 1, y: 0, duration: 0.6
            });
            gsap.to('#sports .section-title', {
                scrollTrigger: { trigger: '#sports', start: 'top 80%' },
                opacity: 1, y: 0, duration: 0.8, delay: 0.1
            });
            gsap.to('.sport-card', {
                scrollTrigger: { trigger: '.sport-card', start: 'top 85%' },
                opacity: 1, scale: 1, duration: 0.7, stagger: 0.12
            });
            gsap.to('.sport-products-title', {
                scrollTrigger: { trigger: '.sport-products-title', start: 'top 90%' },
                opacity: 1, y: 0, duration: 0.6, stagger: 0.1
            });
        } else {
            gsap.set(['#sports .section-label', '#sports .section-title', '.sport-card', '.sport-products-title'], { opacity: 1, y: 0, scale: 1 });
        }

        // Brands section animations
        if (!prefersReducedMotion) {
            gsap.to('#brands .section-label', {
                scrollTrigger: { trigger: '#brands', start: 'top 80%' },
                opacity: 1, y: 0, duration: 0.6
            });
            gsap.to('#brands .section-title', {
                scrollTrigger: { trigger: '#brands', start: 'top 80%' },
                opacity: 1, y: 0, duration: 0.8, delay: 0.1
            });
            gsap.to('#brands .section-desc', {
                scrollTrigger: { trigger: '#brands', start: 'top 80%' },
                opacity: 1, y: 0, duration: 0.6, delay: 0.2
            });
            gsap.to('.brand-logo', {
                scrollTrigger: { trigger: '.brand-logo', start: 'top 85%' },
                opacity: 1, scale: 1, duration: 0.5, stagger: 0.08
            });
            gsap.to('.brand-products-title', {
                scrollTrigger: { trigger: '.brand-products-title', start: 'top 90%' },
                opacity: 1, y: 0, duration: 0.6
            });
        } else {
            gsap.set(['#brands .section-label', '#brands .section-title', '#brands .section-desc', '.brand-logo', '.brand-products-title'], { opacity: 1, y: 0, scale: 1 });
        }

        // Filter functionality
        document.querySelectorAll('.section-filters').forEach(filterGroup => {
            const buttons = filterGroup.querySelectorAll('.filter-btn');
            const grid = filterGroup.closest('section').querySelector('[id$="Grid"]');
            
            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    buttons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    const filter = btn.dataset.filter;
                    const cards = grid.querySelectorAll('.product-card');
                    
                    cards.forEach(card => {
                        if (filter === 'all' || card.dataset.filter === filter) {
                            gsap.to(card, { opacity: 1, scale: 1, duration: 0.3 });
                            card.style.pointerEvents = 'auto';
                        } else {
                            gsap.to(card, { opacity: 0.2, scale: 0.95, duration: 0.3 });
                            card.style.pointerEvents = 'none';
                        }
                    });
                });
            });
        });

        // Sport card hover effect
        document.querySelectorAll('.sport-card').forEach(card => {
            card.addEventListener('click', () => {
                const sportType = card.id.replace('sport-', '');
                const targetGrid = document.getElementById(sportType + 'Grid');
                if (targetGrid) {
                    targetGrid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        });

        // Category tabs active state
        const categoryLinks = document.querySelectorAll('.category-tab');
        const sections = ['men', 'women', 'kids', 'sports', 'brands'];

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(id => {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        current = id;
                    }
                }
            });

            categoryLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });

        // Keyboard accessibility
        document.querySelectorAll('.product-card').forEach(card => {
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'article');
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
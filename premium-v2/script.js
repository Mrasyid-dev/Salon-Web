document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('open');
            
            // Stagger mobile links when opening
            if (mobileMenu.classList.contains('open')) {
                mobileLinks.forEach((link, index) => {
                    link.style.transitionDelay = `${index * 80}ms`;
                });
            } else {
                mobileLinks.forEach(link => {
                    link.style.transitionDelay = '0ms';
                });
            }
        });

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('open');
            });
        });
    }

    // 2. Navbar Scroll Behavior
    const navbar = document.getElementById('navbar');
    const contactSection = document.getElementById('contact');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Dark Navbar Check for Contact Section using IntersectionObserver
    if (navbar && contactSection) {
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.body.classList.add('dark-nav-active');
                } else {
                    document.body.classList.remove('dark-nav-active');
                }
            });
        }, { threshold: 0.1, rootMargin: "-10% 0px -90% 0px" });
        
        navObserver.observe(contactSection);
    }

    // 3. Scroll Trigger Animations (Intersection Observer)
    const setupIntersectionObserver = () => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const animationObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    
                    // Apply delay if specified
                    const delay = el.getAttribute('data-delay');
                    if (delay) {
                        el.style.transitionDelay = `${delay}ms`;
                    }

                    // Add in-view class to trigger CSS animation
                    el.classList.add('in-view');
                    
                    // Unobserve after triggering (runs only once)
                    observer.unobserve(el);
                }
            });
        }, observerOptions);

        // Observe elements with animate-up
        document.querySelectorAll('.animate-up').forEach(el => {
            animationObserver.observe(el);
        });

        // Observe elements with image-reveal
        document.querySelectorAll('.image-reveal').forEach(el => {
            animationObserver.observe(el);
        });
    };

    setupIntersectionObserver();

    // 4. Parallax Hero Effect
    const heroBg = document.querySelector('.parallax-bg img');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            // Apply a simple parallax transform
            // Moving at 40% of scroll speed
            const scrollPos = window.scrollY;
            if (scrollPos < window.innerHeight) { // Only calculate when hero is in view
                heroBg.style.transform = `translateY(${scrollPos * 0.4}px)`;
            }
        });
    }
});

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.05)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Parallax for Lenis and ScrollTrigger integration
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


// Animations

// Hero Title Animation
gsap.from(".hero-title", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    delay: 0.2
});

gsap.from(".hero-left .btn", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    delay: 0.6
});

gsap.from(".hero-right", {
    x: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    delay: 0.4
});

// Parallax for images
gsap.utils.toArray('.parallax-img').forEach(img => {
    gsap.to(img, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
});

// Philosophy text reveal
gsap.from(".philosophy-text > *", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".philosophy",
        start: "top 75%"
    }
});

// Philosophy images reveal
gsap.from(".gallery-col img", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".philosophy",
        start: "top 60%"
    }
});

// Portfolio text
gsap.from(".portfolio-text > *", {
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".portfolio",
        start: "top 70%"
    }
});

// Products text
gsap.from(".products-text > *", {
    x: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".products",
        start: "top 70%"
    }
});

// Services Grid Reveal
gsap.from(".service-item", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%"
    }
});

// Hours fade in
gsap.from(".hours > *", {
    x: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".info",
        start: "top 70%"
    }
});

// Calendar fade in
gsap.from(".calendar", {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".info",
        start: "top 70%"
    }
});

// Footer elements
gsap.from(".footer-top > *", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".footer",
        start: "top 80%"
    }
});

gsap.from(".footer-gallery img", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".footer-gallery",
        start: "top 90%"
    }
});

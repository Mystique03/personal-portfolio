// src/utils/animations.js

// Fade in animation variants for Framer Motion (if we add it later)
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// CSS class helpers for animations
export const animationClasses = {
  // Fade in on scroll
  fadeInUp: 'opacity-0 translate-y-8 transition-all duration-700 ease-out',
  fadeInUpVisible: 'opacity-100 translate-y-0',
  
  // Card hover effects
  cardHover: 'transition-all duration-300 ease-out hover:scale-[1.02]',
  
  // Smooth transitions
  smooth: 'transition-all duration-300 ease-in-out',
  
  // Button magnetic effect
  magnetic: 'transition-transform duration-200 ease-out',
};

// Intersection Observer options for scroll animations
export const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};
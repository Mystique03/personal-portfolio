// src/data/themes.js
export const themes = {
  dark: {
    name: 'dark',
    // Backgrounds
    bg: 'bg-neutral-800',
    bgSoft: 'bg-neutral-800',
    bgTranslucent: 'bg-neutral-800/75',
    
    // Text colors
    text: 'text-neutral-300',
    textBright: 'text-neutral-100',
    textDim: 'text-neutral-500',
    textMedium: 'text-neutral-300',
    
    // Accent colors - Burgundy theme
    accent: 'text-rose-800',
    accentHover: 'hover:text-rose-900',
    accentBright: 'text-rose-600',
    
    // Cards & Interactions
    cardHover: 'lg:group-hover:bg-red-900/20',
    cardBg: 'bg-neutral-800',
    cardBorder: 'border-neutral-800',
    
    // Tags & Badges
    tagBg: 'bg-rose-950',
    tagText: 'text-neutral-200',
    tagHover: 'hover:bg-rose-900',
    
    // Navigation
    navActive: 'bg-rose-700',
    navInactive: 'bg-neutral-700',
    navActiveText: 'text-rose-600',
    
    // Borders
    border: 'border-rose-700',
    borderDim: 'border-neutral-800',
    
    // Input fields
    inputBg: 'bg-neutral-900',
    inputBorder: 'border-neutral-700',
    inputFocus: 'focus:border-rose-950',
    
    // Special effects
    shadow: 'shadow-rose-900/10',
    glow: 'shadow-lg shadow-rose-900/20',
    
    // Loading & Progress
    progressBg: 'bg-neutral-800',
    progressBar: 'bg-gradient-to-r from-rose-800 via-rose-700 to-rose-600'
  },
  
  light: {
    name: 'light',
    // Backgrounds
    bg: 'bg-stone-50',
    bgSoft: 'bg-stone-100',
    bgTranslucent: 'bg-stone-50/75',
    
    // Text colors
    text: 'text-stone-700',
    textBright: 'text-stone-900',
    textDim: 'text-stone-500',
    textMedium: 'text-stone-800',
    
    // Accent colors - Sage/Olive Green
    accent: 'text-green-800',
    accentHover: 'hover:text-green-800',
    accentBright: 'text-green-600',
    
    // Cards & Interactions
    cardHover: 'lg:group-hover:bg-green-100/80',
    cardBg: 'bg-white',
    cardBorder: 'border-stone-200',
    
    // Tags & Badges
    tagBg: 'bg-green-100',
    tagText: 'text-green-950',
    tagHover: 'hover:bg-green-950/10',
    
    // Navigation
    navActive: 'bg-green-700',
    navInactive: 'bg-stone-300',
    navActiveText: 'text-green-900',
    
    // Borders
    border: 'border-green-900',
    borderDim: 'border-stone-300',
    
    // Input fields
    inputBg: 'bg-white',
    inputBorder: 'border-stone-300',
    inputFocus: 'focus:border-green-700',
    
    // Special effects
    shadow: 'shadow-green-900/10',
    glow: 'shadow-lg shadow-green-900/20',
    
    // Loading & Progress
    progressBg: 'bg-stone-200',
    progressBar: 'bg-gradient-to-r from-green-700 via-green-600 to-green-500'
  }
};
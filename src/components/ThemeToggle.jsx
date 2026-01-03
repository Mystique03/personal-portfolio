// src/components/ThemeToggle.jsx
import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ isDark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        {/* Sun icon */}
        <Sun 
          className={`absolute inset-0 h-6 w-6 text-white transition-all duration-500 ${
            isDark 
              ? 'rotate-90 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        
        {/* Moon icon */}
        <Moon 
          className={`absolute inset-0 h-6 w-6 text-white transition-all duration-500 ${
            isDark 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
      
      {/* Ripple effect on click */}
      <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-110 transition-transform duration-300" />
    </button>
  );
};

export default ThemeToggle;
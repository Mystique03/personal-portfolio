// src/components/ScrollProgress.jsx
import React, { useState, useEffect } from 'react';

const ScrollProgress = ({ theme }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800/20 z-50">
      <div
        className="h-full bg-gradient-to-r from-emerald-500 via-blue-500 to-rose-600 transition-all duration-150 ease-out shadow-lg shadow-emerald-500/50"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
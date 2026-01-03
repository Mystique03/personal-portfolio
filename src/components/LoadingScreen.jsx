// src/components/LoadingScreen.jsx
import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadComplete, theme }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadComplete(), 300);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${theme.bg} transition-opacity duration-500 ${progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center">
        {/* Logo - SR */}
        <div className={`mb-8 text-6xl font-bold ${theme.textBright} tracking-tighter`}>
          <span className={theme.accent}>S</span>
          <span className={theme.textBright}>R</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className={`h-1 ${theme.progressBg} rounded-full overflow-hidden`}>
            <div 
              className={`h-full ${theme.progressBar} transition-all duration-300 ease-out`}
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
// src/components/TypeWriter.jsx
import React, { useState, useEffect } from 'react';

const TypeWriter = ({ text, speed = 80, theme }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={theme.textBright}>
      {displayText}
      {!isComplete && (
        <span className={`${theme.accent} animate-pulse`}>|</span>
      )}
    </span>
  );
};

export default TypeWriter;
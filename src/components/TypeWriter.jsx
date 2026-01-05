// src/components/TypeWriter.jsx
import React, { useState, useEffect, useRef } from 'react';

const TypeWriter = ({ text, speed = 80, theme }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (currentIndex < text.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true);
    }

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, text, speed, isComplete]);

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
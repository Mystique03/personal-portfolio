// src/components/SpotlightEffect.jsx
import React from 'react';
import { useMousePosition } from '../utils/hooks';

const SpotlightEffect = ({ spotlightColor }) => {
  const mousePosition = useMousePosition();

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent 80%)`
      }}
    />
  );
};

export default SpotlightEffect;
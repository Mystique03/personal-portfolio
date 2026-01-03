// src/components/Footer.jsx
import { HeartOff } from 'lucide-react';
import React from 'react';

const Footer = ({ theme }) => {
  return (
    <footer className={`max-w-md pb-16 text-sm ${theme.textDim}`}>
      <p>
        Built with React & Tailwind CSS. Deployed on Vercel. Design loosely inspired by 
        <a href="https://brittanychiang.com/" 
        className={`text-sm ml-1 ${theme.textDim} hover:underline`} 
        target="_blank" 
        rel="noopener noreferrer">
            Brittany Chiang</a>.        
            <br />© {new Date().getFullYear()} Smitha Reddy.
      </p>
    </footer>
  );
};

export default Footer;
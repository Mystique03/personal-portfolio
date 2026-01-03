// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { themes } from './data/themes';
import ThemeToggle from './components/ThemeToggle';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Archive from './pages/Archive';
import Blog from './pages/Blog';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const currentTheme = themes[isDark ? 'dark' : 'light'];

  // Detect system preference on mount
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} theme={currentTheme} />}
      
      <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} font-sans transition-colors duration-500`}>
        {/* Theme Toggle Button */}
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

        {/* Scroll Progress Bar */}
        <ScrollProgress theme={currentTheme} />

        {/* Back to Top Button */}
        <BackToTop theme={currentTheme} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home theme={currentTheme} />} />
          <Route path="/archive" element={<Archive theme={currentTheme} />} />
          <Route path="/blog" element={<Blog theme={currentTheme} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
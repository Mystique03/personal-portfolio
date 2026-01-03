// src/pages/Home.jsx
import React from 'react';
import { useActiveSection } from '../utils/hooks';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Research from '../components/Research';
import Awards from '../components/Awards';
import Footer from '../components/Footer';

const Home = ({ theme }) => {
  const sections = ['about', 'experience', 'projects', 'research', 'awards'];
  const activeSection = useActiveSection(sections);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Left column - Fixed */}
        <Header activeSection={activeSection} theme={theme} sections={sections} />

        {/* Right column - Scrollable content */}
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <About theme={theme} />
          <Experience theme={theme} />
          <Projects theme={theme} />
          <Research theme={theme} />
          <Awards theme={theme} />
          <Footer theme={theme} />
        </main>
      </div>
    </div>
  );
};

export default Home;
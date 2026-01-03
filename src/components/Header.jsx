// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';

const Header = ({ activeSection, theme, sections }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className={`text-4xl font-bold tracking-tight ${theme.textBright} sm:text-5xl`}>
          Smitha Reddy
        </h1>
        <h2 className={`mt-3 text-lg font-medium tracking-tight ${theme.textBright} sm:text-xl`}>
          ML Engineer & Researcher
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build models for Vision, Language, and Beyond.
        </p>

        {/* Navigation - NO BLOG HERE */}
        <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
          <ul className="w-max">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`group flex items-center py-3 ${
                    activeSection === section ? 'active' : ''
                  }`}
                >
                  <span
                    className={`nav-indicator mr-4 h-px transition-all ${
                      activeSection === section
                        ? `w-16 ${theme.navActive}`
                        : `w-8 ${theme.navInactive} group-hover:w-16 group-hover:${theme.navActive}`
                    }`}
                  />
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest ${
                      activeSection === section
                        ? theme.textBright
                        : `${theme.textDim} group-hover:${theme.textBright}`
                    }`}
                  >
                    {section}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social links - BLOG IS HERE */}
      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        <li>
          <a
            href="https://github.com/Mystique03"
            target="_blank"
            rel="noreferrer"
            className={`block ${theme.accentHover} transition-colors`}
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/smitha-reddy-s/"
            target="_blank"
            rel="noreferrer"
            className={`block ${theme.accentHover} transition-colors`}
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="mailto:smithasreddy13@gmail.com"
            className={`block ${theme.accentHover} transition-colors`}
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </li>
        <li>
          <Link
            to="/blog"
            className={`block ${theme.accentHover} transition-colors`}
            aria-label="Blog"
          >
            <BookOpen className="h-6 w-6" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
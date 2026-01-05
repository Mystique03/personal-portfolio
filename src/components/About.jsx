// src/components/About.jsx
import React, { useState, useEffect, useRef } from 'react';
import TypeWriter from './TypeWriter';

const About = ({ theme }) => {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const hasCheckedStorage = useRef(false);

  useEffect(() => {
    if (hasCheckedStorage.current) return;
    hasCheckedStorage.current = true;

    const hasSeenTypewriter = sessionStorage.getItem('typewriterShown');
    
    if (!hasSeenTypewriter) {
      setShowTypewriter(true);
      // Set flag after typewriter has had time to start
      setTimeout(() => {
        sessionStorage.setItem('typewriterShown', 'true');
      }, 200);
    } else {
      // Returning visitor - skip typewriter
      setShowTypewriter(false);
    }
  }, []);

  return (
    <section id="about" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen ${theme.bgTranslucent} px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0`}>
        <h2 className={`text-sm font-bold uppercase tracking-widest ${theme.textBright} lg:sr-only`}>
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          {showTypewriter ? (
            <TypeWriter text="Hello!" speed={100} theme={theme} />
          ) : (
            <span className={theme.textBright}>Hello!</span>
          )}
          {" "}
          <br />I'm Smitha, and I've been fascinated by Artificial Intelligence for as long as I can remember. 
          Growing up watching Marvel movies, I dreamed of building an intelligent assistant like JARVIS—I'd name mine{' '}
          <span className={`${theme.accent} font-medium`}>Mystique</span>. 
          That curiosity led me down the rabbit hole of lectures by Fei-Fei Li, Geoffrey Hinton, and Andrew Ng.
        </p>
        <p className="mb-4">
          Fast-forward to today: I work on{' '}
          <span className={`${theme.textBright} font-medium`}>Machine Learning</span> and{' '}
          <span className={`${theme.textBright} font-medium`}>AI projects</span> spanning{' '}
          <span className={`${theme.textBright} font-medium`}>Computer Vision</span>,{' '}
          <span className={`${theme.textBright} font-medium`}>Generative AI</span>,{' '}
          <span className={`${theme.textBright} font-medium`}>Natural Language Processing</span>,{' '}
          <span className={`${theme.textBright} font-medium`}>Robotics</span>, and{' '}
          <span className={`${theme.textBright} font-medium`}>Data-Driven Systems</span>. 
        </p>
        <p>
          My research interests include{' '}
          <span className={`${theme.textBright} font-medium`}>Deep Learning</span>,{' '}
          <span className={`${theme.textBright} font-medium`}>Computer Vision</span>, and{' '}
          <span className={`${theme.textBright} font-medium`}>Multi-modal Learning</span>. 
          I'm particularly interested in exploring how visual and contextual information can enhance visual understanding and spatial intelligence.
          I enjoy going deep into concepts, understanding the math behind models, and turning ideas into systems that actually work.
        </p>
        <p>
          <br />When I'm not neck-deep in models and experiments, you'll find me binging 
          {' '}<span className={`${theme.accent} font-medium`}>Anime </span> 
          or keeping up with{' '}<span className={`${theme.accent} font-medium`}>Formula 1</span>.
        </p>
      </div>
    </section>
  );
};

export default About;
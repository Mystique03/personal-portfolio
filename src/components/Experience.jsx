// src/components/Experience.jsx
import React from 'react';
import { FileText, GraduationCap, Briefcase } from 'lucide-react';
import { experiences } from '../data/experiences';

const Experience = ({ theme }) => {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen ${theme.bgTranslucent} px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0`}>
        <h2 className={`text-sm font-bold uppercase tracking-widest ${theme.textBright}`}>
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block ${theme.cardHover} lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg`} />
                <header className={`z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide ${theme.textDim} sm:col-span-2`}>
                  {exp.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className={`font-medium leading-snug ${theme.textBright}`}>
                    <div>
                      <span className={`inline-flex items-baseline font-medium leading-tight ${theme.textBright} ${theme.accentHover} focus-visible:${theme.accent} group/link text-base`}>
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>{exp.title} · {exp.company}</span>
                      </span>
                    </div>
                  </h3>
                  <p className={`text-sm ${theme.textDim} mb-2`}>{exp.location}</p>
                  
                  {Array.isArray(exp.description) ? (
                    <ul className="mt-2 space-y-2">
                      {exp.description.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="text-sm leading-normal flex">
                          <span className={`mr-2 ${theme.accent}`}>•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-sm leading-normal">{exp.description}</p>
                  )}
                  
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.tags.map((tag, tagIndex) => (
                      <li key={tagIndex} className="mr-1.5 mt-2">
                        <div className={`flex items-center rounded-full ${theme.tagBg} px-3 py-1 text-xs font-medium leading-5 ${theme.tagText}`}>
                          {tag}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        
        {/* Two Resume Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="/academic-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center font-medium leading-tight ${theme.textBright} group`}
          >
            <span className={`border-b border-transparent pb-px transition ${theme.accent} group-hover:border-current group-focus-visible:border-current`}>
              Academic CV
            </span>
            <GraduationCap className={`ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none ${theme.accent}`} />
          </a>
          
          <a
            href="/job-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center font-medium leading-tight ${theme.textBright} group`}
          >
            <span className={`border-b border-transparent pb-px transition ${theme.accent} group-hover:border-current group-focus-visible:border-current`}>
              Job Resume
            </span>
            <Briefcase className={`ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none ${theme.accent}`} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;

// src/components/Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { featuredProjects } from '../data/projects';

const Projects = ({ theme }) => {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
                    <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen ${theme.bgTranslucent} px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0`}>
        <h2 className={`text-sm font-bold uppercase tracking-widest ${theme.textBright}`}>
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {featuredProjects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block ${theme.cardHover} lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg`} />
                <div className="z-10 sm:col-span-8">
                  <h3 className={`font-medium leading-snug ${theme.textBright}`}>
                    <div>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex items-baseline font-medium leading-tight ${theme.textBright} ${theme.accentHover} focus-visible:${theme.accent} group/link text-base`}
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                          <span>{project.title}</span>
                          <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                        </a>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{project.description}</p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.tags.map((tag, tagIndex) => (
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
        </ul>
        
        {/* View Full Archive Link */}
        <div className="mt-12">
          <Link
            to="/archive"
            className={`inline-flex items-center font-medium leading-tight ${theme.textBright} group`}
          >
            <span className={`border-b border-transparent pb-px transition group-hover:${theme.border}`}>
              View Full Project Archive
            </span>
            <ArrowRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
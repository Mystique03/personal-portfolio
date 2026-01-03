// src/components/Research.jsx
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { publications } from '../data/publications';

const Research = ({ theme }) => {
  return (
    <section id="research" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
                    <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen ${theme.bgTranslucent} px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0`}>
        <h2 className={`text-sm font-bold uppercase tracking-widest ${theme.textBright}`}>
          Research & Publications
        </h2>
      </div>
      <div>
        <p className="mb-8 text-sm">
          My research interests include Machine Learning, Computer Vision, Multimodal Learning, Deep Reinforcement Learning, and Agentic AI.
        </p>
        <ol className="group/list">
          {publications.map((pub, index) => (
            <li key={index} className="mb-8">
              <div className="group relative grid pb-1 transition-all sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block ${theme.cardHover} lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg`} />
                <div className="z-10">
                  <h3 className={`font-medium leading-snug ${theme.textBright} mb-1`}>
                    {pub.link ? (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-baseline font-medium leading-tight ${theme.textBright} ${theme.accentHover} focus-visible:${theme.accent} group/link`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>{pub.title}</span>
                        <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                      </a>
                    ) : (
                      <span>{pub.title}</span>
                    )}
                  </h3>
                  <p className={`text-sm ${theme.textMedium} mb-1`}>{pub.authors}</p>
                  <p className={`text-sm ${theme.textDim}`}>
                    {pub.venue ? `${pub.venue} · ${pub.year}` : `${pub.status} · ${pub.year}`}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Research;
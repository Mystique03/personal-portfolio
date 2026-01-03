// src/components/Awards.jsx
import React from 'react';
import { Award, Trophy, Star, ExternalLink } from 'lucide-react';
import { awards } from '../data/awards';

const Awards = ({ theme }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'award':
        return <Trophy className="h-5 w-5" />;
      case 'scholarship':
        return <Star className="h-5 w-5" />;
      case 'certification':
        return <Award className="h-5 w-5" />;
      default:
        return <Award className="h-5 w-5" />;
    }
  };

  return (
    <section id="awards" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className={`sticky top-0 z-20 -mx-6 mb-4 w-screen ${theme.bgTranslucent} px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0`}>
        <h2 className={`text-sm font-bold uppercase tracking-widest ${theme.textBright}`}>
          Awards & Recognition
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {awards.map((award, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block ${theme.cardHover} lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg`} />
                
                <header className={`z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide ${theme.textDim} sm:col-span-2 flex items-center gap-2`}>
                  <span className={theme.accent}>
                    {getIcon(award.type)}
                  </span>
                  {award.year}
                </header>
                
                <div className="z-10 sm:col-span-6">
                  <h3 className={`font-medium leading-snug ${theme.textBright}`}>
                    <div>
                      {award.link ? (
                        <a
                          href={award.link}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex items-baseline font-medium leading-tight ${theme.textBright} ${theme.accentHover} focus-visible:${theme.accent} group/link text-base`}
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                          <span>{award.title}</span>
                          <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                        </a>
                      ) : (
                        <span className="inline-flex items-baseline font-medium leading-tight group/link text-base">
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                          <span>{award.title}</span>
                        </span>
                      )}
                    </div>
                  </h3>
                  <p className={`text-sm ${theme.textDim} mb-2 font-medium`}>{award.organization}</p>
                  <p className="mt-2 text-sm leading-normal">{award.description}</p>
                  
                  {/* Badge for type */}
                  <div className="mt-2">
                    <span className={`inline-flex items-center rounded-full ${theme.tagBg} px-3 py-1 text-xs font-medium ${theme.tagText} capitalize`}>
                      {award.type}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Awards;
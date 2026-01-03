// src/pages/Archive.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { allProjects } from '../data/projects';

const Archive = ({ theme }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = allProjects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text}`}>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24">
        {/* Back to Home */}
        <Link
          to="/"
          className={`inline-flex items-center font-medium leading-tight ${theme.accent} ${theme.accentHover} group mb-8`}
        >
          <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
          Smitha Reddy
        </Link>

        {/* Header */}
        <h1 className={`text-4xl font-bold tracking-tight ${theme.textBright} sm:text-5xl mb-4`}>
          All Projects
        </h1>
        <p className={`${theme.textMedium} mb-8 max-w-lg`}>
          A complete archive of all my projects, experiments, and contributions.
        </p>

        {/* Search Bar */}
        <div className="mb-12">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full max-w-md px-4 py-2 rounded-lg bg-transparent border ${theme.textDim} ${theme.textBright} focus:outline-none focus:border-current`}
            style={{ borderColor: 'currentColor' }}
          />
        </div>

        {/* Projects Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead className="sticky top-0 z-10 border-b px-6 py-5 backdrop" style={{ backgroundColor: `${theme.bg}e6` }}>
              <tr>
                <th className={`py-4 pr-8 text-sm font-semibold ${theme.textBright}`}>Year</th>
                <th className={`py-4 pr-8 text-sm font-semibold ${theme.textBright}`}>Project</th>
                <th className={`hidden py-4 pr-8 text-sm font-semibold ${theme.textBright} lg:table-cell`}>Made at</th>
                <th className={`hidden py-4 pr-8 text-sm font-semibold ${theme.textBright} lg:table-cell`}>Built with</th>
                <th className={`py-4 text-sm font-semibold ${theme.textBright}`}>Link</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project, index) => (
                <tr key={index} className="border-b border-slate-800/10 last:border-none">
                  <td className={`py-4 pr-4 align-top text-sm ${theme.textDim}`}>
                    {project.year}
                  </td>
                  <td className="py-4 pr-4 align-top">
                    <div>
                      <div className={`font-semibold leading-snug ${theme.textBright}`}>
                        {project.title}
                      </div>
                      <div className={`text-sm ${theme.textMedium} mt-1 lg:hidden`}>
                        {project.madeAt && <span className="block">{project.madeAt}</span>}
                        <span className="block mt-1">
                          {project.tags.map((tag, i) => (
                            <span key={i}>
                              {tag}
                              {i < project.tags.length - 1 && ' · '}
                            </span>
                          ))}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className={`hidden py-4 pr-4 align-top text-sm ${theme.textMedium} lg:table-cell`}>
                    {project.madeAt || '—'}
                  </td>
                  <td className="hidden py-4 pr-4 align-top lg:table-cell">
                    <ul className="flex flex-wrap">
                      {project.tags.map((tag, tagIndex) => (
                        <li key={tagIndex} className="mr-1.5 mt-2">
                          <div className={`flex items-center rounded-full ${theme.tagBg} px-3 py-1 text-xs font-medium leading-5 ${theme.tagText}`}>
                            {tag}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-4 align-top">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center ${theme.accent} ${theme.accentHover}`}
                        aria-label={`${project.title} (opens in a new tab)`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className={theme.textDim}>—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className={`text-center py-12 ${theme.textMedium}`}>
            No projects found matching "{searchTerm}"
          </div>
        )}

        {/* Footer */}
        <footer className={`mt-24 text-sm ${theme.textDim}`}>
          <p>
            {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} total
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Archive;
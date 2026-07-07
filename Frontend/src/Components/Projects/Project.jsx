import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../../assets/main.js'
import Reveal from '../Reveal.jsx'

const featuredTitles = ['Medical Store', 'AI PLAY STORE', 'E-commerce website', 'ChaT-GPT Clone']

const Project = () => {
  const featuredProjects = featuredTitles
    .map((title) => projects.find((project) => project.title === title))
    .filter(Boolean)

  return (
    <section id="projects" className="bg-[#f8fbff] px-5 pb-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-extrabold text-slate-950">My Projects</h2>
            <p className="mt-2 text-sm text-slate-500">A quick look at some featured work</p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm shadow-blue-200 transition hover:bg-blue-700"
          >
            View All Projects <i className="bi bi-arrow-right-short ml-1 text-lg" />
          </Link>
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <img src={project.image} alt={project.title} className="h-32 w-full object-cover" />

              <div className="p-4">
                <h3 className="text-sm font-extrabold text-slate-900">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">{project.discreption}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs font-bold">
                  <a href={project.webiste || project.github || '#'} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-700">
                    Live Demo <i className="bi bi-arrow-up-right ml-1" />
                  </a>
                  <a href={project.github || project.webiste || '#'} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-700">
                    GitHub <i className="bi bi-arrow-up-right ml-1" />
                  </a>
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project

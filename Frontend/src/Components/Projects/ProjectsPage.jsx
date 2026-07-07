import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../../assets/main.js'
import Reveal from '../Reveal.jsx'

const ProjectsPage = () => {
  return (
    <section className="bg-[#f8fbff] px-5 py-10">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <Link to="/" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700">
              <i className="bi bi-arrow-left-short mr-1 text-xl" />
              Back to Home
            </Link>
            <h1 className="mt-3 text-4xl font-extrabold text-slate-950">All Projects</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              A complete collection of my web apps, clones, tools, and experiments.
            </p>
          </div>

          <div className="rounded-lg border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-blue-600 shadow-sm">
            <i className="bi bi-grid-fill mr-2" />
            {projects.length} Projects
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 6) * 75} className="h-full">
              <article className="flex h-[470px] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex w-full flex-col">
                  <img src={project.image} alt={project.title} className="h-44 w-full shrink-0 object-cover" />

                  <div className="flex min-h-0 flex-1 flex-col p-5">
                    <h2 className="line-clamp-1 text-lg font-extrabold text-slate-950">{project.title}</h2>
                    <p className="mt-3 line-clamp-3 min-h-[72px] text-sm leading-6 text-slate-500">{project.discreption}</p>

                    <div className="mt-4 flex min-h-[64px] flex-wrap content-start gap-2 overflow-hidden">
                      {project.tools.slice(0, 6).map((tool) => (
                        <span key={tool} className="h-7 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto grid grid-cols-2 gap-3 pt-5">
                      {project.webiste ? (
                        <a
                          href={project.webiste}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-4 text-sm font-bold text-white transition hover:bg-blue-700"
                        >
                          Live Demo <i className="bi bi-arrow-up-right ml-2" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="inline-flex h-11 cursor-not-allowed items-center justify-center rounded-md bg-slate-100 px-4 text-sm font-bold text-slate-400"
                          title="Live demo link not added yet"
                        >
                          Live Demo <i className="bi bi-lock-fill ml-2" />
                        </button>
                      )}

                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-11 items-center justify-center rounded-md border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
                        >
                          GitHub <i className="bi bi-github ml-2" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="inline-flex h-11 cursor-not-allowed items-center justify-center rounded-md border border-slate-200 bg-slate-50 px-4 text-sm font-bold text-slate-400"
                          title="GitHub link not added yet"
                        >
                          GitHub <i className="bi bi-lock-fill ml-2" />
                        </button>
                      )}
                    </div>
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

export default ProjectsPage

import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../Reveal.jsx'

const Footer = () => {
  return (
    <section id="connect" className="bg-[#f8fbff] px-5 py-10">
      <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-lg border border-blue-100 bg-white shadow-sm">
        <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
          <div>
            <p className="text-sm font-bold text-blue-600">Let&apos;s Connect</p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-950">Have an idea or opportunity?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              I&apos;m open to internships, freelance projects, collaborations, and full stack web development work.
              Send me a message and I&apos;ll get back to you.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row md:flex-col">
            <Link
              to="/connect"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm shadow-blue-200 transition hover:bg-blue-700"
            >
              Open Connect Form <i className="bi bi-arrow-right-short ml-1 text-lg" />
            </Link>
            <a
              href="mailto:sriharierukala@gmail.com"
              className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
            >
              Email Me <i className="bi bi-envelope-fill ml-2" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Footer

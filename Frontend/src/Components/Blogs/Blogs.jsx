import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../Reveal.jsx'

const Blogs = () => {
  return (
    <section className="grid min-h-screen place-items-center bg-[#f8fbff] px-5">
      <Reveal className="max-w-md rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold text-blue-600">Collections</p>
        <h1 className="mt-2 text-3xl font-extrabold text-slate-950">Coming Soon</h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          This page is ready for your blogs, certificates, and saved work.
        </p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700">
          Back to Portfolio
        </Link>
      </Reveal>
    </section>
  )
}

export default Blogs

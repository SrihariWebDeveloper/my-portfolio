import React from 'react'
import { education } from '../../assets/main.js'

const Education = () => {
  return (
    <section className="bg-[#f8fbff] px-5 py-10">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-extrabold text-slate-950">Education</h2>
        <div className="mt-5 space-y-4">
          {education.map((item) => (
            <article key={`${item.name}-${item.class}`} className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="h-12 w-12 rounded-md object-cover" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{item.name}</h3>
                  <p className="text-xs text-slate-500">{item.class}</p>
                </div>
              </div>
              <p className="text-xs font-bold text-blue-600">{item.year}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

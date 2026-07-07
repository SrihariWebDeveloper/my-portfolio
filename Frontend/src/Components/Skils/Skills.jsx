import React from 'react'
import Reveal from '../Reveal.jsx'

const skills = [
  { name: 'React.js', icon: 'bi-atom', color: 'text-sky-600 bg-sky-50 border-sky-100' },
  { name: 'Next.js', icon: 'bi-triangle-fill', color: 'text-slate-700 bg-slate-50 border-slate-100' },
  { name: 'JavaScript', icon: 'bi-filetype-js', color: 'text-yellow-600 bg-yellow-50 border-yellow-100' },
  { name: 'TypeScript', icon: 'bi-filetype-tsx', color: 'text-blue-600 bg-blue-50 border-blue-100' },
  { name: 'HTML5', icon: 'bi-filetype-html', color: 'text-orange-600 bg-orange-50 border-orange-100' },
  { name: 'CSS3', icon: 'bi-filetype-css', color: 'text-indigo-600 bg-indigo-50 border-indigo-100' },
  { name: 'Tailwind CSS', icon: 'bi-wind', color: 'text-cyan-600 bg-cyan-50 border-cyan-100' },
  { name: 'Bootstrap', icon: 'bi-bootstrap-fill', color: 'text-violet-600 bg-violet-50 border-violet-100' },
  { name: 'Node.js', icon: 'bi-node-plus', color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
  { name: 'Express.js', icon: 'bi-hdd-network', color: 'text-slate-700 bg-slate-50 border-slate-100' },
  { name: 'REST APIs', icon: 'bi-diagram-3', color: 'text-blue-600 bg-blue-50 border-blue-100' },
  { name: 'MongoDB', icon: 'bi-database-fill', color: 'text-green-600 bg-green-50 border-green-100' },
  { name: 'MySQL', icon: 'bi-database', color: 'text-blue-600 bg-blue-50 border-blue-100' },
  { name: 'Python', icon: 'bi-filetype-py', color: 'text-amber-600 bg-amber-50 border-amber-100' },
  { name: 'Java', icon: 'bi-cup-hot-fill', color: 'text-red-600 bg-red-50 border-red-100' },
  { name: 'Git', icon: 'bi-git', color: 'text-orange-600 bg-orange-50 border-orange-100' },
  { name: 'GitHub', icon: 'bi-github', color: 'text-slate-800 bg-slate-50 border-slate-100' },
  { name: 'Docker', icon: 'bi-box-seam', color: 'text-blue-600 bg-blue-50 border-blue-100' },
  { name: 'AWS', icon: 'bi-cloud-fill', color: 'text-orange-600 bg-orange-50 border-orange-100' },
  { name: 'Machine Learning', icon: 'bi-cpu-fill', color: 'text-purple-600 bg-purple-50 border-purple-100' },
  { name: 'OpenCV', icon: 'bi-camera-fill', color: 'text-rose-600 bg-rose-50 border-rose-100' },
  { name: 'VS Code', icon: 'bi-code-square', color: 'text-blue-600 bg-blue-50 border-blue-100' },
  { name: 'Postman', icon: 'bi-send-fill', color: 'text-orange-600 bg-orange-50 border-orange-100' },
  { name: 'Figma', icon: 'bi-vector-pen', color: 'text-pink-600 bg-pink-50 border-pink-100' },
  { name: 'DSA', icon: 'bi-braces', color: 'text-indigo-600 bg-indigo-50 border-indigo-100' },
  { name: 'DBMS', icon: 'bi-table', color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
]

const learning = ['Kubernetes', 'Google Cloud', 'Agent Development Kit', 'Advanced DevOps', 'System Design']

const Skills = () => {
  return (
    <section id="skills" className="bg-[#f8fbff] px-5 py-9">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-2xl font-extrabold text-slate-950">Skills</h2>
          <p className="mt-2 text-sm text-slate-500">Technologies, tools, and concepts I work with</p>
        </Reveal>

        <Reveal delay={120} className="mt-7 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <Reveal
                key={skill.name}
                delay={(index % 8) * 55}
                className="flex min-h-14 items-center gap-3 rounded-lg border border-slate-100 bg-white px-3 py-2.5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-md border text-lg ${skill.color}`}>
                  <i className={`bi ${skill.icon}`} />
                </span>
                <span className="text-sm font-bold text-slate-700">{skill.name}</span>
              </Reveal>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 rounded-lg bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-2 text-blue-600">
              <i className="bi bi-stars text-base" />
              Always Learning
            </span>
            {learning.map((item) => (
              <span key={item} className="rounded-full bg-white px-3 py-1.5 shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Skills

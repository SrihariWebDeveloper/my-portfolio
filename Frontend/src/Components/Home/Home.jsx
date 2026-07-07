import React from 'react'
import MyImage from '../../assets/my-image.jpg'
import Footer from '../Footer/Footer.jsx'
import Project from '../Projects/Project.jsx'
import Reveal from '../Reveal.jsx'
import Skills from '../Skils/Skills.jsx'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/erukala-srihari-675a42285/', icon: 'bi-linkedin' },
  { label: 'GitHub', href: 'https://github.com/SrihariWebDeveloper', icon: 'bi-github' },
  { label: 'Discord', href: 'https://discord.gg/JrHmCCG', icon: 'bi-discord' },
  { label: 'Instagram', href: 'https://www.instagram.com/srihariwebdeveloper__17', icon: 'bi-instagram' },
  { label: 'YouTube', href: 'https://www.youtube.com/@SrihariWebDeveloper', icon: 'bi-youtube' },
]

const Home = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute right-10 top-10 hidden h-24 w-24 bg-[radial-gradient(#bfd6ff_1px,transparent_1px)] [background-size:10px_10px] md:block" />
        <div className="absolute bottom-12 right-20 hidden h-20 w-20 bg-[radial-gradient(#bfd6ff_1px,transparent_1px)] [background-size:10px_10px] md:block" />

        <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-6 py-10 md:grid md:grid-cols-[1.05fr_0.95fr] md:px-10 lg:px-14">
          <Reveal direction="right" className="w-full">
            <p className="text-sm font-medium text-slate-600">Hello 👋, I'm</p>
            <h1 className="mt-1 text-5xl font-extrabold leading-none tracking-normal text-slate-950 sm:text-6xl">
              Srihari <span className="text-blue-600">Erukala</span>
            </h1>
            <p className="mt-3 text-lg font-semibold text-slate-700">
              Computer Science & Engineering <span className="text-blue-600">(AI/ML)</span> Student
            </p>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600">
              Passionate frontend developer and full stack enthusiast who loves building responsive,
              user-friendly web applications and turning ideas into real-world solutions.
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-700">
              <span className="text-blue-600">Frontend Developer</span> | Full Stack Developer | UI Designer | Video & Photo Editor
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-600">
              <i className="bi bi-geo-alt-fill text-blue-600" />
              JNTUH (UCEW), Wanaparthy College of Engineering
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-md border border-slate-200 bg-white text-[17px] text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600"
                >
                  <i className={`bi ${item.icon}`} />
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-200 transition hover:bg-blue-700">
                View My Work <i className="bi bi-arrow-right-short ml-1" />
              </a>
              <a href="#" className="rounded-md border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:border-blue-500 hover:bg-blue-50">
                Download Resume <i className="bi bi-download ml-1" />
              </a>
            </div>
          </Reveal>

          <Reveal direction="left" delay={150} className="relative flex w-full justify-center md:justify-end">
            <div className="avatar-ring absolute top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-blue-200" />
            <div className="avatar-ring avatar-ring-delay absolute top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-blue-100" />
            <span className="absolute left-10 top-1/2 hidden h-3 w-3 rounded-full bg-blue-600 md:block" />
            <span className="absolute right-0 top-1/2 hidden h-2 w-2 rounded-full bg-blue-600 md:block" />
            <img
              src={MyImage}
              alt="Srihari Erukala"
              className="avatar-float relative h-72 w-72 rounded-full border-[10px] border-white object-cover shadow-[0_18px_45px_rgba(37,99,235,0.22)] ring-2 ring-blue-200 sm:h-80 sm:w-80"
            />
          </Reveal>
        </div>
      </section>

      <Skills />
      <Project />
      <Footer />
    </>
  )
}

export default Home

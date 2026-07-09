import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../Reveal.jsx'

const Connect = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const mailSubject = encodeURIComponent(form.subject || 'Portfolio connect request')
  const mailBody = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
  )

  return (
    <section className="min-h-screen bg-[#f8fbff] px-5 py-10">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <Link to="/" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700">
              <i className="bi bi-arrow-left-short mr-1 text-xl" />
              Back to Home
            </Link>
            <h1 className="mt-3 text-4xl font-extrabold text-slate-950">Let&apos;s Connect</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Share your project, opportunity, or question. I&apos;ll reply as soon as I can.
            </p>
          </div>

          <div className="rounded-lg border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-blue-600 shadow-sm">
            <i className="bi bi-chat-dots-fill mr-2" />
            Open for collaboration
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal delay={100} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold text-slate-950">Contact Details</h2>
            <div className="mt-6 space-y-4">
              <a href="mailto:sriharierukala@gmail.com" className="flex items-center gap-3 rounded-lg bg-slate-50 p-4 text-sm font-semibold text-slate-700 hover:text-blue-600">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-blue-50 text-blue-600">
                  <i className="bi bi-envelope-fill" />
                </span>
                sriharidev07@gmail.com
              </a>
              <a href="tel:+918121647190" className="flex items-center gap-3 rounded-lg bg-slate-50 p-4 text-sm font-semibold text-slate-700 hover:text-blue-600">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-blue-50 text-blue-600">
                  <i className="bi bi-telephone-fill" />
                </span>
                +91 99081 80521
              </a>
              <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-blue-50 text-blue-600">
                  <i className="bi bi-geo-alt-fill" />
                </span>
              Peddapalli , Telangana, India
              </div>
            </div>
          </Reveal>

          <Reveal delay={180} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-slate-700">
                  Name
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="h-12 rounded-md border border-slate-200 px-4 text-sm font-medium outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-700">
                  Email
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="h-12 rounded-md border border-slate-200 px-4 text-sm font-medium outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Subject
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project, internship, collaboration..."
                  className="h-12 rounded-md border border-slate-200 px-4 text-sm font-medium outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-slate-700">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me what you want to build..."
                  rows="6"
                  className="resize-none rounded-md border border-slate-200 p-4 text-sm font-medium outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <a
                href={`mailto:sriharierukala@gmail.com?subject=${mailSubject}&body=${mailBody}`}
                className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-bold text-white shadow-sm shadow-blue-200 transition hover:bg-blue-700"
              >
                Send Message <i className="bi bi-send-fill ml-2" />
              </a>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Connect

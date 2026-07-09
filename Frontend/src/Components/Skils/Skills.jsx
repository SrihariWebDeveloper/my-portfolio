import React from "react";
import Reveal from "../Reveal.jsx";
import { GrReactjs } from "react-icons/gr";
import { BsJavascript } from "react-icons/bs";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoFlask } from "react-icons/bi";
import { SiMongodb, SiSqlite } from "react-icons/si";
import { IoIosGitNetwork } from "react-icons/io"; //api
import { FaGitAlt, FaJava, FaPython } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGithubactions } from "react-icons/si";
import { MdOutlineWebhook } from "react-icons/md";
import { GrDocker } from "react-icons/gr";
import { FaJenkins } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
// React.js • JavaScript • TypeScript (Learning) • 
// Tailwind CSS • Node.js • Express.js • Flask • MongoDB • 
// REST APIs • JWT • Git • GitHub • Docker • Jenkins • AWS •
//  CI/CD • Google Gemini API • Google ADK • OpenAI API • Postman

const skills = [
  {
    name: "React.js",
    icon: <GrReactjs/>,
    color: "text-sky-600 bg-sky-50 border-sky-100",
  },
  {
    name: "JavaScript",
    icon: <BsJavascript/>,
    color: "text-yellow-600 bg-yellow-50 border-yellow-100",
  },
  {
    name: "HTML5",
    icon: <FaHtml5/>,
    color: "text-orange-600 bg-orange-50 border-orange-100",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt/>,
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    name: "Tailwind CSS",
    icon: <BiLogoTailwindCss/>,
    color: "text-cyan-600 bg-cyan-50 border-cyan-100",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap/>,
    color: "text-violet-600 bg-violet-50 border-violet-100",
  },
  {
    name: "Node.js",
    icon: <IoLogoNodejs/>,
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    name: "REST APIs",
    icon: <IoIosGitNetwork/>,
    color: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb/>,
    color: "text-green-600 bg-green-50 border-green-100",
  },
  {
    name: "MySQL",
    icon: <SiSqlite/>,
    color: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    name: "Python",
    icon: <FaPython/>,
    color: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    name: "Flask",
    icon: <BiLogoFlask/>,
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    name: "Java",
    icon: <FaJava/>,
    color: "text-red-600 bg-red-50 border-red-100",
  },
  {
    name: "Git",
    icon: <FaGitAlt/>,
    color: "text-orange-600 bg-orange-50 border-orange-100",
  },
  {
    name: "GitHub",
    icon: <FaGithub/>,
    color: "text-slate-800 bg-slate-50 border-slate-100",
  },
  {
    name: "Docker",
    icon: <GrDocker/>,
    color: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    name: "Jenkins",
    icon: <FaJenkins/>,
    color: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    name: "AWS",
    icon: <FaAws/>,
    color: "text-orange-600 bg-orange-50 border-orange-100",
  },
  {
    name: "Webhook",
    icon: <MdOutlineWebhook/>,
    color: "text-purple-600 bg-purple-50 border-purple-100",
  },
  {
    name: "Github Actions",
    icon: <SiGithubactions/>,
    color: "text-rose-600 bg-rose-50 border-rose-100",
  },
  {
    name: "VS Code",
    icon: <VscVscode/>,
    color: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    name: "Postman",
    icon: <SiPostman/>,
    color: "text-orange-600 bg-orange-50 border-orange-100",
  },
  {
    name: "Figma",
    icon: <FaFigma/>,
    color: "text-pink-600 bg-pink-50 border-pink-100",
  }
];

const learning = [
  "Kubernetes",
  "AWS",
  "DSA",
  "Agent Development Kit(Google ADK)",
  "Advanced DevOps",
  "System Design",
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#f8fbff] px-5 py-9">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-2xl font-extrabold text-slate-950">Skills</h2>
          <p className="mt-2 text-sm text-slate-500">
            Technologies, tools, and concepts I work with
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-7 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:p-6"
        >
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <Reveal
                key={skill.name}
                delay={(index % 8) * 55}
                className="flex min-h-14 items-center gap-3 rounded-lg border border-slate-100 bg-white px-3 py-2.5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-md border text-lg ${skill.color}`}
                >
                  {skill.icon}
                </span>
                <span className="text-sm font-bold text-slate-700">
                  {skill.name}
                </span>
              </Reveal>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 rounded-lg bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-2 text-blue-600">
              <i className="bi bi-stars text-base" />
              Always Learning
            </span>
            {learning.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-3 py-1.5 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;

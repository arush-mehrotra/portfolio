"use client"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

import FIFA from "../../images/fifa.jpeg"
import AIRBNB from "../../images/airbnb.png"
import LINUX from "../../images/linux.png"
import PFJ from "../../images/pfj.png"
import CC from "../../images/CC.png"
import NUMBERLINK from "../../images/numberlink.png"
import ASSIST from "../../images/asis&t.jpg"

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Photos", href: "/photos" },
]

// Reorganized projects by category
const projectCategories = {
  "Apps": [
    {
      title: "Numberlink Solver",
      date: "Sep - Dec 2024",
      description:
        "Built an interactive Numberlink puzzle platform with a React frontend and FastAPI backend. Users can generate, solve, and create custom puzzles.",
      tags: ["FastAPI", "Constraint Programming", "SAT Solvers", "Python"],
      image: NUMBERLINK,
      link: "#",
    },
    {
      title: "PennOS",
      date: "April - May 2024",
      description: "Developed a single-core operating system with a FAT-based filesystem, kernel, and scheduler.",
      tags: ["C", "POSIX Library"],
      image: LINUX,
      link: "#",
    },
    {
      title: "FIFA Database Application",
      date: "April - May 2023",
      description: "Built a web app to analyze football players and teams across leagues and seasons.",
      tags: ["ReactJS", "AWS RDS", "Auth0", "Axios"],
      image: FIFA,
      link: "#",
    },
    {
      title: "CommonCents Web Application",
      date: "Sep - Dec 2021",
      description:
        "Developed a gamified edtech platform for teaching personal finance. CommonCents serves 1600+ students across 8 campuses.",
      tags: ["ReactJS", "Node", "Express", "MongoDB"],
      image: CC,
      link: "#",
    },
  ],
  "ML Projects": [
    {
      title: "Partners for Justice",
      date: "Feb - May 2024",
      description: "Created a tool to automate data analysis for advocate databases in Airtable.",
      tags: ["Pandas", "Airtable", "Python"],
      image: PFJ,
      link: "#",
    },
    {
      title: "AirBnB Price Prediction",
      date: "April - May 2023",
      description: "Analyzed drivers of Airbnb prices in NYC using datasets on listings, crime, and income.",
      tags: ["Pandas", "PyTorch", "scikit-learn"],
      image: AIRBNB,
      link: "#",
    },
  ],
  "Research Experience": [
    {
      title: "FAIR Metrics for Plagiarism Detection",
      date: "Oct 2019",
      description: "Published research on developing metrics to quantify adherence to citation practices in scholarly publishing. Introduced ratio-based metrics for identifying suspicious papers during peer review.",
      tags: ["Information Science", "Metrics Development", "Academic Research"],
      image: ASSIST, 
      link: "https://doi.org/10.1002/pra2.6",
    },
  ],
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-white text-black px-4 sm:px-6 md:px-16 py-12">
      <nav className="flex items-end justify-between mb-16">
        <Link href="/" className="text-2xl font-light tracking-tight hover:text-gray-600 transition-colors inter">
          Arush Mehrotra
        </Link>
        <div className="flex items-end gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-light hover:text-gray-600 transition-colors inter"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <div className="max-w-7xl">
        <div className="space-y-16">
          {Object.entries(projectCategories).map(([category, projects]) => (
            <section key={category} className="space-y-6">
              <h2 className="text-2xl font-light inter">{category}</h2>

              {/* Horizontal scroll container for desktop */}
              <div className="hidden md:flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
                {projects.map((project, index) => (
                  <article
                    key={index}
                    className="flex-shrink-0 w-[400px] border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-[200px] bg-gray-50">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-contain"
                        fill
                        sizes="400px"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-light inter">{project.title}</h3>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-black"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                      <div className="text-sm text-gray-500 font-mono">{project.date}</div>
                      <p className="text-sm font-mono leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="text-sm font-mono text-gray-500">
                            {tag}
                            {idx !== project.tags.length - 1 && <span className="ml-2">,</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Vertical layout for mobile */}
              <div className="md:hidden space-y-6">
                {projects.map((project, index) => (
                  <article key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="relative h-[200px] bg-gray-50">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-contain"
                        fill
                        sizes="100vw"
                      />
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-light inter">{project.title}</h3>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-black"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                      <div className="text-sm text-gray-500 font-mono">{project.date}</div>
                      <p className="text-sm font-mono leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="text-sm font-mono text-gray-500">
                            {tag}
                            {idx !== project.tags.length - 1 && <span className="ml-2">,</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
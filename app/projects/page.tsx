'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FIFA from '../../images/fifa.jpeg';
import AIRBNB from '../../images/airbnb.png';
import LINUX from '../../images/linux.png';
import PFJ from '../../images/pfj.png';
import CC from '../../images/CC.png';
import NUMBERLINK from '../../images/numberlink.png';

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Photos", href: "/photos"},
]; 

const projects = [
  {
    title: 'Numberlink Solver',
    date: 'Sep - Dec 2024',
    readTime: '2-3 mins',
    description:
      'Built an interactive Numberlink puzzle platform with a React frontend and FastAPI backend. Users can generate, solve, and create custom puzzles. Developed three generators, tested three solvers, and benchmarked performance. The PycoEdgeSolver emerged as the most scalable, solving puzzles up to 10x10 grids efficiently.',
    tags: ['FastAPI', 'Constraint Programming', 'SAT Solvers', 'Python'],
    image: NUMBERLINK,
  },
  {
    title: 'PennOS',
    date: 'April - May 2024',
    readTime: '1-2 mins',
    description:
      'Developed a single-core operating system with a FAT-based filesystem, kernel, and scheduler. Implemented built-in functions and tested CPU utilization and memory leaks using Valgrind.',
    tags: ['C', 'POSIX Library'],
    image: LINUX,
  },
  {
    title: 'Partners for Justice',
    date: 'Feb - May 2024',
    readTime: '2-3 mins',
    description:
      'Created a tool to automate data analysis for advocate databases in Airtable. It calculates key metrics, reducing manual work from days to minutes, supporting Partners for Justice’s mission to reform the legal system.',
    tags: ['Pandas', 'Airtable', 'Python'],
    image: PFJ,
  },
  {
    title: 'AirBnB Price Prediction',
    date: 'April - May 2023',
    readTime: '2-3 mins',
    description:
      'Analyzed drivers of Airbnb prices in NYC using datasets on listings, crime, and income. Aggregated and merged data to understand intrinsic (e.g., room type) and external (e.g., crime rates) factors influencing pricing.',
    tags: ['Pandas', 'PyTorch', 'scikit-learn'],
    image: AIRBNB,
  },
  {
    title: 'FIFA Database Application',
    date: 'April - May 2023',
    readTime: '1-2 mins',
    description:
      'Built a web app to analyze football players and teams across leagues and seasons. Features include attribute tracking, filtering, and visual comparisons via graphs and charts.',
    tags: ['ReactJS', 'AWS RDS', 'Auth0', 'Axios'],
    image: FIFA,
  },
  {
    title: 'CommonCents Web Application',
    date: 'Sep - Dec 2021',
    readTime: '2-3 mins',
    description:
      'Developed a gamified edtech platform for teaching personal finance. CommonCents serves 1600+ students across 8 campuses, attracting 2000+ monthly visits.',
    tags: ['ReactJS', 'Node', 'Express', 'MongoDB'],
    image: CC,
  },
];

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

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl mb-4 inter">Project Portfolio</h1>
        <p className="text-lg font-mono mb-16">What I&apos;ve been up to recently</p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <article key={index} className="border border-gray-300 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-8">
                <div className="relative h-[200px] bg-gray-50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="object-contain"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-light inter">{project.title}</h2>
                  <div className="flex items-center gap-4 text-gray-500 font-mono">
                    <span>{project.date}</span>
                  </div>
                  <p className="font-mono leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="font-mono text-gray-500">
                        {tag}
                        {idx !== project.tags.length - 1 && <span className="ml-2">,</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
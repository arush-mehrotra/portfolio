'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FIFA from '../../images/fifa.jpeg';
import AIRBNB from '../../images/airbnb.png';
import LINUX from '../../images/linux.png';
import PFJ from '../../images/pfj.png';
import CC from '../../images/CC.png';

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
  { name: 'Resume', href: '/resume.pdf' },
];

const projects = [
  {
    title: 'PennOS',
    date: 'April - May 2024',
    description:
      'In this project, we successfully built a single-core operating system, with a FAT-based filesystem, a kernel, and a scheduler that correctly decides which processes to run. We have preserved the necessary abstractions between kernel, system, and user land. We have implemented a number of builtin functions that can be run from our shell and interact with the filesystem. We have tested the functionality of the entire system, including the correct CPU utilization and memory leaks using Valgrind.',
    tags: ['C', 'POSIX Library'],
    image: LINUX,
  },
  {
    title: 'Partners for Justice',
    date: 'Feb - May 2024',
    description:
      `In collaboration with Partners for Justice, a national nonprofit organization dedicated to transforming the legal system, I developed a tool that automates data analysis for advocate databases stored in Airtable. This tool addresses the challenges of manual data analysis and repetitive tasks across multiple databases as the number of advocate offices grows. Using the Airtable API, the tool pulls data from specified databases and performs queries to calculate key insights, such as the number of cases opened and the comparison between entered and provided service goals. Users can specify date ranges for targeted analysis, reducing a process that once took days to just minutes. This tool significantly enhances efficiency and accuracy in data reporting and analysis, supporting Partners for Justice's mission to save clients from incarceration and connect them with vital social services.`,
    tags: ['Pandas', 'Airtable', 'Python'],
    image: PFJ,
  },
  {
    title: 'AirBnB Price Prediction',
    date: 'April - May 2023',
    description:
      'In this project, we aimed to better understand the drivers of price for various Airbnb listings in New York City in 2019. We selected three datasets to achieve this goal. The first dataset, airbnb_ddf, contains information on price, geographical location, neighborhood, room type, reviews, and other features of Airbnb listings. The second dataset, crime_ddf, provides detailed records of various crimes committed across New York City, including their classification (felony, misdemeanor, or violation) and geographical location. The third dataset, income_df, offers data on the median household income for each of 200+ neighborhoods, adding complexity to our analysis. By aggregating these datasets and merging them, we developed a comprehensive understanding of both intrinsic factors (e.g., room type, reviews) and external factors (e.g., crime levels, income) that influence Airbnb listing prices.',
    tags: ['Pandas', 'PyTorch', 'scikit-learn'],
    image: AIRBNB,
  },
  {
    title: 'FIFA Database Application',
    date: 'April - May 2023',
    description:
      'In this project, we successfully developed a comprehensive web application for analyzing and comparing football players and teams across various leagues and seasons. The application allows users to track the yearly progression of individual attributes, such as overall rating, shooting, and dribbling, and compare multiple players and teams across these attributes. Users can filter and search for specific players and teams, with visualization features like graphs and charts to enhance comparisons.',
    tags: ['ReactJS', 'AWS RDS', 'Auth0', 'Axios'],
    image: FIFA,
  },
  {
    title: 'CommonCents Web Application',
    date: 'Sep - Dec 2021',
    description:
      'In collaboration with Penn Spark, we developed CommonCents, a gamified edtech platform designed to empower students with the knowledge to manage their money and achieve financial independence. This platform aims to make personal finance learning innovative, interesting, and inclusive for a diverse audience, ranging from high school students to undergraduates. As a team of four developers, we drove the application from development to deployment. CommonCents now attracts over 2000 monthly visits across 8 campuses and serves 1600 students.',
    tags: ['ReactJS', 'Node', 'Express', 'MongoDB'],
    image: CC,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white text-black px-6 md:px-16 py-8">
      {/* Navigation */}
      <nav className="flex flex-wrap items-center justify-between mb-8">
        {/* Logo/Name */}
        <Link href="/" className="text-lg underline mb-2 md:mb-0">
          Arush Mehrotra
        </Link>
        {/* Navigation Links */}
        <ul className="flex flex-wrap items-center space-x-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-lg text-gray-700 hover:text-black underline transition duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Projects Section */}
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 space-y-8 md:space-y-0 border border-gray-300 rounded-lg p-8 bg-gray-100 shadow-lg"
          >
            {/* Project Image */}
            <div className="flex-shrink-0 w-full md:w-64 h-40 relative">
              <Image
                src={project.image}
                alt={project.title}
                className="rounded-lg object-contain"
                fill
              />
            </div>

            {/* Project Info */}
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-500">{project.date}</p>
              <p className="text-md">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

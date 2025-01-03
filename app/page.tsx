'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import fidelity from '../images/fidelity.jpeg';
import fletch from '../images/fletch.jpeg';
import viam from '../images/viam.jpeg';
import penn from '../images/penn.jpeg';
import trueventures from '../images/trueventures.jpeg';

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Photos", href: "/photos" }
];

const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/arush-mehrotra", 
    label: "GitHub Profile" 
  },
  { 
    icon: Linkedin, 
    href: "https://linkedin.com/in/arush-mehrotra", 
    label: "LinkedIn Profile" 
  },
  { 
    icon: Twitter, 
    href: "https://twitter.com/mehrotraarush", 
    label: "X (Twitter) Profile" 
  },
];

const words = [
    {
      text: "Building",
      className: "inter"
    },
    {
      text: "human",
      className: "inter"
    },
    {
      text: "centered",
      className: "inter"
    },
    {  
      text: "technology",
      className: "inter"
    },
];

const workExperience = [
	{
	  company: "Viam",
	  position: "Software Engineer | Data & ML",
	  type: "Internship",
	  date: "May 2024 - Aug 2024",
	  description: "Developed a new data collection paradigm linking ML model outputs with edge device captures using Go, Svelte, and Python. Led a cloud migration of 70M customer files from Amazon S3 to Azure Append Blob, boosting query performance 10x.",
    logo: viam
	},
	{
	  company: "Fletch AI",
	  position: "Software Engineer",
	  type: "Internship",
	  date: "June 2023 - Aug 2023",
	  description: "Enhanced a React-based UX for 100+ trial clients, increasing engagement. Built Jest testing frameworks for code quality. Created and optimized Go API endpoints for efficient data retrieval and updates.",
    logo: fletch
	},
  {
    company: "True Ventures",
    position: "2023 Cohort Fellow",
    type: "Fellowship",
    date: "June 2023 - Aug 2023",
    description: "One of 15 fellows selected. Worked with True Ventures portfolio company (Fletch AI) as a software engineer. Conducted market research on AI trends to present to partners and investors.",
    logo: trueventures
  },
	{
	  company: "Fidelity Investments",
	  position: "Full-Stack Software Engineer",
	  type: "Internship",
	  date: "June 2022 - Aug 2022",
	  description: "Built CI/CD pipelines with Jenkins and Docker, enabling test automation for 250+ engineers. Developed dashboards with Node.js and Angular to log and analyze DevOps workflows. Automated tests using Selenium and Java.",
    logo: fidelity
	},
	{
		company: "Penn Engineering",
		position: "Teaching Assistant",
		type: "Part-Time",
		date: "Sep 2022 - Present",
		description: "TA for CIS 5450 (Big Data Analytics) and CIS 1200 (Programming Languages & Techniques). Lead weekly recitations, grade assignments, and hold office hours for 50+ students. Create and grade exams, quizzes, and projects. Mentor students in Python, Java, and SQL.",
    logo: penn
	}
  ];  

const descriptionText = `
  I am a senior pursuing a BSE and MSE in Computer & Information Science at the University of Pennsylvania. 
  I am passionate about exploring ways to use technology as a force for social good. Specifically, I recognize the 
  structural inequities that permeate the criminal justice system and want to develop human-centered technology 
  leveraging machine learning to address these disparities. This summer, I worked at Viam as a software engineering 
  intern on their Data & Machine Learning team.
`;

const articles = [
	{
		name: "LA Times",
		href: "https://www.latimes.com/socal/daily-pilot/entertainment/story/2020-09-16/student-led-nonprofit-o-c-justice-project-expands-beyond-irvine"
	},
	{
		name: "OC Register",
		href: "https://www.ocregister.com/2021/02/03/high-school-students-nonprofit-seeks-social-justice-reforms/"
	},
	{
		name: "Orange Coast Magazine (21 Gen Z Locals to Watch)",
		href: "https://orangecoast.com/news/21-gen-z-locals-to-watch"
	},
	{
		name: "Google Scholar",
		href: "https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AFix5Mbihes3R5Vt7bXiZhbAFPWgXRTCSk2Wj8qyrEjbF4LJWSWAbeBWzIJLU00QxJ1sHMI0EE-qRNL6MA7o3w&user=kzyzLqoAAAAJ"
	}
]

const topics = [
  "computer science",
  "machine learning",
  "artificial intelligence",
  "fairness",
  "ethical algorithms",
  "computer architecture",
  "distributed systems",
  "web development",
  "robotics",
];

const Navigation = React.memo(() => (
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
));
Navigation.displayName = "Navigation";

export default function Home() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black px-4 sm:px-6 md:px-16 py-12 transition-colors">
      <Navigation />

      <div className="space-y-16 max-w-4xl mx-auto">
        <section>
          <article className="space-y-2">
            <TypewriterEffectSmooth words={words} />
            <p className="text-base mt-8 font-light leading-relaxed text-gray-600 font-mono">{descriptionText}</p>
          </article>
        </section>

        <section>
          <h2 className="text-xl uppercase tracking-wide font-light mb-8 inter">Work Experience</h2>
          <div className="space-y-12">
            {workExperience.map((work, index) => (
              <div key={index} className="space-y-2">
                <div className="flex flex-col md:flex-row justify-between md:items-start">
                  <div>
                    <div className="flex items-center space-x-3">
                      <Image
                        src={work.logo}
                        alt={`${work.company} logo`}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                      <h3 className="text-xl font-light inter">{work.company}</h3>
                      {work.type && (
                        <span className="inline-block w-fit px-2 py-1 text-sm bg-gray-100 rounded-md font-mono">
                          {work.type}
                        </span>
                      )}
                    </div>
                    <p className="text-base font-light inter mt-1">{work.position}</p>
                  </div>
                  <p className="text-gray-500 font-mono mt-2 md:mt-0">{work.date}</p>
                </div>
                {/* <p className="font-mono text-gray-600 leading-relaxed">{work.description}</p> */}
              </div>
            ))}
          </div>
        </section>



        <section>
          <h2 className="text-xl uppercase tracking-wide font-light mb-8 inter">Interests</h2>
          <div className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <p
                key={topic}
                className="text-base font-light hover:text-gray-600 transition-colors font-mono"
              >
                {topic}
                {topic !== topics[topics.length - 1] && <span className="ml-3">,</span>}
              </p>
            ))}
          </div>
        </section>

		<section>
			<h2 className="text-xl uppercase tracking-wide font-light mb-8 inter">Press</h2>
			<div className="flex flex-wrap gap-3">
				{articles.map((press) => (
				<Link
					key={press.name}
					href={press.href}
					className="text-base font-light text-blue-600 underline hover:text-blue-800 transition-colors font-mono"
				>
					{press.name}
					{press !== articles[articles.length - 1] && <span className="ml-3"></span>}
				</Link>
				))}
			</div>
		</section>

        <section>
          <h2 className="text-xl uppercase tracking-wide font-light mb-8 inter">Contact</h2>
          <div className="space-y-4">
            <a
              href="mailto:arushm@seas.upenn.edu"
              className="text-base font-light hover:text-gray-600 transition-colors font-mono block"
            >
              arushm@seas.upenn.edu
            </a>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
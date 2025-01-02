'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import React from 'react';

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "/resume.pdf" },
];

const descriptionText = `
  I am a senior pursuing a BSE and MSE in Computer & Information Science at the University of Pennsylvania. 
  I am passionate about exploring ways to use technology as a force for social good. Specifically, I recognize the 
  structural inequities that permeate the criminal justice system and want to develop human-centered technology 
  leveraging machine learning to address these disparities. This summer, I worked at Viam as a software engineering 
  intern on their Data & Machine Learning team.
`;

const Navigation = React.memo(() => (
  <nav className="flex flex-wrap items-center justify-between mb-8">
    <Link href="/" className="text-lg underline mb-2 md:mb-0">
      Arush Mehrotra
    </Link>
    <ul className="flex flex-wrap items-center space-x-6">
      {navigation.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className="text-lg text-gray-700 hover:text-black underline transition duration-300"
            target={item.name === "Resume" ? "_blank" : undefined}
            rel={item.name === "Resume" ? "noopener noreferrer" : undefined}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
));
Navigation.displayName = "Navigation";

export default function Home() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
  }, [isHydrated]);

  return (
    <div className="min-h-screen bg-white text-black px-4 sm:px-6 md:px-16 py-8">
      <Navigation />

      <div className="w-7/8 sm:w-1/2 space-y-6">
	  	<h1 className="relative text-lg w-[max-content] font-semibold before:absolute before:inset-0 before:bg-white before:animate-typewriter">
			Hello, I am Arush!
		</h1>
		<p className="text-md break-words">
			{descriptionText}
		</p>
        <p className="mt-4">
          <a
            href="mailto:arushm@seas.upenn.edu"
            className="text-blue-500 hover:underline"
          >
            arushm@seas.upenn.edu
          </a>
        </p>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import React from 'react';

import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";

const navigation = [
  { name: "Projects", href: "/projects" },
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
	  className: "text-xl sm:text-4xl inter"
    },
    {
      text: "human",
	  className: "text-xl lg:text-4xl inter"
    },
    {
      text: "centered",
	  className: "text-xl lg:text-4xl inter"
    },
    {	
      text: "technology",
	  className: "text-xl lg:text-4xl inter"
    },
  ];

const descriptionText = `
  I am a senior pursuing a BSE and MSE in Computer & Information Science at the University of Pennsylvania. 
  I am passionate about exploring ways to use technology as a force for social good. Specifically, I recognize the 
  structural inequities that permeate the criminal justice system and want to develop human-centered technology 
  leveraging machine learning to address these disparities. This summer, I worked at Viam as a software engineering 
  intern on their Data & Machine Learning team.
`;

const topics = [
  "machine learning",
  "social justice",
  "technology",
  "education",
  "computer science",
  "robotics",
  "artificial intelligence",
];

const Navigation = React.memo(() => (
  <nav className="flex items-center justify-between mb-16">
    <Link href="/" className="text-3xl font-light tracking-tight hover:text-gray-600 transition-colors inter">
      Arush Mehrotra
    </Link>
    <div className="flex items-center gap-6">
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
    <div className="min-h-screen bg-white text-black px-4 sm:px-6 md:px-16 py-8 transition-colors">
      <Navigation />

      <div className="space-y-16 max-w-3xl mx-auto">
        <section>
          <article className="space-y-2">
		  	<TypewriterEffectSmooth words={words} />
            <p className="text-base mt-8C font-light leading-relaxed text-gray-600 font-mono">{descriptionText}</p>
          </article>
        </section>

        <section>
          <h2 className="text-base uppercase tracking-wide font-light mb-8 inter">Topics</h2>
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
          <h2 className="text-base uppercase tracking-wide font-light mb-8 inter">Contact</h2>
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
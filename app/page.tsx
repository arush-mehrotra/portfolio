'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

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

export default function Home() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < descriptionText.length - 1) {
        setTypedText((prev) => prev + descriptionText[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 20);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black px-4 sm:px-6 md:px-16 py-8">
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
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="w-3/4 sm:w-1/2 space-y-6">
        <h2 className="text-2xl sm:text-xl font-semibold">Hello!</h2>
        <p className="text-sm">{typedText}</p>
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

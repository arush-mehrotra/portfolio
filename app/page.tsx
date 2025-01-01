import Link from 'next/link';

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "/resume.pdf" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black px-6 md:px-16 py-8">
      {/* Navigation */}
      <nav className="flex items-center justify-between mb-8">
        {/* Logo/Name */}
        <Link href={"/"} className="text-lg underline">
          Arush Mehrotra
        </Link>
        {/* Navigation Links */}
        <ul className="flex items-center space-x-6">
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

      {/* Main Content */}
      <div className="max-w-3xl space-y-6">
        <h2 className="text-3xl font-semibold">Hello!</h2>
        <p className="text-md">
          I am a rising senior pursuing a BSE and MSE in Computer & Information Science at the University of Pennsylvania. I am passionate about exploring ways to use technology as a force for social good. Specifically, I recognize the structural inequities that permeate the criminal justice system and want to develop human-centered technology leveraging machine learning to address these disparities. This summer, I worked at Viam as a software engineering intern on their Data & Machine Learning team.
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

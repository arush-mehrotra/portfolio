import Link from "next/link";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
	{ name: "Resume", href: "/resume.pdf" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-md duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
      <h1 className="hover z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text ">
          arush mehrotra
	  </h1>
      <div className="my-16 text-center">
        <h2 className="text-m sm:text-l md:text-xl lg:text-2xl font-bold text-gray-500/100 ">
					computer science  •  university of pennsylvania 
        </h2>
      </div>
	  <div className="w-2/3 text-center">
        <p className="text-l sm:text-s md:text-m lg:text-l text-gray-500 ">
		I am a rising senior pursuing a BSE and MSE in Computer & Information Science at the University of Pennsylvania. I am passionate about exploring ways to use technology as a force for social good. Specifically, I recognize the structural inequities that permeate the criminal justice system and want to develop human-centered technology leveraging machine learning to address these disparities. This summer, I will be working at Viam as a software engineering intern on their Data & Machine Learning team.
        </p>
      </div>
    </div> 
  )
}

import { FiMail } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

export default function Contact() {
    return (
      <div className="flex flex-row items-center justify-center w-screen h-screen">
        <a href="mailto:arushm@seas.upenn.edu" className="mr-10 text-4xl"><FiMail /></a>
        <a href="https://www.linkedin.com/in/arush-mehrotra/" className="mr-10 text-4xl"><FaLinkedin /></a>
        <a href="https://github.com/arush-mehrotra" className = "text-4xl"><AiFillGithub /></a>
      </div> 
    )
  }
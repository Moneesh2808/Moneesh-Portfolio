import React from 'react';
import { personalInfo } from '../data';
import { FaGithub, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2 cursor-default">
          <img src="/logo.png" alt="Moneesh Raj" className="h-8 w-8 rounded-full shadow-md" />
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            Moneesh <span className="text-slate-900 dark:text-white">Raj</span>
          </div>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1">
          Designed & Built with <FaHeart className="text-red-500" /> by {personalInfo.name}
        </p>

        <div className="flex items-center gap-4">
          <a 
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-500 transition-colors"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

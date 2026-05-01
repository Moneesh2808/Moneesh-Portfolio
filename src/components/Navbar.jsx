import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX, HiMoon, HiSun } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Education', to: 'education' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update progress bar
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledWidth = (winScroll / height) * 100;
      const progressBar = document.getElementById("scroll-progress");
      if (progressBar) progressBar.style.width = scrolledWidth + "%";
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-5'}`}>
      <div id="scroll-progress" />
      
      <div className={`container mx-auto px-6`}>
        <div className={`p-1 rounded-2xl transition-all duration-300 ${scrolled ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-lg' : ''}`}>
          <div className="flex items-center justify-between px-4 py-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img src="/logo.png" alt="Moneesh Raj Logo" className="h-10 w-10 object-contain rounded-full shadow-lg border border-indigo-500/20" />
              <span className="text-xl font-bold tracking-wide">
                <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Moneesh</span>
                <span className="text-slate-900 dark:text-white ml-1">Raj</span>
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-sm font-medium hover:text-indigo-500 cursor-pointer transition-colors"
                  activeClass="text-indigo-500"
                >
                  {link.name}
                </Link>
              ))}
              
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-all"
              >
                {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
              </button>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-900 dark:text-white"
              >
                {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-6 right-6 p-6 glass-card border-slate-200 dark:border-slate-800/50"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-indigo-500 transition-colors"
                  activeClass="text-indigo-500"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

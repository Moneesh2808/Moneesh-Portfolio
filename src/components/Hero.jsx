import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { personalInfo } from '../data';
import { HiDownload, HiArrowRight } from 'react-icons/hi';
import { HiOutlineMail, HiArrowDown } from 'react-icons/hi';
import { FaReact, FaPython } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-indigo-500 font-semibold tracking-wider mb-2"
            >
              WELCOME TO MY WORLD
            </motion.h2>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Hi, I'm <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">{personalInfo.name}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl"
            >
              {personalInfo.title}
              <br />
              <span className="text-lg opacity-80 mt-2 block font-normal">
                {personalInfo.description}
              </span>
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <Link to="projects" smooth={true} offset={-100} duration={500}>
                <button className="btn-primary flex items-center gap-2 group">
                  View Projects
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    <HiArrowRight size={16} />
                  </motion.span>
                </button>
              </Link>
              
              <a href={personalInfo.resumeUrl} download className="btn-outline flex items-center gap-2">
                Resume <HiArrowDown size={18} />
              </a>
              
              <Link to="contact" smooth={true} offset={-100} duration={500}>
                <button className="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all font-medium">
                  Contact Me
                </button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-cyan-500/30 blur-3xl rounded-full" />
              
              {/* Image Frame */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full rounded-2xl overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-2xl group"
              >
                <img 
                  src="/profile.png" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-all duration-500" />
              </motion.div>
              
              {/* Floating Decorative Elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10], rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 glass-card flex items-center justify-center text-indigo-500 shadow-indigo-500/20"
              >
                <FaReact size={32} />
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10], rotate: [360, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 glass-card flex items-center justify-center text-cyan-500 shadow-cyan-500/20"
              >
                <FaPython size={24} />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiOutlineExternalLink, HiX } from 'react-icons/hi';

const Modal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-red-500 hover:text-white transition-all"
            >
              <HiX size={24} />
            </button>

            <div className="overflow-y-auto">
              <div className="h-64 md:h-80 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-80" 
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-indigo-600/20 to-cyan-500/20">
                      <span className="text-4xl font-bold text-indigo-500 opacity-20">{project.title}</span>
                  </div>
                )}
                <div className="absolute bottom-6 left-8 z-20">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <h3 className="text-xl font-bold mb-4 text-indigo-500">Project Overview</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
                  {project.longDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                       Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">Links</h3>
                    <div className="flex flex-col gap-3">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                            <FaGithub size={20} />
                          </div>
                          <div>
                            <p className="font-bold text-sm">Source Code</p>
                            <p className="text-xs text-slate-500">View on GitHub</p>
                          </div>
                          <HiOutlineExternalLink className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-500 dark:text-slate-400">Transforming ideas into digital reality</p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-cyan-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card group overflow-hidden"
            >
              <div className="h-64 bg-gradient-to-br from-indigo-600/10 to-cyan-500/10 relative overflow-hidden transition-all">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-indigo-500 opacity-20 group-hover:scale-110 transition-transform">{project.title}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all duration-500" />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, tIdx) => (
                    <span key={tIdx} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                      +{project.techStack.length - 3} More
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-500 transition-colors uppercase tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
                  >
                    View Details
                  </button>
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-slate-700 dark:text-slate-300"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;

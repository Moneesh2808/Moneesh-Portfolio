import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data';
import { HiOutlineAcademicCap, HiOutlineCalendar } from 'react-icons/hi';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Educational Journey</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-cyan-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 md:-translate-x-0.5" />

          <div className="space-y-12">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex items-center justify-between md:justify-normal gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-slate-900 bg-indigo-600 z-10 md:-translate-x-4 flex items-center justify-center">
                  <HiOutlineAcademicCap className="text-white" size={14} />
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 w-full md:w-[45%] glass-card p-6 border-transparent hover:border-indigo-500/30 transition-all group`}>
                  <div className="flex items-center gap-2 text-indigo-500 font-bold mb-2">
                    <HiOutlineCalendar size={18} />
                    <span className="text-sm">{item.duration}</span>
                    {item.status === 'Ongoing' && (
                      <span className="ml-2 px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 text-[10px] animate-pulse">
                        ONGOING
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1 group-hover:text-indigo-500 transition-colors">{item.degree}</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-medium mb-4">{item.institution}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-sm text-slate-500">Score</span>
                    <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                      {item.percentage}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

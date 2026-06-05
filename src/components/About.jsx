import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { HiOutlineLightBulb, HiOutlineSparkles } from 'react-icons/hi';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12 relative group"
          >
            {/* Decorative Icon */}
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-10 h-10 md:w-12 md:h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
              <HiOutlineLightBulb size={24} className="scale-75 md:scale-100" />
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg italic">
                "{personalInfo.about}"
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600">
                  <HiOutlineSparkles size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Passionate</h4>
                  <p className="text-xs text-slate-500">About Tech</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600">
                  <HiOutlineSparkles size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Dedicated</h4>
                  <p className="text-xs text-slate-500">Problem Solver</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

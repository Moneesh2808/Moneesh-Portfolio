import React from 'react';
import { motion } from 'framer-motion';
import { softSkills } from '../data';

const SoftSkills = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Strengths</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-cyan-500 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {softSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  delay: idx * 0.1 
                }}
                animate={{ 
                  y: [0, -10, 0],
                  transition: { 
                    duration: 4 + idx, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }
                }}
                className="px-8 py-4 glass-card border-slate-200 dark:border-slate-800 text-lg font-bold text-slate-700 dark:text-slate-300 shadow-indigo-500/5 hover:shadow-cyan-500/20 transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default SoftSkills;

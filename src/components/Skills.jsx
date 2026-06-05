import React from 'react';
import { motion } from 'framer-motion';
import { skills, softSkills } from '../data';
import { HiOutlineCheckCircle } from 'react-icons/hi';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-slate-500 dark:text-slate-400">My toolkit for building amazing solutions</p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-cyan-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {skills.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-card p-6 border-transparent hover:border-indigo-500/30 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold mb-6 text-indigo-500 group-hover:text-cyan-500 transition-colors">
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {category.items.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={sIdx}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 w-24 hover:shadow-indigo-500/20 transition-all"
                    >
                      <Icon size={28} style={{ color: skill.color }} />
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400 text-center">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {softSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-4 glass-card rounded-2xl hover:border-indigo-500/30 transition-colors group"
              >
                <HiOutlineCheckCircle className="text-indigo-500 group-hover:text-cyan-500 transition-colors" size={24} />
                <span className="font-medium text-slate-700 dark:text-slate-300">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data';
import { FaTrophy } from 'react-icons/fa';

const Achievements = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Milestones & Achievements</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-cyan-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-8 border-transparent hover:border-cyan-500/30 transition-all text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-indigo-600/20 group-hover:rotate-12 transition-transform">
                <FaTrophy size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{item.title}</h3>
              <p className="text-indigo-500 font-bold mb-4">{item.year}</p>
              <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

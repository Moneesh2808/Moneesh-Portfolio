import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data';
import { HiOutlineBadgeCheck } from 'react-icons/hi';

const Certifications = () => {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Experience</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-cyan-500 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 flex items-start gap-4 hover:border-indigo-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <HiOutlineBadgeCheck size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">{cert.provider}</p>
                  {cert.duration && (
                    <p className="text-xs font-semibold text-indigo-500">{cert.duration}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Certifications;

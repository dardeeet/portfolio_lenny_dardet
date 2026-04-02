import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-slate-900/50" style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Expériences Professionnelles</h2>
          <p className="mt-4 text-xl" style={{ color: 'var(--text-muted)' }}>
            Mon parcours dans le monde du travail et mes stages.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto before:absolute before:left-[1.25rem] before:top-4 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-indigo-500/50 before:via-indigo-500/50 before:to-transparent"
        >
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={cardVariants}
              className="relative pl-10 mb-12 last:mb-0"
            >
              {/* Timeline marker */}
              <div className="absolute left-0 top-1 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border z-10" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-slate)' }}>
                <Briefcase size={16} className="text-primary" style={{ color: 'var(--primary)' }} />
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'var(--border)' }}>
                <div className="flex flex-wrap justify-between items-start gap-y-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <div className="text-lg font-medium text-primary mt-1" style={{ color: 'var(--primary)' }}>{exp.company}</div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', color: '#818cf8', borderColor: 'rgba(99, 102, 241, 0.2)' }}>
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>
                
                <p className="mb-4" style={{ color: 'var(--text-muted)' }}>{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-xs px-2 py-1 rounded bg-slate-800/80 border border-white/5" 
                      style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', borderColor: 'var(--border)' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

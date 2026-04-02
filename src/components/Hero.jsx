import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import profilePhoto from '../assets/photo_sans_fond.png';

const Hero = () => {
  const { personalInfo } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border" style={{ borderColor: 'var(--border)', color: 'var(--primary)' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--primary)' }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'var(--primary)' }}></span>
            </span>
            {personalInfo.lookingFor || "Disponible pour nouveaux projets"}
          </motion.div>

          <motion.h1 variants={itemVariants} className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
            Bonjour, je suis <span className="text-primary" style={{ color: 'var(--primary)' }}>{personalInfo.name}</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6 text-xl max-w-lg" style={{ color: 'var(--text-muted)' }}>
            <span className="text-white font-bold">{personalInfo.title}</span>. {personalInfo.description}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95"
              style={{ backgroundColor: 'var(--primary)', color: '#fff' }}>
              Voir mes projets
              <MousePointer2 className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <div className="flex items-center gap-4 ml-2">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border hover:bg-white/5 transition-all" style={{ borderColor: 'var(--border)' }}>
                <GithubIcon size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border hover:bg-white/5 transition-all" style={{ borderColor: 'var(--border)' }}>
                <LinkedinIcon size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-3 rounded-xl border hover:bg-white/5 transition-all" style={{ borderColor: 'var(--border)' }}>
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Background design elements - hidden or simplified on mobile */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20 md:animate-pulse" style={{ background: 'linear-gradient(45deg, var(--primary), #8b5cf6)' }}></div>

            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 z-10" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-slate)' }}>
              {/* Fallback pattern if image is missing */}
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold opacity-10">LD</div>
              <img
                src={profilePhoto}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-slate-800 border backdrop-blur-xl z-20" style={{ backgroundColor: 'rgba(30, 41, 59, 0.4)', borderColor: 'var(--border)' }}>
              <div className="text-3xl font-bold">Pro</div>
              <div className="text-xs uppercase tracking-widest opacity-60">Full Stack</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

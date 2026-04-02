import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

// Importing images for Vite to handle them correctly
import cabinetMedicalImg from '../assets/cabinet_medical.png';
import suiviFormationImg from '../assets/suivi_formation.png';
import webCryptoImg from '../assets/web_crypto.png';
import guichetBancaireImg from '../assets/guichet_bancaire.png'; 

const Projects = () => {
    const { projects } = portfolioData;

    // Mapping images as they need to be imported in Vite
    const projectImages = {
        "Cabinet Médical (PHP)": cabinetMedicalImg,
        "Suivi de Formation (Spring Boot)": suiviFormationImg,
        "Web Crypto (SAE)": webCryptoImg,
        "Guichet Bancaire (Windev)": guichetBancaireImg,
        "NSICA (Projet Startup)": null // Placeholder for now
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-slate-900/30" style={{ backgroundColor: 'rgba(15, 23, 42, 0.3)' }}>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Mes Projets Marquants</h2>
                    <p className="mt-4 text-xl" style={{ color: 'var(--text-muted)' }}>
                        Une sélection de mes travaux, de mes projets universitaires à mes réalisations professionnelles.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            variants={cardVariants}
                            className="group relative rounded-3xl overflow-hidden bg-slate-800 border border-white/5 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2"
                            style={{ backgroundColor: 'var(--bg-slate)', borderColor: 'var(--border)' }}
                        >
                            <div className="aspect-video overflow-hidden relative">
                                {projectImages[project.title] ? (
                                    <img
                                        src={projectImages[project.title]}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                                         <Code size={48} className="opacity-20" />
                                    </div>
                                )}
                                
                                {project.tags && (
                                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <p className="mb-6 line-clamp-3 text-slate-400" style={{ color: 'var(--text-muted)' }}>
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-4">
                                    {project.link !== "#" ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                                            style={{ color: 'var(--primary)' }}
                                        >
                                            <GithubIcon size={18} />
                                            Voir sur GitHub
                                            <ExternalLink size={14} />
                                        </a>
                                    ) : (
                                        <span className="text-sm font-medium opacity-50 italic">Project interne professionnel</span>
                                    )}
                                </div>
                            </div>
                            
                            {/* Decorative overlay */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-500/20 backdrop-blur-md p-2 rounded-full border border-indigo-500/30"
                                 style={{ backgroundColor: 'rgba(99, 102, 241, 0.2)', borderColor: 'rgba(99, 102, 241, 0.3)' }}>
                                <Code size={16} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 p-10 rounded-3xl text-center border-2 border-dashed border-white/10"
                    style={{ borderColor: 'var(--border)' }}
                >
                    <h3 className="text-2xl font-bold mb-4">Envie d'en voir plus ?</h3>
                    <p className="mb-8" style={{ color: 'var(--text-muted)' }}>Retrouvez l'intégralité de mes travaux sur mon profil GitHub.</p>
                    <a 
                        href="https://github.com/dardeeet" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 border border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10"
                        style={{ borderColor: 'rgba(99, 102, 241, 0.5)', color: '#818cf8', display: 'inline-flex' }}
                    >
                        <GithubIcon size={20} />
                        Mon GitHub Personnel
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

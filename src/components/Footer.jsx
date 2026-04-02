import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
    const { personalInfo } = portfolioData;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="pt-24 pb-12 px-6 md:px-12 border-t" style={{ borderColor: 'var(--border)' }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold tracking-tighter mb-4">
                            Prenons <span className="text-primary" style={{ color: 'var(--primary)' }}>Contact</span>
                        </h2>
                        <p className="text-xl max-w-md mb-8" style={{ color: 'var(--text-muted)' }}>
                            Je suis ouvert aux opportunités d'alternance, de projets ou simplement pour échanger sur le développement.
                        </p>
                        
                        <div className="flex flex-col gap-4">
                            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-lg hover:text-primary transition-colors group">
                                <div className="p-3 rounded-xl bg-slate-800 border group-hover:bg-indigo-500/10 group-hover:border-indigo-500/50" style={{ backgroundColor: 'var(--bg-slate)', borderColor: 'var(--border)' }}>
                                    <Mail size={20} className="group-hover:text-primary" />
                                </div>
                                {personalInfo.email}
                            </a>
                            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4 text-lg hover:text-primary transition-colors group">
                                <div className="p-3 rounded-xl bg-slate-800 border group-hover:bg-indigo-500/10 group-hover:border-indigo-500/50" style={{ backgroundColor: 'var(--bg-slate)', borderColor: 'var(--border)' }}>
                                    <Phone size={20} className="group-hover:text-primary" />
                                </div>
                                {personalInfo.phone}
                            </a>
                            <div className="flex items-center gap-4 text-lg" style={{ color: 'var(--text-muted)' }}>
                                <div className="p-3 rounded-xl bg-slate-800 border" style={{ backgroundColor: 'var(--bg-slate)', borderColor: 'var(--border)' }}>
                                    <MapPin size={20} />
                                </div>
                                {personalInfo.location}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold uppercase tracking-widest mb-6" style={{ color: 'var(--text-muted)' }}>Mes Liens</h3>
                        <div className="flex flex-col gap-4">
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                                <GithubIcon size={18} /> GitHub
                            </a>
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                                <LinkedinIcon size={18} /> LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between items-end">
                        <button 
                            onClick={scrollToTop}
                            className="p-4 rounded-2xl bg-slate-800 border hover:bg-slate-700 transition-all group shadow-xl"
                            style={{ backgroundColor: 'var(--bg-slate)', borderColor: 'var(--border)' }}
                        >
                            <ArrowUpCircle size={24} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'var(--border)' }}>
                    <p style={{ color: 'var(--text-muted)' }}>
                        © {new Date().getFullYear()} {personalInfo.name} — Fabriqué avec React & ❤️
                    </p>
                    <div className="text-sm opacity-40">
                        Propulsé par Vite.js
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

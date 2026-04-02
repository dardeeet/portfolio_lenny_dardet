import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
    const { education } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="education" className="py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Parcours Académique</h2>
                    <p className="mt-4 text-xl" style={{ color: 'var(--text-muted)' }}>
                        Mon cursus scolaire et mes diplômes.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {education.map((edu, index) => (
                        <motion.div
                            key={`${edu.school}-${index}`}
                            variants={cardVariants}
                            className="p-8 rounded-3xl bg-slate-800/40 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 flex flex-col h-full"
                            style={{ backgroundColor: 'rgba(30, 41, 59, 0.4)', borderColor: 'var(--border)' }}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400" style={{ color: 'var(--primary)' }}>
                                    <GraduationCap size={24} />
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-slate-800 border border-white/10" style={{ color: 'var(--text-muted)' }}>
                                    <Calendar size={14} />
                                    {edu.period}
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                            <div className="text-lg font-medium text-primary mb-4" style={{ color: 'var(--primary)' }}>{edu.school}</div>
                            <p className="mt-auto" style={{ color: 'var(--text-muted)' }}>{edu.details}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education;

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
    const { skills } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    };

    return (
        <section id="about" className="py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Compétences & Tech Stack</h2>
                    <p className="mt-4 text-xl" style={{ color: 'var(--text-muted)' }}>
                        Les outils et technologies que j'utilise pour donner vie à mes idées.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((category) => (
                        <motion.div
                            key={category.category}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-slate-800/40 border border-white/5 hover:border-indigo-500/30 transition-colors"
                            style={{ backgroundColor: 'rgba(30, 41, 59, 0.4)', borderColor: 'var(--border)' }}
                        >
                            <h3 className="text-2xl font-bold mb-6 flex items-center justify-between">
                                {category.category}
                                <span className="p-1 rounded-lg bg-indigo-500/10 text-indigo-400">
                                    <CheckCircle2 size={20} />
                                </span>
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={itemVariants}
                                        className="px-4 py-2 rounded-xl text-sm font-medium bg-slate-900 border border-white/5 hover:border-indigo-500/50 transition-all cursor-default"
                                        style={{ backgroundColor: 'var(--bg-dark)', borderColor: 'var(--border)' }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

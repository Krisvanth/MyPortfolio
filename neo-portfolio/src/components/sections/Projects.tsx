"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
    {
        title: "Txt2Img Generation",
        category: "Generative AI",
        description: "Advanced text-to-image generation model leveraging transformer architectures for high-fidelity visual synthesis.",
        link: "https://drive.google.com/file/d/1o0N_tsv960eK20LAO8u3ZWlMKwfqs-Cb/view?usp=sharing",
        color: "border-[var(--secondary)]"
    },
    {
        title: "DocQueryBot",
        category: "LLM & RAG",
        description: "Intelligent document querying system using RAG (Retrieval-Augmented Generation) to provide accurate answers from custom knowledge bases.",
        link: "https://drive.google.com/file/d/1iaevQjZvr0pZ0qpezt2e2ES12QWl2H7U/view?usp=sharing",
        color: "border-[var(--accent)]"
    },
    {
        title: "Impersonation Detection",
        category: "Deep Learning & CV",
        description: "Security system for examination centers using computer vision to detect impersonation attempts in real-time.",
        link: "https://drive.google.com/file/d/1HJbxCrKI40ba4IE-C6RkEWbAe8Dk1bu4/view?usp=sharing",
        color: "border-[var(--primary)]"
    },
    {
        title: "W-rone",
        category: "Computer Vision & Drone",
        description: "Drone surveillance system integrating computer vision for autonomous object detection and tracking.",
        link: "https://drive.google.com/file/d/1yh3oUfyRWEmzJTOnxLKsuUKn6NS9LlQ5/view?usp=sharing",
        color: "border-[var(--secondary)]"
    },
    {
        title: "Covid-19 Forecasting",
        category: "ML & Time Series",
        description: "Predictive model for Covid-19 spread analysis in the Indian context using time-series forecasting.",
        link: "https://drive.google.com/file/d/16haQ8mNFWl3GKUFjEaykR3qOIe8AAwEb/view?usp=sharing",
        color: "border-[var(--accent)]"
    },
    {
        title: "Heart Disease Prediction",
        category: "Machine Learning",
        description: "Healthcare analytics tool for predicting heart disease risk based on clinical parameters with high accuracy.",
        link: "https://drive.google.com/file/d/1IRyKBYt0rT-APBYOd9MPvzLvH7Pv8bIn/view?usp=sharing",
        color: "border-[var(--primary)]"
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-[var(--background)]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-mono font-bold text-[var(--foreground)] mb-4">
                        <span className="text-[var(--secondary)]">./</span> DEPLOYED_MODULES
                    </h2>
                    <p className="text-[var(--foreground)]/60 max-w-2xl mx-auto">
                        Selected works and proofs of concept.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative bg-[#0f0f0f] p-6 border-t-4 ${project.color} hover:-translate-y-2 transition-transform duration-300 block`}
                        >
                            {/* Card Glow on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex justify-between items-start mb-4">
                                <Folder className="text-[var(--foreground)]/50 group-hover:text-[var(--foreground)] transition-colors" size={24} />
                                <ExternalLink className="text-[var(--foreground)]/30 group-hover:text-[var(--primary)] transition-colors" size={20} />
                            </div>

                            <h3 className="text-xl font-bold font-sans text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-xs font-mono text-[var(--foreground)]/50 mb-4 uppercase tracking-wider">
                                {project.category}
                            </p>
                            <p className="text-[var(--foreground)]/70 text-sm leading-relaxed">
                                {project.description}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}

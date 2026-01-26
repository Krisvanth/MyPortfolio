"use client";

import { motion } from "framer-motion";
import { SectionBackground } from "@/components/ui/SectionBackground";

const skills = {
    "Core Capabilities": ["Machine Learning", "Deep Learning", "Generative AI", "Computer Vision", "NLP", "Prompt Engineering", "Generative Adversarial Networks (GANs)"],
    "Frameworks & Libraries": ["Langchain", "LangGraph", "LangSmith", "FastAPI", "Streamlit", "TensorFlow/PyTorch", "OpenCV", "Detectron2", "Ollama"],
    "Tools & Platforms": ["Docker", "Git/GitHub", "Linux", "Microsoft Azure Cognitive Services", "Tableau"],
    "Database & Search": ["MySQL", "MongoDB", "Redis", "Qdrant", "OpenSearch"],
    "Languages": ["Python", "HTML5", "CSS3"]
};

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
            <SectionBackground variant="accent" intensity="medium" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-mono font-bold text-[var(--foreground)] mb-4">
                        <span className="text-[var(--primary)]">::</span> EXPERTISE
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#0a0a0a] border border-[var(--border)] p-6 rounded-sm hover:border-[var(--primary)] transition-colors group"
                        >
                            <h3 className="text-[var(--accent)] font-mono text-sm mb-4 border-b border-[var(--border)] pb-2 flex justify-between">
                                {category.toUpperCase()}
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--primary)]">[OK]</span>
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-[var(--muted)] text-[var(--foreground)] text-xs font-mono rounded-xs hover:bg-[var(--primary)] hover:text-black transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

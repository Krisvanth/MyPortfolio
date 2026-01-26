"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ExternalLink, Folder, Cpu, Zap, Briefcase, Code2, FileText, Award } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { SectionBackground } from "@/components/ui/SectionBackground";

const projects = [
    {
        title: "Txt2Img Generation",
        category: "Generative AI",
        description: "Advanced text-to-image generation model leveraging transformer architectures for high-fidelity visual synthesis.",
        link: "https://drive.google.com/file/d/1o0N_tsv960eK20LAO8u3ZWlMKwfqs-Cb/view?usp=sharing",
        color: "var(--secondary)",
        techStack: ["PyTorch", "Transformers", "Diffusion"],
    },
    {
        title: "DocQueryBot",
        category: "LLM & RAG",
        description: "Intelligent document querying system using RAG (Retrieval-Augmented Generation) to provide accurate answers from custom knowledge bases.",
        link: "https://drive.google.com/file/d/1iaevQjZvr0pZ0qpezt2e2ES12QWl2H7U/view?usp=sharing",
        color: "var(--accent)",
        techStack: ["LangChain", "Qdrant", "FastAPI"],
    },
    {
        title: "Impersonation Detection",
        category: "Deep Learning & CV",
        description: "Security system for examination centers using computer vision to detect impersonation attempts in real-time.",
        link: "https://drive.google.com/file/d/1HJbxCrKI40ba4IE-C6RkEWbAe8Dk1bu4/view?usp=sharing",
        color: "var(--primary)",
        techStack: ["DeepFace", "OpenCV", "TensorFlow"],
    },
    {
        title: "W-rone",
        category: "Computer Vision & Drone",
        description: "Drone surveillance system integrating computer vision for autonomous object detection and tracking.",
        link: "https://drive.google.com/file/d/1yh3oUfyRWEmzJTOnxLKsuUKn6NS9LlQ5/view?usp=sharing",
        color: "var(--secondary)",
        techStack: ["YOLOv5", "DroneKit", "Python"],
    },
    {
        title: "Covid-19 Forecasting",
        category: "ML & Time Series",
        description: "Predictive model for Covid-19 spread analysis in the Indian context using time-series forecasting.",
        link: "https://drive.google.com/file/d/16haQ8mNFWl3GKUFjEaykR3qOIe8AAwEb/view?usp=sharing",
        color: "var(--accent)",
        techStack: ["LSTM", "Prophet", "Pandas"],
    },
    {
        title: "Heart Disease Prediction",
        category: "Machine Learning",
        description: "Healthcare analytics tool for predicting heart disease risk based on clinical parameters with high accuracy.",
        link: "https://drive.google.com/file/d/1IRyKBYt0rT-APBYOd9MPvzLvH7Pv8bIn/view?usp=sharing",
        color: "var(--primary)",
        techStack: ["Scikit-learn", "XGBoost", "Flask"],
    }
];

const stats = [
    { label: "Years Exp", value: 2, suffix: "+", icon: <Briefcase size={18} />, color: "var(--primary)" },
    { label: "Projects", value: 15, suffix: "+", icon: <Code2 size={18} />, color: "var(--accent)" },
    { label: "Publications", value: 3, suffix: "", icon: <FileText size={18} />, color: "var(--secondary)" },
    { label: "Patents", value: 2, suffix: "", icon: <Award size={18} />, color: "var(--primary)" },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) {
            setCount(0);
            return;
        }

        const duration = 1500;
        const steps = 40;
        const stepDuration = duration / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            if (currentStep >= steps) {
                setCount(value);
                clearInterval(timer);
            } else {
                const progress = currentStep / steps;
                const easeOut = 1 - Math.pow(1 - progress, 3);
                setCount(Math.floor(value * easeOut));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [value, inView]);

    return <span className="tabular-nums">{count}{suffix}</span>;
}

interface ProjectCardProps {
    project: typeof projects[0];
    index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isDeploying, setIsDeploying] = useState(false);

    const handleClick = () => {
        setIsDeploying(true);
        setTimeout(() => {
            window.open(project.link, "_blank");
            setIsDeploying(false);
        }, 800);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <TiltCard className="h-full cursor-pointer" glareEnabled={true}>
                <div
                    onClick={handleClick}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative bg-[#0f0f0f] p-6 h-full overflow-hidden group"
                    style={{ borderTop: `4px solid ${project.color}` }}
                >
                    {/* Animated background grid on hover */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                            background: `linear-gradient(90deg, ${project.color}08 1px, transparent 1px), linear-gradient(${project.color}08 1px, transparent 1px)`,
                            backgroundSize: "20px 20px",
                        }}
                    />

                    {/* Deploying overlay */}
                    <AnimatePresence>
                        {isDeploying && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black/80 z-20 flex flex-col items-center justify-center"
                            >
                                <Cpu className="animate-spin mb-2" style={{ color: project.color }} size={32} />
                                <span className="font-mono text-sm" style={{ color: project.color }}>
                                    Loading..
                                </span>
                                <div className="mt-2 w-32 h-1 bg-[var(--muted)] rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: project.color }}
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 0.7 }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Header */}
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <Folder
                            className="transition-colors duration-300"
                            style={{ color: isHovered ? project.color : "rgba(255,255,255,0.5)" }}
                            size={28}
                        />
                        <ExternalLink
                            className="transition-colors duration-300"
                            style={{ color: isHovered ? project.color : "rgba(255,255,255,0.3)" }}
                            size={20}
                        />
                    </div>

                    {/* Title */}
                    <h3
                        className="text-xl font-bold font-sans mb-2 transition-colors duration-300 relative z-10"
                        style={{ color: isHovered ? project.color : "var(--foreground)" }}
                    >
                        {project.title}
                    </h3>

                    {/* Category */}
                    <p className="text-xs font-mono text-[var(--foreground)]/50 mb-4 uppercase tracking-wider flex items-center gap-1 relative z-10">
                        <Zap size={12} style={{ color: project.color }} />
                        {project.category}
                    </p>

                    {/* Description */}
                    <p className="text-[var(--foreground)]/70 text-sm leading-relaxed mb-4 relative z-10">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 relative z-10">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs font-mono rounded transition-all duration-300"
                                style={{
                                    backgroundColor: isHovered ? `${project.color}20` : "var(--muted)",
                                    color: isHovered ? project.color : "var(--foreground)",
                                    border: `1px solid ${isHovered ? project.color : "transparent"}`,
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Bottom glow line */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5"
                        style={{ backgroundColor: project.color }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </TiltCard>
        </motion.div>
    );
}

export function Projects() {
    const statsRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(statsRef, { once: true, margin: "-50px" });

    return (
        <section id="projects" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
            <SectionBackground variant="primary" intensity="medium" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-mono font-bold text-[var(--foreground)] mb-4">
                        <span className="text-[var(--secondary)]">./</span> DEPLOYED_MODULES
                    </h2>

                    {/* Stats Row */}
                    <div ref={statsRef} className="flex flex-wrap justify-center gap-4 md:gap-8 mb-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="flex items-center gap-2 px-4 py-2 bg-[var(--muted)]/50 border border-[var(--border)] rounded-full hover:border-[var(--primary)]/50 transition-all"
                            >
                                <span style={{ color: stat.color }}>{stat.icon}</span>
                                <span className="font-mono font-bold text-lg" style={{ color: stat.color }}>
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                                </span>
                                <span className="text-xs text-[var(--foreground)]/60 uppercase tracking-wide">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}


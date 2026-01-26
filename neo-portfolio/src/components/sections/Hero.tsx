"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Typewriter } from "@/components/ui/Typewriter";
import { InteractiveBackground } from "@/components/ui/InteractiveBackground";
import { ScrambleText } from "@/components/ui/ScrambleText";

interface HeroProps {
    onInteract?: () => void;
}

export function Hero({ onInteract }: HeroProps) {
    const [bootSequenceFinished, setBootSequenceFinished] = useState(false);
    const [showEnterButton, setShowEnterButton] = useState(false);

    const handleEnter = () => {
        setBootSequenceFinished(true);
        if (onInteract) onInteract();
    };

    const bootLogs = [
        "Establishing secure connection...",
        "Loading neural modules...",
        "Initializing creative synthesis engine...",
        "Access granted.",
    ];

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
            {/* Background */}
            {bootSequenceFinished ? (
                <InteractiveBackground />
            ) : (
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0f2214_1px,transparent_1px),linear-gradient(to_bottom,#0f2214_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
            )}

            {/* Hero Content */}
            <div className="z-10 container mx-auto px-4 text-center pointer-events-none"> {/* content wrapper needs pointer-events-none to let clicks pass to canvas if needed, but we need buttons to work so... actually interactive background is z-0 and pointer-events-none, so we are good. The content needs pointer-events-auto */}
                {!bootSequenceFinished ? (
                    <div className="font-mono text-left max-w-lg mx-auto bg-black/50 p-6 border border-[var(--border)] rounded-md backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,65,0.1)] pointer-events-auto">
                        {bootLogs.map((log, index) => (
                            <div key={index} className="text-sm md:text-base text-[var(--primary)] mb-1">
                                <Typewriter
                                    text={`> ${log}`}
                                    speed={30}
                                    startDelay={index * 800}
                                    cursor={index === bootLogs.length - 1 && !showEnterButton}
                                    onComplete={index === bootLogs.length - 1 ? () => setShowEnterButton(true) : undefined}
                                />
                            </div>
                        ))}

                        {showEnterButton && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-6 w-full py-2 bg-[var(--primary)] text-black font-bold uppercase tracking-widest hover:bg-[var(--accent)] transition-colors animate-pulse cursor-pointer"
                                onClick={handleEnter}
                            >
                                [ ENTER_SYSTEM ]
                            </motion.button>
                        )}
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="pointer-events-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-sans tracking-tight">
                            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] bg-[length:200%_auto] transition-[background-position] duration-700 hover:bg-right cursor-default">Krisvanth P</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-[var(--foreground)]/80 max-w-3xl mx-auto mb-10 font-light">
                            Specializing in <span className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors duration-300 cursor-default">Machine Learning</span>, <span className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors duration-300 cursor-default">Deep Learning</span>, <span className="text-[var(--accent)] hover:text-[var(--primary)] transition-colors duration-300 cursor-default">Computer Vision</span>, and <span className="text-[var(--accent)] hover:text-[var(--primary)] transition-colors duration-300 cursor-default">Generative AI</span>.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <a href="#projects" className="group px-8 py-3 bg-[var(--primary)] text-black font-bold rounded-sm flex items-center gap-2 hover:bg-[var(--accent)] transition-all relative overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">View Modules <ArrowRight className="group-hover:translate-x-1 transition-transform" /></span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </a>
                            <a href="https://drive.google.com/file/d/1ZS_JbS_2n8R5EzLZ5XadEIEyfNRjGxyS/view?usp=sharing" target="_blank" className="relative group px-8 py-3 border border-[var(--primary)] text-[var(--primary)] rounded-sm flex items-center gap-2 hover:bg-[var(--primary)]/10 transition-all font-mono overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">Download Data_Log <Download size={18} /></span>
                                <div className="absolute inset-0 bg-[var(--primary)]/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </div>

        </section>
    );
}

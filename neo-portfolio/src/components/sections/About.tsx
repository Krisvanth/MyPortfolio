"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap } from "lucide-react";

const experience = [
    {
        id: 1,
        role: "Associate Software Engineer",
        company: "ABB Ltd.",
        period: "Jun 2024 - Present",
        points: [
            "Spearheading the development of a robust LLMOps pipeline, including LLM deployment, fine-tuning, and resource scaling processes to streamline workflow and optimize LLM management.",
            "Designed and implementing an end-to-end SQL generation pipeline using CustomLLM, integrating Langchain and Ollama.",
            "Automated the Tags-to-Asset mapping, template recommendation, and failure-mode recommendation processes using Generative AI, reducing customer onboarding time by 80%."
        ],
    },
    {
        id: 2,
        role: "Computer Vision Engineer",
        company: "Goldstone Technologies",
        period: "May 2023 - Aug 2023",
        points: [
            "Contributed (70% of project effort) to developing a pioneering LLM platform integrating custom LLM with RAG technology.",
            "Implemented face recognition techniques using Deepstream, achieving a 15% scalability enhancement and heightened security in critical applications."
        ],
    },
    {
        id: 3,
        role: "Computer Vision Engineer Intern",
        company: "TensorGo Technologies",
        period: "Jan 2023 - Apr 2023",
        points: [
            "Collaborated effectively with the CV team in developing 'Emyt+', an Emotional Intelligence System (25% of team's effort).",
            "Implemented real-time transcription, translation, and speaker diarization pipelines, enhancing multilingual capabilities and reducing inferencing time by 20%.",
            "Demonstrated hands-on proficiency in Computer Vision (Face recognition, head pose, eyegaze estimation, people counting)."
        ],
    },
    {
        id: 4,
        role: "Computer Vision Engineer Intern",
        company: "ResearchBrains",
        period: "Sep 2022 - Dec 2022",
        points: [
            "Applied GAN techniques, achieving a 30% enhancement in image quality through Cartoon GAN for image-to-cartoon transformations and blur removal.",
            "Increased productivity by 40% through active involvement in developing PhD research projects."
        ],
    },
    {
        id: 5,
        role: "Data Science Intern",
        company: "Yoshops",
        period: "Jun 2022 - Aug 2022",
        points: [
            "Created 30+ data visualizations and EDA reports using Matplotlib, Seaborn, and Pandas (20% increase in actionable insights).",
            "Conducted data imputation for 500+ records, improving data analysis reliability by 25%."
        ],
    },
];

const education = [
    {
        id: 1,
        degree: "B.Tech in Information Technology",
        school: "Kongu Engineering College",
        period: "2020 - 2024",
        details: "CGPA: 8.76/10. Awards: Overall Best Outgoing Student, Best Student in Co-curricular Activities, Best Project. Successful participation in ideathons and proof of concept projects."
    },
    {
        id: 2,
        degree: "HSC",
        school: "Kongu National Matric Higher Sec. School",
        period: "2019 - 2020",
        details: "Percentage: 79.6%"
    },
    {
        id: 3,
        degree: "SSLC",
        school: "Nandha Matric Higher Sec. School",
        period: "2017 - 2018",
        details: "Percentage: 87.6%"
    }
]

export function About() {
    return (
        <section id="about" className="py-20 relative bg-[#0a0a0a]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-mono font-bold text-[var(--foreground)] mb-4">
                        <span className="text-[var(--primary)]">&lt;</span>JOURNEY SO FAR../<span className="text-[var(--primary)]">&gt;</span>
                    </h2>
                    <p className="text-[var(--foreground)]/60 max-w-2xl mx-auto">
                        Tracing the execution path of my professional journey.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-mono text-[var(--accent)] mb-8 flex items-center gap-2">
                            <Briefcase size={24} /> EXPERIENCE
                        </h3>
                        <div className="border-l-2 border-[var(--primary)]/30 ml-3 space-y-12">
                            {experience.map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: item.id * 0.1 }}
                                    className="relative pl-8"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--background)] border-2 border-[var(--primary)]" />
                                    <div className="text-sm font-mono text-[var(--primary)] mb-1 flex items-center gap-2">
                                        <Calendar size={14} /> {item.period}
                                    </div>
                                    <h4 className="text-xl font-bold text-[var(--foreground)]">{item.role}</h4>
                                    <h5 className="text-lg text-[var(--foreground)]/80 mb-2">{item.company}</h5>
                                    <div className="space-y-2 mt-2">
                                        {item.points.map((point, index) => (
                                            <div key={index} className="flex gap-3 items-start">
                                                <span className="text-[var(--primary)] text-xs mt-1.5">›</span>
                                                <p className="text-[var(--foreground)]/60 text-sm leading-relaxed">
                                                    {point}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-mono text-[var(--accent)] mb-8 flex items-center gap-2">
                            <GraduationCap size={24} /> EDUCATION
                        </h3>
                        <div className="border-l-2 border-[var(--secondary)]/30 ml-3 space-y-12">
                            {education.map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative pl-8"
                                >
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--background)] border-2 border-[var(--secondary)]" />
                                    <div className="text-sm font-mono text-[var(--secondary)] mb-1 flex items-center gap-2">
                                        <Calendar size={14} /> {item.period}
                                    </div>
                                    <h4 className="text-xl font-bold text-[var(--foreground)]">{item.degree}</h4>
                                    <h5 className="text-lg text-[var(--foreground)]/80 mb-2">{item.school}</h5>
                                    <p className="text-[var(--foreground)]/60 text-sm leading-relaxed">
                                        {item.details}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

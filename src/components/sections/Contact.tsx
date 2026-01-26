"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send, Github, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { SectionBackground } from "@/components/ui/SectionBackground";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    to: "krishprasath10@gmail.com",
                    subject: `Portfolio Contact: ${formData.name}`,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch (error) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
            <SectionBackground variant="primary" intensity="low" />
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-mono font-bold text-[var(--foreground)] mb-4">
                        INITIATE_COMMUNICATION
                    </h2>
                    <p className="text-[var(--foreground)]/60">
                        Send a signal through the noise.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 justify-center max-w-2xl mx-auto mb-12">
                    {/* Contact Info */}
                    <a href="mailto:krishprasath10@gmail.com" className="flex items-center gap-4 p-4 border border-[var(--border)] bg-[var(--muted)]/20 hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all group">
                        <div className="p-3 bg-black rounded-sm text-[var(--foreground)] group-hover:text-[var(--primary)]">
                            <Mail size={20} />
                        </div>
                        <div>
                            <div className="text-xs font-mono text-[var(--foreground)]/50 uppercase">Email</div>
                            <div className="text-[var(--foreground)] font-medium">krishprasath10@gmail.com</div>
                        </div>
                    </a>

                    <a href="tel:+919842158542" className="flex items-center gap-4 p-4 border border-[var(--border)] bg-[var(--muted)]/20 hover:border-[var(--secondary)] hover:bg-[var(--secondary)]/5 transition-all group">
                        <div className="p-3 bg-black rounded-sm text-[var(--foreground)] group-hover:text-[var(--secondary)]">
                            <Phone size={20} />
                        </div>
                        <div>
                            <div className="text-xs font-mono text-[var(--foreground)]/50 uppercase">Voice Line</div>
                            <div className="text-[var(--foreground)] font-medium">+91 9842158542</div>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/krisvanth-p-85653a204/" target="_blank" className="flex items-center gap-4 p-4 border border-[var(--border)] bg-[var(--muted)]/20 hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all group">
                        <div className="p-3 bg-black rounded-sm text-[var(--foreground)] group-hover:text-[var(--accent)]">
                            <Linkedin size={20} />
                        </div>
                        <div>
                            <div className="text-xs font-mono text-[var(--foreground)]/50 uppercase">Network Node</div>
                            <div className="text-[var(--foreground)] font-medium">LinkedIn Profile</div>
                        </div>
                    </a>

                    <a href="https://github.com/Krisvanth/" target="_blank" className="flex items-center gap-4 p-4 border border-[var(--border)] bg-[var(--muted)]/20 hover:border-white hover:bg-white/5 transition-all group">
                        <div className="p-3 bg-black rounded-sm text-[var(--foreground)] group-hover:text-white">
                            <Github size={20} />
                        </div>
                        <div>
                            <div className="text-xs font-mono text-[var(--foreground)]/50 uppercase">Code Repository</div>
                            <div className="text-[var(--foreground)] font-medium">GitHub Profile</div>
                        </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 border border-[var(--border)] bg-[var(--muted)]/20 md:col-span-2 mx-auto w-full max-w-sm">
                        <div className="p-3 bg-black rounded-sm text-[var(--foreground)]">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <div className="text-xs font-mono text-[var(--foreground)]/50 uppercase">Physical Coordinates</div>
                            <div className="text-[var(--foreground)] font-medium">Bangalore, India</div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto"
                >
                    <div className="border border-[var(--border)] bg-[var(--muted)]/10 p-6 md:p-8">
                        <h3 className="font-mono text-lg text-[var(--primary)] mb-6 flex items-center gap-2">
                            <Send size={18} /> TRANSMIT_MESSAGE
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-xs font-mono text-[var(--foreground)]/50 uppercase mb-2">
                                    Identifier (Name)
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-black border border-[var(--border)] text-[var(--foreground)] font-mono text-sm focus:outline-none focus:border-[var(--primary)] transition-colors placeholder:text-[var(--foreground)]/30"
                                    placeholder="Enter your name..."
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-xs font-mono text-[var(--foreground)]/50 uppercase mb-2">
                                    Return Address (Email)
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-black border border-[var(--border)] text-[var(--foreground)] font-mono text-sm focus:outline-none focus:border-[var(--primary)] transition-colors placeholder:text-[var(--foreground)]/30"
                                    placeholder="Enter your email..."
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs font-mono text-[var(--foreground)]/50 uppercase mb-2">
                                    Transmission (Message)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-black border border-[var(--border)] text-[var(--foreground)] font-mono text-sm focus:outline-none focus:border-[var(--primary)] transition-colors resize-none placeholder:text-[var(--foreground)]/30"
                                    placeholder="Enter your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full py-3 bg-[var(--primary)] text-black font-mono font-bold uppercase tracking-widest hover:bg-[var(--accent)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                            >
                                {status === "loading" && <Loader2 size={18} className="animate-spin" />}
                                {status === "success" && <CheckCircle size={18} />}
                                {status === "error" && <AlertCircle size={18} />}
                                {status === "idle" && <Send size={18} />}

                                {status === "idle" && "SEND_TRANSMISSION"}
                                {status === "loading" && "TRANSMITTING..."}
                                {status === "success" && "TRANSMISSION_SENT"}
                                {status === "error" && "TRANSMISSION_FAILED"}
                            </button>

                            {status === "success" && (
                                <p className="text-center text-[var(--primary)] font-mono text-sm mt-2">
                                    Message received. I'll respond shortly.
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-center text-red-500 font-mono text-sm mt-2">
                                    Transmission failed. Please try again or email directly.
                                </p>
                            )}
                        </form>
                    </div>
                </motion.div>

                <div className="mt-20 text-center border-t border-[var(--border)] pt-8">
                    <p className="font-mono text-[var(--foreground)]/30 text-xs">
                        © 2026 KRISVANTH P // ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </section>
    );
}

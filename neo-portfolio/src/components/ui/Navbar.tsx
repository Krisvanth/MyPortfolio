"use client";

import { motion } from "framer-motion";
import { Terminal, User, Code, FileText, Mail, Cpu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Cpu },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Publications", href: "#publications", icon: FileText },
    { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-40 border-b border-transparent transition-all duration-300",
                scrolled
                    ? "bg-black/80 backdrop-blur-md border-[var(--border)] py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center space-x-2 text-2xl font-bold font-mono group"
                >
                    <Terminal className="text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center space-x-1 px-4 py-2 rounded-sm font-mono text-sm uppercase tracking-wide transition-all",
                                active === item.href
                                    ? "bg-[var(--primary)] text-black font-bold"
                                    : "text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--muted)]"
                            )}
                            onClick={() => setActive(item.href)}
                        >
                            <item.icon size={14} />
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Nav would go here, maybe a different component */}
                <div className="md:hidden">
                    {/* Simple connector for now */}
                    <div className="h-2 w-2 bg-[var(--primary)] rounded-full animate-pulse" />
                </div>
            </div>
        </motion.nav>
    );
}

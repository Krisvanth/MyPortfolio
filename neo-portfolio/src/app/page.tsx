"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Publications } from "@/components/sections/Publications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const [isSystemLive, setIsSystemLive] = useState(false);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--primary)] selection:text-black">
      {isSystemLive && <Navbar />}
      <Hero onInteract={() => setIsSystemLive(true)} />

      {isSystemLive && (
        <>
          <About />
          <Skills />
          <Projects />
          <Publications />
          <Contact />
        </>
      )}
    </main>
  );
}

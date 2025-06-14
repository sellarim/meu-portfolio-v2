import { useCallback } from "react";
import { Github, Linkedin, Star, BarChart3, Database, Code, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const stack = [
  { name: "Power BI", icon: <BarChart3 className="text-yellow-500" /> },
  { name: "SQL", icon: <Database className="text-blue-500" /> },
  { name: "Python", icon: <Code className="text-green-600" /> },
];

export default function HeroSection() {
  const [dark, setDark] = useState(() => window.matchMedia?.('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const scrollToProjects = useCallback(() => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 px-6 md:px-16 py-16 relative">
      {/* Foto estilo hero */}
      <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg mb-4 md:mb-0 bg-muted flex-shrink-0">
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=400&h=400" alt="Foto de perfil" className="object-cover w-full h-full" />
      </div>
      {/* Textos da hero */}
      <div className="flex-1 flex flex-col gap-4 items-center md:items-start">
        <span className="text-muted-foreground text-sm md:text-base mb-1">Olá! Eu sou</span>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 font-sans">Leonardo Miralles</h1>
        <p className="text-lg md:text-xl text-foreground max-w-xl text-center md:text-left">
          {"Especialista em Dados apaixonado por transformar dados em decisões. Experiência com BI, analytics, integração e visualização. Foco em impacto e excelência."}
        </p>
        <div className="flex gap-3 items-center flex-wrap mt-3">
          {stack.map((tech) => (
            <span
              key={tech.name}
              className="flex items-center gap-1 px-3 py-1 rounded bg-muted text-sm font-semibold shadow hover:scale-105 transition-transform"
            >
              {tech.icon} {tech.name}
            </span>
          ))}
        </div>
        <blockquote className="italic text-primary mt-4 text-md md:text-lg">
          “Dados são o novo petróleo, mas só têm valor quando refinados.”
        </blockquote>
        <div className="flex gap-4 mt-4">
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Button variant="ghost" size="icon"><Linkedin /></Button>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Button variant="ghost" size="icon"><Github /></Button>
          </a>
        </div>
      </div>
      {/* Botão flutuante para projetos */}
      <Button
        className="fixed bottom-5 right-5 z-30 shadow-lg bg-primary text-primary-foreground px-5 py-3 rounded-full animate-fade-in flex gap-2 items-center"
        style={{ boxShadow: '0 2px 16px 2px rgba(23, 92, 230, 0.10)' }}
        onClick={scrollToProjects}
      >
        <span role="img" aria-label="Gráfico">📊</span> Ver projetos
      </Button>
      {/* Modo claro/escuro */}
      <button
        className={cn("absolute top-5 right-7 md:right-16 bg-muted rounded-full p-2 transition-colors shadow focus:outline-none")}
        aria-label="Alternar tema"
        onClick={() => setDark(v => !v)}
        type="button"
      >
        {dark ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
      </button>
    </header>
  );
}

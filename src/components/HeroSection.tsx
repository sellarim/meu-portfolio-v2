
import { useCallback } from "react";
import { Github, Linkedin, Instagram, Youtube, BarChart3, Database, Code, Layers, Sun, Moon } from "lucide-react";
import { icons } from "lucide-react"; // Import icons object for dynamic icons
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const WhatsappIcon = icons.whatsapp;

const stack = [
  { name: "Power BI", icon: <BarChart3 className="text-yellow-500" /> },
  { name: "Excel", icon: <Layers className="text-green-700" /> },
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
      {/* Foto estilo hero atualizada */}
      <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg mb-4 md:mb-0 bg-muted flex-shrink-0 flex items-center justify-center">
        <img
          src="/lovable-uploads/743eb77e-94d8-49b7-aa9a-56f32b4cb6a4.png"
          alt="Foto de perfil"
          className="object-cover w-full h-full"
          style={{
            objectPosition: "center 56%",
            transform: "scale(1.13)"
          }}
        />
      </div>
      {/* Textos da hero */}
      <div className="flex-1 flex flex-col gap-4 items-center md:items-start">
        <span className="text-muted-foreground text-sm md:text-base mb-1">Olá! Eu sou</span>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 font-sans">Leonardo Miralles</h1>
        <ul className="list-disc pl-5 space-y-1 text-lg md:text-xl text-foreground max-w-xl text-center md:text-left">
          <li>Analista de BI com +6 anos de experiência, especialista em transformar dados em decisões estratégicas.</li>
          <li>Formação em Ciência de Dados, com base técnica em Informática e Administração.</li>
          <li>Expertise em integração de dados, automações com VBA/SQL e criação de dashboards interativos no Power BI.</li>
          <li>Atualmente sou o Analista de BI mais seguido do Linkedin BR.</li>
        </ul>
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
          <a href="https://www.linkedin.com/in/leo-miralles/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Button variant="ghost" size="icon"><Linkedin /></Button>
          </a>
          <a href="https://github.com/sellarim" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Button variant="ghost" size="icon"><Github /></Button>
          </a>
          <a href="https://www.instagram.com/leonardomiralless/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Button variant="ghost" size="icon"><Instagram /></Button>
          </a>
          <a href="https://www.youtube.com/@leonardo-miralles" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Button variant="ghost" size="icon"><Youtube /></Button>
          </a>
          <a href="https://api.whatsapp.com/send?phone=5511945720468" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <Button variant="ghost" size="icon">{WhatsappIcon && <WhatsappIcon />}</Button>
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

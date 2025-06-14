
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Dashboard de Vendas BI",
    cover: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
    desc: "Dashboard interativo de vendas criado com Power BI, conectando múltiplas fontes de dados.",
    tags: ["Power BI", "SQL"],
    github: "https://github.com/",
    ext: "https://app.powerbi.com/",
  },
  {
    title: "Data Pipeline com Python",
    cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
    desc: "ETL automatizado de dados financeiros usando Python e Pandas.",
    tags: ["Python", "Pandas"],
    github: "https://github.com/",
    ext: "https://colab.research.google.com/",
  },
  {
    title: "Visualização SQL Analytics",
    cover: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
    desc: "Exploração e análise de dados SQL com dashboards dinâmicos.",
    tags: ["SQL", "Analytics"],
    github: "https://github.com/",
    ext: "",
  },
  {
    title: "Gestão de Indicadores em Excel",
    cover: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400",
    desc: "Planilha avançada com automações VBA e dashboards interativos para acompanhamento de KPIs.",
    tags: ["Excel", "VBA", "Dashboard"],
    github: "https://github.com/",
    ext: "",
  },
  {
    title: "Automação de Relatórios PowerPoint",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400",
    desc: "Geração automática de relatórios visuais no PowerPoint a partir de dados do Power BI.",
    tags: ["PowerPoint", "Automação"],
    github: "https://github.com/",
    ext: "",
  },
  {
    title: "Análise de Dados Google Analytics",
    cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400",
    desc: "Dashboards interativos utilizando dados coletados do Google Analytics para tomada de decisões estratégicas.",
    tags: ["Google Analytics", "Dashboard"],
    github: "https://github.com/",
    ext: "https://datastudio.google.com/",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full py-20 px-6 md:px-16 bg-gradient-to-b from-background to-muted"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">💼 Portfólio de Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((proj, idx) => (
          <Card
            key={proj.title}
            className="overflow-hidden shadow-lg rounded-lg group hover:scale-105 transition-transform animate-fade-in"
          >
            <div className="h-56 bg-muted relative overflow-hidden">
              <img src={proj.cover} alt={proj.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
            </div>
            <CardContent className="py-4 px-5 flex flex-col gap-2">
              <h3 className="font-semibold text-lg">{proj.title}</h3>
              <p className="text-muted-foreground text-sm">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {proj.tags.map((tag) => (
                  <span key={tag} className="bg-accent/60 text-xs font-semibold px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <a href={proj.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="text-muted-foreground hover:text-primary transition" />
                </a>
                {proj.ext && (
                  <a href={proj.ext} target="_blank" rel="noopener noreferrer" aria-label="Demo">
                    <ExternalLink className="text-muted-foreground hover:text-primary transition" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

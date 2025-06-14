
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "🏙️ Casas Noturnas",
    cover: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400",
    desc: "Dashboard para gestão de eventos com análise de vendas, público e comandas.",
    tags: ["Power BI", "Firebase", "SQL", "Excel"],
    github: "",
    ext: "",
  },
  {
    title: "💰 MoneyMoney",
    cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400",
    desc: "Painel financeiro pessoal com consolidação de gastos, metas e patrimônio.",
    tags: ["Power BI", "Excel"],
    github: "",
    ext: "",
  },
  {
    title: "🎧 Monitoria – Call Center",
    cover: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
    desc: "Dashboard de qualidade em atendimento, com indicadores por operador e motivos de falha.",
    tags: ["Power BI", "Excel"],
    github: "",
    ext: "",
  },
  {
    title: "📺 Dashboard – Mídia",
    cover: "/lovable-uploads/f3b49063-97e9-49b2-a706-ef197223b87a.png",
    desc: "Visualização de KPIs de campanhas digitais integrando múltiplas fontes de dados.",
    tags: ["Power BI", "SQL", "Google Sheets", "Supermetrics"],
    github: "",
    ext: "",
  },
  {
    title: "🛒 Vendas – SPAR",
    cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
    desc: "Acompanhamento de vendas por loja, produto e região com análise de metas e desempenho.",
    tags: ["Power BI", "Excel", "SQL"],
    github: "",
    ext: "",
  },
  {
    title: "⚙️ Automação – VBA: Otimização de Processos no Excel",
    cover: "https://images.unsplash.com/photo-1516575150278-77136aed6920?w=400",
    desc: "Automatização de um processo diário com múltiplos PROCVs, formatações e inserções manuais que antes levava 1 hora e passou a ser executado em apenas 15 minutos com dois botões.",
    tags: ["Excel", "VBA (macros personalizadas)"],
    github: "",
    ext: "",
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
              <img
                src={proj.cover}
                alt={proj.title}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
              />
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
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}



import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "🏙️ Casas Noturnas",
    cover: "/lovable-uploads/cdd2d155-ef17-44e9-8805-e32bd412aa53.png",
    desc: "Dashboard para gestão de eventos com análise de vendas, público e comandas.",
    tags: ["Power BI", "Firebase", "SQL", "Excel"],
    github: "",
    ext: "https://app.powerbi.com/view?r=eyJrIjoiNzA0NDdhYmUtZDgyOC00MTJlLWIzZGEtODBlNTc5ODNhZjU1IiwidCI6ImJlYWZkYjE2LTVlY2YtNGVmNC1hMjA2LWJlMTEyMDA0ZDU4YiJ9",
  },
  {
    title: "💰 MoneyMoney",
    cover: "/lovable-uploads/841cb689-76f1-441f-893f-1a3371336b54.png",
    desc: "Painel financeiro pessoal com consolidação de gastos, metas e patrimônio.",
    tags: ["Power BI", "Excel"],
    github: "",
    ext: "https://app.powerbi.com/view?r=eyJrIjoiZWI5NGJlYzMtOTNlYS00MGUwLTliNjgtM2U5ZGY1NGI0ZjM4IiwidCI6ImJlYWZkYjE2LTVlY2YtNGVmNC1hMjA2LWJlMTEyMDA0ZDU4YiJ9",
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
    ext: "https://app.powerbi.com/view?r=eyJrIjoiYzFlMDQ5ZTMtY2Q2OS00YzBiLWI1MzgtMTRkMDQ3ODI5MGJjIiwidCI6ImJlYWZkYjE2LTVlY2YtNGVmNC1hMjA2LWJlMTEyMDA0ZDU4YiJ9",
  },
  {
    title: "🛒 Vendas – SPAR",
    cover: "/lovable-uploads/9dcf39a6-6117-4a5a-a21c-96eabbdb843c.png", // miniatura atualizada
    desc: "Acompanhamento de vendas por loja, produto e região com análise de metas e desempenho.",
    tags: ["Power BI", "Excel", "SQL"],
    github: "",
    ext: "https://app.powerbi.com/view?r=eyJrIjoiNWQzNWM3NTItNWRmMi00YjNmLWIzYzktZGMwNWQ5NThlNzFlIiwidCI6ImJlYWZkYjE2LTVlY2YtNGVmNC1hMjA2LWJlMTEyMDA0ZDU4YiJ9",
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
        {projects.map((proj) => {
          // Tornar imagem e título clicáveis quando houver link externo (para todos projetos desejados)
          const isClickableProj =
            proj.title === "📺 Dashboard – Mídia" ||
            proj.title === "💰 MoneyMoney" ||
            proj.title === "🏙️ Casas Noturnas" ||
            proj.title === "🛒 Vendas – SPAR";

          if (isClickableProj && proj.ext) {
            return (
              <Card
                key={proj.title}
                className="overflow-hidden shadow-lg rounded-lg group hover:scale-105 transition-transform animate-fade-in h-full"
              >
                <a
                  href={proj.ext}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus:ring-2 focus:ring-primary/70 h-full"
                  tabIndex={0}
                  title={`Abrir ${proj.title}`}
                  style={{ textDecoration: "none" }}
                >
                  <div>
                    <div className="h-56 bg-black relative overflow-hidden">
                      <img
                        src={proj.cover}
                        alt={proj.title}
                        className="w-full h-full transition-transform duration-300 object-contain bg-black group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="py-4 px-5 flex flex-col gap-2 !pb-3">
                      <h3 className="font-semibold text-lg hover:underline">
                        {proj.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{proj.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {proj.tags.map((tag) => (
                          <span key={tag} className="bg-accent/60 text-xs font-semibold px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </a>
              </Card>
            );
          }

          // Cards padrão (não clicáveis)
          return (
            <Card
              key={proj.title}
              className="overflow-hidden shadow-lg rounded-lg group hover:scale-105 transition-transform animate-fade-in h-full"
            >
              <div className="h-56 bg-muted relative overflow-hidden">
                <img
                  src={proj.cover}
                  alt={proj.title}
                  className="w-full h-full transition-transform duration-300 object-cover group-hover:scale-110"
                />
              </div>
              <CardContent className="py-4 px-5 flex flex-col gap-2">
                <h3 className="font-semibold text-lg">
                  {proj.title}
                </h3>
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
          );
        })}
      </div>
    </section>
  );
}

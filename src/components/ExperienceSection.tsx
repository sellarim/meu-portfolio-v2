
const experiences = [
  {
    title: "Analista de Dados",
    company: "Empresa Exemplo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
    period: "2022 - Atual",
    desc: "Modelagem de dados, construção de dashboards, integração de sistemas e processos analíticos para tomada de decisão.",
  },
  {
    title: "Certificação - Microsoft Power BI",
    company: "Microsoft",
    logo: "https://img.icons8.com/color/48/000000/microsoft.png",
    period: "2023",
    desc: "Certificado oficial em Power BI e relatórios interativos.",
  },
  {
    title: "Curso - Python para Dados",
    company: "DataCamp",
    logo: "https://seeklogo.com/images/D/datacamp-logo-241640C0C8-seeklogo.com.png",
    period: "2022",
    desc: "Curso intensivo de Python voltado para análise e tratamento de dados.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full py-20 px-6 md:px-16 bg-muted/70"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">📚 Experiência & Formação</h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
        {experiences.map(({ title, company, logo, period, desc }) => (
          <div key={title + company} className="flex gap-4 items-start bg-background rounded-xl shadow px-6 py-5 flex-1">
            <img src={logo} alt={company} className="w-12 h-12 object-contain rounded-md bg-white border p-1" />
            <div>
              <h3 className="font-bold text-base">{title}</h3>
              <span className="text-sm text-muted-foreground font-medium">{company}</span>
              <span className="ml-2 text-xs text-muted-foreground">{period}</span>
              <p className="text-sm mt-2 text-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

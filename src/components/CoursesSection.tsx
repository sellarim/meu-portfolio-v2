
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Certificação - Microsoft Power BI",
    institution: "Microsoft",
    logo: "https://img.icons8.com/color/48/000000/microsoft.png",
    period: "2023",
    desc: "Certificado oficial em Power BI e relatórios interativos.",
  },
  {
    title: "Python para Dados",
    institution: "DataCamp",
    logo: "https://seeklogo.com/images/D/datacamp-logo-241640C0C8-seeklogo.com.png",
    period: "2022",
    desc: "Curso intensivo de Python voltado para análise e tratamento de dados.",
  },
  {
    title: "Introdução ao SQL",
    institution: "Alura",
    logo: "https://www.alura.com.br/assets/api/logos/alura.svg",
    period: "2022",
    desc: "Fundamentos de SQL, consultas e manipulação de bancos de dados.",
  },
  {
    title: "Power Query e ETL",
    institution: "Coursera",
    logo: "https://www.coursera.org/images/coursera-favicon.ico",
    period: "2024",
    desc: "Automação e ETL de dados usando Power Query.",
  },
  {
    title: "Excel Avançado",
    institution: "Fundação Bradesco",
    logo: "https://www.ev.org.br/Content/img/icons/favicon-32x32.png",
    period: "2023",
    desc: "Ferramentas avançadas de análise e visualização no Excel.",
  },
  {
    title: "Estatística para Dados",
    institution: "Udemy",
    logo: "https://www.udemy.com/staticx/udemy/images/v7/favicon-udemy.ico",
    period: "2023",
    desc: "Conceitos estatísticos essenciais para análise de dados.",
  },
];

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="w-full py-20 px-6 md:px-16 bg-background"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
        Principais cursos e certificações:
      </h2>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-8 max-w-5xl mx-auto">
        {courses.map(({ title, institution, logo, period, desc }) => (
          <div
            key={title + institution}
            className="flex gap-4 items-start bg-muted rounded-xl shadow px-6 py-5 flex-1 min-w-[260px] md:max-w-[calc(33%-16px)]"
          >
            <img
              src={logo}
              alt={institution}
              className="w-12 h-12 object-contain rounded-md bg-white border p-1"
            />
            <div>
              <h3 className="font-bold text-base">{title}</h3>
              <span className="text-sm text-muted-foreground font-medium">{institution}</span>
              <span className="ml-2 text-xs text-muted-foreground">{period}</span>
              <p className="text-sm mt-2 text-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button
          asChild
          className="px-8 py-2 text-base"
          variant="outline"
        >
          <a
            href="https://www.linkedin.com/in/leo-miralles/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver todos os cursos e certificações
          </a>
        </Button>
      </div>
    </section>
  );
}


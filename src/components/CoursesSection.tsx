
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Compliance e proteção de dados",
    institution: "PUCRS",
    logo: "lovable-uploads/0f5f5f7f-eff1-445b-ba8f-07ad2e4600ee.png",
    period: "abr. 2025"
  },
  {
    title: "Banco de dados",
    institution: "Ada",
    logo: "lovable-uploads/00d4c0b5-b80c-479a-ab59-e0cb1501ec21.png",
    period: "jan. 2025"
  },
  {
    title: "Data Visualization with Python",
    institution: "IBM",
    logo: "lovable-uploads/ab00bd1b-9e09-4941-92f8-eb1fdf7ef1ea.png",
    period: "nov. 2024"
  },
  {
    title: "Inteligência Artificial - Google Cloud",
    institution: "FUNDAÇÃO FAT",
    logo: "lovable-uploads/bbf299cd-fa54-45c3-83b7-cb2cff58f2c6.png",
    period: "out. 2024"
  },
  {
    title: "Prompt Engineering Foundation Professional Certification - CPEFPC™",
    institution: "Certiprof",
    logo: "lovable-uploads/d9b96349-829f-498e-bf68-4d30c113ac6b.png",
    period: "out. 2024"
  },
  {
    title: "Cloud Essentials - Knowledge Badge",
    institution: "Amazon Web Services (AWS)",
    logo: "lovable-uploads/674841c1-7313-4269-ba9c-0e25deafd0bb.png",
    period: "set. 2024"
  }
];

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="w-full py-20 px-6 md:px-16 bg-muted"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
        <span role="img" aria-label="Gráfico" className="mr-2">📊</span>
        Principais cursos e certificações:
      </h2>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-8 max-w-5xl mx-auto">
        {courses.map(({ title, institution, logo, period }) => (
          <div
            key={title + institution}
            className="flex gap-4 items-start bg-background rounded-xl shadow px-6 py-5 flex-1 min-w-[260px] md:max-w-[calc(33%-16px)]"
          >
            <img
              src={logo}
              alt={institution}
              className="w-12 h-12 object-contain rounded-md bg-white border p-1"
            />
            <div>
              <h3 className="font-bold text-base text-primary">{title}</h3>
              <span className="text-sm text-muted-foreground font-medium">{institution}</span>
              <span className="ml-2 text-xs text-muted-foreground">{period}</span>
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



import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Compliance e proteção de dados",
    institution: "PUCRS",
    logo: "/lovable-uploads/0af3a170-d588-498f-823b-f86f7f6e47ad.png",
    period: "abr. 2025",
    desc: "Competências: Conformidade legal · LGPD"
  },
  {
    title: "Banco de dados",
    institution: "Ada",
    logo: "/lovable-uploads/2dbaf2ae-ca87-4911-bb11-cda69f853534.png",
    period: "jan. 2025",
    desc: ""
  },
  {
    title: "Data Visualization with Python",
    institution: "IBM",
    logo: "/lovable-uploads/010edcaa-2527-4993-b797-913c4c8a0d1d.png",
    period: "nov. 2024",
    desc: ""
  },
  {
    title: "Inteligência Artificial - Google Cloud",
    institution: "FUNDAÇÃO FAT",
    logo: "/lovable-uploads/2cc2f069-3eca-440c-8f38-522396550297.png",
    period: "out. 2024",
    desc: ""
  },
  {
    title: "Prompt Engineering Foundation Professional Certification - CPEFPC™",
    institution: "Certiprof",
    logo: "/lovable-uploads/18fb1a98-af23-40f3-bc7a-53ff2300a980.png",
    period: "out. 2024",
    desc: ""
  },
  {
    title: "Cloud Essentials - Knowledge Badge",
    institution: "Amazon Web Services (AWS)",
    logo: "/lovable-uploads/b8ad9a39-4e1e-4734-9590-3568a339d551.png",
    period: "set. 2024",
    desc: "Competências: Amazon Web Services · Amazon EC2 · Computação em nuvem · AWS Lambda · Amazon S3"
  }
];

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="w-full py-20 px-6 md:px-16 bg-background"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
        <span role="img" aria-label="Gráfico" className="mr-2">📊</span>
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
              {desc && <p className="text-sm mt-2 text-foreground">{desc}</p>}
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


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
];

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="w-full py-20 px-6 md:px-16 bg-background"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">📜 Cursos & Certificações</h2>
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
        {courses.map(({ title, institution, logo, period, desc }) => (
          <div key={title + institution} className="flex gap-4 items-start bg-muted rounded-xl shadow px-6 py-5 flex-1">
            <img src={logo} alt={institution} className="w-12 h-12 object-contain rounded-md bg-white border p-1" />
            <div>
              <h3 className="font-bold text-base">{title}</h3>
              <span className="text-sm text-muted-foreground font-medium">{institution}</span>
              <span className="ml-2 text-xs text-muted-foreground">{period}</span>
              <p className="text-sm mt-2 text-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

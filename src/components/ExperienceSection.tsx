
const educations = [
  {
    title: "Curso Superior de Tecnologia (CST), Ciência de dados",
    institution: "UNINTER Centro Universitário Internacional",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_UNINTER.png/1200px-Logo_UNINTER.png",
    period: "ago de 2024 - ago de 2026",
    desc: "",
  },
  {
    title: "Técnico em Administração",
    institution: "ETEC - Escola Técnica Estadual de São Paulo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Logo_etec_saopaulo.png",
    period: "2019 - 2020",
    desc: "Curso técnico em Administração",
  },
  {
    title: "Técnico em Informática",
    institution: "ETEC - Escola Técnica Estadual de São Paulo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Logo_etec_saopaulo.png",
    period: "2011 - 2012",
    desc: "Curso técnico em Informática, Tecnologia da Informação",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full py-20 px-6 md:px-16 bg-muted/70"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">🎓 Formação Acadêmica</h2>
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {educations.map(({ title, institution, logo, period, desc }) => (
          <div key={title + institution} className="flex gap-4 items-start bg-background rounded-xl shadow px-6 py-5">
            <img src={logo} alt={institution} className="w-12 h-12 object-contain rounded-md bg-white border p-1" />
            <div>
              <h3 className="font-bold text-base">{institution}</h3>
              <div className="text-sm text-muted-foreground font-medium">{title}</div>
              <span className="text-xs text-muted-foreground block mt-1">{period}</span>
              {desc && <p className="text-sm mt-2 text-foreground">{desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

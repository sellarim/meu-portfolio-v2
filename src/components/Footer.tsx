
const links = [
  { href: "#", label: "Início" },
  { href: "#projects", label: "Projetos" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experiência" },
  { href: "#contact", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="bg-muted/80 py-6 border-t border-border flex flex-col md:flex-row gap-2 items-center justify-between px-6 md:px-16">
      <nav className="flex gap-5 mb-2 md:mb-0">
        {links.map(({ href, label }) => (
          <a
            href={href}
            key={label}
            className="text-foreground hover:text-primary underline-offset-4 hover:underline transition text-sm font-medium"
          >{label}</a>
        ))}
      </nav>
      <span className="text-muted-foreground text-xs">© {new Date().getFullYear()} Seu Nome — Portfólio de Dados</span>
    </footer>
  );
}

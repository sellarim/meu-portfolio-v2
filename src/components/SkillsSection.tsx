
import { Code, Database, BarChart3, Layers, BookOpen } from "lucide-react";

const skills = [
  {
    category: "Linguagens",
    items: [
      { name: "Python", icon: <Code className="text-green-600" /> },
      { name: "SQL", icon: <Database className="text-blue-600" /> },
    ],
  },
  {
    category: "Ferramentas",
    items: [
      { name: "Power BI", icon: <BarChart3 className="text-yellow-500" /> },
      { name: "Git", icon: <Layers className="text-orange-500" /> },
    ],
  },
  {
    category: "Conceitos",
    items: [
      { name: "ETL/ELT", icon: <BookOpen className="text-purple-600" /> },
      { name: "Data Viz", icon: <BarChart3 className="text-cyan-500" /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full py-20 px-6 md:px-16 bg-background"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">🛠️ Skills & Tecnologias</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map(({ category, items }) => (
          <div key={category} className="bg-muted p-6 rounded-xl shadow flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-primary mb-2">{category}</h3>
            <ul className="flex flex-wrap gap-3">
              {items.map(({ name, icon }) => (
                <li key={name} className="flex items-center gap-2 bg-background border border-border px-3 py-2 rounded-lg text-sm shadow-sm">
                  {icon}
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

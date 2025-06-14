
import {
  Database,
  BarChart3,
  Layers,
  BookOpen,
  PieChart,
  Cloud,
  Mail,
  Chart,
  FileSpreadsheet,
  ClipboardCheck,
  MessageCircleCog,
  Tag,
  FileCode2,
  Server,
  Users,
} from "lucide-react";

const skills = [
  {
    category: "Dados & BI",
    items: [
      { name: "SQL (MySQL, Oracle, SQLite, Firebase, PostgreSQL)", icon: <Database className="text-blue-600" /> },
      { name: "Metabase", icon: <PieChart className="text-green-600" /> },
      { name: "Power BI", icon: <BarChart3 className="text-yellow-500" /> },
      { name: "Excel (Macros, VBA, fórmulas avançadas)", icon: <FileSpreadsheet className="text-green-700" /> },
      { name: "Python", icon: <FileCode2 className="text-lime-600" /> },
      { name: "DataViz", icon: <Chart className="text-cyan-500" /> },
      { name: "Adobe Analytics", icon: <BarChart3 className="text-gray-700" /> },
      { name: "PostgreSQL", icon: <Database className="text-indigo-600" /> },
    ],
  },
  {
    category: "ETL & Integração",
    items: [
      { name: "ETL via SQL, SuperMetrics, Google Sheets, Excel", icon: <Cloud className="text-blue-500" /> },
      { name: "Views por SQL (FTP/Servidor)", icon: <Server className="text-slate-500" /> },
      { name: "Unificação de bases", icon: <Layers className="text-orange-500" /> },
      { name: "Pipelines de dados com Python", icon: <BookOpen className="text-purple-600" /> },
    ],
  },
  {
    category: "CRM & ERP",
    items: [
      { name: "SAP (Layouts, extração automática)", icon: <ClipboardCheck className="text-green-600" /> },
      { name: "Zoho CRM", icon: <Users className="text-pink-600" /> },
      { name: "N-ERP", icon: <Database className="text-fuchsia-500" /> },
      { name: "Lorean", icon: <Database className="text-amber-600" /> },
    ],
  },
  {
    category: "Marketing e Métricas",
    items: [
      { name: "Campanhas (E-mail, SMS, WhatsApp)", icon: <Mail className="text-rose-600" /> },
      { name: "KPI de campanhas pagas e offline", icon: <BarChart3 className="text-yellow-600" /> },
      { name: "Tagueamento (Google Tag Manager)", icon: <Tag className="text-blue-700" /> },
      { name: "Parametrização de URLs", icon: <BookOpen className="text-cyan-600" /> },
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map(({ category, items }) => (
          <div key={category} className="bg-muted p-6 rounded-xl shadow flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-primary mb-2">{category}</h3>
            <ul className="flex flex-wrap gap-3">
              {items.map(({ name, icon }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 bg-background border border-border px-3 py-2 rounded-lg text-sm shadow-sm"
                >
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

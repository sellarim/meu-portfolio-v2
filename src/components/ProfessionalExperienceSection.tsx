import { useState } from "react";
import { Briefcase, Building2, MapPin, CalendarDays, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./ui/collapsible";
import { Button } from "./ui/button";

const experiences = [
  {
    company: "Digi",
    logo: "/lovable-uploads/2cd4df9d-0fbb-497f-8250-5335892f5cb0.png",
    location: "São Paulo, Brasil",
    roles: [
      {
        title: "Membro - Comitê de segurança da informação",
        period: "maio 2025 - Presente (2 meses)",
        activities: [],
      },
      {
        title: "Analista de Business Intelligence",
        period: "set 2024 - Presente (10 meses)",
        activities: [
          "Análise de dados com foco no financeiro",
          "Estratégia com diferentes equipes para alinhar interesses",
          "Criação de dashboards no Power BI, com foco em finanças",
          "Criação de extrato de pontos com Metabase e SQL",
          "Automação de processos usando VBA",
          "Projeções e controle de pontos em campanhas",
          "Segurança e documentação de dados",
          "Auditorias internas",
        ],
      },
    ],
  },
  {
    company: "Campari Group",
    logo: "/lovable-uploads/67f9333a-2a2b-41e9-ab4c-32ee1189c70d.png",
    location: "São Paulo, Brasil",
    roles: [
      {
        title: "Analista de Business Intelligence - Sênior",
        period: "out 2024 - jan 2025 (4 meses)",
        activities: [
          "Responsável pelo projeto On Trade",
          "Análise de vendas dos produtos Campari",
          "Criação/Manutenção de dashboards (Power BI)",
          "Elaboração de relatórios usando Zoho CRM",
          "Compartilhamento via Sharepoint"
        ],
      },
    ],
  },
  {
    company: "Club Yacht SP",
    logo: "/lovable-uploads/86760fdc-5871-4238-a4d3-9dc1c1180771.png",
    location: "São Paulo e Região, Brasil",
    roles: [
      {
        title: "Analista de Business Intelligence",
        period: "jan 2019 - dez 2024 (6 anos)",
        activities: [
          "Gestão analítica das casas noturnas Lions Nightclub, Club Yacht e Club Jerome",
          "Modelagem de banco de dados",
          "Criação de dashboards/relatórios gerenciais",
          "Segmentação e análise de clientes",
          "Definição de KPIs e indicadores",
          "Suporte a ações de marketing (e-mail, sms e WhatsApp)"
        ],
      },
    ],
  },
  {
    company: "Samsung Brasil",
    logo: "https://media.licdn.com/dms/image/C4D0BAQFUBQTT3V9sfg/company-logo_200_200/0/1630515594464/samsung_logo?e=1722470400&v=beta&t=yjl0btBNjFteZYh21Ml9UkmFQswesnjih_VksDMbp8Y",
    location: "São Paulo, Brasil",
    roles: [
      {
        title: "Analista de Relatórios",
        period: "jul 2024 - set 2024 (3 meses)",
        activities: [
          "Análise de dados de RMA",
          "Automação de planilhas (VBA)",
          "Geração de relatórios diários/gerenciais",
          "Desenvolvimento de consultas via SAP"
        ],
      },
    ],
  },
  {
    company: "Cheil Brasil",
    logo: "https://media.licdn.com/dms/image/C4E0BAQHMk2L96lpEkg/company-logo_200_200/0/1630633872570/cheil_logo?e=1722470400&v=beta&t=n5h4hvYP1drd7k5QIuTuVUFjnJELXZClvZZ_bETfxps",
    location: "São Paulo, Brasil",
    roles: [
      {
        title: "Coordenador de BI",
        period: "jul 2022 - nov 2022 (5 meses)",
        activities: [
          "Coordenação do time de BI Mídia",
          "Criação/manutenção de dashboards e relatórios",
          "Gestão de processos ETL",
          "Avaliação de desempenho da equipe"
        ]
      },
      {
        title: "Analista de Business Intelligence - PL",
        period: "out 2021 - jul 2022 (10 meses)",
        activities: [
          "Geração de insights a partir de dados",
          "Apoio à equipe de mídia",
          "Criação/manutenção de dashboards no Power BI/DataStudio",
          "Tratamento de dados pré e pós click (ETL)",
          "Gerenciamento de bases em Sheets, Supermetrics e Adobe Analytics"
        ]
      }
    ]
  },
  {
    company: "Comdata Group",
    logo: "https://media.licdn.com/dms/image/C4D0BAQF8UIWKsdDd7Q/company-logo_200_200/0/1631363807777/comdata_group_logo?e=1722470400&v=beta&t=rP87nL-8YqM3wM_XtFm6czql-51PG9Ztvw-1sLRSbyE",
    location: "São Paulo, Brasil",
    roles: [
      {
        title: "Analista de Business Intelligence",
        period: "nov 2021 - maio 2022 (7 meses)",
        activities: [
          "Relacionamento B2B",
          "Inovação em projetos",
          "Levantamento de requisitos com clientes",
          "Criação/apresentação de dashboards Power BI",
          "Geração de insights em projetos existentes"
        ]
      }
    ]
  },
  {
    company: "Artes em PVC",
    logo: "https://media.licdn.com/dms/image/C4E0BAQH1mB3_2gtnKQ/company-logo_200_200/0/1519862376166/artesempvc_logo?e=1722470400&v=beta&t=QML1zTkdmGA_q-a_EG9PSLh7dMBwvdg1i8dtF3_k9RA",
    location: "Brasil",
    roles: [
      {
        title: "Analista de Mídias Sociais",
        period: "set 2018 - jan 2019 (5 meses)",
        activities: [
          "Gestão de marketing digital (Facebook/Instagram)",
          "Manutenção de e-commerce",
          "Gestão de campanhas (Facebook/Google Ads)",
          "Segmentação e atendimento ao cliente"
        ]
      }
    ]
  },
  {
    company: "Autônomo",
    logo: "https://cdn-icons-png.flaticon.com/512/2991/2991073.png",
    location: "Brasil",
    roles: [
      {
        title: "Desenvolvedor de Aplicações Mobile",
        period: "2017 - 2019 (2 anos)",
        activities: [
          "Desenvolvimento de apps Android (JAVA + SQLite)",
          "Integração de webservices",
          "UX/UI para apps"
        ]
      }
    ]
  },
  {
    company: "Unitono Brasil",
    logo: "https://media.licdn.com/dms/image/C4D0BAQGKXMyy41mGVA/company-logo_200_200/0/1519891086209?e=1722470400&v=beta&t=o5nCsq56T4F0FI_NoAoqP8BKh2NVWhBJGVkEfKnX8tw",
    location: "São Bernardo do Campo",
    roles: [
      {
        title: "Assistente de Planejamento",
        period: "set 2017 - fev 2018 (6 meses)",
        activities: [
          "Gerenciamento de logins",
          "Manutenção de bases de dados",
          "Contato com clientes da EPS",
          "Criação de app Android para monitoramento operacional"
        ]
      }
    ]
  },
  {
    company: "Prefeitura de São Paulo",
    logo: "https://media.licdn.com/dms/image/C4E0BAQFgkqk-KmC1yw/company-logo_200_200/0/1519856080052/prefeitura_do_municipio_de_s_o_paulo_logo?e=1722470400&v=beta&t=u6p0WrUTFHuxu1-RsdwCCcX6JxoazqvCbFiqhv5gyWk",
    location: "São Paulo, SP",
    roles: [
      {
        title: "Estagiário de BI",
        period: "jan 2014 - jan 2015 (1 ano 1 mês)",
        activities: [
          "Elaboração de relatórios sobre o sistema municipal de saúde (SIGA-SAUDE)",
          "Uso dos sistemas BI Oracle 11g/Pentaho",
          "Auxílio em homologação de módulos do sistema",
          "Treinamento de servidores públicos em workshops"
        ]
      }
    ]
  }
];

export default function ProfessionalExperienceSection() {
  const [open, setOpen] = useState(false);

  const firstTwo = experiences.slice(0, 2);
  const remaining = experiences.slice(2);

  return (
    <section
      id="professional-experiences"
      className="w-full py-20 px-6 md:px-16 bg-background"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
        <Briefcase className="inline-block mr-2 mb-1" /> Experiências Profissionais
      </h2>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {/* Primeiras duas experiências sempre visíveis */}
        {firstTwo.map(({ company, logo, location, roles }) => (
          <div
            key={company}
            className="bg-muted rounded-xl shadow px-6 py-5 flex flex-col md:flex-row gap-6 animate-fade-in"
          >
            <img
              src={logo}
              alt={company}
              className="w-16 h-16 object-contain rounded-md bg-white border p-1 self-center md:self-start"
            />
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                <span className="font-bold text-base">{company}</span>
                <span className="flex items-center text-xs text-muted-foreground ml-0 sm:ml-3">
                  <MapPin className="w-4 h-4 mr-1" /> {location}
                </span>
              </div>
              {roles.map((role) => (
                <div key={role.title + role.period} className="mb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-[.95rem] font-medium text-primary flex items-center">
                      <Building2 className="w-4 h-4 mr-1" /> {role.title}
                    </span>
                    <span className="text-xs ml-0 sm:ml-3 text-muted-foreground flex items-center">
                      <CalendarDays className="w-4 h-4 mr-1" /> {role.period}
                    </span>
                  </div>
                  {role.activities.length > 0 && (
                    <ul className="list-disc pl-5 mt-1 text-[.95rem] text-foreground space-y-1">
                      {role.activities.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* O resto das experiências em um Collapsible */}
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleContent>
            <div className="flex flex-col gap-6">
              {remaining.map(({ company, logo, location, roles }) => (
                <div
                  key={company}
                  className="bg-muted rounded-xl shadow px-6 py-5 flex flex-col md:flex-row gap-6 animate-fade-in"
                >
                  <img
                    src={logo}
                    alt={company}
                    className="w-16 h-16 object-contain rounded-md bg-white border p-1 self-center md:self-start"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                      <span className="font-bold text-base">{company}</span>
                      <span className="flex items-center text-xs text-muted-foreground ml-0 sm:ml-3">
                        <MapPin className="w-4 h-4 mr-1" /> {location}
                      </span>
                    </div>
                    {roles.map((role) => (
                      <div key={role.title + role.period} className="mb-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="text-[.95rem] font-medium text-primary flex items-center">
                            <Building2 className="w-4 h-4 mr-1" /> {role.title}
                          </span>
                          <span className="text-xs ml-0 sm:ml-3 text-muted-foreground flex items-center">
                            <CalendarDays className="w-4 h-4 mr-1" /> {role.period}
                          </span>
                        </div>
                        {role.activities.length > 0 && (
                          <ul className="list-disc pl-5 mt-1 text-[.95rem] text-foreground space-y-1">
                            {role.activities.map((a) => (
                              <li key={a}>{a}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleContent>
          {/* Botão para expandir/ocultar */}
          {remaining.length > 0 && (
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                className="mx-auto mt-4 flex items-center gap-2"
                aria-expanded={open}
              >
                {open ? (
                  <>
                    Ver menos <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Ver mais <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </Button>
            </CollapsibleTrigger>
          )}
        </Collapsible>
      </div>
    </section>
  );
}

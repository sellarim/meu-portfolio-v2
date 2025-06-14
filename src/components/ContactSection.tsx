import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Linkedin, Github, Instagram, Youtube, Mail, MessageCircle } from "lucide-react";

const WhatsappIcon = MessageCircle;

const links = [
  { href: "https://www.linkedin.com/in/leo-miralles/", icon: <Linkedin /> },
  { href: "https://github.com/sellarim", icon: <Github /> },
  { href: "https://www.instagram.com/leonardomiralless/", icon: <Instagram /> },
  { href: "https://www.youtube.com/@leonardo-miralles", icon: <Youtube /> },
  { href: "mailto:leonardomiralles@hotmail.com", icon: <Mail /> },
  // WhatsApp link with chat icon as placeholder
  { href: "https://api.whatsapp.com/send?phone=5511945720468", icon: WhatsappIcon ? <WhatsappIcon /> : null },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Mensagem enviada!", description: "Retornarei em breve :)" });
      setForm({ name: "", email: "", msg: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-16 bg-background">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">📞 Contato</h2>
      {/* E-mail exposto */}
      <div className="flex justify-center mb-4">
        <a
          href="mailto:leonardomiralles@hotmail.com"
          className="text-primary text-lg font-semibold hover:underline"
        >
          leonardomiralles@hotmail.com
        </a>
      </div>
      <form className="w-full max-w-lg mx-auto flex flex-col gap-4 bg-muted rounded-xl shadow p-8" onSubmit={handleSubmit}>
        <input
          className="bg-background border border-border px-4 py-2 rounded outline-none focus:ring-2 focus:ring-primary transition"
          type="text"
          name="name"
          placeholder="Seu nome"
          required
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="bg-background border border-border px-4 py-2 rounded outline-none focus:ring-2 focus:ring-primary transition"
          type="email"
          name="email"
          placeholder="Seu e-mail"
          required
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          className="bg-background border border-border px-4 py-2 rounded outline-none focus:ring-2 focus:ring-primary transition min-h-[100px] resize-y"
          name="msg"
          placeholder="Digite sua mensagem"
          required
          value={form.msg}
          onChange={handleChange}
        />
        <Button
          type="submit"
          className="w-full mt-2"
          disabled={loading}
        >Enviar</Button>
      </form>
      <div className="flex justify-center gap-6 mt-6">
        {links.map(({ href, icon }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={href}>
            <Button variant="ghost" size="icon">{icon}</Button>
          </a>
        ))}
      </div>
    </section>
  );
}

import { Link } from "wouter";
import { ArrowLeft, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsappButton } from "@/components/layout/WhatsappButton";
import { Button } from "@/components/ui/button";
import { getWhatsappLink } from "@/lib/whatsapp";

const schedule = [
  { day: "Segunda-feira", hours: "08h às 18h" },
  { day: "Terça-feira", hours: "08h às 18h" },
  { day: "Quarta-feira", hours: "08h às 18h" },
  { day: "Quinta-feira", hours: "08h às 18h" },
  { day: "Sexta-feira", hours: "08h às 18h" },
  { day: "Sábado", hours: "08h às 12h" },
  { day: "Domingo", hours: "Fechado" },
];

export default function Horarios() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 max-w-2xl">
          <Link
            href="/"
            data-testid="link-voltar-inicio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o início
          </Link>

          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8" />
            </div>
            <span className="inline-block text-accent font-semibold tracking-wider text-sm mb-3 uppercase">
              Star Vidros
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Horário de Funcionamento
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Estamos prontos para te atender. Confira abaixo os dias e horários em que nossa equipe está disponível.
            </p>
          </div>

          <div className="bg-white clean-shadow border border-border rounded-2xl overflow-hidden mb-10">
            {schedule.map((item, index) => (
              <div
                key={item.day}
                data-testid={`row-horario-${index}`}
                className={`flex items-center justify-between px-6 md:px-8 py-5 ${
                  index !== schedule.length - 1 ? "border-b border-border" : ""
                } ${item.hours === "Fechado" ? "bg-secondary/30" : ""}`}
              >
                <span className="font-semibold text-foreground">{item.day}</span>
                <span
                  className={
                    item.hours === "Fechado"
                      ? "text-muted-foreground font-medium"
                      : "text-primary font-bold"
                  }
                >
                  {item.hours}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-secondary/30 border border-border rounded-2xl p-8 md:p-10 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-[#25D366] text-white flex items-center justify-center rounded-full mb-5">
              <FaWhatsapp className="w-7 h-7" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-3">
              Precisa de atendimento fora do horário?
            </h2>
            <p className="text-muted-foreground max-w-md mb-6 leading-relaxed">
              Envie sua mensagem pelo WhatsApp a qualquer momento. Respondemos assim que possível, sempre no próximo horário disponível.
            </p>
            <Button size="lg" className="bg-[#25D366] text-white hover:bg-[#1ebe57]" asChild>
              <a
                href={getWhatsappLink("Quero solicitar um orçamento")}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-whatsapp-horarios"
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}

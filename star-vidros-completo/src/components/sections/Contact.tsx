import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsappLink } from "@/lib/whatsapp";

export function Contact() {
  return (
    <section id="contato" className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-2">
            <span className="inline-block text-accent font-semibold tracking-wider text-sm mb-3 uppercase">
              Fale Conosco
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary">
              Solicite seu orçamento sem compromisso
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Nossa equipe está pronta para entender sua necessidade e oferecer a melhor solução em vidros para o seu espaço.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">WhatsApp & Telefone</h4>
                  <p className="text-lg font-medium text-primary">(34) 9216-6130</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">E-mail</h4>
                  <p className="text-lg font-medium text-primary">contato@starvidros.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Localização</h4>
                  <p className="text-muted-foreground leading-relaxed max-w-[250px]">Rua do amendoim, 2748 - Minas Gerais, Uberlândia - MG</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-secondary/30 clean-shadow border border-border rounded-2xl p-10 md:p-14 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-[#25D366] text-white flex items-center justify-center rounded-full mb-6">
              <FaWhatsapp className="w-10 h-10" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Fale direto com a gente pelo WhatsApp
            </h3>
            <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
              Clique no botão abaixo e converse agora mesmo com um de nossos consultores para solicitar seu orçamento sem compromisso.
            </p>
            <Button size="lg" className="w-full sm:w-auto text-base h-14 px-10 bg-[#25D366] text-white hover:bg-[#1ebe57]" asChild>
              <a
                href={getWhatsappLink("Quero solicitar um orçamento")}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-whatsapp-orcamento-contato"
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                Solicitar Orçamento no WhatsApp
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}

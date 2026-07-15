import { Button } from "@/components/ui/button";
import { getWhatsappLink } from "@/lib/whatsapp";

const heroImg = "/fotos/star-hero.jpg";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden bg-muted pt-20">
      {/* Background Image with Gradient Overlay for readability */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-transparent z-10" />
        <img
          src={heroImg}
          alt="Ambiente residencial com vidros"
          className="w-full h-full object-cover object-right"
        />
      </div>

      <div className="container relative z-20 mx-auto px-6">
        <div className="max-w-2xl opacity-0 animate-fade-in-up">
          <span className="inline-block text-accent font-semibold tracking-wider text-sm mb-4 uppercase">
            Excelência em Vidros Temperados
          </span>
          <h1 className="text-5xl md:text-6xl text-white mb-6 leading-tight text-balance">
            Beleza, segurança e luz para o seu ambiente.
          </h1>
          <p className="text-lg md:text-xl text-white mb-10 text-balance leading-relaxed">
            A Star Vidros transforma projetos residenciais e comerciais com soluções em vidro de alto padrão. Acabamento perfeito e instalação rápida.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" variant="accent" className="w-full sm:w-auto" asChild>
              <a
                href={getWhatsappLink("Quero solicitar um orçamento")}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-whatsapp-orcamento-hero"
              >
                Solicitar Orçamento Grátis
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm" onClick={() => scrollTo("servicos")}>
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

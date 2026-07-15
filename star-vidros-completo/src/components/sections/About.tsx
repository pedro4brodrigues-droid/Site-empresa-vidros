const aboutImg = "/fotos/star-sobre.jpg";

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="relative order-2 md:order-1">
            <div className="rounded-xl overflow-hidden clean-shadow">
              <img
                src={aboutImg}
                alt="Especialista inspecionando vidro"
                className="w-full h-full object-cover aspect-[4/3] md:aspect-[4/5]"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-secondary rounded-xl -z-10" />
            <div className="absolute top-8 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl -z-10" />
          </div>

          <div className="order-1 md:order-2">
            <span className="inline-block text-accent font-semibold tracking-wider text-sm mb-3 uppercase">
              Nossa História
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-primary">
              Referência em qualidade e segurança.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                A <strong>Star Vidros</strong> é especialista em transformar projetos arquitetônicos com a leveza e a transparência que só o vidro pode proporcionar. Atendemos residências e empresas com soluções sob medida.
              </p>
              <p>
                Nosso compromisso é entregar não apenas um produto, mas uma experiência impecável. Utilizamos materiais de primeira linha, garantindo que cada corte, acabamento e instalação sigam as mais rigorosas normas de segurança do mercado.
              </p>
              <p className="font-semibold text-foreground">
                Traga seu projeto para quem entende de vidro. A precisão que sua obra exige, com o acabamento que você merece.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 bg-secondary/50 p-6 rounded-xl border border-secondary">
              <div>
                <span className="block text-3xl font-display font-bold text-accent mb-1">10+</span>
                <span className="text-sm font-medium text-foreground">Anos de Mercado</span>
              </div>
              <div>
                <span className="block text-3xl font-display font-bold text-accent mb-1">100%</span>
                <span className="text-sm font-medium text-foreground">Clientes Satisfeitos</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

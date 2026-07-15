import { Ruler, ShieldCheck, Clock, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Ruler,
    title: "Melhor Preço de Uberlândia",
    description: "Oferecemos o melhor custo-benefício da região, sem abrir mão da qualidade e do acabamento premium."
  },
  {
    icon: ShieldCheck,
    title: "Seu projeto merece uma vidraçaria de confiança.",
    description: "Há anos atendendo Uberlândia com qualidade, pontualidade e instalação feita por quem entende do assunto."
  },
  {
    icon: Clock,
    title: "Entrega no Prazo",
    description: "Respeitamos o cronograma da sua obra. Nosso compromisso é entregar e instalar na data combinada."
  },
  {
    icon: ThumbsUp,
    title: "Garantia de Qualidade",
    description: "Equipe técnica qualificada e materiais premium garantem um acabamento impecável e duradouro."
  }
];

export function Features() {
  return (
    <section id="diferenciais" className="py-20 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Por que escolher a Star Vidros?
          </h2>
          <p className="text-white/80">
            Mais do que fornecer vidros, entregamos confiança. Cuidamos de cada detalhe para que o seu projeto seja um sucesso do início ao fim.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 text-center hover:bg-white/15 transition-colors">
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <feature.icon className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

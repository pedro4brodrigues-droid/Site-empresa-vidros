import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
const boxImg = "/fotos/star-box-galeria-1.jpg";
const boxGaleria2 = "/fotos/star-box-galeria-2.jpg";
const boxGaleria3 = "/fotos/star-box-galeria-3.jpg";
const portaImg = "/fotos/star-porta.jpg";
const janelaImg = "/fotos/star-janela.jpg";
const balcaoImg = "/fotos/star-balcao.jpg";
const espelhoImg = "/fotos/star-espelho.jpg";
const escadaImg = "/fotos/star-escada.jpg";

type Service = {
  title: string;
  description: string;
  image: string;
  gallery?: string[];
};

const services: Service[] = [
  {
    title: "Box de Vidro",
    description: "Banheiros modernos e elegantes com boxes em vidro temperado, sistemas variados e acabamento premium.",
    image: boxImg,
    gallery: [boxImg, boxGaleria2, boxGaleria3]
  },
  {
    title: "Portas de Vidro",
    description: "Sofisticação e iluminação para entradas residenciais e comerciais com portas pivotantes e de correr.",
    image: portaImg,
    gallery: [portaImg, "/fotos/star-porta-galeria-2.jpg", "/fotos/star-porta-galeria-3.jpg"]
  },
  {
    title: "Janelas de Vidro",
    description: "Luminosidade e controle térmico acústico com esquadrias de alta durabilidade e vedação impecável.",
    image: janelaImg,
    gallery: [janelaImg, "/fotos/star-janela-galeria-2.jpg", "/fotos/star-janela-galeria-3.jpg"]
  },
  {
    title: "Balcão de Vidro",
    description: "Elegância e funcionalidade para ambientes de cozinha e sala, com acabamentos de alta qualidade.",
    image: balcaoImg,
    gallery: [balcaoImg, "/fotos/star-balcao-galeria-2.jpg", "/fotos/star-balcao-galeria-3.jpg"]
  },
  {
    title: "Espelhos",
    description: "Amplie ambientes e traga requinte com espelhos sob medida, acabamentos em bisotê e lapidação.",
    image: espelhoImg
  },
  {
    title: "Escada de vidro",
    description: "Segurança sem bloquear a vista para sacadas e escadas. Fixação moderna com pinos inox ou embutida.",
    image: escadaImg,
    gallery: [escadaImg, "/fotos/star-escada-galeria-2.jpg", "/fotos/star-escada-galeria-3.jpg"]
  }
];

export function Services() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openGallery = (service: Service) => {
    setActiveService(service);
    setActiveImage(0);
    setGalleryOpen(true);
  };

  return (
    <section id="servicos" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold tracking-wider text-sm mb-3 uppercase">
            Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
            Soluções completas em vidro
          </h2>
          <p className="text-muted-foreground">
            Oferecemos uma linha completa de produtos para o seu projeto, sempre utilizando materiais de alta qualidade e equipe especializada na instalação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const hasGallery = !!service.gallery;
            return (
              <div key={index} className="bg-white rounded-xl overflow-hidden clean-shadow border border-border flex flex-col group">
                <button
                  type="button"
                  onClick={hasGallery ? () => openGallery(service) : undefined}
                  className={`relative aspect-[4/3] overflow-hidden text-left ${hasGallery ? "cursor-pointer" : "cursor-default"}`}
                  aria-label={hasGallery ? `Ver mais fotos de ${service.title}` : service.title}
                  data-testid={`button-gallery-${index}`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {hasGallery && (
                    <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver mais fotos
                    </span>
                  )}
                </button>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full mt-auto" 
                    onClick={scrollToContact}
                  >
                    Saiba Mais
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        <DialogContent className="max-w-3xl p-4 sm:p-6">
          <DialogTitle className="text-primary">{activeService?.title}</DialogTitle>
          <DialogDescription>
            {activeService?.gallery ? `${activeImage + 1} de ${activeService.gallery.length} fotos` : ""}
          </DialogDescription>

          {activeService?.gallery && (
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden bg-secondary/30">
                <img
                  src={activeService.gallery[activeImage]}
                  alt={`${activeService.title} - foto ${activeImage + 1}`}
                  className="w-full max-h-[60vh] object-contain mx-auto"
                />
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {activeService.gallery.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
                      i === activeImage ? "border-accent" : "border-transparent opacity-80 hover:opacity-100"
                    }`}
                    aria-label={`Ver foto ${i + 1}`}
                    data-testid={`thumb-gallery-${i}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

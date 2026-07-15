import { FaWhatsapp } from "react-icons/fa";
import { getWhatsappLink } from "@/lib/whatsapp";

export function WhatsappButton() {
  return (
    <a
      href={getWhatsappLink("Olá! Vim pelo site e gostaria de mais informações.")}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="link-whatsapp-float"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl md:h-16 md:w-16"
    >
      <FaWhatsapp className="h-7 w-7 md:h-8 md:w-8" />
    </a>
  );
}

// Digits only, international format: 55 (Brasil) + 34 (DDD) + 9216-6130
export const WHATSAPP_PHONE = "553492166130";

export function getWhatsappLink(message: string = "Quero solicitar um orçamento") {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

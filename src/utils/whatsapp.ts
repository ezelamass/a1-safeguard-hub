export const WHATSAPP_NUMBER = "5491133258129";

export const buildWhatsAppUrl = (interest: string) => {
  const msg = `Hola, estuve viendo los servicios de A1 Broker y estoy interesado en ${interest}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};

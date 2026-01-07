import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5511999999999"; // Substitua pelo número real
  const message = "Olá! Gostaria de saber mais sobre os serviços da Solluta.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.6)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-all duration-300 hover:scale-110 animate-pulse-glow"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" fill="white" />
    </a>
  );
};

export default WhatsAppButton;

import { MessageCircle } from "lucide-react";

const WhatsAppButtonSuperendividamento = () => {
  const handleClick = () => {
    window.open(
      `https://wa.me/5521991249699?text=${encodeURIComponent("Olá, Quero sair das dívidas!")}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="floating-btn flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5C] text-white font-bold w-14 h-14 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-1"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" fill="currentColor" />
    </button>
  );
};

export default WhatsAppButtonSuperendividamento;

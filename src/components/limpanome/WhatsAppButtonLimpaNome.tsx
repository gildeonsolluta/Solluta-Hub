import { MessageCircle } from "lucide-react";

const WhatsAppButtonLimpaNome = () => {
  const handleClick = () => {
    window.open("https://wa.me/+5521991249699?text=Olá! Quero limpar meu nome.", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      {/* Glow effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-xl transition-all duration-300 hover:scale-110">
        <MessageCircle className="w-7 h-7 text-white" fill="currentColor" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-card border border-border/50 px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
        <span className="font-medium text-sm text-foreground">Fale conosco!</span>
      </div>
    </button>
  );
};

export default WhatsAppButtonLimpaNome;

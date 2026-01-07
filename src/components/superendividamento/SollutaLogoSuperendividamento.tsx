import sollutaLogo from "@/assets/solluta-logo.png";

const SollutaLogoSuperendividamento = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={sollutaLogo}
        alt="Solluta Logo"
        className="w-10 h-10 object-contain"
      />
      <span className="text-2xl font-bold text-primary tracking-tight">
        Solluta
      </span>
    </div>
  );
};

export default SollutaLogoSuperendividamento;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, Lock, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

// URL do Google Apps Script Web App
const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbw1IA9RCgYmbeZgo0wgZD6V-mhaaZ2SwO6W_zM4kbCZeUkKKL-MHv2f6h484e_GnVnimQ/exec";

interface FormData {
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
}

const formatCPF = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  return numbers
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, "");
  return numbers
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
};

const LeadFormSuperendividamento = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.nome.trim() || formData.nome.trim().length < 3) {
      newErrors.nome = "Digite seu nome completo";
    }

    const cpfNumbers = formData.cpf.replace(/\D/g, "");
    if (cpfNumbers.length !== 11) {
      newErrors.cpf = "CPF deve ter 11 dígitos";
    }

    const phoneNumbers = formData.telefone.replace(/\D/g, "");
    if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
      newErrors.telefone = "Telefone inválido";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "cpf") {
      formattedValue = formatCPF(value);
    } else if (name === "telefone") {
      formattedValue = formatPhone(value);
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const sendToGoogleSheets = async (data: FormData): Promise<boolean> => {
    if (!GOOGLE_SHEETS_WEBHOOK_URL) {
      console.warn("Google Sheets webhook URL não configurada");
      return true;
    }

    try {
      const now = new Date();
      const dataFormatada = now.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      const dadosParaEnvio = {
        tipo: "formulario",
        data: dataFormatada,
        nome: data.nome,
        cpf: data.cpf,
        telefone: data.telefone,
        email: data.email,
      };

      await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosParaEnvio),
      });

      return true;
    } catch (error) {
      console.error("Erro ao enviar para Google Sheets:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Verifique os campos",
        description: "Por favor, preencha todos os campos corretamente.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    await sendToGoogleSheets(formData);

    // Salva no localStorage para a calculadora
    localStorage.setItem("superendividamento_form_preenchido", "true");
    localStorage.setItem("superendividamento_form_nome", formData.nome);

    toast({
      title: "Dados enviados com sucesso!",
      description: "Redirecionando para a calculadora...",
    });

    // Redireciona para a calculadora
    setTimeout(() => {
      navigate("/calculadora-superendividamento");
    }, 1500);

    setIsSubmitting(false);
  };

  return (
    <section id="formulario" className="py-20 bg-muted/30 dark:bg-muted/10 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container relative z-10">
        <div className="max-w-xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 dark:bg-accent/20 rounded-full px-4 py-2 mb-4">
              <Calculator className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-secondary dark:text-accent">
                Calculadora Gratuita
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-accent mb-4">
              Descubra Quanto Você Pode Economizar e Recomeçar!
            </h2>
            <p className="text-muted-foreground dark:text-foreground/80">
              Preencha o formulário abaixo para acessar a Calculadora de Alívio
              de Dívidas Solluta. Suas informações nos ajudarão a entender seu
              caso e garantir um atendimento prioritário e{" "}
              <strong className="text-foreground">totalmente sigiloso</strong>.
            </p>
          </div>

          {/* Form Card */}
          <div className="card-elevated p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo
                </label>
                <Input
                  id="nome"
                  name="nome"
                  placeholder="Digite seu nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                  className={errors.nome ? "border-destructive" : ""}
                />
                {errors.nome && (
                  <p className="text-sm text-destructive mt-1">{errors.nome}</p>
                )}
              </div>

              <div>
                <label htmlFor="cpf" className="block text-sm font-medium text-foreground mb-2">
                  CPF
                </label>
                <Input
                  id="cpf"
                  name="cpf"
                  placeholder="000.000.000-00"
                  value={formData.cpf}
                  onChange={handleChange}
                  maxLength={14}
                  className={errors.cpf ? "border-destructive" : ""}
                />
                {errors.cpf && (
                  <p className="text-sm text-destructive mt-1">{errors.cpf}</p>
                )}
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone (WhatsApp)
                </label>
                <Input
                  id="telefone"
                  name="telefone"
                  placeholder="(00) 00000-0000"
                  value={formData.telefone}
                  onChange={handleChange}
                  maxLength={15}
                  className={errors.telefone ? "border-destructive" : ""}
                />
                {errors.telefone && (
                  <p className="text-sm text-destructive mt-1">{errors.telefone}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full mt-6 py-6 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Enviando...
                  </>
                ) : (
                  <>
                    Calcular Meu Alívio Agora
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>

              {/* Privacy Notice */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
                <Lock className="w-4 h-4" />
                <span>Seus dados estão 100% protegidos</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSuperendividamento;

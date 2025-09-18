import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre o programa de revenda Kaskata.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse"
        size="icon"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;
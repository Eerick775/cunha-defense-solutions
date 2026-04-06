import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all hover:scale-105"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-semibold text-sm hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;

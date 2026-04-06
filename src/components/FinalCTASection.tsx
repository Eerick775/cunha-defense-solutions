import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-card to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="relative max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
          Sua Defesa Começa <span className="text-primary">Agora</span>
        </h2>

        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          As decisões que você toma hoje vão impactar o resto da sua vida.
          <br />
          <span className="text-foreground font-semibold">Não espere. Não adivinhe. Não arrisque.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-10 py-7 font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all" asChild>
            <a href="https://wa.me/5534996550410" target="_blank" rel="noopener noreferrer">
              Fale Com Erick Cunha Agora
            </a>
          </Button>
        </div>

        <p className="text-muted-foreground flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" />
          Disponível para casos urgentes
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;

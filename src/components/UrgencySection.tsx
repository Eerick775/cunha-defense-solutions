import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const UrgencySection = () => {
  const risks = ["Sua liberdade", "Sua carreira", "Sua reputação", "Sua estabilidade familiar"];

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-primary text-sm font-semibold">
          <AlertTriangle className="w-4 h-4" />
          Urgente
        </div>

        <h2 className="section-title">
          Cada Minuto Conta em um Processo Criminal
        </h2>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Quando você está sendo investigado ou já foi acusado, cada atraso pode custar tudo:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left">
          {risks.map((risk) => (
            <div key={risk} className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3">
              <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
              <span className="text-secondary-foreground font-medium">{risk}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4 pt-4">
          <p className="text-foreground font-semibold text-lg">
            A acusação já está montando o caso contra você.
            <br />
            <span className="text-primary">Você precisa de alguém montando o seu. Agora.</span>
          </p>
          <Button size="lg" className="text-lg px-8 py-6 font-bold shadow-lg shadow-primary/30" asChild>
            <a href="https://wa.me/5534996550410" target="_blank" rel="noopener noreferrer">
              Obter Defesa Jurídica Imediata
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;

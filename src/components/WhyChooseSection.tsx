import { Zap, MessageCircle, Target, Clock } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Defesa estratégica, não reativa" },
  { icon: MessageCircle, title: "Comunicação direta (sem intermediários)" },
  { icon: Target, title: "Foco em resultados, não em desculpas" },
  { icon: Clock, title: "Resposta imediata em situações urgentes" },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest">Por Que Erick Cunha</p>
          <h2 className="section-title">Por Que Escolher Erick Cunha?</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="flex items-start gap-4 bg-secondary rounded-xl p-6">
              <r.icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground font-semibold">{r.title}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-muted-foreground italic">
          Você não está apenas contratando um advogado.{" "}
          <span className="text-foreground font-semibold not-italic">
            Está escolhendo quem vai ficar entre você e uma condenação.
          </span>
        </p>
      </div>
    </section>
  );
};

export default WhyChooseSection;

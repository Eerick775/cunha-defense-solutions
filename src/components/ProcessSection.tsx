import { Phone, FileSearch, Shield } from "lucide-react";

const steps = [
  { icon: Phone, number: "01", title: "Contato", desc: "Você entra em contato por ligação ou WhatsApp" },
  { icon: FileSearch, number: "02", title: "Avaliação do Caso", desc: "Erick analisa sua situação" },
  { icon: Shield, number: "03", title: "Estratégia de Defesa", desc: "A ação imediata começa" },
];

const ProcessSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <p className="text-silver font-bold text-sm uppercase tracking-widest">Como Funciona</p>
          <h2 className="section-title">O Que Acontece Agora?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-2xl flex items-center justify-center mx-auto">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-primary font-bold text-sm">{step.number}</p>
              <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
              {i < 2 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-lg font-bold text-foreground">
          Quanto antes você agir, <span className="text-primary">mais opções você terá.</span>
        </p>
      </div>
    </section>
  );
};

export default ProcessSection;

import { Target, Search, FileX, ShieldCheck } from "lucide-react";

const AboutSection = () => {
  const capabilities = [
    { icon: Search, text: "Questionar provas" },
    { icon: FileX, text: "Expor erros processuais" },
    { icon: Target, text: "Reduzir ou arquivar acusações" },
    { icon: ShieldCheck, text: "Proteger seus direitos em todas as fases" },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-silver font-bold text-sm uppercase tracking-widest">Sobre</p>
            <h2 className="section-title">Conheça Erick Cunha</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Erick Cunha é advogado criminalista focado em proteger pessoas que enfrentam desafios jurídicos graves. Com uma abordagem <strong className="text-foreground">estratégica e agressiva</strong> de defesa, ele trabalha para proteger o seu futuro.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {capabilities.map((cap) => (
              <div key={cap.text} className="bg-card border border-border rounded-xl p-6 space-y-3 hover:border-primary/40 transition-colors">
                <cap.icon className="w-8 h-8 text-primary" />
                <p className="font-bold text-foreground">{cap.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

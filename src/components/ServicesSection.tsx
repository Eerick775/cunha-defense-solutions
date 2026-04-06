import { Scale, Swords, HandCoins, Heart, Car, Briefcase } from "lucide-react";

const services = [
  { icon: Scale, title: "Crimes de Drogas" },
  { icon: Swords, title: "Agressão e Crimes Violentos" },
  { icon: HandCoins, title: "Furto e Roubo" },
  { icon: Heart, title: "Violência Doméstica" },
  { icon: Car, title: "Crimes de Trânsito" },
  { icon: Briefcase, title: "Crimes de Colarinho Branco" },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest">Áreas de Atuação</p>
          <h2 className="section-title">Áreas de Defesa Criminal</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="group bg-secondary border border-border rounded-xl p-8 text-center space-y-4 hover:border-primary/50 hover:bg-muted transition-all cursor-default">
              <service.icon className="w-10 h-10 text-primary mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground">
          Não sabe em qual área seu caso se encaixa?{" "}
          <a href="https://wa.me/5534996550410" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
            Fale diretamente com Erick.
          </a>
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;

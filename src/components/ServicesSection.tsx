import { Scale, Swords, HandCoins, Heart, Car, Briefcase } from "lucide-react";

const services = [
  { icon: Scale, title: "Drug Offenses" },
  { icon: Swords, title: "Assault & Violent Crimes" },
  { icon: HandCoins, title: "Theft & Robbery" },
  { icon: Heart, title: "Domestic Violence" },
  { icon: Car, title: "DUI / Traffic Crimes" },
  { icon: Briefcase, title: "White Collar Crimes" },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest">Practice Areas</p>
          <h2 className="section-title">Criminal Defense Areas</h2>
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
          Not sure where your case fits?{" "}
          <span className="text-primary font-semibold cursor-pointer hover:underline">Speak directly with Erick.</span>
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;

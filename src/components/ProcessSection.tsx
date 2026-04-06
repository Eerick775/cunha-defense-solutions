import { Phone, FileSearch, Shield } from "lucide-react";

const steps = [
  { icon: Phone, number: "01", title: "Contact", desc: "You reach out via call or form" },
  { icon: FileSearch, number: "02", title: "Case Evaluation", desc: "Erick analyzes your situation" },
  { icon: Shield, number: "03", title: "Defense Strategy", desc: "Immediate action begins" },
];

const ProcessSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest">How It Works</p>
          <h2 className="section-title">What Happens Next?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-2xl flex items-center justify-center mx-auto">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-gold font-bold text-sm">{step.number}</p>
              <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
              {i < 2 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-lg font-semibold text-foreground">
          The sooner you act, <span className="text-primary">the more options you have.</span>
        </p>
      </div>
    </section>
  );
};

export default ProcessSection;

import { Zap, MessageCircle, Target, Clock } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Strategic, not reactive defense" },
  { icon: MessageCircle, title: "Direct communication (no middlemen)" },
  { icon: Target, title: "Focus on results, not excuses" },
  { icon: Clock, title: "Immediate response in urgent situations" },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest">Why Erick Cunha</p>
          <h2 className="section-title">Why Choose Erick Cunha?</h2>
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
          You're not just hiring a lawyer.{" "}
          <span className="text-foreground font-semibold not-italic">
            You're choosing who will stand between you and a conviction.
          </span>
        </p>
      </div>
    </section>
  );
};

export default WhyChooseSection;

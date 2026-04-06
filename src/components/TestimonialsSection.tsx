import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Erick agiu rápido e sabia exatamente o que fazer. Ele mudou o resultado do meu caso.",
  },
  {
    text: "Profissional, direto e extremamente competente. Me senti protegido o tempo todo.",
  },
  {
    text: "Se você está em apuros, ele é a pessoa que você quer ao seu lado.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest">Depoimentos</p>
          <h2 className="section-title">O Que Nossos Clientes Dizem</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-8 space-y-4 relative">
              <Quote className="w-8 h-8 text-primary/30 absolute top-6 right-6" />
              <div className="flex gap-1">
                {Array(5).fill(0).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed italic">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

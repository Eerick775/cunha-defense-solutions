import { Target, Search, FileX, ShieldCheck } from "lucide-react";

const AboutSection = () => {
  const capabilities = [
    { icon: Search, text: "Challenge evidence" },
    { icon: FileX, text: "Expose procedural errors" },
    { icon: Target, text: "Reduce or dismiss charges" },
    { icon: ShieldCheck, text: "Protect your rights at every stage" },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest">About</p>
            <h2 className="section-title">Meet Erick Cunha</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Erick Cunha is a criminal defense attorney focused on protecting individuals facing serious legal challenges. With a strategic and aggressive defense approach, he works to safeguard your future.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {capabilities.map((cap) => (
              <div key={cap.text} className="bg-card border border-border rounded-xl p-6 space-y-3 hover:border-primary/40 transition-colors">
                <cap.icon className="w-8 h-8 text-primary" />
                <p className="font-semibold text-foreground">{cap.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

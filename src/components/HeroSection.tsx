import { Phone, Shield, CheckCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lawyer.jpg";
import logo from "@/assets/logo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <img src={logo} alt="Erick Costa Cunha Advocacia" className="h-16 w-auto" />
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
                Advogado Criminalista
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                Você Não Precisa de Sorte.{" "}
                <span className="text-primary">Precisa da Defesa Certa.</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Acusações criminais podem destruir seu futuro. Erick Cunha luta para proteger sua liberdade, sua reputação e sua vida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all" asChild>
                <a href="https://wa.me/5534996550410" target="_blank" rel="noopener noreferrer">
                  Fale Com Erick Cunha Agora
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 font-semibold border-border hover:bg-secondary" asChild>
                <a href="https://wa.me/5534996550410" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Assistência Jurídica Imediata
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-2">
              {[
                { icon: Shield, text: "Especialista em Defesa Criminal" },
                { icon: CheckCircle, text: "Estratégia Comprovada" },
                { icon: Lock, text: "Atendimento Sigiloso e Imediato" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-gold/10 rounded-2xl blur-2xl" />
              <img
                src={heroImage}
                alt="Erick Cunha - Advogado Criminalista"
                className="relative rounded-2xl w-full max-w-md object-cover shadow-2xl"
                width={896}
                height={1152}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

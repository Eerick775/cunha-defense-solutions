import { Phone, Shield, CheckCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lawyer.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
                Criminal Defense Attorney
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                You Don't Need Luck.{" "}
                <span className="text-primary">You Need the Right Defense.</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Criminal charges can destroy your future. Erick Cunha fights to protect your freedom, your reputation, and your life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">
                Speak With Erick Cunha Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 font-semibold border-border hover:bg-secondary">
                <Phone className="w-5 h-5 mr-2" />
                Immediate Legal Assistance
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-2">
              {[
                { icon: Shield, text: "Criminal Defense Specialist" },
                { icon: CheckCircle, text: "Proven Case Strategy" },
                { icon: Lock, text: "Confidential & Immediate Support" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-gold/10 rounded-2xl blur-2xl" />
              <img
                src={heroImage}
                alt="Erick Cunha - Criminal Defense Attorney"
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

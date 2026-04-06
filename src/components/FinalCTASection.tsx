import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-card to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="relative max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
          Your Defense Starts <span className="text-primary">Right Now</span>
        </h2>

        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          The decisions you make today will impact the rest of your life.
          <br />
          <span className="text-foreground font-semibold">Don't wait. Don't guess. Don't risk it.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-10 py-7 font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">
            Speak With Erick Cunha Now
          </Button>
        </div>

        <p className="text-muted-foreground flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" />
          Available for urgent cases
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;

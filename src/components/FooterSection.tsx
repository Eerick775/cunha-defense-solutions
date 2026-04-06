import { Lock, MapPin, Phone, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">Erick Costa Cunha</h3>
            <p className="text-sm text-muted-foreground">Advogado Criminalista</p>
            <p className="text-sm text-muted-foreground">OAB/MG 223.211</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Contato</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="https://wa.me/5534996550410" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" /> (34) 99655-0410
              </a>
              <a href="mailto:erickcunha.advocacia@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" /> erickcunha.advocacia@gmail.com
              </a>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 flex-shrink-0" /> Rua Santa Cruz, 149 — São Francisco, Patos de Minas/MG</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Sigilo</h4>
            <p className="text-sm text-muted-foreground flex items-start gap-2">
              <Lock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              Todas as consultas são estritamente sigilosas e protegidas pelo sigilo profissional advocatício.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Erick Costa Cunha — Advogado Criminalista. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

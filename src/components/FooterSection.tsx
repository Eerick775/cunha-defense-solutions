import { Lock, MapPin, Phone, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-foreground">Erick Cunha</h3>
            <p className="text-sm text-muted-foreground">Criminal Defense Attorney</p>
            <p className="text-sm text-muted-foreground">OAB/XX 000.000</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> (00) 00000-0000</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@erickcunha.com</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> São Paulo, SP</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Confidentiality</h4>
            <p className="text-sm text-muted-foreground flex items-start gap-2">
              <Lock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              All consultations are strictly confidential and protected by attorney-client privilege.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Erick Cunha — Criminal Defense Attorney. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

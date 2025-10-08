import fluxCodeLogo from "@/assets/logo_fluxcode.png";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={fluxCodeLogo} alt="FluxCode Logo" className="h-12 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-muted-foreground hover:text-primary smooth-transition">
              Início
            </a>
            <a href="#servicos" className="text-muted-foreground hover:text-primary smooth-transition">
              Serviços
            </a>
            <a href="#sobre" className="text-muted-foreground hover:text-primary smooth-transition">
              Sobre
            </a>
            <a href="#contato" className="text-muted-foreground hover:text-primary smooth-transition">
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="bg-gradient-to-r from-primary via-secondary to-accent text-white hover:opacity-90 smooth-transition">
            Fale Conosco
          </Button>
        </div>
      </div>
    </header>
  );
};

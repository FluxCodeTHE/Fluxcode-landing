import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import fluxCodeLogo from "@/assets/logo_fluxcode.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={fluxCodeLogo} alt="FluxCode Logo" className="h-20 w-auto object-contain" />
            </div>
            <p className="text-muted-foreground text-sm">
              Transformando negócios através de automação inteligente e 
              agentes de IA. Soluções personalizadas para o futuro digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary smooth-transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary smooth-transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary smooth-transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Automação com IA
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Web Scraping
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Programação Personalizada
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Integração de Sistemas
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:contato@fluxcode.com.br"
                  className="text-muted-foreground hover:text-primary smooth-transition text-sm"
                >
                  contato@fluxcode.com.br
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+5511999999999"
                  className="text-muted-foreground hover:text-primary smooth-transition text-sm"
                >
                  +55 (11) 99999-9999
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  São Paulo, SP - Brasil
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} FluxCode. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
              Termos de Serviço
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary smooth-transition text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
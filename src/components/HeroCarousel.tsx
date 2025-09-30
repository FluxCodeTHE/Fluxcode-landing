import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import fluxCodeLogo from "@/assets/fluxcode-logo.jpg";

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  description: string;
  cta?: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: heroBg,
    title: "FluxCode - Automação Inteligente",
    description: "Transforme seu negócio com agentes de IA que automatizam processos complexos e aumentam sua produtividade.",
    cta: "Saiba Mais"
  },
  {
    id: 2,
    image: heroBg,
    title: "Soluções Personalizadas",
    description: "Desenvolvemos sistemas sob medida para suas necessidades específicas, desde webscraping até criação de aplicações completas.",
    cta: "Nossos Serviços"
  },
  {
    id: 3,
    image: heroBg,
    title: "Tecnologia Avançada",
    description: "Utilizamos as mais modernas tecnologias de IA e automação para entregar resultados excepcionais.",
    cta: "Entre em Contato"
  }
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-background via-background to-card">
      <div className="absolute inset-0 hero-gradient opacity-95">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
        
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container mx-auto px-6 lg:px-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Logo e Branding */}
                    <div className="flex justify-center lg:justify-end order-2 lg:order-1">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-3xl rounded-full"></div>
                        <img 
                          src={fluxCodeLogo} 
                          alt="FluxCode Logo" 
                          className="relative w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl animate-fade-in"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center lg:text-left order-1 lg:order-2">
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-gradient animate-fade-in leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-foreground/90 animate-fade-in [animation-delay:200ms] leading-relaxed">
                        {slide.description}
                      </p>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl glow-effect smooth-transition animate-fade-in [animation-delay:400ms]"
                      >
                        {slide.cta}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-card/60 backdrop-blur-sm border-primary/30 hover:bg-card/80 hover:border-primary smooth-transition"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-card/60 backdrop-blur-sm border-primary/30 hover:bg-card/80 hover:border-primary smooth-transition"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6 text-primary" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full smooth-transition ${
              index === currentSlide
                ? "bg-primary glow-effect"
                : "bg-muted hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
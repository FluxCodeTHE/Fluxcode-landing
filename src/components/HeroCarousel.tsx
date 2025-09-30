import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

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
    <section className="relative h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 hero-gradient">
        {/* Subtle background patterns */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
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
                  <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-gradient animate-fade-in leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl sm:text-2xl lg:text-3xl mb-10 text-foreground/80 animate-fade-in [animation-delay:200ms] max-w-4xl mx-auto leading-relaxed">
                      {slide.description}
                    </p>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-lg smooth-transition animate-fade-in [animation-delay:400ms]"
                    >
                      {slide.cta}
                    </Button>
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
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border hover:bg-muted smooth-transition"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border hover:bg-muted smooth-transition"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
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
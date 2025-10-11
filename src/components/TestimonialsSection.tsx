import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "CEO",
    company: "TechCorp Brasil",
    content: "A FluxCode transformou nossos processos de negócio. A automação com IA reduziu em 70% o tempo gasto em tarefas repetitivas. Excelente trabalho!",
    rating: 5
  },
  {
    id: 2,
    name: "Maria Santos",
    role: "Diretora de Operações",
    company: "InnovaSolutions",
    content: "Trabalhar com a FluxCode foi excepcional. Eles desenvolveram uma solução de webscraping personalizada que nos deu vantagem competitiva no mercado.",
    rating: 5
  },
  {
    id: 3,
    name: "João Oliveira",
    role: "Gerente de TI",
    company: "DataFlow Ltda",
    content: "A equipe da FluxCode é altamente profissional e técnica. Entregaram um sistema complexo de automação dentro do prazo e superaram nossas expectativas.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Conheça as experiências de empresas que transformaram seus negócios com nossas soluções
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="p-8 card-gradient hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">
                  {testimonial.role} - {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

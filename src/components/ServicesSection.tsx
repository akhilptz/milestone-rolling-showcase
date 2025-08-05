import { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Service {
  title: string;
  icon: string;
  services: string[];
  color: 'primary' | 'orange';
}

const services: Service[] = [
  {
    title: "Milestone Academy",
    icon: "🎓",
    services: [
      "Financial Management",
      "Skill Development", 
      "Leadership and Management Training",
      "Communication",
      "Investment and Wealth Management"
    ],
    color: 'primary'
  },
  {
    title: "Milestone Jobs", 
    icon: "💼",
    services: [
      "Resume Building",
      "Job Search Assistance",
      "Interview Preparation", 
      "Post Placement Support",
      "Office Etiquettes"
    ],
    color: 'orange'
  }
];

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange to-primary bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive career solutions designed to guide you from planning to placement and beyond
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="service-card opacity-0 transform translate-y-8 transition-all duration-700 hover:shadow-elegant group border-0 bg-gradient-to-br from-background to-secondary/50 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-8 relative">
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                  service.color === 'primary' ? 'bg-gradient-to-br from-primary to-primary-glow' : 'bg-gradient-to-br from-orange to-orange-glow'
                }`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 ${
                    service.color === 'primary' 
                      ? 'bg-gradient-to-r from-primary to-primary-glow' 
                      : 'bg-gradient-to-r from-orange to-orange-glow'
                  }`}>
                    <span className="filter drop-shadow-lg">
                      {service.icon}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-3xl font-bold text-center mb-8 transition-colors duration-300 ${
                    service.color === 'primary'
                      ? 'text-primary group-hover:text-primary-glow'
                      : 'text-orange group-hover:text-orange-glow'
                  }`}>
                    {service.title}
                  </h3>
                  
                  {/* Services List */}
                  <div className="space-y-4">
                    {service.services.map((serviceItem, serviceIndex) => (
                      <div 
                        key={serviceIndex}
                        className="flex items-center space-x-3 group-hover:transform group-hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${serviceIndex * 50}ms` }}
                      >
                        <div className={`w-2 h-2 rounded-full ${
                          service.color === 'primary' ? 'bg-primary' : 'bg-orange'
                        } group-hover:scale-150 transition-transform duration-300`} />
                        <Badge 
                          variant="secondary" 
                          className="text-foreground font-medium py-2 px-4 bg-secondary/80 hover:bg-secondary transition-colors duration-300"
                        >
                          {serviceItem}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
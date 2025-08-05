import { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface AboutCard {
  title: string;
  content: string;
  icon: string;
}

const aboutCards: AboutCard[] = [
  {
    title: "Who We Are",
    content: "We are a team of enthusiastic career consultants who are passionate about helping youngsters to pave the way towards a prosperous future. With our guidance, you won't just find a job; you'll embark on a journey of growth, development, and achievement.",
    icon: "👥"
  },
  {
    title: "Our Purpose",
    content: "Our purpose is simple yet powerful: To EMPOWER you. We recognize the distinctiveness of every individual, along with their aspirations and dreams. This is why we provide a spectrum of services, from job consultancy to financial education, tailored precisely to address your requirements and ambitions.",
    icon: "🎯"
  },
  {
    title: "Why Choose Us",
    content: "With a deep understanding of the challenges individuals face in their career paths, we tailor our services to provide tangible solutions. Whether you're a recent graduate seeking direction or a professional aiming for growth, Milestone Career Planner is your guide to unlocking your true potential.",
    icon: "⭐"
  }
];

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.about-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
              }, index * 200);
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
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange to-primary bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering careers and enriching lives through personalized guidance and comprehensive support
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <Card 
              key={index}
              className="about-card opacity-0 transform translate-y-8 transition-all duration-700 hover:shadow-elegant group border-0 bg-gradient-to-br from-white to-secondary/30 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center relative overflow-hidden">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" 
                     style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-lg" />
                </div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-6xl mb-6 group-hover:animate-bounce">
                    {card.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-orange transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {card.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
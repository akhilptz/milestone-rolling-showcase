import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import heroFamily from '@/assets/hero-family-success.jpg';
import heroCareer from '@/assets/hero-career-planning.jpg';
import heroServices from '@/assets/hero-services.jpg';
import heroPartnership from '@/assets/hero-partnership.jpg';

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  background: string;
  cta: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "Not EVERYONE can be ONE SUCCESSFUL",
    subtitle: "But with the right guidance, anyone can achieve their dreams",
    background: heroFamily,
    cta: "Start Your Journey"
  },
  {
    id: 2,
    title: "Your DREAM CAREER Awaits",
    subtitle: "Let Us Be Your TRUSTED GUIDE",
    background: heroCareer,
    cta: "Explore Opportunities"
  },
  {
    id: 3,
    title: "EXPLORE OUR SERVICES",
    subtitle: "Comprehensive career solutions tailored for you",
    background: heroServices,
    cta: "View Services"
  },
  {
    id: 4,
    title: "More than advice,",
    subtitle: "PARTNERSHIP is what we truly offer.",
    background: heroPartnership,
    cta: "Partner With Us"
  }
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000); // Auto advance every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 400);
  };

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 400);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 400);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.background})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
      ))}

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-primary/30 rounded-full animate-float" />
        <div className="absolute bottom-32 right-16 w-12 h-12 border-2 border-orange/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-20 w-8 h-8 bg-primary/20 rounded-full animate-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-6 text-center">
          <div className={`transition-all duration-800 ease-out ${
            isAnimating ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
          }`}>
            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title.split(' ').map((word, index) => {
                const isHighlight = ['EVERYONE', 'ONE', 'SUCCESSFUL', 'DREAM', 'CAREER', 'TRUSTED', 'GUIDE', 'EXPLORE', 'SERVICES', 'PARTNERSHIP'].includes(word);
                return (
                  <span
                    key={index}
                    className={`inline-block mr-3 ${
                      isHighlight 
                        ? 'bg-gradient-to-r from-orange to-primary bg-clip-text text-transparent animate-glow' 
                        : 'text-white'
                    }`}
                  >
                    {word}
                  </span>
                );
              })}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-medium max-w-4xl mx-auto leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA Button */}
            <Button 
              variant="default"
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-orange to-primary hover:from-orange-glow hover:to-primary-glow text-white font-semibold px-8 py-6 text-lg rounded-full shadow-elegant hover:shadow-glow transform hover:scale-105 transition-all duration-300"
            >
              {slides[currentSlide].cta}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        disabled={isAnimating}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNextSlide}
        disabled={isAnimating}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
        <div 
          className="h-full bg-gradient-to-r from-orange to-primary transition-all duration-5000 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            animation: isAnimating ? 'none' : 'pulse 2s ease-in-out infinite'
          }}
        />
      </div>
    </section>
  );
};
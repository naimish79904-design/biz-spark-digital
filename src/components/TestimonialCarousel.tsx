import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStartup Inc",
      company: "TechStartup Inc",
      content: "TechFlow transformed our digital presence completely. Their attention to detail and innovative approach exceeded all expectations. The ROI has been incredible!",
      rating: 5,
      initials: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Founder, E-commerce Plus", 
      company: "E-commerce Plus",
      content: "Working with TechFlow was a game-changer. They delivered a stunning mobile app that increased our user engagement by 300%. Absolutely professional team!",
      rating: 5,
      initials: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, BrandCorp",
      company: "BrandCorp",
      content: "The digital marketing strategy TechFlow created for us resulted in 250% increase in leads. Their expertise in both development and marketing is unmatched.",
      rating: 5,
      initials: "ER"
    },
    {
      name: "David Kumar",
      role: "CTO, InnovateHub",
      company: "InnovateHub", 
      content: "TechFlow's technical expertise is outstanding. They built a complex web platform that handles millions of users seamlessly. Highly recommended!",
      rating: 5,
      initials: "DK"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="glass-card hover-lift">
                <CardContent className="p-8 text-center">
                  <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
                  
                  <blockquote className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <Avatar className="w-12 h-12 border-2 border-primary/20">
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-primary">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary shadow-glow' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
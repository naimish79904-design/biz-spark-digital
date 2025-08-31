import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Code2,
  Smartphone,
  Palette,
  Database,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Zap
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom web solutions with modern technologies like React, Node.js, and PHP.",
      technologies: ["React", "Node.js", "PHP", "Laravel"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      technologies: ["Flutter", "React Native", "iOS", "Android"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that convert and engage.",
      technologies: ["Figma", "Adobe", "Prototyping", "User Research"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive marketing strategies to grow your online presence.",
      technologies: ["SEO", "PPC", "Social Media", "Content"]
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Seasoned developers and designers with years of experience"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering measurable business outcomes"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile development process for quick time-to-market"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-20" />
        <div className="max-w-7xl mx-auto text-center relative">
          <Badge variant="outline" className="mb-6 border-primary/20 text-primary bg-primary/10">
            🚀 Transforming Ideas into Digital Reality
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Build Your
            <span className="text-gradient block">Digital Presence</span>
            with Expert Solutions
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We help businesses thrive online with custom web development, mobile apps, 
            stunning designs, and powerful marketing strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-spring text-lg px-8 py-3">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40 transition-smooth text-lg px-8 py-3">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-spring">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-gradient">TechFlow</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We combine technical expertise with creative vision to deliver 
                exceptional digital experiences that drive real business results.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to="/about" className="inline-block mt-8">
                <Button variant="outline" className="border-primary/20 hover:border-primary/40 transition-smooth">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card/50 border-border/50 p-6">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </Card>
                <Card className="bg-card/50 border-border/50 p-6 mt-8">
                  <div className="text-3xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </Card>
                <Card className="bg-card/50 border-border/50 p-6 -mt-4">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </Card>
                <Card className="bg-card/50 border-border/50 p-6 mt-4">
                  <div className="text-3xl font-bold text-accent mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-spring text-lg px-8 py-3">
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40 transition-smooth text-lg px-8 py-3">
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
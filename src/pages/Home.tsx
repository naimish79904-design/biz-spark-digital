import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import AnimatedCounter from "@/components/AnimatedCounter";
import FloatingElements from "@/components/FloatingElements";
import TestimonialCarousel from "@/components/TestimonialCarousel";
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
  Zap,
  Sparkles,
  Rocket,
  Award,
  Globe,
  Star,
  Play,
  Eye,
  Heart,
  Coffee
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Cutting-edge web solutions that drive results and engage users.",
      technologies: ["React", "Node.js", "PHP", "Laravel"],
      color: "from-blue-500 to-cyan-500",
      features: ["Custom CMS", "E-commerce", "PWA", "API Integration"]
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform apps with stunning user experiences.",
      technologies: ["Flutter", "React Native", "iOS", "Android"],
      color: "from-purple-500 to-pink-500",
      features: ["Cross-platform", "Native iOS", "Android", "App Store"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful designs that convert visitors into customers.",
      technologies: ["Figma", "Adobe", "Prototyping", "User Research"],
      color: "from-green-500 to-teal-500",
      features: ["User Research", "Wireframing", "Prototyping", "Testing"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that accelerate growth.",
      technologies: ["SEO", "PPC", "Social Media", "Analytics"],
      color: "from-orange-500 to-red-500",
      features: ["SEO", "PPC Ads", "Social Media", "Analytics"]
    }
  ];

  const achievements = [
    { icon: Users, number: 50, suffix: "+", label: "Happy Clients", description: "Satisfied customers worldwide" },
    { icon: Code2, number: 150, suffix: "+", label: "Projects", description: "Successfully delivered" },
    { icon: Award, number: 98, suffix: "%", label: "Success Rate", description: "Client satisfaction" },
    { icon: Globe, number: 15, suffix: "+", label: "Countries", description: "Global reach" }
  ];

  const expertise = [
    { name: "Frontend Development", percentage: 95, color: "bg-blue-500" },
    { name: "Backend Development", percentage: 90, color: "bg-green-500" },
    { name: "Mobile Development", percentage: 88, color: "bg-purple-500" },
    { name: "UI/UX Design", percentage: 92, color: "bg-pink-500" },
    { name: "Digital Marketing", percentage: 85, color: "bg-orange-500" }
  ];

  const caseStudies = [
    {
      title: "E-Commerce Revolution",
      client: "RetailCorp",
      results: "300% Sales Increase",
      image: "bg-gradient-to-br from-blue-600 to-purple-600",
      technologies: ["React", "Node.js", "MongoDB"],
      description: "Complete platform redesign resulting in massive growth"
    },
    {
      title: "Healthcare Innovation",
      client: "MedTech Solutions", 
      results: "50K+ Users",
      image: "bg-gradient-to-br from-green-600 to-teal-600",
      technologies: ["Flutter", "Firebase", "AI"],
      description: "Mobile app connecting patients with healthcare providers"
    },
    {
      title: "Financial Dashboard",
      client: "FinanceHub",
      results: "40% Time Saved", 
      image: "bg-gradient-to-br from-indigo-600 to-blue-600",
      technologies: ["Vue.js", "Python", "ML"],
      description: "Advanced analytics platform for financial institutions"
    }
  ];

  return (
    <div className="min-h-screen pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 particle-container">
        <FloatingElements />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <Badge variant="outline" className="mb-8 border-primary/30 text-primary bg-primary/10 hover-glow text-lg px-6 py-2">
              <Sparkles className="w-5 h-5 mr-2" />
              Transforming Digital Dreams into Reality
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-slide-up">
            Crafting
            <span className="text-gradient block shimmer">Exceptional</span>
            <span className="text-5xl md:text-6xl lg:text-7xl">Digital Experiences</span>
          </h1>
          
          <p className="text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We don't just build websites and apps – we create digital masterpieces that captivate audiences, drive engagement, and accelerate business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="magnetic-btn bg-gradient-primary hover:shadow-glow transition-spring text-xl px-10 py-4 group">
              <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce-gentle" />
              Launch Your Project
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="glass-card hover-lift border-primary/30 hover:border-primary text-xl px-10 py-4 group">
              <Play className="w-6 h-6 mr-3" />
              Watch Our Story
            </Button>
          </div>

          {/* Achievement Counters */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {achievements.map((achievement, index) => (
              <Card key={index} className="glass-card hover-lift text-center p-6 group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-spring group-hover:scale-110">
                  <achievement.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <AnimatedCounter 
                  end={achievement.number} 
                  suffix={achievement.suffix}
                  className="text-3xl font-bold text-gradient mb-2"
                />
                <div className="text-lg font-semibold text-foreground mb-1">{achievement.label}</div>
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-dark relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-accent/30 text-accent bg-accent/10">
              <Target className="w-4 h-4 mr-2" />
              Our Expertise
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Services That <span className="text-gradient">Inspire</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We combine technical excellence with creative innovation to deliver solutions that don't just meet expectations – they redefine them.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="group glass-card hover-lift overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-spring group-hover:scale-110`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.technologies[0]}+
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-smooth">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs hover:bg-primary/10 transition-smooth">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Expertise Bars */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Technical Mastery</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Years of experience and countless projects have honed our skills across diverse technologies and platforms.
              </p>
              <div className="space-y-6">
                {expertise.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out animate-fade-in`}
                        style={{ width: `${skill.percentage}%`, animationDelay: `${index * 0.2}s` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="glass-card p-8 text-center hover-lift">
                <Coffee className="w-16 h-16 text-primary mx-auto mb-6 animate-bounce-gentle" />
                <h4 className="text-2xl font-bold mb-4">Our Development Philosophy</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in writing clean, maintainable code that scales. Every project is crafted with passion, precision, and a relentless pursuit of perfection.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary bg-primary/10">
              <Eye className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Real Results, <span className="text-gradient">Real Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our portfolio speaks volumes about our commitment to excellence and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group glass-card hover-lift overflow-hidden">
                <div className={`h-48 ${study.image} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-smooth"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="bg-white/20 text-white border-0 mb-2">
                      {study.results}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-smooth">
                    {study.title}
                  </h3>
                  <p className="text-sm text-primary mb-3">{study.client}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {study.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
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

      {/* Testimonials */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 border-accent/30 text-accent bg-accent/10">
              <Heart className="w-4 h-4 mr-2" />
              Client Love
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it – hear from the businesses we've helped transform.
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative particle-container">
        <FloatingElements />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Badge variant="outline" className="mb-8 border-primary/30 text-primary bg-primary/10 text-lg px-6 py-2">
            <Zap className="w-5 h-5 mr-2" />
            Ready to Begin?
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Let's Create Something
            <span className="text-gradient block">Extraordinary Together</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Your vision, our expertise – the perfect combination for digital success. 
            Start your journey with a free consultation and discover what's possible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button size="lg" className="magnetic-btn bg-gradient-primary hover:shadow-glow transition-spring text-xl px-10 py-4 group">
                <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce-gentle" />
                Start Your Project Now
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="glass-card hover-lift border-primary/30 hover:border-primary text-xl px-10 py-4 group">
                <Eye className="w-6 h-6 mr-3" />
                Explore Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
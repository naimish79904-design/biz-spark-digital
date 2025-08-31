import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Award,
  Lightbulb,
  Heart,
  Zap,
  Globe,
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay at the forefront of technology, constantly exploring new solutions to deliver cutting-edge results."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in every project we deliver. Our passion drives us to exceed expectations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring their vision becomes reality through open communication."
    },
    {
      icon: Award,
      title: "Quality",
      description: "We never compromise on quality. Every line of code, every design element is crafted with precision and care."
    }
  ];

  const stats = [
    { number: "50+", label: "Happy Clients" },
    { number: "100+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Technologies Mastered" }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to help businesses establish their digital presence"
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Successfully delivered our first enterprise-level project"
    },
    {
      year: "2021",
      title: "Team Expansion", 
      description: "Grew our team to include specialized developers and designers"
    },
    {
      year: "2022",
      title: "Mobile Focus",
      description: "Added comprehensive mobile app development services"
    },
    {
      year: "2023",
      title: "Marketing Integration",
      description: "Launched full-stack digital marketing services"
    },
    {
      year: "2024",
      title: "Innovation Leader",
      description: "Recognized as a leading digital solutions provider"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-6 border-primary/20 text-primary bg-primary/10">
                About TechFlow
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transforming Ideas into 
                <span className="text-gradient block">Digital Reality</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We are a passionate team of developers, designers, and digital marketers 
                dedicated to helping businesses thrive in the digital world. Our mission is 
                to create innovative solutions that drive growth and success.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-spring">
                  Work With Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-card/50 border-border/50 p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and define who we are as a team
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-500 text-center hover:shadow-card hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-spring">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a small startup to a trusted digital solutions provider
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                  <h3 className="text-lg font-semibold mb-3">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
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
                We don't just build websites and apps – we create digital experiences 
                that drive real business results and help our clients achieve their goals.
              </p>
              
              <div className="space-y-4">
                {[
                  "Expert team with 5+ years of combined experience",
                  "Comprehensive solutions from design to deployment",
                  "Agile development process for faster delivery",
                  "24/7 support and maintenance services",
                  "Transparent communication throughout projects",
                  "Competitive pricing without compromising quality"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-card/50 border-border/50 p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glow opacity-10" />
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                  <p className="text-muted-foreground mb-6">
                    Let's discuss your project and see how we can help bring your vision to life.
                  </p>
                  <div className="space-y-4">
                    <Link to="/contact" className="block">
                      <Button size="lg" className="w-full bg-gradient-primary hover:shadow-glow transition-spring">
                        Get Free Consultation
                      </Button>
                    </Link>
                    <Link to="/services" className="block">
                      <Button size="lg" variant="outline" className="w-full border-primary/20 hover:border-primary/40 transition-smooth">
                        View Our Services
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
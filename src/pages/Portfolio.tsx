import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Github,
  Globe,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  Users,
  ArrowRight
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A complete e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      type: "web",
      icon: ShoppingCart,
      features: ["Payment Gateway", "Inventory System", "Admin Panel", "Mobile Responsive"]
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description: "Cross-platform mobile app for healthcare providers with appointment scheduling and patient management.",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      technologies: ["React Native", "Firebase", "Redux", "Push Notifications"],
      type: "mobile",
      icon: Smartphone,
      features: ["Real-time Chat", "Appointment System", "Patient Records", "Telemedicine"]
    },
    {
      title: "Digital Marketing Dashboard",
      category: "Marketing Platform",
      description: "Comprehensive analytics dashboard for tracking marketing campaigns across multiple channels.",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Chart.js"],
      type: "web",
      icon: TrendingUp,
      features: ["Multi-channel Analytics", "Real-time Reporting", "Campaign Management", "ROI Tracking"]
    },
    {
      title: "Social Networking Platform",
      category: "Web & Mobile",
      description: "Full-stack social platform with real-time messaging, content sharing, and community features.",
      image: "bg-gradient-to-br from-purple-500 to-pink-600",
      technologies: ["Flutter", "Laravel", "MySQL", "WebRTC"],
      type: "both",
      icon: Users,
      features: ["Real-time Messaging", "Content Sharing", "User Profiles", "Community Groups"]
    },
    {
      title: "Restaurant Management System",
      category: "Business Solutions",
      description: "Complete restaurant management solution with POS, inventory, and customer management.",
      image: "bg-gradient-to-br from-yellow-500 to-orange-600",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      type: "web",
      icon: Globe,
      features: ["POS System", "Inventory Management", "Order Tracking", "Customer Database"]
    },
    {
      title: "Learning Management System",
      category: "Education Platform",
      description: "E-learning platform with course management, video streaming, and assessment tools.",
      image: "bg-gradient-to-br from-indigo-500 to-blue-600",
      technologies: ["React", "Express.js", "MongoDB", "Video.js"],
      type: "web",
      icon: Globe,
      features: ["Course Management", "Video Streaming", "Assessments", "Progress Tracking"]
    }
  ];

  const categories = [
    { name: "All", count: projects.length },
    { name: "Web Development", count: projects.filter(p => p.type === "web").length },
    { name: "Mobile Development", count: projects.filter(p => p.type === "mobile").length },
    { name: "Full Stack", count: projects.filter(p => p.type === "both").length }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered", icon: Globe },
    { number: "30+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "Technologies", icon: TrendingUp },
    { number: "98%", label: "Success Rate", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Showcasing our best work and the innovative solutions we've delivered for our clients
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card/50 border-border/50 p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-hover hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-smooth" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-black/50 text-white border-0">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 border-primary/20 hover:border-primary/40 transition-smooth">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary/20 hover:border-primary/40 transition-smooth">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project is delivered on time and exceeds expectations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "Understanding your requirements and creating a detailed project roadmap"
              },
              {
                step: "02", 
                title: "Design & Prototype",
                description: "Creating wireframes, mockups, and interactive prototypes for approval"
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Building your solution with regular updates and thorough quality testing"
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Deploying your project and providing ongoing maintenance and support"
              }
            ].map((process, index) => (
              <Card key={index} className="bg-card/50 border-border/50 text-center p-6">
                <div className="text-3xl font-bold text-primary mb-4">{process.step}</div>
                <h3 className="text-lg font-semibold mb-3">{process.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and bring your vision to life with our proven expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-spring">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40 transition-smooth">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
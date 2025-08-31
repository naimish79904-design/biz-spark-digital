import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Code2,
  Smartphone,
  Palette,
  Database,
  TrendingUp,
  Globe,
  ShoppingCart,
  Search,
  MousePointer,
  MessageSquare,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "Web Development",
      icon: Code2,
      description: "Cutting-edge web solutions built with modern technologies",
      services: [
        {
          name: "PHP Development",
          description: "Robust server-side solutions with PHP frameworks",
          technologies: ["PHP", "Symfony", "CodeIgniter", "Zend"]
        },
        {
          name: "Node.js Development",
          description: "Fast, scalable server-side JavaScript applications",
          technologies: ["Express.js", "NestJS", "Koa.js", "Fastify"]
        },
        {
          name: "React Development",
          description: "Dynamic, interactive user interfaces with React",
          technologies: ["React", "Next.js", "Gatsby", "Redux"]
        },
        {
          name: "Laravel Development",
          description: "Elegant PHP framework for web artisans",
          technologies: ["Laravel", "Eloquent", "Blade", "Artisan"]
        },
        {
          name: "WordPress Development",
          description: "Custom WordPress themes and plugin development",
          technologies: ["WordPress", "WooCommerce", "Gutenberg", "ACF"]
        },
        {
          name: "Custom Web Development",
          description: "Tailored web solutions for unique business needs",
          technologies: ["Custom CMS", "APIs", "Microservices", "PWA"]
        },
        {
          name: "Ecommerce Development",
          description: "Complete online store solutions and integrations",
          technologies: ["Shopify", "WooCommerce", "Magento", "Custom"]
        }
      ]
    },
    {
      title: "Mobile App Development",
      icon: Smartphone,
      description: "Native and cross-platform mobile applications",
      services: [
        {
          name: "Android App Development",
          description: "Native Android apps with optimal performance",
          technologies: ["Kotlin", "Java", "Android Studio", "Jetpack"]
        },
        {
          name: "iPhone App Development",
          description: "Native iOS apps following Apple's design guidelines",
          technologies: ["Swift", "SwiftUI", "Xcode", "Core Data"]
        },
        {
          name: "Flutter Development",
          description: "Cross-platform apps with single codebase",
          technologies: ["Flutter", "Dart", "Firebase", "Material Design"]
        },
        {
          name: "React Native Development",
          description: "Native mobile apps using React framework",
          technologies: ["React Native", "Expo", "Navigation", "Redux"]
        },
        {
          name: "iPad & Tablet App Development",
          description: "Optimized apps for tablet devices",
          technologies: ["iPadOS", "Android Tablets", "Responsive UI", "Multi-touch"]
        }
      ]
    },
    {
      title: "Web & App Designing",
      icon: Palette,
      description: "User-centered design solutions that convert",
      services: [
        {
          name: "UI/UX Design",
          description: "User interface and experience design",
          technologies: ["Figma", "Adobe XD", "Sketch", "InVision"]
        },
        {
          name: "Dynamic Designing",
          description: "Interactive and animated web designs",
          technologies: ["CSS3", "JavaScript", "GSAP", "Framer Motion"]
        },
        {
          name: "Static Designing",
          description: "Clean, modern static website designs",
          technologies: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS"]
        }
      ]
    },
    {
      title: "Other Technologies",
      icon: Database,
      description: "Additional technical expertise and solutions",
      services: [
        {
          name: "JavaScript Development",
          description: "Modern JavaScript solutions and frameworks",
          technologies: ["ES6+", "TypeScript", "Webpack", "Babel"]
        },
        {
          name: "Vue.js Development",
          description: "Progressive JavaScript framework applications",
          technologies: ["Vue.js", "Nuxt.js", "Vuex", "Vue CLI"]
        },
        {
          name: "AngularJS Development",
          description: "Dynamic web applications with Angular",
          technologies: ["Angular", "TypeScript", "RxJS", "NgRx"]
        },
        {
          name: "Magento Development",
          description: "Powerful ecommerce platform solutions",
          technologies: ["Magento 2", "PHP", "MySQL", "Elasticsearch"]
        },
        {
          name: "Python Development",
          description: "Backend development with Python",
          technologies: ["Django", "Flask", "FastAPI", "SQLAlchemy"]
        },
        {
          name: "Database Solutions",
          description: "Database design and optimization",
          technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
        }
      ]
    },
    {
      title: "Integrated Marketing",
      icon: TrendingUp,
      description: "Comprehensive digital marketing strategies",
      services: [
        {
          name: "Digital Marketing",
          description: "Complete digital marketing strategies",
          technologies: ["Google Analytics", "Google Ads", "Facebook Ads", "Email Marketing"]
        },
        {
          name: "SEO Consulting",
          description: "Search engine optimization strategies",
          technologies: ["On-page SEO", "Technical SEO", "Link Building", "Analytics"]
        },
        {
          name: "PPC Advertising",
          description: "Pay-per-click advertising campaigns",
          technologies: ["Google Ads", "Bing Ads", "Facebook Ads", "LinkedIn Ads"]
        },
        {
          name: "Content Marketing",
          description: "Strategic content creation and marketing",
          technologies: ["Blog Writing", "Video Content", "Infographics", "Social Content"]
        },
        {
          name: "Social Media Marketing",
          description: "Social media strategy and management",
          technologies: ["Facebook", "Instagram", "Twitter", "LinkedIn"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the online world
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <category.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{category.title}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card 
                    key={serviceIndex} 
                    className="group bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-card hover:-translate-y-1"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                        {service.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
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
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and create the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-spring">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary/40 transition-smooth">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
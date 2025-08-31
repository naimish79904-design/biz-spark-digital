import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Users,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@techflow.dev",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "123 Tech Street, Digital City",
      description: "Come visit our office"
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "Mon-Fri: 9AM-6PM",
      description: "Weekend emergency support"
    }
  ];

  const services = [
    "Web Development",
    "Mobile App Development", 
    "UI/UX Design",
    "Digital Marketing",
    "E-commerce Solutions",
    "Custom Development",
    "Consultation",
    "Other"
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity, but most web projects take 4-8 weeks, while mobile apps take 6-12 weeks."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer 24/7 support and maintenance packages for all our clients to ensure your project runs smoothly."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We're experienced in collaborating with in-house teams and can integrate seamlessly with your workflow."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We work with modern technologies including React, Node.js, Flutter, Laravel, and many others based on your needs."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-primary/20 text-primary bg-primary/10">
            💬 Let's Talk
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? Let's discuss your ideas and create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="bg-input border-border/50 focus:border-primary/50"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="bg-input border-border/50 focus:border-primary/50"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                          className="bg-input border-border/50 focus:border-primary/50"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          className="bg-input border-border/50 focus:border-primary/50"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Service Interested In *</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-input border border-border/50 rounded-md focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        rows={5}
                        required
                        className="bg-input border-border/50 focus:border-primary/50 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:shadow-glow transition-spring"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{info.title}</h3>
                        <p className="text-primary text-sm">{info.detail}</p>
                        <p className="text-muted-foreground text-xs">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start border-primary/20 hover:border-primary/40 transition-smooth">
                    <Calendar className="mr-3 w-4 h-4" />
                    Schedule a Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-primary/20 hover:border-primary/40 transition-smooth">
                    <MessageSquare className="mr-3 w-4 h-4" />
                    Live Chat Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-primary/20 hover:border-primary/40 transition-smooth">
                    <Users className="mr-3 w-4 h-4" />
                    Meet Our Team
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our services and process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
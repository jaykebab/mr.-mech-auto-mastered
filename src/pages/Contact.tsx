import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    vehicle: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      vehicle: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Auto Service Lane, Mechanic District, City 12345",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (234) 567-890",
      link: "tel:+1234567890",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@mrmech.com",
      link: "mailto:info@mrmech.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon-Sat: 8AM - 7PM | Sun: 9AM - 5PM",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-32 pt-48 bg-mr-mech-surface">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-semibold tracking-wider uppercase">Get in Touch</span>
          <h1 className="font-display text-5xl md:text-7xl mt-2 mb-6">CONTACT US</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to book a service or have questions? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl mb-8">BOOK A SERVICE</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-mr-mech-surface border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-mr-mech-surface border-border"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890"
                      className="bg-mr-mech-surface border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Type *</label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}
                    >
                      <SelectTrigger className="bg-mr-mech-surface border-border">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Service</SelectItem>
                        <SelectItem value="diagnostics">Engine Diagnostics</SelectItem>
                        <SelectItem value="ac">AC Service</SelectItem>
                        <SelectItem value="oil">Oil Change</SelectItem>
                        <SelectItem value="brakes">Brake & Suspension</SelectItem>
                        <SelectItem value="alignment">Wheel Alignment</SelectItem>
                        <SelectItem value="detailing">Detailing</SelectItem>
                        <SelectItem value="bike">Bike Servicing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Vehicle Details</label>
                  <Input
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    placeholder="e.g., BMW 320i 2022 / Honda CBR 600"
                    className="bg-mr-mech-surface border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your requirements..."
                    rows={5}
                    className="bg-mr-mech-surface border-border resize-none"
                  />
                </div>
                <Button type="submit" variant="cta" size="xl" className="w-full">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl mb-8">CONTACT INFO</h2>
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-card rounded-lg p-6 border border-border">
                <h3 className="font-display text-2xl mb-4">QUICK RESPONSE?</h3>
                <p className="text-muted-foreground mb-6">
                  Chat with us on WhatsApp for faster responses and instant booking.
                </p>
                <Button variant="whatsapp" size="lg" className="w-full" asChild>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-mr-mech-surface rounded-lg h-64 flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">123 Auto Service Lane</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

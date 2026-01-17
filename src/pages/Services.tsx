import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import {
  Wrench,
  Car,
  Bike,
  Sparkles,
  Search,
  Thermometer,
  Droplets,
  CircleDot,
  Settings,
  Gauge,
  PaintBucket,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/hero-workshop.jpg";
import bikeImage from "@/assets/bike-service.jpg";
import detailingImage from "@/assets/car-detailing.jpg";
import diagnosticsImage from "@/assets/engine-diagnostics.jpg";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "General Service",
      description: "Comprehensive maintenance including oil change, filter replacement, fluid top-up, and multi-point inspection for optimal vehicle performance.",
      image: heroImage,
    },
    {
      icon: Search,
      title: "Engine Diagnostics",
      description: "Advanced computer diagnostics to identify engine issues, check sensors, and read error codes for accurate troubleshooting.",
      image: diagnosticsImage,
    },
    {
      icon: Thermometer,
      title: "AC Service",
      description: "Complete AC system service including gas refill, leak detection, compressor check, and vent sanitization for cool comfort.",
      image: heroImage,
    },
    {
      icon: Droplets,
      title: "Oil Change & Filters",
      description: "Premium synthetic oil changes and filter replacements to keep your engine running smooth and efficient.",
      image: diagnosticsImage,
    },
    {
      icon: CircleDot,
      title: "Brake & Suspension",
      description: "Expert brake pad replacement, disc servicing, and suspension tuning for safe and smooth driving experience.",
      image: heroImage,
    },
    {
      icon: Gauge,
      title: "Wheel Alignment",
      description: "Precision wheel alignment and balancing to extend tire life, improve fuel efficiency, and ensure stable handling.",
      image: heroImage,
    },
    {
      icon: Sparkles,
      title: "Premium Wash & Detailing",
      description: "Showroom-quality exterior wash, interior deep clean, paint protection, and ceramic coating for that new car shine.",
      image: detailingImage,
    },
    {
      icon: Bike,
      title: "Bike Servicing",
      description: "Complete motorcycle care from engine tune-ups to chain maintenance, brakes, and electrical system checks.",
      image: bikeImage,
    },
    {
      icon: MessageSquare,
      title: "Custom Requests",
      description: "Have a specific requirement? Our experts can handle custom jobs, modifications, and specialty repairs.",
      image: heroImage,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-32 pt-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-primary font-semibold tracking-wider uppercase">What We Offer</span>
          <h1 className="font-display text-5xl md:text-7xl mt-2 mb-6">OUR SERVICES</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From routine maintenance to complex repairs, we provide comprehensive auto care solutions for cars and bikes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-mr-mech-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            CAN'T FIND WHAT YOU NEED?
          </h2>
          <p className="text-muted-foreground text-xl mb-8 max-w-2xl mx-auto">
            Contact us for custom services and specialized repairs. Our expert team is ready to help.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

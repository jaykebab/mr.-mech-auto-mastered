import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { 
  Wrench, 
  Car, 
  Bike, 
  Sparkles, 
  Search, 
  ClipboardCheck, 
  Settings, 
  Truck,
  Shield,
  Clock,
  DollarSign,
  Users,
  ArrowRight,
  Phone
} from "lucide-react";
import heroImage from "@/assets/hero-workshop.jpg";
import bikeImage from "@/assets/bike-service.jpg";
import detailingImage from "@/assets/car-detailing.jpg";
import diagnosticsImage from "@/assets/engine-diagnostics.jpg";

const Index = () => {
  const services = [
    {
      icon: Car,
      title: "Car Repair & Service",
      description: "Complete car maintenance from engine to exhaust. Expert technicians ensure your car runs at peak performance.",
      image: heroImage,
    },
    {
      icon: Bike,
      title: "Bike Servicing",
      description: "Professional bike care for all makes and models. From routine maintenance to major repairs.",
      image: bikeImage,
    },
    {
      icon: Sparkles,
      title: "Detailing & Cleaning",
      description: "Premium wash and detailing services that make your vehicle shine like new.",
      image: detailingImage,
    },
    {
      icon: Search,
      title: "Inspection & Diagnostics",
      description: "Advanced diagnostic tools to identify issues before they become problems.",
      image: diagnosticsImage,
    },
  ];

  const howItWorks = [
    { icon: ClipboardCheck, title: "Book", description: "Schedule your service online or call us" },
    { icon: Search, title: "Inspect", description: "Our experts thoroughly inspect your vehicle" },
    { icon: Settings, title: "Repair", description: "Skilled technicians fix all issues" },
    { icon: Truck, title: "Deliver", description: "Get your vehicle back in perfect condition" },
  ];

  const whyChooseUs = [
    { icon: Users, title: "Professional Technicians", description: "Certified experts with years of experience" },
    { icon: DollarSign, title: "Transparent Pricing", description: "No hidden costs, clear upfront pricing" },
    { icon: Clock, title: "Fast Turnaround", description: "Quick service without compromising quality" },
    { icon: Shield, title: "Quality Guarantee", description: "100% satisfaction or we make it right" },
  ];

  const testimonials = [
    {
      name: "John Anderson",
      role: "BMW Owner",
      content: "Exceptional service! My car runs better than ever. The team at Mr. Mech really knows their stuff.",
      rating: 5,
    },
    {
      name: "Sarah Mitchell",
      role: "Honda CBR Rider",
      content: "Best bike service in town. Fast, professional, and the pricing is very fair. Highly recommended!",
      rating: 5,
    },
    {
      name: "Mike Thompson",
      role: "Mercedes Owner",
      content: "The detailing service is absolutely amazing. My car looks showroom ready. Will definitely come back.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block text-primary font-semibold tracking-wider uppercase mb-4">
              Premium Auto Care
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
              YOUR RIDE.<br />
              <span className="text-primary">OUR PRECISION.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Expert auto care and workshop services for cars & bikes. 
              Professional technicians, transparent pricing, fast turnaround.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Book Appointment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Get Estimate</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-mr-mech-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase">What We Do</span>
            <h2 className="font-display text-4xl md:text-5xl mt-2">OUR SERVICES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="ctaOutline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase">Simple Process</span>
            <h2 className="font-display text-4xl md:text-5xl mt-2">HOW IT WORKS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 font-display text-6xl text-primary/10">
                  {index + 1}
                </span>
                <h3 className="font-display text-2xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-mr-mech-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase">Why Us</span>
              <h2 className="font-display text-4xl md:text-5xl mt-2 mb-8">
                WHY CHOOSE <span className="text-primary">MR. MECH</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={detailingImage}
                alt="Premium Auto Care"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-red-glow">
                <div className="font-display text-4xl">10+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase">Testimonials</span>
            <h2 className="font-display text-4xl md:text-5xl mt-2">WHAT OUR CLIENTS SAY</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="ctaOutline" size="lg" asChild>
              <Link to="/testimonials">View All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">
            READY TO GET STARTED?
          </h2>
          <p className="text-primary-foreground/80 text-xl mb-8 max-w-2xl mx-auto">
            Book your service today and experience the Mr. Mech difference. Expert care for your vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heroOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">
                Book Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="tel:+1234567890">
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

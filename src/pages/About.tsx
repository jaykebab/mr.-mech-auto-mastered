import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Award, Clock, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-workshop.jpg";
import detailingImage from "@/assets/car-detailing.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do. Every vehicle is treated with care and attention to detail.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every service, using the best tools and techniques.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We listen, advise, and deliver beyond expectations.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "On-time service, transparent communication, and consistent quality every time.",
    },
  ];

  const team = [
    { name: "James Miller", role: "Founder & Lead Technician", initial: "JM" },
    { name: "Sarah Chen", role: "Service Manager", initial: "SC" },
    { name: "Mike Rodriguez", role: "Senior Mechanic", initial: "MR" },
    { name: "Emily Davis", role: "Customer Relations", initial: "ED" },
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
          <span className="text-primary font-semibold tracking-wider uppercase">Our Story</span>
          <h1 className="font-display text-5xl md:text-7xl mt-2 mb-6">ABOUT MR. MECH</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Born from a passion for automotive excellence, we've been serving car and bike enthusiasts for over a decade.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-mr-mech-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase">Who We Are</span>
              <h2 className="font-display text-4xl md:text-5xl mt-2 mb-6">
                DRIVEN BY <span className="text-primary">PASSION</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Mr. Mech was founded with a simple vision: to provide premium auto care services that prioritize quality, transparency, and customer satisfaction. What started as a small garage has grown into a trusted name in automotive service.
              </p>
              <p className="text-muted-foreground mb-6">
                Our team of certified technicians brings decades of combined experience, working with the latest diagnostic tools and genuine parts to ensure your vehicle receives the best possible care.
              </p>
              <p className="text-muted-foreground">
                Whether you drive a luxury sedan or ride a sports bike, we treat every vehicle with the same level of dedication and expertise. Your ride is our reputation.
              </p>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Mr. Mech Workshop"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-[0_4px_30px_-5px_hsl(0_85%_50%/0.4)]">
                <div className="font-display text-4xl">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-card rounded-lg p-8 border border-border">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-3xl mb-4">OUR MISSION</h3>
              <p className="text-muted-foreground">
                To deliver reliable, expert auto service that keeps every vehicle running at its best. We combine skilled craftsmanship with modern technology to provide exceptional care at fair prices.
              </p>
            </div>
            <div className="bg-gradient-card rounded-lg p-8 border border-border">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-3xl mb-4">OUR VISION</h3>
              <p className="text-muted-foreground">
                To be the most trusted name in auto care, making every ride safe, premium, and worry-free. We envision a future where quality service is accessible to all vehicle owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-mr-mech-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase">What Drives Us</span>
            <h2 className="font-display text-4xl md:text-5xl mt-2">OUR VALUES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase">The Experts</span>
            <h2 className="font-display text-4xl md:text-5xl mt-2">MEET OUR TEAM</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 mx-auto rounded-full bg-mr-mech-surface flex items-center justify-center mb-6 border-2 border-border group-hover:border-primary transition-colors">
                  <span className="font-display text-3xl text-primary">{member.initial}</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">
            READY TO EXPERIENCE THE DIFFERENCE?
          </h2>
          <Button variant="heroOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
            <Link to="/contact">
              Book Your Service
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

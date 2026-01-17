import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Anderson",
      role: "BMW 5 Series Owner",
      content: "Exceptional service! My car runs better than ever. The team at Mr. Mech diagnosed an issue that two other shops missed. Highly professional and transparent about pricing.",
      rating: 5,
    },
    {
      name: "Sarah Mitchell",
      role: "Honda CBR 600 Rider",
      content: "Best bike service in town. Fast, professional, and the pricing is very fair. They treat my bike like it's their own. The chain adjustment was perfect!",
      rating: 5,
    },
    {
      name: "Mike Thompson",
      role: "Mercedes C-Class Owner",
      content: "The detailing service is absolutely amazing. My car looks showroom ready every time. The ceramic coating they applied has lasted over a year now.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Audi A4 Owner",
      content: "I've been bringing my car here for 3 years. Consistent quality, honest mechanics, and they always explain everything before doing any work. Trust is everything.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Kawasaki Ninja Owner",
      content: "Found Mr. Mech through a friend's recommendation. The brake service was done perfectly and they even noticed an issue with my fork seals that I hadn't spotted.",
      rating: 5,
    },
    {
      name: "Lisa Park",
      role: "Toyota Camry Owner",
      content: "Great experience with the AC service. My car's AC was barely cooling and they fixed it in a few hours. Fair price and the technicians were very knowledgeable.",
      rating: 4,
    },
    {
      name: "James Wilson",
      role: "Harley Davidson Owner",
      content: "Finally found a shop that understands cruisers. The full service and oil change was thorough, and they used the exact specifications for my bike.",
      rating: 5,
    },
    {
      name: "Amanda Foster",
      role: "Ford Mustang Owner",
      content: "The engine diagnostics saved me from a major repair down the road. They identified the problem early and fixed it before it became expensive. Great preventive care.",
      rating: 5,
    },
    {
      name: "Robert Kim",
      role: "Ducati Monster Owner",
      content: "Precision work on my Italian machine. They understood the specific needs of my bike and delivered excellent service. Will definitely return.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-32 pt-48 bg-mr-mech-surface">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-semibold tracking-wider uppercase">Reviews</span>
          <h1 className="font-display text-5xl md:text-7xl mt-2 mb-6">TESTIMONIALS</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what our customers have to say about their Mr. Mech experience.
          </p>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-card rounded-lg p-8 md:p-12 border border-border relative overflow-hidden">
            <Quote className="absolute top-4 left-4 w-16 h-16 text-primary/10" />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-foreground italic mb-8">
                "Mr. Mech has transformed how I think about auto service. Their attention to detail, honest communication, and expert technicians make every visit a pleasure. My car has never run better."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-2xl">JA</span>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground text-lg">John Anderson</h4>
                  <p className="text-muted-foreground">BMW 5 Series Owner • 5 Years Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-mr-mech-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            READY TO JOIN OUR HAPPY CUSTOMERS?
          </h2>
          <p className="text-muted-foreground text-xl mb-8 max-w-2xl mx-auto">
            Experience the Mr. Mech difference for yourself. Book your service today.
          </p>
          <Button variant="cta" size="xl" asChild>
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

export default Testimonials;

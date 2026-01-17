import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  showCTA?: boolean;
}

const ServiceCard = ({ icon: Icon, title, description, image, showCTA = true }: ServiceCardProps) => {
  return (
    <div className="group relative bg-gradient-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-500">
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
      )}
      <div className={`p-6 ${image ? 'relative' : ''}`}>
        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="font-display text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        {showCTA && (
          <div className="flex gap-3">
            <Button variant="cta" size="sm" asChild>
              <Link to="/contact">Book Now</Link>
            </Button>
            <Button variant="ctaOutline" size="sm" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;

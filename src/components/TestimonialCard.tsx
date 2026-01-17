import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({ name, role, content, rating, image }: TestimonialCardProps) => {
  return (
    <div className="bg-gradient-card rounded-lg p-6 border border-border hover:border-primary/30 transition-all duration-300">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-primary fill-primary" : "text-muted-foreground"
            }`}
          />
        ))}
      </div>
      <p className="text-muted-foreground mb-6 italic">"{content}"</p>
      <div className="flex items-center gap-4">
        {image ? (
          <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-bold text-lg">{name[0]}</span>
          </div>
        )}
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

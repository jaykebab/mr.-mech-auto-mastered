import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
}

const ProductCard = ({ name, price, originalPrice, image, category, badge }: ProductCardProps) => {
  return (
    <div className="group bg-gradient-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-500">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded">
            {badge}
          </span>
        )}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button variant="cta" size="icon" className="rounded-full">
            <Eye className="w-5 h-5" />
          </Button>
          <Button variant="cta" size="icon" className="rounded-full">
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div className="p-4">
        <span className="text-xs text-primary font-medium uppercase tracking-wide">
          {category}
        </span>
        <h3 className="font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <Button variant="cta" size="sm" className="w-full mt-4">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

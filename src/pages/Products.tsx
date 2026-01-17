import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import productsImage from "@/assets/products.jpg";
import detailingImage from "@/assets/car-detailing.jpg";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Car Care", "Bike Care", "Cleaning", "Accessories", "Tools"];

  const products = [
    {
      name: "Premium Car Wax",
      price: 29.99,
      originalPrice: 39.99,
      image: productsImage,
      category: "Car Care",
      badge: "Sale",
    },
    {
      name: "Microfiber Cloth Set",
      price: 14.99,
      image: detailingImage,
      category: "Cleaning",
    },
    {
      name: "Ceramic Coating Kit",
      price: 89.99,
      image: productsImage,
      category: "Car Care",
      badge: "Best Seller",
    },
    {
      name: "Chain Lubricant Pro",
      price: 19.99,
      image: productsImage,
      category: "Bike Care",
    },
    {
      name: "Interior Cleaner Spray",
      price: 16.99,
      originalPrice: 22.99,
      image: productsImage,
      category: "Cleaning",
      badge: "Sale",
    },
    {
      name: "Leather Conditioner",
      price: 24.99,
      image: detailingImage,
      category: "Car Care",
    },
    {
      name: "Bike Polish Kit",
      price: 34.99,
      image: productsImage,
      category: "Bike Care",
    },
    {
      name: "Tire Shine Gel",
      price: 12.99,
      image: productsImage,
      category: "Car Care",
    },
    {
      name: "Dashboard Cleaner",
      price: 11.99,
      image: detailingImage,
      category: "Cleaning",
    },
    {
      name: "Car Air Freshener Pack",
      price: 9.99,
      image: productsImage,
      category: "Accessories",
    },
    {
      name: "Pressure Washer Nozzle",
      price: 45.99,
      image: detailingImage,
      category: "Tools",
    },
    {
      name: "Helmet Visor Cleaner",
      price: 8.99,
      image: productsImage,
      category: "Bike Care",
    },
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative py-32 pt-48 bg-mr-mech-surface">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-semibold tracking-wider uppercase">Shop</span>
          <h1 className="font-display text-5xl md:text-7xl mt-2 mb-6">AUTO CARE PRODUCTS</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium quality car and bike care products to keep your ride looking perfect.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-[108px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "cta" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;

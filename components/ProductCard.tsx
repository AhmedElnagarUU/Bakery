"use client";

import { Clock } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  weight: number;
  image: string;
  hot?: boolean;
}

export default function ProductCard({ id, name, price, weight, image, hot }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, weight, image });
  };

  return (
    <div className="bg-zinc-900 rounded-lg p-4 relative group">
      <img 
        src={image} 
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-medium mb-1">{name}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock size={14} />
            <span>{weight}g</span>
          </div>
        </div>
        <p className="text-xl font-bold">${price.toFixed(2)}</p>
      </div>
      <button 
        onClick={handleAddToCart}
        className="w-full bg-orange-400 text-white py-2 rounded mt-2 opacity-50 group-hover:opacity-100 transition-opacity"
      >
        Add to Cart
      </button>
      {hot && (
        <div className="absolute top-2 right-2 bg-orange-400 text-black text-xs px-2 py-1 rounded">
          Hot!
        </div>
      )}
    </div>
  );
}

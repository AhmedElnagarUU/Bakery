"use client";

import { ShoppingCart } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useCart } from "@/contexts/CartContext";
import Link from "next/link";

export default function CartPopover() {
  const { items, removeFromCart, updateQuantity } = useCart();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Popover>
      <PopoverTrigger className="relative">
        <ShoppingCart className="text-orange-400 cursor-pointer w-6 h-6" />
        <span className="absolute -top-2 -right-2 bg-orange-400 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {itemCount}
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 bg-zinc-900 border-zinc-800">
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Shopping Cart</h3>
          
          {items.length === 0 ? (
            <p className="text-gray-400">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-3 max-h-[300px] overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 bg-zinc-800 p-3 rounded">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{item.name}</h4>
                      <p className="text-gray-400 text-sm">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="px-2 py-0.5 bg-zinc-700 rounded text-sm"
                        >
                          -
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 bg-zinc-700 rounded text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-zinc-800 pt-3">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium">Total:</span>
                  <span className="text-lg font-bold">${total.toFixed(2)}</span>
                </div>
                <Link 
                  href="/checkout"
                  className="w-full bg-orange-400 text-white py-2 px-4 rounded text-center block hover:bg-orange-500 transition-colors"
                >
                  Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
} 
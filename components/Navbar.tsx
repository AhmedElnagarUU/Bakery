"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();
  const itemCount = items.length;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Delivery", href: "/delivery" },
    { name: "Locations", href: "/locations" },
    { name: "Contacts", href: "/contacts" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="bg-black fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Phone */}
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xl font-bold text-orange-400">
              Bakery
            </Link>
            <div className="hidden md:flex items-center gap-2">
              <Phone size={16} className="text-orange-400" />
              <span className="text-sm text-gray-400">+1 234 567 8900</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Shopping Cart */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative">
              <ShoppingCart className="text-orange-400 cursor-pointer w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-orange-400 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-orange-400 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-800">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-gray-300 hover:text-orange-400 hover:bg-gray-900 rounded-md transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

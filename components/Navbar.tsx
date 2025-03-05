"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import CartPopover from "./CartPopover";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

          {/* Shopping Cart and Mobile Menu */}
          <div className="flex items-center gap-4">
            <CartPopover />

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
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-orange-400 block px-3 py-2 text-base"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

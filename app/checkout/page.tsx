"use client";

import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { CreditCard, Truck, ChevronRight } from "lucide-react";

export default function CheckoutPage() {
  const { items } = useCart();
  const [step, setStep] = useState<'shipping' | 'payment'>('shipping');
  
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.00;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Steps */}
            <div className="flex items-center mb-8">
              <div className={`flex items-center ${step === 'shipping' ? 'text-orange-400' : 'text-gray-400'}`}>
                <Truck className="w-5 h-5 mr-2" />
                <span>Shipping</span>
              </div>
              <ChevronRight className="mx-4 text-gray-400" />
              <div className={`flex items-center ${step === 'payment' ? 'text-orange-400' : 'text-gray-400'}`}>
                <CreditCard className="w-5 h-5 mr-2" />
                <span>Payment</span>
              </div>
            </div>

            {step === 'shipping' ? (
              /* Shipping Information */
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1">First Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 bg-zinc-800 rounded border border-zinc-700 focus:border-orange-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 bg-zinc-800 rounded border border-zinc-700 focus:border-orange-400 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 bg-zinc-800 rounded border border-zinc-700 focus:border-orange-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Address</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-zinc-800 rounded border border-zinc-700 focus:border-orange-400 focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1">City</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 bg-zinc-800 rounded border border-zinc-700 focus:border-orange-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Postal Code</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 bg-zinc-800 rounded border border-zinc-700 focus:border-orange-400 focus:outline-none"
                      />
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setStep('payment');
                    }}
                    className="w-full bg-orange-400 text-white py-3 rounded-lg hover:bg-orange-500 transition-colors"
                  >
                    Continue to Payment
                  </button>
                </form>
              </div>
            ) : (
              /* Payment Information */
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-3 py-2 bg-zinc-800 rounded border border-zinc-700 focus:border-orange-400 focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-3 py-2 bg-zinc-800 rounded border border-zinc-700 focus:border-orange-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-3 py-2 bg-zinc-800 rounded border border-zinc-700 focus:border-orange-400 focus:outline-none"
                      />
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      // Handle payment submission
                    }}
                    className="w-full bg-orange-400 text-white py-3 rounded-lg hover:bg-orange-500 transition-colors"
                  >
                    Place Order
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900 p-6 rounded-lg sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-gray-400 text-sm">Quantity: {item.quantity}</p>
                      <p className="text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-zinc-800 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-zinc-800">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
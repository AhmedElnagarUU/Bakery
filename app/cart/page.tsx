"use client";

import { useCart } from "@/contexts/CartContext";

export default function CartPage() {
	const { items, removeFromCart, updateQuantity } = useCart();
	const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
			
			{items.length === 0 ? (
				<p className="text-gray-400">Your cart is empty</p>
			) : (
				<>
					<div className="space-y-4">
						{items.map((item) => (
							<div key={item.id} className="flex items-center gap-4 bg-zinc-900 p-4 rounded-lg">
								<img
									src={item.image}
									alt={item.name}
									className="w-24 h-24 object-cover rounded"
								/>
								<div className="flex-1">
									<h3 className="font-medium">{item.name}</h3>
									<p className="text-gray-400">${item.price.toFixed(2)}</p>
								</div>
								<div className="flex items-center gap-2">
									<button
										onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
										className="px-2 py-1 bg-zinc-800 rounded"
									>
										-
									</button>
									<span>{item.quantity}</span>
									<button
										onClick={() => updateQuantity(item.id, item.quantity + 1)}
										className="px-2 py-1 bg-zinc-800 rounded"
									>
										+
									</button>
								</div>
								<button
									onClick={() => removeFromCart(item.id)}
									className="text-red-500"
								>
									Remove
								</button>
							</div>
						))}
					</div>
					
					<div className="mt-6 bg-zinc-900 p-4 rounded-lg">
						<div className="flex justify-between items-center">
							<span className="font-medium">Total:</span>
							<span className="text-xl font-bold">${total.toFixed(2)}</span>
						</div>
						<button className="w-full bg-orange-400 text-white py-2 rounded mt-4">
							Checkout
						</button>
					</div>
				</>
			)}
		</div>
	);
}
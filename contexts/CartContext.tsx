"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
	id: string;
	name: string;
	price: number;
	weight: number;
	image: string;
	quantity: number;
}

interface CartContextType {
	items: CartItem[];
	addToCart: (item: Omit<CartItem, 'quantity'>) => void;
	removeFromCart: (id: string) => void;
	updateQuantity: (id: string, quantity: number) => void;
	clearCart: () => void;
	totalItems: number;
	totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
	const [items, setItems] = useState<CartItem[]>([]);

	const addToCart = (product: Omit<CartItem, 'quantity'>) => {
		setItems(currentItems => {
			const existingItem = currentItems.find(item => item.id === product.id);
			
			if (existingItem) {
				return currentItems.map(item =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			}

			return [...currentItems, { ...product, quantity: 1 }];
		});
	};

	const removeFromCart = (id: string) => {
		setItems(currentItems => currentItems.filter(item => item.id !== id));
	};

	const updateQuantity = (id: string, quantity: number) => {
		setItems(currentItems => {
			if (quantity <= 0) {
				return currentItems.filter(item => item.id !== id);
			}
			return currentItems.map(item =>
				item.id === id ? { ...item, quantity } : item
			);
		});
	};

	const clearCart = () => {
		setItems([]);
	};

	const totalItems = items.reduce((total, item) => total + item.quantity, 0);
	const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

	return (
		<CartContext.Provider
			value={{
				items,
				addToCart,
				removeFromCart,
				updateQuantity,
				clearCart,
				totalItems,
				totalPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
}
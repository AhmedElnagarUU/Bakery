import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="bg-zinc-900 text-white">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-xl font-bold mb-4">About Us</h3>
						<p className="text-gray-300">
							Crafting delicious breads and pastries with love since 1990. Our commitment to quality and tradition makes us your trusted bakery.
						</p>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
							<li><Link href="/products" className="text-gray-300 hover:text-white">Products</Link></li>
							<li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
							<li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-4">Contact Info</h3>
						<ul className="text-gray-300 space-y-2">
							<li>123 Bakery Street</li>
							<li>New York, NY 10001</li>
							<li>Phone: (555) 123-4567</li>
							<li>Email: info@bakery.com</li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-bold mb-4">Follow Us</h3>
						<div className="flex space-x-4">
							<a href="#" className="text-gray-300 hover:text-white">
								<Facebook size={24} />
							</a>
							<a href="#" className="text-gray-300 hover:text-white">
								<Instagram size={24} />
							</a>
							<a href="#" className="text-gray-300 hover:text-white">
								<Twitter size={24} />
							</a>
						</div>
					</div>
				</div>
				<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
					<p>&copy; 2024 Your Bakery. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
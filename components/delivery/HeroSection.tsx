import Image from "next/image";

export default function HeroSection() {
	return (
		<section className="relative h-[60vh] flex items-center justify-center">
			<Image
				src="https://images.unsplash.com/photo-1587302164675-5e492c5d7e9a?auto=format&fit=crop&w=1600"
				alt="Delivery service"
				fill
				className="object-cover brightness-50"
			/>
			<div className="relative z-10 text-center text-white">
				<h1 className="text-5xl font-serif mb-4">Fast & Fresh Delivery</h1>
				<p className="text-xl max-w-2xl mx-auto">
					Bringing freshly baked goods straight to your doorstep
				</p>
			</div>
		</section>
	);
}
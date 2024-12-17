import Image from "next/image";

export default function HeroSection() {
	return (
		<section className="relative h-[60vh] flex items-center justify-center">
			<Image
				src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1600"
				alt="Bakery interior"
				fill
				className="object-cover brightness-50"
			/>
			<div className="relative z-10 text-center text-white">
				<h1 className="text-5xl font-serif mb-4">Our Story</h1>
				<p className="text-xl max-w-2xl mx-auto">
					Crafting moments of joy through traditional baking since 1990
				</p>
			</div>
		</section>
	);
}
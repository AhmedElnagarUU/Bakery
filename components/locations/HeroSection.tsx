import Image from "next/image";

export default function HeroSection() {
	return (
		<section className="relative h-[60vh] flex items-center justify-center">
			<Image
				src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600"
				alt="Bakery locations"
				fill
				className="object-cover brightness-50"
			/>
			<div className="relative z-10 text-center text-white">
				<h1 className="text-5xl font-serif mb-4">Our Locations</h1>
				<p className="text-xl max-w-2xl mx-auto">
					Find your nearest bakery and visit us today
				</p>
			</div>
		</section>
	);
}
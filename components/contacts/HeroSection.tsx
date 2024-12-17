import Image from "next/image";

export default function HeroSection() {
	return (
		<section className="relative h-[60vh] flex items-center justify-center">
			<Image
				src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600"
				alt="Contact us"
				fill
				className="object-cover brightness-50"
			/>
			<div className="relative z-10 text-center text-white">
				<h1 className="text-5xl font-serif mb-4">Contact Us</h1>
				<p className="text-xl max-w-2xl mx-auto">
					We'd love to hear from you. Send us a message and we'll respond as soon as possible
				</p>
			</div>
		</section>
	);
}
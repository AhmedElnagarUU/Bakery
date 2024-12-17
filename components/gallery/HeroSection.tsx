export default function HeroSection() {
	return (
		<section 
			className="relative h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
			style={{
				backgroundImage: `url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1600')`,
			}}
		>
			<div className="absolute inset-0 bg-black/50"></div>
			<div className="relative z-10 text-center text-white">
				<h1 className="text-5xl font-serif mb-4">Our Gallery</h1>
				<p className="text-xl max-w-2xl mx-auto">
					Explore our delicious creations and get inspired
				</p>
			</div>
		</section>
	);
}
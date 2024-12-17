import Image from "next/image";

export default function StorySection() {
	return (
		<section className="py-20 px-4 md:px-8">
			<div className="container mx-auto max-w-4xl">
				<h2 className="text-3xl font-serif text-center mb-8">Our Journey</h2>
				<div className="grid md:grid-cols-2 gap-8 items-center">
					<div className="relative h-[400px]">
						<Image
							src="https://images.unsplash.com/photo-1515182629504-727d7753751f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrZXJ5fGVufDB8fDB8fHww"
							alt="Old bakery photo"
							fill
							className="object-cover rounded-lg"
						/>
					</div>
					<div className="space-y-4">
						<p className="text-gray-600">
							Our story began in 1990 when our founder, John Baker, started baking bread in his small kitchen. What started as a passion project quickly grew into something more as the neighborhood fell in love with his artisanal creations.
						</p>
						<p className="text-gray-600">
							Today, we continue to honor those humble beginnings by maintaining the same dedication to quality and craftsmanship that made us who we are.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
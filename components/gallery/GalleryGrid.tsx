import Image from "next/image";

const galleryItems = [
	{
		id: 1,
		image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600",
		title: "Fresh Bread",
	},
	{
		id: 2,
		image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600",
		title: "Artisan Pastries",
	},
	{
		id: 3,
		image: "https://images.unsplash.com/photo-1612087198401-f65e86a46f48?auto=format&fit=crop&w=600",
		title: "Rustic Loaves",
	},
	// Add more gallery items as needed
];

export default function GalleryGrid() {
	return (
		<section className="py-20 px-4 md:px-8">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{galleryItems.map((item) => (
						<div key={item.id} className="relative group overflow-hidden rounded-lg">
							<div className="relative h-80 w-full">
								<Image
									src={item.image}
									alt={item.title}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<div className="absolute bottom-0 left-0 right-0 p-4">
										<h3 className="text-white text-xl font-semibold">{item.title}</h3>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="text-center mt-12">
					<button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
						Load More
					</button>
				</div>
			</div>
		</section>
	);
}
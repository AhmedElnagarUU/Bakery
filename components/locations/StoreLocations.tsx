import { Clock, MapPin, Phone } from "lucide-react";

const locations = [
	{
		name: "Downtown Bakery",
		address: "123 Main Street, Downtown",
		phone: "+1 234-567-8901",
		hours: "7:00 AM - 8:00 PM",
		image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=800",
	},
	{
		name: "Harbor View",
		address: "456 Ocean Drive, Waterfront",
		phone: "+1 234-567-8902",
		hours: "6:30 AM - 7:00 PM",
		image: "https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?auto=format&fit=crop&w=800",
	},
	{
		name: "Suburban Delights",
		address: "789 Park Avenue, Suburbia",
		phone: "+1 234-567-8903",
		hours: "7:00 AM - 6:00 PM",
		image: "https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?auto=format&fit=crop&w=800",
	},
];

export default function StoreLocations() {
	return (
		<section className="py-20 px-4 md:px-8 bg-gray-50">
			<div className="container mx-auto max-w-6xl">
				<h2 className="text-3xl font-serif text-center mb-12">Visit Our Stores</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{locations.map((location) => (
						<div key={location.name} className="bg-white rounded-lg shadow-md overflow-hidden">
							<div className="relative h-48">
								<img
									src={location.image}
									alt={location.name}
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="p-6 space-y-4">
								<h3 className="text-xl font-semibold">{location.name}</h3>
								<div className="space-y-2">
									<div className="flex items-center gap-2">
										<MapPin className="w-5 h-5 text-orange-400" />
										<p className="text-gray-600">{location.address}</p>
									</div>
									<div className="flex items-center gap-2">
										<Phone className="w-5 h-5 text-orange-400" />
										<p className="text-gray-600">{location.phone}</p>
									</div>
									<div className="flex items-center gap-2">
										<Clock className="w-5 h-5 text-orange-400" />
										<p className="text-gray-600">{location.hours}</p>
									</div>
								</div>
								<button className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-500 transition-colors">
									Get Directions
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
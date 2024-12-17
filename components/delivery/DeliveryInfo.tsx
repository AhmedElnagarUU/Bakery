import { Clock, MapPin, Truck, CreditCard } from "lucide-react";

export default function DeliveryInfo() {
	const deliveryFeatures = [
		{
			icon: <Clock className="w-12 h-12 text-orange-400" />,
			title: "Same Day Delivery",
			description: "Order before 10 AM for same-day delivery to your doorstep",
		},
		{
			icon: <MapPin className="w-12 h-12 text-orange-400" />,
			title: "Wide Coverage Area",
			description: "We deliver to all major areas within the city limits",
		},
		{
			icon: <Truck className="w-12 h-12 text-orange-400" />,
			title: "Temperature Controlled",
			description: "Special delivery vehicles to keep your bread fresh and warm",
		},
		{
			icon: <CreditCard className="w-12 h-12 text-orange-400" />,
			title: "Secure Payment",
			description: "Multiple payment options including cash on delivery",
		},
	];

	return (
		<section className="py-20 px-4 md:px-8 bg-gray-50">
			<div className="container mx-auto max-w-6xl">
				<h2 className="text-3xl font-serif text-center mb-12">Delivery Services</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{deliveryFeatures.map((feature) => (
						<div key={feature.title} className="text-center p-6 bg-white rounded-lg shadow-sm">
							<div className="mb-4 flex justify-center">{feature.icon}</div>
							<h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
							<p className="text-gray-600">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
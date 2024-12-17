import { Clock, MapPin, Medal, Users } from "lucide-react";

const values = [
	{
		icon: <Medal className="w-8 h-8 text-orange-500" />,
		title: "Quality First",
		description: "We use only the finest ingredients and time-honored techniques.",
	},
	{
		icon: <Users className="w-8 h-8 text-orange-500" />,
		title: "Community Focus",
		description: "Building relationships with our local community since 1990.",
	},
	{
		icon: <Clock className="w-8 h-8 text-orange-500" />,
		title: "Fresh Daily",
		description: "Everything is baked fresh every morning, no exceptions.",
	},
	{
		icon: <MapPin className="w-8 h-8 text-orange-500" />,
		title: "Local Sourcing",
		description: "Supporting local farmers and suppliers whenever possible.",
	},
];

export default function ValuesSection() {
	return (
		<section className="bg-gray-50 py-20 px-4 md:px-8">
			<div className="container mx-auto max-w-6xl">
				<h2 className="text-3xl font-serif text-center mb-12">Our Values</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{values.map((value) => (
						<div key={value.title} className="text-center">
							<div className="mb-4 flex justify-center">{value.icon}</div>
							<h3 className="text-xl font-semibold mb-2">{value.title}</h3>
							<p className="text-gray-600">{value.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
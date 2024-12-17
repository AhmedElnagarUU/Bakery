import Image from "next/image";

const team = [
	{
		name: "John Baker",
		role: "Master Baker",
		image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=500",
	},
	{
		name: "Alex Thompson",
		role: "Pastry Chef",
		image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500",
	},
	{
		name: "Mike Johnson",
		role: "Bread Specialist",
		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500",
	},
];

export default function TeamSection() {
	return (
		<section className="py-20 px-4 md:px-8">
			<div className="container mx-auto max-w-6xl">
				<h2 className="text-3xl font-serif text-center mb-12">Meet Our Team</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{team.map((member) => (
						<div key={member.name} className="text-center">
							<div className="relative h-64 mb-4">
								<Image
									src={member.image}
									alt={member.name}
									fill
									className="object-cover rounded-lg"
								/>
							</div>
							<h3 className="text-xl font-semibold">{member.name}</h3>
							<p className="text-gray-600">{member.role}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
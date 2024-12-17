import Image from "next/image";

export default function DeliveryAreas() {
	return (
		<section className="py-20 px-4 md:px-8">
			<div className="container mx-auto max-w-6xl">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<h2 className="text-3xl font-serif mb-4">Delivery Areas</h2>
						<div className="space-y-4">
							<div className="p-4  rounded-lg">
								<h3 className="font-semibold mb-2">Zone A - Free Delivery</h3>
								<p className="text-gray-600">Downtown, Central Business District, Harbor View</p>
							</div>
							<div className="p-4  rounded-lg">
								<h3 className="font-semibold mb-2">Zone B - $5 Delivery Fee</h3>
								<p className="text-gray-600">Suburban Areas, Riverside, Hill District</p>
							</div>
							<div className="p-4  rounded-lg">
								<h3 className="font-semibold mb-2">Zone C - $8 Delivery Fee</h3>
								<p className="text-gray-600">Outer City Limits, Beach Side, Mountain View</p>
							</div>
						</div>
					</div>
					<div className="relative h-[400px]">
						<Image
							src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800"
							alt="Delivery zones map"
							fill
							className="object-cover rounded-lg"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
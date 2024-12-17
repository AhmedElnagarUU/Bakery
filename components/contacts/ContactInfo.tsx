import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
	return (
		<section className="py-20 px-4 md:px-8 bg-gray-50">
			<div className="container mx-auto max-w-6xl">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="text-center p-6 bg-white rounded-lg shadow-sm">
						<div className="mb-4 flex justify-center">
							<MapPin className="w-12 h-12 text-orange-400" />
						</div>
						<h3 className="text-xl font-semibold mb-2">Visit Us</h3>
						<p className="text-gray-600">123 Bakery Street</p>
						<p className="text-gray-600">New York, NY 10001</p>
					</div>

					<div className="text-center p-6 bg-white rounded-lg shadow-sm">
						<div className="mb-4 flex justify-center">
							<Phone className="w-12 h-12 text-orange-400" />
						</div>
						<h3 className="text-xl font-semibold mb-2">Call Us</h3>
						<p className="text-gray-600">+1 234 567 8900</p>
						<p className="text-gray-600">+1 234 567 8901</p>
					</div>

					<div className="text-center p-6 bg-white rounded-lg shadow-sm">
						<div className="mb-4 flex justify-center">
							<Mail className="w-12 h-12 text-orange-400" />
						</div>
						<h3 className="text-xl font-semibold mb-2">Email Us</h3>
						<p className="text-gray-600">info@bakery.com</p>
						<p className="text-gray-600">support@bakery.com</p>
					</div>

					<div className="text-center p-6 bg-white rounded-lg shadow-sm">
						<div className="mb-4 flex justify-center">
							<Clock className="w-12 h-12 text-orange-400" />
						</div>
						<h3 className="text-xl font-semibold mb-2">Working Hours</h3>
						<p className="text-gray-600">Mon - Fri: 7am - 8pm</p>
						<p className="text-gray-600">Sat - Sun: 8am - 6pm</p>
					</div>
				</div>
			</div>
		</section>
	);
}
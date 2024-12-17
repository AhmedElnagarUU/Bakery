export default function MapSection() {
	return (
		<section className="py-20 px-4 md:px-8">
			<div className="container mx-auto max-w-6xl">
				<h2 className="text-3xl font-serif text-center mb-12">Find Us on the Map</h2>
				<div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596576435!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043276541!5m2!1sen!2s"
						width="100%"
						height="600"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</section>
	);
}
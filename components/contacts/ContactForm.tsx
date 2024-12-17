"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<section className="py-20 px-4 md:px-8 bg-zinc-900">
			<div className="container mx-auto max-w-4xl">
				<div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
					<h2 className="text-3xl font-serif text-center mb-8">Send Us a Message</h2>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
									Name
								</label>
								<input
									type="text"
									id="name"
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
									required
									placeholder="Your name"
								/>
							</div>
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
									Email
								</label>
								<input
									type="email"
									id="email"
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
									required
									placeholder="your@email.com"
								/>
							</div>
						</div>
						<div>
							<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
								Subject
							</label>
							<input
								type="text"
								id="subject"
								value={formData.subject}
								onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
								className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
								required
								placeholder="What's this about?"
							/>
						</div>
						<div>
							<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
								Message
							</label>
							<textarea
								id="message"
								rows={6}
								value={formData.message}
								onChange={(e) => setFormData({ ...formData, message: e.target.value })}
								className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
								required
								placeholder="Your message here..."
							></textarea>
						</div>
						<div className="flex justify-center">
							<button
								type="submit"
								className="flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transform hover:scale-105 transition-all duration-200"
							>
								Send Message
								<Send size={18} />
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
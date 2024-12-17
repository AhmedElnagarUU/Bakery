import HeroSection from "@/components/contacts/HeroSection";
import ContactForm from "@/components/contacts/ContactForm";
import ContactInfo from "@/components/contacts/ContactInfo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactsPage() {
	return (
		<main className="min-h-screen">
			<Navbar/>
			<HeroSection />
			<ContactInfo />
			<ContactForm />
			<Footer />
		</main>
	);
}
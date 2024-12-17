import HeroSection from "@/components/delivery/HeroSection";
import DeliveryInfo from "@/components/delivery/DeliveryInfo";
import DeliveryAreas from "@/components/delivery/DeliveryAreas";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function DeliveryPage() {
	return (
		<main className="min-h-screen">
			
			<HeroSection />
			<DeliveryInfo />
			<DeliveryAreas />
			<Footer />
		</main>
	);
}
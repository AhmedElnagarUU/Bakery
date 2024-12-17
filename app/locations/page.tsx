import HeroSection from "@/components/locations/HeroSection";
import StoreLocations from "@/components/locations/StoreLocations";
import MapSection from "@/components/locations/MapSection";
import Footer from "@/components/Footer";

export default function LocationsPage() {
	return (
		<main className="min-h-screen">
			<HeroSection />
			<StoreLocations />
			<MapSection />
			<Footer />
		</main>
	);
}
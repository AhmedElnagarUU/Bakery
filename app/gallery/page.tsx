import HeroSection from "@/components/gallery/HeroSection";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Footer from "@/components/Footer";

export default function GalleryPage() {
	return (
		<main className="min-h-screen bg-black text-white pt-16">
			<HeroSection />
			<GalleryGrid />
			<Footer />
		</main>
	);
}
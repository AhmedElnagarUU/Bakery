import HeroSection from "@/components/about/HeroSection";
import StorySection from "@/components/about/StorySection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
	return (
		<main className="min-h-screen">
			
			<HeroSection />
			<StorySection />
			<ValuesSection />
			<TeamSection />
			<Footer/>
		</main>
	);
}

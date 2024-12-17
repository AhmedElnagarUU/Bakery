import HeroSection from "@/components/blog/HeroSection";
import FeaturedPosts from "@/components/blog/FeaturedPosts";
import Footer from "@/components/Footer";

export default function BlogPage() {
	return (
		<main className="min-h-screen bg-black text-white pt-16">
			<HeroSection />
			<FeaturedPosts title={""} excerpt={""} slug={""} date={""} author={{
				name: "",
				image: undefined
			}} />
			<Footer />
		</main>
	);
}
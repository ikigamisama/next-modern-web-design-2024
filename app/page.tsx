import Benefits from "@/components/Benefits";
import Collaboration from "@/components/Collaboration";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roiadmap";
import Services from "@/components/Services";
import ButtonGradient from "@/components/svg/ButtonGradient";

export default function Home() {
	return (
		<main>
			<div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
				<Header />
				<Hero />
				<Benefits />
				<Collaboration />
				<Services />
				<Pricing />
				<Roadmap />
				<Footer />
			</div>
			<ButtonGradient />
		</main>
	);
}

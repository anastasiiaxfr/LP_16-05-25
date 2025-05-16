import Hero from '../components/Sections/Hero';
import Brands from '../components/Sections/Brands';
import Features from '../components/Sections/Features';
import Section1 from '../components/Sections/Section-1';
import Section2 from '../components/Sections/Section-2';
import Subscribe from '../components/Sections/Subscribe';
import Testimonials from '../components/Sections/Testimonials';

function HomePage() {
	return (
		<>
			<Hero />
			<Brands />
			<Features />
			<Section1 />
			<Section2 />
			<Testimonials />
			<Subscribe />
		</>
	);
}

export default HomePage;

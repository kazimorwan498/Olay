import Feature from "../Feature";
import Beauty from "./BeautySection/Beauty";
import Hero from "./HeroSection/Hero";

const Home = () => {
	return (
		<section className="bg-[url(/demo.jpg)] bg-top bg-no-repeat h-[5750px]">
			<Hero />
			<Beauty />
			<Feature />
		</section>
	);
};

export default Home;

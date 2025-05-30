import React from "react";
import HeroL from "./HeroL";
import HeroR from "./HeroR";

const Hero = () => {
	return (
		<section className="bg-[url(/HeroBackground.jpg)] bg-top bg-no-repeat">
			<section className="px-6 max-w-[1400px] mx-auto flex">
				<HeroL />
				<HeroR />
			</section>
		</section>
	);
};

export default Hero;

import React from "react";
import HeroL from "./HeroL";

const Hero = () => {
	return (
		<section className="bg-[url(/HeroBackground.jpg)] bg-contain bg-top bg-no-repeat">
			<section className="px-6 max-w-[1400px] mx-auto">
				<HeroL />
			</section>
		</section>
	);
};

export default Hero;

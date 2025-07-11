import React from "react";
import product1 from "../../../../assets/img/product1.png";

const HeroR = () => {
	return (
		<section className="w-2/3 sm:w-3/5 md:w-full flex items-center justify-center mx-auto">
			<img
				className="mt-[118px] drop-shadow-2xl"
				src={product1}
				alt="Hero Right Product"
			/>
		</section>
	);
};

export default HeroR;

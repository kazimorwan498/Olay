import React from "react";
import MyButton from "../../../Global/MyButton";

const HeroL = () => {
	return (
		<section className="pt-[222px] ps-[99px] pb-[127px] w-1/2">
			<h1 className="text-[50px] leading-[64px] text-white font-bold font-lora max-w-[570px] tracking-[0.6px]">
				Plump, Firm, and Radiant Skin in One Jar
			</h1>

			<p className="mt-[15px] max-w-[470px] tracking-[0.3px] leading-[20px] text-white font-semibold">
				The "Red Jar" delivers bouncy, youthful skin with Hyaluronic
				Acid, Vitamin B3, and Amino Peptides.
			</p>

			<div className="flex gap-3 mt-[33px]">
				<MyButton>Shop Now</MyButton>
				<MyButton
					className="bg-white text-black active:translate-0 border-2"
					classNameDiv="hidden"
				>
					Learn More
				</MyButton>
			</div>
		</section>
	);
};

export default HeroL;

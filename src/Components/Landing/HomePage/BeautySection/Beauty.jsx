import React from "react";
import BeautyBg from "../../../../assets/img/BeautyBg.jpg";
import effective1 from "../../../../assets/img/effective1.jpg";
import effective2 from "../../../../assets/img/effective2.jpg";
import MyButton from "../../../Global/MyButton";
import Effective from "./Effective";

const Beauty = () => {
	return (
		<section
			className="bg-cover bg-center py-[102px] px-[46px] max-w-[1400px] mx-auto"
			style={{ backgroundImage: `url(${BeautyBg})` }}
		>
			<div className="flex" data-aos="fade-up">
				<Effective style={{ backgroundImage: `url(${effective1})` }} />

				<div className="flex flex-col gap-[27px] items-center justify-center max-w-[939px] mx-auto px-[18px]">
					<h2 className="font-PrimeCast md:text-[30px] 901px:text-[34px] tracking-[4.3px] leading-[46px]">
						Clean Beauty with Proven Power
					</h2>
					<p className="text-[23px] text-center leading-[30px]">
						Free from parabens, phthalates, and synthetic dyes
						because your skin deserves real, honest care. Builds
						your skin's moisture barrier to help resist daily
						stressors while improving tone and texture. Use morning
						and night as the last step of your routine to seal in
						treatment benefits and visibly sculpt your skin. Olay
						Regenerist beats luxury creams{" "}
						<strong className="font-bold">over $400</strong> in
						hydration — without breaking your budget.
					</p>

					<MyButton classNameDiv2="bg-CRed">Know More</MyButton>
				</div>

				<Effective
					className="rotate-[22deg]"
					classNameP="self-end"
					style={{ backgroundImage: `url(${effective2})` }}
				/>
			</div>
		</section>
	);
};

export default Beauty;

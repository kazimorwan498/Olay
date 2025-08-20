import { cn } from "@heroui/react";
import React from "react";

const Effective = ({ classNameP, className, style }) => {
	return (
		<div className={classNameP}>
			<div
				className={cn(
					"w-[80px] sm:w-[100px] md:w-[120px] 901px:w-[134px] h-[120px] sm:h-[160px] md:h-[190px] 901px:h-[212px] bg-violet-400 rounded-full -rotate-[22deg] bg-cover bg-top before:absolute before:inset-1 before:border-2 before:rounded-full before:border-dashed relative",
					className
				)}
				style={style}
			/>
		</div>
	);
};

export default Effective;

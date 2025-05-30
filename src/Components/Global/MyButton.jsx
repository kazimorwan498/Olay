import { Button, cn } from "@heroui/react";
import React from "react";

const MyButton = ({ classNameDiv, className, children }) => {
	return (
		<div className="relative max-h-12">
			<div
				className={cn(
					"absolute inset-0 bg-white rounded-full translate-[1px]",
					classNameDiv
				)}
			/>
			<Button
				className={cn(
					"bg-black text-white font-medium px-[51px] py-6 text-lg rounded-full active:translate-[1px] transition-transform ease-in-out",
					className
				)}
				data-pressed="false"
				data-hover="false"
				variant="solid"
			>
				{children}
			</Button>
		</div>
	);
};

export default MyButton;

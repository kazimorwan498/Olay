import { Button, cn } from "@heroui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const MyButton = ({
	classNameDiv,
	classNameDiv2,
	className,
	children,
	url,
	onPress,
	loadAni,
}) => {
	const navigate = useNavigate();

	const handleUrl = () => {
		navigate(url);
	};

	return (
		<div
			className={cn(
				"relative max-h-[40px] lg:max-h-12",
				classNameDiv
			)}
			data-aos={loadAni}
		>
			<div
				className={cn(
					"absolute inset-0 bg-white rounded-full translate-[2px]",
					classNameDiv2
				)}
			/>
			<Button
				className={cn(
					"bg-black text-white font-medium px-6 sm:px-7 md:px-9 lg:px-[51px] py-5 lg:py-6 text-base sm:text-lg rounded-full active:translate-[2px]",
					className
				)}
				data-pressed="false"
				data-hover="false"
				variant="solid"
				onPress={() => {
					if (onPress) onPress();
					// handleUrl();
				}}
			>
				{children}
			</Button>
		</div>
	);
};

export default MyButton;

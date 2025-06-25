import React, { useEffect } from "react";
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
} from "@heroui/react";
import navLinkItems from "../../../db/dbExport";
import { Link } from "react-router-dom";
import MyButton from "../MyButton";

const NavDrawer = ({ isOpen, onOpenChange }) => {
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 640) {
				if (onOpenChange) {
					onOpenChange(false);
				}
			}
		};

		if (isOpen) {
			handleResize(); // Run on mount only if open
		}

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
		// Only re-run effect when isOpen or onOpenChange changes
	}, [isOpen, onOpenChange]);

	return (
		<>
			<Drawer
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				size="xs"
				className="navDrawer"
			>
				<DrawerContent>
					{(onClose) => (
						<>
							<DrawerBody className="mt-10">
								{navLinkItems.map(({ items, url }, i) => (
									<Link
										key={i}
										className="text-black text-lg px-2.5 py-2 hover:bg-black/10 hover:ps-4 transition-all rounded-md"
										onClick={onClose}
										to={url}
									>
										{items}
									</Link>
								))}
							</DrawerBody>
							<DrawerFooter className="justify-start items-center">
								<MyButton
									className="bg-white text-black active:translate-0 border-2 px-7 active:scale-95"
									classNameDiv2="hidden"
									onPress={onClose}
									url="/login"
								>
									Login
								</MyButton>

								<MyButton
									className="bg-black text-white active:translate-0 border-2 px-7 active:scale-95"
									classNameDiv2="hidden"
									onPress={onClose}
									url="/signup"
								>
									Signup
								</MyButton>
							</DrawerFooter>
						</>
					)}
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default NavDrawer;

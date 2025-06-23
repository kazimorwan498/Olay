import React, { useEffect, useState } from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	useDisclosure,
} from "@heroui/react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import navLinkItems from "../../../db/dbExport";
import MyButton from "../MyButton";
import NavDrawer from "./NavDrawer";
import Hamburger from "../Icons/Hamburger.jsx";
import XMark from "../Icons/XMark.jsx";

const MyNavbar = () => {
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		const handleScrolling = () => {
			setScrolling(window.scrollY > 200);
		};

		window.addEventListener("scroll", handleScrolling);

		return () => {
			window.removeEventListener("scroll", handleScrolling);
		};
	}, []);

	const { isOpen, onOpen, onOpenChange } = useDisclosure();


	return (
		<Navbar
			className={`backdrop-saturate-100 py-[7px] transition-colors-opacity ${
				scrolling ? "bg-[#4d0000]/50 shadow-md" : "bg-bg-[#4d0000]/0"
			}`}
			maxWidth="2xl"
		>
			<NavbarContent className="!max-w-[1206px] mx-auto">
				<NavbarBrand>
					<Link to="/">
						<img className="h-[55px]" src={logo} alt="logo" />
					</Link>
				</NavbarBrand>
				<NavbarContent
					className="hidden sm:flex gap-[28px]"
					justify="center"
				>
					{navLinkItems.map(({ items, url }, i) => (
						<NavbarItem key={i}>
							<Link className="text-white text-lg" to={url}>
								{items}
							</Link>
						</NavbarItem>
					))}
				</NavbarContent>
				<NavbarContent className="hidden sm:flex" justify="end">
					<NavbarItem>
						<MyButton url="/login">Log In</MyButton>
					</NavbarItem>
				</NavbarContent>
			</NavbarContent>
			<NavbarContent className="sm:hidden" justify="end">
				<NavbarMenuToggle
					onClick={onOpen}
					className="text-white w-10 cursor-pointer"
					icon={isOpen ? XMark : Hamburger}
				/>
				<NavDrawer isOpen={isOpen} onOpenChange={onOpenChange} />
			</NavbarContent>
		</Navbar>
	);
};

export default MyNavbar;

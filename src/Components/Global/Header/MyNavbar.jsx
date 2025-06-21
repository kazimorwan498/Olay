import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import navLinkItems from "../../../db/dbExport";
import MyButton from "../MyButton";

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

	return (
		<Navbar
			className={`backdrop-saturate-100 py-[7px] transition-colors-opacity ${
				scrolling ? "bg-[#4d0000]/50 shadow-md" : "bg-bg-[#4d0000]/0"
			}`}
			maxWidth="2xl"
		>
			<NavbarContent className=" !max-w-[1206px] mx-auto">
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
				<NavbarContent justify="end">
					<NavbarItem>
						<MyButton url="/login">Log In</MyButton>
					</NavbarItem>
				</NavbarContent>
			</NavbarContent>
		</Navbar>
	);
};

export default MyNavbar;

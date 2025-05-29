import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { Link } from "react-router-dom";
import navLinkItems from "../../db/dbExport";
import MyButton from "./MyButton";

const MyNavbar = () => {
	return (
		<Navbar
			className="backdrop-blur-none backdrop-saturate-0 bg-[#78040f]"
			position="static"
		>
			<NavbarBrand>
				<img className="h-[60px]" src="/logo.png" alt="logo" />
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{navLinkItems.map(({ items, url }, i) => (
					<NavbarItem key={i}>
						<Link className="text-white" to={url}>
							{items}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<MyButton>Sign Up</MyButton>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default MyNavbar;

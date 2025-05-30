import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { Link } from "react-router-dom";
import navLinkItems from "../../db/dbExport";
import MyButton from "./MyButton";

const MyNavbar = () => {
	return (
		<section className="bg-[#78040f]">
			<Navbar
				className="absolute top-0 inset-x-0 backdrop-blur-none backdrop-saturate-100 bg-transparent py-[7px] !max-w-[1206px] mx-auto"
				maxWidth="2xl"
			>
				<NavbarBrand>
					<img className="h-[55px]" src="/logo.png" alt="logo" />
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
						<MyButton>Log In</MyButton>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
		</section>
	);
};

export default MyNavbar;

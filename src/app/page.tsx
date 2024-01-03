"use client";

import { Presentation } from "./_components/presentation";
import { AboutMe } from "./_components/about-me";
import { Projects } from "./_components/project";
import { Footer } from "./_components/footer";
import { Variants, m } from "framer-motion";

const parentVariant: Variants = {
	// init: {
	// 	y: "40%",
	// 	opacity: 0,
	// },
	visible: {
		// y: 0,
		// opacity: 1,
		transition: { staggerChildren: 0.3 },
	},
};

const childVariants: Variants = {
	init: {
		y: 300,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		// transition: { duration: 1 },
	},
};

export default function Home() {
	return (
		<m.main
			initial="init"
			animate="visible"
			variants={parentVariant}
			className="h-full w-full p-2 grid gap-2 max-w-6xl relative sm:p-4 sm:gap-2 md:grid-cols-2 md:gap-3 lg:h-screen lg:grid-rows-7 lg:grid-cols-4 lg:gap-4 lg:max-h-[700px] overflow-hidden"
		>
			<Presentation variants={childVariants} />

			<AboutMe variants={childVariants} />

			<Projects variants={childVariants} />

			<Footer variants={childVariants} />
		</m.main>
	);
}

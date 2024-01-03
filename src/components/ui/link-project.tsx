"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { m, useAnimation, Variants } from "framer-motion";
import { IconExternalLink } from "../icons/external-link";

type Props = {
	href: string;
	src: string;
	title: string;
};

export function LinkProject({ href, src, title }: Props) {
	const [isHovered, setIsHovered] = useState(false);

	const controls = useAnimation();

	const boxImageVariants: Variants = {
		hidden: { opacity: 0, y: -30 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<div className="relative h-full flex items-center">
			<m.div
				className="absolute z-10 right-0 rounded-2xl overflow-hidden pointer-events-none"
				initial="hidden"
				animate={isHovered ? "visible" : "hidden"}
				variants={boxImageVariants}
			>
				<Image
					src={src}
					alt={title}
					width={250}
					height={200}
				/>
			</m.div>

			<Link
				href={href}
				className="w-full h-full flex justify-between items-center hover:underline"
				target="_blank"
				onMouseEnter={() => {
					setIsHovered(true);
					controls.start("visible");
				}}
				onMouseLeave={() => {
					setIsHovered(false);
					controls.start("hidden");
				}}
			>
				{title}
				<IconExternalLink />
			</Link>
		</div>
	);
}

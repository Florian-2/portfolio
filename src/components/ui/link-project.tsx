"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { m, useAnimation, Variants } from "framer-motion";
import { IconExternalLink } from "../icons/external-link";

type Props = {
	project: Project;
};

export function LinkProject({ project }: Props) {
	const [isHovered, setIsHovered] = useState(false);

	const controls = useAnimation();

	const fadeVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<m.div
			className="relative"
			onHoverStart={() => {
				setIsHovered(true);
				controls.start("visible");
			}}
			onHoverEnd={() => {
				setIsHovered(false);
				controls.start("hidden");
			}}
		>
			<m.div
				className="absolute z-10 rounded-lg pointer-events-none min-w-[270px] overflow-hidden"
				initial="hidden"
				animate={isHovered ? "visible" : "hidden"}
				variants={fadeVariants}
				style={{
					bottom: "110%",
					left: "50%",
					translateX: "-50%",
				}}
			>
				<Image
					src={project.src}
					alt={project.title}
					width={270}
					height={200}
					aria-hidden={isHovered}
				/>
			</m.div>

			<Link
				href={project.href}
				className="h-full flex flex-col justify-between gap-4 p-4 border rounded-lg transition-colors hover:bg-[#1f1f1f] overflow-hidden"
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
				<span className="font-medium">{project.title}</span>

				<div className="text-sm flex justify-between items-center">
					{project.languages.join(" • ")}

					<m.div
						initial={{ opacity: 0, y: 30 }}
						animate={isHovered ? "visible" : "hidden"}
						variants={fadeVariants}
					>
						<IconExternalLink />
					</m.div>
				</div>
			</Link>
		</m.div>
	);
}

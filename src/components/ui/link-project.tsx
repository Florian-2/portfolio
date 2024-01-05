"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IconExternalLink } from "../icons/external-link";
import { cn } from "@/utils/utils";

type Props = {
	project: Project;
};

export function LinkProject({ project }: Props) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="relative"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				className={cn(
					"absolute z-10 rounded-lg bottom-[110%] left-1/2 -translate-x-1/2 translate-y-8 pointer-events-none min-w-[270px] overflow-hidden transition-all duration-200 opacity-0",
					isHovered && "opacity-100 translate-y-0"
				)}
			>
				<Image
					src={project.src}
					alt={project.title}
					width={270}
					height={200}
					aria-hidden={isHovered}
				/>
			</div>

			<Link
				href={project.href}
				className="h-full flex flex-col justify-between gap-4 p-4 border rounded-lg transition-colors hover:bg-[#1f1f1f] overflow-hidden"
				target="_blank"
			>
				<span className="font-medium">{project.title}</span>

				<div className="text-sm flex justify-between items-center">
					{project.languages.join(" • ")}

					<div
						className={cn(
							"transition-all duration-200 opacity-0 translate-y-8",
							isHovered && "opacity-100 translate-y-0"
						)}
					>
						<IconExternalLink />
					</div>
				</div>
			</Link>
		</div>
	);
}

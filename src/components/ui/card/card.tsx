"use client";

import { cn } from "@/utils/utils";
import { ReactNode, useEffect, useState } from "react";

type Props = {
	children: ReactNode;
	className?: string;
};

export function Card({ children, className }: Props) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		if (!isMounted) {
			setIsMounted(true);
		}
	}, [isMounted]);

	return (
		<div
			className={cn(
				"p-4 sm:p-6 text-white bg-card rounded-lg border transition-all hover:border-red-500 opacity-0 translate-y-72 duration-300",
				className,
				isMounted && "opacity-100 translate-y-0"
			)}
		>
			{children}
		</div>
	);
}

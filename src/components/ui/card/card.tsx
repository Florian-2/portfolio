import { cn } from "@/utils/utils";
import { ReactNode, forwardRef } from "react";

type Props = {
	children: ReactNode;
	className?: string;
};

export const Card = forwardRef<HTMLDivElement, Props>(function Card({ children, className }: Props, ref) {
	return (
		<div
			ref={ref}
			className={cn("p-6 text-white bg-card rounded-lg border transition-colors hover:border-red-500", className)}
		>
			{children}
		</div>
	);
});

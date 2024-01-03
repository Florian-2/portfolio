import Link from "next/link";
import { Card } from "@/components/ui";
import { forwardRef } from "react";
import { m } from "framer-motion";

const Element = forwardRef<HTMLDivElement>(function Footer(_props, ref) {
	return (
		<Card
			ref={ref}
			className="p-4 flex justify-center items-center col-span-1 md:col-span-1 md:row-span-1"
		>
			<p className="text-sm">
				Fabriqué avec ❤️ à l'aide de{" "}
				<Link
					href={"https://nextjs.org/"}
					className="font-medium hover:underline"
					target="_blank"
				>
					Next.js
				</Link>
			</p>
		</Card>
	);
});

export const Footer = m(Element);

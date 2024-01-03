import { Card, CardTitle } from "@/components/ui";
import { LinkProject } from "@/components/ui/link-project";
import { m } from "framer-motion";
import { forwardRef } from "react";

const Element = forwardRef<HTMLDivElement>(function Projects(_props, ref) {
	return (
		<Card
			ref={ref}
			className="min-h-60 col-span-1 md:col-span-2 md:row-span-3 flex flex-col gap-5"
		>
			<CardTitle>Mes Créations</CardTitle>

			<div className="flex-grow flex flex-col">
				<LinkProject
					title="OhMyFood"
					href="https://florian-2.github.io/FlorianSicilia_3_28122020/"
					src="/ohmyfood.webp"
				/>

				<LinkProject
					title="Le fouquet's"
					href="https://fouquet.vercel.app/"
					src="/fouquet.webp"
				/>

				<LinkProject
					title="Movie+"
					href="#"
					src="/movie.webp"
				/>
			</div>
		</Card>
	);
});

export const Projects = m(Element);

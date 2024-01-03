import { Card, CardTitle } from "@/components/ui";
import { m } from "framer-motion";
import { forwardRef } from "react";

const Element = forwardRef<HTMLDivElement>(function AboutMe(_props, ref) {
	return (
		<Card
			ref={ref}
			className="min-h-full col-span-1 md:col-span-1 md:row-span-7"
		>
			<div className="h-full flex flex-col justify-between gap-5 md:gap-2 ">
				<CardTitle>À propos de moi</CardTitle>

				<p className="text-md whitespace-pre-line ">
					Passionné par l'informatique et plus particulièrement par le développement, j'ai commencé en
					autodidacte avant de suivre une formation de développeur React d'une durée d'un an et demi.{"\n"} À
					terme, mon objectif est de devenir un développeur full-stack .NET / React.
				</p>

				<div className="space-y-2">
					<p className="font-normal">Mes outils de prédilection:</p>

					<ul className="list-disc list-inside font-normal">
						<li>TypeScript</li>
						<li>React</li>
						<li>Next</li>
						<li>Node / Express</li>
					</ul>
				</div>

				<p className="text-md">
					Au-delà de l'aspect technique, je suis passionné par le cinéma et les jeux vidéo, ce qui m'a
					encouragé à devenir développeur.
				</p>
			</div>
		</Card>
	);
});

export const AboutMe = m(Element);

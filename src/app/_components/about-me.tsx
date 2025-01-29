import { Card, CardTitle } from "@/components/ui";

const skills = ["TypeScript", "React", "Next.js", "GraphQL", "Node"];

export function AboutMe() {
	return (
		<Card className="col-span-1 lg:row-span-6 delay-100">
			<div className="h-full flex flex-col justify-between gap-5  ">
				<CardTitle>À propos de moi</CardTitle>

				<p className="text-md whitespace-pre-line ">
					Passionné par l'informatique et plus particulièrement par le développement, j'ai commencé en
					autodidacte avant de suivre une formation de développeur React d'une durée d'un an et demi.
					Aujourd'hui, je continue d'enrichir mes compétences pour devenir un meilleur développeur !
				</p>

				<div className="space-y-2">
					<p className="font-normal truncate">Mes outils de prédilection:</p>

					<ul className="list-disc list-inside font-normal">
						{skills.map((skill) => (
							<li key={skill}>{skill}</li>
						))}
					</ul>
				</div>

				<p className="text-md">
					Au-delà de l'aspect technique, je suis passionné par le cinéma et les jeux vidéo !
				</p>
			</div>
		</Card>
	);
}

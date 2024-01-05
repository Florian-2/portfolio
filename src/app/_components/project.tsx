import { Card, CardTitle } from "@/components/ui";
import { LinkProject } from "@/components/ui/link-project";

const projects: Project[] = [
	{
		id: 1,
		title: "OhMyFood",
		href: "https://florian-2.github.io/FlorianSicilia_3_28122020/",
		src: "/ohmyfood.webp",
		languages: ["HTML", "CSS"],
	},
	{
		id: 2,
		title: "Le fouquet's",
		href: "https://fouquet.vercel.app/",
		src: "/fouquet.webp",
		languages: ["HTML", "CSS"],
	},
	{
		id: 3,
		title: "Movie+",
		href: "#",
		src: "/movie.webp",
		languages: ["Next.js", "TypeScript"],
	},
];

export function Projects() {
	return (
		<Card className="col-span-1 lg:col-span-3 lg:row-span-3 flex flex-col gap-5 delay-200">
			<CardTitle>Mes Créations</CardTitle>

			<div className="w-full h-full grid grid-cols-auto auto-rows-fr gap-4">
				{projects.map((project) => (
					<LinkProject
						key={project.id}
						project={project}
					/>
				))}
			</div>
		</Card>
	);
}

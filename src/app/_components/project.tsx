import { Card, CardTitle } from "@/components/ui";
import { LinkProject } from "@/components/ui/link-project";
import { projects } from "@/data/projects";

export function Projects() {
	return (
		<Card className="col-span-1 lg:col-span-3 lg:row-span-3 flex flex-col gap-5">
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

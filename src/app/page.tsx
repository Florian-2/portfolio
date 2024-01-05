import { Presentation } from "./_components/presentation";
import { AboutMe } from "./_components/about-me";
import { Projects } from "./_components/project";
import { cn } from "@/utils/utils";

export default function Home() {
	return (
		<main
			className={cn(
				"h-full w-full p-2 grid gap-2 max-w-6xl relative sm:p-4 sm:gap-2 md:gap-3 lg:grid-rows-6 lg:grid-cols-4 lg:gap-4 lg:max-h-[700px] overflow-hidden"
			)}
		>
			<Presentation />

			<AboutMe />

			<Projects />
		</main>
	);
}

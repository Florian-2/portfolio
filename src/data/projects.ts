import { Project } from "@/interfaces/project";

export const projects: Project[] = [
	{
		id: 1,
		title: "OhMyFood",
		href: "https://florian-2.github.io/FlorianSicilia_3_28122020/",
		src: "/ohmyfood.webp",
		languages: ["HTML", "CSS"],
	},
	// {
	// 	id: 2,
	// 	title: "Le fouquet's",
	// 	href: "https://fouquet.vercel.app/",
	// 	src: "/fouquet.webp",
	// 	languages: ["HTML", "CSS"],
	// },
	{
		id: 2,
		title: "Estatein",
		href: "https://estatein-business.netlify.app/",
		src: "/Estatein.webp",
		languages: ["React.js"],
	},
	{
		id: 3,
		title: "Movie+",
		href: "https://youtu.be/BfoLFRWrkb8",
		src: "/movie.webp",
		languages: ["Next.js", "TypeScript"],
	},
	{
		id: 4,
		title: "Note+",
		href: "https://youtu.be/2SYlSkyBuJ4",
		src: "/note.webp",
		languages: ["Next.js", "TypeScript", "tRPC", "PostgreSQL", "Prisma"],
	},
];

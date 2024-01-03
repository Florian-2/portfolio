import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FramerMotion } from "./_components/framer-motion";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Florian Sicilia - Développeur Front-End",
	description: "description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="fr"
			className="selection:bg-red-500"
		>
			<body className={`${inter.className} flex justify-center items-center md:h-screen bg-background`}>
				<FramerMotion>{children}</FramerMotion>
			</body>
		</html>
	);
}

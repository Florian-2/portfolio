import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Florian Sicilia - Développeur Front-End",
	description:
		"En tant que développeur front-end, Je m'applique à concevoir des applications web élégantes et agréables à utiliser.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="fr"
			className="selection:bg-red-500"
		>
			<body className={`${inter.className} flex justify-center items-center min-h-screen bg-background`}>
				{children}
			</body>
		</html>
	);
}

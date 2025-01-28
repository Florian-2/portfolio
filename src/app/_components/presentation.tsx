import { IconGithub } from "@/components/icons/github";
import { IconLinkedin } from "@/components/icons/linkedin";
import { Card, CardTitle, Link } from "@/components/ui";
import Image from "next/image";
import Memoji from "@public/MyMemoji.webp";
import { IconMail } from "@/components/icons/mail";
import { IconFile } from "@/components/icons/file";

export function Presentation() {
	return (
		<Card className="overflow-hidden border align-start flex gap-3 relative transform col-span-1 lg:col-span-3 lg:row-span-3">
			<div className="flex flex-col justify-between gap-4 relative z-10">
				<div className="space-y-3">
					<CardTitle>
						Bienvenue <span className="animate-bounce inline-block">👋</span>
					</CardTitle>

					<p className="text-lg md:text-xl">
						Je suis <b className="font-bold">Florian Sicilia</b>, développeur front-end. Portant un vif
						intérêt pour l'expérience utilisateur et l'accessibilité, je m'applique à concevoir des
						applications web élégantes, fonctionnelles et agréables d'utilisation.
					</p>
				</div>

				<div className="flex gap-2">
					<Link
						href="https://github.com/Florian-2"
						title="Profil Github"
					>
						<IconGithub />
					</Link>

					<Link
						href="https://www.linkedin.com/in/florian-sicilia-4106b31ba/"
						title="Profil Linkedin"
					>
						<IconLinkedin />
					</Link>

					<Link
						href="mailto:sicilia.florian02@gmail.com"
						title="Contactez-moi par mail !"
					>
						<IconMail />
					</Link>

					<Link
						href="https://link.storjshare.io/s/jxa5zy6ea3olh67f64tgnrrw6gaq/cv-florian/CV.pdf"
						title="Mon CV"
					>
						<IconFile />
					</Link>
				</div>
			</div>

			<div className="flex justify-end items-end shrink-0 absolute bottom-0 right-[-30px] -z-1 opacity-50 md:opacity-100 md:relative md:right-auto md:bottom-auto md:z-auto ">
				<Image
					src={Memoji}
					alt="Memoji de Florian"
					width={220}
					height={200}
					priority={true}
					draggable={false}
				/>
			</div>
		</Card>
	);
}

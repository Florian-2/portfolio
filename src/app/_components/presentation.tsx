import { IconGithub } from "@/components/icons/github";
import { IconLinkedin } from "@/components/icons/linkedin";
import { Card, CardTitle, ContactLink } from "@/components/ui";
import Image from "next/image";
import Memoji from "@public/MyMemoji.webp";
import { IconMail } from "@/components/icons/mail";
import { forwardRef } from "react";
import { m } from "framer-motion";

const Element = forwardRef<HTMLDivElement>(function Presentation(_props, ref) {
	return (
		<Card
			ref={ref}
			className="overflow-hidden border align-start flex gap-3 relative transform col-span-1 md:col-span-3 md:row-span-4"
		>
			<div className="flex flex-col justify-between gap-4 relative z-10">
				<div className="space-y-3">
					<CardTitle>
						Bienvenue <span className="animate-bounce inline-block">👋</span>
					</CardTitle>

					<p className="text-lg md:text-xl">
						Je suis <b className="font-bold">Florian Sicilia</b>, développeur front-end. Je porte un vif
						intérêt pour le design et l'expérience utilisateur, m'appliquant à concevoir des applications
						web élégantes et agréables à utiliser.
					</p>
				</div>

				<div className="flex gap-2">
					<ContactLink
						href="https://github.com/Florian-2"
						title="Profil Github"
					>
						<IconGithub width={25} />
					</ContactLink>

					<ContactLink
						href="https://www.linkedin.com/in/florian-sicilia-4106b31ba/"
						title="Profil Linkedin"
					>
						<IconLinkedin width={25} />
					</ContactLink>

					<ContactLink
						href="mailto:sicilia.florian02@gmail.com"
						title="Contactez-moi par mail !"
					>
						<IconMail width={25} />
					</ContactLink>
				</div>
			</div>

			<div className="flex justify-end items-end flex-shrink-0 absolute bottom-0 right-[-30px] -z-1 opacity-50 md:opacity-100 md:relative md:right-auto md:bottom-auto md:z-auto ">
				<Image
					src={Memoji}
					alt="Memoji de Florian"
					width={220}
					height={200}
					priority={true}
					draggable={false}
					className=""
				/>
			</div>
		</Card>
	);
});

export const Presentation = m(Element);

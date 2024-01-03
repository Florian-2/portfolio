import Link from "next/link";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Link>;

export function ContactLink(props: Props) {
	const { children, title } = props;

	return (
		<Link
			{...props}
			className="p-2 flex justify-center items-center border rounded transition-colors hover:border-red-500"
			target="_blank"
		>
			{children}
			<span className="sr-only">{title}</span>
		</Link>
	);
}

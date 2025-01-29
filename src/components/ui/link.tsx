import NextLink from "next/link";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof NextLink>;

export function Link(props: Props) {
	const { children, title } = props;

	return (
		<NextLink
			{...props}
			className="p-2 flex justify-center items-center border rounded-sm transition-colors hover:border-zinc-500"
			target="_blank"
		>
			{children}
			<span className="sr-only">{title}</span>
		</NextLink>
	);
}

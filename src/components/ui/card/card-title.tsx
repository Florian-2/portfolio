import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export function CardTitle({ children }: Props) {
	return <h3 className="text-xl font-bold group-hover:underline">{children}</h3>;
}

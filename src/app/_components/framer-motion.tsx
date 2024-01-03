"use client";

import { ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

type Props = {
	children: ReactNode;
};

export function FramerMotion({ children }: Props) {
	return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

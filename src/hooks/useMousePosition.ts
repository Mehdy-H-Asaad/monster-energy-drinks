import { useEffect, useState } from "react";

type TMousePosition = {
	x: number | null;
	y: number | null;
};

export const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState<TMousePosition>({
		x: null,
		y: null,
	});

	const updateMousePosition = (e: MouseEvent) => {
		setMousePosition({ x: e.clientX, y: e.clientY });
	};

	useEffect(() => {
		window.addEventListener("pointermove", updateMousePosition);

		return () => window.removeEventListener("pointermove", updateMousePosition);
	}, []);

	return { mousePosition };
};

import { motion } from "framer-motion";
import { Beverages } from "./components/Beverages";
import { Hero } from "./components/Hero";
import { Quote } from "./components/Quote";
import { Video } from "./components/Video";
import { useMousePosition } from "./hooks/useMousePosition";
import { DrinksAnimation } from "./components/DrinksAnimation";
import { TextMask } from "./components/TextMask";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import Lenis from "lenis";
function App() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);

			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);

	const { mousePosition } = useMousePosition();
	const mouseSize = 20;
	return (
		<>
			<motion.div
				animate={{
					left: `${mousePosition.x! - mouseSize / 2}px`,
					top: `${mousePosition.y! - mouseSize / 2}px`,
					width: `${mouseSize}px`,
					height: `${mouseSize}px`,
				}}
				transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
				className={`mask hidden md:block`}
			></motion.div>
			<Hero />
			<Video />
			<Beverages />
			<Quote />
			<DrinksAnimation />
			<TextMask />
			<Footer />
		</>
	);
}

export default App;

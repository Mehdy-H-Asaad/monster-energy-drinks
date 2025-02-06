import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const TextMask = () => {
	const phrases = [
		"Turn up the intensity with Monster Energy",
		"where every sip fuels your unstoppable drive!",
	];

	const body = useRef(null);

	const isInView = useInView(body, { once: true, margin: "-75%" });

	const animationOptions = {
		initial: { y: "100%" },
		enter: (i: number) => ({
			y: "0",
			transition: {
				duration: 0.75,
				ease: [0.33, 1, 0.68, 1],
				delay: 0.075 * i,
			},
		}),
	};

	return (
		<div className="pb-20 text-white">
			<div className="container">
				<div ref={body} className="text-center">
					{phrases.map((phrase, index) => (
						<div key={index} className="overflow-hidden">
							<motion.p
								custom={index}
								variants={animationOptions}
								initial="initial"
								animate={isInView ? "enter" : ""}
								className="text-2xl sm:text-4xl md:text-5xl"
							>
								{phrase}
							</motion.p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

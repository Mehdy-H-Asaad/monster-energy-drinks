import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";

export const Quote = () => {
	const phrases = [
		"Unleash the beast with Monster Energy",
		"fuel your passion, power your day!",
	];

	const ref = useRef(null);

	const isInView = useInView(ref, { once: true, margin: "-75%" });

	const animationOpt = {
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
		<div className="relative">
			<div className="container relative">
				<div className="flex justify-center flex-col gap-20">
					<div className="mx-auto">
						<FaQuoteLeft size={40} className="text-white" />
					</div>
					<div ref={ref}>
						{phrases.map((phrase, index) => (
							<div key={index} className="overflow-hidden">
								<motion.p
									variants={animationOpt}
									initial="initial"
									custom={index}
									animate={isInView ? "enter" : ""}
									className="text-2xl sm:text-5xl text-white text-center"
								>
									{phrase}
								</motion.p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

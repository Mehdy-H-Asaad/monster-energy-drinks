import { socialMediaFooterLinks } from "@/data";
import { motion } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
	const animationStagger = {
		initial: {
			opacity: 0,
			y: 100,
		},
		animate: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.1 * index,
			},
		}),
	};

	const textRef = useRef(null);
	const textCenterRef = useRef(null);
	const animationText = {
		initial: {
			y: "100%",
		},
		enter: {
			y: "0",
			transition: {
				duration: 0.75,
				ease: [0.33, 1, 0.68, 1],
				delay: 0.5,
			},
		},
	};

	const animationCenterText = {
		initial: {
			opacity: 0,
			y: "100%",
		},
		enter: (index: number) => ({
			opacity: 1,
			y: "0",
			transition: {
				duration: 0.75,
				ease: [0.33, 1, 0.68, 1],
				delay: 0.025 * index,
			},
		}),
	};

	return (
		<div>
			<div className=" lg:h-[calc(100vh-142px)] flex items-center ">
				<div className="container text-white">
					<div className="flex justify-center items-center xl:justify-between text-center h-full">
						<div
							ref={textRef}
							className="rotate-90 tracking-widest hidden lg:flex overflow-hidden"
						>
							<motion.div
								variants={animationText}
								initial="initial"
								animate="enter"
							>
								Zero Sugar
							</motion.div>
						</div>

						<div ref={textCenterRef} className="overflow-hidden">
							<motion.div
								variants={animationCenterText}
								initial="initial"
								animate="enter"
								className="font-bold text-5xl sm:text-8xl lg:text-9xl monster-font tracking-widest"
							>
								Monster
							</motion.div>
							<motion.p
								variants={animationCenterText}
								initial="initial"
								animate="enter"
								className="uppercase text-[#7ec1d8] tracking-widest text-4xl sm:text-6xl lg:text-8xl"
							>
								energy
							</motion.p>
							<motion.p
								variants={animationCenterText}
								initial="initial"
								animate="enter"
								className="text-3xl lg:text-5xl hidden sm:block"
							>
								Zero ultra
							</motion.p>
						</div>

						<div className="hidden lg:flex gap-8 rotate-90">
							{socialMediaFooterLinks.map(link => (
								<motion.div
									key={link.id}
									variants={animationStagger}
									initial="initial"
									animate="animate"
									custom={link.id}
								>
									{link.icon}
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

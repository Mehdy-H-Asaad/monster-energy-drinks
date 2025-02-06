import monsterLogo from "../assets/imgs/monster.png";
import AmericanBeverage from "../assets/imgs/American-Bev-Logo.png";
import { footerCompanyLinks, socialMediaFooterLinks } from "@/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export const Footer = () => {
	const animationStagger = {
		initial: {
			opacity: 0,
			x: 100,
		},
		animate: (index: number) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: 0.1 * index,
			},
		}),
	};

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<div
			className="mt-60 pb-20 text-white bg-black relative h-[700px] -z-20"
			style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
		>
			<div className="fixed h-[700px] bottom-0 w-full flex flex-col justify-between p-8">
				<div
					ref={ref}
					className="flex flex-col md:flex-row justify-between gap-8 items-center md:items-start "
				>
					<div className="flex flex-col gap-4 ">
						<img src={monsterLogo} className="w-20" alt="" />
						<img src={AmericanBeverage} className="w-20" alt="" />
					</div>

					<div>
						<h1 className="text-4xl mb-6">Company</h1>
						<div className="flex flex-col gap-4">
							{footerCompanyLinks.map(link => (
								<motion.div
									variants={animationStagger}
									initial="initial"
									animate={isInView ? "animate" : ""}
									custom={link.id}
									key={link.id}
								>
									{link.name}
								</motion.div>
							))}
						</div>
					</div>

					<div>
						<h1 className="text-4xl mb-6">Social Media</h1>
						<div className="flex gap-4">
							{socialMediaFooterLinks.map(link => (
								<motion.div
									variants={animationStagger}
									initial="initial"
									animate={isInView ? "animate" : ""}
									custom={link.id}
									key={link.id}
								>
									{link.icon}
								</motion.div>
							))}
						</div>
					</div>
				</div>

				<p className="text-8xl tracking-widest mt-20">Monster Drinks</p>
			</div>
		</div>
	);
};

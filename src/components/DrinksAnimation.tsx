import { drinksAnimation } from "@/data";
import { motion } from "framer-motion";
import { useState } from "react";

export const DrinksAnimation = () => {
	const animationVariants = {
		initial: { width: 0 },
		open: {
			width: "auto",
			transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
		},
		closed: { width: 0 },
	};

	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	return (
		<div className="text-white py-40">
			<div className="container">
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					viewport={{ once: true }}
					className="flex flex-col items-center"
				>
					{drinksAnimation.map((drink, index) => (
						<div
							key={drink.id}
							onMouseEnter={() => setActiveIndex(index)}
							onMouseLeave={() => setActiveIndex(null)}
							className="flex cursor-pointer items-center justify-center py-4 w-full sm:w-[70%] border-t border-t-white last-of-type:border-b last-of-type:border-b-white"
						>
							<div className="text-2xl sm:text-4xl lg:text-8xl mr-8">
								{drink.firstTilte}
							</div>
							<motion.div
								variants={animationVariants}
								animate={activeIndex === index ? "open" : "closed"}
							>
								<img className="size-32 object-cover" src={drink.img} alt="" />
							</motion.div>
							<div className="text-2xl sm:text-4xl lg:text-8xl ml-8">
								{drink.secondTitle}
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

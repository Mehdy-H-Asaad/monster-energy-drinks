import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { monsterDrinksCarousel } from "@/data";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "./ui/carousel";

export const Beverages = () => {
	const [api, setApi] = useState<any>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		if (!api) return;

		const handleSelect = () => {
			setActiveIndex(api.selectedScrollSnap());
		};

		api.on("select", handleSelect);
		handleSelect();

		return () => api.off("select", handleSelect);
	}, [api]);

	return (
		<div className="text-white my-40">
			<div className="container">
				<motion.div
					className="text-center mb-10"
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.3 }}
				>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						key={monsterDrinksCarousel[activeIndex].id}
						className="text-4xl sm:text-5xl font-bold"
					>
						{monsterDrinksCarousel[activeIndex].drinkName}
					</motion.div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<Carousel
						className="w-full"
						opts={{
							loop: true,
							align: "center",
							startIndex: 0,
						}}
						setApi={setApi}
					>
						<CarouselContent>
							{monsterDrinksCarousel.map((drink, index) => {
								const isActive = index === activeIndex;

								return (
									<CarouselItem key={drink.id} className={` basis-1/2`}>
										<motion.div
											className="flex flex-col gap-10 text-center"
											animate={{
												opacity: isActive ? 1 : 0.5,
												scale: isActive ? 1 : 0.8,
											}}
											transition={{ duration: 0.3 }}
										>
											<div
												className={`flex flex-col gap-12 items-center justify-center`}
											>
												<motion.img
													src={drink.img}
													className="size-80 object-contain hover:scale-105 cursor-pointer duration-300"
													animate={{
														opacity: isActive ? 1 : 0.5,
													}}
													key={drink.id}
												/>
											</div>
										</motion.div>
									</CarouselItem>
								);
							})}
						</CarouselContent>
						<div className="text-4xl text-center mt-10">
							<div>500ml</div>
							<div>150mg caffeine</div>
						</div>
						<CarouselPrevious className="ml-10 text-black" />
						<CarouselNext className="mr-10 text-black" />
					</Carousel>
				</motion.div>
			</div>
		</div>
	);
};

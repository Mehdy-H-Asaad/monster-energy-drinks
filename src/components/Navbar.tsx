import { CiMenuFries } from "react-icons/ci";
import img from "../assets/imgs/monster.png";
export const Navbar = () => {
	return (
		<div className="h-24 text-white flex items-center pb-4">
			<div className="container">
				<div className="flex items-center justify-between">
					<img src={img} className="w-16 sm:w-20 object-cover" alt="" />
					<CiMenuFries size={24} />
				</div>
			</div>
		</div>
	);
};

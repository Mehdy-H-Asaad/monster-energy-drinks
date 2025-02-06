import blackMonsterImg from "../assets/imgs/Monster-Energy.png";
import whiteMonsterImg from "../assets/imgs/Monster-Zero-Ultra.png";
import ultraRosaImg from "../assets/imgs/Monster-Ultra-Rosa.png";
import VioletImg from "../assets/imgs/violet.jpg";
import FiestaImg from "../assets/imgs/fiesta.png";
import MangoImg from "../assets/imgs/mango.png";
import ParadaiseImg from "../assets/imgs/paradise.png";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
export const monsterDrinksCarousel = [
	{
		id: 1,
		drinkName: "White Monster",
		img: whiteMonsterImg,
	},
	{
		id: 2,
		drinkName: "Monster Energy",
		img: blackMonsterImg,
	},
	{
		id: 3,
		drinkName: "Ultra Rosa",
		img: ultraRosaImg,
	},
	{
		id: 4,
		drinkName: "Ultra Fiesta",
		img: FiestaImg,
	},
];

export const drinksAnimation = [
	{
		id: 1,
		img: FiestaImg,
		firstTilte: "Ultra",
		secondTitle: "Fiesta",
	},
	{
		id: 2,
		img: MangoImg,
		firstTilte: "Ultra",
		secondTitle: "Mango",
	},
	{
		id: 3,
		img: VioletImg,
		firstTilte: "Ultra",
		secondTitle: "Violet",
	},
	{
		id: 4,
		img: ParadaiseImg,
		firstTilte: "Ultra",
		secondTitle: "Paradise",
	},
];

export const footerCompanyLinks = [
	{
		id: 1,
		name: "Terms of Use",
	},
	{
		id: 2,
		name: "Privacy Policy",
	},
	{
		id: 3,
		name: "Cookie Policy",
	},
	{
		id: 4,
		name: "Careers",
	},
	{
		id: 5,
		name: "About Us",
	},
	{
		id: 6,
		name: "Contact Us",
	},
];

export const socialMediaFooterLinks = [
	{
		id: 1,
		icon: <FaInstagram size={20} />,
	},
	{
		id: 2,
		icon: <FaTiktok size={20} />,
	},
	{
		id: 3,
		icon: <FaXTwitter size={20} />,
	},
];

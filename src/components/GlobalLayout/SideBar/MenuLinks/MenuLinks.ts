import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineHeart, AiOutlineUserAdd } from "react-icons/ai";
import { FiFolder, FiMessageSquare, FiShoppingCart } from "react-icons/fi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiSettings4Line } from "react-icons/ri";

export const menus = [
	{ name: "dasboard", link: "/", icon: MdOutlineDashboard },
	{ name: "users", link: "users", icon: AiOutlineUserAdd },
	{ name: "messages", link: "/", icon: FiMessageSquare },
	{ name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
	{ name: "file manager", link: "/", icon: FiFolder },
	{ name: "cart", link: "/", icon: FiShoppingCart },
	{ name: "saved", link: "/", icon: AiOutlineHeart, margin: true },
	{ name: "settings", link: "/", icon: RiSettings4Line },
];

import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineHeart, AiOutlineUserAdd } from "react-icons/ai";
import { FiFolder, FiMessageSquare, FiShoppingCart } from "react-icons/fi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiSettings4Line } from "react-icons/ri";
import { BrowserRouter, Link } from "react-router-dom";
export const Dashboard = () => {
	const menus = [
		{ name: "dasboard", link: "/", icon: MdOutlineDashboard },
		{ name: "users", link: "/", icon: AiOutlineUserAdd },
		{ name: "messages", link: "/", icon: FiMessageSquare },
		{ name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
		{ name: "file manager", link: "/", icon: FiFolder },
		{ name: "cart", link: "/", icon: FiShoppingCart },
		{ name: "saved", link: "/", icon: AiOutlineHeart, margin: true },
		{ name: "settings", link: "/", icon: RiSettings4Line },
	];

	const [open, setOpen] = useState(true);
	return (
		<section className="flex space-x-6">
			<div
				className={` bg-[#0e0e0e] min-h-screen ${
					open ? "w-72" : "w-16"
				} duration-500 text-gray-100 px-4 `}>
				<div className="py-3 flex justify-end">
					<HiMenuAlt3
						size={26}
						className="cursor-pointer"
						onClick={() => setOpen(!open)}
					/>
				</div>
				<BrowserRouter>
					<div className="mt-4 flex flex-col gap-4 relative">
						{menus.map((menu, i) => (
							<Link
								to={menu.link}
								key={i}
								className={`${
									menu.margin && "mt-5"
								} group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md capitalize`}>
								<menu.icon size={20} />

								<h2
									style={{ transitionDelay: `${i + 3}00ms` }}
									className={`whitespace-pre duration-500 ${
										!open && "opacity-0 translate-x-28 overflow-hidden"
									}`}>
									{menu.name}
								</h2>
								<h2 className={ `${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg w-0 px-0 py-0 overflow-hidden lowercase group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit` }>{menu.name }</h2>
							</Link>
						))}
					</div>
				</BrowserRouter>
			</div>
			<div className="m-3 text-xl text-gray-900 font-semibold">DASHBOARD</div>
		</section>
	);
};

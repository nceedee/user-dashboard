import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { BrowserRouter, Link } from "react-router-dom";
import { menus } from "./SideBar/Hooks/menuList";

export const SideBar = () => {
	const [open, setOpen] = useState(true);

	return (
		<div
			className={` bg-secondary min-h-screen ${
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
							} group flex items-center text-sm space-x-2 font-medium p-1 hover:bg-accent rounded-md capitalize   `}>
							<menu.icon size={20} className={`${!open && "w-full"}`} />
							<h2
								style={{ transitionDelay: `${i + 3}00ms` }}
								className={`whitespace-pre duration-500   ${
									!open && "w-0 opacity-0 translate-x-28 overflow-hidden"
								}`}>
								{menu.name}
							</h2>
							<h2
								className={`${
									open && "hidden"
								} absolute left-48 bg-accent font-semibold whitespace-pre text-white rounded-md drop-shadow-lg w-0 px-0 py-0 overflow-hidden lowercase group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
								{menu.name}
							</h2>
						</Link>
					))}
				</div>
			</BrowserRouter>
		</div>
	);
};

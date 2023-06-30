import { SideBar } from "../../GlobalLayout/SideBar";

export const Dashboard = () => {
	return (
		<section className="flex space-x-6">
			<SideBar />
			<div className="m-3 text-xl text-gray-900 font-semibold">DASHBOARD</div>
		</section>
	);
};

import { Header } from "../../GlobalLayout/Header";
import { UsersInfo } from "../../GlobalLayout/UsersInfo";

export const Dashboard = () => {
	return (
		<section className="relative px-4 py-3 right-6 w-full bg-primary">
			<Header />
			<div>
				<div>
					<UsersInfo/>
				</div>
				<div>
					
				</div>
			</div>
		</section>
	);
};

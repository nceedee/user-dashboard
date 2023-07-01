import { Header } from "../../GlobalLayout/Header";
import { UsersInfo } from "../../GlobalLayout/UsersInfo";

export const Dashboard = () => {
	return (
		<section className="py-3 px-4 w-full bg-primary">
			<Header />
			<div>
				<div>
					<UsersInfo />
				</div>
				<div>
					
				</div>
			</div>
		</section>
	)
}

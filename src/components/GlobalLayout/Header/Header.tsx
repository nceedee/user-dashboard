import { DashboardRoutTo } from "./DashboardRoutTo";
import { UserSigningAbout } from "./UserDetail/UserSigningAbout";

export const Header = () => {
	return (
		<div className="py-2 px-3 w-full">
			<div className="m-auto px-0 flex items-center justify-between w-full max-w-7xl  ">
				<div>
					<DashboardRoutTo/>
				</div>
				<div >
					<UserSigningAbout />
				</div>
			</div>
		</div>
	);
};

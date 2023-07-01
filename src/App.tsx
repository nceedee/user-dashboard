import { SideBar } from "./components/GlobalLayout/SideBar";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";

const App = () => {
	return (
		<div className="font-roboto h-[100vh] w-full flex space-x-6 bg-primary">
			<SideBar />
			<Dashboard />
		</div>
	);
};

export default App;

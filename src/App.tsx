import { Route, Routes } from "react-router-dom";
import { SideBar } from "./components/GlobalLayout/SideBar/SideBar";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";
import { Users } from "./components/Pages/Dashboard/Users/Users"; 

const App = () => {
	return (
		<div className="font-roboto h-[100vh] w-full flex bg-primary">
			<div>
				<SideBar />
			</div>
			<div className="w-full">
				<Routes>
					<Route path="/" element={<Dashboard />}></Route>
					<Route path="/users" element={<Users />}></Route>
				</Routes>
			</div>
		</div>
	);
};

export default App;

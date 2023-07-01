import {   Route, Routes } from "react-router-dom";
import { SideBar } from "./components/GlobalLayout/SideBar/SideBar";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";
import { Users } from "./components/Pages/Users/Users";

const App = () => {
	return (
		// <BrowserRouter>
			<div className="font-roboto h-[100vh] w-full flex  ">
				<div>
					<SideBar />
				</div>
				<Routes>
					<Route path="/" element={<Dashboard />}></Route>
					<Route path="/users" element={<Users />}></Route>
				</Routes>
			</div>
		// </BrowserRouter>
	);
};

export default App;

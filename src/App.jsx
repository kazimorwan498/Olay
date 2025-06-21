import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./Components/Global/Header/MyNavbar";
import Home from "./Components/Landing/HomePage/Home";

const App = () => {
	return (
		<BrowserRouter>
			<MyNavbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

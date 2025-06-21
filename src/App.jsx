import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./Components/Global/Header/MyNavbar";
import Home from "./Components/Landing/HomePage/Home";
import ErrorPage from "./Components/Global/ErrorPage";

const App = () => {
	return (
		<BrowserRouter>
			<MyNavbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

import "./App.css";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Reviews from "./Reviews";
import Categories from "./Categories";

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/reviews" element={<Reviews />} />
				<Route path="/categories" element={<Categories />} />
			</Routes>
		</>
	);
}

export default App;

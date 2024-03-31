import "./App.css";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Reviews from "./Pages/Reviews";
import Categories from "./Pages/Categories";
import SingleReviewPage from "./Pages/SingleReview";

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/reviews" element={<Reviews />} />
				<Route path="/reviews/:review_id" element={<SingleReviewPage />} />
				<Route path="/categories" element={<Categories />} />
			</Routes>
		</>
	);
}

export default App;

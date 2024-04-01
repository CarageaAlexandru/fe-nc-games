// components/Categories.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../api/categoriesAPI";
import Loading from "../components/Loading";

function Categories() {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getCategories = async () => {
			setLoading(true);
			try {
				const categoriesData = await fetchCategories();
				setCategories(categoriesData);
			} catch (error) {
				console.error("Error fetching categories:", error);
			}
			setLoading(false);
		};

		getCategories();
	}, []);
	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<Loading />
			</div>
		);
	}

	return (
		<div className="container mx-auto mt-8">
			<h1 className="text-4xl font-bold mb-4">Categories</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{categories.map((category) => (
					<Link
						to={`/reviews?category=${category.slug}`}
						key={category.slug}
						className="card bg-base-200 shadow-xl hover:bg-primary-content hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:text-sky-400"
					>
						<div className="card-body">
							<h2 className="text-secondary">{category.slug}</h2>
							<p className="text-base-content">{category.description}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Categories;

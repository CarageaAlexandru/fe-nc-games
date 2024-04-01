import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";
import { fetchReviews } from "../api/reviewsAPI";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import { useLocation } from "react-router-dom";

function Reviews() {
	const [reviews, setReviews] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const category = searchParams.get("category");

	useEffect(() => {
		const getReviews = async () => {
			setLoading(true);
			setError(null);

			try {
				const data = await fetchReviews(currentPage, 9, category);
				setReviews(data.reviews);
				setTotalPages(Math.ceil(data.total_count / 10));
			} catch (error) {
				console.log(error);
				setError("Error fetching reviews. Please try again.");
				console.error("Error fetching review:", error);
			}
			setLoading(false);
		};

		getReviews();
	}, [currentPage, category]);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<Loading />
			</div>
		);
	}

	if (error) {
		return (
			<div className="container mx-auto mt-8">
				<div className="card bg-base-100 shadow-xl">
					<div className="card-body">
						<p className="text-error">{error}</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="container mx-auto">
			<h1 className="flex justify-center mt-4 mb-4 text-4xl ">Reviews</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{reviews.map((review) => (
					<ReviewCard key={review.review_id} review={review} />
				))}
			</div>
			<div className="flex justify-center mt-8">
				<div className="join">
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				</div>
			</div>
		</div>
	);
}

export default Reviews;

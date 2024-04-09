import { useContext, useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";
import { fetchReviews } from "../api/reviewsAPI";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import AddReviewForm from "../components/AddReviewForm";

function Reviews() {
	const [reviews, setReviews] = useState([]);
	const [reviewAdded, setReviewAdded] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const category = searchParams.get("category");
	const { user } = useContext(AuthContext);

	useEffect(() => {
		const getReviews = async () => {
			setLoading(true);
			setError(null);

			try {
				const data = await fetchReviews(currentPage, 9, category);
				setReviews(data.reviews);
				setTotalPages(Math.ceil(data.total_count / 10));
			} catch (error) {
				setError("Error fetching reviews. Please try again.");
			}
			setLoading(false);
		};

		getReviews();
	}, [currentPage, category, reviewAdded]);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const handleReviewAdded = () => {
		setReviewAdded((prevState) => !prevState);
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
			<div className="container mx-auto px-4 py-8 flex flex-row justify-center">
				{user ? (
					<div className=" mx-auto">
						<button
							className="btn btn-primary"
							onClick={() =>
								document.getElementById("review_modal").showModal()
							}
						>
							Add Review
						</button>
						<dialog id="review_modal" className="modal">
							<div className="modal-box">
								<div className="modal-action container flex flex-row justify-center">
									<AddReviewForm
										user={user}
										onReviewAdded={handleReviewAdded}
									/>
								</div>
							</div>
						</dialog>
					</div>
				) : (
					<div className="mx-auto">
						<div role="alert" className="alert alert-info">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="stroke-current shrink-0 w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
							<span>If you login you can add a review.</span>
						</div>
					</div>
				)}
			</div>
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

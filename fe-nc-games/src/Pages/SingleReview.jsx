import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById, fetchReviewComments } from "../api/reviewsAPI";
import Loading from "../components/Loading";
import Review from "../components/Review";
import CommentList from "../components/CommentList";
import { AuthContext } from "../Context/AuthContext";
import CommentForm from "../components/CommentForm";

function SingleReviewPage() {
	const { review_id } = useParams();
	const [loading, setLoading] = useState(true);
	const [review, setReview] = useState(null);
	const [comments, setComments] = useState([]);
	const [reviewError, setReviewError] = useState(null);
	const [commentsError, setCommentsError] = useState(null);
	const [totalComments, setTotalComments] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);

	const { user } = useContext(AuthContext);

	const handleCommentSubmitted = async () => {
		try {
			await fetchReviewComments(review_id);
			const commentsData = await fetchReviewComments(review_id);
			setComments(commentsData.comments);
			setTimeout(() => {
				document.getElementById("my_modal_3").close();
			}, 2000);
		} catch (error) {
			console.error("Error fetching updated comments:", error);
		}
	};

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		const getReview = async () => {
			try {
				const reviewData = await fetchReviewById(review_id);
				setReview(reviewData);
			} catch (error) {
				setReviewError("Error fetching review. Please try again.");
				console.error("Error fetching review:", error);
			}
		};

		const getComments = async () => {
			try {
				const commentsData = await fetchReviewComments(review_id, currentPage);
				setComments(commentsData.comments);
				setTotalComments(commentsData.total_count);
			} catch (error) {
				if (error.response && error.response.status === 404) {
					setComments([]);
				} else {
					setCommentsError("Error fetching comments. Please try again.");
					console.error("Error fetching comments:", error);
				}
			}
		};

		setLoading(true);
		Promise.all([getReview(), getComments()]).finally(() => {
			setLoading(false);
		});
	}, [review_id, currentPage]);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<Loading />
			</div>
		);
	}

	if (reviewError) {
		return (
			<div className="container mx-auto mt-8">
				<div className="card bg-base-100 shadow-xl">
					<div className="card-body">
						<p className="text-error">{reviewError}</p>
					</div>
				</div>
			</div>
		);
	}

	if (commentsError) {
		return (
			<div className="container mx-auto mt-8">
				<div className="card bg-base-100 shadow-xl">
					<div className="card-body">
						<p className="text-error">{commentsError}</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="container mx-auto mt-8">
			<Review review={review} />
			<div className="flex justify-center items-center">
				{user ? (
					<>
						<button
							className="btn btn-primary mt-4"
							onClick={() => document.getElementById("my_modal_3").showModal()}
						>
							Leave a comment
						</button>
						<dialog id="my_modal_3" className="modal">
							<div className="modal-box">
								<form method="dialog">
									<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
										✕
									</button>
								</form>
								<h3 className="font-bold text-lg">Write a comment</h3>
								<CommentForm
									reviewId={review.review_id}
									onCommentSubmitted={handleCommentSubmitted}
								/>
							</div>
						</dialog>
					</>
				) : (
					<p className="mt-4">
						Please{" "}
						<a href="/login" className="link link-primary">
							log in
						</a>{" "}
						to leave a comment.
					</p>
				)}
			</div>
			{commentsError ? (
				<div className="card bg-base-100 shadow-xl mt-8">
					<div className="card-body">
						<p className="text-error">{commentsError}</p>
					</div>
				</div>
			) : comments.length > 0 ? (
				<CommentList
					comments={comments}
					currentPage={currentPage}
					totalComments={totalComments}
					paginate={paginate}
				/>
			) : (
				<div className="card bg-base-100 shadow-xl mt-8">
					<div className="card-body">
						<p>No comments available for this review.</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default SingleReviewPage;

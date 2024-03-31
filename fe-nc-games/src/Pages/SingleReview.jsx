import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById, fetchReviewComments } from "../api/reviewsAPI";
import Loading from "../components/Loading";
import Review from "../components/Review";
import CommentList from "../components/CommentList";

function SingleReviewPage() {
	const { review_id } = useParams();
	const [loading, setLoading] = useState(true);
	const [review, setReview] = useState(null);
	const [comments, setComments] = useState([]);
	const [reviewError, setReviewError] = useState(null);
	const [commentsError, setCommentsError] = useState(null);

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
				const commentsData = await fetchReviewComments(review_id);
				setComments(commentsData.comments);
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
	}, [review_id]);

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
			{commentsError ? (
				<div className="card bg-base-100 shadow-xl mt-8">
					<div className="card-body">
						<p className="text-error">{commentsError}</p>
					</div>
				</div>
			) : comments.length > 0 ? (
				<CommentList comments={comments} />
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

import { useState, useEffect } from "react";
import { updateReviewVotes } from "../api/reviewsAPI";

const Votes = ({ reviewId, initialVotes }) => {
	const [vote, setVote] = useState(initialVotes);
	const [error, setError] = useState(null);
	const [userVote, setUserVote] = useState(null);

	useEffect(() => {
		const votedReviews = JSON.parse(localStorage.getItem("votedReviews")) || {};
		if (votedReviews[reviewId]) {
			setUserVote(votedReviews[reviewId]);
		}
	}, [reviewId]);

	function handleVoteChange(increment) {
		if (userVote === increment) {
			setError("You have already voted for this review.");
			return;
		}

		setError(null);
		updateReviewVotes(reviewId, increment)
			.then((response) => {
				setVote(response.votes);
				setUserVote(increment);
				const votedReviews =
					JSON.parse(localStorage.getItem("votedReviews")) || {};
				votedReviews[reviewId] = increment;
				localStorage.setItem("votedReviews", JSON.stringify(votedReviews));
			})
			.catch((error) => {
				setError("Sorry, something went wrong, please try again");
				console.error(
					`Error updating votes for review with ID ${reviewId}:`,
					error
				);
			});
	}

	return (
		<div className="flex items-center space-x-2">
			<button
				className="btn btn-sm btn-primary"
				onClick={() => handleVoteChange(1)}
				disabled={userVote === 1}
			>
				Like
			</button>
			<div className="badge badge-lg badge-outline bg-accent text-accent-content">
				Votes: {vote}
			</div>
			<button
				className="btn btn-sm btn-secondary"
				onClick={() => handleVoteChange(-1)}
				disabled={userVote === -1}
			>
				Dislike
			</button>
			{error && <p className="text-error">{error}</p>}
		</div>
	);
};

export default Votes;

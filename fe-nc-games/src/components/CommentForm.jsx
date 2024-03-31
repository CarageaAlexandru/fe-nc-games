// components/CommentForm.jsx
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { postComment } from "../api/reviewsAPI";

function CommentForm({ reviewId, onCommentSubmitted }) {
	const { user } = useContext(AuthContext);
	const [commentBody, setCommentBody] = useState("");
	const [submissionStatus, setSubmissionStatus] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!user) {
			alert("Please log in to post a comment.");
			return;
		}

		try {
			const comment = {
				username: user.username,
				body: commentBody,
			};
			await postComment(reviewId, comment);
			onCommentSubmitted(comment);
			setCommentBody("");
			setSubmissionStatus("success");
		} catch (error) {
			console.error("Error posting comment:", error);
			setSubmissionStatus("error");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-control">
				<label className="label">
					<span className="label-text">Comment:</span>
				</label>
				<textarea
					className="textarea textarea-bordered"
					placeholder="Write your comment..."
					value={commentBody}
					onChange={(e) => setCommentBody(e.target.value)}
					required
				></textarea>
			</div>
			<div className="modal-action">
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</div>
			{submissionStatus === "success" && (
				<div role="alert" className="alert alert-success mt-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="stroke-current shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<span>Your comment has been submitted successfully!</span>
				</div>
			)}
			{submissionStatus === "error" && (
				<div role="alert" className="alert alert-error mt-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="stroke-current shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<span>
						An error occurred while submitting your comment. Please try again.
					</span>
				</div>
			)}
		</form>
	);
}

export default CommentForm;

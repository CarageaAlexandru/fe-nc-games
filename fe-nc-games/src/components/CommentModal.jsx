import CommentForm from "./CommentForm";

function CommentModal({ reviewId, onCommentSubmitted }) {
	return (
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
						reviewId={reviewId}
						onCommentSubmitted={onCommentSubmitted}
					/>
				</div>
			</dialog>
		</>
	);
}
export default CommentModal;

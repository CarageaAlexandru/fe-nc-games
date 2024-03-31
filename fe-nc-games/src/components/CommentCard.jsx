function CommentCard({ comment, user, onDelete }) {
	const isCommentAuthor = user && user.username === comment.author;

	const handleDelete = () => {
		onDelete(comment.comment_id);
	};

	return (
		<div className="card bg-base-200 shadow-md mb-4">
			<div className="card-body">
				<p>{comment.body}</p>
				<div className="card-actions justify-end mt-4">
					<p className="text-sm text-gray-500">
						By {comment.author} on{" "}
						{new Date(comment.created_at).toLocaleDateString()}
					</p>
					{isCommentAuthor && (
						<button className="btn btn-error btn-sm" onClick={handleDelete}>
							Delete
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default CommentCard;

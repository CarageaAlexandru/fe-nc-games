function CommentList({ comments }) {
	return (
		<div className="mt-8">
			<h3 className="text-xl font-bold mb-4">Comments</h3>
			{comments.map((comment) => (
				<div
					key={comment.comment_id}
					className="card bg-base-200 shadow-md mb-4"
				>
					<div className="card-body">
						<p>{comment.body}</p>
						<div className="card-actions justify-end mt-4">
							<p className="text-sm text-gray-500">
								By {comment.author} on{" "}
								{new Date(comment.created_at).toLocaleDateString()}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default CommentList;

import Pagination from "./Pagination";

function CommentList({ comments, currentPage, paginate, totalComments }) {
	const commentsPerPage = 5; // we default to 5 when fetching
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
			<Pagination
				currentPage={currentPage}
				totalPages={Math.ceil(totalComments / commentsPerPage)}
				onPageChange={paginate}
			/>
		</div>
	);
}

export default CommentList;

import CommentCard from "./CommentCard";
import Pagination from "./Pagination";

function CommentList({ comments, currentPage, paginate, totalComments, user, onDelete }) {
	const commentsPerPage = 5; // we default to 5 when fetching
	return (
		<div className="mt-8">
			<h3 className="text-xl font-bold mb-4">Comments</h3>
			{comments.map((comment) => (
				<CommentCard
					key={comment.comment_id}
					comment={comment}
					user={user}
					onDelete={onDelete}
				/>
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

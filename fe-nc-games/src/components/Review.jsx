import Votes from "./Votes";

function Review({ review }) {
	const {
		review_id,
		review_body,
		category,
		title,
		designer,
		owner,
		comment_count,
		votes,
	} = review;

	return (
		<div className="card bg-base-200 shadow-xl ">
			<figure>
				<img className="rounded-xl" src={review.review_img_url} alt={title} />
			</figure>
			<div className="card-body">
				<h2 className="card-title text-primary">{title}</h2>
				<p>
					<span className="font-bold">Category:</span>{" "}
					<span className="text-secondary">{category}</span>
				</p>
				<p>
					<span className="font-bold">Designer:</span>{" "}
					<span className="text-secondary">{designer}</span>
				</p>
				<p>
					<span className="font-bold">Owner:</span>{" "}
					<span className="text-secondary">{owner}</span>
				</p>
				<p className="mt-4">{review_body}</p>
				<div className="card-actions justify-end mt-4">
					<div className="flex items-center space-x-2">
						<div className="badge badge-lg badge-outline bg-accent text-accent-content">
							{comment_count} comments
						</div>
						<Votes initialVotes={votes} reviewId={review_id}></Votes>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Review;

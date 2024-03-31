import { Link } from "react-router-dom";

function ReviewCard({ review }) {
	const {
		review_id,
		category,
		review_img_url,
		title,
		designer,
		owner,
		comment_count,
		votes,
	} = review;

	return (
		<div className="card bg-base-100 shadow-xl">
			<Link to={`/reviews/${review_id}`}>
				<figure>
					<img src={review_img_url} alt={title} />
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
					<div className="card-actions justify-end">
						<div className="badge badge-outline bg-accent text-accent-content">
							{comment_count} comments
						</div>
						<div className="badge badge-outline bg-accent text-accent-content">
							{votes} votes
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default ReviewCard;

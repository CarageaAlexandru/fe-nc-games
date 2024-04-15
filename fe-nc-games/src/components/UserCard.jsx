const UserCard = ({ user, login }) => {
	const { name, username } = user;
    // fake url to overide
	const imageURL = new URL(`../assets/${username}.svg`, import.meta.url).href;

	return (
		<div className="card bg-base-200 shadow-xl">
			<figure className="px-10 pt-10">
				<img
					src={imageURL}
					alt={username}
					className="rounded-xl w-24 h-24 object-cover"
				/>
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{name}</h2>
				<p>@{username}</p>
				<div className="card-actions">
					<button className="btn btn-primary" onClick={() => login(user)}>
						Log in with {username}
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserCard;

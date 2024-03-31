import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-4xl font-bold mb-4">Welcome to NC-Games</h1>
			<p className="text-lg mb-8">
				Explore and interact with a wide range of game reviews, categories, and
				users.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="card bg-base-100 shadow-xl">
					<div className="card-body">
						<h2 className="card-title">Reviews</h2>
						<p>
							Browse through all the game reviews available on the platform.
						</p>
						<div className="card-actions justify-end">
							<Link to="/reviews" className="btn btn-primary">
								View Reviews
							</Link>
						</div>
					</div>
				</div>

				<div className="card bg-base-100 shadow-xl">
					<div className="card-body">
						<h2 className="card-title">Categories</h2>
						<p>Explore different categories of game reviews.</p>
						<div className="card-actions justify-end">
							<Link to="/categories" className="btn btn-primary">
								View Categories
							</Link>
						</div>
					</div>
				</div>

				<div className="card bg-base-100 shadow-xl">
					<div className="card-body">
						<h2 className="card-title">Users</h2>
						<p>Check out the profiles of all the users on NC-Games.</p>
						<div className="card-actions justify-end">
							<Link to="/users" className="btn btn-primary">
								View Users
							</Link>
						</div>
					</div>
				</div>

				<div className="card bg-base-100 shadow-xl">
					<div className="card-body">
						<h2 className="card-title">Login</h2>
						<p>Login to your account to access additional features.</p>
						<div className="card-actions justify-end">
							<Link to="/login" className="btn btn-primary">
								Login
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-8">
				<h2 className="text-2xl font-bold mb-4">Latest Reviews</h2>
				{/* Add a section to display the latest reviews */}
			</div>
		</div>
	);
}

export default Home;

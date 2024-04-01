import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="container mx-auto p-4">
			{/* Hero section */}
			<div className="flex flex-col items-center justify-center h-[50vh]">
				<h1 className="text-6xl font-bold mb-4 text-center">
					Welcome to NC-Games
				</h1>
				<p className="text-lg mb-8 text-center">
					Explore and interact with a wide range of game reviews, categories,
					and users.
				</p>
			</div>

			{/* Features section */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="card bg-base-200 shadow-xl hover:bg-primary-content hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 ">
					<div className="card-body">
						<h2 className="card-title">Reviews</h2>
						<p>
							Browse through all the game reviews available on the platform.
						</p>
						<div className="card-actions justify-center">
							<Link to="/reviews" className="btn btn-primary">
								View Reviews
							</Link>
						</div>
					</div>
				</div>

				<div className="card bg-base-200 shadow-xl hover:bg-primary-content hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 ">
					<div className="card-body">
						<h2 className="card-title">Categories</h2>
						<p>Explore different categories of game reviews.</p>
						<div className="card-actions justify-center">
							<Link to="/categories" className="btn btn-primary">
								View Categories
							</Link>
						</div>
					</div>
				</div>

				<div className="card bg-base-200 shadow-xl hover:bg-primary-content hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 ">
					<div className="card-body">
						<h2 className="card-title">Users</h2>
						<p>Check out the profiles of all the users on NC-Games.</p>
						<div className="card-actions justify-center">
							<Link to="/users" className="btn btn-primary">
								View Users
							</Link>
						</div>
					</div>
				</div>

				<div className="card bg-base-200 shadow-xl hover:bg-primary-content hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 ">
					<div className="card-body">
						<h2 className="card-title">Login</h2>
						<p>Login to your account to access additional features.</p>
						<div className="card-actions justify-center">
							<Link to="/login" className="btn btn-primary">
								Login
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Latest Reviews section */}
			<div className="mt-8">
				<h2 className="text-2xl font-bold mb-4">Latest Reviews</h2>
				{/* Add a section to display the latest reviews */}
			</div>
		</div>
	);
}

export default Home;

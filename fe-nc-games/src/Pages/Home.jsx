import { Link } from "react-router-dom";
import { MdOutlineReviews } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { FaUsersLine } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";

function Home() {
	return (
		<div className="container mx-auto p-4">
			{/* Hero section */}
			<div className="flex flex-col items-center justify-center h-[30vh]">
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
				<div className="card bg-base-200 border-2 border-accent shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
					<div className="card-body">
						<div className="flex justify-between items-center">
							<h2 className="card-title text-accent-focus flex-1">Reviews</h2>
						</div>
						<div className="flex items-center">
							<p className="flex-1 mr-4">
								Browse through all the game reviews available on the platform.
							</p>
							<MdOutlineReviews className="w-24 h-24 text-accent-focus" />
						</div>
						<div className="card-actions justify-center mt-4">
							<Link to="/reviews" className="btn btn-accent">
								View Reviews
							</Link>
						</div>
					</div>
				</div>

				<div className="card bg-base-200 border-2 border-accent shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
					<div className="card-body">
						<div className="flex justify-between items-center">
							<h2 className="card-title text-accent-focus flex-1">
								Categories
							</h2>
						</div>
						<div className="flex items-center">
							<p className="flex-1 mr-4">
								Explore different categories of game reviews.
							</p>
							<BiCategoryAlt className="w-24 h-24 text-accent-focus" />
						</div>
						<div className="card-actions justify-center mt-4">
							<Link to="/categories" className="btn btn-accent">
								View Categories
							</Link>
						</div>
					</div>
				</div>

				<div className="card bg-base-200 border-2 border-accent shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
					<div className="card-body">
						<div className="flex justify-between items-center">
							<h2 className="card-title text-accent-focus flex-1">Users</h2>
						</div>
						<div className="flex items-center">
							<p className="flex-1 mr-4">
								<p>Check out the profiles of all the users on NC-Games.</p>
							</p>
							<FaUsersLine className="w-24 h-24 text-accent-focus" />
						</div>
						<div className="card-actions justify-center mt-4">
							<Link to="/categories" className="btn btn-accent">
								View Users
							</Link>
						</div>
					</div>
				</div>

				<div className="card bg-base-200 border-2 border-accent shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
					<div className="card-body">
						<div className="flex justify-between items-center">
							<h2 className="card-title text-accent-focus flex-1">Login</h2>
						</div>
						<div className="flex items-center">
							<p className="flex-1 mr-4">
								<p>Login to your account to access additional features.</p>
							</p>
							<CiLogin className="w-24 h-24 text-accent-focus" />
						</div>
						<div className="card-actions justify-center mt-4">
							<Link to="/categories" className="btn btn-accent">
								Login
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;

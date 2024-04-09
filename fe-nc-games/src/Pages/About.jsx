import React from "react";
import { Link } from "react-router-dom";

function About() {
	return (
		<div className="container mx-auto mt-8">
			<div className="card bg-base-200 shadow-xl">
				<div className="card-body">
					<h2 className="card-title text-4xl font-bold mb-4">About Us</h2>
					<p className="text-lg mb-8">
						Welcome to our board game review website! Were passionate about
						board games and love sharing our thoughts and experiences with
						fellow enthusiasts.
					</p>
					<div className="divider"></div>
					<h3 className="text-2xl font-bold my-6">Features</h3>
					<ul className="list-disc list-inside mb-8">
						<li>Browse and read reviews for various board games</li>
						<li>
							Filter reviews by categories to find games that interest you.
						</li>
						<li>
							Leave comments on reviews to share your thoughts and engage in
							discussions.
						</li>
						<li>
							Logged-in users can submit their own reviews and contribute to the
							community.
						</li>
						<li>
							Logged-in users can vote on reviews, they can also delete their
							own comments.
						</li>
					</ul>
					<div className="divider"></div>
					<h3 className="text-2xl font-bold my-6">Review Submission</h3>
					<p className="mb-8">
						To maintain the quality and integrity of our review system, users
						need to be logged in to leave comments or submit reviews. This helps
						us ensure that the content is genuine and comes from verified users.
					</p>
					<div className="divider"></div>
					<h3 className="text-2xl font-bold my-6">Simulated Login</h3>
					<p className="mb-8">
						For ease of use and demonstration purposes, we have implemented a
						simulated login system. This allows you to explore the functionality
						of commenting and review submission.
					</p>
					<div className="divider"></div>
					<h3 className="text-2xl font-bold my-6">Review Images</h3>
					<p className="mb-8">
						To maintain consistency and visual appeal across the website, we
						have pre-populated the photo URLs for reviews using the Pexels API.
						This ensures that all review images are of high quality and relevant
						to the board game theme.
					</p>
					<div className="divider"></div>
					<h3 className="text-2xl font-bold my-6">Explore and Enjoy</h3>
					<p className="mb-8">
						We invite you to explore our collection of board game reviews, leave
						comments, and even submit your own reviews if you're logged in.
					</p>
					<div className="flex justify-end">
						<Link to="/reviews" className="btn btn-primary">
							Browse Reviews
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;

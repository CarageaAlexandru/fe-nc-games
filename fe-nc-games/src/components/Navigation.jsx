import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

function Navigation() {
	const { user, logout } = useContext(AuthContext);
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/reviews">Reviews</Link>
						</li>
						<li>
							<Link to="/categories">Categories</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</div>
				<a className="btn btn-ghost text-xl">NC GAMES</a>
			</div>

			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/reviews">Reviews</Link>
					</li>
					<li>
						<Link to="/categories">Categories</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<label className="flex cursor-pointer gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<circle cx="12" cy="12" r="5" />
								<path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
							</svg>
							<input
								type="checkbox"
								value="cupcake"
								className="toggle theme-controller"
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
							</svg>
						</label>
					</li>
				</ul>
			</div>
			<div className="navbar-end ">
				{user ? (
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img src={`${user.avatar_url}`} />
							</div>
						</label>
						<ul
							tabIndex={0}
							className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
						>
							<li>
								<span>Logged in as: {user.username}</span>
							</li>
							<li>
								<button onClick={logout}>Logout</button>
							</li>
						</ul>
					</div>
				) : (
					<div className="navbar-end">
						<Link className="btn btn-accent" to="/login">
							Login
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}

export default Navigation;

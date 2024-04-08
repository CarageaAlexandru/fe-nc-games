import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

function Navigation() {
	const { user, logout } = useContext(AuthContext);
	console.log("🚀 ~ Navigation ~ user:", user);
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

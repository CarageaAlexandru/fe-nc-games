import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">NC Games</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link to="/" className="menu-item">
							Home
						</Link>
					</li>
					<li>
						<details>
							<summary>Parent</summary>
							<ul className="p-2 bg-base-100 rounded-t-none">
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/about">About</Link>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navigation;

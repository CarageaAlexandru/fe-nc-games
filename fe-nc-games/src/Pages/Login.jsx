import { useContext, useEffect, useState } from "react";
import { fetchUsers } from "../api/usersAPI";
import { AuthContext } from "../Context/AuthContext";

function LoginPage() {
	const [users, setUsers] = useState([]);
	const { login } = useContext(AuthContext);

	useEffect(() => {
		const getUsers = async () => {
			try {
				const usersData = await fetchUsers();
				setUsers(usersData.users);
			} catch (error) {
				console.error("Error fetching users:", error);
			}
		};

		getUsers();
	}, []);

	return (
		<div className="container mx-auto mt-8">
			<h1 className="text-4xl font-bold mb-4">Login</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{users.map((user) => (
					<div key={user.username} className="card bg-base-200 shadow-xl">
						<figure className="px-10 pt-10">
							<img
								src={user.avatar_url}
								alt={user.username}
								className="rounded-xl w-24 h-24 object-cover"
							/>
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="card-title">{user.name}</h2>
							<p>@{user.username}</p>
							<div className="card-actions">
								<button className="btn btn-primary" onClick={() => login(user)}>
									Log in with {user.username}
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default LoginPage;

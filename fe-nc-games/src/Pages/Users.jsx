import { useEffect, useState } from "react";
import { fetchUsers } from "../api/usersAPI";
import Loading from "../components/Loading";

function Users() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getUsers = async () => {
			setLoading(true);
			try {
				const usersData = await fetchUsers();
				setUsers(usersData.users);
			} catch (error) {
				console.error("Error fetching users:", error);
			}
			setLoading(false);
		};
		getUsers();
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<Loading />
			</div>
		);
	}
    
	return (
		<div className="container mx-auto mt-8">
			<div className="text-center mb-8">
				<h1 className="text-4xl font-bold">Welcome to the Users Page</h1>
				<p className="text-lg text-gray-600">Explore our community of users</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{users.map((user) => (
					<div
						key={user.username}
						className="card bg-base-200 shadow-xl hover:bg-primary-content hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:text-sky-400"
					>
						<figure className="p-6 flex justify-center">
							<img
								src={user.avatar_url}
								alt={user.username}
								className="w-24 h-24 rounded-full object-cover"
							/>
						</figure>
						<div className="card-body flex flex-col items-center justify-center">
							<h2 className="card-title text-lg font-semibold mb-2">
								{user.name}
							</h2>
							<p className="text-sm text-gray-600">@{user.username}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Users;

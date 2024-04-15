import { useContext, useEffect, useState } from "react";
import { fetchUsers } from "../api/usersAPI";
import { AuthContext } from "../Context/AuthContext";
import UserCard from "../components/UserCard";


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
					<UserCard key={user.username} user={user} login={login} />
				))}
			</div>
		</div>
	);
}

export default LoginPage;

import { useContext, useEffect, useState } from "react";
import { fetchUsers } from "../api/usersAPI";
import { AuthContext } from "../Context/AuthContext";
import UserCard from "../components/UserCard";
import Loading from "../components/Loading";

function LoginPage() {
	const [users, setUsers] = useState([]);
	const { login } = useContext(AuthContext);
	const [loading, setLoading] = useState(true);

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

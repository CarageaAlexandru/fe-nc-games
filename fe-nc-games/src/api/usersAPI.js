import axios from "axios";

const BASE_URL = "https://be-nc-games-ldxg.onrender.com/api";

export const fetchUsers = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/users`);
		return response.data;
	} catch (error) {
		console.error("Error fetching users:", error);
		throw error;
	}
};

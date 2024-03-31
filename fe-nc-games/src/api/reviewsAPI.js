import axios from "axios";

const BASE_URL = "https://drab-red-sheep-wear.cyclic.app/api/";

export const fetchReviews = async (page = 1, limit = 9) => {
	try {
		const response = await axios.get(
			`${BASE_URL}/reviews?p=${page}&limit=${limit}`
		);
		return response.data;
	} catch (error) {
		console.log("Error fetching reviews", error);
	}
};

import axios from "axios";

const BASE_URL = "https://drab-red-sheep-wear.cyclic.app/api/";

export const fetchCategories = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/categories`);
		return response.data.categories;
	} catch (error) {
		console.error("Error fetching categories:", error);
		throw error;
	}
};

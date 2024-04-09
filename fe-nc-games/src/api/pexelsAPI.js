import axios from "axios";

export const fetchRandomGamePhoto = async () => {
	try {
		const response = await axios.get("https://api.pexels.com/v1/search", {
			params: {
				query: "games",
				per_page: 20,
				page: 1,
				size: "small",
			},
			headers: {
				Authorization: import.meta.env.VITE_PEXELS_KEY,
			},
		});
		const photos = response.data.photos;
		const randomIndex = Math.floor(Math.random() * photos.length);
		// compress it to 700 x 700 to match the rest of the photos
		const randomPhotoUrl = `${photos[randomIndex].src.original}?auto=compress&cs=tinysrgb&h=700&w=700`;
		return randomPhotoUrl;
	} catch (error) {
		console.error("Error fetching random game photo:", error);
		throw error;
	}
};

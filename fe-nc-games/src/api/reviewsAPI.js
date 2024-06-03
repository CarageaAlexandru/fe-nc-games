import axios from "axios";

const BASE_URL = "https://be-nc-games-ldxg.onrender.com/api/";

export const fetchReviews = async (page = 1, limit = 9, category = null) => {
	try {
		const params = { p: page, limit: limit };
		if (category) {
			params.category = category;
		}
		const response = await axios.get(`${BASE_URL}/reviews`, { params });
		return response.data;
	} catch (error) {
		console.error("Error fetching reviews:", error);
		throw error;
	}
};

export const fetchReviewById = async (reviewId) => {
	try {
		const response = await axios.get(`${BASE_URL}/reviews/${reviewId}`);
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
export const fetchReviewComments = async (reviewId, page = 1, limit = 5) => {
	try {
		const response = await axios.get(
			`${BASE_URL}/reviews/${reviewId}/comments?p=${page}&limit=${limit}`
		);
		// console.log("🚀 ~ fetchReviewComments ~ response:", response)
		return response.data;
	} catch (error) {
		console.error(
			`Error fetching comments for review with ID ${reviewId}:`,
			error
		);
		throw error;
	}
};

export const updateReviewVotes = async (reviewId, newVote) => {
	try {
		const response = await axios.patch(`${BASE_URL}/reviews/${reviewId}`, {
			inc_votes: newVote,
		});
		return response.data;
	} catch (error) {
		console.error(
			`Error updating votes for review with ID ${reviewId}:`,
			error
		);
		throw error;
	}
};

export const postComment = async (reviewId, comment) => {
	try {
		const response = await axios.post(
			`${BASE_URL}/reviews/${reviewId}/comments`,
			comment
		);
		return response.data;
	} catch (error) {
		console.error(
			`Error posting comment for review with ID ${reviewId}:`,
			error
		);
		throw error;
	}
};

export const postReview = async (review) => {
	try {
		const response = await axios.post(`${BASE_URL}/reviews`, review);
		console.log(response);
	} catch (error) {
		console.error(
			`Error posting review for review.`,
			error
		);
		throw error;
	}
};

export const deleteComment = async (commentId) => {
	try {
		await axios.delete(`${BASE_URL}/comments/${commentId}`);
	} catch (error) {
		console.error(`Error deleting comment with ID ${commentId}:`, error);
		throw error;
	}
};

import { useEffect, useState } from "react";
import { fetchCategories } from "../api/categoriesAPI";
import { fetchRandomGamePhoto } from "../api/pexelsAPI";
import { postReview } from "../api/reviewsAPI";
import { z } from "zod";

const reviewSchema = z.object({
	owner: z.string(),
	title: z.string().min(1, "Title is required").max(50),
	review_body: z.string().min(1, "Review body is required").max(300),
	designer: z.string().min(1, "Designer is required").max(30),
	category: z.string().min(1, "Category is required"),
	review_img_url: z.string().url("Invalid URL format"),
});

function AddReviewForm({ user, onReviewAdded }) {
	const [formData, setFormData] = useState({
		owner: user.username,
		title: "",
		review_body: "",
		designer: "",
		category: "",
		review_img_url: "",
	});
	const [categories, setCategories] = useState([]);
	const [alert, setAlert] = useState(null);
	const [errors, setErrors] = useState({});

	const getRandomPhoto = async () => {
		try {
			const randomPhotoUrl = await fetchRandomGamePhoto();
			setFormData((prevFormData) => ({
				...prevFormData,
				review_img_url: randomPhotoUrl,
			}));
		} catch (error) {
			console.error("Error fetching random game photo:", error);
		}
	};
	const getCategories = async () => {
		try {
			const categoriesData = await fetchCategories();
			setCategories(categoriesData);
		} catch (error) {
			console.error("Error fetching categories:", error);
		}
	};

	useEffect(() => {
		getRandomPhoto();
		getCategories();
	}, []);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: null });
	};

	const validateForm = () => {
		try {
			reviewSchema.parse(formData);
			return true;
		} catch (error) {
			if (error instanceof z.ZodError) {
				const newErrors = {};
				error.errors.forEach((err) => {
					newErrors[err.path[0]] = err.message;
				});
				setErrors(newErrors);
			}
			return false;
		}
	};

	const handleSuccess = () => {
		setAlert({
			type: "success",
			message: "Success: The review has been added.",
		});

		setTimeout(() => {
			setAlert(null);
			document.getElementById("review_modal").close();
			onReviewAdded();
		}, 2000);

		setFormData({
			owner: user.username,
			title: "",
			review_body: "",
			designer: "",
			category: "",
			review_img_url: "",
		});
	};

	const handleError = () => {
		setAlert({
			type: "error",
			message: "Sorry, something went wrong.",
		});

		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const isValid = validateForm();

		if (!isValid) {
			return;
		}

		try {
			const response = await postReview(formData);
			handleSuccess();
		} catch (error) {
			console.error("Error adding review:", error);
			handleError();
		}
	};

	return (
		<form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
			<div className="p-4 rounded-lg">
				<div className="form-control">
					<label className="label">
						<span className="label-text">Author</span>
					</label>
					<input
						type="text"
						name="author"
						value={formData.owner}
						placeholder={user.username}
						className="input input-bordered w-full max-w-xs"
						disabled
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Title</span>
					</label>
					<input
						type="text"
						name="title"
						value={formData.title}
						onChange={handleChange}
						placeholder="Enter title"
						className={`input input-bordered w-full ${
							errors.title ? "input-error" : ""
						}`}
						maxLength="50"
						required
					/>
					{errors.title && (
						<label className="label">
							<span className="label-text-alt text-error">{errors.title}</span>
						</label>
					)}
				</div>

				<div className="form-control">
					<label className="label">
						<span className="label-text">Review Body</span>
					</label>
					<textarea
						name="review_body"
						value={formData.review_body}
						onChange={handleChange}
						placeholder="Enter review body"
						className="textarea textarea-bordered h-24 w-full"
						maxLength="300"
						required
					></textarea>
				</div>

				<div className="form-control">
					<label className="label">
						<span className="label-text">Designer</span>
					</label>
					<input
						type="text"
						name="designer"
						value={formData.designer}
						onChange={handleChange}
						placeholder="Enter designer"
						className="input input-bordered w-full"
						maxLength="30"
						required
					/>
				</div>

				<div className="form-control">
					<label className="label">
						<span className="label-text">Category</span>
					</label>
					<select
						name="category"
						value={formData.category}
						onChange={handleChange}
						className="select select-bordered w-full"
						required
					>
						<option value="">Select a category</option>
						{categories.map((category) => (
							<option key={category.slug} value={category.slug}>
								{category.slug}
							</option>
						))}
					</select>
				</div>

				<div className="form-control">
					<label className="label">
						<span className="label-text">Review Image URL </span>
					</label>
					<input
						type="url"
						name="review_img_url"
						value={formData.review_img_url}
						onChange={handleChange}
						placeholder="Enter review image URL"
						className="input input-bordered w-full"
						required
					/>
				</div>
			</div>

			{alert && (
				<div className={`alert alert-${alert.type} shadow-lg`}>
					<div>
						<span>{alert.message}</span>
					</div>
				</div>
			)}

			<div className="flex justify-around">
				<button className="btn btn-primary">Submit Review</button>
				<button
					className="btn btn-outline btn-warning"
					onClick={() => document.getElementById("review_modal").close()}
				>
					Close
				</button>
			</div>
		</form>
	);
}

export default AddReviewForm;

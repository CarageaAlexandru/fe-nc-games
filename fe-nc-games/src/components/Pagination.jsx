const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const pageButtons = [];

	for (let i = 1; i <= totalPages; i++) {
		pageButtons.push(
			<button
				key={i}
				className={`join-item btn btn-lg ${
					i === currentPage ? "btn-active" : ""
				}`}
				onClick={() => onPageChange(i)}
			>
				{i}
			</button>
		);
	}

	return (
		<div className="flex justify-center mt-8 mb-12">
			<div className="join">{pageButtons}</div>
		</div>
	);
};

export default Pagination;

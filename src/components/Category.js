import React, { useState, Fragment } from "react";
import AddCategoryModals from "./AddCategoryModals";
import Button from "@material-ui/core/Button";
import Bookmark from "./Bookmark";
import AddBookmarkModals from "./AddBookmarkModal";

const Category = () => {
	const [categoryName, setCategoryName] = useState("");
	const [open, setOpen] = useState(false);

	const [categoryList, setCategoryList] = useState([
		{ _id: 1, name: "Social" },
		{ _id: 2, name: "Education" }
	]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleAdd = () => {
		setOpen(false);
		setCategoryList([
			...categoryList,
			{ _id: categoryList.length + 1, name: categoryName }
		]);
		setCategoryName("");
	};

	return (
		<Fragment>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Add New Category
			</Button>
			<div className="row">
				<AddCategoryModals
					handleAdd={handleAdd}
					handleClose={handleClose}
					setOpen={setOpen}
					open={open}
					categoryName={categoryName}
					setCategoryName={setCategoryName}
				/>
				{categoryList.map(category => (
					<div className="category">
						<h1>{category.name}</h1>
						<Bookmark category={category} />
					</div>
				))}
			</div>
		</Fragment>
	);
};

export default Category;

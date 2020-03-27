import React, { useState } from "react";
import AddBookmarkModal from "./AddBookmarkModal";
import Button from "@material-ui/core/Button";

const Bookmark = ({ category }) => {
	console.log(category);
	const [bookmarkUrl, setBookmarkUrl] = useState("");
	const [bookmarkName, setBookmarkName] = useState("");

	const [open, setOpen] = useState(false);

	const [bookmarkList, setBookmarkList] = useState({
		[category.name]: []
	});

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleAdd = () => {
		setOpen(false);

		setBookmarkList({
			...bookmarkList,
			[category.name]: [
				...bookmarkList[category.name],
				{ _id: Math.random() * 50, name: bookmarkName, url: bookmarkUrl }
			]
		});
	};

	return (
		<div>
			<h3>Bookmark List</h3>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Add New Bookmark
			</Button>
			<AddBookmarkModal
				bookmarkName={bookmarkName}
				setBookmarkName={setBookmarkName}
				bookmarkUrl={bookmarkUrl}
				setBookmarkUrl={setBookmarkUrl}
				handleClickOpen={handleClickOpen}
				handleClose={handleClose}
				handleAdd={handleAdd}
				open={open}
				setOpen={setOpen}
			/>
			{bookmarkList[category.name].map(bookmark => (
				<div>
					<h3>
						<a href={bookmark.url} target="_blank">
							{bookmark.name}
						</a>
					</h3>
				</div>
			))}
		</div>
	);
};

export default Bookmark;

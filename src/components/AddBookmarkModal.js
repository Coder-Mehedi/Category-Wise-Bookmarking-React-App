import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const AddBookmarkModal = props => {
	const {
		bookmarkUrl,
		bookmarkName,
		setBookmarkName,
		setBookmarkUrl,
		handleClose,
		handleAdd,
		open
	} = props;

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">Add New Bookmark</DialogTitle>
			<DialogContent>
				<DialogContentText>Add new bookmark</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Bookmark Name"
					type="email"
					value={bookmarkName}
					fullWidth
					onChange={e => setBookmarkName(e.target.value)}
				/>

				<TextField
					margin="dense"
					id="name"
					label="Bookmark URL"
					type="email"
					value={bookmarkUrl}
					fullWidth
					onChange={e => setBookmarkUrl(e.target.value)}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
					Cancel
				</Button>
				<Button onClick={handleAdd} color="primary">
					Add Bookmark
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default AddBookmarkModal;

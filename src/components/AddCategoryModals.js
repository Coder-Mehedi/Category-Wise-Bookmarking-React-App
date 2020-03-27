import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const AddCategoryModal = props => {
	const {
		handleAdd,
		handleClose,
		open,
		setOpen,
		categoryName,
		setCategoryName
	} = props;

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">Add New Category</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Add new category so you can add bookmarks under those categories
				</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Category Name"
					type="email"
					value={categoryName}
					fullWidth
					onChange={e => setCategoryName(e.target.value)}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
					Cancel
				</Button>
				<Button onClick={handleAdd} color="primary">
					Add Category
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default AddCategoryModal;

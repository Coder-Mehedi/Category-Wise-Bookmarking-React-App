import React from "react";
import "./App.css";
import Category from "./components/Category";

function App() {
	return (
		<div className="container">
			<h1 className="display-4">Bookmark Application</h1>
			<Category />
		</div>
	);
}

export default App;

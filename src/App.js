import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen.js";
import LoginScreen from "./screens/LoginScreen.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const user = null; //!null
	return (
		<div className="app">
			<Router>
				{!user ? (
					<LoginScreen />
				) : (
					<Routes>
						<Route path="/" element={<HomeScreen />} />
					</Routes>
				)}
			</Router>
		</div>
	);
}

export default App;

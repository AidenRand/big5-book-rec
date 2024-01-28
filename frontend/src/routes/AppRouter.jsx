import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			{/* <Route path="/about" element={<div>About</div>} /> */}
			{/* <Route path="/contact" element={<div>Contact</div>} /> */}
		</Routes>
	);
};

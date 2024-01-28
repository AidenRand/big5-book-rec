import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export const LandingPage = () => {
	return (
		<Box
			sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: "80%",
					mt: "10vh",
				}}
			>
				<Typography
					variant="h1"
					sx={{ textTransform: "none", color: "#ba74e0" }}
				>
					RecAI
				</Typography>
				<Box sx={{ mt: "1vh", width: "80%" }}>
					<Typography
						variant="h3"
						sx={{ textTransform: "none", fontWeight: "900", fontSize: "3rem" }}
					>
						Find Your Next 📖
					</Typography>
					<Typography
						sx={(theme) => ({
							fontSize: "1.5rem",
							color: theme.palette.muted.main,
						})}
					>
						Get book recommendations based off of your personality, your
						favorite genres, and a short description of a book you enjoyed.
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

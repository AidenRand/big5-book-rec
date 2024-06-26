import React, { useState } from "react";
import {
	Box,
	Button,
	Container,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import { useMutation } from "react-query";
import textfieldStyles from "../styling/TextFieldStyling";
import { getResponse } from "../api/responseHandler";

export const LandingPage = () => {
	const [currentMood, setCurrentMood] = useState("");
	const [bookCategory, setBookCategory] = useState("");
	const [bookDescription, setBookDescription] = useState("");

	const getResponseReq = useMutation(getResponse, {
		onSuccess: (returnData) => {
			console.log("Post Made!", returnData);
		},
		onError: (error) => {
			console.log(error);
			toast.error("Post Creation Failed", {
				position: "bottom-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
			});
		},
	});

	const handleGetResponse = () => {
		getResponseReq.mutate({ currentMood, bookCategory, bookDescription });
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: "2rem",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					width: "65vw",
					mt: "10vh",
					borderRadius: "10px",
					bgcolor: "#21252d",
					padding: "2rem",
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
						sx={(theme) => ({
							textTransform: "none",
							fontWeight: "900",
							fontSize: "3rem",
							color: theme.palette.white.main,
						})}
					>
						Find Your Next 📖
					</Typography>
					<Typography
						sx={(theme) => ({
							fontSize: "1.5rem",
							color: theme.palette.lightPurple.main,
						})}
					>
						Get book recommendations that are tailored to you.
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					width: "65vw",
					padding: "2rem",
					borderRadius: "10px",
					bgcolor: "#21252d",
				}}
			>
				<Typography
					variant="h5"
					sx={(theme) => ({ color: theme.palette.white.main, mb: "1vh" })}
				>
					How are you feeling right now?
				</Typography>
				<TextField
					multiline
					label="Current Mood"
					onChange={(e) => setCurrentMood(e.target.value)}
					inputProps={{ maxLength: 100 }}
					sx={textfieldStyles}
				/>
				<Box sx={{ borderBottom: "1px solid #42404f", mt: "3vh", mb: "3vh" }} />

				<Typography
					variant="h5"
					sx={(theme) => ({ color: theme.palette.white.main, mb: "1vh" })}
				>
					What are your favorite genres?
				</Typography>
				<TextField
					multiline
					label="Genres"
					onChange={(e) => setBookCategory(e.target.value)}
					inputProps={{ maxLength: 100 }}
					sx={textfieldStyles}
				/>
				<Box sx={{ borderBottom: "1px solid #42404f", mt: "3vh", mb: "3vh" }} />
				<Typography
					variant="h5"
					sx={(theme) => ({ color: theme.palette.white.main, mb: "1vh" })}
				>
					Give a short description of a book you enjoyed
				</Typography>
				<TextField
					multiline
					label="Book Description"
					onChange={(e) => setBookDescription(e.target.value)}
					inputProps={{ maxLength: 1000 }}
					rows={5}
					sx={textfieldStyles}
				/>
			</Box>
			<Button
				variant="contained"
				onClick={handleGetResponse}
				sx={{
					mt: "2vh",
					color: "#ba74e0",
					bgcolor: "#21252d",
					width: "69vw",
				}}
			>
				Get Started
			</Button>
		</Box>
	);
};

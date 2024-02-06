import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { apiRoutes } from "./routes/apiRoutes.js";

dotenv.config({ path: ".env" });
const PORT = process.env.PORT;
// const MONGO_URL = process.env.MONGO_URL;
const app = express();

app.use(
	cors({
		origin: ["http://localhost:5001"],
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
		httpOnly: false,
	})
);

app.get("/", (req, res) => {
	res.send("Hello World");
});

// mongoose
// 	.connect(MONGO_URL)
// 	.then(() => console.log("MongoDB is  connected successfully"))
// 	.catch((err) => console.error(err));

app.use(cookieParser());

app.use(express.json());

apiRoutes(app);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

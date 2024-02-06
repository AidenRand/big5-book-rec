import { getResponse } from "../controllers/responseControllers.js";

export const apiRoutes = function (app) {
	app.post("/getResponse", (req, res) => getResponse(req, res));
};

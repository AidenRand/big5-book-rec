import { api } from "./api";

export const getResponse = async (payload) => {
	try {
		const response = await api.post("/getResponse", payload);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

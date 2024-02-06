import dotenv from "dotenv";
dotenv.config({ path: ".env" });
const BERT_API_TOKEN = process.env.BERT_API_TOKEN;

const query = async (data) => {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Minej/bert-base-personality",
		{
			headers: { Authorization: `Bearer ${BERT_API_TOKEN}` },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
};

export const getResponse = async (req, res) => {
	const { bookCategory, bookDescription } = req.body;
	console.log("bookCategory", bookCategory, bookDescription, BERT_API_TOKEN);
	try {
		res.send({ bookCategory, bookDescription, success: true });
		const response = await query({
			inputs: "I enjoy breathing",
		});
		console.log("response", response);
	} catch (error) {
		res.send({ error, success: false });
	}
};

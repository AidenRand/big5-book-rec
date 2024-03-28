import dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config({ path: ".env" });
const BERT_API_TOKEN = process.env.BERT_API_TOKEN;
const OPENAI_API_KEY = process.env.OPENAI_API_TOKEN;

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
	const openai = new OpenAI({ apiKey: process.env.OPENAI_API_TOKEN });

	const { currentMood, bookCategory, bookDescription } = req.body;
	const personalities = [
		"Extroversion",
		"Neuroticism",
		"Agreeableness",
		"Conscientiousness",
		"Openness",
	];
	console.log("bookCategory", bookCategory, bookDescription, BERT_API_TOKEN);
	try {
		const personality = await query({
			inputs: bookDescription,
		});
		// console.log("personality[0]", personality[0]);

		personality[0].forEach((element) => {
			const index = element.label.split("_")[1];
			element.label = personalities[index];
		});
		// console.log(" personality", personality);
		const recPrompt = `My favorite book genres are ${bookCategory}, and my big 5 traits are \n\n ${
			personality[0][0].label + ": " + personality[0][0].score
		}, \n ${personality[0][1].label + ": " + personality[0][1].score}, \n ${
			personality[0][2].label + ": " + personality[0][2].score
		},\n ${personality[0][3].label + ": " + personality[0][3].score}, \n ${
			personality[0][4].label + ": " + personality[0][4].score
		}. \n My current mood is ${currentMood}.\n\n Recommend 5 books based off of my mood, favorite genres, and big 5 personality traits. Don't explain what you are doing, Just return the reccomendations and a short description for each.`;
		console.log("recPrompt", recPrompt);
		const response = await openai.chat.completions.create({
			messages: [{ role: "user", content: recPrompt }],
			model: "gpt-4",
			temperature: 0.1,
		});
		console.log("response", response.choices[0].message.content);
		res.send({ bookCategory, bookDescription, success: true });
	} catch (error) {
		res.send({ error, success: false });
	}
};

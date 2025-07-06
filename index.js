import Groq from "groq-sdk";
import { config } from "dotenv";
config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


async function callAgent() {
    const chat_completion = await groq.chat.completions.create({
        messages: [
            {
                "role": "user",
                "content": "Explain the importance of fast language models",
            }
        ],
        model: "llama-3.3-70b-versatile",
    });

    console.log(chat_completion.choices[0].message.content)
}

await callAgent();
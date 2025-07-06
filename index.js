import Groq from "groq-sdk";
import { config } from "dotenv";
config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


async function callAgent() {
    const messages = [];
    messages.push({
        role: "system",
        content: "You are Narendra Damodar Das Modi. You are very smart. You are very funny. You are very charismatic. You are very confident. You are very successful. You are very popular. You are very famous. You are very influential. You are very powerful. You are very rich. You are very smart. You are very funny. You are very charismatic. You are very confident. You are very successful. You are very popular. You are very famous. You are very influential. You are very powerful."
    });
    messages.push({
        role: "user",
        content: "What is current time?",
    });

    const chat_completion = await groq.chat.completions.create({
        messages: messages,
        model: "llama-3.3-70b-versatile",
        tools: [
            {
                type: "function",
                function: {
                    name: "getCurrentTime",
                    description: "Get the current time",
                    parameters: {
                        type: "object",
                        properties: {
                            time: { type: "string" }
                        }
                    }
                }
            }
        ]
    });

    messages.push(chat_completion.choices[0].message)
    const tool_calls = chat_completion.choices[0].message.tool_calls;
    if(!tool_calls) {
        console.log(chat_completion.choices[0].message.content);
        return;
    }

    for(const tool_call of tool_calls) {
        const tool_name = tool_call.function.name;
        const args = tool_call.function.arguments;
        let result = '';
        if(tool_name === "getCurrentTime") {
            result = getCurrentTime();
            console.log(result);
        }

        messages.push({
            role: "tool",
            content: result,
            tool_call_id: tool_call.id
        })

        const chat_completion2 = await groq.chat.completions.create({
            messages: messages,
            model: "llama-3.3-70b-versatile",
            tools: [
                {
                    type: "function",
                    function: {
                        name: "getCurrentTime",
                        description: "Get the current time",
                        parameters: {
                            type: "object",
                            properties: {
                                time: { type: "string" }
                            }
                        }
                    }
                }
            ]
        });

        const tool_calls2 = chat_completion2.choices[0].message.tool_calls;
        if(!tool_calls2) {
            console.log(chat_completion2.choices[0].message.content);
            return;
        }
        return;
    }    
}

function getCurrentTime() {
    const currentTime = new Date().toLocaleTimeString();
    return currentTime;
}

await callAgent();
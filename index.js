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

    while(true) {
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
            return chat_completion.choices[0].message.content;
            break;
        }

        for(const tool_call of tool_calls) {
            const tool_name = tool_call.function.name;
            const args = tool_call.function.arguments;
            let result = '';
            if(tool_name === "getCurrentTime") {
                result = getCurrentTime();
            }
    
            messages.push({
                role: "tool",
                content: result,
                tool_call_id: tool_call.id
            })
        }  
    }
}

function getCurrentTime() {
    const currentTime = new Date().toLocaleTimeString();
    return currentTime;
}

const result = await callAgent();
console.log('final result : ', result);
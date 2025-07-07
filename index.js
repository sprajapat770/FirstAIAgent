import { ChatGroq } from "@langchain/groq";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const model = new ChatGroq({
  model: "llama-3.3-70b-versatile",
  temperature: 0
});

const messages = [
    new SystemMessage("Translate the following from English into Hindi"),
    new HumanMessage("hi!"),
];
  
const result = await model.invoke(messages);
console.log(result.content);

const result2 = await model.invoke("Hello");
console.log(result2.content);

const result3 = await model.invoke([{ role: "user", content: "Hello" }]);
console.log(result3.content);

const result4 = await model.invoke([new HumanMessage("hi!")]);
console.log(result4.content);

const stream = await model.stream(messages);

const chunks = [];
for await (const chunk of stream) {
  chunks.push(chunk);
  console.log(`${chunk.content}|`);
}


// import readline from 'node:readline/promises';

// import { config } from "dotenv";
// config();




// async function callAgent() {
//     const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

//     const messages = [];
//     messages.push({
//         role: "system",
//         content: "You are Narendra Damodar Das Modi. You are very smart. You are very funny. You are very charismatic. You are very confident. You are very successful. You are very popular. You are very famous. You are very influential. You are very powerful. You are very rich. You are very smart. You are very funny. You are very charismatic. You are very confident. You are very successful. You are very popular. You are very famous. You are very influential. You are very powerful."
//     });

//     // user prompt loop
//     while(true) {
        
//         const question = await rl.question('USER: ');

//         if(question === 'exit') {
//             console.log('Assistant : Goodbye!');
//             break;
//         }

//         messages.push({
//             role: "user",
//             content: question,
//         });
        
//         // agent
//         while(true) {
//             const chat_completion = await groq.chat.completions.create({
//                     messages: messages,
//                     model: "llama-3.3-70b-versatile",
//                     tools: [
//                     {
//                         type: "function",
//                         function: {
//                             name: "getCurrentTime",
//                             description: "Get the current time",
//                             parameters: {
//                                 type: "object",
//                                 properties: {
//                                     time: { type: "string" }
//                                 }
//                             }
//                         }
//                     }
//                 ]
//             });

//             messages.push(chat_completion.choices[0].message)
//             const tool_calls = chat_completion.choices[0].message.tool_calls;
//             if(!tool_calls) {
//                 console.log(`Assistant : ${ chat_completion.choices[0].message.content }`);
//                 break;
//             }

//             for(const tool_call of tool_calls) {
//                 const tool_name = tool_call.function.name;
//                 const args = tool_call.function.arguments;
//                 let result = '';
//                 if(tool_name === "getCurrentTime") {
//                     result = getCurrentTime();
//                 }
        
//                 messages.push({
//                     role: "tool",
//                     content: result,
//                     tool_call_id: tool_call.id
//                 })
//             }  
//         }
//     }
//     rl.close();
// }

// function getCurrentTime() {
//     const currentTime = new Date().toLocaleTimeString();
//     return currentTime;
// }

// callAgent();

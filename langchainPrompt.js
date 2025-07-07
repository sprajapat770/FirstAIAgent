import { ChatGroq } from "@langchain/groq";
import { ChatOpenAI } from "@langchain/openai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

import { HumanMessage, SystemMessage } from "@langchain/core/messages";

import { ChatPromptTemplate } from "@langchain/core/prompts";

const systemTemplate = "Translate the following from English into {language}";

const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", systemTemplate],
    ["user", "{text}"],
  ]);

const promptValue = await promptTemplate.invoke({
language: "hindi",
text: "Hello!",
});

console.log(promptValue);

console.log(promptValue.toChatMessages());

const model = new ChatGroq({
    model: "llama-3.3-70b-versatile",
    temperature: 0
  });

const response = await model.invoke(promptValue);
console.log(`${response.content}`);


const model2 = new ChatGoogleGenerativeAI({
    model: "gemini-2.0-flash",
    temperature: 0
  });

const response2 = await model2.invoke(promptValue);
console.log(`${response2.content}`);
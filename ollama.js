// Configuration
const OLLAMA_HOST = 'localhost';
const OLLAMA_PORT = 11434;
const MODEL_NAME = 'qwen2.5-coder:1.5b';
const OLLAMA_BASE_URL = `http://${OLLAMA_HOST}:${OLLAMA_PORT}`;

// Function to make HTTP POST request to Ollama using fetch
async function chatOllamaRequest(prompt) {
    try {
        const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: MODEL_NAME,
                messages: [{
                    role: "user",
                    content: prompt
                }],
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        throw new Error(`Request failed: ${error.message}`);
    }
}

// Function to make HTTP POST request to Ollama using fetch
async function makeOllamaRequest(prompt) {
    try {
        const response = await fetch(`${OLLAMA_BASE_URL}/api/generate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: MODEL_NAME,
                prompt: prompt,
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Request failed: ${error.message}`);
    }
}

// Function to check if Ollama is running using fetch
async function checkOllamaStatus() {
    try {
        const response = await fetch(`${OLLAMA_BASE_URL}/api/tags`, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Connection failed: ${error.message}`);
    }
}

// Main function
async function main() {
    try {
        console.log('🚀 Starting Ollama connection...');
        console.log(`📡 Connecting to Ollama at ${OLLAMA_HOST}:${OLLAMA_PORT}`);
        
        // Check if Ollama is running
        console.log('🔍 Checking Ollama status...');
        const status = await checkOllamaStatus();
        console.log('✅ Ollama is running!');
        
        // Check if our model is available
        const availableModels = status.models || [];
        const modelExists = availableModels.some(model => model.name === MODEL_NAME);
        
        if (!modelExists) {
            console.log(`⚠️  Model ${MODEL_NAME} not found in available models:`);
            availableModels.forEach(model => {
                console.log(`   - ${model.name}`);
            });
            console.log(`\n💡 Please run: ollama pull ${MODEL_NAME}`);
            return;
        }
        
        console.log(`✅ Model ${MODEL_NAME} is available!`);
        
        // Simple prompt example
        const prompt = "What is Color of the sky?";
        
        console.log('\n📝 Sending prompt to Ollama...');
        console.log(`Prompt: "${prompt}"`);
        console.log('\n⏳ Waiting for response...\n');
        
        const response = await makeOllamaRequest(prompt);
        
        if (response.response) {
            console.log('🤖 Ollama Response:');
            console.log('=' .repeat(50));
            console.log(response.response);
            console.log('=' .repeat(50));
        } else {
            console.log('❌ No response received from Ollama');
        }
        
        // Additional examples
        // console.log('\n🔄 Running additional examples...\n');
        
        // const examples = [
        //     "Explain what is a variable in programming",
        //     "Write a simple Python function to add two numbers",
        //     "What is the difference between let and const in JavaScript?"
        // ];
        
        // for (let i = 0; i < examples.length; i++) {
        //     const examplePrompt = examples[i];
        //     console.log(`\n📝 Example ${i + 1}: "${examplePrompt}"`);
        //     console.log('⏳ Processing...\n');
            
        //     try {
        //         const exampleResponse = await makeOllamaRequest(examplePrompt);
        //         console.log('🤖 Response:');
        //         console.log('-' .repeat(30));
        //         console.log(exampleResponse.response);
        //         console.log('-' .repeat(30));
        //     } catch (error) {
        //         console.log(`❌ Error in example ${i + 1}: ${error.message}`);
        //     }
        // }
        
        console.log('\n✅ All examples completed!');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
        console.log('\n🔧 Troubleshooting tips:');
        console.log('1. Make sure Ollama is running: ollama serve');
        console.log('2. Check if the model is installed: ollama list');
        console.log(`3. Pull the model if needed: ollama pull ${MODEL_NAME}`);
        console.log('4. Verify Ollama is accessible at http://localhost:11434');
    }
}

// Run the main function
main();

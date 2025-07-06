# Ollama Local Client

A simple Node.js script to interact with Ollama locally using the Qwen2.5-coder:1.5b model.

## Prerequisites

1. **Install Ollama** (if not already installed):
   ```bash
   curl -fsSL https://ollama.com/install.sh | sh
   ```

2. **Start Ollama service**:
   ```bash
   ollama serve
   ```

3. **Pull the Qwen2.5-coder model**:
   ```bash
   ollama pull qwen2.5-coder:1.5b
   ```

## Usage

1. **Run the script**:
   ```bash
   node ollama.js
   ```
   
   Or using npm:
   ```bash
   npm start
   ```

## Features

- ✅ Connects to local Ollama instance
- ✅ Verifies Ollama is running
- ✅ Checks if the model is available
- ✅ Sends prompts and receives responses
- ✅ Includes multiple example prompts
- ✅ Comprehensive error handling
- ✅ Helpful troubleshooting tips

## Configuration

The script uses these default settings:
- **Host**: localhost
- **Port**: 11434
- **Model**: qwen2.5-coder:1.5b

You can modify these values in the `ollama.js` file if needed.

## Troubleshooting

If you encounter issues:

1. **Ollama not running**: Make sure Ollama is running with `ollama serve`
2. **Model not found**: Check available models with `ollama list`
3. **Connection failed**: Verify Ollama is accessible at http://localhost:11434
4. **Port conflict**: Check if port 11434 is available

## Example Output

The script will:
1. Check Ollama connection status
2. Verify the model is available
3. Send a primary prompt about JavaScript
4. Run additional example prompts
5. Display all responses in the console

## API Reference

The script uses Ollama's REST API:
- **Generate endpoint**: `POST /api/generate`
- **List models endpoint**: `GET /api/tags`

## Code Structure

### Main Components

1. **Configuration Section**:
   - `OLLAMA_HOST`: Default localhost
   - `OLLAMA_PORT`: Default 11434
   - `MODEL_NAME`: qwen2.5-coder:1.5b

2. **Core Functions**:
   - `makeOllamaRequest(prompt)`: Sends prompts to Ollama
   - `checkOllamaStatus()`: Verifies Ollama connection
   - `main()`: Orchestrates the entire process

3. **Error Handling**:
   - Connection validation
   - Model availability checks
   - Comprehensive error messages
   - Troubleshooting guidance

### Example Prompts Included

The script includes several example prompts to demonstrate various use cases:
- JavaScript Hello World function
- Programming concepts explanation
- Python function creation
- JavaScript language features

## Advanced Usage

### Custom Prompts

You can easily modify the script to use your own prompts:

```javascript
const customPrompt = "Your custom prompt here";
const response = await makeOllamaRequest(customPrompt);
console.log(response.response);
```

### Different Models

To use a different model, change the `MODEL_NAME` constant:

```javascript
const MODEL_NAME = 'llama2:7b'; // or any other model you have installed
```

### Streaming Responses

The current implementation uses non-streaming responses. To enable streaming, modify the request:

```javascript
const postData = JSON.stringify({
    model: MODEL_NAME,
    prompt: prompt,
    stream: true  // Enable streaming
});
```

## Performance Notes

- The Qwen2.5-coder:1.5b model is optimized for coding tasks
- Response times depend on your hardware and prompt complexity
- Local inference provides privacy and no API costs
- Model loading may take a few seconds on first request

## Security Considerations

- All processing happens locally on your machine
- No data is sent to external servers
- Ollama runs on localhost by default
- Consider firewall settings if accessing from other machines

## Compatibility

- **Node.js**: Version 14.0.0 or higher
- **Operating Systems**: Linux, macOS, Windows
- **Ollama**: Latest version recommended
- **Models**: Any Ollama-compatible model

## Contributing

Feel free to enhance this script by:
- Adding more example prompts
- Implementing streaming responses
- Adding conversation history
- Creating a web interface
- Adding more error handling scenarios

## License

This project is licensed under the MIT License.
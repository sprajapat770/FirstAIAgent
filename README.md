# FirstAIAgent
Its learning Purpose AI Agent



## Key Concepts

### 🧠 LLM (Large Language Model)
A foundation model trained on vast amounts of text data that can understand and generate human-like text. Think of it as a brilliant scholar who has read millions of books but is frozen in time - they're the "brain" that provides reasoning capabilities but only knows what existed up to their training cutoff date. LLMs process language but don't act independently and cannot access real-time information or browse the internet.

### 🤖 Agent
An intelligent system that uses LLM reasoning to autonomously complete tasks and achieve goals. Agents combine language understanding with decision-making capabilities to act as the "actor" that can plan, reason, and execute actions.

### 🛠️ Tools
External functions, APIs, or capabilities that agents can call to interact with the world beyond text generation. Tools serve as the "hands" that extend an agent's abilities - like web search, file operations, database queries, or API calls.

**Key Difference**: LLM provides the intelligence, Agent provides the autonomy, and Tools provide the capabilities to interact with external systems.

## 🚀 Building Our First AI Agent - Flowchart

```
                    ┌─────────┐
                    │  Start  │
                    └─────────┘
                         │
                         ▼
                    ┌─────────┐
                    │   LLM   │
                    └─────────┘
                      │     │
                      ▼     ▼
                ┌─────────┐ ┌─────────┐
                │  Tools  │ │   End   │
                └─────────┘ └─────────┘
                      │
                      │ (feedback)
                      └─────────┐
                                │
                                ▼
                           ┌─────────┐
                           │   LLM   │
                           └─────────┘
```

### Flowchart Explanation:
1. **Start** → Initialize the AI agent
2. **LLM** → Process input and make decisions
3. **Tools** → Execute external functions when needed (with feedback loop to LLM)
4. **End** → Complete the task and provide response

The feedback loop shows how tools can send information back to the LLM for further processing.

## 📦 Installation Requirements

### 🟢 Node.js Environment
```bash
# Node.js 18 or higher required
node --version
npm --version
```

### 📋 Required Dependencies
```bash
# Core AI library (Groq SDK)
npm install groq-sdk
npm install dotenv
```

### 🔧 Development Tools
```bash
# Version control
git --version

# Package management
npm --version
# or use yarn
yarn --version
```

## ⚙️ Configuration Steps

### 1️⃣ **Environment Setup**
```bash
# Clone the repository
git clone git@github.com:sprajapat770/FirstAIAgent.git
cd FirstAIAgent

# Initialize npm project (if package.json doesn't exist)
npm init -y
```

### 2️⃣ **Install Dependencies**
```bash
# Install from package.json
npm install

# Or install manually
npm install groq-sdk dotenv
```

### 3️⃣ **API Keys Configuration**
Create a `.env` file in the project root:
```env
# Groq API Key (Primary - for Llama models)
GROQ_API_KEY=your_groq_api_key_here
```

**Get your Groq API key from**: https://console.groq.com/keys

### 4️⃣ **GitHub SSH Configuration (Multiple Accounts)**
```bash
# Generate SSH keys for different accounts
ssh-keygen -t ed25519 -C "your-email@github.com" -f ~/.ssh/id_ed25519_account1
ssh-keygen -t ed25519 -C "your-other-email@github.com" -f ~/.ssh/id_ed25519_account2

# Add to SSH agent
ssh-add ~/.ssh/id_ed25519_account1
ssh-add ~/.ssh/id_ed25519_account2
```

**SSH Config (`~/.ssh/config`):**
```config
# Account 1
Host github.com-account1
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_account1
    IdentitiesOnly yes

# Account 2  
Host github.com-account2
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_account2
    IdentitiesOnly yes
```

### 5️⃣ **Project Structure**
```
FirstAIAgent/
├── .env                 # Environment variables
├── .gitignore          # Git ignore file
├── README.md           # This file
├── package.json        # Node.js dependencies
└── index.js            # Main application
```

### 6️⃣ **Verification Steps**
```bash
# Test Node.js installation
node --version
npm --version

# Test package imports
node -e "const Groq = require('groq-sdk'); console.log('✅ Groq SDK installed')"

# Test environment variables
node -e "require('dotenv').config(); console.log(process.env.GROQ_API_KEY ? '✅ Groq API key loaded' : '❌ Missing Groq API key')"

# Test Git configuration
git config --list | grep user

# Test SSH connections
ssh -T git@github.com-account1
ssh -T git@github.com-account2
```

## 🚀 Quick Start
```bash
# 1. Clone and setup
git clone git@github.com:sprajapat770/FirstAIAgent.git
cd FirstAIAgent

# 2. Install dependencies
npm install

# 3. Configure API keys
cp env.dist .env
# Edit .env with your Groq API key

# 4. Run the agent
node index.js
```

### 🔧 **Current Implementation**
The project currently includes:
- **Groq SDK** integration with **Llama 3.3 70B Versatile** model
- Simple agent that explains the importance of fast language models
- Environment variable configuration for API keys
- ES6 module support (`"type": "module"` in package.json)

## 🔍 Troubleshooting

### Common Issues:
- **Permission denied (publickey)**: Check SSH key configuration
- **Module not found**: Run `npm install` to install dependencies
- **API key errors**: Verify `.env` file and API key validity
- **Node version errors**: Ensure Node.js 16+ is installed

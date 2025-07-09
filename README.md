# FirstAIAgent

A comprehensive learning project for building AI agents using LangChain, Groq LLMs, and advanced observability tools.

## 📋 Table of Contents

- [Key Concepts](#-key-concepts)
- [Architecture Overview](#-architecture-overview)
- [Installation Requirements](#-installation-requirements)
- [Configuration](#-configuration)
- [Available LLM Models](#-available-llm-models)
- [Observability with LangSmith](#-observability-with-langsmith)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Verification & Testing](#-verification--testing)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)

## 🧠 Key Concepts

### 🤖 LLM (Large Language Model)
A foundation model trained on vast amounts of text data that can understand and generate human-like text. Think of it as a brilliant scholar who has read millions of books but is frozen in time - they're the "brain" that provides reasoning capabilities but only knows what existed up to their training cutoff date. LLMs process language but don't act independently and cannot access real-time information or browse the internet.

### 🎯 Agent
An intelligent system that uses LLM reasoning to autonomously complete tasks and achieve goals. Agents combine language understanding with decision-making capabilities to act as the "actor" that can plan, reason, and execute actions.

### 🛠️ Tools
External functions, APIs, or capabilities that agents can call to interact with the world beyond text generation. Tools serve as the "hands" that extend an agent's abilities - like web search, file operations, database queries, or API calls.

**Key Difference**: LLM provides the intelligence, Agent provides the autonomy, and Tools provide the capabilities to interact with external systems.

## 🏗️ Architecture Overview

```
                    ┌─────────────┐
                    │    Start    │
                    └─────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │     LLM     │
                    │  (Reasoning) │
                    └─────────────┘
                      │         │
                      ▼         ▼
                ┌─────────┐   ┌─────────┐
                │  Tools  │   │   End   │
                │(Actions)│   │(Result) │
                └─────────┘   └─────────┘
                      │
                      │ (feedback)
                      └─────────┐
                                │
                                ▼
                         ┌─────────────┐
                         │     LLM     │
                         │(Re-evaluate)│
                         └─────────────┘
```

### Architecture Explanation:
1. **Start** → Initialize the AI agent with user input
2. **LLM (Reasoning)** → Process input, understand context, and make decisions
3. **Tools (Actions)** → Execute external functions when needed (API calls, file operations, etc.)
4. **Feedback Loop** → Tools send results back to LLM for further processing
5. **End (Result)** → Complete the task and provide final response

The feedback loop enables iterative problem-solving and complex task completion.

## 📦 Installation Requirements

### 🟢 Node.js Environment
```bash
# Node.js 18 or higher required
node --version  # Should be 18.x.x or higher
npm --version   # Should be 9.x.x or higher
```

### 📋 Core Dependencies
```bash
# LangChain ecosystem
npm i langchain @langchain/core @langchain/groq

# Environment management
npm i dotenv

# Observability (optional)
npm i langsmith
```

### 🔧 Development Tools
```bash
# Version control
git --version

# Package management (choose one)
npm --version
# OR
yarn --version
```

## ⚙️ Configuration

### 1️⃣ **Environment Setup**
```bash
# Clone the repository
git clone git@github.com:sprajapat770/FirstAIAgent.git
cd FirstAIAgent

# Initialize npm project (if package.json doesn't exist)
npm init -y
```

### 2️⃣ **Install LangChain Dependencies**
```bash
# Install from package.json
npm install

# Or install LangChain packages manually
npm i langchain @langchain/core
npm i @langchain/groq
npm install dotenv
```

### 3️⃣ **Environment Variables Configuration**

Copy the environment template:
```bash
cp env.dist .env
```

Edit `.env` file with your API keys:
```env
# Required: Groq API Key for LLM access
GROQ_API_KEY=your_groq_api_key_here

# Optional: Alternative LLM providers
OPENAI_API_KEY=your_openai_api_key_here
GOOGLE_API_KEY=your_google_api_key_here

# Optional: LangSmith for observability
LANGSMITH_TRACING=true
LANGSMITH_ENDPOINT=https://api.smith.langchain.com
LANGSMITH_API_KEY=your_langsmith_api_key_here
LANGSMITH_PROJECT=your_project_name_here
```

**🔑 Where to get API keys:**
- **Groq API**: https://console.groq.com/keys
- **OpenAI API**: https://platform.openai.com/api-keys
- **LangSmith**: https://smith.langchain.com/

## 🤖 Available LLM Models

### Groq Models (Recommended)
Access the latest Groq models for fast inference:

| Model | Description | Use Case | Speed |
|-------|-------------|----------|-------|
| `llama-3.3-70b-versatile` | Latest Llama 3.3 70B | General purpose, complex reasoning | ⚡ Fast |
| `llama-3.1-70b-versatile` | Llama 3.1 70B | Balanced performance | ⚡ Fast |
| `llama-3.1-8b-instant` | Llama 3.1 8B | Quick responses, simple tasks | ⚡⚡ Very Fast |
| `mixtral-8x7b-32768` | Mixtral 8x7B | Long context, multilingual | ⚡ Fast |
| `gemma-7b-it` | Google Gemma 7B | Instruction following | ⚡ Fast |

**📚 Full Model Documentation**: https://console.groq.com/docs/models

### Model Selection Guide:
- **Complex reasoning**: `llama-3.3-70b-versatile`
- **Balanced performance**: `llama-3.1-70b-versatile`
- **Quick responses**: `llama-3.1-8b-instant`
- **Long conversations**: `mixtral-8x7b-32768`
- **Instruction following**: `gemma-7b-it`

## 📊 Observability with LangSmith

LangSmith provides comprehensive observability, debugging, and monitoring for your AI agents.

### 🚀 Quick Setup

1. **Create LangSmith Account**
   - Visit: https://smith.langchain.com/
   - Sign up with your email
   - Complete onboarding: https://smith.langchain.com/onboarding?organizationId=97edd421-4d44-4c05-a385-e912a528b4f0&step=2

2. **Install LangSmith**
   ```bash
   npm i langsmith
   ```

3. **Configure Environment Variables**
   ```env
   LANGSMITH_TRACING=true
   LANGSMITH_ENDPOINT=https://api.smith.langchain.com
   LANGSMITH_API_KEY=your_langsmith_api_key_here
   LANGSMITH_PROJECT=FirstAIAgent
   ```

### 📈 LangSmith Features

- **🔍 Trace Debugging**: Step-by-step execution tracking
- **📊 Performance Metrics**: Response times, token usage, costs
- **🎯 Error Monitoring**: Automatic error detection and alerts
- **📋 Dashboard Analytics**: Visual insights into agent behavior
- **🔄 A/B Testing**: Compare different models and configurations

### 📚 LangSmith Documentation
- **Dashboard Guide**: https://docs.smith.langchain.com/observability/how_to_guides/dashboards
- **Tracing Guide**: https://docs.smith.langchain.com/observability/how_to_guides/tracing
- **Monitoring Guide**: https://docs.smith.langchain.com/observability/how_to_guides/monitoring

## 📁 Project Structure

```
FirstAIAgent/
├── 📄 README.md           # This documentation
├── 📄 package.json        # Node.js dependencies and scripts
├── 📄 .env                # Environment variables (create from env.dist)
├── 📄 env.dist            # Environment template
├── 📄 .gitignore          # Git ignore patterns
├── 📄 index.js            # Main application entry point
├── 📁 src/                # Source code directory
│   ├── 📁 agents/         # Agent implementations
│   ├── 📁 tools/          # Custom tools and utilities
│   └── 📁 models/         # Model configurations
├── 📁 examples/           # Example implementations
└── 📁 docs/               # Additional documentation
```

## 🚀 Quick Start
### 4️⃣ **GitHub SSH Configuration (Multiple Accounts)**
```bash
# Generate SSH keys for different accounts
ssh-keygen -t ed25519 -C "your-email@github.com" -f ~/.ssh/id_ed25519_account1
ssh-keygen -t ed25519 -C "your-other-email@github.com" -f ~/.ssh/id_ed25519_account2
# Add to SSH agent
ssh-add ~/.ssh/id_ed25519_account1
ssh-add ~/.ssh/id_ed25519_account2

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
    
### Step 1: Clone and Setup
```bash
git clone git@github.com:sprajapat770/FirstAIAgent.git
cd FirstAIAgent
npm install
```

### Step 2: Configure Environment
```bash
# Copy environment template
cp env.dist .env

# Edit .env with your API keys
nano .env  # or use your preferred editor
```

### Step 3: Run Your First Agent
```bash
# Run the main application
node index.js

# Or run with specific model
GROQ_MODEL=llama-3.3-70b-versatile node index.js
```

### Step 4: Enable Observability (Optional)
```bash
# Set up LangSmith tracing
export LANGSMITH_TRACING=true
export LANGSMITH_PROJECT=FirstAIAgent

# Run with tracing enabled
node index.js
```

## ✅ Verification & Testing

### 🔍 System Check
```bash
# Verify Node.js and npm
node --version && npm --version

# Check installed packages
npm list --depth=0

# Test environment variables
node -e "require('dotenv').config(); console.log('✅ Environment loaded')"
```

### 🧪 Package Testing
```bash
# Test LangChain imports
node -e "import('@langchain/groq').then(() => console.log('✅ LangChain Groq ready'))"
node -e "import('@langchain/core').then(() => console.log('✅ LangChain Core ready'))"
node -e "import('langchain').then(() => console.log('✅ LangChain ready'))"

# Test API key configuration
node -e "require('dotenv').config(); console.log(process.env.GROQ_API_KEY ? '✅ Groq API key loaded' : '❌ Missing Groq API key')"
```

### 🔐 SSH Configuration Test (if using SSH)
```bash
# Test Git configuration
git config --list | grep user

# Test SSH connections (if using multiple accounts)
ssh -T git@github.com-account1
ssh -T git@github.com-account2
```

## 🔧 Troubleshooting

### Common Issues & Solutions

| Issue | Symptoms | Solution |
|-------|----------|----------|
| **Missing API Key** | `401 Unauthorized` errors | Check `.env` file and API key validity |
| **Node Version** | Module compatibility errors | Upgrade to Node.js 18+ |
| **Package Errors** | `Module not found` | Run `npm install` or `npm ci` |
| **SSH Issues** | `Permission denied (publickey)` | Check SSH key configuration |
| **LangSmith Connection** | Tracing not working | Verify LangSmith API key and project name |

### 🐛 Debug Mode
```bash
# Enable debug logging
DEBUG=langchain* node index.js

# Enable LangSmith debugging
LANGSMITH_TRACING=true DEBUG=langsmith* node index.js
```

### 📞 Getting Help
- **GitHub Issues**: https://github.com/sprajapat770/FirstAIAgent/issues
- **LangChain Docs**: https://docs.langchain.com/
- **Groq Documentation**: https://console.groq.com/docs
- **LangSmith Support**: https://docs.smith.langchain.com/

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Setup
```bash
# Clone your fork
git clone git@github.com:yourusername/FirstAIAgent.git
cd FirstAIAgent

# Install dependencies
npm install

# Run tests
npm test

# Start development server
npm run dev
```

---

**📝 License**: MIT License - see LICENSE file for details

**🔗 Links**:
- [Repository](https://github.com/sprajapat770/FirstAIAgent)
- [Issues](https://github.com/sprajapat770/FirstAIAgent/issues)
- [Wiki](https://github.com/sprajapat770/FirstAIAgent/wiki)

**⭐ Star this repository if you find it helpful!**

# 🚀 Render Services API

A small **Node.js + Express** server that connects to the **Render API** and returns all the services in my Render account as JSON.

## ✨ What it does

| Method | Endpoint    | Description                                      |
|--------|-------------|--------------------------------------------------|
| GET    | `/services` | Returns the list of services in my Render account |

**Example response:**
```json
[
  {
    "id": "srv-xxxxxxxxxxxx",
    "name": "ToDo-list-minimal-API",
    "type": "web_service",
    "url": "https://todo-list-minimal-api.onrender.com",
    "suspended": "not_suspended"
  }
]
```

## 🛠️ Tech Stack
- Node.js
- Express
- Render REST API
- dotenv

## ⚙️ Run Locally

1. Clone the repo and install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the root folder:
   ```
   RENDER_API_KEY=your_render_api_key
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open http://localhost:3000/services 🎉

## 🔐 Security
The API key is stored in environment variables and is **never** committed to GitHub (`.env` is in `.gitignore`).

## 🌐 Live Demo
👉 [https://YOUR-APP-NAME.onrender.com/services](https://YOUR-APP-NAME.onrender.com/services)

---
Made with 💜 by **Leah Shtul**

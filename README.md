
# 📝 Real-Time Collaborative Document Editor

A simple, real-time collaborative text editor built with **React** and **Node.js**, powered by **Socket.IO** for instant updates across multiple connected users. This app allows you to collaboratively edit a plain-text document live in your browser.

---

## 🚀 Features

- Real-time collaborative editing
- One shared document synced across all connected clients
- React front-end with intuitive text area
- Node.js and Socket.IO back-end for fast, bi-directional updates
- Minimal and clean architecture, easy to extend

---

## 🛠️ Tech Stack

- **Frontend:**
  - React (with hooks)
  - Socket.IO client
- **Backend:**
  - Node.js
  - Express
  - Socket.IO

---

## 📂 Project Structure

```
realtime-doc-editor/
│
├── backend/
│   └── server.js
│
├── frontend/
│   ├── public/
│   │   └── index.html                # React root mount
│   │
│   ├── src/
│   │   ├── App.js                    # Collaborative editor component
│   │   └── index.js                  # React entry point
│   │
│   └── package.json                  # frontend dependencies
│
└── README.md
```

---

## 📦 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/realtime-doc-editor.git
cd realtime-doc-editor
```

### 2️⃣ Install backend dependencies

```bash
cd backend
npm init
npm install
```

### 3️⃣ Install frontend dependencies

```bash
cd ../frontend
npm init
npm install
```

---

## 🚀 Running the App

Use **two terminals** in parallel:

**Backend (port 4000):**

```bash
cd backend
node server.js
```

**Frontend (port 3000):**

```bash
cd frontend
npm start
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser. The React app will connect to the back-end via Socket.IO to synchronize document edits in real-time.

---

## 💡 Possible Improvements

- Multi-document support
- User authentication
- Rich text editing with Quill.js or Slate.js
- Persistent storage (e.g., MongoDB)
- Operational transforms for advanced conflict resolution
- Better styling and theming

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Happy collaborating! 👩‍💻👨‍💻**

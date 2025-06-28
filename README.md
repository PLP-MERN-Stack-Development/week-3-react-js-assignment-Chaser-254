# 📝 Task Manager Application

A responsive and modern Task Manager built with **React (Vite)**, **Tailwind CSS**, and a **Node.js + Express** backend. It supports task creation, completion tracking, local persistence, theming, and API data fetching.

---

## 📁 Project Structure

```
WEEK-3-REACT-JS-ASSIGNMENT/
├── backend/          # Node.js + Express backend
├── src/              # React frontend with Vite + Tailwind
```

### 🔧 Frontend Features
- Vite + React + Tailwind CSS
- Component-based architecture
- React Router for navigation
- State management using Hooks
- Theme management with Context API
- LocalStorage with custom hook
- API integration with JSONPlaceholder
- Responsive design (Mobile, Tablet, Desktop)
- Light/Dark mode toggle

### 🧠 Backend Features
- REST API using Express
- MongoDB models with Mongoose
- Routes to manage tasks (GET, POST, DELETE)

---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js
- npm or yarn
- MongoDB

---

## 🔌 Backend Setup

```bash
cd backend
npm install
# Create a .env file with your MongoDB URI
node server.js
```

### 📁 .env
```
MONGO_URI=mongodb://localhost:27017/taskmanager
PORT=5000
```

---

## 💻 Frontend Setup

```bash
cd ..
npm install
npm run dev
```

---

## 📚 Folder Overview

- `src/components/` – Reusable UI components (Button, Card, Navbar)
- `src/context/` – ThemeContext using React Context API
- `src/hooks/` – Custom React hooks (e.g., useLocalStorage)
- `src/pages/` – Route-based page components
- `src/api/` – API utility functions
- `backend/` – Node.js Express backend with MongoDB

---

## 🛠 Technologies Used

- React + Vite
- Tailwind CSS
- React Router
- Context API
- MongoDB + Mongoose
- Express.js
- JSONPlaceholder API

---

## 👤 Author

**Dream Chaser**  
Built with ❤️ for learning and productivity

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

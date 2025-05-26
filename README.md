# DevByRico’s Todo App

A clean, minimal and responsive Todo application built with React and Zustand for global state management.  
Track your tasks by adding, toggling complete/incomplete, and removing them.  

---

## 🚀 Live Demo

Check it out here 👉 [https://todo-rn.netlify.app](https://todo-rn.netlify.app)

---

## ⚙️ Features

- **Add Tasks**: Quickly add new todos via a simple form.
- **Toggle Complete**: Mark tasks as done/undone with a checkbox.
- **Remove Tasks**: Delete tasks you no longer need.
- **Global State**: Powered by Zustand—no prop drilling.
- **Responsive Design**: Works beautifully from mobile (320px) to desktop.
- **Modern UI**: Soft shadows, smooth hover effects and clean typography.

---

## 📂 Project Structure

```text
ricardo-todo-zustand/
├── public/
│   └── index.html          # Main HTML file
└── src/
    ├── components/
    │   ├── AddTodo.jsx     # Form to add a new task
    │   └── TodoList.jsx    # Renders list of todos
    ├── store/
    │   └── todoStore.js    # Zustand store with add/toggle/remove logic
    ├── App.jsx             # Main layout and component imports
    ├── App.css             # Component-level CSS
    ├── index.js            # ReactDOM entry point
    └── index.css           # Global resets & base styles
├── package.json            # Project metadata & scripts
└── README.md               # Project documentation

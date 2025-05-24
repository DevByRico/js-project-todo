
import React from "react";
import { useTodoStore } from "../store/todoStore";

export const TodoList = () => {
  const { todos, toggleTodo, removeTodo } = useTodoStore();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
            {todo.text}
          </span>
          <button onClick={() => removeTodo(todo.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

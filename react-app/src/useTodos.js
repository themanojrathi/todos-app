import { useState } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      isCompleted: false
    },
    {
      id: 2,
      text: "Learn Redux",
      isCompleted: false
    },
    {
      id: 3,
      text: "Learn React Native",
      isCompleted: false
    }
  ]);

  function updateTodo(todo) {
    setTodos(
      todos.map(t => {
        if (t.id === todo.id) {
          return todo;
        }
        return t;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(t => t.id !== id));
  }

  function addTodo(text) {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text,
        isCompleted: false
      }
    ]);
  }

  return {
    todos,
    addTodo,
    updateTodo,
    removeTodo
  }
}
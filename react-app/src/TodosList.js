import { createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import styles from "./todosList.module.css";

export default function TodosList({ todos, updateTodo, removeTodo }) {

  return (
    <ul className={styles["todos-list"]}>
      {
        todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        ))
      }
    </ul>
  )
}

export function Todo({ todo, removeTodo, updateTodo }) {
  const todoRef = createRef();

  function toggleTodo() {
    updateTodo({
      ...todo,
      isCompleted: !todo.isCompleted
    });
  }

  return (
    <li
      ref={todoRef}
      className={`${styles.todo} ${todo.isCompleted && styles["todo-completed"]}`}
      onClick={toggleTodo}
    >
      <span
        onClick={e => {
          e.stopPropagation();
          // fadeout animation
          todoRef.current.classList.add(styles["todo-fadeout"]);
          // wait for fadeout animation to finish
          setTimeout(() => removeTodo(todo.id), 200);
        }}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </span>
      {todo.text}
    </li>
  )
}
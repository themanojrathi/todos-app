import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import TodosList from "./TodosList";
import styles from "./app.module.css";
import useTodos from "./useTodos";

export default function App() {
  const { todos, addTodo, updateTodo, removeTodo } = useTodos();
  const [hideInput, setHideInput] = useState(false);

  function toggleInputBox() {
    setHideInput(!hideInput);
  }

  return (
    <div className={styles.app}>
      <h1>
        Todo List
        <FontAwesomeIcon
          icon={faPlus}
          onClick={toggleInputBox}
        />
      </h1>
      <input
        onKeyUp={e => {
          if (e.key === "Enter") {
            addTodo(e.target.value);
            e.target.value = "";
          }
        }}
        placeholder="Add Todo"
        hidden={hideInput}
      />
      <TodosList
        todos={todos}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />
    </div>
  )
}
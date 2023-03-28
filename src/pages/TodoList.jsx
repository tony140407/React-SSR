import { useRef, useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const newTodo = useRef(null);
  return (
    <div>
      <input type="text" ref={newTodo} />
      <button
        onClick={() => {
          setTodos([...todos, newTodo.current]);
          setNewTodo("");
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;

import { useState } from "react";
import { getTodos } from "./databases/todos";

function App() {
  const [todos, setTodos] = useState(getTodos());

  return (
    <>
      <h1>
        {todos.map((todo) => {
          return todo.title;
        })}
      </h1>
    </>
  );
}

export default App;

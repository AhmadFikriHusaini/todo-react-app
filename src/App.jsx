import { useState } from "react";
import { deleteTodo, getTodos, setTodoStatus } from "./databases/todos";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState(getTodos());

  const handleStatus = (id) => {
    setTodos(setTodoStatus(id));
  };

  const handleDelete = (id) => {
    setTodos(deleteTodo(id));
  };

  return (
    <>
      <Todos
        todos={todos}
        handleStatus={handleStatus}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;

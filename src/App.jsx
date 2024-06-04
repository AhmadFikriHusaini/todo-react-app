import { useState } from "react";
import { getTodos, setTodoStatus } from "./databases/todos";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState(getTodos());

  const handleStatus = (id) => {
    console.log(id);
    // setTodos(setTodoStatus(id));
  };
  return (
    <>
      <Todos todos={todos} handleStatus={handleStatus} />
    </>
  );
}

export default App;

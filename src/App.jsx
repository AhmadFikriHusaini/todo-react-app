import { useState } from "react";
import { getTodos } from "./databases/todos";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState(getTodos());

  return (
    <>
      <Todos todos={todos} />
    </>
  );
}

export default App;

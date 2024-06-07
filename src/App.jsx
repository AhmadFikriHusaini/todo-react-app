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
    <div className="h-screen w-2/3 m-auto">
      <div className="card m-12 items-center">
        <p className="text-3xl font-bold m-6">TODO APP</p>
        <Todos todos={todos} handleStatus={handleStatus} />
      </div>
    </div>
  );
}

export default App;

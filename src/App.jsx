import { useState } from "react";
import {
  addTodo,
  deleteTodo,
  getTodos,
  setTodoStatus,
} from "./databases/todos";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState(getTodos());

  const handleStatus = (id) => {
    setTodos(setTodoStatus(id));
  };

  const handleDelete = (id) => {
    setTodos(deleteTodo(id));
  };

  const handleAdd = (title) => {
    setTodos(addTodo(title));
  };

  return (
    <div className="h-screen w-2/3 m-auto">
      <div className="card m-12 items-center">
        <p className="text-3xl font-bold m-6">Todo App</p>
        <TodoForm handleAdd={handleAdd} />
        <Todos
          todos={todos}
          handleStatus={handleStatus}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;

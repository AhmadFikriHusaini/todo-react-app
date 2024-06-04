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
    <>
      <TodoForm handleAdd={handleAdd} />
      <Todos
        todos={todos}
        handleStatus={handleStatus}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;

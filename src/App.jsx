import { useState } from "react";
import {
  addTodo,
  deleteTodo,
  getTodos,
  setTodoStatus,
} from "./databases/todos";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import { TodoContext } from "./components/TodoContext";

// export const todoContext = createContext();

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

  // useEffect(() => {
  //   setTodos(getTodos());
  // }, [handleAdd, handleDelete, handleStatus]);

  return (
    <TodoContext.Provider value={{ handleAdd, handleDelete, handleStatus }}>
      <div className="m-auto w-2/4">
        <div className="card m-12 items-center border">
          <p className="text-3xl font-bold m-6">Todo App</p>
          <TodoForm />
          <Todos todos={todos} />
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;

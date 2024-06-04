import TodoItem from "./TodoItem";

const Todos = ({ todos, handleStatus, handleDelete }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <TodoItem
            item={todo}
            key={todo.id}
            handleStatus={handleStatus}
            handleDelete={handleDelete}
          />
        );
      })}
    </>
  );
};

export default Todos;

import TodoItem from "./TodoItem";

const Todos = ({ todos, handleStatus }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <TodoItem item={todo} key={todo.id} handleStatus={handleStatus} />
        );
      })}
    </>
  );
};

export default Todos;

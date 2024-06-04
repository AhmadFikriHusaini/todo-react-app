import TodoItem from "./TodoItem";

const Todos = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => {
        return <TodoItem item={todo} key={todo.id} />;
      })}
    </>
  );
};

export default Todos;

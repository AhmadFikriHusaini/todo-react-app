const TodoItem = ({ item, handleStatus }) => {
  return (
    <>
      <div className="flex">
        {item.completed ? (
          <p className="line-through text-sm">{item.title}</p>
        ) : (
          <p className="text-sm">{item.title}</p>
        )}
      </div>
    </>
  );
};

export default TodoItem;

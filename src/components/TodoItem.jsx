const TodoItem = ({ item }) => {
  return (
    <>
      <div>
        {item.completed ? (
          <p className="line-through">{item.title}</p>
        ) : (
          <p>{item.title}</p>
        )}
      </div>
    </>
  );
};

export default TodoItem;

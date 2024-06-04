const TodoItem = ({ item, handleStatus }) => {
  return (
    <>
      <div className="flex">
        {item.completed ? (
          <p className="line-through">{item.title}</p>
        ) : (
          <p>{item.title}</p>
        )}
        <button>Delete</button>
        <button onClick={() => handleStatus(item.id)}>Check</button>
      </div>
    </>
  );
};

export default TodoItem;

const TodoItem = ({ item, handleStatus, handleDelete }) => {
  return (
    <>
      <div className="flex">
        {item.completed ? (
          <p className="line-through">{item.title}</p>
        ) : (
          <p>{item.title}</p>
        )}
        <button
          onClick={() => {
            handleDelete(item.id);
          }}
        >
          Delete
        </button>
        <button onClick={() => handleStatus(item.id)}>Check</button>
      </div>
    </>
  );
};

export default TodoItem;

import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

const TodoItem = ({ item }) => {
  const [hidden, setHidden] = useState(true);

  const context = useContext(TodoContext);

  return (
    <>
      <div
        className={`flex cursor-pointer items-center ${
          hidden ? `justify-center` : `justify-between`
        } my-2 min-h-14`}
        onMouseEnter={() => {
          setHidden(false);
        }}
        onMouseLeave={() => {
          setHidden(true);
        }}
      >
        {item.completed ? (
          <p className="text-base line-through">{item.title}</p>
        ) : (
          <p className="text-base">{item.title}</p>
        )}
        {hidden ? null : (
          <div>
            {item.completed ? (
              <button
                className="btn btn-success mx-2 cursor-pointer"
                onClick={() => context.handleStatus(item.id)}
              >
                Batal
              </button>
            ) : (
              <button
                className="btn btn-outline btn-success mx-2 cursor-pointer"
                onClick={() => {
                  context.handleStatus(item.id);
                }}
              >
                Selesai
              </button>
            )}
            <button
              className="btn btn-error p-4 cursor-pointer"
              onClick={() => {
                context.handleDelete(item.id);
              }}
            >
              X
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TodoItem;

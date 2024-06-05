import { useState } from "react";

const TodoItem = ({ item, handleStatus, handleDelete }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <div
        className={`flex items-center ${
          hidden ? `justify-center` : `justify-between`
        } w-1/3 my-2 min-h-14`}
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
                onClick={() => handleStatus(item.id)}
              >
                Check
              </button>
            ) : (
              <button
                className="btn btn-outline btn-success mx-2 cursor-pointer"
                onClick={() => {
                  handleStatus(item.id);
                }}
              >
                Check
              </button>
            )}
            <button
              className="btn btn-error p-4 cursor-pointer"
              onClick={() => {
                handleDelete(item.id);
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

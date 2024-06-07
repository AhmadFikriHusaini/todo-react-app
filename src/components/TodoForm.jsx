import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

const TodoForm = () => {
  const [title, setTitle] = useState("");

  const context = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    context.handleAdd(title);
    setTitle("");
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          className="input input-bordered w-80 m-2"
          required
          type="text"
          value={title}
          placeholder="Add Your To-Do"
          onChange={(e) => {
            handleTitle(e);
          }}
        />
        <button className="btn btn-secondary" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;

import { useState } from "react";

const TodoForm = ({ handleAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd(title);
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
          required
          type="text"
          placeholder="Add Your To-Do"
          onChange={(e) => {
            handleTitle(e);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default TodoForm;

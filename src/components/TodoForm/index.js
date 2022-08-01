import "./index.css"
import { useState } from "react";

export const TodoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleChange = ({ currentTarget }) => {
    setUserInput(currentTarget.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="Todo__form"
    >
      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Your task"
        className="Todo__input"
      />

      <button className="Todo__form-button">
        Add
      </button>
    </form>
  );
};

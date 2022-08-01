import "./index.css"

export const Todo = ({ todo, taskHandle, removeTask }) => {
  return (
    <>
      <li 
        key={todo.id}
        className="Todo__item"
      >
        <p
          onClick={() => taskHandle(todo.id)}
          className={`Todo__item-title ${todo.complete ? "complete" : "uncomplete"}`}
        >
          {todo.task}
        </p>

        <button 
          onClick={() => removeTask(todo.id)}
          className="Todo__item-button"
        >
          Remove
        </button>
      </li>
    </>
  );
};

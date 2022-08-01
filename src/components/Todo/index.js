import "./index.css"
// import { TodoForm } from "../TodoForm";

export const Todo = ({ todo, taskHandle, removeTask }) => {
  return (
    <>
    {/* <ul> */}
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

      {/* <li>
        <TodoForm />
      </li>
    </ul> */}
    </>
  );
};

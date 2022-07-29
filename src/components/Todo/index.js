export const Todo = ({ todo, taskHandle, removeTask }) => {
  return (
    <li key={todo.id}>
      <p
        onClick={() => taskHandle(todo.id)}
        className={todo.complete ? "complete" : "uncomplete"}
      >
        {todo.task}
      </p>

      <button onClick={() => removeTask(todo.id)}>X</button>
    </li>
  );
};

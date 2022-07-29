import { TodoForm } from "./components/TodoForm";
import { Todo } from "./components/Todo";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false
      };

      setTodos([...todos, newTask]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { todo }
      )
    ]);
  };

  return (
    <div className="App">
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              taskHandle={handleToggle}
              removeTask={removeTask}
            />
          );
        })}

        <li>
          <TodoForm addTask={addTask} />
        </li>
      </ul>
    </div>
  );
}

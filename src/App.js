import "./index.css";
import { TodoForm } from "./components/TodoForm";
import { Todo } from "./components/Todo";
import { useEffect, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('localTasks')) {
      const localStorageTodos = JSON.parse(localStorage.getItem('localTasks'))
      setTodos(localStorageTodos)
    }
  }, [])

  const addTask = (userInput) => {
    if (userInput) {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false
      };

      setTodos([...todos, newTask]);
      localStorage.setItem('localTasks', JSON.stringify([ ...todos, newTask ]))
    }
  };

  const removeTask = (id) => {
    const deleted = todos.filter((todo) => todo.id !== id)
    setTodos(deleted)
    localStorage.setItem('localTasks', JSON.stringify(deleted))
  };

  const handleToggle = (id) => {
    const isComplete = todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
    )
    setTodos(isComplete)
    localStorage.setItem('localTasks', JSON.stringify(isComplete))
  };

  return (
    <div className="Todo">
      <ul className="Todo__list">
        {/* <li> */}
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
        {/* </li> */}

        <li className="Todo__item">
          <TodoForm addTask={addTask} />
        </li>
      </ul>
    </div>
  );
}

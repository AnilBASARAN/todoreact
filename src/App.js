
import './App.css';
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import * as TodoService from "./services/todo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [creating, setCreating] = useState(false);
  const [createText, setCreateText] = useState("");

  const fetchTodos = async () => {
    const response = await TodoService.getAllTodos();
    setTodos(await response.json());
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="flex items-start justify-center min-h-screen bg-gradient-to-br from-violet-600 to-orange-400">
      <div className="flex flex-col w-full max-w-sm p-4 mt-40 rounded-md bg-stone-100">
        {todos.map((todo) => (
          <TodoItem fetch={fetchTodos} todo={todo} key={todo.id} />
        ))}
        {creating ? (
          <form
            className="flex flex-col"
            onSubmit={async (e) => {
              e.preventDefault();
              await TodoService.createTodo(createText);
              setCreateText("");
              setCreating(false);
              fetchTodos();
            }}
          >
            <input
              className="p-3 my-2 bg-white border border-gray-200 rounded-md text-stone-500"
              placeholder="enter your todo"
              value={createText}
              onChange={(e) => setCreateText(e.target.value)}
            />
            <button className="py-1 mt-4 text-white rounded-md bg-sky-400 hover:bg-sky-500">
              <i className="mr-2 text-xl fa-solid fa-floppy-disk"></i>
              Save
            </button>
          </form>
        ) : (
          <button
            className="py-1 mt-4 rounded-md text-stone-400 hover:bg-stone-200"
            onClick={() => setCreating(true)}
          >
            <i className="mr-2 text-xl fa-solid fa-plus"></i>
            Add Todo
          </button>
        )}
      </div>
    </div>
  );
};

export default App;

export const getAllTodos = () =>
  fetch(
    "https://api.react-formula.com/learning-api/demos/todo-list-2/todos"
  );

export const createTodo = (text) =>
  fetch(
    "https://api.react-formula.com/learning-api/demos/todo-list-2/todos",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    }
  );


export const updateTodo = (todoId,body) =>
  fetch(
    `https://api.react-formula.com/learning-api/demos/todo-list-2/todos/${todoId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

export const deleteTodo = (todoId) =>
  fetch(
    `https://api.react-formula.com/learning-api/demos/todo-list-2/todos/${todoId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    }
  );


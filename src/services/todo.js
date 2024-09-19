export const getAllTodos = () =>
  
    fetch("https://api.react-formula.com/learning-api/demos/todo-list-1/todos");
   
   
   export const addTodo =(text)=> {
     fetch("https://api.react-formula.com/learning-api/demos/todo-list-1/todos", {
     method: "POST",
     headers: {"Content-Type": "application/json"},
     body: JSON.stringify({ text })
   });
   }
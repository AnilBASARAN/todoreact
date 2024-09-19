
import './App.css';
import {useState,useEffect} from "react";
import TodoItem from "./TodoItem";
import * as TodoService from "./services/todo";


const App = () => {

  const [todos,setTodos] = useState([]);

  const fetchTodos = async ()=>{
  
    const response = await TodoService.getAllTodos();

  
    setTodos(await response.json());
    }

  useEffect(()=>{
    fetchTodos();
  },[]);

  const allTodos = todos.map(todo=> <TodoItem todo={todo} key={todo.id} />)
  
  return <div className="bg-gradient-to-br min-h-screen from-blue-600 to-green-300 flex justify-center items-start ">
   
    <div className="bg-white p-2 w-full max-w-sm flex flex-col justify-center  m-20" >

      {allTodos}
      <button className="hover:bg-stone-200 text-stone-500 rounded-lg p-1 m-1" ><i className="fa-solid pr-1 fa-plus text-stone-600"></i>Add Button</button>
    </div>
  </div>
};

export default App;

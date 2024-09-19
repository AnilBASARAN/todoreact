
import './App.css';
import {useState,useEffect} from "react";
import TodoItem from "./TodoItem";
import * as TodoService from "./services/todo";


const App = () => {

  const [todos,setTodos] = useState([]);
  const [isCreating,setIsCreating]= useState(false);
  const [creatingText,setCreatingText] = useState("");

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

      {
        isCreating &&
        (

        <form
          className=" flex flex-col"
          onSubmit={ async(e)=>{
            e.preventDefault();
           await TodoService.addTodo(creatingText);
            setIsCreating(false);
            setCreatingText("");
            fetchTodos();
          }}
          >
    
      <input
        value={creatingText}
        onChange={(e)=>{
          setCreatingText(e.target.value);
        }}
        placeholder ="enter to do"
        type="text"
        className="text-blue-600 my-2 p-1 bg-stone-200 w-full rounded-lg"/>
    
    <button className="w-full  bg-blue-400 p-2 mt-1 rounded-lg">Save</button>
        </form>
        ) 
      }

      
      <button
        onClick={()=>setIsCreating(true)}
        className="hover:bg-stone-200 text-stone-500 rounded-lg p-1 m-1" ><i className="fa-solid pr-1 fa-plus text-stone-600"></i>Add Button</button>
    </div>
  </div>
};

export default App;

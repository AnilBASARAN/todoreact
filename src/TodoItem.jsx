import clsx from "clsx";
import {useState} from "react";
import * as TodoService from "./services/todo";

const TodoItem = (props) => {
  
  const { todo,fetch } = props;
  const [isEdit,setEdit] = useState(true);
  const [editText,setEditText] = useState(todo.text);
 
  return (
    <div className="p-3 my-2 bg-white rounded-md text-stone-500 flex justify-between">
      {

        isEdit ? ( <div className="leftSide" >
          <button
            onClick={async()=>{
              await TodoService.updateTodo(todo.id,
                                          {
               "text": editText,
              "complete":!todo.complete
             });
              fetch();
            }}
            >
          <i className={clsx("mr-2 text-xl fa-regular " , todo.complete ? "text-emerald-600 fa-circle-check" : "text-stone-300 fa-circle")}></i>
          </button>
     
 {todo.text}
   </div>)
        :
        (<form
           onSubmit={ async(e)=>{
             e.preventDefault();
             
             await TodoService.updateTodo(todo.id,
                                          {
               "text": editText,
              "complete":todo.complete
             });
              setEdit(true);
             
             fetch();
             
           }}
           className="w-full flex">
        <input
          onChange={(e) => setEditText(e.target.value)}
      
          className="text-blue-400 flex-1 border border-blue-100 rounded-lg"
          value={editText}
          type="text" 
          />
          <button
         
         className="p-1 m-1 bg-green-400 rounded-lg text-white">save</button>
        </form>)
        
      }
      {isEdit ? (<div className="rightSide ">
      <button
        onClick={async()=>{
          await TodoService.deleteTodo(todo.id)
          fetch();
        }}
        className="p-1 m-1 bg-red-400 rounded-lg text-white">delete</button>
      <button
        onClick={()=>{
           setEdit(false);
         }}
        className="p-1 m-1 bg-blue-400 rounded-lg text-white">edit</button>
      </div>)
      :
      (null)}
    </div>
  );
};

export default TodoItem;

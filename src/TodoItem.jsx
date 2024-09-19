import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle ,faCircleCheck} from '@fortawesome/free-solid-svg-icons';

const TodoItem = (props)=> {

    const {todo} = props;
  
    return(
  
      <div className=" m-1 bg-stone-200 border-2 border-stone-200 text-stone-600  rounded-lg flex" >
        <div className="flex items-center">
          {
          todo.complete ?
          <FontAwesomeIcon icon={faCircleCheck} />
          :
          <FontAwesomeIcon icon={faCircle} className='text-xl mr-1 text-blue-200'/>
     
          }
        </div>
        
        <div>{todo.text}</div>
  
        
      </div>
      
    );
    
  };
  
  export default TodoItem;
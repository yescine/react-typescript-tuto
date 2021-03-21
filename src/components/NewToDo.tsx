import React,{useRef} from 'react'

type NewToDoProps = {
   toDoAdd:(toDoTexy:string)=>void;
}


const NewToDo:React.FC <NewToDoProps> = props => {
   const {toDoAdd} = props

   const textInput = useRef<HTMLInputElement>(null)
   const toDoHundle = (evt:React.FormEvent) =>{
      evt.preventDefault();
      const enteredText = textInput.current!.value
      toDoAdd(enteredText)
   }

   return (
      <form onSubmit={toDoHundle}>
         <div className="form-control">
         <label htmlFor="todo-text">ToDoText</label>
         <input type="text" id="todo-text" ref={textInput} />
         </div>
         <div>
            <button type="submit">ADD TODO</button>
         </div>

         
      </form>
   )
}

export default NewToDo

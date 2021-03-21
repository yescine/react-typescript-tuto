import React from 'react'
export type toDoElemnt ={id:string, text:string}
interface ToDolistProps{
   items:toDoElemnt[],
   onDeleteItem:(id:string)=>void
}
const ToDoList:React.FC<ToDolistProps> = (props) => {
   const {items,onDeleteItem} = props
   return (
      <div>
         <ul>
         {items.map(elem=>{
            return (
                  <li key={elem.id} >
                     <span style={{padding:'0.5rem'}}> {elem.text}</span>
                     <button onClick={onDeleteItem.bind(null,elem.id)} >X</button>
                  </li>
            )
         })}
         </ul>
      </div>
   )
}

export default ToDoList

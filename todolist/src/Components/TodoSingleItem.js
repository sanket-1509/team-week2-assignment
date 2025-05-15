import React, { useContext } from 'react'
import './TodoSingleItem.css'
import TodoContext from './TodoContext'

const TodoSingleItem = ({task,index}) => {
  const {handleEdit,handleDelete,handleStatus}=useContext(TodoContext)
  return (
    <>
    <div className="todoitem">
        <div className= {`todotext ${task.state==="pending"?"":"completed"}`}> {task.taskInfo}</div>
        <button className={`edit ${task.state==="pending"?"":"disabled"}`} onClick={()=>{handleEdit(index)}}>Edit</button>
        <button className='delete' onClick={()=>{handleDelete(index)}}>Delete</button>
        <button className='status' onClick={()=>{handleStatus(index)}}>{task.state==="pending"?"Mark Completed":"Mark InComplete" }</button>
        </div>
    </>

  )
}

export default TodoSingleItem
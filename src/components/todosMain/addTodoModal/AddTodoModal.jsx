import React from 'react'
import Header from '../../header/Header'
import './_addTodoModal.scss'

const AddTodoModal = ({isEdit,handleChange}) => {

  return (
    <div className='addTodoModal'>
        <div className='addTodoModal__header'>
            <Header title={isEdit ? `Edit Task` : `Add Task`} fontSize={`18px`} textAlign={`center`} />
        </div>
        <div className='addTodoModal__taskTitle'>
            <label htmlFor='taskTitleId'>
                <Header title={`Task Title`} fontSize={`16px`} />
            </label>
            <input className='addTodoModal__taskTitle__input' id='taskTitleId' onChange={e => handleChange(e)} />
        </div>
    </div>
  )
}

export default AddTodoModal
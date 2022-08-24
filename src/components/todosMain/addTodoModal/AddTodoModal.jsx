import React from 'react'
import Header from '../../header/Header'
import './_addTodoModal.scss'

const AddTodoModal = ({isEdit,
  handleTitleChange,
  handleDescChange,
  handleTaskChange}) => {

  let statusOption = [{
    label:'To Do',
    value:'To Do'
  },{
    label:'In Progress',
    value:'In Progress'
  },{
    label:'To Be Reviewed',
    value:'To Be Reviewed'
  }]

  return (
    <div className='addTodoModal'>
        <div className='addTodoModal__header'>
            <Header title={isEdit ? `Edit Task` : `Add Task`} fontSize={`18px`} textAlign={`center`} />
        </div>
        <div className='addTodoModal__taskTitle'>
            <label htmlFor='taskTitleId'>
                <Header title={`Task Title *`} fontSize={`16px`} />
            </label>
            <input placeholder='Task Title...' className='addTodoModal__taskTitle__input' id='taskTitleId' onChange={e => handleTitleChange(e)} />
        </div>
        <div className='addTodoModal__taskDesc'>
            <label htmlFor='taskDescId'>
                <Header title={`Task Description *`} fontSize={`16px`} />
            </label>
            <input placeholder='Task Description...' className='addTodoModal__taskDesc__input' id='taskDescId' onChange={e => handleDescChange(e)} />
        </div>
        <div className='addTodoModal__taskStatus'>
          <label>
              <Header title={`Task Status *`} fontSize={`16px`} />
          </label>
          <select onChange={handleTaskChange}>
            <option>{`Select`}</option>
            {
              statusOption.map((item) => (
                <option>
                  {item.label}
                </option>
              ))
            }
          </select>
        </div>
    </div>
  )
}

export default AddTodoModal
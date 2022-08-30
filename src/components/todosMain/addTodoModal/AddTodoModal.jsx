import React from 'react'
import Header from '../../header/Header'
import './_addTodoModal.scss'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWindowClose} from '@fortawesome/fontawesome-free-solid'
import moment from 'moment';

const AddTodoModal = ({isEdit, closeModal}) => {

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

  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const [focusedInput, setFocusedInput] = React.useState();
  const [taskTitle, setTaskTitle] = React.useState('')
  const [taskDesc, setTaskDesc] = React.useState('')
  const [taskStatus, setTaskStatus] = React.useState('')
  const [taskTags, setTaskTags] = React.useState('')
  const [taskLinks, setTaskLinks] = React.useState('')
    
  const handleSubmit = () => {
    console.log('startDate ==>',moment(startDate).format('DD-MMM-YYYY hh:mm:ss'),'endDate ===>',moment(endDate).format('DD-MMM-YYYY hh:mm:ss'))
    console.log('focusedInput ==>',focusedInput,'taskTitle ===>',taskTitle)
    console.log('taskDesc ==>',taskDesc,'taskStatus ===>',taskStatus)
    console.log('taskTags ==>',taskTags,'taskLinks ===>',taskLinks)
  }

  return (
    <div className='addTodoModal'>
        <div className='addTodoModal__header'>
            <Header title={isEdit ? `Edit Task` : `Add Task`} fontSize={`18px`} textAlign={`center`} />
            <FontAwesomeIcon style={{cursor:"pointer"}} icon={faWindowClose} color='gray' onClick={closeModal} />
        </div>
        <div className='addTodoModal__taskTitle'>
            <label htmlFor='taskTitleId'>
                <Header title={`Task Title *`} fontSize={`16px`} />
            </label>
            <input placeholder='Task Title...' className='addTodoModal__taskTitle__input' id='taskTitleId' value={taskTitle} onChange={e => setTaskTitle(e.target.value)} />
        </div>
        <div className='addTodoModal__taskDesc'>
            <label htmlFor='taskDescId'>
                <Header title={`Task Description *`} fontSize={`16px`} />
            </label>
            <input placeholder='Task Description...' className='addTodoModal__taskDesc__input' id='taskDescId' value={taskDesc} onChange={e => setTaskDesc(e.target.value)} />
        </div>
        <div className='addTodoModal__taskDuration'>
            <label htmlFor='taskDurationId'>
                <Header title={`Task Duration *`} fontSize={`16px`} />
            </label>
            <div className='addTodoModal__taskDuration__datePicker'>
              <DateRangePicker
                startDate={startDate}
                startDateId="start-date"
                endDate={endDate}
                endDateId="end-date"
                onDatesChange={({ startDate, endDate }) => {
                  setStartDate(startDate);
                  setEndDate(endDate);
                }}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
              />
            </div>
        </div>
        <div className='addTodoModal__taskStatus'>
          <label>
              <Header title={`Task Status *`} fontSize={`16px`} />
          </label>
          <select onChange={e => setTaskStatus(e.target.value)} value={taskStatus}>
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
        <div className='addTodoModal__taskLinks'>
            <label htmlFor='taskLinkId'>
                <Header title={`Task Link`} fontSize={`16px`} />
            </label>
            <input placeholder='Task Link...' className='addTodoModal__taskLink__input' id='taskLinkId' value={taskLinks} onChange={e => setTaskLinks(e.target.value)} />
        </div>
        <div className='addTodoModal__taskTags'>
            <label htmlFor='taskTagsId'>
                <Header title={`Tags (comma seperated)`} fontSize={`16px`} />
            </label>
            <input placeholder='Tags...' className='addTodoModal__taskTags__input' id='taskTagsId' value={taskTags} onChange={e => setTaskTags(e.target.value)} />
        </div>
        <div className='addTodoModal__taskSubmit'>
            <button onClick={handleSubmit}>
              {`Submit`}
            </button>
        </div>
    </div>
  )
}

export default AddTodoModal
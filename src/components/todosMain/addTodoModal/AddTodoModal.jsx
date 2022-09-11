import React from 'react'
import Header from '../../header/Header'
import './_addTodoModal.scss'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWindowClose} from '@fortawesome/fontawesome-free-solid'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { createTask,updateTask } from '../../../actions/task.js';

const AddTodoModal = ({isEdit, closeModal,updatedTask}) => {

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

  const dispatch = useDispatch()
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const [focusedInput, setFocusedInput] = React.useState();
  const [taskTitle, setTaskTitle] = React.useState('')
  const [taskDesc, setTaskDesc] = React.useState('')
  const [taskStatus, setTaskStatus] = React.useState('')
  const [taskTags, setTaskTags] = React.useState('')
  const [taskLinks, setTaskLinks] = React.useState('')
  const [validationMessage, setValidationMessage] = React.useState('')
  let validationFlag = 0
    
  const handleSubmit = async () => {

    if(startDate == null || endDate == null ||
      taskTitle === '' || taskDesc === '' || taskStatus === ''){
        validationFlag = 1
      } else{
        validationFlag = 0
      }

      if(validationFlag === 1){
        setValidationMessage('Please fill all mandatory fields')
        setTimeout(() => {
          setValidationMessage('')
        },2500)
      }else{
        updatedTask && updatedTask.length > 0 ? 
          await dispatch(updateTask({
            id:updatedTask[0]._id,
            startDate:moment(startDate).format('DD-MMM-YYYY hh:mm:ss'),
            endDate:moment(endDate).format('DD-MMM-YYYY hh:mm:ss'),
            title:taskTitle,
            desc:taskDesc,
            status:taskStatus,
            tags:taskTags,
            links:taskLinks
          }))
        :
          await dispatch(createTask({
            startDate:moment(startDate).format('DD-MMM-YYYY hh:mm:ss'),
            endDate:moment(endDate).format('DD-MMM-YYYY hh:mm:ss'),
            title:taskTitle,
            desc:taskDesc,
            status:taskStatus,
            tags:taskTags,
            links:taskLinks
          }))
        setTaskTitle('')
        setTaskDesc('')
        setTaskStatus('')
        setTaskLinks('')
        setTaskTags('')
        closeModal()
      }
  }

  return (
    <div className='addTodoModal'>
        <div className='addTodoModal__header'>
            <Header title={isEdit ? `Edit Task` : `Add Task`} fontSize={`18px`} textAlign={`center`} />
            {
              validationMessage && (<span style={{color:'red'}}>{validationMessage}</span>)
            }
            <FontAwesomeIcon style={{cursor:"pointer"}} icon={faWindowClose} color='gray' onClick={closeModal} />
        </div>
        <div className='addTodoModal__taskTitle'>
            <label htmlFor='taskTitleId'>
                <Header title={`Task Title *`} fontSize={`16px`} />
            </label>
            <input placeholder='Task Title...' className='addTodoModal__taskTitle__input' id='taskTitleId' value={ updatedTask && updatedTask.length > 0 ? updatedTask[0]?.title : taskTitle} onChange={e => setTaskTitle(e.target.value)} />
        </div>
        <div className='addTodoModal__taskDesc'>
            <label htmlFor='taskDescId'>
                <Header title={`Task Description *`} fontSize={`16px`} />
            </label>
            <input placeholder='Task Description...' className='addTodoModal__taskDesc__input' id='taskDescId' value={updatedTask && updatedTask.length > 0 ? updatedTask[0]?.desc : taskDesc} onChange={e => setTaskDesc(e.target.value)} />
        </div>
        <div className='addTodoModal__taskDuration'>
            <label htmlFor='taskDurationId'>
                <Header title={`Task Duration *`} fontSize={`16px`} />
            </label>
            <div className='addTodoModal__taskDuration__datePicker'>
              <DateRangePicker
                startDate={updatedTask && updatedTask.length > 0 ? moment(updatedTask[0]?.startDate) : startDate}
                startDateId="start-date"
                endDate={updatedTask && updatedTask.length > 0 ? moment(updatedTask[0]?.endDate) : endDate}
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
          <select onChange={e => setTaskStatus(e.target.value)} value={updatedTask && updatedTask.length > 0 ? updatedTask[0]?.status : taskStatus}>
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
            <input placeholder='Task Link...' className='addTodoModal__taskLink__input' id='taskLinkId' value={updatedTask && updatedTask.length > 0 ? updatedTask[0]?.links : taskLinks} onChange={e => setTaskLinks(e.target.value)} />
        </div>
        <div className='addTodoModal__taskTags'>
            <label htmlFor='taskTagsId'>
                <Header title={`Tags (comma seperated)`} fontSize={`16px`} />
            </label>
            <input placeholder='Tags...' className='addTodoModal__taskTags__input' id='taskTagsId' value={updatedTask && updatedTask.length > 0 ? updatedTask[0]?.tags : taskTags} onChange={e => setTaskTags(e.target.value)} />
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
import React from 'react'
import Header from '../../header/Header'
import './_addTodoModal.scss'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

const AddTodoModal = ({isEdit,
  handleTitleChange,
  handleDescChange,
  handleLinkChange,
  handleStatusChange,
  handleTagChange}) => {

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
          <select onChange={e => handleStatusChange(e)}>
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
            <input placeholder='Task Link...' className='addTodoModal__taskLink__input' id='taskLinkId' onChange={e => handleLinkChange(e)} />
        </div>
        <div className='addTodoModal__taskTags'>
            <label htmlFor='taskTagsId'>
                <Header title={`Tags (comma seperated)`} fontSize={`16px`} />
            </label>
            <input placeholder='Tags...' className='addTodoModal__taskTags__input' id='taskTagsId' onChange={e => handleTagChange(e)} />
        </div>
        <div className='addTodoModal__taskDuration'>
            <label htmlFor='taskDurationId'>
                <Header title={`Task Duration *`} fontSize={`16px`} />
            </label>
            <DateRangePicker
            className='addTodoModal__taskDuration__datePicker'
  // startDate={this.state.startDate} // momentPropTypes.momentObj or null,
  // startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  // endDate={this.state.endDate} // momentPropTypes.momentObj or null,
  // endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  // onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
  // focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  // onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
/>
        </div>
    </div>
  )
}

export default AddTodoModal
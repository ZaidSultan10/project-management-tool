import React, { useEffect } from 'react'
import Button from '../button/Button'
import Header from '../header/Header'
import './_todosMain.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/fontawesome-free-solid'
import { useState } from 'react'
import TodoFilters from './todoFilters/TodoFilters'
import {faChevronDown,faChevronUp,faFilter} from '@fortawesome/fontawesome-free-solid'
import TodoMainCard from './todoMainCard/TodoMainCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTasks } from '../../actions/task'

const TodosMain = () => {

  const [search,setSearch] = useState('')
  const dispatch = useDispatch()
  const {tasks} = useSelector(state => state?.task)

  const todoTasks = tasks && tasks.filter(elem => elem.status === 'To Do')
  const inProgressTasks = tasks && tasks.filter(elem => elem.status === 'In Progress')
  const inReviewTasks = tasks && tasks.filter(elem => elem.status === 'To Be Reviewed')

  useEffect(() => {
    const getAllTasksFunc = async () => {
      await dispatch(getAllTasks)
    }
    getAllTasksFunc()
  },[dispatch])

  const handleSearchChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const handleSearchSubmit =() => {
    console.log('search...--->',search)
    setSearch('')
  }

  return (
    <div className='todosMain'>
        <div className='todosMain__header'>
          <div className='todosMain__header__left'>
            <Header title={`Team Tasks`} fontSize={`24px`} />
          </div>
          <div className='todosMain__header__right'>
            <div className='todosMain__header__right__search'>
              <input placeholder='Search...' value={search} onChange={(e) => handleSearchChange(e)} />
              <FontAwesomeIcon onClick={handleSearchSubmit} icon={faSearch} style={{position:'absolute',left:'15px',top:'13px',color:'gray',fontSize:'18px',cursor:'pointer'}} />
            </div>
            <Button title={`Create Task`} backgroundColor={`rgba(4, 187, 111, 0.716)`} color={`white`} />
          </div>
        </div>
        <div className='todosMain__filters'>
          <div className='todosMain__filters__left'>
            <TodoFilters leftIcon={faFilter} title={`Filter`} rightIcon={faChevronDown} />
          </div>
          <div className='todosMain__filters__right'>
              <div className='todosMain__filters__right__sort'>
                <TodoFilters title={`Sort`} rightIcon={faChevronDown} />
              </div>
              <div className='todosMain__filters__right__group'>
                <TodoFilters title={`Group By`} rightIcon={faChevronDown} />
              </div>
          </div>
        </div>
        <div className='todosMain__statusCards'>
          <TodoMainCard tasks={todoTasks} noTask = {todoTasks && todoTasks.length > 0 ? false : true} headingTitle={`To Do`} count={todoTasks && todoTasks.length > 0 ? todoTasks.length : 0} />
          <TodoMainCard tasks={inProgressTasks} noTask = {inProgressTasks && inProgressTasks.length > 0 ? false : true} headingTitle={`In Progress`} count={inProgressTasks && inProgressTasks.length > 0 ? inProgressTasks.length : 0} />
          <TodoMainCard tasks={inReviewTasks} noTask = {inReviewTasks && inReviewTasks.length > 0 ? false : true} headingTitle={`In Review`} count={inReviewTasks && inReviewTasks.length > 0 ? inReviewTasks.length : 0} />
        </div>
    </div>
  )
}

export default TodosMain
import React from 'react'
import TodosMain from '../../components/todosMain/TodosMain'
import './_mainPage.scss'

const MainPage = () => {
  return (
    <div className='mainPage'>
        <div className='mainPage__left'>
            <h1>left side having only 25%</h1>
        </div>
        <div className='mainPage__right'>
            <TodosMain />
        </div>
    </div>
  )
}

export default MainPage
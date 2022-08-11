import React from 'react'
import LeftSidebar from '../../components/leftSidebar/LeftSidebar'
import TodosMain from '../../components/todosMain/TodosMain'
import './_mainPage.scss'

const MainPage = () => {
  return (
    <div className='mainPage'>
        <div className='mainPage__left'>
            <LeftSidebar />
        </div>
        <div className='mainPage__right'>
            <TodosMain />
        </div>
    </div>
  )
}

export default MainPage
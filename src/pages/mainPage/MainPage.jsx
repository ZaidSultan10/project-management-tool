import React from 'react'
import LeftSidebar from '../../components/leftSidebar/LeftSidebar'
import TodosMain from '../../components/todosMain/TodosMain'
import './_mainPage.scss'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from '../../components/dashboard/Dashboard';
import Teams from '../../components/teams/Teams';

const MainPage = () => {
  return (
    <div className='mainPage'>
      <BrowserRouter>
        <div className='mainPage__left'>
            <LeftSidebar />
        </div>
        <div className='mainPage__right'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path="Tasks" element={<TodosMain />} />
              <Route path='Teams' element={<Teams />} />
            </Routes>
            {/* <TodosMain /> */}
        </div>
      </BrowserRouter>
    </div>
  )
}

export default MainPage
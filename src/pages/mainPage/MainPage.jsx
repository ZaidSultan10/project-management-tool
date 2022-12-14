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
import Messages from '../../components/messages/Messages';
import Calender from '../../components/calender/Calender';
import Activity from '../../components/activity/Activity';
import MyProfile from '../../components/myProfile/MyProfile';

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
              <Route path='Messages' element={<Messages />} />
              <Route path='Calender' element={<Calender />} />
              <Route path='Activity' element={<Activity />} />
              <Route path='MyProfile' element={<MyProfile />} />
            </Routes>
            {/* <TodosMain /> */}
        </div>
      </BrowserRouter>
    </div>
  )
}

export default MainPage